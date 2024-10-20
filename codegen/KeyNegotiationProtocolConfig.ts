/* tslint:disable */
/* eslint-disable */
/*
 * Autogenerated by @creditkarma/thrift-typescript v3.7.6
 * DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
*/
import * as thrift from "thrift";
import * as SessionKeyProtocolInfo from "./SessionKeyProtocolInfo";
export interface IKeyNegotiationProtocolConfigArgs {
    sessionKeyProtocolInfo?: SessionKeyProtocolInfo.SessionKeyProtocolInfo;
    populateParticipantHash?: boolean;
    enableParticipantVerification?: boolean;
}
export class KeyNegotiationProtocolConfig {
    public sessionKeyProtocolInfo?: SessionKeyProtocolInfo.SessionKeyProtocolInfo;
    public populateParticipantHash?: boolean;
    public enableParticipantVerification?: boolean;
    constructor(args?: IKeyNegotiationProtocolConfigArgs) {
        if (args != null && args.sessionKeyProtocolInfo != null) {
            this.sessionKeyProtocolInfo = args.sessionKeyProtocolInfo;
        }
        if (args != null && args.populateParticipantHash != null) {
            this.populateParticipantHash = args.populateParticipantHash;
        }
        if (args != null && args.enableParticipantVerification != null) {
            this.enableParticipantVerification = args.enableParticipantVerification;
        }
    }
    public write(output: thrift.TProtocol): void {
        output.writeStructBegin("KeyNegotiationProtocolConfig");
        if (this.sessionKeyProtocolInfo != null) {
            output.writeFieldBegin("sessionKeyProtocolInfo", thrift.Thrift.Type.STRUCT, 1);
            this.sessionKeyProtocolInfo.write(output);
            output.writeFieldEnd();
        }
        if (this.populateParticipantHash != null) {
            output.writeFieldBegin("populateParticipantHash", thrift.Thrift.Type.BOOL, 2);
            output.writeBool(this.populateParticipantHash);
            output.writeFieldEnd();
        }
        if (this.enableParticipantVerification != null) {
            output.writeFieldBegin("enableParticipantVerification", thrift.Thrift.Type.BOOL, 3);
            output.writeBool(this.enableParticipantVerification);
            output.writeFieldEnd();
        }
        output.writeFieldStop();
        output.writeStructEnd();
        return;
    }
    public static read(input: thrift.TProtocol): KeyNegotiationProtocolConfig {
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
                    if (fieldType === thrift.Thrift.Type.STRUCT) {
                        const value_1: SessionKeyProtocolInfo.SessionKeyProtocolInfo = SessionKeyProtocolInfo.SessionKeyProtocolInfo.read(input);
                        _args.sessionKeyProtocolInfo = value_1;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 2:
                    if (fieldType === thrift.Thrift.Type.BOOL) {
                        const value_2: boolean = input.readBool();
                        _args.populateParticipantHash = value_2;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 3:
                    if (fieldType === thrift.Thrift.Type.BOOL) {
                        const value_3: boolean = input.readBool();
                        _args.enableParticipantVerification = value_3;
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
        return new KeyNegotiationProtocolConfig(_args);
    }
}
