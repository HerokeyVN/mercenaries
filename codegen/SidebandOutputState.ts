/* tslint:disable */
/* eslint-disable */
/*
 * Autogenerated by @creditkarma/thrift-typescript v3.7.6
 * DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
*/
import * as thrift from "thrift";
import * as ActiveConversation from "./ActiveConversation";
import * as ActiveConversationWave from "./ActiveConversationWave";
import * as SidebandUserInfo from "./SidebandUserInfo";
export interface ISidebandOutputStateArgs {
    sideband_active_conversations?: Array<ActiveConversation.ActiveConversation>;
    waves?: Array<ActiveConversationWave.ActiveConversationWave>;
    users_info?: Array<SidebandUserInfo.SidebandUserInfo>;
}
export class SidebandOutputState {
    public sideband_active_conversations?: Array<ActiveConversation.ActiveConversation>;
    public waves?: Array<ActiveConversationWave.ActiveConversationWave>;
    public users_info?: Array<SidebandUserInfo.SidebandUserInfo>;
    constructor(args?: ISidebandOutputStateArgs) {
        if (args != null && args.sideband_active_conversations != null) {
            this.sideband_active_conversations = args.sideband_active_conversations;
        }
        if (args != null && args.waves != null) {
            this.waves = args.waves;
        }
        if (args != null && args.users_info != null) {
            this.users_info = args.users_info;
        }
    }
    public write(output: thrift.TProtocol): void {
        output.writeStructBegin("SidebandOutputState");
        if (this.sideband_active_conversations != null) {
            output.writeFieldBegin("sideband_active_conversations", thrift.Thrift.Type.LIST, 1);
            output.writeListBegin(thrift.Thrift.Type.STRUCT, this.sideband_active_conversations.length);
            this.sideband_active_conversations.forEach((value_1: ActiveConversation.ActiveConversation): void => {
                value_1.write(output);
            });
            output.writeListEnd();
            output.writeFieldEnd();
        }
        if (this.waves != null) {
            output.writeFieldBegin("waves", thrift.Thrift.Type.LIST, 2);
            output.writeListBegin(thrift.Thrift.Type.STRUCT, this.waves.length);
            this.waves.forEach((value_2: ActiveConversationWave.ActiveConversationWave): void => {
                value_2.write(output);
            });
            output.writeListEnd();
            output.writeFieldEnd();
        }
        if (this.users_info != null) {
            output.writeFieldBegin("users_info", thrift.Thrift.Type.LIST, 3);
            output.writeListBegin(thrift.Thrift.Type.STRUCT, this.users_info.length);
            this.users_info.forEach((value_3: SidebandUserInfo.SidebandUserInfo): void => {
                value_3.write(output);
            });
            output.writeListEnd();
            output.writeFieldEnd();
        }
        output.writeFieldStop();
        output.writeStructEnd();
        return;
    }
    public static read(input: thrift.TProtocol): SidebandOutputState {
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
                    if (fieldType === thrift.Thrift.Type.LIST) {
                        const value_4: Array<ActiveConversation.ActiveConversation> = new Array<ActiveConversation.ActiveConversation>();
                        const metadata_1: thrift.TList = input.readListBegin();
                        const size_1: number = metadata_1.size;
                        for (let i_1: number = 0; i_1 < size_1; i_1++) {
                            const value_5: ActiveConversation.ActiveConversation = ActiveConversation.ActiveConversation.read(input);
                            value_4.push(value_5);
                        }
                        input.readListEnd();
                        _args.sideband_active_conversations = value_4;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 2:
                    if (fieldType === thrift.Thrift.Type.LIST) {
                        const value_6: Array<ActiveConversationWave.ActiveConversationWave> = new Array<ActiveConversationWave.ActiveConversationWave>();
                        const metadata_2: thrift.TList = input.readListBegin();
                        const size_2: number = metadata_2.size;
                        for (let i_2: number = 0; i_2 < size_2; i_2++) {
                            const value_7: ActiveConversationWave.ActiveConversationWave = ActiveConversationWave.ActiveConversationWave.read(input);
                            value_6.push(value_7);
                        }
                        input.readListEnd();
                        _args.waves = value_6;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 3:
                    if (fieldType === thrift.Thrift.Type.LIST) {
                        const value_8: Array<SidebandUserInfo.SidebandUserInfo> = new Array<SidebandUserInfo.SidebandUserInfo>();
                        const metadata_3: thrift.TList = input.readListBegin();
                        const size_3: number = metadata_3.size;
                        for (let i_3: number = 0; i_3 < size_3; i_3++) {
                            const value_9: SidebandUserInfo.SidebandUserInfo = SidebandUserInfo.SidebandUserInfo.read(input);
                            value_8.push(value_9);
                        }
                        input.readListEnd();
                        _args.users_info = value_8;
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
        return new SidebandOutputState(_args);
    }
}
