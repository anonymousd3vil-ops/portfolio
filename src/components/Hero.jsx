
import background from "../assets/background.png";

export default function Hero({ snapped, snapDelay }) {
  return (
    <section
      className={`min-h-screen flex flex-col justify-center items-center text-center relative px-6 pt-[120px] pb-20 bg-cover bg-center bg-no-repeat before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-b before:from-black/70 before:via-black/[.58] before:to-black/ 
        ${snapped
          ? "opacity-0 scale-[0.3] blur-lg [transition:transform_1s_ease,opacity_1s_ease,filter_1s_ease]"
          : ""
        }
      `}
      style={{
        backgroundImage: `url(${background})`,
        ...(snapped ? { transitionDelay: snapDelay } : {}),
      }}
    >

      {/* Hero Content */}
      <div className="relative z-10">

        {/* Username */}
        <p className=" text-[clamp(22px,4vw,34px)] tracking-[0.35em] text-nick mb-3 font-normal [text-transform:none] [text-shadow:0_0_24px_rgba(255,154,60,0.35)] animate-heroFloat ">
          anonyousd3vil
        </p>

        {/* Name */}
        <h1 className=" font-display text-[clamp(68px,12vw,120px)] tracking-[8px] leading-[0.95] text-accent animate-glow [text-shadow:0_0_30px_rgba(230,36,41,0.75)] ">
          VIVEK PATEL
        </h1>

        {/* Quote */}
        <p className=" mt-[18px] italic opacity-[.88] text-white/80 max-w-[680px] mx-auto text-[clamp(1rem,2.6vw,1.12rem)] tracking-[0.06em] ">
          "I Love You In Every Universe!"
        </p>

      </div>
    </section>
  );
}
