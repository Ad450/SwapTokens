import styled from 'styled-components';

interface IStyledContainer{
    height:string;
    width: string;
    padding?:string;
    backgroundColor:string;
    margin?:string;
    borderRadius? :string;
    
}

export const StyledContainer = styled.div<IStyledContainer>`
    padding: ${props => props.padding};
    width: ${props=> props.width};
    height: ${props => props.height};
    background-color: ${props=> props.backgroundColor};
    margin: ${props=> props.margin};
    border-radius: ${props => props.borderRadius};
`