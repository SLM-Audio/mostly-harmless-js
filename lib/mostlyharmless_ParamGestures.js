import {mhFunctionExists} from "./mostlyharmless_Utils.js";

export function mhBeginParamGesture(pid) {
    if(!mhFunctionExists(window.beginParamGesture)) {
        console.log("Warning: beginParamGesture not found in backend");
        return;
    }
    window.beginParamGesture({
        "paramId": pid,
        "value": 0.0
    });
}

export function mhSetParamValue(pid, value) {
    if(!mhFunctionExists(window.setParamValue)) {
        console.log("Warning: setParamValue not found in backend");
        return;
    }
    const args = {
        paramId: pid,
        value: parseFloat(value)
    };
    window.setParamValue(args);
}

export function mhEndParamGesture(pid) {
    if(!mhFunctionExists(window.endParamGesture)) {
        console.log("Warning: endParamGesture not found in backend");
        return;
    }
    window.endParamGesture({
        "paramId": pid,
        "value": 0.0
    });
}
