import { component$ } from "@builder.io/qwik";
import { Section, FeaturesBox } from "~/components";

const storyComponent = {
  space_y: "50px",
  space_y_lg: "60px",
  space_y_2xl: "80px",
  heading: {
    title: "Our Story",
    sub_title:
      "Welcome to Nutritionist, your partner in achieving optimal health through personalized nutrition coaching. Our certified nutritionists are here to guide you on your weight loss journey.",
  },
};

const achievementsComponent = {
  space_y: "50px",
  space_y_lg: "60px",
  space_y_2xl: "80px",
  heading: {
    title: "Company Achievements",
    sub_title:
      "At Nutritionist, we take pride in our accomplishments and the positive impact we have made on the lives of our clients. Here are some of our notable achievements",
  },
};

const featuresList = [
  {
    title: "10,000+ Transformations",
    description:
      "Our personalized nutrition plans have helped thousands of individuals reach their weight loss goals and maintain a healthy lifestyle.",
  },
  {
    title: "Recognition for Excellence",
    description:
      "Nutritionist has been recognized as a leading provider of personalized nutrition coaching, receiving accolades for our innovative approach and commitment to client success.",
  },
  {
    title: "Positive Client Reviews",
    description:
      "We have received numerous testimonials from satisfied clients who have experienced significant improvements in their health, weight, and overall well-being through our coaching program.",
  },
  {
    title: "Collaborate With Top Health Experts.",
    description:
      "Nutritionist has established partnerships with respected nutritionists, dietitians, and health experts to ensure that our clients receive the highest quality guidance and support.",
  },
];

export default component$(() => {
  return (
    <main>
      <Section
        class="container-regular py-12 lg:py-24 2xl:py-36"
        data={storyComponent}
      >
        
      </Section>
      <Section
        class="container-regular py-12 lg:py-24 2xl:py-36"
        data={achievementsComponent}
      >
        <div class="grid grid-cols-2 gap-5 2xl:gap-7">
          {featuresList.map((feature, i) => (
            <FeaturesBox key={i} data={feature} />
          ))}
        </div>
      </Section>
    </main>
  );
});
