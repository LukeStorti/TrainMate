import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

interface HowItWorksCardProps {
  step: string;
  title: string;
  description: string;
}

const HowItWorksCards: React.FC<HowItWorksCardProps> = ({ step, title, description }) => {
  return (
    <Card className="flex flex-col items-center w-[280px] min-h-[300px] shadow-md">
      <CardHeader>
        <CardTitle className="font-bold text-primary text-3xl">{step}</CardTitle>
      </CardHeader>
      <CardContent className=" text-center">
        <h4 className="font-semibold text-xl">{title}</h4>
        <p className="mt-5">{description}</p>
      </CardContent>
    </Card>
  );
};

export default HowItWorksCards;
