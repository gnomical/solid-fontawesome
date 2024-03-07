import { Accessor, createMemo, For, JSX, Show } from "solid-js";
import { FontAwesomeIconProps } from "./lib/types";
import { parse, icon, AbstractElement } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "./styles.css";

const errSVG: JSX.Element = (
  <svg>
    <path
      fill="red"
      d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c13.3 0 24 10.7 24 24V264c0 13.3-10.7 24-24 24s-24-10.7-24-24V152c0-13.3 10.7-24 24-24zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"
    />
  </svg>
);

export function FontAwesomeIcon(props: FontAwesomeIconProps): JSX.Element {
  // console.log(props.icon);
  const transform =
    typeof props.transform === "string" ? parse.transform(props.transform) : props.transform;

  // console.log(transform);

  const abstract: Accessor<AbstractElement> = createMemo<AbstractElement>((): AbstractElement => {
    const faicon = icon(parse.icon(props.icon));

    // adding in check to verify that the provided props.icon was properly
    // imported. If it was not, then we create an "empty" AbstractElement to
    // return
    if (!faicon) {
      console.error(`The icon ${props.icon} was not found in the library`);
      return { tag: "", attributes: {} };
    }

    return faicon.abstract[0];
  });

  function classes() {
    let classList = ["svg-inline--fa", props.icon, props.swapOpacity ? "fa-swap-opacity" : ""];
    classList.push(props.size ? `fa-${props.size}` : "");
    if (props.className) classList.push(props.className);
    if (props.inverse) classList.push("fa-inverse");

    return classList.join(" ");
  }

  function styles() {
    let styles = "";
    styles += `font-size:${transform?.size ? transform.size / 16 : 1}em;`;
    return styles;
  }

  return (
    <Show when={abstract().tag === "svg"} fallback={errSVG}>
      <svg {...abstract().attributes} class={classes()} style={styles()}>
        {/* renders the singular path if the first child is not set as a group */}
        <Show when={(abstract().children || [])[0].tag === "path"}>
          <path {...(abstract().children || [])[0].attributes}></path>
        </Show>

        {/* renders multiple paths for when the icon is duotone  */}
        <Show when={(abstract().children || [])[0].tag === "g"}>
          <g {...(abstract().children || [])[0].attributes}>
            <For each={(abstract().children || [])[0].children}>
              {path => <path {...path.attributes}></path>}
            </For>
          </g>
        </Show>
      </svg>
    </Show>
  );
}
