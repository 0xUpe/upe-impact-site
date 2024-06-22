import Image from "next/image";

interface ProjectsItemProps {
  image: string;
  title: string;
  href: string;
}

const ProjectsItem: React.FC<ProjectsItemProps> = ({ image, title, href }) => {
  return (
    <div className="flex flex-col p-4 items-center">
      <Image src={image} width={300} height={150} alt={title} className="w-50 mb-2" />
      <a href={href} target="_blank" rel="noopener noreferrer" className="text-white-500 underline">
        {title}
      </a>
    </div>
  );
};

export default ProjectsItem;
