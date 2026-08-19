import { useLocation } from "react-router-dom";

export default function NotFound() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-paper text-ink flex flex-col justify-between p-8 md:p-16 border-4 border-ink selection:bg-accent-primary selection:text-paper">
      {/* Top Header */}
      <div className="flex justify-between items-center border-b border-ink pb-6 font-mono text-xs uppercase tracking-widest font-bold">
        <span>Work &amp; Share Daehak-ro</span>
        <span className="text-accent-primary">Error / 404</span>
      </div>

      {/* Main Content */}
      <div className="my-auto py-12 max-w-3xl">
        <h1 className="font-serif text-8xl sm:text-[10rem] font-bold text-accent-primary leading-none mb-6">
          404
        </h1>

        <div className="font-mono text-xs uppercase tracking-widest text-ink font-bold border-b-2 border-ink inline-block pb-2 mb-6">
          Uncharted Territory / Path Not Found
        </div>

        <p className="font-mono text-xs text-ink/70 mb-2">
          Target Route: <span className="text-ink font-bold">{location.pathname}</span>
        </p>

        <p className="font-sans text-base text-ink/80 leading-loose mb-10 max-w-lg">
          요청하신 페이지가 존재하지 않거나 이전되었을 수 있습니다.
          에이스 호텔 스타일의 워크앤쉐어 메인 라운지로 돌아가 전체 공간을 둘러보세요.
        </p>

        <a
          href="/"
          className="inline-block font-mono text-xs uppercase bg-ink text-paper px-8 py-4 border border-ink hover:bg-accent-primary hover:border-accent-primary transition-colors font-bold tracking-widest"
        >
          Return to Homepage →
        </a>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-ink pt-6 flex justify-between items-center font-mono text-[10px] uppercase text-ink/60">
        <span>© 2026 WORK &amp; SHARE INC.</span>
        <span>Editorial Brutalism System</span>
      </div>
    </div>
  );
}