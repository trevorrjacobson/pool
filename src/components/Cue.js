import React from "react";

function Cue() {
  return (
    <mesh castShadow>
      <cylinderGeometry attach="geometry" args={[0.1, 0.15, 12, 32, 32]} />
      <meshPhongMaterial attach="material" color={0xffffff} />
    </mesh>
  );
}

Cue.propTypes = {
  setRef: PropTypes.objectOf(PropTypes.any),
  cueRef: PropTypes.objectOf(PropTypes.any),
  position: PropTypes.arrayOf(PropTypes.any),
};

Cue.defaultProps = {
  setRef: {},
  cueRef: {},
  position: [0, 0, 0],
};

export default Cue;
