import useScrollReveal from "../hooks/useScrollReveal";

const links = [
  { label: "GitHub", href: "https://github.com/anonymousd3vil-ops" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/vivek-pat3l/" },
  { label: "Instagram", href: "https://instagram.com/vivek_pat3l" },
  { label: "Email", href: "mailto:vivekpatel.9172@gmail.com" },
  { label: "LeetCode", href: "https://leetcode.com/u/vivek_pat3l/" },
];

export default function Contact({ snapped, snapDelay }) {
  const [ref, visible] = useScrollReveal();

  return (
    <section
      id="contact"
      ref={ref}
      className={`section-panel py-[100px] px-[8%] text-center relative
        transition-[opacity,transform] duration-700
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
        ${snapped ? "!opacity-0 !scale-[0.3] blur-lg [transition:transform_1s_ease,opacity_1s_ease,filter_1s_ease]" : ""}
        max-md:py-[60px] max-md:px-5`}
      style={snapped ? { transitionDelay: snapDelay } : undefined}
    >
      <h2 className="font-display text-[clamp(38px,6vw,50px)] text-accent mb-6 tracking-[0.08em]">
        Command Center
      </h2>
      <p className="mb-8 opacity-80">Connect with me across the multiverse.</p>

      <div className="flex justify-center flex-wrap gap-[18px] mt-7">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.href.startsWith("mailto") ? undefined : "_blank"}
            rel="noreferrer"
            className="no-underline px-6 py-[13px] border border-accent/50 text-[#f7c4c5] font-medium
              bg-gradient-to-b from-accent/10 to-accent/[.04] rounded-full tracking-[1px]
              shadow-[0_12px_30px_rgba(0,0,0,0.25)] transition-all duration-300
              hover:bg-accent hover:text-black hover:shadow-[0_0_25px_#e62429] hover:-translate-y-1"
          >
            {link.label}
          </a>
        ))}
      </div>
    </section>
  );
}
