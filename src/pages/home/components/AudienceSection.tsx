import Reveal from './Reveal';

const audiences = [
  {
    num: '01',
    tagEn: 'The Professional',
    title: '회사원을 위한, 회사 밖 업무 공간',
    desc: '재택보다 집중되고, 카페보다 조용하게.',
    icon: 'ri-briefcase-line',
    image:
      'https://images.unsplash.com/photo-1579389082289-3d6922d506c4?w=800&h=1000&fit=crop&auto=format&q=80',
    objectPosition: '72% 35%',
  },
  {
    num: '02',
    tagEn: 'The Founder',
    title: '1인 창업가·프리랜서를 위한 공간',
    desc: '사업자 주소 등록부터 논문·개인 프로젝트까지, 혼자 몰입하는 모든 순간에.',
    icon: 'ri-rocket-line',
    image:
      'https://plus.unsplash.com/premium_photo-1661923748717-1cb880e4e9c8?w=800&h=1000&fit=crop&auto=format&q=80',
    objectPosition: '50% 30%',
  },
  {
    num: '03',
    tagEn: 'The Performer',
    title: '대학로 공연예술인을 위한 연습 공간',
    desc: '대본 리딩, 오디션 준비, 미팅까지 — 극장까지 도보 5분.',
    icon: 'ri-clapperboard-line',
    image:
      'https://plus.unsplash.com/premium_photo-1663036874447-5aeeca71df86?w=800&h=1000&fit=crop&auto=format&q=80',
    objectPosition: '75% 40%',
  },
];

export default function AudienceSection() {
  return (
    <section className="relative z-10 bg-background-100 py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="mb-10 md:mb-12">
          <span className="text-primary-500 text-xs font-mono font-semibold tracking-widest uppercase block mb-3">
            FOR YOU
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-foreground-950 tracking-tight">
            대학로에서 일하는<br />세 가지 방법
          </h2>
          <p className="text-foreground-600 text-sm font-normal max-w-md leading-relaxed break-keep mt-3">
            당신의 일하는 방식은 어느 쪽에 가깝을까요?
          </p>
        </Reveal>

        <Reveal delay={100} className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {audiences.map((item) => (
            <div
              key={item.num}
              className="group rounded-2xl overflow-hidden bg-background-50 border border-background-200/30 hover:border-primary-500/40 hover:-translate-y-1 transition-all duration-300 hover:shadow-xl hover:shadow-black/20"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                  style={{ objectPosition: item.objectPosition }}
                  src={item.image}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-black/20" />

                <span className="absolute top-4 left-4 px-2.5 py-1 rounded-full bg-white/10 backdrop-blur-sm text-white font-medium text-[10px] border border-white/10">
                  {item.tagEn}
                </span>

                <span className="absolute top-4 right-4 font-heading text-2xl font-bold text-white/40 tracking-tight">
                  {item.num}
                </span>

                <div className="absolute bottom-0 inset-x-0 p-5">
                  <div className="w-10 h-10 rounded-xl bg-primary-500/90 backdrop-blur-sm flex items-center justify-center mb-3">
                    <i className={`${item.icon} text-white text-lg`} />
                  </div>
                  <h3 className="font-heading text-base font-semibold text-white leading-snug drop-shadow-sm">
                    {item.title}
                  </h3>
                </div>
              </div>

              <div className="p-5">
                <p className="text-foreground-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
