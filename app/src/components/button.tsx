import styled from 'styled-components';

interface IStyledButtonProps{
    paddingX: string;
    paddingY: string;
    color: string;
    backgroundColor: string;
    borderRadius?:string;
    border?:string;
}

export const StyledButton = styled.button<IStyledButtonProps>`
    padding: ${props=> props.paddingY}  ${props=> props.paddingX};
    color: ${props=> props.color};
    background-color: ${props=> props.backgroundColor};
    border-radius: ${props => props.borderRadius};
    border: ${props=> props.border};
`
