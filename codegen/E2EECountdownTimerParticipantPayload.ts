/* tslint:disable */
/* eslint-disable */
/*
 * Autogenerated by @creditkarma/thrift-typescript v3.7.6
 * DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
*/
import * as thrift from "thrift";
import * as CountdownTimer from "./CountdownTimer";
export interface IE2EECountdownTimerParticipantPayloadArgs {
    current_timer?: CountdownTimer.CountdownTimer;
}
export class E2EECountdownTimerParticipantPayload {
    public current_timer?: CountdownTimer.CountdownTimer;
    constructor(args?: IE2EECountdownTimerParticipantPayloadArgs) {
        if (args != null && args.current_timer != null) {
            this.current_timer = args.current_timer;
        }
    }
    public write(output: thrift.TProtocol): void {
        output.writeStructBegin("E2EECountdownTimerParticipantPayload");
        if (this.current_timer != null) {
            output.writeFieldBegin("current_timer", thrift.Thrift.Type.STRUCT, 1);
            this.current_timer.write(output);
            output.writeFieldEnd();
        }
        output.writeFieldStop();
        output.writeStructEnd();
        return;
    }
    public static read(input: thrift.TProtocol): E2EECountdownTimerParticipantPayload {
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
                        const value_1: CountdownTimer.CountdownTimer = CountdownTimer.CountdownTimer.read(input);
                        _args.current_timer = value_1;
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
        return new E2EECountdownTimerParticipantPayload(_args);
    }
}
