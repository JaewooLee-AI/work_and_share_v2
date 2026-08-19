export default function HeroSection() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="grid grid-cols-12 min-h-[90vh] border-b border-ink bg-paper">
      {/* Text Panel: 7 Columns */}
      <div className="col-span-12 md:col-span-7 flex flex-col justify-center px-6 md:px-16 py-20 md:py-24 border-r-0 md:border-r border-ink bg-paper relative">
        {/* Monospaced Caption Badge */}
        <p className="font-mono text-accent-secondary text-xs md:text-sm uppercase tracking-widest mb-8 border-b-2 border-ink inline-block w-max pb-2 font-bold">
          Est. 2026 / Raw Workspace · Daehak-ro
        </p>

        {/* Serif Heading */}
        <h1 className="font-serif text-5xl sm:text-6xl md:text-[7rem] leading-[0.9] font-bold text-ink break-keep">
          Brilliant <br />
          <span className="text-accent-primary italic">Minds.</span>
          <br />
          Raw Space.
        </h1>

        {/* Body Text */}
        <p className="mt-10 max-w-lg font-sans text-base md:text-lg text-ink/80 leading-loose break-keep">
          워크앤쉐어는 본질에 집중합니다. 과도한 장식을 덜어내고 거친 콘크리트와
          빈티지 원목 가구로 완성된 이 공간에서, 당신의 비즈니스와 영감은 가장 순수한 형태로 발현됩니다.
        </p>

        {/* CTA Button */}
        <div className="mt-12">
          <button
            onClick={() => scrollTo('cta')}
            className="inline-block bg-ink text-paper font-mono uppercase text-xs md:text-sm tracking-widest px-8 md:px-10 py-5 hover:bg-accent-primary transition-colors border-2 border-ink hover:border-accent-primary font-bold"
          >
            Reserve Your Space
          </button>
        </div>
      </div>

      {/* Image Panel: 5 Columns (Full-bleed) */}
      <div className="col-span-12 md:col-span-5 h-[50vh] md:h-auto relative overflow-hidden bg-ink">
        <img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80"
          alt="Vintage Coworking Space"
          className="absolute inset-0 w-full h-full object-cover mix-blend-luminosity opacity-85 hover:mix-blend-normal hover:opacity-100 transition-all duration-700 ease-in-out cursor-pointer"
        />
        {/* Editorial Footnote Caption */}
        <div className="absolute bottom-6 right-6 bg-paper px-4 py-2 border border-ink z-10">
          <span className="font-mono text-xs text-ink uppercase tracking-widest font-bold">
            Fig 1. Lounge Area
          </span>
        </div>
      </div>
    </section>
  );
}