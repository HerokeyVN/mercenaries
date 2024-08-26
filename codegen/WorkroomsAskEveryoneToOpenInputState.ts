/* tslint:disable */
/* eslint-disable */
/*
 * Autogenerated by @creditkarma/thrift-typescript v3.7.6
 * DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
*/
import * as thrift from "thrift";
import * as MeetingParticipant from "./MeetingParticipant";
import * as WorkroomsAsset from "./WorkroomsAsset";
import * as WorkroomsResource from "./WorkroomsResource";
export interface IWorkroomsAskEveryoneToOpenInputStateArgs {
    participant?: MeetingParticipant.MeetingParticipant;
    asset_url?: string;
    asset?: WorkroomsAsset.WorkroomsAsset;
    type?: number;
    intent?: number;
    resource?: WorkroomsResource.WorkroomsResource;
}
export class WorkroomsAskEveryoneToOpenInputState {
    public participant?: MeetingParticipant.MeetingParticipant;
    public asset_url?: string;
    public asset?: WorkroomsAsset.WorkroomsAsset;
    public type?: number;
    public intent?: number;
    public resource?: WorkroomsResource.WorkroomsResource;
    constructor(args?: IWorkroomsAskEveryoneToOpenInputStateArgs) {
        if (args != null && args.participant != null) {
            this.participant = args.participant;
        }
        if (args != null && args.asset_url != null) {
            this.asset_url = args.asset_url;
        }
        if (args != null && args.asset != null) {
            this.asset = args.asset;
        }
        if (args != null && args.type != null) {
            this.type = args.type;
        }
        if (args != null && args.intent != null) {
            this.intent = args.intent;
        }
        if (args != null && args.resource != null) {
            this.resource = args.resource;
        }
    }
    public write(output: thrift.TProtocol): void {
        output.writeStructBegin("WorkroomsAskEveryoneToOpenInputState");
        if (this.participant != null) {
            output.writeFieldBegin("participant", thrift.Thrift.Type.STRUCT, 1);
            this.participant.write(output);
            output.writeFieldEnd();
        }
        if (this.asset_url != null) {
            output.writeFieldBegin("asset_url", thrift.Thrift.Type.STRING, 2);
            output.writeString(this.asset_url);
            output.writeFieldEnd();
        }
        if (this.asset != null) {
            output.writeFieldBegin("asset", thrift.Thrift.Type.STRUCT, 3);
            this.asset.write(output);
            output.writeFieldEnd();
        }
        if (this.type != null) {
            output.writeFieldBegin("type", thrift.Thrift.Type.I32, 4);
            output.writeI32(this.type);
            output.writeFieldEnd();
        }
        if (this.intent != null) {
            output.writeFieldBegin("intent", thrift.Thrift.Type.I32, 5);
            output.writeI32(this.intent);
            output.writeFieldEnd();
        }
        if (this.resource != null) {
            output.writeFieldBegin("resource", thrift.Thrift.Type.STRUCT, 6);
            this.resource.write(output);
            output.writeFieldEnd();
        }
        output.writeFieldStop();
        output.writeStructEnd();
        return;
    }
    public static read(input: thrift.TProtocol): WorkroomsAskEveryoneToOpenInputState {
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
                        const value_1: MeetingParticipant.MeetingParticipant = MeetingParticipant.MeetingParticipant.read(input);
                        _args.participant = value_1;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 2:
                    if (fieldType === thrift.Thrift.Type.STRING) {
                        const value_2: string = input.readString();
                        _args.asset_url = value_2;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 3:
                    if (fieldType === thrift.Thrift.Type.STRUCT) {
                        const value_3: WorkroomsAsset.WorkroomsAsset = WorkroomsAsset.WorkroomsAsset.read(input);
                        _args.asset = value_3;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 4:
                    if (fieldType === thrift.Thrift.Type.I32) {
                        const value_4: number = input.readI32();
                        _args.type = value_4;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 5:
                    if (fieldType === thrift.Thrift.Type.I32) {
                        const value_5: number = input.readI32();
                        _args.intent = value_5;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 6:
                    if (fieldType === thrift.Thrift.Type.STRUCT) {
                        const value_6: WorkroomsResource.WorkroomsResource = WorkroomsResource.WorkroomsResource.read(input);
                        _args.resource = value_6;
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
        return new WorkroomsAskEveryoneToOpenInputState(_args);
    }
}
