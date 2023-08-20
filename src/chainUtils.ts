import {createPublicClient, http} from 'viem';
import {base, mainnet} from 'viem/chains';
import {createConfig} from 'wagmi';
import {MerkleTree} from 'merkletreejs';

export const client = createPublicClient({
  chain: base,
  transport: http(),
});

export const config = createConfig({
  autoConnect: true,
  publicClient: client,
});

export const ensClient = createPublicClient({
  chain: mainnet,
  transport: http(),
});

export const fetchEnsName = async (address: string) =>
  // @ts-ignore
  await ensClient.getEnsName({
    address: address,
  });
