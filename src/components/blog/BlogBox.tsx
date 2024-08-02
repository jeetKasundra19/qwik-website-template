import { component$, useStyles$ } from "@builder.io/qwik";
import styles from "./blog.css?inline";

export default component$(() => {
  useStyles$(styles);
  return (
    <div class="blog--box">
      <div class="image-wrapper"></div>
      <div class="space-y-4 2xl:space-y-7">
        <div class="block">
            <small>Healthy Snacks on the Go</small>
            <h3 class="blog--title">Quick and Nutritious Options</h3>
        </div>
        <p class="blog--description">Explore a variety of convenient and healthy snack ideas to keep you fueled throughout the day.</p>
        <div class="blog--author"></div>
      </div>
    </div>
  );
});
