import React, { Component } from "react";
import { isArray } from "./utils";
import styled from "styled-components";
interface NotificationProps {
  isMobile?: boolean;
  breakpoint?: number;
  types: any[];
  onNotificationRemoval: () => void;
}
interface NotificationStates {
  isMobile: boolean;
  breakpoint: number;
  notifications: any[];
  userDefinedTypes: any[];
  width: number;
}
enum NotificationType {
  SUCCESS = "success",
  ERROR = "error",
  DEFAULT = "default",
  INFO = "info",
  WARNING = "warning"
}
enum NotificationPos {
  top = "TOP",
  bottom = "BOTTOM"
}
enum NotificationContainer {
  topLeft = "TOP_LEFT",
  topRight = "TOP_RIGHT",
  bottomLeft = "BOTTOM_LEFT",
  bottomRight = "BOTTOM_RIGHT"
}
interface NotificationOption {
  id: string;
  title: string;
  message: string;
  type: NotificationType;
  insert: NotificationPos;
  container: NotificationContainer;
}

const BREAKPOINT = 768;
const CLASSNMAE_PERFIX = "notification-root";
const TopCenterContainer = styled.div`
  position: fixed;
  z-index: 8000;
  transform: translateX(-50%);
  top: 20px;
  left: 50%;
`;
class ReactNotification extends Component<
  NotificationProps,
  NotificationStates
> {
  static defaultProps = {
    isMobile: true,
    breakpoint: BREAKPOINT
  };
  state = {
    notifications: [],
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
  render() {
    return <div />;
  }
}
