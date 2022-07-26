import styled from "styled-components";
import { StyledText } from "./text";
import { StyledButton } from "./button";
import { useConnectWallet } from "../hooks/useConnectWallet";

const StyledNav = styled.div`
  display: flex;
  justify-content: space-between;
`;

export function Navbar() {
  const { account, setAccount, handleConnectWallet, loading } =
    useConnectWallet();

  return (
    <StyledNav className="items-center">
      <StyledText color="white" fontSize="30px" fontWeight="600">
        Cosmos
      </StyledText>
      {loading ? (
        <StyledText color="grey" fontSize="10px" fontWeight="600">
          loading...
        </StyledText>
      ) : (
        <StyledText color="grey" fontSize="10px" fontWeight="600">
          {account}
        </StyledText>
      )}
     

      <StyledButton
        paddingX="30px"
        paddingY="10px"
        backgroundColor="rgb(32, 32, 54)"
        color="white"
        borderRadius="15px"
        onClick={(e) => handleConnectWallet!()}
      >
        Connect wallet
      </StyledButton>
    </StyledNav>
  );
}
