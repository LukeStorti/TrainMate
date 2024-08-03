import Image, { StaticImageData } from "next/image";

interface HeroProgramItemProps {
  title: string;
  subtitle: string;
  image: StaticImageData;
}

const HeroProgramItem: React.FC<HeroProgramItemProps> = ({ title, subtitle, image }) => {
  return (
    <div className="flex w-full items-center gap-4">
      <Image src={image} alt="icon" width={40} height={40} className="object-contain" />
      <div className="flex flex-col items-start">
        <h3 className="font-semibold">{title}</h3>
        <p className="text-muted-foreground">{subtitle}</p>
      </div>
    </div>
  );
};

export default HeroProgramItem;
