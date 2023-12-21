import { useRef } from "react";

export default function useDebounce() {
    let timerId = useRef(null);

    const debouce = (callback, delay = 1000) => {
        clearTimeout(timerId.current);
        timerId.current = setTimeout(callback, delay)
    }

    return debouce
}
