/* tslint:disable */
/* eslint-disable */
/*
 * Autogenerated by @creditkarma/thrift-typescript v3.7.6
 * DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
*/
import * as thrift from "thrift";
export interface IE2eeEnforcementArgs {
    mode?: number;
    preventSfuMode?: boolean;
    infraMandatedExpStatus?: number;
}
export class E2eeEnforcement {
    public mode?: number;
    public preventSfuMode?: boolean;
    public infraMandatedExpStatus?: number;
    constructor(args?: IE2eeEnforcementArgs) {
        if (args != null && args.mode != null) {
            this.mode = args.mode;
        }
        if (args != null && args.preventSfuMode != null) {
            this.preventSfuMode = args.preventSfuMode;
        }
        if (args != null && args.infraMandatedExpStatus != null) {
            this.infraMandatedExpStatus = args.infraMandatedExpStatus;
        }
    }
    public write(output: thrift.TProtocol): void {
        output.writeStructBegin("E2eeEnforcement");
        if (this.mode != null) {
            output.writeFieldBegin("mode", thrift.Thrift.Type.I32, 1);
            output.writeI32(this.mode);
            output.writeFieldEnd();
        }
        if (this.preventSfuMode != null) {
            output.writeFieldBegin("preventSfuMode", thrift.Thrift.Type.BOOL, 2);
            output.writeBool(this.preventSfuMode);
            output.writeFieldEnd();
        }
        if (this.infraMandatedExpStatus != null) {
            output.writeFieldBegin("infraMandatedExpStatus", thrift.Thrift.Type.I32, 3);
            output.writeI32(this.infraMandatedExpStatus);
            output.writeFieldEnd();
        }
        output.writeFieldStop();
        output.writeStructEnd();
        return;
    }
    public static read(input: thrift.TProtocol): E2eeEnforcement {
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
                        _args.mode = value_1;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 2:
                    if (fieldType === thrift.Thrift.Type.BOOL) {
                        const value_2: boolean = input.readBool();
                        _args.preventSfuMode = value_2;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 3:
                    if (fieldType === thrift.Thrift.Type.I32) {
                        const value_3: number = input.readI32();
                        _args.infraMandatedExpStatus = value_3;
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
        return new E2eeEnforcement(_args);
    }
}
