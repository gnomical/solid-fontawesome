import {
  Transform,
  // IconProp,
  // FlipProp,
  SizeProp,
  // PullProp,
  // RotateProp,
  // FaSymbol,
} from "@fortawesome/fontawesome-svg-core";

export type FontAwesomeIconProps = {
  icon: string;
  size?: SizeProp;
  // mask?: IconProp
  // maskId?: string
  className?: string;
  // color?: string
  // spin?: boolean
  // spinPulse?: boolean
  // spinReverse?: boolean
  // pulse?: boolean
  // beat?: boolean
  // fade?: boolean
  // beatFade?: boolean
  // bounce?: boolean
  // shake?: boolean
  // border?: boolean
  // fixedWidth?: boolean
  inverse?: boolean;
  // listItem?: boolean
  // flip?: FlipProp
  // pull?: PullProp
  // rotation?: RotateProp
  transform?: string | Transform;
  // symbol?: FaSymbol
  // style?: any
  // tabIndex?: number;
  // title?: string;
  // titleId?: string;
  // swapOpacity?: boolean;
};
