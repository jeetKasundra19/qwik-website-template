import { component$, useStyles$ } from "@builder.io/qwik";
import styles from "./story-box.css?inline";
import { Image } from "@unpic/qwik";

interface StoryBoxProps {
  image: string;
  title: string;
  description: string;
  date: string;
}

const StoryBox = component$<StoryBoxProps>(
  ({ image, title, description, date }) => {
    useStyles$(styles);
    return (
      <div class="story-grid">
        <div class="story-image-wrapper">
          <Image src={image} alt={title} width={800} height={500} />
        </div>
        <div class="story-content">
          <h4 class="story-title">{title}</h4>
          <p class="story-description">{description}</p>
          <h6 class="story-description !font-semibold">{date}</h6>
        </div>
      </div>
    );
  }
);

export default StoryBox;
