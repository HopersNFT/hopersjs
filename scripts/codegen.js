import { join, resolve } from 'path';
import codegen from '@cosmwasm/ts-codegen';

const contractsDir = resolve(join(__dirname, '../contracts'));
const contracts = [
	{
		name: "CW20Base",
		dir: join(contractsDir, "cw20-base")
	},
	{
		name: "HopersStaking",
		dir: join(contractsDir, "hopers-staking")
	},
	{
		name: "HopersSwapHopers",
		dir: join(contractsDir, "hopers-swap_hopers")
	},
	{
		name: "HopersSwapOthers",
		dir: join(contractsDir, "hopers-swap_orders")
	}
]

codegen({
  contracts,
  outPath: join(__dirname, '../src'),
  options: {
    bundle: {
      enabled: true,
      bundleFile: 'index.ts',
      scope: 'contracts',
    },
    types: {
      enabled: true,
      aliasExecuteMsg: true,
    },
    client: {
      enabled: true,
      execExtendsQuery: true
    },
    messageComposer: {
      enabled: true,
    }
  }
}).then(() => {
  console.log("✨ Generated CoolCat contracts package!");
}).catch(e=>{
  console.error(e);
  process.exit(1)
});
