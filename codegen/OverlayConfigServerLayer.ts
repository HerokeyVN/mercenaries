/* tslint:disable */
/* eslint-disable */
/*
 * Autogenerated by @creditkarma/thrift-typescript v3.7.6
 * DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
*/
import * as thrift from "thrift";
export interface IOverlayConfigServerLayerArgs {
    values?: Map<number, number>;
}
export class OverlayConfigServerLayer {
    public values?: Map<number, number>;
    constructor(args?: IOverlayConfigServerLayerArgs) {
        if (args != null && args.values != null) {
            this.values = args.values;
        }
    }
    public write(output: thrift.TProtocol): void {
        output.writeStructBegin("OverlayConfigServerLayer");
        if (this.values != null) {
            output.writeFieldBegin("values", thrift.Thrift.Type.MAP, 1);
            output.writeMapBegin(thrift.Thrift.Type.I32, thrift.Thrift.Type.I32, this.values.size);
            this.values.forEach((value_1: number, key_1: number): void => {
                output.writeI32(key_1);
                output.writeI32(value_1);
            });
            output.writeMapEnd();
            output.writeFieldEnd();
        }
        output.writeFieldStop();
        output.writeStructEnd();
        return;
    }
    public static read(input: thrift.TProtocol): OverlayConfigServerLayer {
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
                        const value_2: Map<number, number> = new Map<number, number>();
                        const metadata_1: thrift.TMap = input.readMapBegin();
                        const size_1: number = metadata_1.size;
                        for (let i_1: number = 0; i_1 < size_1; i_1++) {
                            const key_2: number = input.readI32();
                            const value_3: number = input.readI32();
                            value_2.set(key_2, value_3);
                        }
                        input.readMapEnd();
                        _args.values = value_2;
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
        return new OverlayConfigServerLayer(_args);
    }
}
