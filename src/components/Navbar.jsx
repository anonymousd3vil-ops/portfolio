import { useEffect, useState } from 'react'

const navLinks = [
  ['#about', 'Origin'],
  ['#skills', 'Powers'],
  ['#projects', 'Missions'],
  ['#contact', 'Command'],
]

export default function Navbar({ onSnap, snapped, snapDelay }) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 18)
    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 w-full flex flex-wrap items-center justify-between gap-2.5 px-[60px] py-5 z-[1000] backdrop-blur-2xl border-b border-transparent
        transition-[background,border-color,box-shadow,padding] duration-300
        ${scrolled ? 'bg-[rgba(8,8,8,0.88)] border-line shadow-[0_16px_45px_rgba(0,0,0,0.32)] py-4' : 'bg-[rgba(8,8,8,0.58)]'}
        max-md:flex-col max-md:px-5 max-md:py-4
        ${snapped ? 'opacity-0 scale-[0.3] blur-lg [transition:transform_1s_ease,opacity_1s_ease,filter_1s_ease]' : ''}`}
      style={snapped ? { transitionDelay: snapDelay } : undefined}
    >
      <div className="font-display text-[28px] tracking-[3px] text-accent [text-shadow:0_0_20px_rgba(230,36,41,0.25)]">
        VIVEK PATEL
      </div>

      <nav className="flex flex-wrap justify-center">
        {navLinks.map(([href, label]) => (
          <a
            key={href}
            href={href}
            className="mx-[15px] text-[0.95rem] tracking-[0.04em] text-white/[.86] relative transition-colors duration-300 hover:text-accent-soft
              after:content-[''] after:absolute after:left-0 after:-bottom-1.5 after:w-full after:h-[2px] after:bg-accent
              after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100"
          >
            {label}
          </a>
        ))}
      </nav>

      <button
        onClick={onSnap}
        className="bg-gradient-to-br from-accent to-[#b91c1f] border-none px-[22px] py-3 text-white font-bold rounded-full
          shadow-[0_12px_28px_rgba(230,36,41,0.28)] transition-all duration-300
          hover:-translate-y-0.5 hover:shadow-[0_16px_36px_rgba(230,36,41,0.34)] hover:brightness-105"
      >
        Snap
      </button>
    </header>
  )
}
