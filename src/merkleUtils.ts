import {MerkleTree} from 'merkletreejs';
// @ts-ignore
import sha256 from 'crypto-js/sha256';

export const createTree = (arrayOfAddresses: string[]) => {
  const leaves = arrayOfAddresses.map(x => sha256(x));
  return new MerkleTree(leaves, sha256);
};

const getRoot = (tree: MerkleTree) => {
  return tree.getRoot().toString('hex');
};

export const verifyLeaf = (tree: MerkleTree, address: string) => {
  const root = getRoot(tree);
  const leaf = sha256(address);
  const proof = tree.getProof(leaf);

  return tree.verify(proof, leaf, root);
};
