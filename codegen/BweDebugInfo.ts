/* tslint:disable */
/* eslint-disable */
/*
 * Autogenerated by @creditkarma/thrift-typescript v3.7.6
 * DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
*/
import * as thrift from "thrift";
import * as ReceiverBottleneck from "./ReceiverBottleneck";
export interface IBweDebugInfoArgs {
    bottleneckUplinksByLayer?: Map<number, ReceiverBottleneck.ReceiverBottleneck>;
}
export class BweDebugInfo {
    public bottleneckUplinksByLayer?: Map<number, ReceiverBottleneck.ReceiverBottleneck>;
    constructor(args?: IBweDebugInfoArgs) {
        if (args != null && args.bottleneckUplinksByLayer != null) {
            this.bottleneckUplinksByLayer = args.bottleneckUplinksByLayer;
        }
    }
    public write(output: thrift.TProtocol): void {
        output.writeStructBegin("BweDebugInfo");
        if (this.bottleneckUplinksByLayer != null) {
            output.writeFieldBegin("bottleneckUplinksByLayer", thrift.Thrift.Type.MAP, 1);
            output.writeMapBegin(thrift.Thrift.Type.I32, thrift.Thrift.Type.STRUCT, this.bottleneckUplinksByLayer.size);
            this.bottleneckUplinksByLayer.forEach((value_1: ReceiverBottleneck.ReceiverBottleneck, key_1: number): void => {
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
    public static read(input: thrift.TProtocol): BweDebugInfo {
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
                    if (fieldType === thrift.Thrift.Type.MAP) {
                        const value_2: Map<number, ReceiverBottleneck.ReceiverBottleneck> = new Map<number, ReceiverBottleneck.ReceiverBottleneck>();
                        const metadata_1: thrift.TMap = input.readMapBegin();
                        const size_1: number = metadata_1.size;
                        for (let i_1: number = 0; i_1 < size_1; i_1++) {
                            const key_2: number = input.readI32();
                            const value_3: ReceiverBottleneck.ReceiverBottleneck = ReceiverBottleneck.ReceiverBottleneck.read(input);
                            value_2.set(key_2, value_3);
                        }
                        input.readMapEnd();
                        _args.bottleneckUplinksByLayer = value_2;
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
        return new BweDebugInfo(_args);
    }
}
