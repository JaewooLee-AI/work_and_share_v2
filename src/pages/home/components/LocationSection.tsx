import Reveal from './Reveal';

const mapQuery = encodeURIComponent('Work & Share 대학로 공유오피스');

const mapLinks = [
  { label: '카카오맵', href: `https://map.kakao.com/?q=${mapQuery}` },
  { label: '네이버지도', href: `https://map.naver.com/p/search/${mapQuery}` },
  { label: '구글맵', href: `https://www.google.com/maps/search/?api=1&query=${mapQuery}` },
];

const infoItems = [
  { icon: 'ri-map-pin-line', title: '주소', desc: '서울특별시 종로구 대학로\n(정확한 주소는 추후 공개)' },
  { icon: 'ri-subway-line', title: '지하철', desc: '4호선 혜화역 도보 5분\n1호선 종각역 버스 환승 10분' },
  {
    icon: 'ri-walk-line',
    title: '도보 안내',
    desc: '① 혜화역 2번 출구로 나오기\n② 대학로 방향으로 직진, 도보 약 5분\n③ 마로니에공원을 지나 진입 (상세 위치는 사전예약자에게 개별 안내)',
  },
  { icon: 'ri-bus-line', title: '버스', desc: '대학로 정류장 하차\n종로, 혜화 방면 다수 노선 이용 가능' },
  { icon: 'ri-parking-line', title: '주차', desc: '건물 내 주차 가능 (유료)\n인근 마로니에 공원 공영주차장 이용' },
  { icon: 'ri-time-line', title: '운영 시간', desc: '24시간 연중무휴\n(프라이빗 룸·코워킹 라운지 기준)' },
];

export default function LocationSection() {
  return (
    <section id="location" className="py-16 md:py-24 relative z-10 bg-background-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="mb-10">
          <span className="text-primary-500 text-xs font-mono font-semibold tracking-widest uppercase block mb-3">
            LOCATION
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-foreground-950 tracking-tight">
            대학로 한복판,<br />최고의 위치
          </h2>
        </Reveal>

        <Reveal delay={100} className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Stylized line-art map placeholder */}
          <div className="rounded-2xl bg-background-100 border border-background-200/30 overflow-hidden flex flex-col min-h-[380px]">
            <div className="relative flex-1 min-h-[220px]">
              <svg
                viewBox="0 0 400 260"
                className="absolute inset-0 w-full h-full text-foreground-300/25"
                preserveAspectRatio="xMidYMid slice"
              >
                <line x1="0" y1="60" x2="400" y2="60" stroke="currentColor" strokeWidth="2" />
                <line x1="0" y1="150" x2="400" y2="150" stroke="currentColor" strokeWidth="2" />
                <line x1="0" y1="215" x2="400" y2="215" stroke="currentColor" strokeWidth="1.5" />
                <line x1="90" y1="0" x2="90" y2="260" stroke="currentColor" strokeWidth="2" />
                <line x1="230" y1="0" x2="230" y2="260" stroke="currentColor" strokeWidth="1.5" />
                <line x1="320" y1="0" x2="320" y2="260" stroke="currentColor" strokeWidth="2" />
                <rect x="110" y="75" width="100" height="55" rx="4" stroke="currentColor" strokeWidth="1.5" fill="none" />
                <rect x="250" y="20" width="55" height="30" rx="4" stroke="currentColor" strokeWidth="1.5" fill="none" />
                <rect x="20" y="165" width="55" height="35" rx="4" stroke="currentColor" strokeWidth="1.5" fill="none" />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative flex flex-col items-center">
                  <span className="absolute w-14 h-14 rounded-full bg-primary-500/30 hotspot-ping" />
                  <div className="relative z-10 w-12 h-12 rounded-full bg-primary-500 text-white shadow-lg flex items-center justify-center">
                    <i className="ri-map-pin-fill text-2xl" />
                  </div>
                  <span className="mt-3 px-3 py-1 rounded-full bg-background-50/90 border border-background-200/40 text-foreground-800 text-xs font-medium whitespace-nowrap">
                    서울특별시 종로구 대학로
                  </span>
                </div>
              </div>
            </div>

            <div className="p-5 border-t border-background-200/30">
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="px-3 py-1 rounded-full bg-background-200/50 text-foreground-700 text-xs font-medium">
                  4호선 혜화역 5분
                </span>
                <span className="px-3 py-1 rounded-full bg-background-200/50 text-foreground-700 text-xs font-medium">
                  마로니에공원 근처
                </span>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {mapLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-background-200/40 hover:bg-background-200/70 border border-background-200/30 text-foreground-800 text-xs font-medium transition-colors"
                  >
                    <i className="ri-map-2-line text-sm text-primary-400" />
                    {link.label}
                  </a>
                ))}
              </div>
              <p className="text-foreground-500 text-[11px] mt-3 text-center">
                정확한 주소는 정식 오픈 시 지도에 업데이트됩니다
              </p>
            </div>
          </div>

          {/* Info cards */}
          <div className="space-y-4">
            {infoItems.map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-4 p-4 rounded-xl bg-background-100 border border-background-200/30"
              >
                <div className="w-10 h-10 rounded-lg bg-primary-500/10 flex items-center justify-center flex-shrink-0">
                  <i className={`${item.icon} text-primary-400 text-lg`} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-foreground-950 mb-0.5">{item.title}</h4>
                  <p className="text-xs text-foreground-600 leading-relaxed whitespace-pre-line">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
