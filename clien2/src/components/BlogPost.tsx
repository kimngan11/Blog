import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface BlogPostProps {
  title: string;
  content: string;
  image: string;
  date: string;
  category: string;
  readTime: string;
  author: string;
  onBack: () => void;
}

export function BlogPost({ title, content, image, date, category, readTime, author, onBack }: BlogPostProps) {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-gray-600 hover:text-pink-600 transition-colors mb-8"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Quay lại</span>
        </button>
        
        <div className="mb-6">
          <span className="inline-block px-3 py-1 bg-pink-100 text-pink-600 rounded-full text-sm mb-4">
            {category}
          </span>
          <h1 className="mb-6">
            {title}
          </h1>
          
          <div className="flex items-center gap-6 text-gray-600">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full flex items-center justify-center text-white">
                {author.charAt(0)}
              </div>
              <span>{author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{readTime} phút đọc</span>
            </div>
          </div>
        </div>
        
        <div className="rounded-lg overflow-hidden mb-8">
          <ImageWithFallback
            src={image}
            alt={title}
            className="w-full h-96 object-cover"
          />
        </div>
        
        <article className="prose prose-lg max-w-none">
          {content.split('\n\n').map((paragraph, index) => (
            <p key={index} className="mb-4 text-gray-700 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </article>
        
        <div className="mt-12 pt-8 border-t">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full flex items-center justify-center text-white text-xl">
              {author.charAt(0)}
            </div>
            <div>
              <div className="text-gray-900">
                {author}
              </div>
              <p className="text-gray-600 text-sm">
                Tác giả và người sáng tạo nội dung
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}