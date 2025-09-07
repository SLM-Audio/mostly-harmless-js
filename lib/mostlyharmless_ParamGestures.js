import {mhFunctionExists} from "./mostlyharmless_Utils.js";

export function mhBeginParamGesture(pid) {
    if(!mhFunctionExists(document.beginParamGesture)) {
        console.log("Warning: beginParamGesture not found in backend");
        return;
    }
    document.beginParamGesture({
        "paramId": pid,
        "value": 0.0
    });
}

export function mhSetParamValue(pid, value) {
    if(!mhFunctionExists(document.setParamValue)) {
        console.log("Warning: setParamValue not found in backend");
        return;
    }
    const args = {
        paramId: pid,
        value: parseFloat(value)
    };
    document.setParamValue(args);
}

export function mhEndParamGesture(pid) {
    if(!mhFunctionExists(document.endParamGesture)) {
        console.log("Warning: endParamGesture not found in backend");
        return;
    }
    document.endParamGesture({
        "paramId": pid,
        "value": 0.0
    });
}
