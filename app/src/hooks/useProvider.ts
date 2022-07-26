import detectEthereumProvider from '@metamask/detect-provider';
import { useEffect, useState } from 'react';

interface IProvider {
    hasMetamask: boolean;
}


export function useProvider(): IProvider {
    const [hasMetamask, setHasMetamask] = useState(false);

    useEffect(() => {
        detectEthereumProvider().then(_provider => {
            if (!_provider) setHasMetamask(prev => prev)
            else {
                setHasMetamask(prev => true);
            }
        }).catch(e => console.log(e));

    }, []);

    return { hasMetamask }
}