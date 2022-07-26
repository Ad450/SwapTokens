import styled from 'styled-components';

interface IStyledContainer{
    height?:string;
    width?: string;
    paddingY?:string;
    paddingX?:string;
    backgroundColor?:string;
    margin?:string;
    borderRadius? :string;
    
}

export const StyledContainer = styled.div<IStyledContainer>`
    padding: ${props => props.paddingY} ${props => props.paddingX};
    width: ${props=> props.width};
    height: ${props => props.height};
    background-color: ${props=> props.backgroundColor};
    margin: ${props=> props.margin};
    border-radius: ${props => props.borderRadius};
`