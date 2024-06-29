import MenuItem from "./MenuItem";

const Menu: React.FC = () => {
  return (
    <div>
      <h2 className="text-xl text-center font-semibold mb-4">COMING SOON! For Previous Upe Builders</h2>
      <div className="grid gap-4 grid-cols-2 lg:grid-cols-3 justify-center px-4 mx-auto w-[fit-content]">
        <MenuItem
          title="Season 2 Community Voter"
          image="/badges/voter.png"
          href="#"
          description="Voting is empowering. Every week, the Upe community collectively decides what gets featured in the Upe digest. We shared over 500 events and 100 more voters weighed in."
          isComingSoon
        />
        <MenuItem
          title="Carnival for a Cause Contributor"
          image="/badges/carnival.png"
          href="#"
          description="The first “Carnival for a Cause” brought together 600+ locals for a fun-filled day of carnival-style games while also supporting 12 different community causes. Upe ♥️ our initial Carnie cohort."
          isComingSoon
        />
        <MenuItem
          title="Genesis Kook"
          image="/badges/kook.png"
          href="#"
          description="Upe Kooks are collaborators who tap into their network to obtain important local information and motivate others to be involved in initiatives that enhance our communities in Costa Rica."
          isComingSoon
        />
        <MenuItem
          title="Season 2 Contributor"
          image="/badges/s2.png"
          href="#"
          description="For Season 2, locals collaborated to provide a public good. Using the Upe platform, contributors banded together to crowdsource and syndicate community information."
          isComingSoon
        />
        <MenuItem
          title="Season 1 Egg"
          image="/badges/s1.png"
          href="#"
          description="Participants of Upe Season 1 were part of our first radical local community experiment. Our idea was simple yet profound: let the community curate, own, and capitalize on their information."
          isComingSoon
        />
        <MenuItem
          title="Genesis Builder"
          image="/badges/genesis.png"
          href="#"
          description="Upe Genesis Community Builders put in time building a community knowledge base for information about our local communities’ businesses and organizations."
          isComingSoon
        />
      </div>
    </div>
  );
};

export default Menu;
