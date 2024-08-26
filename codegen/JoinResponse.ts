/* tslint:disable */
/* eslint-disable */
/*
 * Autogenerated by @creditkarma/thrift-typescript v3.7.6
 * DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
*/
import Int64 = require("node-int64");
import * as thrift from "thrift";
import * as SessionDescription from "./SessionDescription";
import * as ClientMediaStatus from "./ClientMediaStatus";
import * as DataMessage from "./DataMessage";
import * as State from "./State";
import * as GroupOfUsers from "./GroupOfUsers";
import * as RelayInfo from "./RelayInfo";
export interface IJoinResponseArgs {
    answer?: SessionDescription.SessionDescription;
    mediaStatus?: Map<string, boolean>;
    initiator?: string;
    negotiatedExperiments?: string;
    mediaStatusEx?: ClientMediaStatus.ClientMediaStatus;
    appMessages?: Array<DataMessage.DataMessage>;
    stateStore?: Map<string, State.State>;
    sdpOriginLocalId?: string;
    isPendingApproval?: boolean;
    renegotiationOffer?: SessionDescription.SessionDescription;
    multipleVideoStreamsAllowed?: boolean;
    mediaPath?: number;
    groupsOfUsers?: Array<GroupOfUsers.GroupOfUsers>;
    screenShareStreamAllowed?: boolean;
    relayInfo?: RelayInfo.RelayInfo;
    selfSctpNodeId?: number | Int64;
    stateStoreV2?: Map<number, State.State>;
    allowedCustomVideoContentTypes?: Set<number>;
}
export class JoinResponse {
    public answer?: SessionDescription.SessionDescription;
    public mediaStatus?: Map<string, boolean>;
    public initiator?: string;
    public negotiatedExperiments?: string;
    public mediaStatusEx?: ClientMediaStatus.ClientMediaStatus;
    public appMessages?: Array<DataMessage.DataMessage>;
    public stateStore?: Map<string, State.State>;
    public sdpOriginLocalId?: string;
    public isPendingApproval?: boolean;
    public renegotiationOffer?: SessionDescription.SessionDescription;
    public multipleVideoStreamsAllowed?: boolean;
    public mediaPath?: number;
    public groupsOfUsers?: Array<GroupOfUsers.GroupOfUsers>;
    public screenShareStreamAllowed?: boolean;
    public relayInfo?: RelayInfo.RelayInfo;
    public selfSctpNodeId?: Int64;
    public stateStoreV2?: Map<number, State.State>;
    public allowedCustomVideoContentTypes?: Set<number>;
    constructor(args?: IJoinResponseArgs) {
        if (args != null && args.answer != null) {
            this.answer = args.answer;
        }
        if (args != null && args.mediaStatus != null) {
            this.mediaStatus = args.mediaStatus;
        }
        if (args != null && args.initiator != null) {
            this.initiator = args.initiator;
        }
        if (args != null && args.negotiatedExperiments != null) {
            this.negotiatedExperiments = args.negotiatedExperiments;
        }
        if (args != null && args.mediaStatusEx != null) {
            this.mediaStatusEx = args.mediaStatusEx;
        }
        if (args != null && args.appMessages != null) {
            this.appMessages = args.appMessages;
        }
        if (args != null && args.stateStore != null) {
            this.stateStore = args.stateStore;
        }
        if (args != null && args.sdpOriginLocalId != null) {
            this.sdpOriginLocalId = args.sdpOriginLocalId;
        }
        if (args != null && args.isPendingApproval != null) {
            this.isPendingApproval = args.isPendingApproval;
        }
        if (args != null && args.renegotiationOffer != null) {
            this.renegotiationOffer = args.renegotiationOffer;
        }
        if (args != null && args.multipleVideoStreamsAllowed != null) {
            this.multipleVideoStreamsAllowed = args.multipleVideoStreamsAllowed;
        }
        if (args != null && args.mediaPath != null) {
            this.mediaPath = args.mediaPath;
        }
        if (args != null && args.groupsOfUsers != null) {
            this.groupsOfUsers = args.groupsOfUsers;
        }
        if (args != null && args.screenShareStreamAllowed != null) {
            this.screenShareStreamAllowed = args.screenShareStreamAllowed;
        }
        if (args != null && args.relayInfo != null) {
            this.relayInfo = args.relayInfo;
        }
        if (args != null && args.selfSctpNodeId != null) {
            if (typeof args.selfSctpNodeId === "number") {
                this.selfSctpNodeId = new Int64(args.selfSctpNodeId);
            }
            else {
                this.selfSctpNodeId = args.selfSctpNodeId;
            }
        }
        if (args != null && args.stateStoreV2 != null) {
            this.stateStoreV2 = args.stateStoreV2;
        }
        if (args != null && args.allowedCustomVideoContentTypes != null) {
            this.allowedCustomVideoContentTypes = args.allowedCustomVideoContentTypes;
        }
    }
    public write(output: thrift.TProtocol): void {
        output.writeStructBegin("JoinResponse");
        if (this.answer != null) {
            output.writeFieldBegin("answer", thrift.Thrift.Type.STRUCT, 1);
            this.answer.write(output);
            output.writeFieldEnd();
        }
        if (this.mediaStatus != null) {
            output.writeFieldBegin("mediaStatus", thrift.Thrift.Type.MAP, 2);
            output.writeMapBegin(thrift.Thrift.Type.STRING, thrift.Thrift.Type.BOOL, this.mediaStatus.size);
            this.mediaStatus.forEach((value_1: boolean, key_1: string): void => {
                output.writeString(key_1);
                output.writeBool(value_1);
            });
            output.writeMapEnd();
            output.writeFieldEnd();
        }
        if (this.initiator != null) {
            output.writeFieldBegin("initiator", thrift.Thrift.Type.STRING, 3);
            output.writeString(this.initiator);
            output.writeFieldEnd();
        }
        if (this.negotiatedExperiments != null) {
            output.writeFieldBegin("negotiatedExperiments", thrift.Thrift.Type.STRING, 4);
            output.writeString(this.negotiatedExperiments);
            output.writeFieldEnd();
        }
        if (this.mediaStatusEx != null) {
            output.writeFieldBegin("mediaStatusEx", thrift.Thrift.Type.STRUCT, 6);
            this.mediaStatusEx.write(output);
            output.writeFieldEnd();
        }
        if (this.appMessages != null) {
            output.writeFieldBegin("appMessages", thrift.Thrift.Type.LIST, 7);
            output.writeListBegin(thrift.Thrift.Type.STRUCT, this.appMessages.length);
            this.appMessages.forEach((value_2: DataMessage.DataMessage): void => {
                value_2.write(output);
            });
            output.writeListEnd();
            output.writeFieldEnd();
        }
        if (this.stateStore != null) {
            output.writeFieldBegin("stateStore", thrift.Thrift.Type.MAP, 8);
            output.writeMapBegin(thrift.Thrift.Type.STRING, thrift.Thrift.Type.STRUCT, this.stateStore.size);
            this.stateStore.forEach((value_3: State.State, key_2: string): void => {
                output.writeString(key_2);
                value_3.write(output);
            });
            output.writeMapEnd();
            output.writeFieldEnd();
        }
        if (this.sdpOriginLocalId != null) {
            output.writeFieldBegin("sdpOriginLocalId", thrift.Thrift.Type.STRING, 9);
            output.writeString(this.sdpOriginLocalId);
            output.writeFieldEnd();
        }
        if (this.isPendingApproval != null) {
            output.writeFieldBegin("isPendingApproval", thrift.Thrift.Type.BOOL, 10);
            output.writeBool(this.isPendingApproval);
            output.writeFieldEnd();
        }
        if (this.renegotiationOffer != null) {
            output.writeFieldBegin("renegotiationOffer", thrift.Thrift.Type.STRUCT, 11);
            this.renegotiationOffer.write(output);
            output.writeFieldEnd();
        }
        if (this.multipleVideoStreamsAllowed != null) {
            output.writeFieldBegin("multipleVideoStreamsAllowed", thrift.Thrift.Type.BOOL, 12);
            output.writeBool(this.multipleVideoStreamsAllowed);
            output.writeFieldEnd();
        }
        if (this.mediaPath != null) {
            output.writeFieldBegin("mediaPath", thrift.Thrift.Type.I32, 13);
            output.writeI32(this.mediaPath);
            output.writeFieldEnd();
        }
        if (this.groupsOfUsers != null) {
            output.writeFieldBegin("groupsOfUsers", thrift.Thrift.Type.LIST, 14);
            output.writeListBegin(thrift.Thrift.Type.STRUCT, this.groupsOfUsers.length);
            this.groupsOfUsers.forEach((value_4: GroupOfUsers.GroupOfUsers): void => {
                value_4.write(output);
            });
            output.writeListEnd();
            output.writeFieldEnd();
        }
        if (this.screenShareStreamAllowed != null) {
            output.writeFieldBegin("screenShareStreamAllowed", thrift.Thrift.Type.BOOL, 15);
            output.writeBool(this.screenShareStreamAllowed);
            output.writeFieldEnd();
        }
        if (this.relayInfo != null) {
            output.writeFieldBegin("relayInfo", thrift.Thrift.Type.STRUCT, 16);
            this.relayInfo.write(output);
            output.writeFieldEnd();
        }
        if (this.selfSctpNodeId != null) {
            output.writeFieldBegin("selfSctpNodeId", thrift.Thrift.Type.I64, 17);
            output.writeI64(this.selfSctpNodeId);
            output.writeFieldEnd();
        }
        if (this.stateStoreV2 != null) {
            output.writeFieldBegin("stateStoreV2", thrift.Thrift.Type.MAP, 18);
            output.writeMapBegin(thrift.Thrift.Type.I32, thrift.Thrift.Type.STRUCT, this.stateStoreV2.size);
            this.stateStoreV2.forEach((value_5: State.State, key_3: number): void => {
                output.writeI32(key_3);
                value_5.write(output);
            });
            output.writeMapEnd();
            output.writeFieldEnd();
        }
        if (this.allowedCustomVideoContentTypes != null) {
            output.writeFieldBegin("allowedCustomVideoContentTypes", thrift.Thrift.Type.SET, 19);
            output.writeSetBegin(thrift.Thrift.Type.I32, this.allowedCustomVideoContentTypes.size);
            this.allowedCustomVideoContentTypes.forEach((value_6: number): void => {
                output.writeI32(value_6);
            });
            output.writeSetEnd();
            output.writeFieldEnd();
        }
        output.writeFieldStop();
        output.writeStructEnd();
        return;
    }
    public static read(input: thrift.TProtocol): JoinResponse {
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
                    if (fieldType === thrift.Thrift.Type.STRUCT) {
                        const value_7: SessionDescription.SessionDescription = SessionDescription.SessionDescription.read(input);
                        _args.answer = value_7;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 2:
                    if (fieldType === thrift.Thrift.Type.MAP) {
                        const value_8: Map<string, boolean> = new Map<string, boolean>();
                        const metadata_1: thrift.TMap = input.readMapBegin();
                        const size_1: number = metadata_1.size;
                        for (let i_1: number = 0; i_1 < size_1; i_1++) {
                            const key_4: string = input.readString();
                            const value_9: boolean = input.readBool();
                            value_8.set(key_4, value_9);
                        }
                        input.readMapEnd();
                        _args.mediaStatus = value_8;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 3:
                    if (fieldType === thrift.Thrift.Type.STRING) {
                        const value_10: string = input.readString();
                        _args.initiator = value_10;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 4:
                    if (fieldType === thrift.Thrift.Type.STRING) {
                        const value_11: string = input.readString();
                        _args.negotiatedExperiments = value_11;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 6:
                    if (fieldType === thrift.Thrift.Type.STRUCT) {
                        const value_12: ClientMediaStatus.ClientMediaStatus = ClientMediaStatus.ClientMediaStatus.read(input);
                        _args.mediaStatusEx = value_12;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 7:
                    if (fieldType === thrift.Thrift.Type.LIST) {
                        const value_13: Array<DataMessage.DataMessage> = new Array<DataMessage.DataMessage>();
                        const metadata_2: thrift.TList = input.readListBegin();
                        const size_2: number = metadata_2.size;
                        for (let i_2: number = 0; i_2 < size_2; i_2++) {
                            const value_14: DataMessage.DataMessage = DataMessage.DataMessage.read(input);
                            value_13.push(value_14);
                        }
                        input.readListEnd();
                        _args.appMessages = value_13;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 8:
                    if (fieldType === thrift.Thrift.Type.MAP) {
                        const value_15: Map<string, State.State> = new Map<string, State.State>();
                        const metadata_3: thrift.TMap = input.readMapBegin();
                        const size_3: number = metadata_3.size;
                        for (let i_3: number = 0; i_3 < size_3; i_3++) {
                            const key_5: string = input.readString();
                            const value_16: State.State = State.State.read(input);
                            value_15.set(key_5, value_16);
                        }
                        input.readMapEnd();
                        _args.stateStore = value_15;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 9:
                    if (fieldType === thrift.Thrift.Type.STRING) {
                        const value_17: string = input.readString();
                        _args.sdpOriginLocalId = value_17;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 10:
                    if (fieldType === thrift.Thrift.Type.BOOL) {
                        const value_18: boolean = input.readBool();
                        _args.isPendingApproval = value_18;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 11:
                    if (fieldType === thrift.Thrift.Type.STRUCT) {
                        const value_19: SessionDescription.SessionDescription = SessionDescription.SessionDescription.read(input);
                        _args.renegotiationOffer = value_19;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 12:
                    if (fieldType === thrift.Thrift.Type.BOOL) {
                        const value_20: boolean = input.readBool();
                        _args.multipleVideoStreamsAllowed = value_20;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 13:
                    if (fieldType === thrift.Thrift.Type.I32) {
                        const value_21: number = input.readI32();
                        _args.mediaPath = value_21;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 14:
                    if (fieldType === thrift.Thrift.Type.LIST) {
                        const value_22: Array<GroupOfUsers.GroupOfUsers> = new Array<GroupOfUsers.GroupOfUsers>();
                        const metadata_4: thrift.TList = input.readListBegin();
                        const size_4: number = metadata_4.size;
                        for (let i_4: number = 0; i_4 < size_4; i_4++) {
                            const value_23: GroupOfUsers.GroupOfUsers = GroupOfUsers.GroupOfUsers.read(input);
                            value_22.push(value_23);
                        }
                        input.readListEnd();
                        _args.groupsOfUsers = value_22;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 15:
                    if (fieldType === thrift.Thrift.Type.BOOL) {
                        const value_24: boolean = input.readBool();
                        _args.screenShareStreamAllowed = value_24;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 16:
                    if (fieldType === thrift.Thrift.Type.STRUCT) {
                        const value_25: RelayInfo.RelayInfo = RelayInfo.RelayInfo.read(input);
                        _args.relayInfo = value_25;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 17:
                    if (fieldType === thrift.Thrift.Type.I64) {
                        const value_26: Int64 = input.readI64();
                        _args.selfSctpNodeId = value_26;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 18:
                    if (fieldType === thrift.Thrift.Type.MAP) {
                        const value_27: Map<number, State.State> = new Map<number, State.State>();
                        const metadata_5: thrift.TMap = input.readMapBegin();
                        const size_5: number = metadata_5.size;
                        for (let i_5: number = 0; i_5 < size_5; i_5++) {
                            const key_6: number = input.readI32();
                            const value_28: State.State = State.State.read(input);
                            value_27.set(key_6, value_28);
                        }
                        input.readMapEnd();
                        _args.stateStoreV2 = value_27;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 19:
                    if (fieldType === thrift.Thrift.Type.SET) {
                        const value_29: Set<number> = new Set<number>();
                        const metadata_6: thrift.TSet = input.readSetBegin();
                        const size_6: number = metadata_6.size;
                        for (let i_6: number = 0; i_6 < size_6; i_6++) {
                            const value_30: number = input.readI32();
                            value_29.add(value_30);
                        }
                        input.readSetEnd();
                        _args.allowedCustomVideoContentTypes = value_29;
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
        return new JoinResponse(_args);
    }
}
