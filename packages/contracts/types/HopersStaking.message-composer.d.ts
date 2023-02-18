/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.24.0.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/
import { Coin } from "@cosmjs/amino";
import { MsgExecuteContractEncodeObject } from "cosmwasm";
import { Uint128, Binary, Denom } from "./HopersStaking.types";
export interface HopersStakingMessage {
    contractAddress: string;
    sender: string;
    receive: ({ amount, msg, sender }: {
        amount: Uint128;
        msg: Binary;
        sender: string;
    }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
    unbond: ({ amount }: {
        amount: Uint128;
    }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
    withdraw: (funds?: Coin[]) => MsgExecuteContractEncodeObject;
    redeem: (funds?: Coin[]) => MsgExecuteContractEncodeObject;
    migrateStaking: ({ newStakingContract }: {
        newStakingContract: string;
    }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
    updateConfig: ({ distributionSchedule }: {
        distributionSchedule: number[][];
    }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
    updateAdmin: ({ admin }: {
        admin: string;
    }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
    updateTokenContract: ({ lpTokenContract, rewardToken }: {
        lpTokenContract: string;
        rewardToken: Denom;
    }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
    updateLockDuration: ({ lockDuration }: {
        lockDuration: number;
    }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
}
export declare class HopersStakingMessageComposer implements HopersStakingMessage {
    sender: string;
    contractAddress: string;
    constructor(sender: string, contractAddress: string);
    receive: ({ amount, msg, sender }: {
        amount: Uint128;
        msg: Binary;
        sender: string;
    }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
    unbond: ({ amount }: {
        amount: Uint128;
    }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
    withdraw: (funds?: Coin[]) => MsgExecuteContractEncodeObject;
    redeem: (funds?: Coin[]) => MsgExecuteContractEncodeObject;
    migrateStaking: ({ newStakingContract }: {
        newStakingContract: string;
    }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
    updateConfig: ({ distributionSchedule }: {
        distributionSchedule: number[][];
    }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
    updateAdmin: ({ admin }: {
        admin: string;
    }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
    updateTokenContract: ({ lpTokenContract, rewardToken }: {
        lpTokenContract: string;
        rewardToken: Denom;
    }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
    updateLockDuration: ({ lockDuration }: {
        lockDuration: number;
    }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
}
