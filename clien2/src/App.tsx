import { useState, useEffect } from 'react';
import { BlogHeader } from './components/BlogHeader';
import { BlogCard } from './components/BlogCard';
import { BlogPost } from './components/BlogPost';
import { About } from './components/About';
import { AdminPanel } from './components/AdminPanel';

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

const blogPosts: Post[] = [
  {
    id: 1,
    title: "Mùa hoa anh đào - Khoảnh khắc đẹp nhất năm ở Tokyo",
    excerpt: "Chia sẻ về trải nghiệm ngắm hoa sakura lần đầu tiên tại Nhật Bản. Từ Ueno Park đến sông Meguro, những địa điểm ngắm hoa đẹp nhất và ý nghĩa sâu sắc của mùa hoa này.",
    content: `Mùa xuân đến, Tokyo chuyển mình trong sắc hồng của hoa anh đào. Đây là khoảnh khắc mà người Nhật chờ đợi suốt cả năm, và đối với mình - một người nước ngoài - trải nghiệm này thật sự khó quên.

Ueno Park là địa điểm đầu tiên mình đến để ngắm sakura. Hàng ngàn cây hoa nở rộ tạo thành con đường hoa tuyệt đẹp. Người Nhật có truyền thống hanami - ngồi dưới gốc cây hoa anh đào, thưởng thức đồ ăn và uống sake cùng bạn bè, gia đình. Không khí vừa trang trọng vừa vui tươi.

Sông Meguro về đêm là một trải nghiệm hoàn toàn khác. Những cây hoa được chiếu sáng lung linh, phản chiếu xuống mặt nước tạo nên khung cảnh lãng mạn không thể tả. Mình và bạn bè đi dạo dọc sông, mua takoyaki từ những quầy hàng ven đường, tận hưởng không khí lễ hội.

Hoa anh đào chỉ nở trong khoảng 1-2 tuần, nhắc nhở chúng ta về vẻ đẹp phù du của cuộc sống. Người Nhật gọi đó là "mono no aware" - cảm xúc khi nhận ra vẻ đẹp của sự vô thường. Đó chính là triết lý sống mà mình học được từ mùa hoa này.`,
    image: "https://images.unsplash.com/photo-1617599137346-98e7c279ebe6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYXBhbiUyMGNoZXJyeSUyMGJsb3Nzb218ZW58MXx8fHwxNzYyODI4MzYzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    date: "05 Tháng 4, 2025",
    category: "Văn hóa",
    readTime: "5",
    author: "Hana"
  },
  {
    id: 2,
    title: "Khám phá ẩm thực đường phố Tokyo buổi đêm",
    excerpt: "Từ ramen nóng hổi đến takoyaki thơm ngon, hành trình khám phá những món ăn đường phố ngon nhất Tokyo. Chia sẻ địa đi���m và kinh nghiệm thưởng thức đồ ăn Nhật Bản.",
    content: `Một trong những điều mình yêu thích nhất ở Tokyo là văn hóa ẩm thực đường phố phong phú. Mỗi góc phố đều có một câu chuyện ẩm thực riêng, và buổi đêm là thời điểm tuyệt vời nhất để khám phá.

Ramen là món không thể bỏ qua. Những quán ramen nhỏ ở Shinjuku thường mở cửa đến tận 3-4 giờ sáng, phục vụ những người về muộn sau giờ làm việc. Tô ramen nóng hổi với nước dùng đậm đà, mì dai ngon, và thịt xá xíu mềm tan trong miệng - đó là món ăn an ủi tuyệt vời sau một ngày dài.

Takoyaki ở khu vực Harajuku cũng là một trải nghiệm tuyệt vời. Những quả bóng bột chiên giòn bên ngoài, mềm bên trong, với nhân bạch tuộc tươi ngon. Nhìn người bán lão luyện trở những quả takoyaki trên vỉ nướng nóng là cả một nghệ thuật.

Điều đặc biệt ở Nhật là sự tận tâm của những người làm ẩm thực. Dù là quán ăn đường phố nhỏ hay nhà hàng sang trọng, họ đều đặt tâm huyết vào từng món ăn. Đó là lý do tại sao đồ ăn Nhật luôn ngon và đáng tin cậy.`,
    image: "https://images.unsplash.com/photo-1509680859026-7d8cfc6894f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYXBhbmVzZSUyMGZvb2QlMjByYW1lbnxlbnwxfHx8fDE3NjI4MjYzMDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    date: "28 Tháng 3, 2025",
    category: "Ẩm thực",
    readTime: "4",
    author: "Hana"
  },
  {
    id: 3,
    title: "Cuộc sống công sở tại Nhật - Những điều thú vị và bất ngờ",
    excerpt: "Chia sẻ về trải nghiệm làm việc tại một công ty Nhật Bản. Văn hóa công sở, cách giao tiếp, và những bài học quý giá về sự chuyên nghiệp và trách nhiệm.",
    content: `Làm việc tại một công ty Nhật Bản là một trải nghiệm đầy bài học. Ngay từ ngày đầu tiên, mình đã nhận ra sự khác biệt lớn so với văn hóa làm việc ở Việt Nam.

Người Nhật vô cùng coi trọng đúng giờ. Họ thường đến văn phòng sớm 15-20 phút và ít khi về đúng giờ. Buổi sáng bắt đầu bằng cuộc họp ngắn 5-10 phút để cập nhật tiến độ công việc. Mọi người đều lắng nghe cẩn thận và ghi chép kỹ lưỡng.

Sự tôn trọng cấp trên và đồng nghiệp được thể hiện qua cách xưng hô và cúi chào. Ban đầu mình cảm thấy hơi ngượng ngùng nhưng dần dần quen và hiểu được giá trị của nó - đó là cách thể hiện sự tôn trọng lẫn nhau trong môi trường làm việc.

Nomikai - bữa tiệc sau giờ làm việc - là một phần quan trọng của văn hóa công sở. Đây là lúc mọi người thư giãn, tâm sự và gắn kết với nhau. Mình đã học được rất nhiều điều và hiểu đồng nghiệp hơn qua những buổi nomikai này.

Dù áp lực công việc đôi khi cao, nhưng sự chuyên nghiệp, tinh thần trách nhiệm và văn hóa học hỏi liên tục ở Nhật đã giúp mình trưởng thành rất nhiều trong sự nghiệp.`,
    image: "https://images.unsplash.com/photo-1602295456965-49e52ca85874?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYXBhbiUyMGxpZmUlMjBzdHVkZW50fGVufDF8fHx8MTc2MjgyODM2NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    date: "15 Tháng 3, 2025",
    category: "Cuộc sống",
    readTime: "6",
    author: "Hana"
  },
  {
    id: 4,
    title: "Tham quan những ngôi đền cổ kính ở Kyoto",
    excerpt: "Chuyến du lịch Kyoto đầy ấn tượng. Từ Kinkaku-ji đến Fushimi Inari, khám phá vẻ đẹp kiến trúc và tâm linh của những ngôi đền lịch sử hàng trăm năm tuổi.",
    content: `Kyoto - cố đô của Nhật Bản - là nơi lưu giữ hồn cốt văn hóa truyền thống. Chuyến đi của mình kéo dài 3 ngày nhưng cảm giác như được quay ngược thời gian về quá khứ huy hoàng của đất nước này.

Kinkaku-ji (Chùa Vàng) là điểm đến đầu tiên. Ngôi chùa phủ vàng lấp lánh bên hồ nước trong vắt, được bao quanh bởi vườn cây xanh mát - khung cảnh đẹp như trong tranh. Người ta nói rằng vào mùa thu với lá đỏ hoặc mùa đông tuyết trắng, nơi đây còn đẹp hơn nữa.

Fushimi Inari với hàng nghìn cổng torii đỏ rực là trải nghiệm không thể quên. Mình đã dành cả buổi chiều để leo lên núi, đi qua từng cổng torii, cảm nhận năng lượng tâm linh đặc biệt nơi đây. Đường leo tuy hơi vất vả nhưng phong cảnh từ trên cao nhìn xuống thành phố Kyoto vô cùng tuyệt đẹp.

Arashiyama Bamboo Grove là một điểm đến khác không thể bỏ qua. Bước vào khu rừng tre xanh ngát, ánh sáng lọc qua những thân tre cao vút, tiếng tre rì rào trong gió - tất cả tạo nên một không gian thanh tịnh, an yên khó tả.

Kyoto đã dạy mình về sự tôn trọng truyền thống, về cách người Nhật giữ gìn và trân trọng di sản văn hóa của mình. Đó là bài học quý giá về lòng tự hào dân tộc.`,
    image: "https://images.unsplash.com/photo-1721308339222-79a6fa9d3b67?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYXBhbiUyMHRlbXBsZSUyMGN1bHR1cmV8ZW58MXx8fHwxNzYyODI4MzY0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    date: "02 Tháng 3, 2025",
    category: "Du lịch",
    readTime: "5",
    author: "Hana"
  }
];

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'about' | 'admin'>('home');
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('Tất cả');
  const [posts, setPosts] = useState<Post[]>([]);

  // Load posts from localStorage on mount
  useEffect(() => {
    const savedPosts = localStorage.getItem('blogPosts');
    if (savedPosts) {
      setPosts(JSON.parse(savedPosts));
    } else {
      setPosts(blogPosts);
    }
  }, []);

  // Save posts to localStorage whenever they change
  useEffect(() => {
    if (posts.length > 0) {
      localStorage.setItem('blogPosts', JSON.stringify(posts));
    }
  }, [posts]);

  const handleAddPost = (newPost: Post) => {
    setPosts([newPost, ...posts]);
  };

  const handleDeletePost = (id: number) => {
    setPosts(posts.filter(post => post.id !== id));
  };

  const categories = ['Tất cả', 'Văn hóa', 'Ẩm thực', 'Cuộc sống', 'Du lịch'];
  
  const filteredPosts = activeCategory === 'Tất cả' 
    ? posts 
    : posts.filter(post => post.category === activeCategory);

  const handleNavigate = (page: 'home' | 'about' | 'admin') => {
    setCurrentPage(page);
    setSelectedPost(null);
  };

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
              <h1 className="text-white mb-6">
                🌸 Chào mừng đến với Blog của Hana
              </h1>
              <p className="text-xl text-pink-100">
                Khám phá cuộc sống ở Nhật Bản qua những câu chuyện hàng ngày. 
                Từ văn hóa, ẩm thực đến những trải nghiệm thú vị tại xứ sở hoa anh đào.
              </p>
            </div>
          </div>
        </section>
        
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
            <h2 className="text-pink-600">
              Bài viết mới nhất
            </h2>
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button 
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    activeCategory === category
                      ? 'bg-pink-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-pink-100'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {filteredPosts.map((post) => (
              <BlogCard
                key={post.id}
                {...post}
                onClick={() => setSelectedPost(post)}
              />
            ))}
          </div>
        </section>
        
        <section className="bg-white border-t py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="mb-4 text-pink-600">
              Đăng ký nhận tin
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Nhận những câu chuyện mới nhất về cuộc sống Nhật Bản ngay vào email của bạn
            </p>
            <div className="flex gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Email của bạn"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-600"
              />
              <button className="px-6 py-3 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors">
                Đăng ký
              </button>
            </div>
          </div>
        </section>
      </main>
      
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-white mb-4">
                🌸 Hana's Japan Life
              </h3>
              <p className="text-gray-400">
                Chia sẻ về cuộc sống, văn hóa và trải nghiệm tại Nhật Bản
              </p>
            </div>
            <div>
              <h4 className="text-white mb-4">Chủ đề</h4>
              <ul className="space-y-2 text-gray-400">
                <li><button onClick={() => setActiveCategory('Văn hóa')} className="hover:text-pink-400 transition-colors">Văn hóa</button></li>
                <li><button onClick={() => setActiveCategory('Ẩm thực')} className="hover:text-pink-400 transition-colors">Ẩm thực</button></li>
                <li><button onClick={() => setActiveCategory('Cuộc sống')} className="hover:text-pink-400 transition-colors">Cuộc sống</button></li>
                <li><button onClick={() => setActiveCategory('Du lịch')} className="hover:text-pink-400 transition-colors">Du lịch</button></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white mb-4">Về blog</h4>
              <ul className="space-y-2 text-gray-400">
                <li><button onClick={() => handleNavigate('about')} className="hover:text-pink-400 transition-colors">Giới thiệu</button></li>
                <li><button onClick={() => handleNavigate('home')} className="hover:text-pink-400 transition-colors">Trang chủ</button></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white mb-4">Kết nối</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-pink-400 transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:text-pink-400 transition-colors">Twitter</a></li>
                <li><a href="#" className="hover:text-pink-400 transition-colors">YouTube</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; 2025 Hana's Japan Life. Made with 💖 in Tokyo</p>
          </div>
        </div>
      </footer>
    </div>

    
  );
}