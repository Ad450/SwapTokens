import { ethers } from "ethers";
import { getProvider } from "../../connect-wallet/api/wallet";
import uniswapV2Address from "../../../constants/constants";
import uniswapJSON from "./contract_abi.json";

interface IGetSigner {
    signer: ethers.providers.JsonRpcSigner | undefined;
}

async function getSigner(): Promise<IGetSigner> {
    const signer = getProvider()?.getSigner();
    return { signer };
}

export const getContract = async (): Promise<ethers.Contract> => {
    const { signer } = await getSigner();
    const contract = new ethers.Contract(uniswapV2Address, uniswapJSON, signer);
    return contract;
};

interface ISwap {
    path: string[];
    recipient: string;
    from: string;
    value: number;
    deadline: string;
}
async function swap({ path, recipient, from, value, deadline }: ISwap) {
    const uniswapV2 = await getContract();
    try {

    } catch (error) {

    }
}

