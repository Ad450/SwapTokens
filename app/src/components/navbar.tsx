import styled from 'styled-components';
import { StyledText } from './text';
import { StyledButton } from './button';

const StyledNav = styled.div`
display:flex;
justify-content: space-between;

`

export function Navbar(){
    return (
       <StyledNav>
            <StyledText color="white" fontSize='30px' fontWeight='600'>Cosmos</StyledText>
            <StyledButton paddingX='30px' paddingY='10px' backgroundColor='rgb(32, 32, 54)' color='white'>Connect wallet</StyledButton>
       </StyledNav>
    )
}