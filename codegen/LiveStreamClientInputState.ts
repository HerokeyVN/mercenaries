/* tslint:disable */
/* eslint-disable */
/*
 * Autogenerated by @creditkarma/thrift-typescript v3.7.6
 * DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
*/
import Int64 = require("node-int64");
import * as thrift from "thrift";
import * as ClientLayoutInfo from "./ClientLayoutInfo";
export interface ILiveStreamClientInputStateArgs {
    negotiationToken?: string;
    broadcastId?: number | Int64;
    layoutInfo?: ClientLayoutInfo.ClientLayoutInfo;
}
export class LiveStreamClientInputState {
    public negotiationToken?: string;
    public broadcastId?: Int64;
    public layoutInfo?: ClientLayoutInfo.ClientLayoutInfo;
    constructor(args?: ILiveStreamClientInputStateArgs) {
        if (args != null && args.negotiationToken != null) {
            this.negotiationToken = args.negotiationToken;
        }
        if (args != null && args.broadcastId != null) {
            if (typeof args.broadcastId === "number") {
                this.broadcastId = new Int64(args.broadcastId);
            }
            else {
                this.broadcastId = args.broadcastId;
            }
        }
        if (args != null && args.layoutInfo != null) {
            this.layoutInfo = args.layoutInfo;
        }
    }
    public write(output: thrift.TProtocol): void {
        output.writeStructBegin("LiveStreamClientInputState");
        if (this.negotiationToken != null) {
            output.writeFieldBegin("negotiationToken", thrift.Thrift.Type.STRING, 1);
            output.writeString(this.negotiationToken);
            output.writeFieldEnd();
        }
        if (this.broadcastId != null) {
            output.writeFieldBegin("broadcastId", thrift.Thrift.Type.I64, 2);
            output.writeI64(this.broadcastId);
            output.writeFieldEnd();
        }
        if (this.layoutInfo != null) {
            output.writeFieldBegin("layoutInfo", thrift.Thrift.Type.STRUCT, 3);
            this.layoutInfo.write(output);
            output.writeFieldEnd();
        }
        output.writeFieldStop();
        output.writeStructEnd();
        return;
    }
    public static read(input: thrift.TProtocol): LiveStreamClientInputState {
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
                        const value_1: string = input.readString();
                        _args.negotiationToken = value_1;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 2:
                    if (fieldType === thrift.Thrift.Type.I64) {
                        const value_2: Int64 = input.readI64();
                        _args.broadcastId = value_2;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 3:
                    if (fieldType === thrift.Thrift.Type.STRUCT) {
                        const value_3: ClientLayoutInfo.ClientLayoutInfo = ClientLayoutInfo.ClientLayoutInfo.read(input);
                        _args.layoutInfo = value_3;
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
        return new LiveStreamClientInputState(_args);
    }
}
