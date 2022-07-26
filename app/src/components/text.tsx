import styled from "styled-components";

interface IStyledTextProps {
    fontSize: string;
    color: string;
    fontWeight?: string;
    paddingY?:string
    paddingX?:string;
}

export const StyledText = styled.h3<IStyledTextProps>`
 font-size: ${props=> props.fontSize};
 color:  ${props=> props.color};  
 font-weight: ${props=> props.fontWeight};
 padding: ${props=> props.paddingY}  ${props=> props.paddingX};
`
