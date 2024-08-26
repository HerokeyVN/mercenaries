/* tslint:disable */
/* eslint-disable */
/*
 * Autogenerated by @creditkarma/thrift-typescript v3.7.6
 * DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
*/
import * as thrift from "thrift";
export interface IScreenShareInfoArgs {
    screenSharingUserIds?: Array<number | Int64>;
}
export class ScreenShareInfo {
    public screenSharingUserIds?: Array<Int64>;
    constructor(args?: IScreenShareInfoArgs) {
        if (args != null && args.screenSharingUserIds != null) {
            this.screenSharingUserIds = args.screenSharingUserIds;
        }
    }
    public write(output: thrift.TProtocol): void {
        output.writeStructBegin("ScreenShareInfo");
        if (this.screenSharingUserIds != null) {
            output.writeFieldBegin("screenSharingUserIds", thrift.Thrift.Type.LIST, 1);
            output.writeListBegin(thrift.Thrift.Type.I64, this.screenSharingUserIds.length);
            this.screenSharingUserIds.forEach((value_1: Int64): void => {
                output.writeI64(value_1);
            });
            output.writeListEnd();
            output.writeFieldEnd();
        }
        output.writeFieldStop();
        output.writeStructEnd();
        return;
    }
    public static read(input: thrift.TProtocol): ScreenShareInfo {
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
                    if (fieldType === thrift.Thrift.Type.LIST) {
                        const value_2: Array<Int64> = new Array<Int64>();
                        const metadata_1: thrift.TList = input.readListBegin();
                        const size_1: number = metadata_1.size;
                        for (let i_1: number = 0; i_1 < size_1; i_1++) {
                            const value_3: Int64 = input.readI64();
                            value_2.push(value_3);
                        }
                        input.readListEnd();
                        _args.screenSharingUserIds = value_2;
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
        return new ScreenShareInfo(_args);
    }
}
