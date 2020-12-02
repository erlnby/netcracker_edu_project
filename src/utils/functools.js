export function throttle(f, t) {
    let previousCall = 0;
    let lastCall = 0;
    return function (args) {
        previousCall = lastCall;
        lastCall = Date.now();
        if (lastCall - previousCall > t) {
            f(args);
        }
    }
}

export function debounce(f, t) {
    let previousCall = 0;
    let lastCall = 0;
    let lastCallTimer = null
    return function (args) {
        previousCall = lastCall;
        lastCall = Date.now();
        if (lastCall - previousCall <= t) {
            clearTimeout(lastCallTimer);
        }
        lastCallTimer = setTimeout(() => f(args), t);
    }
}