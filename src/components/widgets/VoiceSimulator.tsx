/**
 * @description Simulates the entire Voice-First interaction loop for the Markham website.
 * @description This component is the centerpiece of the polish, demonstrating
 *             the system's 'magic' to the visitor.
 */
import React, { useState, useCallback } from 'react';
import { MicIcon, LoaderIcon, VolumeUpIcon } from '@heroicons/react/24/outline';
import { useAnimation, useScroll} from 'framer-motion';

interface VoiceSimulatorProps {}

const VoiceSimulator: React.FC<VoiceSimulatorProps> = () => {
    const [status, setStatus] = useState<'idle' | 'listening' | 'processing' | 'responding'>('idle');
    const [transcript, setTranscript] = useState<string>("");
    const [finalAnswer, setFinalAnswer] = useState<string | null>(null);

    const handleMicrophoneToggle = useCallback(() => {
        if (status === 'listening' || status === 'processing' || status === 'responding') return;

        // Start Sequence
        setStatus('listening');
        setTranscript("Listening...");
        setFinalAnswer(null);
    }, [status]);

    const handleSimulationStep = useCallback(() => {
        if (status !== 'listening') return;

        // 1. TRANSCRIPTION SIMULATION
        setTimeout(() => {
            setTranscript("...Where can I find information on...");
            setStatus('processing');
        }, 1500);

        // 2. PROCESSING SIMULATION (AI Thinking)
        setTimeout(() => {
            setTranscript("...best garbage collection schedules for a multi-family dwelling?");
            setStatus('processing');
        }, 3000);
        
        // 3. RESPONSE SIMULATION
        setTimeout(() => {
            setFinalAnswer(
                "Based on your query, the municipal schedule indicates that for your dwelling type, bi-weekly pickup is standard. For specific dates, use the official Markham portal, or ask for the service code 'GARBAGE-SVC-901' for immediate routing."
            );
            setStatus('responding');
            // Trigger animation completion when response is ready
        }, 5500);

    }, [status]);

    const getButtonClasses = () => {
        switch (status) {
            case 'listening':
                return "bg-red-500 hover:bg-red-600";
            case 'processing':
            case 'responding':
                return "bg-gray-400 cursor-not-allowed";
            default:
                return "bg-indigo-600 hover:bg-indigo-700";
        }
    };

    return (
        <div className="p-8 bg-white shadow-2xl rounded-2xl border-t-4 border-indigo-600 shadow-indigo-200/50">
            <div className="flex items-center gap-3 mb-2">
                <VolumeUpIcon className="w-8 h-8 text-indigo-600" />
                <h3 className="text-2xl font-bold text-gray-800">Voice Command Interface</h3>
            </div>
            <p className="text-gray-600 mb-6">
                Say it, and let AI handle the rest. Seamless, instantaneous, and accessible to everyone.
            </p>

            {/* Main Control */}
            <div className="flex justify-center mb-8">
                <button 
                    onClick={handleMicrophoneToggle} 
                    disabled={status === 'listening' || status === 'processing' || status === 'responding'}
                    className={`p-5 rounded-full transition-all duration-300 shadow-xl ${getButtonClasses()} hover:scale-[1.05] active:scale-[0.98]`}
                >
                    {status === 'listening' ? (
                        <div className="relative flex items-center justify-center">
                            <span className="absolute inset-0 flex items-center justify-center">
                                <svg className="animate-pulse w-12 h-12 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4"></path></svg>
                            </span>
                            <span className="relative inline-flex rounded-full h-12 w-12 bg-red-500 flex items-center justify-center">
                                <MicIcon className="w-6 h-6 text-white" />
                            </span>
                        </div>
                    ) : (
                        <div className="flex items-center gap-2">
                            <MicIcon className="w-8 h-8 text-indigo-600" />
                            <span className="text-lg font-bold">Tap to Speak</span>
                        </div>
                    )}
                </button>
            </div>

            {/* Transcript Area */}
            <div className="mb-6 p-4 bg-indigo-50 rounded-xl border border-indigo-200">
                <p className="text-sm text-gray-500 mb-1">Transcription:</p>
                <p className={`font-medium ${status === 'listening' ? 'text-red-700' : 'text-gray-800'}`}>
                    {transcript || "Tap the microphone to begin, or click the 'Process' button to simulate."}
                </p>
            </div>

            {/* Final Answer Display */}
            {finalAnswer && (
                <div className="p-6 bg-green-50 border-l-4 border-green-600 rounded-lg shadow-lg">
                    <h4 className="text-lg font-semibold text-green-800 mb-2">AI Answer:</h4>
                    <p className="text-gray-700 italic">{finalAnswer}</p>
                </div>
            )}
            
            {/* Hidden button for programmatic simulation advancement */}
            <div style={{ display: 'none' }}>
                <button 
                    onClick={handleSimulationStep} 
                    disabled={status === 'idle'}
                    className={`block mt-8 py-3 px-6 rounded-lg font-semibold transition duration-300 ${getButtonClasses()}`}
                >
                    {status === 'idle' ? 'Simulate Full Workflow' : 'Step Complete'}
                </button>
            </div>
        </div>
    );
}

export default VoiceSimulator;