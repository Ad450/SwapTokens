import { StyledText } from "../../../components/text";
import { StyledButton } from "../../../components/button";
import { StyledContainer } from "../../../components/container";
import { Dropdown } from "../../../components/dropdown";
import {
  useConnectWallet,
  useWalletConnected,
} from "../../../hooks/useConnectWallet";

export function Connect() {
  const { handleConnectWallet } = useConnectWallet();
  const { connected } = useWalletConnected();
  return (
    <div className="flex">
      <StyledContainer paddingY="100px">
        <StyledText fontSize="30px" fontWeight="600" color="white">
          Experience the power of defi with Cosmos
        </StyledText>
        <StyledText
          className="text-start"
          fontSize="15px"
          color="grey"
          paddingY="20px"
          paddingX="0px"
        >
          We have done it carefully and simply. Combined with the ingredients
          makes for beautiful landings
        </StyledText>

        <div className="flex justify-around">
          <StyledButton
            paddingX="30px"
            paddingY="10px"
            backgroundColor="rgb(32, 32, 54)"
            color="white"
            border="2px solid grey"
            borderRadius="30px"
            onClick={(e) => handleConnectWallet!()}
          >
            <StyledText fontWeight="500" fontSize="10px" color="white">
              Connect Wallet
            </StyledText>
          </StyledButton>
          <StyledButton
            paddingX="30px"
            paddingY="10px"
            backgroundColor="rgb(32, 32, 54)"
            color="white"
            border="2px solid grey"
            borderRadius="30px"
            width="150px"
          >
            <StyledText fontWeight="500" fontSize="10px" color="white">
              Learn More
            </StyledText>
          </StyledButton>
        </div>
      </StyledContainer>

      <StyledContainer backgroundColor="rgb(42, 42, 70)" borderRadius="20px">
        <div className="flex justify-between w-fit py-4">
          <StyledText
            fontWeight="300"
            fontSize="20px"
            color="white"
            className="px-12"
          >
            Buy
          </StyledText>
          <StyledText
            fontWeight="300"
            fontSize="20px"
            color="white"
            className="px-24"
          >
            Sell
          </StyledText>
        </div>

        <StyledContainer
          className="flex justify-between"
          backgroundColor="rgb(50, 50, 77)"
          borderRadius="10px"
          paddingY="10px"
          margin="20px"
        >
          <StyledContainer
            backgroundColor="rgb(50, 50, 77)"
            borderRadius="20px"
          >
            <StyledText
              fontWeight="300"
              fontSize="13pxpx"
              color="grey"
              className="px-12"
            >
              From
            </StyledText>
            <StyledText
              fontWeight="300"
              fontSize="20px"
              color="white"
              className="px-12"
            >
              0.0004
            </StyledText>
          </StyledContainer>
          <StyledContainer>
            <StyledText
              fontWeight="300"
              fontSize="13pxpx"
              color="grey"
              className="px-12"
            >
              Live
            </StyledText>
            <Dropdown
              paddingX="30px"
              paddingY="0px"
              backgroundColor="rgb(50, 50, 77)"
            ></Dropdown>
          </StyledContainer>
        </StyledContainer>

        <StyledContainer
          className="flex justify-between"
          backgroundColor="rgb(50, 50, 77)"
          borderRadius="10px"
          paddingY="10px"
          margin="20px"
        >
          <StyledContainer
            backgroundColor="rgb(50, 50, 77)"
            borderRadius="20px"
          >
            <StyledText
              fontWeight="300"
              fontSize="13pxpx"
              color="grey"
              className="px-12"
            >
              From
            </StyledText>
            <StyledText
              fontWeight="300"
              fontSize="20px"
              color="white"
              className="px-12"
            >
              0.0004
            </StyledText>
          </StyledContainer>
          <StyledContainer>
            <StyledText
              fontWeight="300"
              fontSize="13pxpx"
              color="grey"
              className="px-12"
            >
              Live
            </StyledText>
            <Dropdown
              paddingX="30px"
              paddingY="0px"
              backgroundColor="rgb(50, 50, 77)"
            ></Dropdown>
          </StyledContainer>
        </StyledContainer>

        <StyledContainer className="flex justify-center">
          {connected ? (
            <StyledButton
              paddingX="30px"
              paddingY="10px"
              backgroundColor="rgb(32, 32, 54)"
              color="white"
              border="2px solid grey"
              borderRadius="10px"
              onClick={(e) => handleConnectWallet!()}
            >
              Swap Tokens
            </StyledButton>
          ) : (
            <StyledButton
              paddingX="30px"
              paddingY="10px"
              backgroundColor="rgb(32, 32, 54)"
              color="white"
              border="2px solid grey"
              borderRadius="10px"
              onClick={(e) => handleConnectWallet!()}
            >
             Connect Wallet
            </StyledButton>
          )}
        </StyledContainer>
      </StyledContainer>
    </div>
  );
}
