// Wait until page fully loads
window.addEventListener("load", () => {

    const snapButton = document.getElementById("snapButton");
    const intro = document.getElementById("intro");

    const canvas = document.getElementById("introCanvas");
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    /* ==============================
       PARTICLE INTRO ANIMATION
    ============================== */

    let particles = [];

    class Particle {

        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;

            this.tx = canvas.width / 2 + (Math.random() * 300 - 150);
            this.ty = canvas.height / 2;

            this.size = 2;
            this.speed = Math.random() * 0.04 + 0.02;
        }

        update() {
            this.x += (this.tx - this.x) * this.speed;
            this.y += (this.ty - this.y) * this.speed;
        }

        draw() {
            ctx.fillStyle = "#e62429";
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }

    }

    // create particles
    for (let i = 0; i < 1200; i++) {
        particles.push(new Particle());
    }

    // animate particles
    function animate() {

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        particles.forEach(p => {
            p.update();
            p.draw();
        });

        requestAnimationFrame(animate);
    }

    animate();


    /* ==============================
       REMOVE INTRO AFTER ANIMATION
    ============================== */

    setTimeout(() => {

        intro.style.transition = "opacity 1.5s ease";
        intro.style.opacity = "0";

        setTimeout(() => {
            intro.style.display = "none";
        }, 1500);

    }, 8000);


    window.addEventListener("resize", () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });

    /* ==============================
       THANOS SNAP EFFECT
    ============================== */

    if (snapButton) {

        snapButton.addEventListener("click", () => {

            let elements = document.querySelectorAll("section, header, footer");

            elements.forEach((el, i) => {

                setTimeout(() => {
                    el.style.transition = "1s";
                    el.style.opacity = "0";
                    el.style.transform = "scale(0.3)";
                }, i * 200);

            });

        });

    }
});
