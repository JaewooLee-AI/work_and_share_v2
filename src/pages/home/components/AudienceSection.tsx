import Reveal from './Reveal';

const audiences = [
  {
    num: '01',
    tagEn: 'The Professional',
    title: '회사원을 위한, 회사 밖 업무 공간',
    subtitle: '재택보다 집중되고, 카페보다 조용하게.',
    desc: '독립된 몰입 환경과 안정적인 네트워크가 필요한 리모트 워커와 직장인을 위한 최적의 거점 오피스.',
    image: 'https://images.unsplash.com/photo-1579389082289-3d6922d506c4?w=800&h=1000&fit=crop&auto=format&q=80',
  },
  {
    num: '02',
    tagEn: 'The Founder',
    title: '1인 창업가·프리랜서를 위한 공간',
    subtitle: '사업자 주소 등록부터 논문·개인 프로젝트까지.',
    desc: '비즈니스 등록, 우편 수령, 회의실 제공 등 1인 기업이 성장하는 데 필요한 본질적 기능을 지원합니다.',
    image: 'https://plus.unsplash.com/premium_photo-1661923748717-1cb880e4e9c8?w=800&h=1000&fit=crop&auto=format&q=80',
  },
  {
    num: '03',
    tagEn: 'The Performer',
    title: '대학로 공연예술인을 위한 공간',
    subtitle: '대본 리딩, 오디션 준비, 미팅까지.',
    desc: '혜화역 마로니에 공원 앞 도보 5분. 예술적 영감이 어우러진 창작자들의 작업실.',
    image: 'https://plus.unsplash.com/premium_photo-1663036874447-5aeeca71df86?w=800&h=1000&fit=crop&auto=format&q=80',
  },
];

export default function AudienceSection() {
  return (
    <section id="audience" className="border-b border-ink bg-paper py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <Reveal className="mb-14 border-b border-ink pb-8">
          <span className="font-mono text-xs uppercase tracking-widest text-accent-secondary font-bold block mb-3">
            01 / FOR WHOM
          </span>
          <h2 className="font-sans text-4xl md:text-5xl font-bold text-ink tracking-tight">
            대학로에서 일하는 세 가지 방법
          </h2>
          <p className="font-sans text-ink/70 text-base mt-4 max-w-lg leading-relaxed">
            각기 다른 창의성과 가치를 지닌 사람들을 위해 구획된 개별화된 공간 구성.
          </p>
        </Reveal>

        <Reveal delay={100} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {audiences.map((item) => (
            <div
              key={item.num}
              className="border border-ink bg-paper flex flex-col justify-between group hover:border-accent-primary transition-colors"
            >
              {/* Image Frame */}
              <div className="relative aspect-[4/3] border-b border-ink overflow-hidden bg-ink">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                />
                <div className="absolute top-4 left-4 bg-paper px-3 py-1 border border-ink">
                  <span className="font-mono text-xs text-ink uppercase tracking-widest font-bold">
                    {item.num} / {item.tagEn}
                  </span>
                </div>
              </div>

              {/* Text Frame */}
              <div className="p-8 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="font-sans text-2xl font-bold text-ink mb-3 leading-snug">
                    {item.title}
                  </h3>
                  <p className="font-mono text-xs text-accent-primary uppercase tracking-widest font-bold mb-4">
                    {item.subtitle}
                  </p>
                  <p className="font-sans text-sm text-ink/80 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-ink/20 flex justify-between items-center font-mono text-xs uppercase tracking-widest text-ink/60">
                  <span>Daehak-ro Hub</span>
                  <span className="group-hover:text-accent-primary transition-colors">Learn More →</span>
                </div>
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
