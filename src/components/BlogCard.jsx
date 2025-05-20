import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function BlogCard({ post }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
    >
      <img 
        src={post.image} 
        alt={post.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
        <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img
              src={post.author.avatar}
              alt={post.author.name}
              className="w-8 h-8 rounded-full"
            />
            <span className="text-sm text-gray-600">{post.author.name}</span>
          </div>
          <Link 
            to={`/post/${post.id}`}
            className="text-primary hover:text-secondary"
          >
            Read more →
          </Link>
        </div>
      </div>
    </motion.div>
  );
}