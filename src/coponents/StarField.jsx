import { useEffect, useRef } from "react";

export default function StarField() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let width;
    let height;

    function resize() {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    }

    resize();
    window.addEventListener("resize", resize);

    const STAR_COUNT = 220;

    const stars = [];

    for (let i = 0; i < STAR_COUNT; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.8 + 0.3,
        alpha: Math.random(),
        speed: Math.random() * 0.015 + 0.003,
        direction: Math.random() > 0.5 ? 1 : -1,
      });
    }

    function animate() {
      ctx.clearRect(0, 0, width, height);

      for (const star of stars) {
        star.alpha += star.speed * star.direction;

        if (star.alpha >= 1) {
          star.alpha = 1;
          star.direction = -1;
        }

        if (star.alpha <= 0.2) {
          star.alpha = 0.2;
          star.direction = 1;
        }

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${star.alpha})`;
        ctx.fill();
      }

      requestAnimationFrame(animate);
    }

    animate();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="starfield" />;
}