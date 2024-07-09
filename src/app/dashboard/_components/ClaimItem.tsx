import Image from "next/image";
import Link from "next/link";

interface ClaimItemProps {
  title: string;
  image: string;
  href: string;
  description: React.ReactNode;
  isComingSoon?: boolean;
  claimable?: string;  
}

const ClaimItem: React.FC<ClaimItemProps> = ({ title, image, href, description, isComingSoon, claimable }) => {
  const content = (
    <div className="flex flex-col border border-upe-silver-800 p-2 md:p-4 lg:p-4 rounded-lg hover:bg-zinc-900 transition-colors hover:border-zinc-700 items-center justify-center mx-auto w-full">
      <h2 className="text-lg font-semibold mb-2 text-center">{title}</h2>
      <Image src={image} width={1080} height={1080} alt={title} className="w-32 h-32 mb-2" />
      <p className="hidden md:block lg:block text-sm text-zinc-400">{description}</p>
      {isComingSoon && <p className="text-sm text-upe-pink font-semibold mt-4">Coming Soon</p>}
      {claimable && <p className="text-center text-sm text-upe-pink font-semibold mt-4">{claimable}</p>}
    </div>
  );

  return isComingSoon ? content : <Link href={href}>{content}</Link>;
};

export default ClaimItem;