import Reveal from './Reveal';

interface Amenity {
  index: string;
  tagEn: string;
  title: string;
  description: string;
  image: string;
}

const amenities: Amenity[] = [
  {
    index: '01',
    tagEn: '1GBPS NETWORK',
    title: '초고속 기가 유·무선 인터넷',
    description: '이중화 구축된 대칭형 기가 비트 전용선. 끊김 없는 4K 화상회의와 대용량 파일 송수신 보장.',
    image: '/img/photo-022.png',
  },
  {
    index: '02',
    tagEn: 'SPECIALTY COFFEE & BAR',
    title: '무제한 에스프레소 & 음료 바',
    description: '스페셜티 로스팅 원두 커피머신, 탄산음료, 프리미엄 차류를 24시간 무제한 무료 제공합니다.',
    image: '/img/photo-007.png',
  },
  {
    index: '03',
    tagEn: 'MULTIFUNCTION PRINT',
    title: '고속 컬러 복합기 & 출력소',
    description: '흑백/컬러 초고속 출력, 스캔, 팩스 기능을 공용 스테이션에서 자유롭게 이용하세요.',
    image: '/img/photo-001.png',
  },
  {
    index: '04',
    tagEn: '4K CONFERENCE SYSTEM',
    title: '전문 회의실 & 화상 장비',
    description: '4K 웹캠, 노이즈 캔슬링 마이크, 대형 스크린이 완비된 대·중형 회의 공간 지원.',
    image: '/img/photo-005.png',
  },
  {
    index: '05',
    tagEn: '24/7 SECURITY ACCESS',
    title: '365일 24시간 보안 출입',
    description: '모바일/지문 인식 모션 스마트 출입 제어 시스템과 Full HD CCTV로 안전망 유지.',
    image: '/img/photo-012.png',
  },
  {
    index: '06',
    tagEn: 'MAIL & ADDRESS SERVICE',
    title: '우편물 수령 & 사업자 등록',
    description: '신규 법인 및 1인 기업 사업자 주소지 등록 및 일일 전용 우편물/택배 알림 수령 서비스.',
    image: '/img/photo-007.png',
  },
];

export default function AmenitiesSection() {
  return (
    <section id="amenities" className="border-b border-ink bg-paper py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <Reveal className="mb-14 border-b border-ink pb-8">
          <span className="font-mono text-xs uppercase tracking-widest text-accent-secondary font-bold block mb-3">
            04 / AMENITIES &amp; INFRASTRUCTURE
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-ink tracking-tight">
            Raw Functionality
          </h2>
          <p className="font-sans text-ink/70 text-base mt-4 max-w-lg leading-relaxed">
            입실 첫날부터 업무에 바로 몰입할 수 있는 검증된 인프라.
          </p>
        </Reveal>

        <Reveal delay={100} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {amenities.map((item) => (
            <div
              key={item.index}
              className="bg-paper hover:bg-[#eae8e1] p-3 md:p-4 flex flex-col justify-between group hover:shadow-[0_15px_30px_rgba(0,0,0,0.06)] transition-all duration-300 cursor-pointer relative"
            >
              <div>
                {/* Photo frame */}
                <div className="relative aspect-[16/9] overflow-hidden bg-ink mb-3">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute top-3 left-3 bg-paper px-3 py-1 border border-ink/20">
                    <span className="font-mono text-[10px] text-ink uppercase tracking-widest font-bold">
                      {item.index} / {item.tagEn}
                    </span>
                  </div>
                </div>

                {/* Content: Unhovered = bg-transparent, Hovered = PURE WHITE */}
                <div className="bg-transparent group-hover:bg-white p-5 transition-all duration-300">
                  <h3 className="font-sans text-xl font-bold text-ink mb-3 group-hover:text-accent-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="font-sans text-xs text-ink/80 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              <div className="mt-3 px-4 py-3 border-t border-ink/10 bg-paper group-hover:bg-white transition-all duration-300 font-mono text-[10px] uppercase text-ink/60 tracking-widest flex justify-between items-center">
                <span>INCLUDED IN MEMBERSHIP</span>
                <span className="group-hover:text-accent-primary font-bold group-hover:underline transition-all">VIEW →</span>
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
