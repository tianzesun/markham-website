// Minimal typings for the Web Speech API, which TypeScript's DOM lib doesn't include

export interface SpeechRecognitionResultEvent {
  resultIndex: number;
  results: ArrayLike<ArrayLike<{ transcript: string }> & { isFinal: boolean }>;
}

export interface ISpeechRecognition extends EventTarget {
  continuous: boolean;
  interimResults: boolean;
  lang: string;
  onresult: ((event: SpeechRecognitionResultEvent) => void) | null;
  onerror: ((event: { error?: string }) => void) | null;
  onend: (() => void) | null;
  start(): void;
  stop(): void;
  abort(): void;
}

interface SpeechRecognitionConstructor {
  new (): ISpeechRecognition;
}

declare global {
  interface Window {
    SpeechRecognition?: SpeechRecognitionConstructor;
    webkitSpeechRecognition?: SpeechRecognitionConstructor;
  }
}

// Returns a configured recognizer, or null in browsers without speech recognition (e.g. Firefox)
export const createSpeechRecognition = (continuous: boolean): ISpeechRecognition | null => {
  if (typeof window === 'undefined') return null;
  const SpeechRecognitionAPI = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognitionAPI) return null;

  const recognition = new SpeechRecognitionAPI();
  recognition.continuous = continuous;
  recognition.interimResults = true;
  recognition.lang = 'en-CA';
  return recognition;
};

// Errors that mean listening can't continue, as opposed to 'no-speech' or 'aborted'
export const isFatalSpeechError = (error?: string) =>
  error === 'not-allowed' || error === 'service-not-allowed' || error === 'audio-capture';
