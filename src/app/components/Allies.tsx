import AlliesItem from "./AlliesItem";

const Allies: React.FC = () => {
  return (
    <div>
      <h3 className="text-xl text-center mt-10">Our Allies & Supporters</h3>
      <div className="grid gap-4 grid-cols-2 md:grid-cols-2 lg:grid-cols-4 justify-center items-start w-[fit-content] mx-auto">
        <AlliesItem image="/allies/pn.png" title="Public Nouns" />
        <AlliesItem image="/allies/gm.png" title="General Magic" />
        <AlliesItem image="/allies/ens.png" title="ENS Public Good Small-Grants" />
        <AlliesItem image="/allies/mc.png" title="Metacamp" />
      </div>
    </div>
  );
};

export default Allies;
