/* tslint:disable */
/* eslint-disable */
/*
 * Autogenerated by @creditkarma/thrift-typescript v3.7.6
 * DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
*/
import * as thrift from "thrift";
export interface IActiveConversationArgs {
    id?: string;
    participant_ids?: Array<string>;
    conversation_context?: string;
    call_conference_name?: string;
    call_url?: string;
}
export class ActiveConversation {
    public id?: string;
    public participant_ids?: Array<string>;
    public conversation_context?: string;
    public call_conference_name?: string;
    public call_url?: string;
    constructor(args?: IActiveConversationArgs) {
        if (args != null && args.id != null) {
            this.id = args.id;
        }
        if (args != null && args.participant_ids != null) {
            this.participant_ids = args.participant_ids;
        }
        if (args != null && args.conversation_context != null) {
            this.conversation_context = args.conversation_context;
        }
        if (args != null && args.call_conference_name != null) {
            this.call_conference_name = args.call_conference_name;
        }
        if (args != null && args.call_url != null) {
            this.call_url = args.call_url;
        }
    }
    public write(output: thrift.TProtocol): void {
        output.writeStructBegin("ActiveConversation");
        if (this.id != null) {
            output.writeFieldBegin("id", thrift.Thrift.Type.STRING, 1);
            output.writeString(this.id);
            output.writeFieldEnd();
        }
        if (this.participant_ids != null) {
            output.writeFieldBegin("participant_ids", thrift.Thrift.Type.LIST, 2);
            output.writeListBegin(thrift.Thrift.Type.STRING, this.participant_ids.length);
            this.participant_ids.forEach((value_1: string): void => {
                output.writeString(value_1);
            });
            output.writeListEnd();
            output.writeFieldEnd();
        }
        if (this.conversation_context != null) {
            output.writeFieldBegin("conversation_context", thrift.Thrift.Type.STRING, 3);
            output.writeString(this.conversation_context);
            output.writeFieldEnd();
        }
        if (this.call_conference_name != null) {
            output.writeFieldBegin("call_conference_name", thrift.Thrift.Type.STRING, 4);
            output.writeString(this.call_conference_name);
            output.writeFieldEnd();
        }
        if (this.call_url != null) {
            output.writeFieldBegin("call_url", thrift.Thrift.Type.STRING, 5);
            output.writeString(this.call_url);
            output.writeFieldEnd();
        }
        output.writeFieldStop();
        output.writeStructEnd();
        return;
    }
    public static read(input: thrift.TProtocol): ActiveConversation {
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
                    if (fieldType === thrift.Thrift.Type.STRING) {
                        const value_2: string = input.readString();
                        _args.id = value_2;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 2:
                    if (fieldType === thrift.Thrift.Type.LIST) {
                        const value_3: Array<string> = new Array<string>();
                        const metadata_1: thrift.TList = input.readListBegin();
                        const size_1: number = metadata_1.size;
                        for (let i_1: number = 0; i_1 < size_1; i_1++) {
                            const value_4: string = input.readString();
                            value_3.push(value_4);
                        }
                        input.readListEnd();
                        _args.participant_ids = value_3;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 3:
                    if (fieldType === thrift.Thrift.Type.STRING) {
                        const value_5: string = input.readString();
                        _args.conversation_context = value_5;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 4:
                    if (fieldType === thrift.Thrift.Type.STRING) {
                        const value_6: string = input.readString();
                        _args.call_conference_name = value_6;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 5:
                    if (fieldType === thrift.Thrift.Type.STRING) {
                        const value_7: string = input.readString();
                        _args.call_url = value_7;
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
        return new ActiveConversation(_args);
    }
}
