import { component$, useStyles$ } from "@builder.io/qwik";
import styles from "./features.css?inline";

interface FeatureProps {
  data: {
    title: string;
    description: string;
  };
}

export default component$(({ data }: FeatureProps) => {
  useStyles$(styles);
  return (
    <div class="box">
      <div class="flex items-center gap-4">
        <div class="icon-box"></div>
        <h4 class="box-title">{data.title}</h4>
      </div>
      <p class="box-description">{data.description}</p>
    </div>
  );
});
