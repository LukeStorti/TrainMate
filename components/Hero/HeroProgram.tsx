import HeroProgramItem from "./HeroProgramItem";
import { StaticImageData } from "next/image";

interface HeroProgramData {
  title: string;
  subtitle: string;
  image: StaticImageData;
}

interface HeroProgramProps {
  title: string;
  data: HeroProgramData[];
}

const HeroProgram: React.FC<HeroProgramProps> = ({ title, data }) => {
  return (
    <div className="w-full mt-8 flex flex-col items-center justify-center border rounded-lg bg-muted">
      <h2 className="w-full bg-primary text-white font-semibold py-4 text-xl text-center rounded-t">
        {title}
      </h2>
      <div className="flex flex-col items-center my-4 gap-2">
        {data.map((item) => (
          <HeroProgramItem
            key={item.title}
            subtitle={item.subtitle}
            title={item.title}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroProgram;
