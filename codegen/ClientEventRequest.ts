/* tslint:disable */
/* eslint-disable */
/*
 * Autogenerated by @creditkarma/thrift-typescript v3.7.6
 * DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
*/
import * as thrift from "thrift";
import * as ClientEvent from "./ClientEvent";
export interface IClientEventRequestArgs {
    clientEvents?: Array<ClientEvent.ClientEvent>;
}
export class ClientEventRequest {
    public clientEvents?: Array<ClientEvent.ClientEvent>;
    constructor(args?: IClientEventRequestArgs) {
        if (args != null && args.clientEvents != null) {
            this.clientEvents = args.clientEvents;
        }
    }
    public write(output: thrift.TProtocol): void {
        output.writeStructBegin("ClientEventRequest");
        if (this.clientEvents != null) {
            output.writeFieldBegin("clientEvents", thrift.Thrift.Type.LIST, 1);
            output.writeListBegin(thrift.Thrift.Type.STRUCT, this.clientEvents.length);
            this.clientEvents.forEach((value_1: ClientEvent.ClientEvent): void => {
                value_1.write(output);
            });
            output.writeListEnd();
            output.writeFieldEnd();
        }
        output.writeFieldStop();
        output.writeStructEnd();
        return;
    }
    public static read(input: thrift.TProtocol): ClientEventRequest {
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
                    if (fieldType === thrift.Thrift.Type.LIST) {
                        const value_2: Array<ClientEvent.ClientEvent> = new Array<ClientEvent.ClientEvent>();
                        const metadata_1: thrift.TList = input.readListBegin();
                        const size_1: number = metadata_1.size;
                        for (let i_1: number = 0; i_1 < size_1; i_1++) {
                            const value_3: ClientEvent.ClientEvent = ClientEvent.ClientEvent.read(input);
                            value_2.push(value_3);
                        }
                        input.readListEnd();
                        _args.clientEvents = value_2;
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
        return new ClientEventRequest(_args);
    }
}
