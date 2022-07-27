import React from "react";
import { useProvider } from "./hooks/useProvider";
import { StyledText } from "./components/text";

import { Navbar } from "./components/navbar";
import { StyledWrapper } from "./components/wrapper";
import { StyledContainer } from "./components/container";
import { Connect } from "./features/connect-wallet/components/connect";
import { useWalletChanged } from "./hooks/useWalletChanged";

function App() {
  const { hasMetamask } = useProvider();
  useWalletChanged();

  return <StartApp hasMetamask={hasMetamask} />;
}

interface IStartApp {
  hasMetamask: boolean;
}

function StartApp({ hasMetamask }: IStartApp) {
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
          {hasMetamask ? <Connect /> : <InstallWallet />}
        </StyledContainer>
      </div>
    </StyledWrapper>
  );
}

function InstallWallet() {
  return (
    <StyledText fontSize="15px" fontWeight="600" color="grey">
      Install Metamask Wallet to Continue using Cosmos!
    </StyledText>
  );
}

export default App;
