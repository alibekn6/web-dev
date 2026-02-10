import Image from "next/image";
import Post from "@/components/Post";
import { posts, currentUser } from "@/data/mockData";
import { ImageIcon, GifIcon, EmojiIcon } from "@/components/icons";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <header className="sticky top-0 z-10 bg-black/80 backdrop-blur-md border-b border-x-border">
        <h1 className="px-4 py-3 text-xl font-bold">Home</h1>
      </header>

      <div className="border-b border-x-border px-4 py-3">
        <div className="flex gap-3">
          <Image
            src={currentUser.avatar}
            alt={currentUser.name}
            width={40}
            height={40}
            className="w-10 h-10 rounded-full bg-x-gray shrink-0"
          />
          <div className="flex-1">
            <div className="py-3">
              <input
                type="text"
                placeholder="What is happening?!"
                className="w-full bg-transparent text-xl placeholder-x-gray outline-none"
                readOnly
              />
            </div>
            <div className="flex items-center justify-between border-t border-x-border pt-3">
              <div className="flex items-center gap-1">
                <button className="p-2 rounded-full hover:bg-x-blue/10 transition-colors">
                  <ImageIcon className="w-5 h-5 text-x-blue" />
                </button>
                <button className="p-2 rounded-full hover:bg-x-blue/10 transition-colors">
                  <GifIcon className="w-5 h-5 text-x-blue" />
                </button>
                <button className="p-2 rounded-full hover:bg-x-blue/10 transition-colors">
                  <EmojiIcon className="w-5 h-5 text-x-blue" />
                </button>
              </div>
              <button className="bg-x-blue hover:bg-x-blue/90 text-white font-bold px-4 py-1.5 rounded-full transition-colors opacity-50 cursor-not-allowed">
                Post
              </button>
            </div>
          </div>
        </div>
      </div>

      <div>
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
