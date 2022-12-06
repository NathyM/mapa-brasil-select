import styled from "styled-components";
import { IMapSelectProps } from "../types";


export const Map = styled.svg<IMapSelectProps>`
  max-height: ${({height}) => (height ??"500px")};
  max-width: ${({width}) => (width ?? "450px" )};
`;
