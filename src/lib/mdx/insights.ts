import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const insightsDirectory = path.join(process.cwd(), 'src/content/insights');

export function getAllInsights() {
  const fileNames = fs.readdirSync(insightsDirectory);
  const allInsightsData = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.mdx$/, '');
    const fullPath = path.join(insightsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data } = matter(fileContents);

    return {
      slug,
      ...(data as {
        title: string;
        date: string;
        excerpt: string;
        image: string;
        author: string;
        tags: string[];
      }),
    };
  });

  return allInsightsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getInsightBySlug(slug: string) {
  const fullPath = path.join(insightsDirectory, `${slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    slug,
    frontmatter: data as {
      title: string;
      date: string;
      excerpt: string;
      image: string;
      author: string;
      tags: string[];
    },
    content,
  };
}
