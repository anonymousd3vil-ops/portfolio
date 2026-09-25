import useScrollReveal from '../hooks/useScrollReveal'

export default function Projects({ snapped, snapDelay }) {
  const [ref, visible] = useScrollReveal()

  return (
    <section
      id="projects"
      ref={ref}
      className={`section-panel py-[100px] px-[8%] text-center relative
        transition-[opacity,transform] duration-700
        ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
        ${snapped ? '!opacity-0 !scale-[0.3] blur-lg [transition:transform_1s_ease,opacity_1s_ease,filter_1s_ease]' : ''}
        max-md:py-[60px] max-md:px-5`}
      style={snapped ? { transitionDelay: snapDelay } : undefined}
    >
      <h2 className="font-display text-[clamp(38px,6vw,50px)] text-accent mb-6 tracking-[0.08em]">
        Mission Archive
      </h2>
      <p className="text-muted max-w-[820px] mx-auto px-4">
        S.H.I.E.L.D database currently contains limited project records. New operations will be
        uploaded soon.
      </p>
    </section>
  )
}
