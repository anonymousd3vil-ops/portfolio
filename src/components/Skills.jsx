import useScrollReveal from '../hooks/useScrollReveal'

const stones = [
  { name: 'Space', color: '#2d6bff' },
  { name: 'Mind', color: '#f7e484' },
  { name: 'Reality', color: '#ff2d2d' },
  { name: 'Power', color: '#b400ff' },
  { name: 'Time', color: '#2aff4a' },
  { name: 'Soul', color: '#ff8c00' },
]

export default function Skills({ snapped, snapDelay }) {
  const [ref, visible] = useScrollReveal()

  return (
    <section
      id="skills"
      ref={ref}
      className={`section-panel py-[100px] px-[8%] text-center relative
        transition-[opacity,transform] duration-700
        ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
        ${snapped ? '!opacity-0 !scale-[0.3] blur-lg [transition:transform_1s_ease,opacity_1s_ease,filter_1s_ease]' : ''}
        max-md:py-[60px] max-md:px-5`}
      style={snapped ? { transitionDelay: snapDelay } : undefined}
    >
      <h2 className="font-display text-[clamp(38px,6vw,50px)] text-accent mb-6 tracking-[0.08em]">
        Infinity Powers
      </h2>

      <div className="flex justify-center flex-wrap gap-[34px] mt-[34px] p-[18px] max-md:gap-5">
        {stones.map((stone) => (
          <div
            key={stone.name}
            title={stone.name}
            className="w-[90px] h-[90px] rounded-full border border-white/[.16]
              shadow-[inset_0_6px_18px_rgba(255,255,255,0.18),0_10px_30px_rgba(0,0,0,0.35)]
              transition-all duration-300 hover:-translate-y-2 hover:scale-[1.08] hover:shadow-[0_0_25px_white]
              max-md:w-[70px] max-md:h-[70px]"
            style={{ background: stone.color }}
          />
        ))}
      </div>

      <p className="mt-7 text-base text-muted px-4">
        Skills are loading... Please wait till my second year completes!!
      </p>
    </section>
  )
}
