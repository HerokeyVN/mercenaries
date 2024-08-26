/* tslint:disable */
/* eslint-disable */
/*
 * Autogenerated by @creditkarma/thrift-typescript v3.7.6
 * DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
*/
import * as thrift from "thrift";
export interface IHangUpPayloadArgs {
    reason?: number;
}
export class HangUpPayload {
    public reason?: number;
    constructor(args?: IHangUpPayloadArgs) {
        if (args != null && args.reason != null) {
            this.reason = args.reason;
        }
    }
    public write(output: thrift.TProtocol): void {
        output.writeStructBegin("HangUpPayload");
        if (this.reason != null) {
            output.writeFieldBegin("reason", thrift.Thrift.Type.I32, 1);
            output.writeI32(this.reason);
            output.writeFieldEnd();
        }
        output.writeFieldStop();
        output.writeStructEnd();
        return;
    }
    public static read(input: thrift.TProtocol): HangUpPayload {
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
                    if (fieldType === thrift.Thrift.Type.I32) {
                        const value_1: number = input.readI32();
                        _args.reason = value_1;
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
        return new HangUpPayload(_args);
    }
}
