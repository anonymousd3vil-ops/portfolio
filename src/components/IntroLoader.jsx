import { useEffect, useRef } from "react";

const scanLines = [
  { text: "INITIALIZING MARVEL PROTOCOL", delay: 0.4 },
  { text: "SCANNING MULTIVERSE", delay: 1.1 },
  { text: "LOCATING HERO PROFILE", delay: 1.8 },
];

export default function IntroLoader({ onFinish }) {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let width = window.innerWidth;
    let height = window.innerHeight;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;

      const dpr = window.devicePixelRatio || 1;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();

    // PARTICLES

    class Particle {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;

        this.targetX =
          width / 2 + (Math.random() - 0.5) * Math.min(width * 0.5, 700);
        this.targetY =
          height / 2 + (Math.random() - 0.5) * Math.min(height * 0.35, 400);

        this.size = Math.random() * 1.8 + 0.4;
        this.speed = Math.random() * 0.025 + 0.012;
        this.alpha = Math.random() * 0.7 + 0.15;
      }

      update() {
        this.x += (this.targetX - this.x) * this.speed;
        this.y += (this.targetY - this.y) * this.speed;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);

        ctx.fillStyle = `rgba(230, 36, 41, ${this.alpha})`;
        ctx.shadowBlur = 8;
        ctx.shadowColor = "#e62429";

        ctx.fill();

        ctx.shadowBlur = 0;
      }
    }

    const count = width < 768 ? 250 : 700;
    const particles = Array.from({ length: count }, () => new Particle());

    let animationId;
    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();
    window.addEventListener("resize", resize);

    // -------------------------
    // EXIT ANIMATION
    // -------------------------

    const fadeTimer = setTimeout(() => {
      containerRef.current?.classList.add("opacity-0", "invisible");
    }, 6500);

    const removeTimer = setTimeout(() => {
      onFinish?.();
    }, 7700);

    return () => {
      cancelAnimationFrame(animationId);

      window.removeEventListener("resize", resize);

      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, [onFinish]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[99999] w-screen h-screen min-h-dvh overflow-hidden flex items-center justify-center bg-black transition-all duration-[1200ms] ease-in-out "
    >
      {/* BACKGROUND GLOW */}
      <div className=" absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(230,36,41,0.16)_0%,rgba(0,0,0,0.75)_45%,#000_80%)]" />

      {/* PARTICLES */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />

      {/* SCANLINES */}
      <div className=" absolute inset-0 pointer-events-none opacity-20 bg-[repeating-linear-gradient(to_bottom,transparent_0px,transparent_3px,rgba(255,255,255,0.04)_4px)] " />

      {/* VIGNETTE */}
      <div className=" absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,transparent_25%,rgba(0,0,0,0.45)_65%,#000_100%)] " />

      {/* MAIN CONTENT */}
      <main className="relative z-10 w-full max-w-4xl px-6 text-center">
        {/* SYSTEM TEXT */}

        <div className="space-y-2">
          {scanLines.map((line) => (
            <p
              key={line.text}
              className=" opacity-0 font-mono text-[10px] sm:text-xs md:text-sm tracking-[3px] sm:tracking-[5px] text-white/60 animate-[fadeIn_0.8s_ease_forwards] "
              style={{
                animationDelay: `${line.delay}s`,
              }}
            >
              <span className="text-red-500 mr-2">&gt;</span>
              {line.text}...
            </p>
          ))}
        </div>

        {/* USERNAME */}
        <p
          className="mt-6 opacity-0 font-mono text-xs sm:text-sm tracking-[4px] sm:tracking-[6px] text-orange-400 drop-shadow-[0_0_12px_rgba(255,154,60,0.5)] animate-[fadeIn_0.8s_ease_forwards]"
          style={{
            animationDelay: "2.6s",
          }}
        >
          anonymousd3vil
        </p>

        {/* NAME */}
        <h1
          className="mt-6 mb-6 opacity-0 font-black text-[clamp(42px,10vw,110px)] leading-none tracking-[4px] sm:tracking-[8px] text-red-500 drop-shadow-[0_0_35px_rgba(230,36,41,0.45)] animate-[heroReveal_1.4s_cubic-bezier(0.16,1,0.3,1)_forwards]"
          style={{
            animationDelay: "3.2s",
          }}
        >
          VIVEK PATEL
        </h1>

        {/* ACCESS GRANTED */}
        <div
          className="inline-flex items-center gap-2 px-4 py-2 border border-red-500/30 bg-red-500/5 font-mono text-[10px] sm:text-xs tracking-[3px] text-white/80 opacity-0 animate-[fadeIn_0.8s_ease_forwards]"
          style={{
            animationDelay: "4.6s",
          }}
        >
          <span className="size-1.5 rounded-full bg-red-500 shadow-[0_0_10px_#e62429] animate-pulse" />
          ACCESS GRANTED
        </div>

        {/* PROGRESS */}
        <div
          className="w-[min(420px,70vw)] mx-auto mt-8 opacity-0 animate-[fadeIn_0.8s_ease_forwards]"
          style={{
            animationDelay: "4.9s",
          }}
        >
          <div className="flex justify-between mb-2 font-mono text-[8px] tracking-[2px] text-white/30">
            <span>SYSTEM BOOT</span>

            <span>100%</span>
          </div>

          <div className="h-[2px] w-full bg-white/10 overflow-hidden">
            <div
              className="h-full w-full bg-red-500 shadow-[0_0_10px_rgba(230,36,41,0.9)] origin-left animate-[scaleX_6s_linear_forwards]"
              style={{
                transform: "scaleX(0)",
              }}
            />
          </div>
        </div>
      </main>
    </div>
  );
}
