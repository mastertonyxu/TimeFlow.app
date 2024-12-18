export interface Activity {
  id: string;
  name: string;
  category?: string;
  startTime: Date;
  endTime?: Date;
  energyLevel?: number;
  notes?: string;
  voiceNoteUrl?: string;
  transcription?: string;
}

export interface VoiceCommand {
  type: 'START_ACTIVITY' | 'STOP_ACTIVITY' | 'SET_ENERGY' | 'ADD_NOTE';
  payload: any;
  timestamp: Date;
}

export interface AppState {
  currentActivity: Activity | null;
  isRecording: boolean;
  voiceCommandActive: boolean;
  energyLevel: number;
  lastVoiceCommand: VoiceCommand | null;
}