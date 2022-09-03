import dynamic from "next/dynamic";

const componentMap = {
  default: dynamic(() => import("./Default")),
  skillsBlue: dynamic(() => import("./SkillsBlue")),
};

const Newsletter = ({ slice, index }) => {
  if (!slice.variation) return null;

  const VariableComponent = componentMap[slice.variation];

  return <VariableComponent id={`${index}-Newsletter`} slice={slice} />;
};

export default Newsletter;
