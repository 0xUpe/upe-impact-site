import BadgeItem from "./BadgeItem";

const Badges: React.FC = () => {
  return (
    <div className="badges-outer bg-upe-gradient w-full p-2 md:p-6 lg:p-6 max-w-screen-xl">
      <div className="badges-inner bg-upe-grey px-4 py-8 sm:px-6 lg:px-8 mx-auto max-w-screen-lg rounded-xl">
        <h2 className="text-xl text-center mb-10"><span className="text-upe-pink">Upe Impact</span> Badges for Local Communities in Guanacaste, Costa Rica</h2>
        <div className="grid gap-4 grid-cols-2 md:grid-cols-2 lg:grid-cols-4 justify-center mx-auto w-[fit-content]">
          <BadgeItem title="Upe Local Community Ally" image="/badges/ally.png" />
          <BadgeItem title="Genesis Builder" image="/badges/genesis.png" />
          <BadgeItem title="Season 1 Egg" image="/badges/s1.png" />
          <BadgeItem title="Season 2 Contributor" image="/badges/s2.png" />
          <BadgeItem title="Season 2 Community Voter" image="/badges/voter.png" />
          <BadgeItem title="Genesis Kook" image="/badges/kook.png" />
          <BadgeItem title="Carnival for a Cause Contributor" image="/badges/carnival.png" />
          <BadgeItem title="More!" image="/badges/more.png" />
        </div>
      </div>
    </div>
  );
};

export default Badges;
