import styled from "styled-components";

interface IStyledDropdownProps {
    paddingX?:string;
    paddingY?:string;
    backgroundColor?:string;
}

export const StyledDropDown = styled.div<IStyledDropdownProps>`
padding: ${props=>props.paddingY} ${props=>props.paddingX};
background-color: ${props=> props.backgroundColor};
`;

export function Dropdown({paddingX, paddingY} : IStyledDropdownProps) {
  return (
    <StyledDropDown paddingX={paddingX} paddingY= {paddingY}>
      <select id="cars" name="cars">
        <option value="volvo">BTC</option>
        <option value="saab">ETH</option>
        <option value="fiat">BUSD</option>
        <option value="audi">DOGE</option>
      </select>
    </StyledDropDown>
  );
}
