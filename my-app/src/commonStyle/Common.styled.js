import styled from "styled-components";
import {
  background,
  color,
  space,
  layout,
  flexbox,
  grid,
  position,
  border,
} from "styled-system";

export const Box = styled("div")(
  background,
  color,
  space,
  layout,
  flexbox,
  grid,
  position,
  border
);

export const ConteinerBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${(p) => p.theme.space[4]}px;
`;
