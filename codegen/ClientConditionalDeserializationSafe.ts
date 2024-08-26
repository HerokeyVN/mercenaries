/* tslint:disable */
/* eslint-disable */
/*
 * Autogenerated by @creditkarma/thrift-typescript v3.7.6
 * DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
*/
import * as thrift from "thrift";
export interface IClientConditionalDeserializationSafeArgs {
    type?: number;
    ruleOperator?: number;
    value?: number;
}
export class ClientConditionalDeserializationSafe {
    public type?: number;
    public ruleOperator?: number;
    public value?: number;
    constructor(args?: IClientConditionalDeserializationSafeArgs) {
        if (args != null && args.type != null) {
            this.type = args.type;
        }
        if (args != null && args.ruleOperator != null) {
            this.ruleOperator = args.ruleOperator;
        }
        if (args != null && args.value != null) {
            this.value = args.value;
        }
    }
    public write(output: thrift.TProtocol): void {
        output.writeStructBegin("ClientConditionalDeserializationSafe");
        if (this.type != null) {
            output.writeFieldBegin("type", thrift.Thrift.Type.I32, 1);
            output.writeI32(this.type);
            output.writeFieldEnd();
        }
        if (this.ruleOperator != null) {
            output.writeFieldBegin("ruleOperator", thrift.Thrift.Type.I32, 2);
            output.writeI32(this.ruleOperator);
            output.writeFieldEnd();
        }
        if (this.value != null) {
            output.writeFieldBegin("value", thrift.Thrift.Type.I32, 3);
            output.writeI32(this.value);
            output.writeFieldEnd();
        }
        output.writeFieldStop();
        output.writeStructEnd();
        return;
    }
    public static read(input: thrift.TProtocol): ClientConditionalDeserializationSafe {
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
                        _args.type = value_1;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 2:
                    if (fieldType === thrift.Thrift.Type.I32) {
                        const value_2: number = input.readI32();
                        _args.ruleOperator = value_2;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 3:
                    if (fieldType === thrift.Thrift.Type.I32) {
                        const value_3: number = input.readI32();
                        _args.value = value_3;
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
        return new ClientConditionalDeserializationSafe(_args);
    }
}
