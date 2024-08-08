import { component$, useStyles$ } from "@builder.io/qwik";
import styles from "./hero.css?inline";

interface HeroProps {
  title: string;
  description: string;
}

export default component$<HeroProps>(({ title, description }) => {
  useStyles$(styles);
  return (
    <section class="hero--section">
      <div>
        <div class="hero--icon-box">
          <svg
            width="50"
            height="50"
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.7757 15.2776C13.051 9.70759 16.9943 0 24.9816 0C32.9689 0 36.9122 9.70759 31.1875 15.2776L24.9816 21.3158L18.7757 15.2776Z"
              fill="#1A3129"
            />
            <path
              d="M18.8128 34.7224C13.0881 40.2924 17.0314 50 25.0187 50C33.006 50 36.9494 40.2924 31.2246 34.7224L25.0187 28.6842L18.8128 34.7224Z"
              fill="#1A3129"
            />
            <path
              d="M15.2776 31.2239C9.70759 36.9486 0 33.0052 0 25.0179C0 17.0306 9.70759 13.0873 15.2776 18.812L21.3158 25.0179L15.2776 31.2239Z"
              fill="#1A3129"
            />
            <path
              d="M34.7224 31.1882C40.2924 36.9129 50 32.9696 50 24.9823C50 16.995 40.2924 13.0516 34.7224 18.7763L28.6842 24.9823L34.7224 31.1882Z"
              fill="#1A3129"
            />
          </svg>
        </div>
      </div>
      <div class="space-y-5 text-center">
        <h1 class="hero-title">{title}</h1>
        <p class="hero-description">{description}</p>
      </div>
    </section>
  );
});
