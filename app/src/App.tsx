import React from "react";
import { useProvider } from "./hooks/useProvider";
import { StyledText } from "./components/text";

import { Navbar } from "./components/navbar";
import { StyledWrapper } from "./components/wrapper";
import { StyledContainer } from "./components/container";
import { Connect } from './features/connect-wallet/components/connect';

function App() {
  const { hasMetamask } = useProvider();

  return (
    <div>
      {hasMetamask ? (
        <StartApp />
      ) : (
        <StyledText fontSize="15" color="red" fontWeight="600">
          {" "}
          install wallet
        </StyledText>
      )}
    </div>
  );
}

function StartApp() {
  return (
    <StyledWrapper
      paddingT="20px"
      paddingL="20px"
      paddingR="20px"
      height="100vh"
      width="100vw"
      backgroundColor="rgb(10, 8, 22)"
    >
      <Navbar></Navbar>
      <div className="flex items-center">
        <StyledContainer
          className="flex"
          height="max-content"
          width="80vw"
          backgroundColor="rgb(32, 32, 54)"
          margin="150px"
          borderRadius="20px"
         
        >
          <Connect></Connect>
        </StyledContainer>
      </div>
    </StyledWrapper>
  );
}

export default App;
