import dynamic from "next/dynamic";

const componentMap = {
  default: dynamic(() => import("./Default")),
  aboutHero: dynamic(() => import("./AboutHero")),
};

const Hero = ({ slice, index }) => {
  const VariableComponent = componentMap[slice.variation];

  return <VariableComponent id={`${index}-Hero`} slice={slice} />;
};

export default Hero;
