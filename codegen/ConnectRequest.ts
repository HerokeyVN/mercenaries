/* tslint:disable */
/* eslint-disable */
/*
 * Autogenerated by @creditkarma/thrift-typescript v3.7.6
 * DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
*/
import * as thrift from "thrift";
import * as SessionDescription from "./SessionDescription";
import * as E2eeEnforcement from "./E2eeEnforcement";
export interface IConnectRequestArgs {
    sdp?: SessionDescription.SessionDescription;
    deviceCapabilities?: Set<number>;
    supportedCustomVideoContentTypes?: Set<number>;
    prOffer?: SessionDescription.SessionDescription;
    e2eeEnforcement?: E2eeEnforcement.E2eeEnforcement;
}
export class ConnectRequest {
    public sdp?: SessionDescription.SessionDescription;
    public deviceCapabilities?: Set<number>;
    public supportedCustomVideoContentTypes?: Set<number>;
    public prOffer?: SessionDescription.SessionDescription;
    public e2eeEnforcement?: E2eeEnforcement.E2eeEnforcement;
    constructor(args?: IConnectRequestArgs) {
        if (args != null && args.sdp != null) {
            this.sdp = args.sdp;
        }
        if (args != null && args.deviceCapabilities != null) {
            this.deviceCapabilities = args.deviceCapabilities;
        }
        if (args != null && args.supportedCustomVideoContentTypes != null) {
            this.supportedCustomVideoContentTypes = args.supportedCustomVideoContentTypes;
        }
        if (args != null && args.prOffer != null) {
            this.prOffer = args.prOffer;
        }
        if (args != null && args.e2eeEnforcement != null) {
            this.e2eeEnforcement = args.e2eeEnforcement;
        }
    }
    public write(output: thrift.TProtocol): void {
        output.writeStructBegin("ConnectRequest");
        if (this.sdp != null) {
            output.writeFieldBegin("sdp", thrift.Thrift.Type.STRUCT, 1);
            this.sdp.write(output);
            output.writeFieldEnd();
        }
        if (this.deviceCapabilities != null) {
            output.writeFieldBegin("deviceCapabilities", thrift.Thrift.Type.SET, 3);
            output.writeSetBegin(thrift.Thrift.Type.I32, this.deviceCapabilities.size);
            this.deviceCapabilities.forEach((value_1: number): void => {
                output.writeI32(value_1);
            });
            output.writeSetEnd();
            output.writeFieldEnd();
        }
        if (this.supportedCustomVideoContentTypes != null) {
            output.writeFieldBegin("supportedCustomVideoContentTypes", thrift.Thrift.Type.SET, 5);
            output.writeSetBegin(thrift.Thrift.Type.I32, this.supportedCustomVideoContentTypes.size);
            this.supportedCustomVideoContentTypes.forEach((value_2: number): void => {
                output.writeI32(value_2);
            });
            output.writeSetEnd();
            output.writeFieldEnd();
        }
        if (this.prOffer != null) {
            output.writeFieldBegin("prOffer", thrift.Thrift.Type.STRUCT, 6);
            this.prOffer.write(output);
            output.writeFieldEnd();
        }
        if (this.e2eeEnforcement != null) {
            output.writeFieldBegin("e2eeEnforcement", thrift.Thrift.Type.STRUCT, 7);
            this.e2eeEnforcement.write(output);
            output.writeFieldEnd();
        }
        output.writeFieldStop();
        output.writeStructEnd();
        return;
    }
    public static read(input: thrift.TProtocol): ConnectRequest {
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
                        const value_3: SessionDescription.SessionDescription = SessionDescription.SessionDescription.read(input);
                        _args.sdp = value_3;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 3:
                    if (fieldType === thrift.Thrift.Type.SET) {
                        const value_4: Set<number> = new Set<number>();
                        const metadata_1: thrift.TSet = input.readSetBegin();
                        const size_1: number = metadata_1.size;
                        for (let i_1: number = 0; i_1 < size_1; i_1++) {
                            const value_5: number = input.readI32();
                            value_4.add(value_5);
                        }
                        input.readSetEnd();
                        _args.deviceCapabilities = value_4;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 5:
                    if (fieldType === thrift.Thrift.Type.SET) {
                        const value_6: Set<number> = new Set<number>();
                        const metadata_2: thrift.TSet = input.readSetBegin();
                        const size_2: number = metadata_2.size;
                        for (let i_2: number = 0; i_2 < size_2; i_2++) {
                            const value_7: number = input.readI32();
                            value_6.add(value_7);
                        }
                        input.readSetEnd();
                        _args.supportedCustomVideoContentTypes = value_6;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 6:
                    if (fieldType === thrift.Thrift.Type.STRUCT) {
                        const value_8: SessionDescription.SessionDescription = SessionDescription.SessionDescription.read(input);
                        _args.prOffer = value_8;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 7:
                    if (fieldType === thrift.Thrift.Type.STRUCT) {
                        const value_9: E2eeEnforcement.E2eeEnforcement = E2eeEnforcement.E2eeEnforcement.read(input);
                        _args.e2eeEnforcement = value_9;
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
        return new ConnectRequest(_args);
    }
}
