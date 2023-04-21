/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.24.0.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

export type Uint128 = string;
export type Denom = {
  native: string;
} | {
  cw20: Addr;
};
export type Addr = string;
export interface Config {
  admin: string;
  distribution_schedule: [number, number, Uint128][];
  lock_duration: number;
  lp_token_contract: string;
  reward_token: Denom;
  [k: string]: unknown;
}
export type ExecuteMsg = {
  receive: Cw20ReceiveMsg;
} | {
  unbond: {
    amount: Uint128;
    [k: string]: unknown;
  };
} | {
  withdraw: {
    [k: string]: unknown;
  };
} | {
  redeem: {
    [k: string]: unknown;
  };
} | {
  migrate_staking: {
    new_staking_contract: string;
    [k: string]: unknown;
  };
} | {
  update_config: {
    distribution_schedule: [number, number, Uint128][];
    [k: string]: unknown;
  };
} | {
  update_admin: {
    admin: string;
    [k: string]: unknown;
  };
} | {
  update_token_contract: {
    lp_token_contract: string;
    reward_token: Denom;
    [k: string]: unknown;
  };
} | {
  update_lock_duration: {
    lock_duration: number;
    [k: string]: unknown;
  };
};
export type Binary = string;
export interface Cw20ReceiveMsg {
  amount: Uint128;
  msg: Binary;
  sender: string;
  [k: string]: unknown;
}
export interface InstantiateMsg {
  distribution_schedule: [number, number, Uint128][];
  lock_duration: number;
  lp_token_contract: string;
  reward_token: Denom;
  [k: string]: unknown;
}
export type QueryMsg = {
  config: {
    [k: string]: unknown;
  };
} | {
  state: {
    block_time?: number | null;
    [k: string]: unknown;
  };
} | {
  staker_info: {
    staker: string;
    [k: string]: unknown;
  };
} | {
  all_stakers: {
    limit?: number | null;
    start_after?: string | null;
    [k: string]: unknown;
  };
} | {
  unbonding_info: {
    limit?: number | null;
    staker: string;
    start_after?: number | null;
    [k: string]: unknown;
  };
};
export type Decimal = string;
export interface StakerInfo {
  address: string;
  bond_amount: Uint128;
  pending_reward: Uint128;
  reward_index: Decimal;
  [k: string]: unknown;
}
export interface State {
  global_reward_index: Decimal;
  last_distributed: number;
  total_bond_amount: Uint128;
  [k: string]: unknown;
}
export interface UnbondingInfo {
  address: string;
  amount: Uint128;
  time: number;
  [k: string]: unknown;
}
export type HopersStakingExecuteMsg = ExecuteMsg;