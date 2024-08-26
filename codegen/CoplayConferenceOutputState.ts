/* tslint:disable */
/* eslint-disable */
/*
 * Autogenerated by @creditkarma/thrift-typescript v3.7.6
 * DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
*/
import * as thrift from "thrift";
import * as CoplayMatchState from "./CoplayMatchState";
export interface ICoplayConferenceOutputStateArgs {
    matchState?: CoplayMatchState.CoplayMatchState;
    previousMatchIds?: Array<number | Int64>;
}
export class CoplayConferenceOutputState {
    public matchState?: CoplayMatchState.CoplayMatchState;
    public previousMatchIds?: Array<Int64>;
    constructor(args?: ICoplayConferenceOutputStateArgs) {
        if (args != null && args.matchState != null) {
            this.matchState = args.matchState;
        }
        if (args != null && args.previousMatchIds != null) {
            this.previousMatchIds = args.previousMatchIds;
        }
    }
    public write(output: thrift.TProtocol): void {
        output.writeStructBegin("CoplayConferenceOutputState");
        if (this.matchState != null) {
            output.writeFieldBegin("matchState", thrift.Thrift.Type.STRUCT, 1);
            this.matchState.write(output);
            output.writeFieldEnd();
        }
        if (this.previousMatchIds != null) {
            output.writeFieldBegin("previousMatchIds", thrift.Thrift.Type.LIST, 2);
            output.writeListBegin(thrift.Thrift.Type.I64, this.previousMatchIds.length);
            this.previousMatchIds.forEach((value_1: Int64): void => {
                output.writeI64(value_1);
            });
            output.writeListEnd();
            output.writeFieldEnd();
        }
        output.writeFieldStop();
        output.writeStructEnd();
        return;
    }
    public static read(input: thrift.TProtocol): CoplayConferenceOutputState {
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
                        const value_2: CoplayMatchState.CoplayMatchState = CoplayMatchState.CoplayMatchState.read(input);
                        _args.matchState = value_2;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 2:
                    if (fieldType === thrift.Thrift.Type.LIST) {
                        const value_3: Array<Int64> = new Array<Int64>();
                        const metadata_1: thrift.TList = input.readListBegin();
                        const size_1: number = metadata_1.size;
                        for (let i_1: number = 0; i_1 < size_1; i_1++) {
                            const value_4: Int64 = input.readI64();
                            value_3.push(value_4);
                        }
                        input.readListEnd();
                        _args.previousMatchIds = value_3;
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
        return new CoplayConferenceOutputState(_args);
    }
}
