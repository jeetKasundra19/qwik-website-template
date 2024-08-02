import { component$, Slot } from "@builder.io/qwik";

export default component$(
  (props: {
    data: {
      space_y: string;
      space_y_lg: string;
      space_y_2xl: string;
      heading: { title: string; sub_title: string };
    };
    class: string;
  }) => {
    const { space_y, space_y_lg, space_y_2xl, heading } = props.data;
    const additionalClass = props.class;

    return (
      <section
        class={[
          `space-y-[${space_y}] lg:space-y-[${space_y_lg}] 2xl:space-y-[${space_y_2xl}]`,
          additionalClass,
        ].join(" ")}
      >
        <div class="space-y-2.5 text-center lg:max-w-3xl 2xl:max-w-5xl mx-auto">
          <h2 class="section--title">{heading.title}</h2>
          <p class="section--sub-title">{heading.sub_title}</p>
        </div>
        <Slot />
      </section>
    );
  }
);
