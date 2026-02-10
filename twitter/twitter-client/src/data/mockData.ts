// Mock posts data
export interface Author {
  name: string;
  username: string;
  avatar: string;
  verified: boolean;
}

export interface Post {
  id: string;
  author: Author;
  content: string;
  image?: string;
  likes: number;
  comments: number;
  reposts: number;
  timestamp: string;
}

export interface User {
  name: string;
  username: string;
  avatar: string;
  banner: string;
  bio: string;
  location: string;
  joinedDate: string;
  following: number;
  followers: number;
}

export const posts: Post[] = [
  {
    id: "1",
    author: {
      name: "John Doe",
      username: "johndoe",
      avatar: "https://picsum.photos/100/100?random=1",
      verified: true,
    },
    content:
      "Look at this beautiful city, Almaty, welcome!.",
    image: "https://www.advantour.com/img/kazakhstan/images/almaty.jpg",
    likes: 1234,
    comments: 56,
    reposts: 89,
    timestamp: "2h",
  },
  {
    id: "2",
    author: {
      name: "Sarah Chen",
      username: "sarahcodes",
      avatar: "https://picsum.photos/100/100?random=2",
      verified: true,
    },
    content:
      "Hot take: TypeScript has made JavaScript development 10x better. Fight me.",
    likes: 892,
    comments: 234,
    reposts: 156,
    timestamp: "4h",
  },
  {
    id: "3",
    author: {
      name: "Alibek",
      username: "alibekcode",
      avatar: "https://picsum.photos/100/100?random=3",
      verified: false,
    },
    content:
      "Guess where am i ?",
    image: "https://weproject.media/upload/iblock/9a4/9a419b5c847f00ca2687959743acadf6.jpg",
    likes: 45,
    comments: 12,
    reposts: 8,
    timestamp: "6h",
  },
  {
    id: "4",
    author: {
      name: "Dev Community",
      username: "devcomm",
      avatar: "https://picsum.photos/100/100?random=4",
      verified: true,
    },
    content:
      "What's your favorite programming language in 2026? Drop your answers below!",
    likes: 3421,
    comments: 892,
    reposts: 234,
    timestamp: "8h",
  },
  {
    id: "5",
    author: {
      name: "Tech News",
      username: "technews",
      avatar: "https://picsum.photos/100/100?random=5",
      verified: true,
    },
    content:
      "Clawdbot: the $5/month AI assistant that actually messages you first, A friendly guide to the open-source AI assistant everyone’s talking about.",
    image: "https://miro.medium.com/v2/resize:fit:1200/1*zvQmK9Vdyu9XrsXOeR0ksA.jpeg",
    likes: 5678,
    comments: 1234,
    reposts: 890,
    timestamp: "12h",
  },
  {
    id: "6",
    author: {
      name: "Alibek",
      username: "alibekcode",
      avatar: "https://picsum.photos/100/100?random=3",
      verified: false,
    },
    content:
      "Just learned about Tailwind CSS v4. The new features are incredible! No more config files needed.",
    likes: 78,
    comments: 23,
    reposts: 15,
    timestamp: "1d",
  },
  {
    id: "7",
    author: {
      name: "React Official",
      username: "reactjs",
      avatar: "https://picsum.photos/100/100?random=6",
      verified: true,
    },
    content:
      "React 19 is now stable! Check out the new features including Actions, use() hook, and improved Server Components.",
    image: "https://picsum.photos/600/400?random=4",
    likes: 15234,
    comments: 2341,
    reposts: 4521,
    timestamp: "2d",
  },
];

// Mock user profile data
export const currentUser: User = {
  name: "Alibek",
  username: "alibekcode",
  avatar: "https://www.linuxadictos.com/wp-content/uploads/Linus-Torvalds-1.jpg",
  banner: "https://picsum.photos/600/200?random=10",
  bio: "swe | building cool stuff",
  location: "Almaty, Kazakhstan",
  joinedDate: "January 2023",
  following: 56,
  followers: 7,
};

export const getUserPosts = (username: string): Post[] => {
  return posts.filter((post) => post.author.username === username);
};
