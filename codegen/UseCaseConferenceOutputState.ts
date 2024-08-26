/* tslint:disable */
/* eslint-disable */
/*
 * Autogenerated by @creditkarma/thrift-typescript v3.7.6
 * DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
*/
import Int64 = require("node-int64");
import * as thrift from "thrift";
export interface IUseCaseConferenceOutputStateArgs {
    enablerUserId?: string;
    capabilitySessionId?: string;
    dataChannelNodeId?: number | Int64;
}
export class UseCaseConferenceOutputState {
    public enablerUserId?: string;
    public capabilitySessionId?: string;
    public dataChannelNodeId?: Int64;
    constructor(args?: IUseCaseConferenceOutputStateArgs) {
        if (args != null && args.enablerUserId != null) {
            this.enablerUserId = args.enablerUserId;
        }
        if (args != null && args.capabilitySessionId != null) {
            this.capabilitySessionId = args.capabilitySessionId;
        }
        if (args != null && args.dataChannelNodeId != null) {
            if (typeof args.dataChannelNodeId === "number") {
                this.dataChannelNodeId = new Int64(args.dataChannelNodeId);
            }
            else {
                this.dataChannelNodeId = args.dataChannelNodeId;
            }
        }
    }
    public write(output: thrift.TProtocol): void {
        output.writeStructBegin("UseCaseConferenceOutputState");
        if (this.enablerUserId != null) {
            output.writeFieldBegin("enablerUserId", thrift.Thrift.Type.STRING, 1);
            output.writeString(this.enablerUserId);
            output.writeFieldEnd();
        }
        if (this.capabilitySessionId != null) {
            output.writeFieldBegin("capabilitySessionId", thrift.Thrift.Type.STRING, 2);
            output.writeString(this.capabilitySessionId);
            output.writeFieldEnd();
        }
        if (this.dataChannelNodeId != null) {
            output.writeFieldBegin("dataChannelNodeId", thrift.Thrift.Type.I64, 3);
            output.writeI64(this.dataChannelNodeId);
            output.writeFieldEnd();
        }
        output.writeFieldStop();
        output.writeStructEnd();
        return;
    }
    public static read(input: thrift.TProtocol): UseCaseConferenceOutputState {
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
                        _args.enablerUserId = value_1;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 2:
                    if (fieldType === thrift.Thrift.Type.STRING) {
                        const value_2: string = input.readString();
                        _args.capabilitySessionId = value_2;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 3:
                    if (fieldType === thrift.Thrift.Type.I64) {
                        const value_3: Int64 = input.readI64();
                        _args.dataChannelNodeId = value_3;
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
        return new UseCaseConferenceOutputState(_args);
    }
}
