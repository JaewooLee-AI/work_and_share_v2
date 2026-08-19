import { useState, useEffect, useCallback } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setMobileOpen(false);
    }
  }, []);

  const navLinks = [
    { label: 'Spaces', target: 'curation' },
    { label: 'Audience', target: 'audience' },
    { label: 'Amenities', target: 'amenities' },
    { label: 'Location', target: 'location' },
    { label: 'FAQ', target: 'faq' },
  ];

  return (
    <header
      className={`sticky top-0 z-50 bg-paper border-b border-ink transition-colors duration-200 ${
        scrolled ? 'bg-paper/95 backdrop-blur-md' : 'bg-paper'
      }`}
    >
      <div className="flex justify-between items-center px-6 py-5 md:px-12">
        {/* Brand */}
        <div className="text-2xl md:text-3xl font-serif font-black uppercase tracking-tighter text-ink">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="hover:text-accent-primary transition-colors"
          >
            Work &amp; Share
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex font-mono text-xs uppercase tracking-widest text-ink font-bold border border-ink">
          {navLinks.map((link) => (
            <button
              key={link.target}
              onClick={() => scrollTo(link.target)}
              className="px-5 py-3 border-r last:border-r-0 border-ink hover:bg-paperHover transition-colors"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <button
            onClick={() => scrollTo('cta')}
            className="font-mono text-xs uppercase bg-ink text-paper px-6 py-3 border border-ink hover:bg-accent-primary hover:border-accent-primary transition-colors font-bold tracking-widest"
          >
            Book a Tour
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden font-mono text-xs uppercase border border-ink px-4 py-2 hover:bg-ink hover:text-paper transition-colors font-bold tracking-widest"
          aria-label="Toggle menu"
        >
          {mobileOpen ? 'Close' : 'Menu'}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileOpen && (
        <div className="lg:hidden bg-paper border-t border-ink px-6 py-6 space-y-4 font-mono text-xs uppercase tracking-widest font-bold">
          {navLinks.map((link) => (
            <button
              key={link.target}
              onClick={() => scrollTo(link.target)}
              className="block w-full text-left text-ink hover:text-accent-primary py-2 border-b border-ink/20"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo('cta')}
            className="block w-full text-center bg-ink text-paper py-3 border border-ink hover:bg-accent-primary transition-colors mt-4"
          >
            Book a Tour
          </button>
        </div>
      )}
    </header>
  );
}