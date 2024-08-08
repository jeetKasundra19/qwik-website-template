import { component$ } from "@builder.io/qwik";
import { Section, FeaturesBox, DemoBox, Hero } from "~/components";

const stepComponent = {
  space_y: "50px",
  space_y_lg: "60px",
  space_y_2xl: "80px",
  heading: {
    title: "How It Works",
    sub_title:
      "We provide a step-by-step guide on how to get started on your journey towards better health and nutrition. We are here to simplify the process and make it easy for you to navigate our platform and access the resources you need to achieve your goals. Here's how it works",
  },
};

const stepList = [
  {
    title: "Initial Consultation",
    description:
      "We start by scheduling an initial consultation, either in person or through a convenient online meeting. During this session, we will discuss your health history, lifestyle, goals, and any specific dietary requirements.",
  },
  {
    title: "Assessing Your Needs",
    description:
      "Our team of experienced nutritionists and dietitians will conduct a thorough assessment of your nutritional needs and create a personalized plan tailored to your unique requirements.",
  },
  {
    title: "Personalized Nutrition Plan",
    description:
      "Based on the information gathered, we will develop a personalized nutrition plan that takes into account your dietary preferences, lifestyle, and health goals. This plan will provide you with clear guidelines on what to eat, portion sizes, and meal timing.",
  },
  {
    title: "Meal Planning and Recipes",
    description:
      "To make your journey easier, we will provide you with a variety of delicious and nutritious meal options, along with recipes that align with your personalized nutrition plan.",
  },
  {
    title: "Ongoing Support",
    description:
      "Throughout your journey, our team of nutrition experts will be there to provide ongoing support, answer your questions, and offer guidance. We believe in the power of continuous encouragement to help you stay motivated and achieve long-term success.",
  },
  {
    title: "Progress Tracking",
    description:
      "We encourage you to track your progress using our user-friendly mobile app or website tools. You can log your meals, monitor your weight, and track your physical activity, allowing you to have a clear picture of your progress and make any necessary adjustments.",
  },
  {
    title: "Regular Check-ins",
    description:
      "We will schedule regular check-ins to review your progress, address any concerns, and make any necessary adjustments to your nutrition plan. Our goal is to ensure that you are consistently moving towards your desired outcomes.",
  },
  {
    title: "Education and Resources",
    description:
      "Along the way, we will provide you with educational resources, such as articles, guides, and videos, to enhance your understanding of nutrition and empower you to make informed choices for a healthier lifestyle.",
  },
  {
    title: "Fine-Tuning and Adjustments",
    description:
      "As your journey progresses and your goals evolve, we will fine-tune and make adjustments to your nutrition plan to ensure that it continues to align with your changing needs.",
  },
  {
    title: "Sustainable Lifestyle Habits",
    description:
      "Our ultimate goal is to help you develop sustainable lifestyle habits that will support your long-term health and wellness. We will equip you with the knowledge and skills to maintain your progress even after you've completed the program.",
  },
];

const heroContent = {
  title: "Your Journey to Health and Wellness",
  description:
    "At Nutritionist, we believe in providing a personalized and comprehensive approach to help you achieve your health and wellness goals. Our 'How it Works' process is designed to guide you through each step of your journey, ensuring that you receive the support, knowledge, and tools you need to succeed. Here's a detailed breakdown of our process:",
};

export default component$(() => {
  return (
    <main>
      <section class="container-regular">
        <Hero {...heroContent} />
      </section>
      <Section
        class="container-regular py-12 lg:py-24 2xl:py-36"
        data={stepComponent}
      >
        <div class="w-full">
          <div class="grid grid-cols-2 gap-5 2xl:gap-7">
            {stepList.map((step, i) => (
              <div key={i}>
                <p class="step-count">
                  {i != 9 ? 0 : null}
                  {i + 1}
                </p>
                <FeaturesBox data={step} />
              </div>
            ))}
          </div>
        </div>
      </Section>
      <section class="container-regular py-12 lg:py-24 2xl:py-36">
        <DemoBox />
      </section>
    </main>
  );
});
