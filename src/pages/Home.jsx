import { useState } from 'react';
import BlogCard from '../components/BlogCard';

const SAMPLE_POSTS = [
  {
    id: 1,
    title: "Getting Started with React",
    excerpt: "Learn the basics of React and start building modern web applications.",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee",
    author: {
      name: "John Doe",
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde"
    }
  },
  {
    id: 2,
    title: "The Future of Web Development",
    excerpt: "Exploring upcoming trends and technologies in web development.",
    image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd",
    author: {
      name: "Jane Smith",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330"
    }
  }
];

export default function Home() {
  const [posts] = useState(SAMPLE_POSTS);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-dark mb-8">Latest Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map(post => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}