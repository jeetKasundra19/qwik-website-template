import { component$, useStyles$ } from "@builder.io/qwik";
import styles from "./members-box.css?inline";
import { Image } from "@unpic/qwik";

interface MemberBoxProps {
  image: string;
  name: string;
  position: string;
  appearance: string;
}

export default component$<MemberBoxProps>(
  ({ image, name, position, appearance }) => {
    useStyles$(styles);
    return (
      <div class="w-full">
        <div class="member--image-wrapper">
          <Image src={image} alt={appearance} />
        </div>
        <div class="member-details">
          <h5>{name}</h5>
          <p>{position}</p>
        </div>
      </div>
    );
  }
);
