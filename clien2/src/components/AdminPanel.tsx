import { useState, useEffect } from 'react';
import { Plus, Trash2, Eye, ArrowLeft } from 'lucide-react';

interface Post {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  category: string;
  readTime: string;
  author: string;
}

interface AdminPanelProps {
  posts: Post[];
  onAddPost: (post: Post) => void;
  onDeletePost: (id: number) => void;
  onBack: () => void;
}

export function AdminPanel({ posts, onAddPost, onDeletePost, onBack }: AdminPanelProps) {
  const [formData, setFormData] = useState({
    title: '',
    excerpt: '',
    content: '',
    image: '',
    category: 'Văn hóa',
    readTime: '5'
  });

  const categories = ['Văn hóa', 'Ẩm thực', 'Cuộc sống', 'Du lịch'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.title || !formData.excerpt || !formData.content) {
      alert('Vui lòng điền đầy đủ thông tin bắt buộc!');
      return;
    }

    const newPost: Post = {
      id: Date.now(),
      title: formData.title,
      excerpt: formData.excerpt,
      content: formData.content,
      image: formData.image || 'https://images.unsplash.com/photo-1480796927426-f609979314bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      date: new Date().toLocaleDateString('vi-VN', { 
        day: '2-digit', 
        month: 'long', 
        year: 'numeric' 
      }),
      category: formData.category,
      readTime: formData.readTime,
      author: 'Hana'
    };

    onAddPost(newPost);
    
    // Reset form
    setFormData({
      title: '',
      excerpt: '',
      content: '',
      image: '',
      category: 'Văn hóa',
      readTime: '5'
    });

    alert('Bài viết đã được đăng thành công! 🎉');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-pink-50">
      <div className="bg-white border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <button
                onClick={onBack}
                className="p-2 hover:bg-pink-50 rounded-full transition-colors"
              >
                <ArrowLeft className="w-5 h-5 text-gray-700" />
              </button>
              <h1 className="text-pink-600">
                🌸 Admin Panel
              </h1>
            </div>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form đăng bài mới */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm border p-6">
              <div className="flex items-center gap-3 mb-6">
                <Plus className="w-6 h-6 text-pink-600" />
                <h2 className="text-pink-600">Đăng bài viết mới</h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-gray-700 mb-2">
                    Tiêu đề <span className="text-pink-600">*</span>
                  </label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-600"
                    placeholder="Nhập tiêu đề bài viết..."
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">
                    Mô tả ngắn <span className="text-pink-600">*</span>
                  </label>
                  <textarea
                    name="excerpt"
                    value={formData.excerpt}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-600"
                    placeholder="Mô tả ngắn gọn về bài viết..."
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">
                    Nội dung <span className="text-pink-600">*</span>
                  </label>
                  <textarea
                    name="content"
                    value={formData.content}
                    onChange={handleChange}
                    rows={12}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-600"
                    placeholder="Viết nội dung chi tiết của bài viết..."
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 mb-2">
                      Danh mục
                    </label>
                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-600"
                    >
                      {categories.map(cat => (
                        <option key={cat} value={cat}>{cat}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-gray-700 mb-2">
                      Thời gian đọc (phút)
                    </label>
                    <input
                      type="number"
                      name="readTime"
                      value={formData.readTime}
                      onChange={handleChange}
                      min="1"
                      max="60"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-600"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">
                    URL hình ảnh
                  </label>
                  <input
                    type="url"
                    name="image"
                    value={formData.image}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-600"
                    placeholder="https://example.com/image.jpg"
                  />
                  <p className="text-sm text-gray-500 mt-1">
                    Để trống để sử dụng hình ảnh mặc định
                  </p>
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors flex items-center justify-center gap-2"
                >
                  <Plus className="w-5 h-5" />
                  Đăng bài viết
                </button>
              </form>
            </div>
          </div>

          {/* Danh sách bài viết */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm border p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-pink-600">
                  Bài viết đã đăng
                </h3>
                <span className="bg-pink-100 text-pink-600 px-3 py-1 rounded-full text-sm">
                  {posts.length}
                </span>
              </div>

              <div className="space-y-4 max-h-[600px] overflow-y-auto">
                {posts.length === 0 ? (
                  <p className="text-gray-500 text-center py-8">
                    Chưa có bài viết nào
                  </p>
                ) : (
                  posts.map(post => (
                    <div
                      key={post.id}
                      className="border rounded-lg p-4 hover:border-pink-300 transition-colors"
                    >
                      {post.image && (
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-32 object-cover rounded-lg mb-3"
                        />
                      )}
                      <h4 className="text-gray-900 mb-2 line-clamp-2">
                        {post.title}
                      </h4>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-500">{post.date}</span>
                        <button
                          onClick={() => {
                            if (confirm('Bạn có chắc muốn xóa bài viết này?')) {
                              onDeletePost(post.id);
                            }
                          }}
                          className="p-2 hover:bg-pink-50 rounded-lg transition-colors"
                        >
                          <Trash2 className="w-4 h-4 text-pink-600" />
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
