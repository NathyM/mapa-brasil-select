import styled from "styled-components";
import { IStyledDistrictProps } from "../types";

export const District = styled.g<IStyledDistrictProps>`
  fill: ${({ selected, backgroundColor, activeBackgroundColor }) =>
    selected ? activeBackgroundColor ?? "#833dda" : backgroundColor ?? "#c8a2c8"};
  stroke: ${({ strokeColor }) => strokeColor ?? "#5c1ac2"};

  cursor: pointer;

  transform: all 0.1s;

  & text {
    stroke: initial;
    fill: ${({ labelColor }) => labelColor ?? "#ffffff"};
    font-family: "Arial", sans-serif;
    font-weight: bold;
    font-size: 12px;
    cursor: pointer;
    user-select: none;
  }

  &:hover {
    filter: brightness(93%);

    & Text {
      filter: brightness(unset);
    }
  }
`;
