import { component$, useStyles$ } from "@builder.io/qwik";
import styles from "./blog-box.css?inline";
import { Image } from "@unpic/qwik";

interface BlogBoxProps {
  image: string;
  title: string;
  description: string;
  category: string;
  alt: string;
}

const BlogBox = component$<BlogBoxProps>(
  ({ image, title, description, category, alt }) => {
    useStyles$(styles);
    return (
      <div class="blog-box">
        <div class="blog-head-wrapper">
          <h6>{category}</h6>
          <div class="image-wrapper">
            <Image src={image} alt={alt} width="531" height="228" />
          </div>
        </div>
        <div class="blog-content">
          <div class="space-y-2.5">
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
          <button>Read More</button>
        </div>
      </div>
    );
  }
);

export default BlogBox;
