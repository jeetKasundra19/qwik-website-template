import { component$ } from "@builder.io/qwik";
import { Section, FeaturesBox } from "~/components";
import StoryBox from "./components/StoryBox";
import Image1 from "/images/inspiring-transformations-story.png";
import Image2 from "/images/recognition-and-accolades-story.png";
import Image3 from "/images/continued-growth-story.png";
import Image4 from "/images/collaborating-for-success-story.png";
import Image5 from "/images/enhanced-support-story.png";
import Image6 from "/images/innovating-for-clients-story.png";
import Image7 from "/images/celebrating-success-stories.png";
import Image8 from "/images/expanding-reach-story.png";
import Image9 from "/images/research-and-expertise-story.png";
import Image10 from "/images/the-inception-story.png";

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

const storyList = [
  {
    image: Image1,
    title: "Inspiring Transformations Story",
    description:
      "Nutritionist continues to empower individuals to transform their lives through personalized nutrition coaching. With an expanding client base and a growing team of experts, we remain committed to our goal of helping people lose weight, improve their health, and lead happier, more fulfilling lives. Our journey of inspiring transformations continues, one client at a time.",
    date: "July 1, 2024",
  },
  {
    image: Image2,
    title: "Recognition and Accolades Story",
    description:
      "Nutritionist received industry recognition for its excellence in personalized nutrition coaching. Our innovative approach and dedication to client success earned us accolades and solidified our position as a leading provider in the field.",
    date: "March 10, 2023",
  },
  {
    image: Image3,
    title: "Continued Growth Story",
    description:
      "Nutritionist celebrated serving over 5,000 clients, a testament to our commitment to helping individuals achieve their health and weight loss goals. This milestone highlighted the positive impact we have made on the lives of thousands of people.",
    date: "November 2, 2021",
  },
  {
    image: Image4,
    title: "Collaborating for Success Story",
    description:
      "Nutritionist established partnerships with renowned health professionals, including nutritionists, dietitians, and wellness experts. These collaborations allowed us to incorporate diverse perspectives and expertise, ensuring the highest level of guidance for our clients.",
    date: "July 15, 2019",
  },
  {
    image: Image5,
    title: "Enhanced Support Story",
    description:
      "In response to the growing demand for personalized nutrition coaching, Nutritionist expanded its team of qualified nutritionists and dietitians. This milestone enabled us to provide even more individualized care and support to our clients.",
    date: "April 1, 2018",
  },
  {
    image: Image6,
    title: "Innovating for Clients Story",
    description:
      "Nutritionist introduced a mobile app, revolutionizing the way clients engage with their personalized nutrition plans. The app allowed for easy tracking of progress, access to resources, and seamless communication with their dedicated nutrition coaches.",
    date: "January 20, 2017",
  },
  {
    image: Image7,
    title: "Celebrating Success Stories",
    description:
      "Nutritionist celebrated its 500th client success story. These stories showcased the positive impact of personalized nutrition coaching on individuals' lives, further motivating our team to continue providing exceptional services.",
    date: "September 5, 2015",
  },
  {
    image: Image8,
    title: "Expanding Reach Story",
    description:
      "Nutritionist expanded its services by launching an online platform, allowing individuals from all over the world to access personalized nutrition plans and expert guidance. This milestone brought convenience and accessibility to our growing client base.",
    date: "June 10, 2014",
  },
  {
    image: Image9,
    title: "Research and Expertise Story",
    description:
      "After extensive research and collaborating with nutrition experts, Sarah Mitchell and her team developed a comprehensive program rooted in scientific knowledge and evidence-based strategies. This milestone marked the establishment of Nutritionist as a trusted source of personalized nutrition coaching.",
    date: "March 15, 2012",
  },
  {
    image: Image10,
    title: "The Inception Story",
    description:
      "On this day, Nutritionist was born with the vision of helping individuals achieve their weight loss and health goals through personalized nutrition coaching. The founder, Sarah Mitchell, recognized the need for a sustainable and effective approach to healthy living, and thus began the journey of Nutritionist.",
    date: "January 1, 2010",
  },
];

export default component$(() => {
  return (
    <main>
      <Section
        class="container-regular py-12 lg:py-24 2xl:py-36"
        data={storyComponent}
      >
        <div class="w-full">
          {storyList.map((story) => (
            <StoryBox key={story.title} {...story} />
          ))}
        </div>
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
