import Image from "next/image";

interface BadgeItemProps {
  title: string;
  image: string;
}

const BadgeItem: React.FC<BadgeItemProps> = ({ title, image }) => {
  return (
    <div className="flex flex-col border border-white-800 p-4 rounded-lg hover:bg-zinc-900 transition-colors hover:border-zinc-700 items-center">
      <Image src={image} width={1080} height={1080} alt={title} className="w-16 h-16 mb-2" />
      <h3 className="text-lg text-center font-semibold">{title}</h3>
    </div>
  );
};

export default BadgeItem;
