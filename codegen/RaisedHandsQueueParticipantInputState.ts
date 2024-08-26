/* tslint:disable */
/* eslint-disable */
/*
 * Autogenerated by @creditkarma/thrift-typescript v3.7.6
 * DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
*/
import * as thrift from "thrift";
import * as RaisedHandsQueuer from "./RaisedHandsQueuer";
export interface IRaisedHandsQueueParticipantInputStateArgs {
    request_type?: number;
    action_uuid?: string;
    raise_hands_queue_for_switch?: Array<RaisedHandsQueuer.RaisedHandsQueuer>;
}
export class RaisedHandsQueueParticipantInputState {
    public request_type?: number;
    public action_uuid?: string;
    public raise_hands_queue_for_switch?: Array<RaisedHandsQueuer.RaisedHandsQueuer>;
    constructor(args?: IRaisedHandsQueueParticipantInputStateArgs) {
        if (args != null && args.request_type != null) {
            this.request_type = args.request_type;
        }
        if (args != null && args.action_uuid != null) {
            this.action_uuid = args.action_uuid;
        }
        if (args != null && args.raise_hands_queue_for_switch != null) {
            this.raise_hands_queue_for_switch = args.raise_hands_queue_for_switch;
        }
    }
    public write(output: thrift.TProtocol): void {
        output.writeStructBegin("RaisedHandsQueueParticipantInputState");
        if (this.request_type != null) {
            output.writeFieldBegin("request_type", thrift.Thrift.Type.I32, 1);
            output.writeI32(this.request_type);
            output.writeFieldEnd();
        }
        if (this.action_uuid != null) {
            output.writeFieldBegin("action_uuid", thrift.Thrift.Type.STRING, 3);
            output.writeString(this.action_uuid);
            output.writeFieldEnd();
        }
        if (this.raise_hands_queue_for_switch != null) {
            output.writeFieldBegin("raise_hands_queue_for_switch", thrift.Thrift.Type.LIST, 4);
            output.writeListBegin(thrift.Thrift.Type.STRUCT, this.raise_hands_queue_for_switch.length);
            this.raise_hands_queue_for_switch.forEach((value_1: RaisedHandsQueuer.RaisedHandsQueuer): void => {
                value_1.write(output);
            });
            output.writeListEnd();
            output.writeFieldEnd();
        }
        output.writeFieldStop();
        output.writeStructEnd();
        return;
    }
    public static read(input: thrift.TProtocol): RaisedHandsQueueParticipantInputState {
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
                        const value_2: number = input.readI32();
                        _args.request_type = value_2;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 3:
                    if (fieldType === thrift.Thrift.Type.STRING) {
                        const value_3: string = input.readString();
                        _args.action_uuid = value_3;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 4:
                    if (fieldType === thrift.Thrift.Type.LIST) {
                        const value_4: Array<RaisedHandsQueuer.RaisedHandsQueuer> = new Array<RaisedHandsQueuer.RaisedHandsQueuer>();
                        const metadata_1: thrift.TList = input.readListBegin();
                        const size_1: number = metadata_1.size;
                        for (let i_1: number = 0; i_1 < size_1; i_1++) {
                            const value_5: RaisedHandsQueuer.RaisedHandsQueuer = RaisedHandsQueuer.RaisedHandsQueuer.read(input);
                            value_4.push(value_5);
                        }
                        input.readListEnd();
                        _args.raise_hands_queue_for_switch = value_4;
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
        return new RaisedHandsQueueParticipantInputState(_args);
    }
}
