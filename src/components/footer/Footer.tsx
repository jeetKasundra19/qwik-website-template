import { component$, useStyles$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import styles from "./footer.css?inline";
import logo from "/images/logo.png";
import { Image } from "@unpic/qwik";

const footerLink = [
  {
    link: "Home",
    path: "/",
  },
  {
    link: "About",
    path: "/about",
  },
  {
    link: "Team",
    path: "/",
  },
  {
    link: "Process",
    path: "/process",
  },
  {
    link: "Pricing",
    path: "/pricing",
  },
  {
    link: "Blog",
    path: "/blog",
  },
  {
    link: "Contact",
    path: "/contact",
  },
];

export default component$(() => {
  useStyles$(styles);
  return (
    <footer class="footer">
      <div class="container-regular">
        <div class="flex items-center justify-between w-full">
          <Link href="/">
            <Image
              src={logo}
              alt="logo jeet kasundra"
              width={195}
              height={45}
            />
          </Link>
          <ul class="flex items-center gap-6">
            {footerLink.map((link, index) => (
              <li key={index}>
                <Link href={link.path} class="footer-link">
                  {link.link}
                </Link>
              </li>
            ))}
          </ul>
          <div class="flex items-center gap-3.5">
            <p class="copy-right-text">Got To Top</p>
            <button class="top-btn">
              <svg
                width="14"
                height="18"
                viewBox="0 0 14 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7.0002 17.5C6.29603 17.5 5.7252 16.9292 5.7252 16.225L5.7252 4.94054L2.39426 8.60871C1.9062 9.1163 1.09907 9.13212 0.591483 8.64406C0.0838996 8.156 0.068073 7.34887 0.556135 6.84129L6.08113 0.891286C6.32152 0.641287 6.65338 0.5 7.0002 0.5C7.34702 0.5 7.67887 0.641287 7.91926 0.891286L13.4443 6.84129C13.9323 7.34887 13.9165 8.156 13.4089 8.64406C12.9013 9.13212 12.0942 9.1163 11.6061 8.60871L8.2752 4.94054V16.225C8.2752 16.9292 7.70436 17.5 7.0002 17.5Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>
        </div>
        <div class="border border-darkGreen25 bg-darkGreen20 rounded-lg py-5 px-5 2xl:py-4 lg:py-3.5 flex items-center justify-between">
          <div class="flex items-center gap-4 2xl:gap-5 w-full">
            <Link href="/" class="footer-link-btn">
              <svg
                width="22"
                height="17"
                viewBox="0 0 22 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.5 5.1691V13.75C0.5 15.4069 1.84315 16.75 3.5 16.75H18.5C20.1569 16.75 21.5 15.4069 21.5 13.75V5.1691L12.5723 10.6631C11.6081 11.2564 10.3919 11.2564 9.42771 10.6631L0.5 5.1691Z"
                  fill="#CBEA7B"
                />
                <path
                  d="M21.5 3.40783V3.25C21.5 1.59315 20.1569 0.25 18.5 0.25H3.5C1.84315 0.25 0.5 1.59315 0.5 3.25V3.40783L10.2139 9.38558C10.696 9.68227 11.304 9.68227 11.7861 9.38558L21.5 3.40783Z"
                  fill="#CBEA7B"
                />
              </svg>
              hello@squareup.com
            </Link>
            <Link href="/" class="footer-link-btn">
              <svg
                width="22"
                height="21"
                viewBox="0 0 22 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0.5 3C0.5 1.34315 1.84315 0 3.5 0H4.87163C5.732 0 6.48197 0.585557 6.69064 1.42025L7.79644 5.84343C7.97941 6.5753 7.70594 7.34555 7.10242 7.79818L5.8088 8.7684C5.67447 8.86915 5.64527 9.01668 5.683 9.11969C6.81851 12.2195 9.28051 14.6815 12.3803 15.817C12.4833 15.8547 12.6309 15.8255 12.7316 15.6912L13.7018 14.3976C14.1545 13.7941 14.9247 13.5206 15.6566 13.7036L20.0798 14.8094C20.9144 15.018 21.5 15.768 21.5 16.6284V18C21.5 19.6569 20.1569 21 18.5 21H16.25C7.55151 21 0.5 13.9485 0.5 5.25V3Z"
                  fill="#CBEA7B"
                />
              </svg>
              +91 91813 23 2309
            </Link>
            <Link href="/" class="footer-link-btn">
              <svg
                width="18"
                height="21"
                viewBox="0 0 18 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8.53975 20.851C8.56995 20.8685 8.59369 20.8821 8.6105 20.8915L8.63843 20.9071C8.8613 21.0294 9.13776 21.0285 9.36084 20.9075L9.3895 20.8915C9.40631 20.8821 9.43005 20.8685 9.46025 20.851C9.52066 20.816 9.60697 20.765 9.7155 20.6982C9.93246 20.5646 10.2388 20.3676 10.6046 20.1091C11.3351 19.5931 12.3097 18.8274 13.2865 17.8273C15.2307 15.8368 17.25 12.8462 17.25 9C17.25 4.44365 13.5563 0.75 9 0.75C4.44365 0.75 0.75 4.44365 0.75 9C0.75 12.8462 2.76932 15.8368 4.71346 17.8273C5.69025 18.8274 6.66491 19.5931 7.39539 20.1091C7.76125 20.3676 8.06754 20.5646 8.2845 20.6982C8.39303 20.765 8.47934 20.816 8.53975 20.851ZM9 12C10.6569 12 12 10.6569 12 9C12 7.34315 10.6569 6 9 6C7.34315 6 6 7.34315 6 9C6 10.6569 7.34315 12 9 12Z"
                  fill="#CBEA7B"
                />
              </svg>
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
