import { OnboardingData } from "@eLearning/types/types";
import { images } from "assets/image";

const onboardingData: OnboardingData[] = [
    {
      id: 1,
      imgSource: images.onboarding1,
      text: "Better way to learning is calling you!",
      description:
        'Discover innovative and engaging approaches to learning that maximize understanding, retention, and application. Whether through interactive tools, real-world problem-solving, or personalized guidance, our focus is on making education accessible, enjoyable, and effective for learners of all ages. Empower yourself with strategies that adapt to your needs, allowing you to learn smarter, not harder.',
    },
    {
      id: 2,
      imgSource: images.onboarding2,
      text: "Find yourself  by doing whatever you do !",
      description:
        "Unlock your true potential by fully immersing yourself in whatever you do. Each experience, skill, and discovery is a step toward understanding yourself better. Embrace the journey of learning—whether it's mastering a craft, solving challenges, or exploring new perspectives. Growth comes not just from reaching goals but from the process itself. Learning is not only about acquiring knowledge; it’s about uncovering who you are and who you can become.",
    },
    {
      id: 3,
      imgSource: images.onboarding3,
      text: "It’s not just learning, It’s a promise!",
      description:
        "We believe learning is more than gaining knowledge—it’s a commitment to growth, transformation, and unlocking your true potential. Every step you take in this journey is a promise to yourself, to become better, to overcome challenges, and to achieve your dreams. With each lesson, we’re here to ensure your success isn’t just an aspiration—it’s a guarantee.",
    },
  ];
  
  export default onboardingData;