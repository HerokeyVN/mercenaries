/* tslint:disable */
/* eslint-disable */
/*
 * Autogenerated by @creditkarma/thrift-typescript v3.7.6
 * DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
*/
import Int64 = require("node-int64");
import * as thrift from "thrift";
export interface IOfferNackPayloadArgs {
    nackMessageId?: number | Int64;
    errorCode?: number;
}
export class OfferNackPayload {
    public nackMessageId?: Int64;
    public errorCode?: number;
    constructor(args?: IOfferNackPayloadArgs) {
        if (args != null && args.nackMessageId != null) {
            if (typeof args.nackMessageId === "number") {
                this.nackMessageId = new Int64(args.nackMessageId);
            }
            else {
                this.nackMessageId = args.nackMessageId;
            }
        }
        if (args != null && args.errorCode != null) {
            this.errorCode = args.errorCode;
        }
    }
    public write(output: thrift.TProtocol): void {
        output.writeStructBegin("OfferNackPayload");
        if (this.nackMessageId != null) {
            output.writeFieldBegin("nackMessageId", thrift.Thrift.Type.I64, 1);
            output.writeI64(this.nackMessageId);
            output.writeFieldEnd();
        }
        if (this.errorCode != null) {
            output.writeFieldBegin("errorCode", thrift.Thrift.Type.I32, 2);
            output.writeI32(this.errorCode);
            output.writeFieldEnd();
        }
        output.writeFieldStop();
        output.writeStructEnd();
        return;
    }
    public static read(input: thrift.TProtocol): OfferNackPayload {
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
                    if (fieldType === thrift.Thrift.Type.I64) {
                        const value_1: Int64 = input.readI64();
                        _args.nackMessageId = value_1;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 2:
                    if (fieldType === thrift.Thrift.Type.I32) {
                        const value_2: number = input.readI32();
                        _args.errorCode = value_2;
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
        return new OfferNackPayload(_args);
    }
}
