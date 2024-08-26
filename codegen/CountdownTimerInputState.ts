/* tslint:disable */
/* eslint-disable */
/*
 * Autogenerated by @creditkarma/thrift-typescript v3.7.6
 * DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
*/
import Int64 = require("node-int64");
import * as thrift from "thrift";
import * as InitiatorInfo from "./InitiatorInfo";
export interface ICountdownTimerInputStateArgs {
    uuid?: string;
    total_duration?: number | Int64;
    initiator?: InitiatorInfo.InitiatorInfo;
    action?: number;
    action_timestamp?: number | Int64;
    remaining_duration?: number | Int64;
}
export class CountdownTimerInputState {
    public uuid?: string;
    public total_duration?: Int64;
    public initiator?: InitiatorInfo.InitiatorInfo;
    public action?: number;
    public action_timestamp?: Int64;
    public remaining_duration?: Int64;
    constructor(args?: ICountdownTimerInputStateArgs) {
        if (args != null && args.uuid != null) {
            this.uuid = args.uuid;
        }
        if (args != null && args.total_duration != null) {
            if (typeof args.total_duration === "number") {
                this.total_duration = new Int64(args.total_duration);
            }
            else {
                this.total_duration = args.total_duration;
            }
        }
        if (args != null && args.initiator != null) {
            this.initiator = args.initiator;
        }
        if (args != null && args.action != null) {
            this.action = args.action;
        }
        if (args != null && args.action_timestamp != null) {
            if (typeof args.action_timestamp === "number") {
                this.action_timestamp = new Int64(args.action_timestamp);
            }
            else {
                this.action_timestamp = args.action_timestamp;
            }
        }
        if (args != null && args.remaining_duration != null) {
            if (typeof args.remaining_duration === "number") {
                this.remaining_duration = new Int64(args.remaining_duration);
            }
            else {
                this.remaining_duration = args.remaining_duration;
            }
        }
    }
    public write(output: thrift.TProtocol): void {
        output.writeStructBegin("CountdownTimerInputState");
        if (this.uuid != null) {
            output.writeFieldBegin("uuid", thrift.Thrift.Type.STRING, 1);
            output.writeString(this.uuid);
            output.writeFieldEnd();
        }
        if (this.total_duration != null) {
            output.writeFieldBegin("total_duration", thrift.Thrift.Type.I64, 2);
            output.writeI64(this.total_duration);
            output.writeFieldEnd();
        }
        if (this.initiator != null) {
            output.writeFieldBegin("initiator", thrift.Thrift.Type.STRUCT, 3);
            this.initiator.write(output);
            output.writeFieldEnd();
        }
        if (this.action != null) {
            output.writeFieldBegin("action", thrift.Thrift.Type.I32, 4);
            output.writeI32(this.action);
            output.writeFieldEnd();
        }
        if (this.action_timestamp != null) {
            output.writeFieldBegin("action_timestamp", thrift.Thrift.Type.I64, 5);
            output.writeI64(this.action_timestamp);
            output.writeFieldEnd();
        }
        if (this.remaining_duration != null) {
            output.writeFieldBegin("remaining_duration", thrift.Thrift.Type.I64, 6);
            output.writeI64(this.remaining_duration);
            output.writeFieldEnd();
        }
        output.writeFieldStop();
        output.writeStructEnd();
        return;
    }
    public static read(input: thrift.TProtocol): CountdownTimerInputState {
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
                        _args.uuid = value_1;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 2:
                    if (fieldType === thrift.Thrift.Type.I64) {
                        const value_2: Int64 = input.readI64();
                        _args.total_duration = value_2;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 3:
                    if (fieldType === thrift.Thrift.Type.STRUCT) {
                        const value_3: InitiatorInfo.InitiatorInfo = InitiatorInfo.InitiatorInfo.read(input);
                        _args.initiator = value_3;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 4:
                    if (fieldType === thrift.Thrift.Type.I32) {
                        const value_4: number = input.readI32();
                        _args.action = value_4;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 5:
                    if (fieldType === thrift.Thrift.Type.I64) {
                        const value_5: Int64 = input.readI64();
                        _args.action_timestamp = value_5;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 6:
                    if (fieldType === thrift.Thrift.Type.I64) {
                        const value_6: Int64 = input.readI64();
                        _args.remaining_duration = value_6;
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
        return new CountdownTimerInputState(_args);
    }
}
