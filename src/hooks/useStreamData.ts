/**
 * @description Custom hook to simulate and manage highly optimized, streaming data fetching.
 * @description Replaces traditional loading spinners with asynchronous, observable data flow.
 * @param {boolean} shouldStream - If true, the hook simulates streaming behavior.
 * @param {any} initialData - Initial data payload or null.
 * @returns {{ data: any, isLoading: boolean, error: Error | null }}
 */
import { useState, useEffect, useCallback } from 'react';

// Helper to simulate random, varying latency
const simulateLatency = (minMs: number, maxMs: number) => {
    return Math.random() * (maxMs - minMs) + minMs;
};

export const useStreamData = (shouldStream: boolean, initialData: any = null) => {
    const [data, setData] = useState<any>(initialData);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null);

    const fetchData = useCallback(async (simulateStream: boolean) => {
        setIsLoading(true);
        setError(null);
        
        // Reset data for a fresh run
        setData(initialData);

        // 1. Simulate Initial Latency
        await new Promise(resolve => setTimeout(resolve, simulateLatency(300, 800)));
        
        if (!simulateStream) {
            // For standard API calls
            setData(initialData); 
            setIsLoading(false);
            return { data: initialData, isLoading: false };
        }

        // 2. Simulation of Streamed Data Flow
        let currentData = initialData;
        let step = 1;
        
        const streamInterval = setInterval(() => {
            let nextData = null;
            let message = "";

            if (step === 1) {
                message = "Establishing secure connection...";
                currentData = { status: "CONNECTING" };
            } else if (step === 2) {
                message = "Processing live data feeds...";
                currentData = { status: "STREAMING" };
            } else if (step === 3) {
                message = "Synthesizing results...";
                currentData = { status: "SYNTHESIZING" };
            } else {
                clearInterval(streamInterval);
                setIsLoading(false);
                // Final data resolution
                setData(initialData); 
                return;
            }
            
            setData(currentData);
            
        }, 1000);

        // Simulation End
        await new Promise(resolve => setTimeout(resolve, 3500));

        clearInterval(streamInterval);
        setIsLoading(false);
        return { data: initialData, isLoading: false };

    }, [initialData, simulateStream]);

    return { data, isLoading, error, fetchData };
};