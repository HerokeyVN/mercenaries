/* tslint:disable */
/* eslint-disable */
/*
 * Autogenerated by @creditkarma/thrift-typescript v3.7.6
 * DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
*/
import * as thrift from "thrift";
import * as ResolutionData from "./ResolutionData";
export interface IRenderResolutionMessageFromClientArgs {
    renderResolutionMap?: Map<string, Map<number, ResolutionData.ResolutionData>>;
}
export class RenderResolutionMessageFromClient {
    public renderResolutionMap?: Map<string, Map<number, ResolutionData.ResolutionData>>;
    constructor(args?: IRenderResolutionMessageFromClientArgs) {
        if (args != null && args.renderResolutionMap != null) {
            this.renderResolutionMap = args.renderResolutionMap;
        }
    }
    public write(output: thrift.TProtocol): void {
        output.writeStructBegin("RenderResolutionMessageFromClient");
        if (this.renderResolutionMap != null) {
            output.writeFieldBegin("renderResolutionMap", thrift.Thrift.Type.MAP, 1);
            output.writeMapBegin(thrift.Thrift.Type.STRING, thrift.Thrift.Type.MAP, this.renderResolutionMap.size);
            this.renderResolutionMap.forEach((value_1: Map<number, ResolutionData.ResolutionData>, key_1: string): void => {
                output.writeString(key_1);
                output.writeMapBegin(thrift.Thrift.Type.I32, thrift.Thrift.Type.STRUCT, value_1.size);
                value_1.forEach((value_2: ResolutionData.ResolutionData, key_2: number): void => {
                    output.writeI32(key_2);
                    value_2.write(output);
                });
                output.writeMapEnd();
            });
            output.writeMapEnd();
            output.writeFieldEnd();
        }
        output.writeFieldStop();
        output.writeStructEnd();
        return;
    }
    public static read(input: thrift.TProtocol): RenderResolutionMessageFromClient {
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
                        const value_3: Map<string, Map<number, ResolutionData.ResolutionData>> = new Map<string, Map<number, ResolutionData.ResolutionData>>();
                        const metadata_1: thrift.TMap = input.readMapBegin();
                        const size_1: number = metadata_1.size;
                        for (let i_1: number = 0; i_1 < size_1; i_1++) {
                            const key_3: string = input.readString();
                            const value_4: Map<number, ResolutionData.ResolutionData> = new Map<number, ResolutionData.ResolutionData>();
                            const metadata_2: thrift.TMap = input.readMapBegin();
                            const size_2: number = metadata_2.size;
                            for (let i_2: number = 0; i_2 < size_2; i_2++) {
                                const key_4: number = input.readI32();
                                const value_5: ResolutionData.ResolutionData = ResolutionData.ResolutionData.read(input);
                                value_4.set(key_4, value_5);
                            }
                            input.readMapEnd();
                            value_3.set(key_3, value_4);
                        }
                        input.readMapEnd();
                        _args.renderResolutionMap = value_3;
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
        return new RenderResolutionMessageFromClient(_args);
    }
}
