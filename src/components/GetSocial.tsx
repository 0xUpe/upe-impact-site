import Image from "next/image";
import fbIcon from "@public/fbicon.svg";
import twIcon from "@public/twicon.svg";
import igIcon from "@public/igicon.svg";
import ghIcon from "@public/ghicon.svg";

const GetSocial: React.FC = () => {
  return (
    <div className="flex flex-col items-center mt-20">
      <div className="w-full max-w-screen-xl grid grid-cols-2 gap-4">
        <div className="flex items-center">
          <h2 className="text-2xl font-bold">GET SOCIAL</h2>
        </div>
        <div className="flex items-center space-x-4">
          <a href="https://facebook.com/hola.upe/" target="_blank" rel="noopener noreferrer">
            <Image src={fbIcon} alt="Upe FB" width={32} height={32} style={{ filter: "drop-shadow(0px 0px 24px #a726a9a8)" }} />
          </a>
          <a href="https://twitter.com/upelocal" target="_blank" rel="noopener noreferrer">
            <Image src={twIcon} alt="Upe FB" width={32} height={32} style={{ filter: "drop-shadow(0px 0px 24px #a726a9a8)" }} />
          </a>
          <a href="https://www.instagram.com/upe.local/" target="_blank" rel="noopener noreferrer">
            <Image src={igIcon} alt="Upe FB" width={32} height={32} style={{ filter: "drop-shadow(0px 0px 24px #a726a9a8)" }} />
          </a>
          <a href="https://github.com/0xUpe/upe-impact-site/" target="_blank" rel="noopener noreferrer">
            <Image src={ghIcon} alt="Upe FB" width={32} height={32} style={{ filter: "drop-shadow(0px 0px 24px #a726a9a8)" }} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default GetSocial;
