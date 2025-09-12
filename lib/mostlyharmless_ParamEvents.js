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
    window.dispatchEvent(customEvent);
};

export function mhSubscribeToParams() {
    window.addEventListener("param", paramCallback);
}

export function mhUnsubscribeFromParams() {
    window.removeEventListener("param", paramCallback);
}

export function mhAddParameterListener(pid, callback) {
    window.addEventListener(constructEventName(pid.toString()), callback);
}

export function mhRemoveParameterListener(pid, callback) {
    window.removeEventListener(constructEventName(pid.toString()), callback);
}

