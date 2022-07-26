import { useConnectWallet } from "./useConnectWallet";
import { useEffect } from "react";
import { accountChanged } from "../features/connect-wallet/api/wallet";

export function useWalletChanged() {
    const { account, setAccount } = useConnectWallet();

    useEffect(() => {
        const newAccount = accountChanged();
        if (newAccount) {
            setAccount!((prev) => newAccount);
        }
    }, [account, setAccount]);
}
