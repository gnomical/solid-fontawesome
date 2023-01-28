import { JSX } from "solid-js";
import { FontAwesomeIconProps } from "./lib/types";
import { parse, icon } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "./styles.css";

export function FontAwesomeIcon(props: FontAwesomeIconProps): JSX.Element {
  // console.log(props.icon);
  const transform =
    typeof props.transform === "string" ? parse.transform(props.transform) : props.transform;

  // console.log(transform);
  const faicon = icon(parse.icon(props.icon));
  // console.log(faicon);

  function classes() {
    let classList = [
      "svg-inline--fa",
      props.icon,
      // `fa-${faicon.iconName}`,
      // "fa-fw",
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
      data-prefix={faicon.prefix}
      data-icon={faicon.iconName}
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox={`0 0 ${faicon.icon[0]} ${faicon.icon[1]}`}
      // class="svg-inline--fa fa-copy fa-fw fa-lg"
      class={classes()}
      style={styles()}
    >
      <path fill="currentColor" d={faicon.icon[4] as string}></path>
    </svg>
  );
}
