import Reveal from './Reveal';

const mapQuery = encodeURIComponent('Work & Share 대학로 공유오피스');

const mapLinks = [
  { label: 'Kakao Map', href: `https://map.kakao.com/?q=${mapQuery}` },
  { label: 'Naver Map', href: `https://map.naver.com/p/search/${mapQuery}` },
  { label: 'Google Maps', href: `https://www.google.com/maps/search/?api=1&query=${mapQuery}` },
];

const infoItems = [
  {
    code: '01 / ADDRESS',
    title: '주소',
    desc: '서울특별시 종로구 대학로 (혜화역 마로니에 공원 앞)',
  },
  {
    code: '02 / SUBWAY',
    title: '지하철',
    desc: '4호선 혜화역 2번 출구 도보 5분 / 1호선 종각역 버스 환승 10분',
  },
  {
    code: '03 / WALKING',
    title: '도보 안내',
    desc: '혜화역 2번 출구 출차 → 대학로 방향 직진 300m → 마로니에 공원 맞은편 빌딩 진입',
  },
  {
    code: '04 / BUS',
    title: '버스 정류장',
    desc: '대학로/마로니에공원 정류장 하차 (간선/지선 다수 노선 운행)',
  },
  {
    code: '05 / PARKING',
    title: '주차 안내',
    desc: '건물 내 유료 주차 타워 이용 가능 / 인근 마로니에 공원 공영주차장 도보 2분',
  },
  {
    code: '06 / HOURS',
    title: '운영 시간',
    desc: '24시간 연중무휴 (회원 스마트키 전용 출입 시스템)',
  },
];

export default function LocationSection() {
  return (
    <section id="location" className="border-b border-ink bg-paper py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <Reveal className="mb-14 border-b border-ink pb-8">
          <span className="font-mono text-xs uppercase tracking-widest text-accent-secondary font-bold block mb-3">
            05 / LOCATION &amp; ACCESS
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-ink tracking-tight">
            Daehak-ro Central
          </h2>
          <p className="font-sans text-ink/70 text-base mt-4 max-w-lg leading-relaxed">
            문화와 예술, 젊은 에너지가 공존하는 대학로 마로니에 공원 앞.
          </p>
        </Reveal>

        <Reveal delay={100} className="grid grid-cols-12 gap-8">
          {/* Architectural Line Map Container (7 Columns) */}
          <div className="col-span-12 lg:col-span-7 border border-ink bg-paper flex flex-col justify-between">
            <div className="relative min-h-[340px] md:min-h-[420px] bg-paper border-b border-ink overflow-hidden flex items-center justify-center p-8">
              {/* Architectural Grid Lines */}
              <svg
                viewBox="0 0 400 260"
                className="absolute inset-0 w-full h-full text-ink/20"
                preserveAspectRatio="xMidYMid slice"
              >
                <line x1="0" y1="60" x2="400" y2="60" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
                <line x1="0" y1="150" x2="400" y2="150" stroke="currentColor" strokeWidth="1" />
                <line x1="0" y1="215" x2="400" y2="215" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
                <line x1="90" y1="0" x2="90" y2="260" stroke="currentColor" strokeWidth="1" />
                <line x1="230" y1="0" x2="230" y2="260" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
                <line x1="320" y1="0" x2="320" y2="260" stroke="currentColor" strokeWidth="1" />
                <rect x="110" y="75" width="100" height="55" stroke="currentColor" strokeWidth="1" fill="none" />
                <rect x="250" y="20" width="55" height="30" stroke="currentColor" strokeWidth="1" fill="none" />
              </svg>

              {/* Pin Hotspot */}
              <div className="relative z-10 flex flex-col items-center">
                <div className="w-16 h-16 bg-accent-primary text-paper flex items-center justify-center font-mono text-xs font-bold border border-ink mb-3 shadow-none">
                  W&amp;S
                </div>
                <div className="bg-paper border border-ink px-4 py-2 text-center">
                  <span className="font-mono text-xs text-ink uppercase tracking-widest font-bold block">
                    Work &amp; Share Daehak-ro
                  </span>
                  <span className="font-sans text-[11px] text-ink/70">
                    Hyehwa Station Exit 2 (Walk 5m)
                  </span>
                </div>
              </div>
            </div>

            {/* Map Link Buttons */}
            <div className="p-6 bg-paper">
              <span className="font-mono text-xs uppercase tracking-widest text-ink/60 font-bold block mb-4">
                External Navigation Links
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {mapLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-xs uppercase bg-paper text-ink py-3 border border-ink text-center hover:bg-paperHover transition-colors font-bold tracking-widest"
                  >
                    {link.label} ↗
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Info Details List (5 Columns) */}
          <div className="col-span-12 lg:col-span-5 flex flex-col justify-between gap-4">
            {infoItems.map((item) => (
              <div
                key={item.code}
                className="border border-ink bg-paper p-5 hover:bg-paperHover transition-all duration-300 cursor-pointer"
              >
                <span className="font-mono text-[10px] uppercase tracking-widest text-accent-primary font-bold block mb-1">
                  {item.code}
                </span>
                <h4 className="font-sans text-lg font-bold text-ink mb-2">
                  {item.title}
                </h4>
                <p className="font-sans text-xs text-ink/80 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
