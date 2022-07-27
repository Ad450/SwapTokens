import { useState } from "react";
import { connectWallet } from "../features/connect-wallet/api/wallet";

interface IConnectWalletProps {
    account: string;
    setAccount?: React.Dispatch<React.SetStateAction<string>>;
    handleConnectWallet?: () => void;
    loading?: boolean;
}

export function useConnectWallet(): IConnectWalletProps {
    const [account, setAccount] = useState("");
    const [loading, setIsLoading] = useState(false);
    const handleConnectWallet = () => {
        setIsLoading(true);
        connectWallet()
            .then((account) => {
                setIsLoading(false);
                setAccount((prev) => account);
            })
            .catch((e) => console.log(e));
    };

    return { account, setAccount, handleConnectWallet, loading };
}

interface IWalletConnected {
    connected: boolean;
}
export function useWalletConnected(): IWalletConnected {
    const [connected, setConnected] = useState(false);
    const { account } = useConnectWallet();
    if (account !== "" && account !== undefined) {
        setConnected((prev) => true);
    }
    return { connected };
}
