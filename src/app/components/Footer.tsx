import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <div className="flex flex-col items-center mt-20">
      <Link className="text-center text-sm text-gray-400" target="_blank" href="https://github.com/0xUpe/upe-impact-site">
        View code on GitHub
      </Link>
    </div>
  );
};

export default Footer;
