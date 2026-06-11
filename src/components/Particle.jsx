import React, { useMemo } from "react";
import Particles, { ParticlesProvider } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

// init コールバックは ParticlesProvider のライフサイクル全体で
// 安定した参照である必要があるため、モジュールスコープで定義する。
const initParticles = async (engine) => {
  await loadSlim(engine);
};

function Particle() {
  const options = useMemo(
    () => ({
      particles: {
        number: { value: 160, density: { enable: true } },
        color: { value: "#0c0513" },
        shape: { type: "circle" },
        opacity: { value: 0.2 },
        size: { value: { min: 1, max: 3 } },
        links: {
          enable: true,
          distance: 150,
          color: "#0c0513",
          opacity: 0.4,
          width: 1,
        },
        move: {
          enable: true,
          speed: 3,
          direction: "none",
          random: false,
          straight: false,
          outModes: { default: "out" },
        },
      },
      interactivity: {
        detectsOn: "canvas",
        events: {
          onHover: { enable: true, mode: "repulse" },
          onClick: { enable: true, mode: "push" },
          resize: { enable: true },
        },
        modes: {
          grab: { distance: 400, links: { opacity: 1 } },
          bubble: { distance: 400, size: 40, duration: 2, opacity: 8 },
          repulse: { distance: 200, duration: 0.4 },
          push: { quantity: 4 },
          remove: { quantity: 2 },
        },
      },
      detectRetina: true,
    }),
    []
  );

  return (
    <ParticlesProvider init={initParticles}>
      <Particles id="tsparticles" options={options} />
    </ParticlesProvider>
  );
}

export default Particle;
