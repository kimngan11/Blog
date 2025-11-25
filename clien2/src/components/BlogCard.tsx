import { ImageWithFallback } from './figma/ImageWithFallback';

interface BlogCardProps {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  category: string;
  readTime: string;
  onClick: () => void;
}

export function BlogCard({ title, excerpt, image, date, category, readTime, onClick }: BlogCardProps) {
  return (
    <article 
      onClick={onClick}
      className="group cursor-pointer bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
    >
      <div className="relative h-48 overflow-hidden">
        <ImageWithFallback
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-pink-500 text-white rounded-full text-sm">
            {category}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
          <time>{date}</time>
          <span>•</span>
          <span>{readTime} phút đọc</span>
        </div>
        
        <h2 className="mb-3 group-hover:text-pink-600 transition-colors">
          {title}
        </h2>
        
        <p className="text-gray-600 line-clamp-3">
          {excerpt}
        </p>
        
        <div className="mt-4 flex items-center text-pink-600 group-hover:gap-2 transition-all">
          <span>Đọc thêm</span>
          <svg 
            className="w-4 h-4 group-hover:translate-x-1 transition-transform" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </article>
  );
}