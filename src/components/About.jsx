import useScrollReveal from '../hooks/useScrollReveal'
import vivek from "../assets/vivek.png";

export default function About({ snapped, snapDelay }) {
  const [ref, visible] = useScrollReveal()

  return (
    <section
      id="about"
      ref={ref}
      className={`section-panel py-[100px] px-[8%] text-center relative
        transition-[opacity,transform] duration-700
        ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
        ${snapped ? '!opacity-0 !scale-[0.3] blur-lg [transition:transform_1s_ease,opacity_1s_ease,filter_1s_ease]' : ''}
        max-md:py-[60px] max-md:px-5`}
      style={snapped ? { transitionDelay: snapDelay } : undefined}
    >
      <h2 className="font-display text-[clamp(38px,6vw,50px)] text-accent mb-6 tracking-[0.08em]">
        Origin Story
      </h2>

      <div className="grid md:grid-cols-[minmax(240px,320px)_minmax(0,1fr)] gap-12 items-center justify-center mt-8 max-md:grid-cols-1">
        <div className="flex justify-center">
          <img
            src={vivek}
            alt="Vivek Patel"
            className="w-full max-w-[280px] h-auto object-cover rounded-[18px] border-[3px] border-accent
              shadow-[0_0_25px_rgba(230,36,41,0.7)] transition-all duration-500
              hover:-translate-y-1.5 hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(230,36,41,1)]"
          />
        </div>

        <div className="text-left px-[30px] py-7 rounded-[22px] bg-gradient-to-b from-panel-strong to-white/[.02] border border-line [&>p+p]:mt-3.5 max-md:px-5 max-md:text-center">
          <p>Every hero has an origin story.</p>
          <p>
            I am <b>Vivek Patel</b>, a first-year undergraduate at the{' '}
            <b>National Institute of Technology Agartala</b>, currently pursuing Bachelor of
            Technology in <b>Computer Science and Engineering</b> on Earth 616.
          </p>
          <p>
            With a growing passion for programming, problem-solving, and innovation, he is
            building the skills to shape the future through technology.
          </p>
          <p>This portfolio marks the beginning of that journey.</p>
        </div>
      </div>
    </section>
  )
}
