import { component$ } from "@builder.io/qwik";
import BlogBox from "./components/BlogBox";
import { Hero } from "~/components";
import Image1 from "/images/blog/image-1.png";
import Image2 from "/images/blog/image-2.png";
import Image3 from "/images/blog/image-3.png";
import Image4 from "/images/blog/image-4.png";
import Image5 from "/images/blog/image-5.png";
import Image6 from "/images/blog/image-6.png";
import Image7 from "/images/blog/image-7.png";
import Image8 from "/images/blog/image-8.png";
import Image9 from "/images/blog/image-9.png";
import Image10 from "/images/blog/image-10.png";
import Image11 from "/images/blog/image-11.png";
import Image12 from "/images/blog/image-12.png";

const heroContent = {
  title: "Our Blogs",
  description:
    "Welcome to the Blog section of Nutritionist, your trusted source for insightful articles, tips, and expert advice on nutrition and wellness. Here, we strive to provide you with engaging and informative content that will inspire and empower you to make informed decisions about your health. Explore our blog to discover a wealth of resources that cover a wide range of topics related to nutrition, fitness, and overall well-being.",
};

const blogList = [
  {
    category: "Weight Loss Tips",
    image: Image1,
    title: "10 Effective Strategies for Sustainable Weight Loss",
    description:
      "Discover proven strategies for long-term weight loss success. Learn how to create healthy habits, set achievable goals, and make sustainable lifestyle changes.",
    image_description:
      "A plate with a single green vegetable (possibly broccoli) and hands holding utensils on a green background",
    cta: "Read More",
  },
  {
    category: "Weight Loss Tips",
    image: Image2,
    title: "The Role of Portion Control in Weight Management",
    description:
      "Learn how portion control can help you manage your weight effectively. Find practical tips for controlling portion sizes and avoiding overeating.",
    image_description:
      "Two green dumbbells, a yellow apple, and a measuring tape on a light blue background",
    cta: "Read More",
  },
  {
    category: "Weight Loss Tips",
    image: Image3,
    title: "Understanding Emotional Eating and How to Overcome It",
    description:
      "Explore the connection between emotions and eating habits. Get valuable insights on how to identify emotional triggers and develop healthier coping mechanisms.",
    image_description:
      "A woman in a denim shirt with an open-handed gesture against a green and pink background",
    cta: "Read More",
  },
  {
    category: "Weight Loss Tips",
    image: Image4,
    title: "How to Stay Motivated on Your Weight Loss Journey",
    description:
      "Find effective strategies to stay motivated and overcome obstacles during your weight loss journey. Get tips on setting realistic goals, tracking progress, and celebrating achievements.",
    image_description:
      "Dumbbells, an apple, and a measuring tape on a green background",
    cta: "Read More",
  },
  {
    category: "Healthy Eating",
    image: Image5,
    title: "The Benefits of a Plant-Based Diet for Overall Health",
    description:
      "Explore the advantages of adopting a plant-based diet. Learn about the potential health benefits, nutrient-rich plant-based foods, and tips for transitioning to a plant-based lifestyle.",
    image_description:
      "Healthy Eating - Plant-Based Diet: Fresh green salad, avocado, and chopsticks on a bright green background",
    cta: "Read More",
  },
  {
    category: "Healthy Eating",
    image: Image6,
    title: "Understanding Macronutrients: Carbohydrates, Proteins, and Fats",
    description:
      "Get a comprehensive overview of macronutrients and their role in a balanced diet. Discover the best sources of each macronutrient and how to incorporate them into your meals.",
    image_description:
      "Healthy Eating - Macronutrients: Assorted healthy foods representing carbohydrates, proteins, and fats on a pink background",
    cta: "Read More",
  },
  {
    category: "Fitness and Exercise",
    image: Image7,
    title: "Cardio vs. Strength Training: Which Is Better for Weight Loss?",
    description:
      "Explore the benefits of both cardio and strength training exercises for weight loss. Find out how to combine them effectively to maximize your results.",
    image_description:
      "Fitness - Cardio vs. Strength Training: Green running shoes and a notebook on a gray and yellow background",
    cta: "Read More",
  },
  {
    category: "Fitness and Exercise",
    image: Image8,
    title: "Building a Home Workout Routine: Tips and Best Practices",
    description:
      "Discover how to create an effective workout routine at home. Learn about equipment options, exercise techniques, and ways to stay motivated.",
    image_description:
      "Fitness - Home Workout Routine: Woman in colorful workout clothes doing a plank exercise on a yoga mat",
    cta: "Read More",
  },
  {
    category: "Mindset and Motivation",
    image: Image9,
    title: "Developing a Positive Body Image and Self-Confidence",
    description:
      "Explore techniques for cultivating a positive body image and improving self-confidence. Learn how to embrace your body and appreciate your unique qualities.",
    image_description:
      "Mindset - Positive Body Image: Woman with arms outstretched in a field of green grass against a blue sky",
    cta: "Read More",
  },
  {
    category: "Mindset and Motivation",
    image: Image10,
    title: "Overcoming Self-Sabotage in Your Weight Loss Journey",
    description:
      "Identify self-sabotaging behaviors and learn strategies to overcome them. Discover how to shift your mindset and develop healthier habits.",
    image_description:
      "Mindset - Overcoming Self-Sabotage: Thoughtful person in black clothing against a green background",
    cta: "Read More",
  },
  {
    category: "Recipes and Meal Planning",
    image: Image11,
    title: "Healthy and Flavorful Lunch Ideas for a Busy Lifestyle",
    description:
      "Discover a variety of tasty and nutritious lunch options that are perfect for those with busy schedules. These recipes are quick to make and packed with essential nutrients..",
    image_description:
      "Recipes - Healthy Lunch Ideas: Grilled chicken salad with various ingredients on a green background",
    cta: "Read More",
  },
  {
    category: "Recipes and Meal Planning",
    image: Image12,
    title: "Satisfying and Nutritious Dinner Recipes for Weight Loss",
    description:
      "Find a collection of flavorful dinner recipes that are both satisfying and supportive of your weight loss goals. These recipes are designed to be healthy and delicious.",
    image_description:
      "Recipes - Dinner Recipes for Weight Loss: Hands preparing a healthy meal with fresh ingredients on a blue plate",
    cta: "Read More",
  },
];

export default component$(() => {
  return (
    <main>
      <section class="container-regular">
        <Hero {...heroContent} />
      </section>
      <section class="container-regular py-12 lg:py-24 2xl:py-36">
        <div class="grid grid-cols-2 rounded-lg border border-solid !border-[#E5F5BD]">
          {blogList.map((blog, index) => (
            <BlogBox
              key={index}
              image={blog.image}
              title={blog.title}
              description={blog.description}
              category={blog.category}
              alt={blog.image_description}
            />
          ))}
        </div>
      </section>
    </main>
  );
});
