import Image from "next/image";

interface AlliesItemProps {
  image: string;
  title: string;
}

const AlliesItem: React.FC<AlliesItemProps> = ({ image, title }) => {
  return (
    <div className="flex flex-col p-4 items-center mx-auto w-[fit-content]">
      <Image src={image} width={300} height={150} alt={title} className="w-50 mb-2" />
    </div>
  );
};

export default AlliesItem;
