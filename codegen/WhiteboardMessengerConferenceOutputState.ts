/* tslint:disable */
/* eslint-disable */
/*
 * Autogenerated by @creditkarma/thrift-typescript v3.7.6
 * DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
*/
import * as thrift from "thrift";
export interface IWhiteboardMessengerConferenceOutputStateArgs {
    is_feature_enabled?: boolean;
    is_feature_enabled_on_desktop?: boolean;
}
export class WhiteboardMessengerConferenceOutputState {
    public is_feature_enabled?: boolean;
    public is_feature_enabled_on_desktop?: boolean;
    constructor(args?: IWhiteboardMessengerConferenceOutputStateArgs) {
        if (args != null && args.is_feature_enabled != null) {
            this.is_feature_enabled = args.is_feature_enabled;
        }
        if (args != null && args.is_feature_enabled_on_desktop != null) {
            this.is_feature_enabled_on_desktop = args.is_feature_enabled_on_desktop;
        }
    }
    public write(output: thrift.TProtocol): void {
        output.writeStructBegin("WhiteboardMessengerConferenceOutputState");
        if (this.is_feature_enabled != null) {
            output.writeFieldBegin("is_feature_enabled", thrift.Thrift.Type.BOOL, 1);
            output.writeBool(this.is_feature_enabled);
            output.writeFieldEnd();
        }
        if (this.is_feature_enabled_on_desktop != null) {
            output.writeFieldBegin("is_feature_enabled_on_desktop", thrift.Thrift.Type.BOOL, 2);
            output.writeBool(this.is_feature_enabled_on_desktop);
            output.writeFieldEnd();
        }
        output.writeFieldStop();
        output.writeStructEnd();
        return;
    }
    public static read(input: thrift.TProtocol): WhiteboardMessengerConferenceOutputState {
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
                    if (fieldType === thrift.Thrift.Type.BOOL) {
                        const value_1: boolean = input.readBool();
                        _args.is_feature_enabled = value_1;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 2:
                    if (fieldType === thrift.Thrift.Type.BOOL) {
                        const value_2: boolean = input.readBool();
                        _args.is_feature_enabled_on_desktop = value_2;
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
        return new WhiteboardMessengerConferenceOutputState(_args);
    }
}
