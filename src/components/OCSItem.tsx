import Image from "next/image";

interface OCSItemProps {
  image: string;
  title: string;
  width: string;
}

const OCSItem: React.FC<OCSItemProps> = ({ image, title, width }) => {
  return (
    <div className={`flex flex-col p-0 items-center mx-auto ${width}`}>
      <Image src={image} width={300} height={150} alt={title} className="w-50 mb-2" />
    </div>
  );
};

export default OCSItem;
