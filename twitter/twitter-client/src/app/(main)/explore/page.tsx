import { SearchIcon, SettingsIcon } from "@/components/icons";
import Image from 'next/image'

export default function ExplorePage() {
  return (
    <div className="flex flex-col">
      <header className="sticky top-0 z-10 bg-black/80 backdrop-blur-md px-4 py-2">
        <div className="flex items-center gap-3">
          <div className="flex-1 relative">
            <div className="absolute left-4 top-1/2 -translate-y-1/2">
              <SearchIcon className="w-5 h-5 text-x-gray" />
            </div>
            <input
              type="text"
              placeholder="Search"
              className="w-full bg-x-dark-gray rounded-full py-3 pl-12 pr-4 text-white placeholder-x-gray outline-none focus:ring-1 focus:ring-x-blue focus:bg-transparent transition-colors"
            />
          </div>
          <button className="p-2 rounded-full border border-x-border hover:bg-white/10 transition-colors">
            <SettingsIcon className="w-5 h-5" />
          </button>
        </div>
      </header>

      <div className="border-b border-x-border">
        <div className="px-4 py-3">
          <h2 className="text-xl font-bold">Trends for you</h2>
        </div>

        {[
          { category: "Technology", topic: "React 19", posts: "125K" },
          { category: "Programming", topic: "TypeScript", posts: "89.2K" },
          { category: "Tech", topic: "Next.js", posts: "45.1K" },
          { category: "Development", topic: "Tailwind CSS", posts: "32.8K" },
          { category: "AI", topic: "Claude", posts: "28.5K" },
        ].map((trend, index) => (
          <div
            key={index}
            className="px-4 py-3 hover:bg-white/3 transition-colors cursor-pointer"
          >
            <p className="text-x-gray text-sm">{trend.category} · Trending</p>
            <p className="font-bold mt-0.5">{trend.topic}</p>
            <p className="text-x-gray text-sm mt-0.5">{trend.posts} posts</p>
          </div>
        ))}

        <div className="px-4 py-3 hover:bg-white/3 transition-colors cursor-pointer">
          <span className="text-x-blue">Show more</span>
        </div>
      </div>

      <div className="py-3">
        <div className="px-4 py-2">
          <h2 className="text-xl font-bold">Who to follow</h2>
        </div>

        {[
          {
            name: "React",
            username: "reactjs",
            avatar: "https://picsum.photos/100/100?random=20",
            verified: true,
          },
          {
            name: "Vercel",
            username: "vercel",
            avatar: "https://picsum.photos/100/100?random=21",
            verified: true,
          },
          {
            name: "Tailwind CSS",
            username: "tailwindcss",
            avatar: "https://picsum.photos/100/100?random=22",
            verified: true,
          },
        ].map((user, index) => (
          <div
            key={index}
            className="flex items-center gap-3 px-4 py-3 hover:bg-white/3 transition-colors cursor-pointer"
          >
            <Image
              src={user.avatar}
              alt={user.name}
              width={40}
              height={40}
              className="w-10 h-10 rounded-full bg-x-gray"
            />
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1">
                <span className="font-bold truncate">{user.name}</span>
                {user.verified && (
                  <svg
                    viewBox="0 0 22 22"
                    className="w-4.5 h-4.5 shrink-0"
                    fill="#1d9bf0"
                  >
                    <path d="M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.854-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.688-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.606-.274 1.263-.144 1.896.13.634.433 1.218.877 1.688.47.443 1.054.747 1.687.878.633.132 1.29.084 1.897-.136.274.586.705 1.084 1.246 1.439.54.354 1.17.551 1.816.569.647-.016 1.276-.213 1.817-.567s.972-.854 1.245-1.44c.604.239 1.266.296 1.903.164.636-.132 1.22-.447 1.68-.907.46-.46.776-1.044.908-1.681s.075-1.299-.165-1.903c.586-.274 1.084-.705 1.439-1.246.354-.54.551-1.17.569-1.816zM9.662 14.85l-3.429-3.428 1.293-1.302 2.072 2.072 4.4-4.794 1.347 1.246z" />
                  </svg>
                )}
              </div>
              <span className="text-x-gray text-sm">@{user.username}</span>
            </div>
            <button className="bg-white text-black font-bold px-4 py-1.5 rounded-full hover:bg-white/90 transition-colors">
              Follow
            </button>
          </div>
        ))}

        <div className="px-4 py-3 hover:bg-white/3 transition-colors cursor-pointer">
          <span className="text-x-blue">Show more</span>
        </div>
      </div>
    </div>
  );
}
