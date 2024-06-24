import Image from "next/image";
import Link from "next/link";

interface MenuItemProps {
  title: string;
  image: string;
  href: string;
  description: string;
  isComingSoon?: boolean;
}

const MenuItem: React.FC<MenuItemProps> = ({ title, image, href, description, isComingSoon }) => {
  const content = (
    <div className="flex flex-col border border-upe-silver-800 p-4 rounded-lg hover:bg-zinc-900 transition-colors hover:border-zinc-700 items-center justify-center mx-auto w-[fit-content]">
      <h2 className="text-lg font-semibold mb-2 text-center">{title}</h2>
      <Image src={image} width={1080} height={1080} alt={title} className="w-32 h-32 mb-2" />
      <p className="text-sm text-zinc-400">{description}</p>
      {isComingSoon && <p className="text-sm text-upe-pink font-semibold mt-2">Coming Soon</p>}
    </div>
  );

  return isComingSoon ? content : <Link href={href}>{content}</Link>;
};

export default MenuItem;
