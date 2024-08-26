/* tslint:disable */
/* eslint-disable */
/*
 * Autogenerated by @creditkarma/thrift-typescript v3.7.6
 * DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
*/
import * as thrift from "thrift";
import * as GenericDataMessage from "./GenericDataMessage";
import * as DominantSpeakerNotification from "./DominantSpeakerNotification";
import * as VideoUploadRequest from "./VideoUploadRequest";
import * as DominantSpeakerInfo from "./DominantSpeakerInfo";
import * as BweDebugInfo from "./BweDebugInfo";
import * as DebugInfo from "./DebugInfo";
import * as VideoUploadInfo from "./VideoUploadInfo";
import * as SignalingMessageToClient from "./SignalingMessageToClient";
import * as SignalingMessageFromClient from "./SignalingMessageFromClient";
export interface IDataMessageBodyArgs {
    genericMessage?: GenericDataMessage.GenericDataMessage;
    dominantSpeakerNotification?: DominantSpeakerNotification.DominantSpeakerNotification;
    videoUploadRequest?: VideoUploadRequest.VideoUploadRequest;
    dominantSpeakerSignalingInfo?: DominantSpeakerInfo.DominantSpeakerInfo;
    bweDebugInfo?: BweDebugInfo.BweDebugInfo;
    debugInfo?: DebugInfo.DebugInfo;
    videoUploadSignalingInfo?: VideoUploadInfo.VideoUploadInfo;
    signalingMessageToClient?: SignalingMessageToClient.SignalingMessageToClient;
    signalingMessageFromClient?: SignalingMessageFromClient.SignalingMessageFromClient;
}
export class DataMessageBody {
    public genericMessage?: GenericDataMessage.GenericDataMessage;
    public dominantSpeakerNotification?: DominantSpeakerNotification.DominantSpeakerNotification;
    public videoUploadRequest?: VideoUploadRequest.VideoUploadRequest;
    public dominantSpeakerSignalingInfo?: DominantSpeakerInfo.DominantSpeakerInfo;
    public bweDebugInfo?: BweDebugInfo.BweDebugInfo;
    public debugInfo?: DebugInfo.DebugInfo;
    public videoUploadSignalingInfo?: VideoUploadInfo.VideoUploadInfo;
    public signalingMessageToClient?: SignalingMessageToClient.SignalingMessageToClient;
    public signalingMessageFromClient?: SignalingMessageFromClient.SignalingMessageFromClient;
    constructor(args?: IDataMessageBodyArgs) {
        if (args != null && args.genericMessage != null) {
            this.genericMessage = args.genericMessage;
        }
        if (args != null && args.dominantSpeakerNotification != null) {
            this.dominantSpeakerNotification = args.dominantSpeakerNotification;
        }
        if (args != null && args.videoUploadRequest != null) {
            this.videoUploadRequest = args.videoUploadRequest;
        }
        if (args != null && args.dominantSpeakerSignalingInfo != null) {
            this.dominantSpeakerSignalingInfo = args.dominantSpeakerSignalingInfo;
        }
        if (args != null && args.bweDebugInfo != null) {
            this.bweDebugInfo = args.bweDebugInfo;
        }
        if (args != null && args.debugInfo != null) {
            this.debugInfo = args.debugInfo;
        }
        if (args != null && args.videoUploadSignalingInfo != null) {
            this.videoUploadSignalingInfo = args.videoUploadSignalingInfo;
        }
        if (args != null && args.signalingMessageToClient != null) {
            this.signalingMessageToClient = args.signalingMessageToClient;
        }
        if (args != null && args.signalingMessageFromClient != null) {
            this.signalingMessageFromClient = args.signalingMessageFromClient;
        }
    }
    public write(output: thrift.TProtocol): void {
        output.writeStructBegin("DataMessageBody");
        if (this.genericMessage != null) {
            output.writeFieldBegin("genericMessage", thrift.Thrift.Type.STRUCT, 1);
            this.genericMessage.write(output);
            output.writeFieldEnd();
        }
        if (this.dominantSpeakerNotification != null) {
            output.writeFieldBegin("dominantSpeakerNotification", thrift.Thrift.Type.STRUCT, 2);
            this.dominantSpeakerNotification.write(output);
            output.writeFieldEnd();
        }
        if (this.videoUploadRequest != null) {
            output.writeFieldBegin("videoUploadRequest", thrift.Thrift.Type.STRUCT, 3);
            this.videoUploadRequest.write(output);
            output.writeFieldEnd();
        }
        if (this.dominantSpeakerSignalingInfo != null) {
            output.writeFieldBegin("dominantSpeakerSignalingInfo", thrift.Thrift.Type.STRUCT, 4);
            this.dominantSpeakerSignalingInfo.write(output);
            output.writeFieldEnd();
        }
        if (this.bweDebugInfo != null) {
            output.writeFieldBegin("bweDebugInfo", thrift.Thrift.Type.STRUCT, 5);
            this.bweDebugInfo.write(output);
            output.writeFieldEnd();
        }
        if (this.debugInfo != null) {
            output.writeFieldBegin("debugInfo", thrift.Thrift.Type.STRUCT, 6);
            this.debugInfo.write(output);
            output.writeFieldEnd();
        }
        if (this.videoUploadSignalingInfo != null) {
            output.writeFieldBegin("videoUploadSignalingInfo", thrift.Thrift.Type.STRUCT, 7);
            this.videoUploadSignalingInfo.write(output);
            output.writeFieldEnd();
        }
        if (this.signalingMessageToClient != null) {
            output.writeFieldBegin("signalingMessageToClient", thrift.Thrift.Type.STRUCT, 8);
            this.signalingMessageToClient.write(output);
            output.writeFieldEnd();
        }
        if (this.signalingMessageFromClient != null) {
            output.writeFieldBegin("signalingMessageFromClient", thrift.Thrift.Type.STRUCT, 9);
            this.signalingMessageFromClient.write(output);
            output.writeFieldEnd();
        }
        output.writeFieldStop();
        output.writeStructEnd();
        return;
    }
    public static read(input: thrift.TProtocol): DataMessageBody {
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
                        const value_1: GenericDataMessage.GenericDataMessage = GenericDataMessage.GenericDataMessage.read(input);
                        _args.genericMessage = value_1;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 2:
                    if (fieldType === thrift.Thrift.Type.STRUCT) {
                        const value_2: DominantSpeakerNotification.DominantSpeakerNotification = DominantSpeakerNotification.DominantSpeakerNotification.read(input);
                        _args.dominantSpeakerNotification = value_2;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 3:
                    if (fieldType === thrift.Thrift.Type.STRUCT) {
                        const value_3: VideoUploadRequest.VideoUploadRequest = VideoUploadRequest.VideoUploadRequest.read(input);
                        _args.videoUploadRequest = value_3;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 4:
                    if (fieldType === thrift.Thrift.Type.STRUCT) {
                        const value_4: DominantSpeakerInfo.DominantSpeakerInfo = DominantSpeakerInfo.DominantSpeakerInfo.read(input);
                        _args.dominantSpeakerSignalingInfo = value_4;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 5:
                    if (fieldType === thrift.Thrift.Type.STRUCT) {
                        const value_5: BweDebugInfo.BweDebugInfo = BweDebugInfo.BweDebugInfo.read(input);
                        _args.bweDebugInfo = value_5;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 6:
                    if (fieldType === thrift.Thrift.Type.STRUCT) {
                        const value_6: DebugInfo.DebugInfo = DebugInfo.DebugInfo.read(input);
                        _args.debugInfo = value_6;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 7:
                    if (fieldType === thrift.Thrift.Type.STRUCT) {
                        const value_7: VideoUploadInfo.VideoUploadInfo = VideoUploadInfo.VideoUploadInfo.read(input);
                        _args.videoUploadSignalingInfo = value_7;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 8:
                    if (fieldType === thrift.Thrift.Type.STRUCT) {
                        const value_8: SignalingMessageToClient.SignalingMessageToClient = SignalingMessageToClient.SignalingMessageToClient.read(input);
                        _args.signalingMessageToClient = value_8;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 9:
                    if (fieldType === thrift.Thrift.Type.STRUCT) {
                        const value_9: SignalingMessageFromClient.SignalingMessageFromClient = SignalingMessageFromClient.SignalingMessageFromClient.read(input);
                        _args.signalingMessageFromClient = value_9;
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
        return new DataMessageBody(_args);
    }
}
