/* tslint:disable */
/* eslint-disable */
/*
 * Autogenerated by @creditkarma/thrift-typescript v3.7.6
 * DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
*/
import * as thrift from "thrift";
export interface IDataHeaderArgs {
    sender?: string;
    topic_DEPRECATED?: string;
    recipients?: Set<string>;
    serviceSender?: number;
    serviceRecipients?: Set<number>;
    shouldSendToAllUsers?: boolean;
    senderE2eeId?: string;
}
export class DataHeader {
    public sender?: string;
    public topic_DEPRECATED?: string;
    public recipients?: Set<string>;
    public serviceSender?: number;
    public serviceRecipients?: Set<number>;
    public shouldSendToAllUsers?: boolean;
    public senderE2eeId?: string;
    constructor(args?: IDataHeaderArgs) {
        if (args != null && args.sender != null) {
            this.sender = args.sender;
        }
        if (args != null && args.topic_DEPRECATED != null) {
            this.topic_DEPRECATED = args.topic_DEPRECATED;
        }
        if (args != null && args.recipients != null) {
            this.recipients = args.recipients;
        }
        if (args != null && args.serviceSender != null) {
            this.serviceSender = args.serviceSender;
        }
        if (args != null && args.serviceRecipients != null) {
            this.serviceRecipients = args.serviceRecipients;
        }
        if (args != null && args.shouldSendToAllUsers != null) {
            this.shouldSendToAllUsers = args.shouldSendToAllUsers;
        }
        if (args != null && args.senderE2eeId != null) {
            this.senderE2eeId = args.senderE2eeId;
        }
    }
    public write(output: thrift.TProtocol): void {
        output.writeStructBegin("DataHeader");
        if (this.sender != null) {
            output.writeFieldBegin("sender", thrift.Thrift.Type.STRING, 1);
            output.writeString(this.sender);
            output.writeFieldEnd();
        }
        if (this.topic_DEPRECATED != null) {
            output.writeFieldBegin("topic_DEPRECATED", thrift.Thrift.Type.STRING, 2);
            output.writeString(this.topic_DEPRECATED);
            output.writeFieldEnd();
        }
        if (this.recipients != null) {
            output.writeFieldBegin("recipients", thrift.Thrift.Type.SET, 3);
            output.writeSetBegin(thrift.Thrift.Type.STRING, this.recipients.size);
            this.recipients.forEach((value_1: string): void => {
                output.writeString(value_1);
            });
            output.writeSetEnd();
            output.writeFieldEnd();
        }
        if (this.serviceSender != null) {
            output.writeFieldBegin("serviceSender", thrift.Thrift.Type.I32, 4);
            output.writeI32(this.serviceSender);
            output.writeFieldEnd();
        }
        if (this.serviceRecipients != null) {
            output.writeFieldBegin("serviceRecipients", thrift.Thrift.Type.SET, 5);
            output.writeSetBegin(thrift.Thrift.Type.I32, this.serviceRecipients.size);
            this.serviceRecipients.forEach((value_2: number): void => {
                output.writeI32(value_2);
            });
            output.writeSetEnd();
            output.writeFieldEnd();
        }
        if (this.shouldSendToAllUsers != null) {
            output.writeFieldBegin("shouldSendToAllUsers", thrift.Thrift.Type.BOOL, 6);
            output.writeBool(this.shouldSendToAllUsers);
            output.writeFieldEnd();
        }
        if (this.senderE2eeId != null) {
            output.writeFieldBegin("senderE2eeId", thrift.Thrift.Type.STRING, 7);
            output.writeString(this.senderE2eeId);
            output.writeFieldEnd();
        }
        output.writeFieldStop();
        output.writeStructEnd();
        return;
    }
    public static read(input: thrift.TProtocol): DataHeader {
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
                        const value_3: string = input.readString();
                        _args.sender = value_3;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 2:
                    if (fieldType === thrift.Thrift.Type.STRING) {
                        const value_4: string = input.readString();
                        _args.topic_DEPRECATED = value_4;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 3:
                    if (fieldType === thrift.Thrift.Type.SET) {
                        const value_5: Set<string> = new Set<string>();
                        const metadata_1: thrift.TSet = input.readSetBegin();
                        const size_1: number = metadata_1.size;
                        for (let i_1: number = 0; i_1 < size_1; i_1++) {
                            const value_6: string = input.readString();
                            value_5.add(value_6);
                        }
                        input.readSetEnd();
                        _args.recipients = value_5;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 4:
                    if (fieldType === thrift.Thrift.Type.I32) {
                        const value_7: number = input.readI32();
                        _args.serviceSender = value_7;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 5:
                    if (fieldType === thrift.Thrift.Type.SET) {
                        const value_8: Set<number> = new Set<number>();
                        const metadata_2: thrift.TSet = input.readSetBegin();
                        const size_2: number = metadata_2.size;
                        for (let i_2: number = 0; i_2 < size_2; i_2++) {
                            const value_9: number = input.readI32();
                            value_8.add(value_9);
                        }
                        input.readSetEnd();
                        _args.serviceRecipients = value_8;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 6:
                    if (fieldType === thrift.Thrift.Type.BOOL) {
                        const value_10: boolean = input.readBool();
                        _args.shouldSendToAllUsers = value_10;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 7:
                    if (fieldType === thrift.Thrift.Type.STRING) {
                        const value_11: string = input.readString();
                        _args.senderE2eeId = value_11;
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
        return new DataHeader(_args);
    }
}
