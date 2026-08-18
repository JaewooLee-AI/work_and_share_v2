import Reveal from './Reveal';

interface Amenity {
  icon: string;
  title: string;
  description: string;
  image: string;
  objectPosition?: string;
}

const amenities: Amenity[] = [
  {
    icon: 'ri-wifi-line',
    title: '초고속 인터넷',
    description: '기가급 유·무선 인터넷. 안정적인 연결로 끊김 없는 화상회의와 대용량 파일 전송을 지원합니다.',
    image: '/img/photo-022.png',
  },
  {
    icon: 'ri-cup-line',
    title: '무제한 음료 제공',
    description: '고급 원두 커피머신, 다양한 차류, 탄산음료까지. 멤버십 이용 중 무제한으로 제공됩니다.',
    image: '/img/photo-007.png',
    objectPosition: '49% 68%',
  },
  {
    icon: 'ri-printer-line',
    title: '프린터 & 복합기',
    description: '흑백·컬러 출력, 스캔, 팩스 기능을 갖춘 최신 복합기를 공용 공간에서 자유롭게 이용하세요.',
    image: '/img/photo-001.png',
  },
  {
    icon: 'ri-vidicon-line',
    title: '화상회의 장비',
    description: '4K 웹캠, 노이즈 캔슬링 마이크, 대형 스크린이 갖춰진 회의실에서 전문적인 미팅을 진행하세요.',
    image: '/img/photo-005.png',
  },
  {
    icon: 'ri-shield-check-line',
    title: '24시간 보안',
    description: '카드키 출입 시스템과 CCTV로 365일 24시간 안전한 업무 환경을 보장합니다.',
    image: '/img/photo-012.png',
  },
  {
    icon: 'ri-inbox-archive-line',
    title: '우편물 수령',
    description: '사업자 주소 등록 및 우편물·택배 수령 서비스를 제공합니다. 법인 설립에도 활용 가능합니다.',
    image: '/img/photo-007.png',
    objectPosition: '58% 18%',
  },
];

export default function AmenitiesSection() {
  return (
    <section id="amenities" className="py-16 md:py-24 relative z-10 bg-background-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="mb-10">
          <span className="text-primary-500 text-xs font-mono font-semibold tracking-widest uppercase block mb-3">
            AMENITIES
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-foreground-950 tracking-tight">
            업무에 필요한<br />모든 것을 갖췄습니다
          </h2>
          <p className="text-foreground-600 text-sm font-normal max-w-md leading-relaxed break-keep mt-3">
            입실 첫날부터 바로 일할 수 있는 환경. 나머지는 Work &amp; Share가 준비합니다.
          </p>
        </Reveal>

        <Reveal delay={100} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {amenities.map((item) => (
            <div
              key={item.title}
              className="group rounded-2xl overflow-hidden bg-background-50 border border-background-200/30 hover:border-primary-500/30 hover:-translate-y-1 transition-all duration-300 hover:shadow-xl hover:shadow-black/20"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                  style={{ objectPosition: item.objectPosition }}
                  src={item.image}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background-50 via-background-50/5 to-black/10" />
              </div>

              <div className="px-5 pb-6">
                <div className="relative -mt-7 mb-3 w-14 h-14 rounded-2xl bg-background-100 border border-background-200/50 shadow-lg shadow-black/30 flex items-center justify-center">
                  <i className={`${item.icon} text-primary-400 text-2xl`} />
                </div>
                <h3 className="font-heading text-base font-semibold text-foreground-950 mb-2">
                  {item.title}
                </h3>
                <p className="text-foreground-600 text-xs leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
