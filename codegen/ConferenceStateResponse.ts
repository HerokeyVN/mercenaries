/* tslint:disable */
/* eslint-disable */
/*
 * Autogenerated by @creditkarma/thrift-typescript v3.7.6
 * DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
*/
import Int64 = require("node-int64");
import * as thrift from "thrift";
export interface IConferenceStateResponseArgs {
    currentVersion?: number | Int64;
}
export class ConferenceStateResponse {
    public currentVersion?: Int64;
    constructor(args?: IConferenceStateResponseArgs) {
        if (args != null && args.currentVersion != null) {
            if (typeof args.currentVersion === "number") {
                this.currentVersion = new Int64(args.currentVersion);
            }
            else {
                this.currentVersion = args.currentVersion;
            }
        }
    }
    public write(output: thrift.TProtocol): void {
        output.writeStructBegin("ConferenceStateResponse");
        if (this.currentVersion != null) {
            output.writeFieldBegin("currentVersion", thrift.Thrift.Type.I64, 1);
            output.writeI64(this.currentVersion);
            output.writeFieldEnd();
        }
        output.writeFieldStop();
        output.writeStructEnd();
        return;
    }
    public static read(input: thrift.TProtocol): ConferenceStateResponse {
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
                        _args.currentVersion = value_1;
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
        return new ConferenceStateResponse(_args);
    }
}
