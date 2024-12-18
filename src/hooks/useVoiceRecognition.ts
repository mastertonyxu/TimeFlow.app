import { useState, useCallback } from 'react';
import Voice from '@react-native-community/voice';

export function useVoiceRecognition() {
  const [isRecording, setIsRecording] = useState(false);
  const [results, setResults] = useState<string[]>([]);

  const startRecording = useCallback(async () => {
    try {
      await Voice.start('en-US');
      setIsRecording(true);
    } catch (error) {
      console.error('Error starting voice recognition:', error);
    }
  }, []);

  const stopRecording = useCallback(async () => {
    try {
      await Voice.stop();
      setIsRecording(false);
    } catch (error) {
      console.error('Error stopping voice recognition:', error);
    }
  }, []);

  return {
    isRecording,
    results,
    startRecording,
    stopRecording,
  };
}