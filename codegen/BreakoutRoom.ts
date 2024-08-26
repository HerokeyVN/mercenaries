/* tslint:disable */
/* eslint-disable */
/*
 * Autogenerated by @creditkarma/thrift-typescript v3.7.6
 * DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
*/
import * as thrift from "thrift";
export interface IBreakoutRoomArgs {
    conferenceName?: string;
    name?: string;
    roomHash?: string;
    roomURI?: string;
    participantIDs?: Array<string>;
}
export class BreakoutRoom {
    public conferenceName?: string;
    public name?: string;
    public roomHash?: string;
    public roomURI?: string;
    public participantIDs?: Array<string>;
    constructor(args?: IBreakoutRoomArgs) {
        if (args != null && args.conferenceName != null) {
            this.conferenceName = args.conferenceName;
        }
        if (args != null && args.name != null) {
            this.name = args.name;
        }
        if (args != null && args.roomHash != null) {
            this.roomHash = args.roomHash;
        }
        if (args != null && args.roomURI != null) {
            this.roomURI = args.roomURI;
        }
        if (args != null && args.participantIDs != null) {
            this.participantIDs = args.participantIDs;
        }
    }
    public write(output: thrift.TProtocol): void {
        output.writeStructBegin("BreakoutRoom");
        if (this.conferenceName != null) {
            output.writeFieldBegin("conferenceName", thrift.Thrift.Type.STRING, 1);
            output.writeString(this.conferenceName);
            output.writeFieldEnd();
        }
        if (this.name != null) {
            output.writeFieldBegin("name", thrift.Thrift.Type.STRING, 2);
            output.writeString(this.name);
            output.writeFieldEnd();
        }
        if (this.roomHash != null) {
            output.writeFieldBegin("roomHash", thrift.Thrift.Type.STRING, 3);
            output.writeString(this.roomHash);
            output.writeFieldEnd();
        }
        if (this.roomURI != null) {
            output.writeFieldBegin("roomURI", thrift.Thrift.Type.STRING, 4);
            output.writeString(this.roomURI);
            output.writeFieldEnd();
        }
        if (this.participantIDs != null) {
            output.writeFieldBegin("participantIDs", thrift.Thrift.Type.LIST, 5);
            output.writeListBegin(thrift.Thrift.Type.STRING, this.participantIDs.length);
            this.participantIDs.forEach((value_1: string): void => {
                output.writeString(value_1);
            });
            output.writeListEnd();
            output.writeFieldEnd();
        }
        output.writeFieldStop();
        output.writeStructEnd();
        return;
    }
    public static read(input: thrift.TProtocol): BreakoutRoom {
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
                        _args.conferenceName = value_2;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 2:
                    if (fieldType === thrift.Thrift.Type.STRING) {
                        const value_3: string = input.readString();
                        _args.name = value_3;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 3:
                    if (fieldType === thrift.Thrift.Type.STRING) {
                        const value_4: string = input.readString();
                        _args.roomHash = value_4;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 4:
                    if (fieldType === thrift.Thrift.Type.STRING) {
                        const value_5: string = input.readString();
                        _args.roomURI = value_5;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 5:
                    if (fieldType === thrift.Thrift.Type.LIST) {
                        const value_6: Array<string> = new Array<string>();
                        const metadata_1: thrift.TList = input.readListBegin();
                        const size_1: number = metadata_1.size;
                        for (let i_1: number = 0; i_1 < size_1; i_1++) {
                            const value_7: string = input.readString();
                            value_6.push(value_7);
                        }
                        input.readListEnd();
                        _args.participantIDs = value_6;
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
        return new BreakoutRoom(_args);
    }
}
