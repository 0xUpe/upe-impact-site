import React from "react";

const AboutPage: React.FC = () => {
  return (
    <>
    <div className="outer-container pb-10 w-full mx-auto max-w-screen-xl">
      <div className="inner-container mx-auto px-4 max-w-screen-lg">
        <header className="flex flex-col items-center mb-10 md:mb-10 p-1 pt-2">        
          <h1 className="text-2xl md:text-6xl tracking-tighter mb-2 text-zinc-100 mt-2">
          What is <span className="text-upe-pink">Upe Impact</span>
          </h1>
        </header>          
          <p className="text-lg mb-4">
            Upe is bringing IRL local impact data in Costa Rica to the blockchain. This past year our genesis local communities in Guanacaste have collaborated to share community events and local info with one another. We even hosted our first IRL community event  “Carnival for a Cause” on May 25, 2024 in collaboration with Brothers of Ale and 12 NGOs. Now it’s time to put these good deeds and hard work onchain and on display. 
          </p>
          <h3 className="text-2xl font-semibold mb-4">Overview</h3>
          <p className="text-lg mb-4">
            Upe Impact is a revolutionary web application designed to facilitate the coordination of community betterment projects. With an integrated authentication system powered by thirdweb, the application generates user wallets upon login, ensuring secure access for all users, regardless of their technical expertise, from web3 natives to novices. This design ensures that any web user can utilize this tool with zero web3 knowledge.
            </p>
            <p className="text-lg mb-4">
            In essence, Upe Impact puts the heart of their communities on the blockchain by providing tools that enhance efficiency in community projects and ensuring that the efforts of volunteers and organizers are accurately recorded, verified, and celebrated.
          </p>
          <h3 className="text-2xl font-semibold mb-4">Challenges and Solutions</h3>
          <p className="text-lg mb-4">
            One significant challenge was introducing blockchain technology to local communities, presenting a steep learning curve. Instead of expecting locals to become web3 technologists overnight, we chose to work with them and run experiments to gauge their capabilities while introducing opportunities to collaborate and participate in Upe’s mission of crowdsource and syndicating hyperlocal information. We also have been holding weekly off-chain votes to engage the community and gradually introduce them to decentralized decision-making processes.</p>
            <p className="text-lg mb-4">
            The integration of URL and IRL efforts posed a unique challenge, as community-driven impact often goes unreported. By putting Upe community contributor data on-chain, we aim to actualize a real-world use case for using crypto as a coordination mechanism. We aspire for Upe Impact to be available to more community organizations in the future.
          </p>
          <h3 className="text-2xl font-semibold mb-4">Problem Solved</h3>
          <p className="text-lg mb-4">
            Upe empowers communities in Costa Rica to crowdsource and syndicate local information, developing real-world use cases that harness blockchain technology to scale a public good. Community information is often only shared in gated chats and private groups. Upe serves as a hub for anyone to post information, such as community events, water consumption reports, and beach cleanup collection results, making this data publicly available to everyone. For its first use case, Upe Impact functions as a ledger of good deeds and contributions individuals in our community make. 
          </p>
          <h3 className="text-2xl font-semibold mb-4">Local Impact and Community Achievements</h3>
          <ul className="list-disc pl-5 mb-4">
            <li>2.2 million search impressions</li>
            <li>80k unique users</li>
            <li>1k subscribers</li>
            <li>50 individuals contributing to and syndicating local knowledge</li>
            <li>3 local communities: Tamarindo, Playa Flamingo, and Playa Grande</li>
          </ul>
          <h3 className="text-2xl font-semibold mb-4">Onchain Summer Initiative</h3>
          <p className="text-lg mb-4">
            For Onchain Summer, Upe is bringing our IRL community impact data on-chain. Our initial goal was to issue Hypercerts and Ethereum Attestation Services (EAS) to members in our Costa Rican communities and partner organizations for past contributions. Hypercerts is going through a major upgrade during the buildathon, so we pivoted to onboard our contributors by incentivizing them to claim their community badges. Once they have their wallets, they will be primed to be able to claim their Hypercerts once later this summer. </p>
          <p className="text-lg mb-4">
            Our deliverables include building a framework and schema for past community contributions on-chain, working with local contributors, NGOs and businesses to issue Hypercerts and attestations. Upe is also organizing more events (next one in August 2024) for more opportunities to capture impact data, and onboarding Upe contributors and local participants to Coinbase Wallet.
          </p>
          <h3 className="text-2xl font-semibold mb-4">Our Aspirations</h3>
          <p className="text-lg">
            We hope our community experiences an &quot;ah-ha&quot; moment, realizing the value of web3 technology for impact narratives. We anticipate this event to be a springboard for more conversations, bringing more people into the Upe community and onchain, utilizing Base and Coinbase Wallet.
            </p>
         </div>
      </div>
    </>
  );
};

export default AboutPage;
