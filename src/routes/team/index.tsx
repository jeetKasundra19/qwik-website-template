import { component$ } from "@builder.io/qwik";
import { Hero, DemoBox } from "~/components";
import MembersBox from "./components/MembersBox";

const heroContent = {
  title: "Meet Our Team of Experts",
  description:
    "Our team at Nutritionist is composed of highly skilled professionals who are passionate about helping you achieve your health and wellness goals. With a diverse range of expertise in nutrition, coaching, and support, our team is dedicated to providing you with the guidance and personalized care you need. Get to know the experts behind our success and discover how they can make a positive impact on your journey to better health.",
};

export default component$(() => {
  return (
    <main>
      <section class="container-regular">
        <Hero {...heroContent} />
      </section>
      <section class="container-regular py-12 lg:py-24 2xl:py-36">
        <div class="grid grid-cols-4 gap-7">
          <MembersBox />
        </div>
      </section>
      <section class="container-regular py-12 lg:py-24 2xl:py-36">
        <DemoBox />
      </section>
    </main>
  );
});
