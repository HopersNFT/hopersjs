/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.24.0.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/
import * as _1 from "./CW20Base.client";
import * as _2 from "./CW20Base.message-composer";
import * as _4 from "./HopersStaking.client";
import * as _5 from "./HopersStaking.message-composer";
import * as _7 from "./HopersSwapHopers.client";
import * as _8 from "./HopersSwapHopers.message-composer";
import * as _10 from "./HopersSwapOthers.client";
import * as _11 from "./HopersSwapOthers.message-composer";
export declare namespace contracts {
    const CW20Base: {
        CW20BaseMessageComposer: typeof _2.CW20BaseMessageComposer;
        CW20BaseQueryClient: typeof _1.CW20BaseQueryClient;
        CW20BaseClient: typeof _1.CW20BaseClient;
    };
    const HopersStaking: {
        HopersStakingMessageComposer: typeof _5.HopersStakingMessageComposer;
        HopersStakingQueryClient: typeof _4.HopersStakingQueryClient;
        HopersStakingClient: typeof _4.HopersStakingClient;
    };
    const HopersSwapHopers: {
        HopersSwapHopersMessageComposer: typeof _8.HopersSwapHopersMessageComposer;
        HopersSwapHopersQueryClient: typeof _7.HopersSwapHopersQueryClient;
        HopersSwapHopersClient: typeof _7.HopersSwapHopersClient;
    };
    const HopersSwapOthers: {
        HopersSwapOthersMessageComposer: typeof _11.HopersSwapOthersMessageComposer;
        HopersSwapOthersQueryClient: typeof _10.HopersSwapOthersQueryClient;
        HopersSwapOthersClient: typeof _10.HopersSwapOthersClient;
    };
}
