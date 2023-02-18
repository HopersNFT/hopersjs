# @hopersio/contracts

Hopers.io smart contract interface.

```sh
yarn add @hopersio/contracts
```

## Hopers.io Contracts

### Clients

All contracts are scoped under the `contracts` object:

```js
import { contracts } from "@hopersio/contracts"
const { CW20Base, HopersStaking, HopersSwapHopers, HopersSwapOthers } = contracts
```

Then each contract will have clients, for example for `HopersStaking`:

```ts
const { HopersStakingClient, HopersStakingMessageComposer, HopersStakingQueryClient } =
	HopersStaking
```

### Queries

```js
const queryClient = new HopersStakingQueryClient(wasmClient, contractAddress)
```

### Mutations

```js
const client = new HopersStaking(signingWasmClient, sender, contractAddress)
await client.stake(msg)
```

## Credits

🛠 Built by [Digital Kitchen](https://digitalkitchen.zone/stake), based on [Cosmology ⚛️](https://cosmology.tech/validator) goodness!

Using CosmWasm TS Codegen:

-  [@cosmwasm/ts-codegen](https://github.com/CosmWasm/ts-codegen) for generated CosmWasm contract Typescript classes
