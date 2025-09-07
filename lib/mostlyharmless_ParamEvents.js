const constructEventName = (pid) => {
    return pid + "_ChangedEvent";
}

const paramCallback = (ev) => {
    const pid = ev.detail["paramId"];
    const pidInt = parseInt(pid);
    const value = parseFloat(ev.detail["value"]);
    const customEvent = new CustomEvent(constructEventName(pid), {
        "detail": {
            "paramId": pidInt,
            "value": value
        }
    });
    document.dispatchEvent(customEvent);
};

export function mhSubscribeToParams() {
    document.addEventListener("param", paramCallback);
}

export function mhUnsubscribeFromParams() {
    document.removeEventListener("param", paramCallback);
}

export function mhAddParameterListener(pid, callback) {
    document.addEventListener(constructEventName(pid.toString()), callback);
}

export function mhRemoveParameterListener(pid, callback) {
    document.removeEventListener(constructEventName(pid.toString()), callback);
}

