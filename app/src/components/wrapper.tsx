import styled from 'styled-components';


/// paddingT - padding top
/// paddingB - padding bottom
/// paddingR - padding right
/// paddingL - padding left
interface IStyledWrapper{
    paddingT?: string;
    paddingB?: string;
    paddingR?: string;
    paddingL?: string;
    width: string;
    height:string;
    backgroundColor:string;
}

export const StyledWrapper = styled.div<IStyledWrapper>`
padding-top: ${props=> props.paddingT};
padding-right: ${props=> props.paddingR};
padding-left: ${props=> props.paddingL};
padding-bottom: ${props=> props.paddingB};
height: ${props=> props.height};
width: ${props=> props.width};
background-color: ${props=> props.backgroundColor};
`

