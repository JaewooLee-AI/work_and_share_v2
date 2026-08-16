export default function HeroSection() {
  return (
    <section className="relative min-h-[560px] md:min-h-[680px] lg:min-h-[740px] overflow-hidden bg-background-50">
      {/* Busy, energetic coworking meeting scene with warm dark overlay */}
      <div className="absolute inset-0">
        <img
          alt="젊은 한국 남녀가 밝은 공간에서 활기차고 열정적으로 토론하며 협업하는 모습"
          className="w-full h-full object-cover object-center"
          src="https://images.unsplash.com/photo-1530099486328-e021101a494a?w=1600&h=1000&fit=crop&crop=faces&auto=format&q=80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background-50/75 via-background-50/25 to-background-50/5" />
        {/* Top scrim so the nav stays legible against the bright photo */}
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-background-50/75 to-transparent" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-8 lg:px-12 h-full min-h-[560px] md:min-h-[680px] lg:min-h-[740px] flex items-end pb-16 md:pb-20 lg:pb-24 pt-14">
        <div className="w-full max-w-3xl animate-hero-in">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background-50/70 backdrop-blur-md border border-background-200/40 text-foreground-800 text-xs font-medium mb-6 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-primary-500" />
            대학로 프리미엄 공유오피스 · 2026 GRAND OPEN
          </div>

          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-[1.12] text-foreground-950 mb-5 drop-shadow-sm">
            대학로의{' '}
            <em className="text-primary-500 not-italic">창조적 에너지</em>가
            <br />
            당신의 비전과 만나는 곳
          </h1>

          <p className="text-foreground-700 text-base sm:text-lg font-normal leading-relaxed mb-8 max-w-lg">
            영감이 일상이 되는 공간, Work &amp; Share.
            <br className="hidden sm:block" />
            프리미엄 워크스페이스를 가장 먼저 경험하세요.
          </p>
        </div>
      </div>
    </section>
  );
}