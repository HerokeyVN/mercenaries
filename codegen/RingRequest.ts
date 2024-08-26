/* tslint:disable */
/* eslint-disable */
/*
 * Autogenerated by @creditkarma/thrift-typescript v3.7.6
 * DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
*/
import * as thrift from "thrift";
import * as DataMessage from "./DataMessage";
import * as SessionDescription from "./SessionDescription";
import * as ClientMediaStatus from "./ClientMediaStatus";
import * as E2eeEnforcement from "./E2eeEnforcement";
import * as RelayInfo from "./RelayInfo";
import * as ProductMetadata from "./ProductMetadata";
import * as ThreadIdInfo from "./ThreadIdInfo";
export interface IRingRequestArgs {
    caller?: string;
    otherParticipants?: Set<string>;
    ringType?: number;
    offeredExperiments?: string;
    isScheduledCall?: boolean;
    appMessages?: Array<DataMessage.DataMessage>;
    offer?: SessionDescription.SessionDescription;
    mediaStatusEx?: ClientMediaStatus.ClientMediaStatus;
    isPreconnectSupported?: boolean;
    sdpOriginLocalId?: string;
    unifiedOffer?: SessionDescription.SessionDescription;
    mediaPath?: number;
    e2eeEnforcement?: E2eeEnforcement.E2eeEnforcement;
    isLegacyCall?: boolean;
    isTransferCall?: boolean;
    relayInfo?: RelayInfo.RelayInfo;
    overlayConfigs?: Map<number, number>;
    productMetadata?: ProductMetadata.ProductMetadata;
    callerClientSessionId?: string;
    threadIdInfo?: ThreadIdInfo.ThreadIdInfo;
    linkUrl?: string;
}
export class RingRequest {
    public caller?: string;
    public otherParticipants?: Set<string>;
    public ringType?: number;
    public offeredExperiments?: string;
    public isScheduledCall?: boolean;
    public appMessages?: Array<DataMessage.DataMessage>;
    public offer?: SessionDescription.SessionDescription;
    public mediaStatusEx?: ClientMediaStatus.ClientMediaStatus;
    public isPreconnectSupported?: boolean;
    public sdpOriginLocalId?: string;
    public unifiedOffer?: SessionDescription.SessionDescription;
    public mediaPath?: number;
    public e2eeEnforcement?: E2eeEnforcement.E2eeEnforcement;
    public isLegacyCall?: boolean;
    public isTransferCall?: boolean;
    public relayInfo?: RelayInfo.RelayInfo;
    public overlayConfigs?: Map<number, number>;
    public productMetadata?: ProductMetadata.ProductMetadata;
    public callerClientSessionId?: string;
    public threadIdInfo?: ThreadIdInfo.ThreadIdInfo;
    public linkUrl?: string;
    constructor(args?: IRingRequestArgs) {
        if (args != null && args.caller != null) {
            this.caller = args.caller;
        }
        if (args != null && args.otherParticipants != null) {
            this.otherParticipants = args.otherParticipants;
        }
        if (args != null && args.ringType != null) {
            this.ringType = args.ringType;
        }
        if (args != null && args.offeredExperiments != null) {
            this.offeredExperiments = args.offeredExperiments;
        }
        if (args != null && args.isScheduledCall != null) {
            this.isScheduledCall = args.isScheduledCall;
        }
        if (args != null && args.appMessages != null) {
            this.appMessages = args.appMessages;
        }
        if (args != null && args.offer != null) {
            this.offer = args.offer;
        }
        if (args != null && args.mediaStatusEx != null) {
            this.mediaStatusEx = args.mediaStatusEx;
        }
        if (args != null && args.isPreconnectSupported != null) {
            this.isPreconnectSupported = args.isPreconnectSupported;
        }
        if (args != null && args.sdpOriginLocalId != null) {
            this.sdpOriginLocalId = args.sdpOriginLocalId;
        }
        if (args != null && args.unifiedOffer != null) {
            this.unifiedOffer = args.unifiedOffer;
        }
        if (args != null && args.mediaPath != null) {
            this.mediaPath = args.mediaPath;
        }
        if (args != null && args.e2eeEnforcement != null) {
            this.e2eeEnforcement = args.e2eeEnforcement;
        }
        if (args != null && args.isLegacyCall != null) {
            this.isLegacyCall = args.isLegacyCall;
        }
        if (args != null && args.isTransferCall != null) {
            this.isTransferCall = args.isTransferCall;
        }
        if (args != null && args.relayInfo != null) {
            this.relayInfo = args.relayInfo;
        }
        if (args != null && args.overlayConfigs != null) {
            this.overlayConfigs = args.overlayConfigs;
        }
        if (args != null && args.productMetadata != null) {
            this.productMetadata = args.productMetadata;
        }
        if (args != null && args.callerClientSessionId != null) {
            this.callerClientSessionId = args.callerClientSessionId;
        }
        if (args != null && args.threadIdInfo != null) {
            this.threadIdInfo = args.threadIdInfo;
        }
        if (args != null && args.linkUrl != null) {
            this.linkUrl = args.linkUrl;
        }
    }
    public write(output: thrift.TProtocol): void {
        output.writeStructBegin("RingRequest");
        if (this.caller != null) {
            output.writeFieldBegin("caller", thrift.Thrift.Type.STRING, 1);
            output.writeString(this.caller);
            output.writeFieldEnd();
        }
        if (this.otherParticipants != null) {
            output.writeFieldBegin("otherParticipants", thrift.Thrift.Type.SET, 2);
            output.writeSetBegin(thrift.Thrift.Type.STRING, this.otherParticipants.size);
            this.otherParticipants.forEach((value_1: string): void => {
                output.writeString(value_1);
            });
            output.writeSetEnd();
            output.writeFieldEnd();
        }
        if (this.ringType != null) {
            output.writeFieldBegin("ringType", thrift.Thrift.Type.I32, 4);
            output.writeI32(this.ringType);
            output.writeFieldEnd();
        }
        if (this.offeredExperiments != null) {
            output.writeFieldBegin("offeredExperiments", thrift.Thrift.Type.STRING, 5);
            output.writeString(this.offeredExperiments);
            output.writeFieldEnd();
        }
        if (this.isScheduledCall != null) {
            output.writeFieldBegin("isScheduledCall", thrift.Thrift.Type.BOOL, 6);
            output.writeBool(this.isScheduledCall);
            output.writeFieldEnd();
        }
        if (this.appMessages != null) {
            output.writeFieldBegin("appMessages", thrift.Thrift.Type.LIST, 8);
            output.writeListBegin(thrift.Thrift.Type.STRUCT, this.appMessages.length);
            this.appMessages.forEach((value_2: DataMessage.DataMessage): void => {
                value_2.write(output);
            });
            output.writeListEnd();
            output.writeFieldEnd();
        }
        if (this.offer != null) {
            output.writeFieldBegin("offer", thrift.Thrift.Type.STRUCT, 10);
            this.offer.write(output);
            output.writeFieldEnd();
        }
        if (this.mediaStatusEx != null) {
            output.writeFieldBegin("mediaStatusEx", thrift.Thrift.Type.STRUCT, 11);
            this.mediaStatusEx.write(output);
            output.writeFieldEnd();
        }
        if (this.isPreconnectSupported != null) {
            output.writeFieldBegin("isPreconnectSupported", thrift.Thrift.Type.BOOL, 12);
            output.writeBool(this.isPreconnectSupported);
            output.writeFieldEnd();
        }
        if (this.sdpOriginLocalId != null) {
            output.writeFieldBegin("sdpOriginLocalId", thrift.Thrift.Type.STRING, 13);
            output.writeString(this.sdpOriginLocalId);
            output.writeFieldEnd();
        }
        if (this.unifiedOffer != null) {
            output.writeFieldBegin("unifiedOffer", thrift.Thrift.Type.STRUCT, 14);
            this.unifiedOffer.write(output);
            output.writeFieldEnd();
        }
        if (this.mediaPath != null) {
            output.writeFieldBegin("mediaPath", thrift.Thrift.Type.I32, 15);
            output.writeI32(this.mediaPath);
            output.writeFieldEnd();
        }
        if (this.e2eeEnforcement != null) {
            output.writeFieldBegin("e2eeEnforcement", thrift.Thrift.Type.STRUCT, 16);
            this.e2eeEnforcement.write(output);
            output.writeFieldEnd();
        }
        if (this.isLegacyCall != null) {
            output.writeFieldBegin("isLegacyCall", thrift.Thrift.Type.BOOL, 17);
            output.writeBool(this.isLegacyCall);
            output.writeFieldEnd();
        }
        if (this.isTransferCall != null) {
            output.writeFieldBegin("isTransferCall", thrift.Thrift.Type.BOOL, 18);
            output.writeBool(this.isTransferCall);
            output.writeFieldEnd();
        }
        if (this.relayInfo != null) {
            output.writeFieldBegin("relayInfo", thrift.Thrift.Type.STRUCT, 20);
            this.relayInfo.write(output);
            output.writeFieldEnd();
        }
        if (this.overlayConfigs != null) {
            output.writeFieldBegin("overlayConfigs", thrift.Thrift.Type.MAP, 21);
            output.writeMapBegin(thrift.Thrift.Type.I32, thrift.Thrift.Type.I32, this.overlayConfigs.size);
            this.overlayConfigs.forEach((value_3: number, key_1: number): void => {
                output.writeI32(key_1);
                output.writeI32(value_3);
            });
            output.writeMapEnd();
            output.writeFieldEnd();
        }
        if (this.productMetadata != null) {
            output.writeFieldBegin("productMetadata", thrift.Thrift.Type.STRUCT, 22);
            this.productMetadata.write(output);
            output.writeFieldEnd();
        }
        if (this.callerClientSessionId != null) {
            output.writeFieldBegin("callerClientSessionId", thrift.Thrift.Type.STRING, 23);
            output.writeString(this.callerClientSessionId);
            output.writeFieldEnd();
        }
        if (this.threadIdInfo != null) {
            output.writeFieldBegin("threadIdInfo", thrift.Thrift.Type.STRUCT, 24);
            this.threadIdInfo.write(output);
            output.writeFieldEnd();
        }
        if (this.linkUrl != null) {
            output.writeFieldBegin("linkUrl", thrift.Thrift.Type.STRING, 25);
            output.writeString(this.linkUrl);
            output.writeFieldEnd();
        }
        output.writeFieldStop();
        output.writeStructEnd();
        return;
    }
    public static read(input: thrift.TProtocol): RingRequest {
        input.readStructBegin();
        let _args: any = {};
        while (true) {
            const ret: thrift.TField = input.readFieldBegin();
            const fieldType: thrift.Thrift.Type = ret.ftype;
            const fieldId: number = ret.fid;
            if (fieldType === thrift.Thrift.Type.STOP) {
                break;
            }
            switch (fieldId) {
                case 1:
                    if (fieldType === thrift.Thrift.Type.STRING) {
                        const value_4: string = input.readString();
                        _args.caller = value_4;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 2:
                    if (fieldType === thrift.Thrift.Type.SET) {
                        const value_5: Set<string> = new Set<string>();
                        const metadata_1: thrift.TSet = input.readSetBegin();
                        const size_1: number = metadata_1.size;
                        for (let i_1: number = 0; i_1 < size_1; i_1++) {
                            const value_6: string = input.readString();
                            value_5.add(value_6);
                        }
                        input.readSetEnd();
                        _args.otherParticipants = value_5;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 4:
                    if (fieldType === thrift.Thrift.Type.I32) {
                        const value_7: number = input.readI32();
                        _args.ringType = value_7;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 5:
                    if (fieldType === thrift.Thrift.Type.STRING) {
                        const value_8: string = input.readString();
                        _args.offeredExperiments = value_8;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 6:
                    if (fieldType === thrift.Thrift.Type.BOOL) {
                        const value_9: boolean = input.readBool();
                        _args.isScheduledCall = value_9;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 8:
                    if (fieldType === thrift.Thrift.Type.LIST) {
                        const value_10: Array<DataMessage.DataMessage> = new Array<DataMessage.DataMessage>();
                        const metadata_2: thrift.TList = input.readListBegin();
                        const size_2: number = metadata_2.size;
                        for (let i_2: number = 0; i_2 < size_2; i_2++) {
                            const value_11: DataMessage.DataMessage = DataMessage.DataMessage.read(input);
                            value_10.push(value_11);
                        }
                        input.readListEnd();
                        _args.appMessages = value_10;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 10:
                    if (fieldType === thrift.Thrift.Type.STRUCT) {
                        const value_12: SessionDescription.SessionDescription = SessionDescription.SessionDescription.read(input);
                        _args.offer = value_12;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 11:
                    if (fieldType === thrift.Thrift.Type.STRUCT) {
                        const value_13: ClientMediaStatus.ClientMediaStatus = ClientMediaStatus.ClientMediaStatus.read(input);
                        _args.mediaStatusEx = value_13;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 12:
                    if (fieldType === thrift.Thrift.Type.BOOL) {
                        const value_14: boolean = input.readBool();
                        _args.isPreconnectSupported = value_14;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 13:
                    if (fieldType === thrift.Thrift.Type.STRING) {
                        const value_15: string = input.readString();
                        _args.sdpOriginLocalId = value_15;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 14:
                    if (fieldType === thrift.Thrift.Type.STRUCT) {
                        const value_16: SessionDescription.SessionDescription = SessionDescription.SessionDescription.read(input);
                        _args.unifiedOffer = value_16;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 15:
                    if (fieldType === thrift.Thrift.Type.I32) {
                        const value_17: number = input.readI32();
                        _args.mediaPath = value_17;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 16:
                    if (fieldType === thrift.Thrift.Type.STRUCT) {
                        const value_18: E2eeEnforcement.E2eeEnforcement = E2eeEnforcement.E2eeEnforcement.read(input);
                        _args.e2eeEnforcement = value_18;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 17:
                    if (fieldType === thrift.Thrift.Type.BOOL) {
                        const value_19: boolean = input.readBool();
                        _args.isLegacyCall = value_19;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 18:
                    if (fieldType === thrift.Thrift.Type.BOOL) {
                        const value_20: boolean = input.readBool();
                        _args.isTransferCall = value_20;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 20:
                    if (fieldType === thrift.Thrift.Type.STRUCT) {
                        const value_21: RelayInfo.RelayInfo = RelayInfo.RelayInfo.read(input);
                        _args.relayInfo = value_21;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 21:
                    if (fieldType === thrift.Thrift.Type.MAP) {
                        const value_22: Map<number, number> = new Map<number, number>();
                        const metadata_3: thrift.TMap = input.readMapBegin();
                        const size_3: number = metadata_3.size;
                        for (let i_3: number = 0; i_3 < size_3; i_3++) {
                            const key_2: number = input.readI32();
                            const value_23: number = input.readI32();
                            value_22.set(key_2, value_23);
                        }
                        input.readMapEnd();
                        _args.overlayConfigs = value_22;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 22:
                    if (fieldType === thrift.Thrift.Type.STRUCT) {
                        const value_24: ProductMetadata.ProductMetadata = ProductMetadata.ProductMetadata.read(input);
                        _args.productMetadata = value_24;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 23:
                    if (fieldType === thrift.Thrift.Type.STRING) {
                        const value_25: string = input.readString();
                        _args.callerClientSessionId = value_25;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 24:
                    if (fieldType === thrift.Thrift.Type.STRUCT) {
                        const value_26: ThreadIdInfo.ThreadIdInfo = ThreadIdInfo.ThreadIdInfo.read(input);
                        _args.threadIdInfo = value_26;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 25:
                    if (fieldType === thrift.Thrift.Type.STRING) {
                        const value_27: string = input.readString();
                        _args.linkUrl = value_27;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                default: {
                    input.skip(fieldType);
                }
            }
            input.readFieldEnd();
        }
        input.readStructEnd();
        return new RingRequest(_args);
    }
}
