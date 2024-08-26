/* tslint:disable */
/* eslint-disable */
/*
 * Autogenerated by @creditkarma/thrift-typescript v3.7.6
 * DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
*/
import * as thrift from "thrift";
import * as ProxygenCandidate from "./ProxygenCandidate";
export interface IProxygenAllocationArgs {
    candidates?: Array<ProxygenCandidate.ProxygenCandidate>;
    edgeRegion?: string;
}
export class ProxygenAllocation {
    public candidates?: Array<ProxygenCandidate.ProxygenCandidate>;
    public edgeRegion?: string;
    constructor(args?: IProxygenAllocationArgs) {
        if (args != null && args.candidates != null) {
            this.candidates = args.candidates;
        }
        if (args != null && args.edgeRegion != null) {
            this.edgeRegion = args.edgeRegion;
        }
    }
    public write(output: thrift.TProtocol): void {
        output.writeStructBegin("ProxygenAllocation");
        if (this.candidates != null) {
            output.writeFieldBegin("candidates", thrift.Thrift.Type.LIST, 1);
            output.writeListBegin(thrift.Thrift.Type.STRUCT, this.candidates.length);
            this.candidates.forEach((value_1: ProxygenCandidate.ProxygenCandidate): void => {
                value_1.write(output);
            });
            output.writeListEnd();
            output.writeFieldEnd();
        }
        if (this.edgeRegion != null) {
            output.writeFieldBegin("edgeRegion", thrift.Thrift.Type.STRING, 2);
            output.writeString(this.edgeRegion);
            output.writeFieldEnd();
        }
        output.writeFieldStop();
        output.writeStructEnd();
        return;
    }
    public static read(input: thrift.TProtocol): ProxygenAllocation {
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
                        const value_2: Array<ProxygenCandidate.ProxygenCandidate> = new Array<ProxygenCandidate.ProxygenCandidate>();
                        const metadata_1: thrift.TList = input.readListBegin();
                        const size_1: number = metadata_1.size;
                        for (let i_1: number = 0; i_1 < size_1; i_1++) {
                            const value_3: ProxygenCandidate.ProxygenCandidate = ProxygenCandidate.ProxygenCandidate.read(input);
                            value_2.push(value_3);
                        }
                        input.readListEnd();
                        _args.candidates = value_2;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 2:
                    if (fieldType === thrift.Thrift.Type.STRING) {
                        const value_4: string = input.readString();
                        _args.edgeRegion = value_4;
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
        return new ProxygenAllocation(_args);
    }
}
