/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.24.0.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

import { Coin } from "@cosmjs/amino";
import { MsgExecuteContractEncodeObject } from "cosmwasm";
import { MsgExecuteContract } from "cosmjs-types/cosmwasm/wasm/v1/tx";
import { toUtf8 } from "@cosmjs/encoding";
import { Uint128, Denom, Addr, Config, ExecuteMsg, Binary, Cw20ReceiveMsg, InstantiateMsg, QueryMsg, Decimal, StakerInfo, State, UnbondingInfo } from "./HopersStaking.types";
export interface HopersStakingMessage {
  contractAddress: string;
  sender: string;
  receive: ({
    amount,
    msg,
    sender
  }: {
    amount: Uint128;
    msg: Binary;
    sender: string;
  }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
  unbond: ({
    amount
  }: {
    amount: Uint128;
  }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
  withdraw: (funds?: Coin[]) => MsgExecuteContractEncodeObject;
  redeem: (funds?: Coin[]) => MsgExecuteContractEncodeObject;
  migrateStaking: ({
    newStakingContract
  }: {
    newStakingContract: string;
  }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
  updateConfig: ({
    distributionSchedule
  }: {
    distributionSchedule: number[][];
  }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
  updateAdmin: ({
    admin
  }: {
    admin: string;
  }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
  updateTokenContract: ({
    lpTokenContract,
    rewardToken
  }: {
    lpTokenContract: string;
    rewardToken: Denom;
  }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
  updateLockDuration: ({
    lockDuration
  }: {
    lockDuration: number;
  }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
}
export class HopersStakingMessageComposer implements HopersStakingMessage {
  sender: string;
  contractAddress: string;

  constructor(sender: string, contractAddress: string) {
    this.sender = sender;
    this.contractAddress = contractAddress;
    this.receive = this.receive.bind(this);
    this.unbond = this.unbond.bind(this);
    this.withdraw = this.withdraw.bind(this);
    this.redeem = this.redeem.bind(this);
    this.migrateStaking = this.migrateStaking.bind(this);
    this.updateConfig = this.updateConfig.bind(this);
    this.updateAdmin = this.updateAdmin.bind(this);
    this.updateTokenContract = this.updateTokenContract.bind(this);
    this.updateLockDuration = this.updateLockDuration.bind(this);
  }

  receive = ({
    amount,
    msg,
    sender
  }: {
    amount: Uint128;
    msg: Binary;
    sender: string;
  }, funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          receive: {
            amount,
            msg,
            sender
          }
        })),
        funds
      })
    };
  };
  unbond = ({
    amount
  }: {
    amount: Uint128;
  }, funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          unbond: {
            amount
          }
        })),
        funds
      })
    };
  };
  withdraw = (funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          withdraw: {}
        })),
        funds
      })
    };
  };
  redeem = (funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          redeem: {}
        })),
        funds
      })
    };
  };
  migrateStaking = ({
    newStakingContract
  }: {
    newStakingContract: string;
  }, funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          migrate_staking: {
            new_staking_contract: newStakingContract
          }
        })),
        funds
      })
    };
  };
  updateConfig = ({
    distributionSchedule
  }: {
    distributionSchedule: number[][];
  }, funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          update_config: {
            distribution_schedule: distributionSchedule
          }
        })),
        funds
      })
    };
  };
  updateAdmin = ({
    admin
  }: {
    admin: string;
  }, funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          update_admin: {
            admin
          }
        })),
        funds
      })
    };
  };
  updateTokenContract = ({
    lpTokenContract,
    rewardToken
  }: {
    lpTokenContract: string;
    rewardToken: Denom;
  }, funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          update_token_contract: {
            lp_token_contract: lpTokenContract,
            reward_token: rewardToken
          }
        })),
        funds
      })
    };
  };
  updateLockDuration = ({
    lockDuration
  }: {
    lockDuration: number;
  }, funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          update_lock_duration: {
            lock_duration: lockDuration
          }
        })),
        funds
      })
    };
  };
}