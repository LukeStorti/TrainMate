import mobility from "../public/icons/heroProgram/mobility.png";
import hiit from "../public/icons/heroProgram/hiit.png";
import yoga from "../public/icons/heroProgram/yoga.png";
import strength from "../public/icons/heroProgram/strength.png";
import walk from "../public/icons/heroProgram/walk.png";
import boxing from "../public/icons/heroProgram/boxing.png";
import reviewImage1 from "../public/images/profileImages/reviewImage1.jpg";
import reviewImage2 from "../public/images/profileImages/reviewImage2.jpg";
import reviewImage3 from "../public/images/profileImages/reviewImage3.jpg";
import reviewImage4 from "../public/images/profileImages/reviewImage4.jpg";

export const FOOTERLINKS = [
  {
    label: "Services",
    sublinks: ["Personal Training", "12-Week Shred Blitz", "24-Week Body Transformation"],
  },
  {
    label: "Company",
    sublinks: ["About", "Blog", "Terms & Conditions", "Privacy Policy"],
  },
  {
    label: "Support",
    sublinks: ["Contact"],
  },
];

export const MENULINKS = [
  { label: "Programs", href: "/my-programs" },
  { label: "Goals", href: "/my-goals" },
  { label: "Settings", href: "/settings" },
  { label: "Profile", href: "/my-profile" },
];

export const HEROPROGRAMDATA = [
  {
    title: "SWEAT IT OUT",
    data: [
      {
        title: "Monday",
        subtitle: "Strength Training",
        image: strength,
      },
      {
        title: "Tuesday",
        subtitle: "HIIT Class",
        image: hiit,
      },
      {
        title: "Wednesday",
        subtitle: "Yoga Class",
        image: yoga,
      },
      {
        title: "Thursday",
        subtitle: "Strength Training",
        image: strength,
      },
      {
        title: "Friday",
        subtitle: "Long Walk",
        image: walk,
      },
      {
        title: "Saturday",
        subtitle: "Boxing Class",
        image: boxing,
      },
      {
        title: "Sunday",
        subtitle: "Yoga Class",
        image: yoga,
      },
    ],
  },
  {
    title: "BUILD STRENGTH",
    data: [
      { title: "Monday", subtitle: "Mobility Work", image: mobility },
      { title: "Tuesday", subtitle: "HIIT Class", image: hiit },
      { title: "Wednesday", subtitle: "Yoga Class", image: yoga },
      { title: "Thursday", subtitle: "Strength Training", image: strength },
      { title: "Friday", subtitle: "Long Walk", image: walk },
      { title: "Saturday", subtitle: "HIIT Class", image: hiit },
      { title: "Sunday", subtitle: "Strength Training", image: strength },
    ],
  },
];

export const HOWITWORKS = [
  {
    step: "1",
    title: "Create an Account",
    description:
      "Sign up and create a personal account to get started with managing your workout programs and tracking your progress.",
  },
  {
    step: "2",
    title: "Design Your Workout",
    description:
      "Customize and design your workout programs based on your fitness goals and preferences. Add exercises, set schedules, and more.",
  },
  {
    step: "3",
    title: "Track Your Progress",
    description:
      "Monitor your progress over time. Track your workouts, log your achievements, and see how you are advancing towards your goals.",
  },
  {
    step: "4",
    title: "Set and Achieve Goals",
    description:
      "Set personal fitness goals and milestones. Use our tools to track your progress towards these goals and stay motivated.",
  },
];

export const TESTIMONIALS = [
  {
    name: "Emily R.",
    description:
      "TrainMate has completely transformed my workout routine. I feel stronger and more motivated than ever!",
    image: reviewImage2,
    stars: 4,
  },
  {
    name: "Michael S.",
    description:
      "The ability to track my progress and set goals with TrainMate has been a game-changer. Highly recommend this app!",
    image: reviewImage1,
    stars: 5,
  },
  {
    name: "Sarah L.",
    description:
      "Creating workout plans with TrainMate has never been easier. It's user-friendly and intuitive.",
    image: reviewImage4,
    stars: 5,
  },
  {
    name: "John D.",
    description:
      "I love the variety of programs available on TrainMate. There's something for everyone, and I've seen great results!",
    image: reviewImage3,
    stars: 4,
  },
];
