import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Section, FeaturesBox, BlogBox } from "~/components";

const featuresComponent = {
  space_y: "50px",
  space_y_lg: "60px",
  space_y_2xl: "80px",
  heading: {
    title: "Features",
    sub_title:
      "Welcome to the Feature Section of Nutritionist, your ultimate destination for all things nutrition and wellness.",
  },
};

const blogComponent = {
  space_y: "50px",
  space_y_lg: "60px",
  space_y_2xl: "80px",
  heading: {
    title: "Our Blogs",
    sub_title:
      "Our blog is a treasure trove of informative and engaging articles written by our team of nutritionists, dietitians, and wellness experts. Here's what you can expect from our blog.",
  },
};

const featuresList = [
  {
    title: "Personalized Nutrition Plans",
    description:
      "Receive a tailored nutrition plan designed specifically for your body and goals. Our certified nutritionists will consider your unique needs, dietary preferences, and health conditions to create a plan that suits you best.",
  },
  {
    title: "Guidance from Certified Nutritionists",
    description:
      "Our team of experienced and certified nutritionists will provide professional guidance and support throughout your journey. They will answer your questions, address your concerns, and keep you motivated as you work towards your goals.",
  },
  {
    title: "Food Tracking and Analysis",
    description:
      "Effortlessly track your food intake using our user-friendly app. Our nutritionists will analyze your data to provide insights into your eating habits, help you identify areas for improvement, and make personalized recommendations.",
  },
  {
    title: "Meal Planning and Recipes",
    description:
      "Access a vast collection of delicious and healthy recipes tailored to your dietary needs. Our nutritionists will also create personalized meal plans, making it easier for you to stay on track and enjoy nutritious meals.",
  },
  {
    title: "Lifestyle and Behavior Coaching",
    description:
      "Achieving sustainable results requires more than just a diet plan. Our nutritionists will work with you to develop healthy habits, address emotional eating, and provide strategies to overcome obstacles along the way.",
  },
  {
    title: "Nutritional Education and Workshops",
    description:
      "Expand your knowledge of nutrition through informative articles and educational workshops. Our nutritionists will equip you with the knowledge and tools to make informed choices for long-term success.",
  },
];

const blogList = [
  {
    title: "The Benefits of Hydration for Weight Loss",
    category: "Weight Loss",
    description:
      "Discover how staying hydrated can support your weight loss goals and improve overall health.",
    image: "woman_drinking_water.jpg",
    author: "Emily Johnson",
    date: "23 May 2023",
    read_time: "3 min read",
  },
  {
    title: "Cultivating a Healthy Relationship with Food",
    category: "Mindful Eating",
    description:
      "Learn how to develop a mindful eating habit to cultivate a healthier relationship with food and improve your overall well-being.",
    image: "woman_holding_apple_burger.jpg",
    author: "Sarah Thompson",
    date: "23 May 2023",
    read_time: "4 min read",
  },
  {
    title: "Carbohydrates, Proteins, and Fats",
    category: "Understanding Macronutrients",
    description:
      "Gain a comprehensive understanding of macronutrients and their role in your diet for optimal health and weight management.",
    image: "two_women_holding_food.jpg",
    author: "Mark Wilson",
    date: "23 May 2023",
    read_time: "5 min read",
  },
  {
    title: "Quick and Nutritious Options",
    category: "Healthy Snacks on the Go",
    description:
      "Explore a variety of convenient and healthy snack ideas to keep you fueled throughout the day.",
    image: "healthy_snacks.jpg",
    author: "Emily Johnson",
    date: "23 May 2023",
    read_time: "3 min read",
  },
];

export default component$(() => {
  return (
    <>
      <Section
        class="container-regular py-12 lg:py-24 2xl:py-36"
        data={featuresComponent}
      >
        <div class="grid grid-cols-2 gap-5 2xl:gap-7">
          {featuresList.map((feature, i) => (
            <FeaturesBox key={i} data={feature} />
          ))}
        </div>
      </Section>
      <Section class="container-regular" data={blogComponent}>
        <div class="grid grid-cols-2 gap-5 2xl:gap-7">
          {blogList.map((blog, i) => (
            <BlogBox key={i} />
          ))}
        </div>
      </Section>
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
