import styled from "styled-components";
export const TopCenterContainer = styled.div`
  position: fixed;
  z-index: 8000;
  transform: translateX(-50%);
  top: 20px;
  left: 50%;
`;

export const BottomCenterContainer = styled.div`
  position: fixed;
  z-index: 8000;
  transform: translateX(-50%);
  margin-bottom: -20px;
  bottom: 20px;
  left: 50%;
`;

export const TopLeftContainer = styled.div`
  position: fixed;
  z-index: 8000;
  left: 20px;
  top: 20px;
`;
export const TopRightContainer = styled.div`
  position: fixed;
  z-index: 8000;
  right: 20px;
  top: 20px;
`;

export const BottomLeftContainer = styled.div`
  position: fixed;
  z-index: 8000;
  left: 20px;
  bottom: 20px;
`;
export const BottomRightContainer = styled.div`
  position: fixed;
  z-index: 8000;
  right: 20px;
  bottom: 20px;
`;

export const MobileTopConatainer = styled.div`
  z-index: 8000;
  position: fixed;
  right: 20px;
  left: 20px;
  top: 20px;
`;
export const MobileBottomConatainer = styled.div`
  z-index: 8000;
  position: fixed;
  right: 20px;
  left: 20px;
  bottom: 5px;
`;
