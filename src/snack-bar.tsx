import React, { Component } from "react";
import { isArray } from "./utils";
import styled from "styled-components";
import {
  MobileTopConatainer,
  MobileBottomConatainer,
  TopCenterContainer
} from "./container-div";
interface SnackBarProps {
  isMobile?: boolean;
  breakpoint?: number;
  types: any[];
  onSnackBarRemoval: () => void;
}
interface SnackBarStates {
  isMobile: boolean;
  breakpoint: number;
  snacks: any[];
  userDefinedTypes: any[];
  width: number;
}
export enum SnackBarType {
  SUCCESS = "success",
  ERROR = "error",
  DEFAULT = "default",
  INFO = "info",
  WARNING = "warning"
}
export enum SnackBarPos {
  top = "TOP",
  bottom = "BOTTOM"
}
export enum SnackBarContainer {
  topLeft = "TOP_LEFT",
  topRight = "TOP_RIGHT",
  bottomLeft = "BOTTOM_LEFT",
  bottomRight = "BOTTOM_RIGHT"
}
export interface SnackBarOption {
  id: string;
  title: string;
  message: string;
  type: SnackBarType;
  insert: SnackBarPos;
  container: SnackBarContainer;
  content: React.ReactElement;
}

const BREAKPOINT = 768;
const CLASSNMAE_PERFIX = "snackbar";

class SnackBar extends Component<SnackBarProps, SnackBarStates> {
  static defaultProps = {
    isMobile: true,
    breakpoint: BREAKPOINT
  };
  state = {
    snacks: [],
    userDefinedTypes: [],
    isMobile: false,
    width: BREAKPOINT,
    breakpoint: BREAKPOINT
  };
  constructor(props) {
    super(props);
    this.state.breakpoint = this.props.breakpoint;
    this.state.isMobile = this.props.isMobile;
    if (isArray(this.props.types)) {
      this.state.userDefinedTypes = this.props.types;
    }
  }
  addSnack(snack: SnackBarOption) {
    this.setState((prevState: SnackBarStates) => ({}));
  }
  render() {
    const { state, props } = this;
    if (props.isMobile && state.width <= state.breakpoint) {
      return (
        <div className={`${CLASSNMAE_PERFIX}-conatainer-root`}>
          <MobileTopConatainer />
          <MobileBottomConatainer />
        </div>
      );
    }
    return (
      <div className={`${CLASSNMAE_PERFIX}-container-root`}>
        <TopCenterContainer />
      </div>
    );
  }
}
export default SnackBar;
