import Image from "next/image";

const WhatIsUpe: React.FC = () => {
  return (
    <div className="what-is-upe-outer bg-white w-full p-2 md:p-6 lg:p-6 max-w-screen-xl">
      <div className="what-is-upe-inner w-full p-2 md:p-6 lg:p-6 max-w-screen-lg flex flex-col md:flex-row items-center justify-center mx-auto bg-white rounded border-upe-grey border-4 rounded-xl grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="flex flex-col items-center">
          <h2 className="text-4xl font-bold mb-4 text-upe-grey">WHAT IS <span className="text-upe-pink">UPE IMPACT</span>?</h2>
          <div className="w-full">
            <Image src="/home/arrow.png" alt="Upe Impact" width={484} height={241} />
          </div>
        </div>
        <div className="flex flex-col items-center">
          <p className="mb-4 text-upe-grey"><span className="text-upe-pink">Upe Impact</span> is a web app designed to facilitate the coordination of community betterment projects and track their results on-chain. With an integrated authentication system the application generates user smart accounts upon login, ensuring secure access for all users, regardless of their technical expertise, from web3 natives to novices.</p>
          <a href="/about" rel="noopener noreferrer" className="mt-6 inline-block bg-blue-500 text-white py-2 px-4 rounded bg-upe-pink">LEARN MORE</a>
        </div>
      </div>
    </div>
  );
};

export default WhatIsUpe;
