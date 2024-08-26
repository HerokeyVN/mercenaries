/* tslint:disable */
/* eslint-disable */
/*
 * Autogenerated by @creditkarma/thrift-typescript v3.7.6
 * DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
*/
import * as thrift from "thrift";
import * as OverlayConfigServerLayer from "./OverlayConfigServerLayer";
import * as ClientRuleFromServerToClient from "./ClientRuleFromServerToClient";
export interface IConfigEngineClientOutputStateArgs {
    overlayConfigServerLayer?: OverlayConfigServerLayer.OverlayConfigServerLayer;
    clientRules?: Array<ClientRuleFromServerToClient.ClientRuleFromServerToClient>;
}
export class ConfigEngineClientOutputState {
    public overlayConfigServerLayer?: OverlayConfigServerLayer.OverlayConfigServerLayer;
    public clientRules?: Array<ClientRuleFromServerToClient.ClientRuleFromServerToClient>;
    constructor(args?: IConfigEngineClientOutputStateArgs) {
        if (args != null && args.overlayConfigServerLayer != null) {
            this.overlayConfigServerLayer = args.overlayConfigServerLayer;
        }
        if (args != null && args.clientRules != null) {
            this.clientRules = args.clientRules;
        }
    }
    public write(output: thrift.TProtocol): void {
        output.writeStructBegin("ConfigEngineClientOutputState");
        if (this.overlayConfigServerLayer != null) {
            output.writeFieldBegin("overlayConfigServerLayer", thrift.Thrift.Type.STRUCT, 2);
            this.overlayConfigServerLayer.write(output);
            output.writeFieldEnd();
        }
        if (this.clientRules != null) {
            output.writeFieldBegin("clientRules", thrift.Thrift.Type.LIST, 3);
            output.writeListBegin(thrift.Thrift.Type.STRUCT, this.clientRules.length);
            this.clientRules.forEach((value_1: ClientRuleFromServerToClient.ClientRuleFromServerToClient): void => {
                value_1.write(output);
            });
            output.writeListEnd();
            output.writeFieldEnd();
        }
        output.writeFieldStop();
        output.writeStructEnd();
        return;
    }
    public static read(input: thrift.TProtocol): ConfigEngineClientOutputState {
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
                case 2:
                    if (fieldType === thrift.Thrift.Type.STRUCT) {
                        const value_2: OverlayConfigServerLayer.OverlayConfigServerLayer = OverlayConfigServerLayer.OverlayConfigServerLayer.read(input);
                        _args.overlayConfigServerLayer = value_2;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 3:
                    if (fieldType === thrift.Thrift.Type.LIST) {
                        const value_3: Array<ClientRuleFromServerToClient.ClientRuleFromServerToClient> = new Array<ClientRuleFromServerToClient.ClientRuleFromServerToClient>();
                        const metadata_1: thrift.TList = input.readListBegin();
                        const size_1: number = metadata_1.size;
                        for (let i_1: number = 0; i_1 < size_1; i_1++) {
                            const value_4: ClientRuleFromServerToClient.ClientRuleFromServerToClient = ClientRuleFromServerToClient.ClientRuleFromServerToClient.read(input);
                            value_3.push(value_4);
                        }
                        input.readListEnd();
                        _args.clientRules = value_3;
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
        return new ConfigEngineClientOutputState(_args);
    }
}
