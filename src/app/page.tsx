export default function Home() {
  return (
    <div className="container mx-auto px-4 py-20">
      <section className="flex flex-col items-center text-center space-y-8">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">
          RoyalDiadem Research & Laboratory
        </h1>
        <p className="text-xl text-muted-foreground max-w-[700px]">
          Official authorized agent and representative of Altek, Inc. Providing world-class research and laboratory services.
        </p>
        <div className="flex gap-4">
          <button className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-10 px-8">
            Get Started
          </button>
          <button className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-10 px-8">
            Learn More
          </button>
        </div>
      </section>
    </div>
  );
}
