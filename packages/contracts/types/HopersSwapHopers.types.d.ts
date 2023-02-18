/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.24.0.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/
export declare type Uint128 = string;
export interface BalanceResponse {
    balance: Uint128;
    [k: string]: unknown;
}
export declare type ExecuteMsg = {
    add_liquidity: {
        expiration?: Expiration | null;
        max_token2: Uint128;
        min_liquidity: Uint128;
        token1_amount: Uint128;
        [k: string]: unknown;
    };
} | {
    remove_liquidity: {
        amount: Uint128;
        expiration?: Expiration | null;
        min_token1: Uint128;
        min_token2: Uint128;
        [k: string]: unknown;
    };
} | {
    swap_token1_for_token2: {
        expiration?: Expiration | null;
        min_token2: Uint128;
        token1_amount: Uint128;
        [k: string]: unknown;
    };
} | {
    swap_token2_for_token1: {
        expiration?: Expiration | null;
        min_token1: Uint128;
        token2_amount: Uint128;
        [k: string]: unknown;
    };
} | {
    multi_contract_swap: {
        expiration?: Expiration | null;
        input_token: TokenSelect;
        input_token_amount: Uint128;
        output_amm_address: Addr;
        output_min_token: Uint128;
        output_token: TokenSelect;
        [k: string]: unknown;
    };
} | {
    swap_to: {
        expiration?: Expiration | null;
        input_amount: Uint128;
        input_token: TokenSelect;
        min_token: Uint128;
        recipient: Addr;
        [k: string]: unknown;
    };
};
export declare type Expiration = {
    at_height: number;
} | {
    at_time: Timestamp;
} | {
    never: {
        [k: string]: unknown;
    };
};
export declare type Timestamp = Uint64;
export declare type Uint64 = string;
export declare type TokenSelect = "Token1" | "Token2";
export declare type Addr = string;
export interface InfoResponse {
    lp_token_supply: Uint128;
    token1_address?: string | null;
    token1_denom: string;
    token1_reserve: Uint128;
    token2_address?: string | null;
    token2_denom: string;
    token2_reserve: Uint128;
    [k: string]: unknown;
}
export interface InstantiateMsg {
    token1_address?: Addr | null;
    token1_denom: string;
    token2_address?: Addr | null;
    token2_denom: string;
    [k: string]: unknown;
}
export declare type QueryMsg = {
    balance: {
        address: string;
        [k: string]: unknown;
    };
} | {
    info: {
        [k: string]: unknown;
    };
} | {
    token1_for_token2_price: {
        token1_amount: Uint128;
        [k: string]: unknown;
    };
} | {
    token2_for_token1_price: {
        token2_amount: Uint128;
        [k: string]: unknown;
    };
};
export interface Token {
    address?: Addr | null;
    denom: string;
    reserve: Uint128;
    [k: string]: unknown;
}
export interface Token1ForToken2PriceResponse {
    token2_amount: Uint128;
    [k: string]: unknown;
}
export interface Token2ForToken1PriceResponse {
    token1_amount: Uint128;
    [k: string]: unknown;
}
export declare type HopersSwapHopersExecuteMsg = ExecuteMsg;
