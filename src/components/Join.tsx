import Image from "next/image";
import GetSocial from "./GetSocial";

const Join: React.FC = () => {
  return (
    <div className="join w-full p-2 md:p-6 lg:p-6 max-w-screen-xl flex flex-col md:flex-row items-center justify-center mx-auto">
      <div className="grid gap-4 grid-cols-2 md:grid-cols-2 lg:grid-cols-2 justify-center items-start mx-auto w-[fit-content]">
        <div className="md:w-6/10 w-[fit-content] mx-auto w-full">
          <div className="h-1 bg-gradient-to-r from-pink-600 via-red-500 to-yellow-400 rounded mb-10 w-11/12"></div>
          <h3 className="text-xl md:text-2xl lg:text-3xl font-bold">Join the Initiative. <br/> Become an Upe <br/> Contributor.</h3>
          <p className="mt-4">Be a steward of your local community&apos;s information.</p>
          <a href="https://u.pe/" target="_blank" rel="noopener noreferrer" className="mt-6 inline-block bg-blue-500 text-white py-2 px-4 rounded bg-upe-pink">START TODAY</a>
          <div className="h-1 bg-gradient-to-r from-pink-600 via-red-500 to-yellow-400 rounded my-10 w-11/12"></div>
          <GetSocial />
        </div>
        <div className="flex justify-center md:w-4/10 mt-6 md:mt-0 w-[fit-content] mx-auto w-full">
          <Image src="/home/upemobile.png" width={415} height={841} alt="Upe Home" className="w-1/2 h-auto" />
        </div>
      </div>
    </div>
  );
};

export default Join;
