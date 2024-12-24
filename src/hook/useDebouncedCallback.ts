import { IDebouncedCallback } from "@eLearning/types/types";
import { useRef } from "react";


export const useDebouncedCallback = (callback: (...args: any[]) => void, delay: number): IDebouncedCallback => {
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    return (...args: any[]) => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
        timeoutRef.current = setTimeout(() => {
            callback(...args);
        }, delay);
    };
}