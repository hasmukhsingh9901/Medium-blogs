import React from "react";

interface PostProps {
  author: string;
  avatar: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
}

export default function PostCard({
  author,
  avatar,
  title,
  excerpt,
  date,
  readTime,
  image,
}: PostProps) {
  return (
    <article className="flex gap-6 py-6 border-b border-black/5 last:border-0 group cursor-pointer">
      <div className="flex-1 space-y-2">
        <div className="flex items-center gap-2 mb-1">
          <img
            src={avatar}
            className="w-5 h-5 rounded-full object-cover"
            alt={author}
          />
          <span className="text-sm font-semibold text-black/90">{author}</span>
        </div>

        <h2 className="text-xl font-bold font-serif leading-snug group-hover:text-black/60 transition-colors">
          {title}
        </h2>

        <p className="hidden md:block text-black/60 text-sm leading-relaxed line-clamp-2">
          {excerpt}
        </p>

        <div className="flex items-center gap-3 pt-2 text-xs text-black/50">
          <span>{date}</span>
          <span>·</span>
          <span>{readTime}</span>
          <span className="bg-black/5 px-2 py-0.5 rounded-full">New</span>
        </div>
      </div>

      <div className="w-24 h-24 md:w-40 md:h-28 shrink-0 overflow-hidden rounded-sm">
        <img
          src={image}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          alt={title}
        />
      </div>
    </article>
  );
}
