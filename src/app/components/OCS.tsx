import OCSItem from "./OCSItem";
import Image from "next/image";
import upeIcon from "@public/upe_favicon.png";

const OCS: React.FC = () => {
  return (
    <div>
      <div className="h-1 bg-gradient-to-r from-pink-600 via-red-500 to-yellow-400 rounded my-20 w-11/12 mx-auto"></div>
      <div className="flex items-center justify-center mt-20">
        <Image src={upeIcon} alt="" width={60} height={60} style={{ filter: "drop-shadow(0px 0px 24px #a726a9a8)" }} />
        <h3 className="text-xl text-center ml-4"><span className="text-upe-pink">Upe Impact</span> was built during</h3>
      </div>
      <Image src="/home/onchainsummerw.png" width={946} height={279} alt="Onchain Summer" className="mx-auto" />
      <div className="grid gap-4 grid-cols-2 md:grid-cols-2 lg:grid-cols-2 justify-center items-start mx-auto w-[fit-content]">
        <OCSItem image="/ocs/base.png" title="Base" width="w-2/6" />
        <OCSItem image="/ocs/coinbase.png" title="Coinbase" width="w-2/6" />
        <OCSItem image="/ocs/nouns.png" title="Nouns DAO" width="w-full" />
        <div className="flex flex-col p-0 items-center m-auto">
          <p className="">for the Nouns DAO track, “Unplugged: <br/> Making a difference IRL&lt;-&gt;URL”</p>
        </div>
      </div>
      <div className="flex justify-center my-10">
        <a href="https://devfolio.co/projects/upe-impact-521d" target="_blank" rel="noopener noreferrer" className="bg-upe-pink text-white px-4 py-2 rounded">
          SEE APPLICATION
        </a>
      </div>
      <div className="h-1 bg-gradient-to-r from-pink-600 via-red-500 to-yellow-400 rounded mt-10 mb-20 w-11/12 mx-auto"></div>
    </div>
  );
};

export default OCS;
