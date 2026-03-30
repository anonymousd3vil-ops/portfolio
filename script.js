window.addEventListener("load", () => {
    const snapButton = document.getElementById("snapButton");
    const intro = document.getElementById("intro");
    const navbar = document.getElementById("navbar");
    const sections = document.querySelectorAll(".section");
    const canvas = document.getElementById("introCanvas");
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    sections.forEach((section) => section.classList.add("reveal"));

    const particles = [];

    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.tx = canvas.width / 2 + (Math.random() * 320 - 160);
            this.ty = canvas.height / 2 + (Math.random() * 180 - 90);
            this.size = Math.random() * 1.8 + 0.6;
            this.speed = Math.random() * 0.035 + 0.018;
            this.alpha = Math.random() * 0.7 + 0.2;
        }

        update() {
            this.x += (this.tx - this.x) * this.speed;
            this.y += (this.ty - this.y) * this.speed;
        }

        draw() {
            ctx.fillStyle = `rgba(230, 36, 41, ${this.alpha})`;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    const particleCount = window.innerWidth < 768 ? 400 : 900;

    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach((particle) => {
            particle.update();
            particle.draw();
        });
        requestAnimationFrame(animate);
    }

    function handleNavbarState() {
        navbar.classList.toggle("scrolled", window.scrollY > 18);
    }

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.18 });

    animate();
    sections.forEach((section) => revealObserver.observe(section));
    handleNavbarState();

    setTimeout(() => {
        intro.style.opacity = "0";
        intro.style.visibility = "hidden";

        setTimeout(() => {
            intro.style.display = "none";
        }, 1200);
    }, 6500);

    window.addEventListener("resize", () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });

    window.addEventListener("scroll", handleNavbarState);

    if (snapButton) {
        snapButton.addEventListener("click", () => {
            const elements = document.querySelectorAll("section, header, footer");

            elements.forEach((element, index) => {
                setTimeout(() => {
                    element.style.transition = "transform 1s ease, opacity 1s ease, filter 1s ease";
                    element.style.opacity = "0";
                    element.style.transform = "scale(0.3)";
                    element.style.filter = "blur(8px)";
                }, index * 200);
            });
        });
    }
});
