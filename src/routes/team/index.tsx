import { component$ } from "@builder.io/qwik";
import { Hero, DemoBox } from "~/components";
import MembersBox from "./components/MembersBox";
import Image1 from "/images/team/one.png";
import Image2 from "/images/team/two.png";
import Image3 from "/images/team/three.png";
import Image4 from "/images/team/four.png";

const heroContent = {
  title: "Meet Our Team of Experts",
  description:
    "Our team at Nutritionist is composed of highly skilled professionals who are passionate about helping you achieve your health and wellness goals. With a diverse range of expertise in nutrition, coaching, and support, our team is dedicated to providing you with the guidance and personalized care you need. Get to know the experts behind our success and discover how they can make a positive impact on your journey to better health.",
};

const teamList = [
  {
    name: "Sarah Mitchell",
    image: Image1,
    position: "Founder and CEO",
    appearance: "Woman with long blonde hair wearing a white shirt",
  },
  {
    name: "Emily Thompson",
    position: "Chief Operating Officer",
    image: Image2,
    appearance:
      "Woman with long brown hair and glasses, wearing a plaid blazer and holding a notebook",
  },
  {
    name: "John Davis",
    position: "Chief Financial Officer",
    image: Image3,
    appearance:
      "Man with short light-colored hair and glasses, wearing a grey suit with a patterned tie",
  },
  {
    name: "Rachel Adams",
    position: "Chief Marketing Officer",
    image: Image4,
    appearance:
      "Woman with shoulder-length brown hair, wearing a plaid blazer and holding a green folder",
  },
];

export default component$(() => {
  return (
    <main>
      <section class="container-regular">
        <Hero {...heroContent} />
      </section>
      <section class="container-regular py-12 lg:py-24 2xl:py-36">
        <div class="grid grid-cols-4 gap-7">
          {teamList.map((team, i) => (
            <MembersBox key={i} {...team} />
          ))}
        </div>
      </section>
      <section class="container-regular py-12 lg:py-24 2xl:py-36">
        <DemoBox />
      </section>
    </main>
  );
});
