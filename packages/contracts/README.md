# @coolcatchain/contracts

CoolCat smart contract interface.

```sh
yarn add @coolcatchain/contracts
```

## CoolCat Contracts

### Clients

All contracts are scoped under the `contracts` object:

```js
import { contracts } from '@coolcatchain/contracts';
const {
  CWAdminFactory,
  CWCore,
  CWNativeBalanceStake,
  CWNamesRegistry,
  CWSingleProposalVote
} = contracts;
```

Then each contract will have clients, for example for `CWNamesRegistry`:

```ts
const {
  CWNamesRegistryClient,
  CWNamesRegistryMessageComposer,
  CWNamesRegistryQueryClient
} = CWNamesRegistry;
```

### Queries

```js
const queryClient = new CWNamesRegistryQueryClient(wasmClient, contractAddress);

const isNameTaken = await queryClient.isNameTaken('CoolCat Clowder');
const members = await queryClient.ClowderByName('CoolCat Clowder');
```

### Mutations

```js
const client = new CWSingleProposalVote(
  signingWasmClient,
  sender,
  contractAddress
);

await client.createProposal(msg);
```

## Credits

🛠 Built by [Digital Kitchen](https://digitalkitchen.zone/stake), based on [Cosmology ⚛️](https://cosmology.tech/validator) goodness!

Using CosmWasm TS Codegen:

- [@cosmwasm/ts-codegen](https://github.com/CosmWasm/ts-codegen) for generated CosmWasm contract Typescript classes
