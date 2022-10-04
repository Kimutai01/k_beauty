import React from "react";
import Particles from "react-tsparticles";
import particlesConfig from "./particles-config";

const ParticlesBackground = () => {
  return (
    <div>
      <Particles height="100vh" width="100vw" params={particlesConfig} />
    </div>
  );
};

export default ParticlesBackground;
