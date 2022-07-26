import { ethers } from "ethers";

export function getProvider() {
    let provider;
    if ((window as any).ethereum === undefined) return;
    else {
        provider = new ethers.providers.Web3Provider((window as any).ethereum);
    }
    return provider;
}

export async function connectWallet(): Promise<string> {
    let accounts: string[];
    accounts = await getProvider()?.send("eth_requestAccounts", []);
    return accounts[0];
}

let currentAccount: string;
export function accountChanged(): string | undefined {
    getProvider()?.on("accountsChanged", (accounts: string[]) => {
        if (accounts) return;
        if (currentAccount !== accounts[0]) {
            currentAccount = accounts[0];
        }
    });
    return currentAccount;
}
