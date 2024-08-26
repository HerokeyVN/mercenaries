/* tslint:disable */
/* eslint-disable */
/*
 * Autogenerated by @creditkarma/thrift-typescript v3.7.6
 * DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
*/
import * as thrift from "thrift";
import * as State from "./State";
export interface ISyncPayloadArgs {
    stateStore?: Map<string, State.State>;
    stateStoreV2?: Map<number, State.State>;
}
export class SyncPayload {
    public stateStore?: Map<string, State.State>;
    public stateStoreV2?: Map<number, State.State>;
    constructor(args?: ISyncPayloadArgs) {
        if (args != null && args.stateStore != null) {
            this.stateStore = args.stateStore;
        }
        if (args != null && args.stateStoreV2 != null) {
            this.stateStoreV2 = args.stateStoreV2;
        }
    }
    public write(output: thrift.TProtocol): void {
        output.writeStructBegin("SyncPayload");
        if (this.stateStore != null) {
            output.writeFieldBegin("stateStore", thrift.Thrift.Type.MAP, 1);
            output.writeMapBegin(thrift.Thrift.Type.STRING, thrift.Thrift.Type.STRUCT, this.stateStore.size);
            this.stateStore.forEach((value_1: State.State, key_1: string): void => {
                output.writeString(key_1);
                value_1.write(output);
            });
            output.writeMapEnd();
            output.writeFieldEnd();
        }
        if (this.stateStoreV2 != null) {
            output.writeFieldBegin("stateStoreV2", thrift.Thrift.Type.MAP, 4);
            output.writeMapBegin(thrift.Thrift.Type.I32, thrift.Thrift.Type.STRUCT, this.stateStoreV2.size);
            this.stateStoreV2.forEach((value_2: State.State, key_2: number): void => {
                output.writeI32(key_2);
                value_2.write(output);
            });
            output.writeMapEnd();
            output.writeFieldEnd();
        }
        output.writeFieldStop();
        output.writeStructEnd();
        return;
    }
    public static read(input: thrift.TProtocol): SyncPayload {
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
                        const value_3: Map<string, State.State> = new Map<string, State.State>();
                        const metadata_1: thrift.TMap = input.readMapBegin();
                        const size_1: number = metadata_1.size;
                        for (let i_1: number = 0; i_1 < size_1; i_1++) {
                            const key_3: string = input.readString();
                            const value_4: State.State = State.State.read(input);
                            value_3.set(key_3, value_4);
                        }
                        input.readMapEnd();
                        _args.stateStore = value_3;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 4:
                    if (fieldType === thrift.Thrift.Type.MAP) {
                        const value_5: Map<number, State.State> = new Map<number, State.State>();
                        const metadata_2: thrift.TMap = input.readMapBegin();
                        const size_2: number = metadata_2.size;
                        for (let i_2: number = 0; i_2 < size_2; i_2++) {
                            const key_4: number = input.readI32();
                            const value_6: State.State = State.State.read(input);
                            value_5.set(key_4, value_6);
                        }
                        input.readMapEnd();
                        _args.stateStoreV2 = value_5;
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
        return new SyncPayload(_args);
    }
}
