import Reveal from './Reveal';

const galleryImages = [
  {
    src: 'https://work-and-share.vercel.app/img/photo-001.png',
    alt: 'WORK & SHARE 공간 전경',
  },
  {
    src: 'https://work-and-share.vercel.app/img/photo-003.png',
    alt: '코워킹 라운지',
  },
  {
    src: 'https://work-and-share.vercel.app/img/photo-005.png',
    alt: '미팅룸',
  },
  {
    src: 'https://work-and-share.vercel.app/img/photo-007.png',
    alt: '릴렉스 & 카페 존',
  },
  {
    src: 'https://work-and-share.vercel.app/img/photo-012.png',
    alt: '이그제큐티브 세미나룸',
  },
  {
    src: 'https://work-and-share.vercel.app/img/photo-013.png',
    alt: '팀 포커스 스튜디오',
  },
  {
    src: 'https://work-and-share.vercel.app/img/photo-015.png',
    alt: '프라이빗 포커스 룸',
  },
  {
    src: 'https://work-and-share.vercel.app/img/photo-022.png',
    alt: '멤버 전용 라운지',
  },
];

const track1Images = [...galleryImages, ...galleryImages];
const track2Images = [...galleryImages.slice().reverse(), ...galleryImages.slice().reverse()];

export default function GallerySection() {
  return (
    <section className="relative z-10 bg-background-50 overflow-hidden py-16 md:py-24">
      <Reveal className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <span className="text-primary-500 text-xs font-mono font-semibold tracking-widest uppercase block mb-3">
          GALLERY
        </span>
        <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-foreground-950 tracking-tight">
          공간을 직접<br />느껴보세요
        </h2>
      </Reveal>

      {/* Track 1 - scrolls left */}
      <div className="relative mb-4 edge-fade-x">
        <div className="flex animate-scroll-left" style={{ width: 'max-content' }}>
          {track1Images.map((img, i) => (
            <div
              key={`t1-${i}`}
              className="flex-shrink-0 w-64 sm:w-80 h-44 sm:h-56 rounded-xl overflow-hidden mr-4"
            >
              <img
                alt={img.alt}
                className="w-full h-full object-cover"
                src={img.src}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Track 2 - scrolls right */}
      <div className="relative edge-fade-x">
        <div className="flex animate-scroll-right" style={{ width: 'max-content' }}>
          {track2Images.map((img, i) => (
            <div
              key={`t2-${i}`}
              className="flex-shrink-0 w-64 sm:w-80 h-44 sm:h-56 rounded-xl overflow-hidden mr-4"
            >
              <img
                alt={img.alt}
                className="w-full h-full object-cover"
                src={img.src}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}