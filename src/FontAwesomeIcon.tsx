import { Accessor, createMemo, For, JSX, Show } from "solid-js";
import { FontAwesomeIconProps } from "./lib/types";
import { parse, icon, Icon } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "./styles.css";

export function FontAwesomeIcon(props: FontAwesomeIconProps): JSX.Element {
  // console.log(props.icon);
  const transform =
    typeof props.transform === "string" ? parse.transform(props.transform) : props.transform;

  // console.log(transform);
  const faicon: Accessor<Icon> = createMemo<Icon>(() => {
    // console.log(parse.icon(props.icon));
    // console.log(icon(parse.icon(props.icon)));
    return icon(parse.icon(props.icon))
  });
  // console.log(faicon());

  function classes() {
    let classList = [
      "svg-inline--fa",
      props.icon,
      props.swapOpacity? "fa-swap-opacity": "",
    ];
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
    <svg
      aria-hidden="true"
      data-prefix={faicon() ? faicon().prefix : ""}
      data-icon={faicon() ? faicon().iconName : ""}
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox={faicon() ? `0 0 ${faicon().icon[0]} ${faicon().icon[1]}` : "0 0 512 512"}
      class={classes()}
      style={styles()}
    >
      <Show 
        when={faicon()}
        fallback={<path fill="red" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c13.3 0 24 10.7 24 24V264c0 13.3-10.7 24-24 24s-24-10.7-24-24V152c0-13.3 10.7-24 24-24zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/>}
      >
        <For each={faicon().icon[4] as string[]} 
          fallback={<path fill="currentColor" d={faicon().icon[4] as string}></path>}>
          {(path) => (
            <path fill="currentColor" d={path}></path>
          )}
        </For>
      </Show>
    </svg>
  );
}
