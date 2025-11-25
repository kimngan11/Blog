import { useState, useEffect } from 'react';
import { BlogHeader } from './components/BlogHeader';
import { BlogCard } from './components/BlogCard';
import { BlogPost } from './components/BlogPost';
import { About } from './components/About';
import { AdminPanel } from './components/AdminPanel';
import { postsAPI, usersAPI, categoriesAPI } from './services/api';

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

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'about' | 'admin'>('home');
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('T?t c?');
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [categories, setCategories] = useState<string[]>(['T?t c?']);
  const [subscribeEmail, setSubscribeEmail] = useState('');
  const [subscribeLoading, setSubscribeLoading] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const data = await postsAPI.getAll();
        const mappedPosts = data.map((post: any) => ({
          id: post.id,
          title: post.title,
          excerpt: post.description,
          content: post.content,
          image: post.image_url,
          date: post.created_at || new Date().toLocaleDateString('vi-VN'),
          category: post.category_name || 'Ch?a phan lo?i',
          readTime: post.reading_time || '5',
          author: 'Hana',
        }));
        setPosts(mappedPosts);
        setError(null);
      } catch (err) {
        console.error('Error fetching posts:', err);
        setError('Khong th? t?i bai vi?t t? server');
        setPosts([]);
      } finally {
        setLoading(false);
      }
    };

    const fetchCategories = async () => {
      try {
        const data = await categoriesAPI.getAll();
        const categoryNames = data.map((cat: any) => cat.name);
        setCategories(['T?t c?', ...categoryNames]);
      } catch (err) {
        console.error('Error fetching categories:', err);
      }
    };

    fetchPosts();
    fetchCategories();
  }, []);

  const handleAddPost = (newPost: Post) => {
    setPosts([newPost, ...posts]);
  };

  const handleDeletePost = (id: number) => {
    setPosts(posts.filter((post: any) => post.id !== id));
  };

  const handleNavigate = (page: 'home' | 'about' | 'admin') => {
    setCurrentPage(page);
    setSelectedPost(null);
  };

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!subscribeEmail) return;
    try {
      setSubscribeLoading(true);
      await usersAPI.subscribe(subscribeEmail);
      alert('C?m ?n b?n ?a ??ng ky!');
      setSubscribeEmail('');
    } catch (err) {
      alert('Co l?i x?y ra. Vui long th? l?i!');
    } finally {
      setSubscribeLoading(false);
    }
  };

  const filteredPosts = activeCategory === 'T?t c?' 
    ? posts 
    : posts.filter((post: any) => post.category === activeCategory);

  if (currentPage === 'admin') {
    return (
      <AdminPanel
        posts={posts}
        onAddPost={handleAddPost}
        onDeletePost={handleDeletePost}
        onBack={() => handleNavigate('home')}
      />
    );
  }

  if (currentPage === 'about') {
    return (
      <>
        <BlogHeader currentPage="about" onNavigate={handleNavigate} />
        <About onNavigateHome={() => handleNavigate('home')} />
      </>
    );
  }

  if (selectedPost) {
    return (
      <>
        <BlogHeader currentPage="home" onNavigate={handleNavigate} />
        <BlogPost
          title={selectedPost.title}
          content={selectedPost.content}
          image={selectedPost.image}
          date={selectedPost.date}
          category={selectedPost.category}
          readTime={selectedPost.readTime}
          author={selectedPost.author}
          onBack={() => setSelectedPost(null)}
        />
      </>
    );
  }

  return (
    <div className="min-h-screen bg-pink-50">
      <BlogHeader currentPage="home" onNavigate={handleNavigate} />
      <main>
        <section className="bg-gradient-to-br from-pink-400 to-pink-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-white mb-6"> Chao m?ng ??n v?i Blog c?a Hana</h1>
              <p className="text-xl text-pink-100">Kham pha cu?c s?ng ? Nh?t B?n qua nh?ng cau chuy?n hang ngay.</p>
            </div>
          </div>
        </section>
        
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
            <h2 className="text-pink-600">Bai vi?t m?i nh?t</h2>
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button key={category} onClick={() => setActiveCategory(category)} className={`px-4 py-2 rounded-lg transition-colors ${activeCategory === category ? 'bg-pink-600 text-white' : 'bg-white text-gray-700 hover:bg-pink-100'}`}>
                  {category}
                </button>
              ))}
            </div>
          </div>
          {loading ? <p className="text-gray-600">?ang t?i...</p> : <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {filteredPosts.map((post) => (<BlogCard key={post.id} {...post} onClick={() => setSelectedPost(post)} />))}
          </div>}
        </section>
        
        <section className="bg-white border-t py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="mb-4 text-pink-600">??ng ky nh?n tin</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">Nh?n nh?ng cau chuy?n m?i nh?t v? cu?c s?ng Nh?t B?n</p>
            <form onSubmit={handleSubscribe} className="flex gap-4 max-w-md mx-auto">
              <input type="email" placeholder="Email c?a b?n" value={subscribeEmail} onChange={(e) => setSubscribeEmail(e.target.value)} required className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-600" />
              <button type="submit" disabled={subscribeLoading} className="px-6 py-3 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors disabled:opacity-50">{subscribeLoading ? '?ang g?i...' : '??ng ky'}</button>
            </form>
          </div>
        </section>
      </main>
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div><h3 className="text-white mb-4"> Hana''s Japan Life</h3><p className="text-gray-400">Chia s? v? cu?c s?ng Nh?t B?n</p></div>
            <div><h4 className="text-white mb-4">Ch? ??</h4><ul className="space-y-2 text-gray-400"><li><button onClick={() => setActiveCategory('V?n hoa')}>V?n hoa</button></li><li><button onClick={() => setActiveCategory('?m th?c')}>?m th?c</button></li></ul></div>
            <div><h4 className="text-white mb-4">V? blog</h4><ul className="space-y-2 text-gray-400"><li><button onClick={() => handleNavigate('about')}>Gi?i thi?u</button></li></ul></div>
            <div><h4 className="text-white mb-4">K?t n?i</h4><ul className="space-y-2 text-gray-400"><li><a href="#">Instagram</a></li></ul></div>
          </div>
          <div className="pt-8 border-t border-gray-800 text-center text-gray-400"><p>&copy; 2025 Hana''s Japan Life</p></div>
        </div>
      </footer>
    </div>
  );
}
