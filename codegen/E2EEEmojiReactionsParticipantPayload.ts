/* tslint:disable */
/* eslint-disable */
/*
 * Autogenerated by @creditkarma/thrift-typescript v3.7.6
 * DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
*/
import * as thrift from "thrift";
import * as Emoji from "./Emoji";
export interface IE2EEEmojiReactionsParticipantPayloadArgs {
    reaction?: Emoji.Emoji;
}
export class E2EEEmojiReactionsParticipantPayload {
    public reaction?: Emoji.Emoji;
    constructor(args?: IE2EEEmojiReactionsParticipantPayloadArgs) {
        if (args != null && args.reaction != null) {
            this.reaction = args.reaction;
        }
    }
    public write(output: thrift.TProtocol): void {
        output.writeStructBegin("E2EEEmojiReactionsParticipantPayload");
        if (this.reaction != null) {
            output.writeFieldBegin("reaction", thrift.Thrift.Type.STRUCT, 1);
            this.reaction.write(output);
            output.writeFieldEnd();
        }
        output.writeFieldStop();
        output.writeStructEnd();
        return;
    }
    public static read(input: thrift.TProtocol): E2EEEmojiReactionsParticipantPayload {
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
                        const value_1: Emoji.Emoji = Emoji.Emoji.read(input);
                        _args.reaction = value_1;
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
        return new E2EEEmojiReactionsParticipantPayload(_args);
    }
}
