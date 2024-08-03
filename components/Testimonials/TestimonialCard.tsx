import Image, { StaticImageData } from "next/image";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  description: string;
  image: StaticImageData;
  stars: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ name, description, image, stars }) => {
  return (
    <Card className="flex items-center flex-col border bg-muted h-[250px]">
      <CardHeader className="flex flex-row items-center justify-between w-full">
        <div className="flex items-center gap-4">
          <Image
            src={image}
            alt="review_image"
            width={60}
            height={60}
            className="object-contain rounded-full"
          />
          <h4 className="font-bold  md:text-xl">{name}</h4>
        </div>
      </CardHeader>
      <CardContent>
        <p className="font-medium mt-8">{description}</p>
        <div className="flex items-center gap-2 mt-4">
          {[...Array(stars)].map((_, index) => (
            <Star key={index} className="text-primary" fill="#16a34a" size={15} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
