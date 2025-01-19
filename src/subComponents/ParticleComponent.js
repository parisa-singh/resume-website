import React from "react";
import styled from "styled-components";
import { loadFull } from "tsparticles"; // Load the full particles engine
import { useCallback } from "react";
import Particles from "react-tsparticles";

// Import particle config files
import configDark from "../config/particlesjs-config.json";
import configLight from "../config/particlesjs-config-light.json";

const Box = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 0;
`;

const ParticleComponent = ({ theme }) => {
  const particlesInit = useCallback(async (engine) => {
    // This loads the tsparticles engine
    await loadFull(engine);
  }, []);

  return (
    <Box>
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={theme === "light" ? configLight : configDark}
      />
    </Box>
  );
};

export default ParticleComponent;
