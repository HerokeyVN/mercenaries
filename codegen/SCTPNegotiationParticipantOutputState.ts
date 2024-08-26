/* tslint:disable */
/* eslint-disable */
/*
 * Autogenerated by @creditkarma/thrift-typescript v3.7.6
 * DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
*/
import * as thrift from "thrift";
import * as SctpSessionDescription from "./SctpSessionDescription";
export interface ISCTPNegotiationParticipantOutputStateArgs {
    sdp?: SctpSessionDescription.SctpSessionDescription;
    msgType?: number;
    mediaPath?: number;
    userIdToNodeIdMap?: Map<string, number | Int64>;
}
export class SCTPNegotiationParticipantOutputState {
    public sdp?: SctpSessionDescription.SctpSessionDescription;
    public msgType?: number;
    public mediaPath?: number;
    public userIdToNodeIdMap?: Map<string, Int64>;
    constructor(args?: ISCTPNegotiationParticipantOutputStateArgs) {
        if (args != null && args.sdp != null) {
            this.sdp = args.sdp;
        }
        if (args != null && args.msgType != null) {
            this.msgType = args.msgType;
        }
        if (args != null && args.mediaPath != null) {
            this.mediaPath = args.mediaPath;
        }
        if (args != null && args.userIdToNodeIdMap != null) {
            this.userIdToNodeIdMap = args.userIdToNodeIdMap;
        }
    }
    public write(output: thrift.TProtocol): void {
        output.writeStructBegin("SCTPNegotiationParticipantOutputState");
        if (this.sdp != null) {
            output.writeFieldBegin("sdp", thrift.Thrift.Type.STRUCT, 1);
            this.sdp.write(output);
            output.writeFieldEnd();
        }
        if (this.msgType != null) {
            output.writeFieldBegin("msgType", thrift.Thrift.Type.I32, 2);
            output.writeI32(this.msgType);
            output.writeFieldEnd();
        }
        if (this.mediaPath != null) {
            output.writeFieldBegin("mediaPath", thrift.Thrift.Type.I32, 3);
            output.writeI32(this.mediaPath);
            output.writeFieldEnd();
        }
        if (this.userIdToNodeIdMap != null) {
            output.writeFieldBegin("userIdToNodeIdMap", thrift.Thrift.Type.MAP, 4);
            output.writeMapBegin(thrift.Thrift.Type.STRING, thrift.Thrift.Type.I64, this.userIdToNodeIdMap.size);
            this.userIdToNodeIdMap.forEach((value_1: Int64, key_1: string): void => {
                output.writeString(key_1);
                output.writeI64(value_1);
            });
            output.writeMapEnd();
            output.writeFieldEnd();
        }
        output.writeFieldStop();
        output.writeStructEnd();
        return;
    }
    public static read(input: thrift.TProtocol): SCTPNegotiationParticipantOutputState {
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
                        const value_2: SctpSessionDescription.SctpSessionDescription = SctpSessionDescription.SctpSessionDescription.read(input);
                        _args.sdp = value_2;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 2:
                    if (fieldType === thrift.Thrift.Type.I32) {
                        const value_3: number = input.readI32();
                        _args.msgType = value_3;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 3:
                    if (fieldType === thrift.Thrift.Type.I32) {
                        const value_4: number = input.readI32();
                        _args.mediaPath = value_4;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 4:
                    if (fieldType === thrift.Thrift.Type.MAP) {
                        const value_5: Map<string, Int64> = new Map<string, Int64>();
                        const metadata_1: thrift.TMap = input.readMapBegin();
                        const size_1: number = metadata_1.size;
                        for (let i_1: number = 0; i_1 < size_1; i_1++) {
                            const key_2: string = input.readString();
                            const value_6: Int64 = input.readI64();
                            value_5.set(key_2, value_6);
                        }
                        input.readMapEnd();
                        _args.userIdToNodeIdMap = value_5;
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
        return new SCTPNegotiationParticipantOutputState(_args);
    }
}
