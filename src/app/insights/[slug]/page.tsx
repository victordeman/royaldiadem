import { getInsightBySlug } from "@/lib/mdx/insights";
import { Section } from "@/components/sections/section-wrapper";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";

export async function generateMetadata(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  try {
    const post = getInsightBySlug(params.slug);
    return {
      title: post.frontmatter.title,
      description: post.frontmatter.excerpt,
    };
  } catch (e) {
    return { title: "Article Not Found" };
  }
}

export default async function InsightPostPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  let post;
  try {
    post = getInsightBySlug(params.slug);
  } catch (e) {
    return notFound();
  }

  return (
    <main className="min-h-screen bg-background py-32">
      <Section>
        <Link href="/insights" className="text-gold flex items-center gap-2 mb-12 hover:opacity-80 transition-opacity w-fit">
          <ArrowLeft className="h-4 w-4" /> Back to Insights
        </Link>

        <article className="max-w-4xl mx-auto">
          <header className="space-y-8 mb-16">
            <div className="flex flex-wrap gap-4 items-center">
              {post.frontmatter.tags.map(tag => (
                <Badge key={tag} variant="gold" className="uppercase tracking-widest">{tag}</Badge>
              ))}
              <div className="flex items-center gap-4 text-sm text-slate-900 dark:text-white/40 font-bold uppercase tracking-widest">
                <span className="flex items-center gap-1"><Calendar className="h-4 w-4" /> {post.frontmatter.date}</span>
                <span className="flex items-center gap-1"><User className="h-4 w-4" /> {post.frontmatter.author}</span>
              </div>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white leading-tight tracking-tight">
              {post.frontmatter.title}
            </h1>

            <div className="aspect-video rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl">
              <img
                src={post.frontmatter.image}
                alt={post.frontmatter.title}
                className="w-full h-full object-cover"
              />
            </div>
          </header>

          <div className="prose prose-invert prose-gold max-w-none
            prose-headings:text-slate-900 dark:text-white prose-headings:font-bold prose-headings:tracking-tight
            prose-p:text-slate-900 dark:text-white/80 prose-p:text-lg prose-p:leading-relaxed
            prose-blockquote:border-gold prose-blockquote:bg-slate-50 dark:bg-slate-900/50 prose-blockquote:p-8 prose-blockquote:rounded-2xl prose-blockquote:not-italic prose-blockquote:text-slate-900 dark:text-white prose-blockquote:text-xl
            prose-strong:text-gold
            prose-li:text-slate-900 dark:text-white/80">
            <MDXRemote source={post.content} />
          </div>

          <footer className="mt-24 pt-12 border-t border-white/10">
             <div className="glass-premium p-12 rounded-3xl border border-white/5 flex flex-col md:flex-row items-center gap-8">
                <div className="w-20 h-20 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                   <User className="h-10 w-10 text-gold" />
                </div>
                <div className="text-center md:text-left space-y-2">
                   <h3 className="text-xl font-bold text-slate-900 dark:text-white">About the Author: {post.frontmatter.author}</h3>
                   <p className="text-slate-900 dark:text-slate-600 dark:text-slate-400">
                      Senior Technical Lead at RoyalDiadem Research & Laboratory, specializing in AI-integrated
                      manufacturing workflows and strategic industrial research.
                   </p>
                </div>
             </div>
          </footer>
        </article>
      </Section>
    </main>
  );
}
