import { Heart, MapPin, Mail, Book, Coffee, Camera } from 'lucide-react';


interface AboutProps {
  onNavigateHome: () => void;
}

export function About({ onNavigateHome }: AboutProps) {
  return (
    <div className="min-h-screen bg-pink-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-pink-400 to-pink-600 text-white py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center overflow-hidden border-4 border-white/50">
            <span className="text-6xl">🌸</span>
          </div>
          <h1 className="text-white mb-4">
            Xin chào! Mình là Hana
          </h1>
          <p className="text-xl text-pink-100 max-w-2xl mx-auto">
            Một cô gái Việt đang sống và làm việc tại Tokyo, Nhật Bản. 
            Mình chia sẻ những trải nghiệm về cuộc sống hàng ngày, văn hóa và những điều thú vị ở xứ sở hoa anh đào.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Story Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-pink-600 mb-6">
            Câu chuyện của mình
          </h2>
          <div className="space-y-4 text-gray-700">
            <p>
              Năm 2020, mình quyết định rời Việt Nam để đến Nhật Bản học tập và làm việc. 
              Đó là một quyết định lớn nhưng cũng là bước ngoặt quan trọng trong cuộc đời mình.
            </p>
            <p>
              Ban đầu, mọi thứ đều rất mới mẻ và đầy thách thức - từ ngôn ngữ, văn hóa đến cách sống. 
              Nhưng chính những khó khăn đó đã giúp mình trưởng thành và yêu quý cuộc sống ở đây hơn mỗi ngày.
            </p>
            <p>
              Blog này ra đời như một quyển nhật ký điện tử, nơi mình ghi lại những trải nghiệm, 
              cảm xúc và chia sẻ kiến thức về cuộc sống Nhật Bản đến những bạn quan tâm. 
              Hy vọng những câu chuyện của mình sẽ hữu ích và truyền cảm hứng cho bạn!
            </p>
          </div>
        </div>

        {/* Highlights Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 mx-auto mb-4 bg-pink-100 rounded-full flex items-center justify-center">
              <MapPin className="w-8 h-8 text-pink-600" />
            </div>
            <h3 className="text-pink-600 mb-2">Địa điểm</h3>
            <p className="text-gray-600">Tokyo, Nhật Bản</p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 mx-auto mb-4 bg-pink-100 rounded-full flex items-center justify-center">
              <Book className="w-8 h-8 text-pink-600" />
            </div>
            <h3 className="text-pink-600 mb-2">Đam mê</h3>
            <p className="text-gray-600">Du lịch & Văn hóa</p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 mx-auto mb-4 bg-pink-100 rounded-full flex items-center justify-center">
              <Coffee className="w-8 h-8 text-pink-600" />
            </div>
            <h3 className="text-pink-600 mb-2">Sở thích</h3>
            <p className="text-gray-600">Cafe & Nhiếp ảnh</p>
          </div>
        </div>

        
        {/* What I Share */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-pink-600 mb-6">
            Mình chia sẻ gì trên blog?
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center">
                  <Heart className="w-6 h-6 text-pink-600" />
                </div>
              </div>
              <div>
                <h3 className="text-pink-600 mb-2">Cuộc sống hàng ngày</h3>
                <p className="text-gray-600 text-sm">
                  Những trải nghiệm thường ngày ở Nhật, từ đi làm, mua sắm đến giao lưu văn hóa
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center">
                  <Coffee className="w-6 h-6 text-pink-600" />
                </div>
              </div>
              <div>
                <h3 className="text-pink-600 mb-2">Ẩm thực Nhật Bản</h3>
                <p className="text-gray-600 text-sm">
                  Khám phá món ăn ngon, quán cafe xinh và văn hóa ẩm thực đặc sắc
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-pink-600" />
                </div>
              </div>
              <div>
                <h3 className="text-pink-600 mb-2">Du lịch & Khám phá</h3>
                <p className="text-gray-600 text-sm">
                  Những địa điểm du lịch thú vị và ít người biết ở Nhật Bản
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center">
                  <Book className="w-6 h-6 text-pink-600" />
                </div>
              </div>
              <div>
                <h3 className="text-pink-600 mb-2">Văn hóa & Ngôn ngữ</h3>
                <p className="text-gray-600 text-sm">
                  Học tiếng Nhật, tìm hiểu phong tục tập quán và lễ hội truyền thống
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact */}
        <div className="bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl shadow-lg p-8 text-white text-center">
          <h2 className="text-white mb-4">
            Kết nối với mình
          </h2>
          <p className="text-pink-100 mb-6">
            Nếu bạn có câu hỏi, muốn trao đổi hoặc hợp tác, đừng ngại liên hệ nhé!
          </p>
          <div className="flex items-center justify-center gap-6">
            <a 
              href="mailto:hello@hanajapan.com" 
              className="flex items-center gap-2 px-6 py-3 bg-white text-pink-600 rounded-full hover:bg-pink-50 transition-colors"
            >
              <Mail className="w-5 h-5" />
              <span>Email mình</span>
            </a>
            <button 
              onClick={onNavigateHome}
              className="flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-sm text-white rounded-full hover:bg-white/30 transition-colors"
            >
              <span>Về trang chủ</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
