/* tslint:disable */
/* eslint-disable */
/*
 * Autogenerated by @creditkarma/thrift-typescript v3.7.6
 * DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
*/
import * as thrift from "thrift";
import * as StageInfo from "./StageInfo";
export interface IWorkCostreamingConferenceOutputStateArgs {
    liveStreamingStatus?: number;
    stageInfo?: StageInfo.StageInfo;
}
export class WorkCostreamingConferenceOutputState {
    public liveStreamingStatus?: number;
    public stageInfo?: StageInfo.StageInfo;
    constructor(args?: IWorkCostreamingConferenceOutputStateArgs) {
        if (args != null && args.liveStreamingStatus != null) {
            this.liveStreamingStatus = args.liveStreamingStatus;
        }
        if (args != null && args.stageInfo != null) {
            this.stageInfo = args.stageInfo;
        }
    }
    public write(output: thrift.TProtocol): void {
        output.writeStructBegin("WorkCostreamingConferenceOutputState");
        if (this.liveStreamingStatus != null) {
            output.writeFieldBegin("liveStreamingStatus", thrift.Thrift.Type.I32, 1);
            output.writeI32(this.liveStreamingStatus);
            output.writeFieldEnd();
        }
        if (this.stageInfo != null) {
            output.writeFieldBegin("stageInfo", thrift.Thrift.Type.STRUCT, 2);
            this.stageInfo.write(output);
            output.writeFieldEnd();
        }
        output.writeFieldStop();
        output.writeStructEnd();
        return;
    }
    public static read(input: thrift.TProtocol): WorkCostreamingConferenceOutputState {
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
                        const value_1: number = input.readI32();
                        _args.liveStreamingStatus = value_1;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 2:
                    if (fieldType === thrift.Thrift.Type.STRUCT) {
                        const value_2: StageInfo.StageInfo = StageInfo.StageInfo.read(input);
                        _args.stageInfo = value_2;
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
        return new WorkCostreamingConferenceOutputState(_args);
    }
}
