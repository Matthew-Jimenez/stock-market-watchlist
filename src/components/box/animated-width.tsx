// src/components/AnimatedDiv.tsx
import React from "react";
import { styled, keyframes } from "@mui/material/styles";

interface AnimatedDivProps {
  fullWidth: boolean;
  width: string;
  children: React.ReactNode;
}

const expand = keyframes`
  from {
width: 300px;
  }
  to {
width: 100%;
  }
`;

const shrink = keyframes`
  from {
    width: 100%;
  }
  to {
    width: 900px;
  }
`;

const StyledDiv = styled("div")<{ fullWidth: boolean; maxWidth: string }>`
  animation: ${({ fullWidth }) => (fullWidth ? expand : shrink)} 1s forwards;
  max-width: ${({ maxWidth }) => maxWidth};
`;

const AnimatedDiv: React.FC<AnimatedDivProps> = ({
  fullWidth,
  children,
  width,
}) => {
  return (
    <StyledDiv fullWidth={fullWidth} maxWidth={width}>
      {children}
    </StyledDiv>
  );
};

export default AnimatedDiv;
