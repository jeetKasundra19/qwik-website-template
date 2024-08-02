import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Section, FeaturesBox } from "~/components";

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

export default component$(() => {
  return (
    <>
      <h1>Hi 👋</h1>
      <Section class="container-regular" data={featuresComponent}>
        <div class="block">
          <FeaturesBox />
        </div>
      </Section>
      <div class="space-y-[50px]">
        <div></div>
        <div></div>
      </div>
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
