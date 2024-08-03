import { component$, useStyles$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import styles from "./footer.css?inline";

const footerLink = [
  {
    link: "Home",
    path: "/",
  },
  {
    link: "About",
    path: "/",
  },
  {
    link: "Team",
    path: "/",
  },
  {
    link: "Process",
    path: "/",
  },
  {
    link: "Pricing",
    path: "/",
  },
  {
    link: "Blog",
    path: "/",
  },
  {
    link: "Contact",
    path: "/",
  },
];

export default component$(() => {
  useStyles$(styles);
  return (
    <footer class="footer">
      <div class="container-regular">
        <div class="flex items-center justify-between w-full">
          <Link href="/"></Link>
          <ul class="flex items-center gap-6">
            {footerLink.map((link, index) => (
              <li key={index}>
                <Link href={link.path} class="footer-link">
                  {link.link}
                </Link>
              </li>
            ))}
          </ul>
          <div></div>
        </div>
        <div class="border border-darkGreen25 bg-darkGreen20 rounded-lg py-5 px-5 2xl:py-4 lg:py-3.5 flex items-center justify-between">
          <div class="flex items-center gap-4 2xl:gap-5 w-full">
            <Link href="/" class="footer-link-btn">
              hello@squareup.com
            </Link>
            <Link href="/" class="footer-link-btn">
              +91 91813 23 2309
            </Link>
            <Link href="/" class="footer-link-btn">
              Somewhere in the World
            </Link>
          </div>
          <p class="copy-right-text">
            © 2023 Nutritionist. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
});
