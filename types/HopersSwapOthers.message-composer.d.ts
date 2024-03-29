/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.24.0.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/
import { Coin } from "@cosmjs/amino";
import { MsgExecuteContractEncodeObject } from "cosmwasm";
import { Uint128, WalletInfo, Expiration, TokenSelect } from "./HopersSwapOthers.types";
export interface HopersSwapOthersMessage {
    contractAddress: string;
    sender: string;
    addLiquidity: ({ expiration, maxToken2, minLiquidity, token1Amount }: {
        expiration?: Expiration;
        maxToken2: Uint128;
        minLiquidity: Uint128;
        token1Amount: Uint128;
    }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
    removeLiquidity: ({ amount, expiration, minToken1, minToken2 }: {
        amount: Uint128;
        expiration?: Expiration;
        minToken1: Uint128;
        minToken2: Uint128;
    }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
    swap: ({ expiration, inputAmount, inputToken, minOutput }: {
        expiration?: Expiration;
        inputAmount: Uint128;
        inputToken: TokenSelect;
        minOutput: Uint128;
    }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
    passThroughSwap: ({ expiration, inputToken, inputTokenAmount, outputAmmAddress, outputMinToken }: {
        expiration?: Expiration;
        inputToken: TokenSelect;
        inputTokenAmount: Uint128;
        outputAmmAddress: string;
        outputMinToken: Uint128;
    }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
    swapAndSendTo: ({ expiration, inputAmount, inputToken, minToken, recipient }: {
        expiration?: Expiration;
        inputAmount: Uint128;
        inputToken: TokenSelect;
        minToken: Uint128;
        recipient: string;
    }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
    updateConfig: ({ devWalletLists, feePercentDenominator, feePercentNumerator, owner }: {
        devWalletLists: WalletInfo[];
        feePercentDenominator: Uint128;
        feePercentNumerator: Uint128;
        owner?: string;
    }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
}
export declare class HopersSwapOthersMessageComposer implements HopersSwapOthersMessage {
    sender: string;
    contractAddress: string;
    constructor(sender: string, contractAddress: string);
    addLiquidity: ({ expiration, maxToken2, minLiquidity, token1Amount }: {
        expiration?: Expiration;
        maxToken2: Uint128;
        minLiquidity: Uint128;
        token1Amount: Uint128;
    }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
    removeLiquidity: ({ amount, expiration, minToken1, minToken2 }: {
        amount: Uint128;
        expiration?: Expiration;
        minToken1: Uint128;
        minToken2: Uint128;
    }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
    swap: ({ expiration, inputAmount, inputToken, minOutput }: {
        expiration?: Expiration;
        inputAmount: Uint128;
        inputToken: TokenSelect;
        minOutput: Uint128;
    }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
    passThroughSwap: ({ expiration, inputToken, inputTokenAmount, outputAmmAddress, outputMinToken }: {
        expiration?: Expiration;
        inputToken: TokenSelect;
        inputTokenAmount: Uint128;
        outputAmmAddress: string;
        outputMinToken: Uint128;
    }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
    swapAndSendTo: ({ expiration, inputAmount, inputToken, minToken, recipient }: {
        expiration?: Expiration;
        inputAmount: Uint128;
        inputToken: TokenSelect;
        minToken: Uint128;
        recipient: string;
    }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
    updateConfig: ({ devWalletLists, feePercentDenominator, feePercentNumerator, owner }: {
        devWalletLists: WalletInfo[];
        feePercentDenominator: Uint128;
        feePercentNumerator: Uint128;
        owner?: string;
    }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
}
