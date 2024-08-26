/* tslint:disable */
/* eslint-disable */
/*
 * Autogenerated by @creditkarma/thrift-typescript v3.7.6
 * DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
*/
import * as thrift from "thrift";
export interface IClientEffectDeserializationSafeArgs {
    overlayConfigId?: number;
    value?: number;
}
export class ClientEffectDeserializationSafe {
    public overlayConfigId?: number;
    public value?: number;
    constructor(args?: IClientEffectDeserializationSafeArgs) {
        if (args != null && args.overlayConfigId != null) {
            this.overlayConfigId = args.overlayConfigId;
        }
        if (args != null && args.value != null) {
            this.value = args.value;
        }
    }
    public write(output: thrift.TProtocol): void {
        output.writeStructBegin("ClientEffectDeserializationSafe");
        if (this.overlayConfigId != null) {
            output.writeFieldBegin("overlayConfigId", thrift.Thrift.Type.I32, 1);
            output.writeI32(this.overlayConfigId);
            output.writeFieldEnd();
        }
        if (this.value != null) {
            output.writeFieldBegin("value", thrift.Thrift.Type.I32, 2);
            output.writeI32(this.value);
            output.writeFieldEnd();
        }
        output.writeFieldStop();
        output.writeStructEnd();
        return;
    }
    public static read(input: thrift.TProtocol): ClientEffectDeserializationSafe {
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
                        _args.overlayConfigId = value_1;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 2:
                    if (fieldType === thrift.Thrift.Type.I32) {
                        const value_2: number = input.readI32();
                        _args.value = value_2;
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
        return new ClientEffectDeserializationSafe(_args);
    }
}
