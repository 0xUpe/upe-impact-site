import ProjectsItem from "./ProjectsItem";

const Projects: React.FC = () => {
  return (
    <div>
      <h3 className="text-xl text-center mt-10">See Our Projects on</h3>
      <div className="grid gap-4 grid-cols-2 md:grid-cols-2 lg:grid-cols-2 justify-center items-start w-[fit-content] mx-auto">
        <ProjectsItem image="/projects/giv.png" title="for Contributors" href="https://giveth.io/project/upe-crowdsourcing-community-info-in-costa-rica?tab=updates" />
        <ProjectsItem image="/projects/gc.png" title="for Upe Impact" href="https://explorer.gitcoin.co/#/round/42161/25/127" />
      </div>
    </div>
  );
};

export default Projects;
