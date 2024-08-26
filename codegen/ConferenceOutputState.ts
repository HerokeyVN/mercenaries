/* tslint:disable */
/* eslint-disable */
/*
 * Autogenerated by @creditkarma/thrift-typescript v3.7.6
 * DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
*/
import * as thrift from "thrift";
import * as UseCaseConferenceOutputState from "./UseCaseConferenceOutputState";
export interface IConferenceOutputStateArgs {
    smcTier?: string;
    conferenceOutputStateMap?: Map<number, UseCaseConferenceOutputState.UseCaseConferenceOutputState>;
}
export class ConferenceOutputState {
    public smcTier?: string;
    public conferenceOutputStateMap?: Map<number, UseCaseConferenceOutputState.UseCaseConferenceOutputState>;
    constructor(args?: IConferenceOutputStateArgs) {
        if (args != null && args.smcTier != null) {
            this.smcTier = args.smcTier;
        }
        if (args != null && args.conferenceOutputStateMap != null) {
            this.conferenceOutputStateMap = args.conferenceOutputStateMap;
        }
    }
    public write(output: thrift.TProtocol): void {
        output.writeStructBegin("ConferenceOutputState");
        if (this.smcTier != null) {
            output.writeFieldBegin("smcTier", thrift.Thrift.Type.STRING, 1);
            output.writeString(this.smcTier);
            output.writeFieldEnd();
        }
        if (this.conferenceOutputStateMap != null) {
            output.writeFieldBegin("conferenceOutputStateMap", thrift.Thrift.Type.MAP, 2);
            output.writeMapBegin(thrift.Thrift.Type.I32, thrift.Thrift.Type.STRUCT, this.conferenceOutputStateMap.size);
            this.conferenceOutputStateMap.forEach((value_1: UseCaseConferenceOutputState.UseCaseConferenceOutputState, key_1: number): void => {
                output.writeI32(key_1);
                value_1.write(output);
            });
            output.writeMapEnd();
            output.writeFieldEnd();
        }
        output.writeFieldStop();
        output.writeStructEnd();
        return;
    }
    public static read(input: thrift.TProtocol): ConferenceOutputState {
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
                        _args.smcTier = value_2;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 2:
                    if (fieldType === thrift.Thrift.Type.MAP) {
                        const value_3: Map<number, UseCaseConferenceOutputState.UseCaseConferenceOutputState> = new Map<number, UseCaseConferenceOutputState.UseCaseConferenceOutputState>();
                        const metadata_1: thrift.TMap = input.readMapBegin();
                        const size_1: number = metadata_1.size;
                        for (let i_1: number = 0; i_1 < size_1; i_1++) {
                            const key_2: number = input.readI32();
                            const value_4: UseCaseConferenceOutputState.UseCaseConferenceOutputState = UseCaseConferenceOutputState.UseCaseConferenceOutputState.read(input);
                            value_3.set(key_2, value_4);
                        }
                        input.readMapEnd();
                        _args.conferenceOutputStateMap = value_3;
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
        return new ConferenceOutputState(_args);
    }
}
