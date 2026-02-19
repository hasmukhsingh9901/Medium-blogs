import React from "react";

export default function Sidebar() {
  const trending = [
    {
      id: "01",
      author: "The Pragmatic Engineer",
      title: "Scaling Engineering Teams: A Guide",
    },
    {
      id: "02",
      author: "UX Collective",
      title: "Why Minimalism is Still Winning in 2024",
    },
    {
      id: "03",
      author: "Better Programming",
      title: "Stop Using 'if-else' everywhere",
    },
  ];

  const topics = [
    "Programming",
    "Design",
    "Productivity",
    "Writing",
    "Self Improvement",
    "Relationships",
  ];

  return (
    <aside className="space-y-10 lg:sticky lg:top-24">
      <div>
        <h3 className="text-sm font-bold uppercase tracking-wider mb-5">
          What's Trending
        </h3>
        <div className="space-y-6">
          {trending.map((item) => (
            <div
              key={item.id}
              className="flex gap-4 items-start group cursor-pointer"
            >
              <span className="text-3xl font-bold text-black/10">
                {item.id}
              </span>
              <div className="space-y-1">
                <span className="text-xs font-bold">{item.author}</span>
                <h4 className="text-sm font-bold line-clamp-2 group-hover:text-black/60 transition-colors">
                  {item.title}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="pt-8 border-t border-black/10">
        <h3 className="text-sm font-bold uppercase tracking-wider mb-5">
          Recommended Topics
        </h3>
        <div className="flex flex-wrap gap-2">
          {topics.map((topic) => (
            <a
              key={topic}
              href="#"
              className="px-4 py-2 bg-black/[0.04] hover:bg-black/10 rounded-full text-xs font-medium transition-colors"
            >
              {topic}
            </a>
          ))}
        </div>
      </div>

      <footer className="pt-10 flex flex-wrap gap-4 text-xs text-black/50 font-medium">
        <a href="#">Help</a>
        <a href="#">Status</a>
        <a href="#">Writers</a>
        <a href="#">Blog</a>
        <a href="#">Careers</a>
        <a href="#">Privacy</a>
        <a href="#">Terms</a>
      </footer>
    </aside>
  );
}
