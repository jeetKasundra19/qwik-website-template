import { component$ } from "@builder.io/qwik";
import BlogBox from "./components/BlogBox";

const blogList = [
  {
    category: "Weight Loss Tips",
    title: "10 Effective Strategies for Sustainable Weight Loss",
    description:
      "Discover proven strategies for long-term weight loss success. Learn how to create healthy habits, set achievable goals, and make sustainable lifestyle changes.",
    image_description:
      "A plate with a single green vegetable (possibly broccoli) and hands holding utensils on a green background",
    cta: "Read More",
  },
  {
    category: "Weight Loss Tips",
    title: "The Role of Portion Control in Weight Management",
    description:
      "Learn how portion control can help you manage your weight effectively. Find practical tips for controlling portion sizes and avoiding overeating.",
    image_description:
      "Two green dumbbells, a yellow apple, and a measuring tape on a light blue background",
    cta: "Read More",
  },
  {
    category: "Weight Loss Tips",
    title: "Understanding Emotional Eating and How to Overcome It",
    description:
      "Explore the connection between emotions and eating habits. Get valuable insights on how to identify emotional triggers and develop healthier coping mechanisms.",
    image_description:
      "A woman in a denim shirt with an open-handed gesture against a green and pink background",
    cta: "Read More",
  },
  {
    category: "Weight Loss Tips",
    title: "How to Stay Motivated on Your Weight Loss Journey",
    description:
      "Find effective strategies to stay motivated and overcome obstacles during your weight loss journey. Get tips on setting realistic goals, tracking progress, and celebrating achievements.",
    image_description:
      "Dumbbells, an apple, and a measuring tape on a green background",
    cta: "Read More",
  },
];

export default component$(() => {
  return (
    <main>
      <section class="container-regular py-12 lg:py-24 2xl:py-36">
        <div class="grid grid-cols-2 rounded-lg border border-solid !border-[#E5F5BD]">
          {blogList.map((blog, index) => (
            <BlogBox
              key={index}
              image={`/path/to/image${index + 1}.jpg`}
              title={blog.title}
              description={blog.description}
              category={blog.category}
            />
          ))}
        </div>
      </section>
    </main>
  );
});
