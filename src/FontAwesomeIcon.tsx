import { JSX } from "solid-js";
import { FontAwesomeIconProps } from "./lib/types";
import { parse, icon } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "./styles.css";

export function FontAwesomeIcon(props: FontAwesomeIconProps): JSX.Element {
  console.log(props.icon);
  // const transform = typeof props.transform == 'object' ? props.transform : {};
  const transform = typeof props.transform === 'string' ? parse.transform(props.transform) : props.transform;

  console.log(transform);
  const faicon = icon(parse.icon(props.icon), {
    classes: undefined,
    ...transform,
    mask: undefined,
    // ...mask,
    symbol: undefined,
    title: undefined,
    titleId: undefined,
    maskId: undefined
  });

  if(!faicon.prefix) {
    console.error(`Please check that you have imported the '${props.icon}' icon to your library.`);
  }

  console.log(faicon);
  // const mask = props. || ;
  // const maskId = props. || ;
  // const color = props. || ;
  // const spin = props. || ;
  // const spinPulse = props. || ;
  // const spinReverse = props. || ;
  // const pulse = props. || ;
  // const beat = props. || ;
  // const fade = props. || ;
  // const beatFade = props. || ;
  // const bounce = props. || ;
  // const shake = props. || ;
  // const border = props. || ;
  // const fixedWidth = props. || ;
  // const inverse = props. || ;
  // const listItem = props. || ;
  // const flip = props. || ;
  // const size = props. || ;
  // const pull = props. || ;
  // const rotation = props. || ;
  // const transform = props. || ;
  // const symbol = props. || ;
  // const style = props. || ;
  // const tabIndex = props. || ;
  // const title = props. || ;
  // const titleId = props. || ;
  // const swapOpacity = props. || ;

  function classes() {
    let classList = [
      "svg-inline--fa",
      props.icon,
      // `fa-${faicon.iconName}`,
      // "fa-fw",
    ];
    classList.push(props.size ? `fa-${props.size}` : "");
    if(props.className)
      classList.push(props.className);
    if(props.inverse)
      classList.push("fa-inverse");

    return classList.join(" ");
  }

  function styles() {
    let styles = "";
    styles += `font-size:${transform?.size ? transform.size/16 : 1}em;`;
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
