import { component$, useStyles$ } from "@builder.io/qwik";
import styles from "./demo.css?inline";
import { Image } from "@unpic/qwik";
import Image1 from "/images/abstract-design.png";
import Image2 from "/images/abstract-design-2.png";

export default component$(() => {
  useStyles$(styles);
  return (
    <div class="demo--box">
      <div class="space-y-3 max-w-5xl">
        <h3 class="title">We Are Proud of Our Achievements</h3>
        <p class="sub-title">
          But our ultimate satisfaction comes from seeing our clients achieve
          their goals and live healthier, happier lives. Join Nutritionist today
          and embark on your own transformative journey towards optimal health
          and well-being.
        </p>
      </div>
      <button>Book a Demo</button>
      <div class="image-1">
        <Image src={Image1} alt="design" width={164} height={164} />
      </div>
      <div class="image-2">
        <Image src={Image2} alt="design" width={223} height={143} />
      </div>
    </div>
  );
});
