import { component$, useStyles$ } from "@builder.io/qwik";
import styles from "./members-box.css?inline";

export default component$(() => {
  useStyles$(styles);
  return (
    <div class="w-full">
      <div class="member--image-wrapper"></div>
    </div>
  );
});
