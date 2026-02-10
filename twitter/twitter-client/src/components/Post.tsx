"use client";

import { useState } from "react";
import Link from "next/link";
import { CommentIcon, RepostIcon, LikeIcon, ShareIcon, VerifiedIcon, MoreIcon } from "./icons";
import type { Post as PostType } from "@/data/mockData";
import Image from "next/image";

interface PostProps {
  post: PostType;
}

function formatNumber(num: number): string {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1).replace(/\.0$/, "") + "M";
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1).replace(/\.0$/, "") + "K";
  }
  return num.toString();
}


export default function Post({ post }: PostProps) {
  const [liked, setLiked] = useState(false);
  const [reposted, setReposted] = useState(false);
  const [likeCount, setLikeCount] = useState(post.likes);
  const [repostCount, setRepostCount] = useState(post.reposts);

  const handleLike = () => {
    setLiked(!liked);
    setLikeCount(liked ? likeCount - 1 : likeCount + 1);
  };

  const handleRepost = () => {
    setReposted(!reposted);
    setRepostCount(reposted ? repostCount - 1 : repostCount + 1);
  };
  return (
    <article className="border-b border-x-border px-4 py-3 hover:bg-white/3 transition-colors cursor-pointer">
      <div className="flex gap-3">
        <Link href={`/${post.author.username}`} className="shrink-0">
          <Image
            src={post.author.avatar}
            alt={post.author.name}
            width={40}
            height={40}
            className="w-10 h-10 rounded-full bg-x-gray hover:opacity-90 transition-opacity"
          />
        </Link>

        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1 min-w-0">
              <Link
                href={`/${post.author.username}`}
                className="font-bold hover:underline truncate"
              >
                {post.author.name}
              </Link>
              {post.author.verified && (
                <VerifiedIcon className="w-4.5 h-4.5 shrink-0" />
              )}
              <span className="text-x-gray truncate">
                @{post.author.username}
              </span>
              <span className="text-x-gray shrink-0">·</span>
              <span className="text-x-gray hover:underline shrink-0">
                {post.timestamp}
              </span>
            </div>
            <button className="p-2 -m-2 rounded-full hover:bg-x-blue/10 hover:text-x-blue transition-colors group">
              <MoreIcon className="w-5 h-5 text-x-gray group-hover:text-x-blue" />
            </button>
          </div>

          <p className="mt-1 whitespace-pre-wrap wrap-break-word">{post.content}</p>

          {post.image && (
            <div className="mt-3 rounded-2xl overflow-hidden border border-x-border">
              <Image
                src={post.image}
                alt="Post image"
                width={600}
                height={400}
                className="w-full h-auto max-h-127.5 object-cover"
              />
            </div>
          )}

          <div className="flex items-center justify-between mt-3 max-w-106.25 -ml-2">
            <button className="flex items-center gap-1 group">
              <div className="p-2 rounded-full group-hover:bg-x-blue/10 transition-colors">
                <CommentIcon className="w-4.5 h-4.5 text-x-gray group-hover:text-x-blue transition-colors" />
              </div>
              <span className="text-sm text-x-gray group-hover:text-x-blue transition-colors">
                {formatNumber(post.comments)}
              </span>
            </button>

            <button onClick={handleRepost} className="flex items-center gap-1 group">
              <div className="p-2 rounded-full group-hover:bg-green-500/10 transition-colors">
                <RepostIcon className={`w-4.5 h-4.5 transition-colors ${
                  reposted ? "text-green-500" : "text-x-gray group-hover:text-green-500"
                }`} />
              </div>
              <span className={`text-sm transition-colors ${
                reposted ? "text-green-500" : "text-x-gray group-hover:text-green-500"
              }`}>
                {formatNumber(repostCount)}
              </span>
            </button>

            <button onClick={handleLike} className="flex items-center gap-1 group">
              <div className="p-2 rounded-full group-hover:bg-pink-500/10 transition-colors">
                <LikeIcon 
                  filled={liked}
                  className={`w-4.5 h-4.5 transition-colors ${
                    liked ? "text-pink-500" : "text-x-gray group-hover:text-pink-500"
                  }`} 
                />
              </div>
              <span className={`text-sm transition-colors ${
                liked ? "text-pink-500" : "text-x-gray group-hover:text-pink-500"
              }`}>
                {formatNumber(likeCount)}
              </span>
            </button>

            <button className="flex items-center group">
              <div className="p-2 rounded-full group-hover:bg-x-blue/10 transition-colors">
                <ShareIcon className="w-4.5 h-4.5 text-x-gray group-hover:text-x-blue transition-colors" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
