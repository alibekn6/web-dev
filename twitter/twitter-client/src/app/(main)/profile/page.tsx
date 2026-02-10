import Link from "next/link";
import Post from "@/components/Post";
import { currentUser, getUserPosts } from "@/data/mockData";
import { BackArrowIcon, CalendarIcon, LocationIcon } from "@/components/icons";
import Image from 'next/image'

export default function ProfilePage() {
  const userPosts = getUserPosts(currentUser.username);

  return (
    <div className="flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-black/80 backdrop-blur-md border-b border-x-border">
        <div className="flex items-center gap-6 px-4 py-1">
          <Link
            href="/home"
            className="p-2 -ml-2 rounded-full hover:bg-white/10 transition-colors"
          >
            <BackArrowIcon className="w-5 h-5" />
          </Link>
          <div>
            <h1 className="text-xl font-bold">{currentUser.name}</h1>
            <p className="text-x-gray text-sm">{userPosts.length} posts</p>
          </div>
        </div>
      </header>

      {/* Banner */}
      <div className="relative">
        <div className="h-50 bg-x-dark-gray">
          <Image
            src={currentUser.banner}
            alt="Banner"
            width={600}
            height={200}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Avatar */}
        <div className="absolute -bottom-16.75 left-4">
          <div className="w-33.5 h-33.5 rounded-full border-4 border-black overflow-hidden bg-black">
            <Image
              src={currentUser.avatar}
              alt={currentUser.name}
              width={134}
              height={134}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Profile Info */}
      <div className="px-4 pt-3">
        {/* Edit Profile Button */}
        <div className="flex justify-end mb-12">
          <button className="border border-x-border text-white font-bold px-4 py-1.5 rounded-full hover:bg-white/10 transition-colors">
            Edit profile
          </button>
        </div>

        {/* Name and Username */}
        <div className="mt-1">
          <h2 className="text-xl font-bold">{currentUser.name}</h2>
          <p className="text-x-gray">@{currentUser.username}</p>
        </div>

        {/* Bio */}
        <p className="mt-3">{currentUser.bio}</p>

        {/* Location and Join Date */}
        <div className="flex items-center gap-4 mt-3 text-x-gray">
          <div className="flex items-center gap-1">
            <LocationIcon className="w-4.5 h-4.5" />
            <span>{currentUser.location}</span>
          </div>
          <div className="flex items-center gap-1">
            <CalendarIcon className="w-4.5 h-4.5" />
            <span>Joined {currentUser.joinedDate}</span>
          </div>
        </div>

        {/* Following/Followers */}
        <div className="flex items-center gap-4 mt-3">
          <Link href="#" className="hover:underline">
            <span className="font-bold">{currentUser.following}</span>
            <span className="text-x-gray ml-1">Following</span>
          </Link>
          <Link href="#" className="hover:underline">
            <span className="font-bold">{currentUser.followers}</span>
            <span className="text-x-gray ml-1">Followers</span>
          </Link>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex mt-4 border-b border-x-border">
        {["Posts", "Replies", "Highlights", "Media", "Likes"].map(
          (tab, index) => (
            <button
              key={tab}
              className={`flex-1 py-4 hover:bg-white/10 transition-colors relative ${
                index === 0 ? "font-bold" : "text-x-gray"
              }`}
            >
              {tab}
              {index === 0 && (
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-14 h-1 bg-x-blue rounded-full" />
              )}
            </button>
          )
        )}
      </div>

      {/* User's Posts */}
      <div>
        {userPosts.length > 0 ? (
          userPosts.map((post) => <Post key={post.id} post={post} />)
        ) : (
          <div className="px-4 py-8 text-center">
            <h3 className="text-xl font-bold">No posts yet</h3>
            <p className="text-x-gray mt-1">
              When {currentUser.name} posts, they will show up here.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
