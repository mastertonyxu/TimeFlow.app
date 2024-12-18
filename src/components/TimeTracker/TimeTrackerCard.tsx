import React from 'react';
import { Play, StopCircle, Mic } from 'lucide-react';
import { useActivityStore } from '../../store/activityStore';
import { ActivityDisplay } from './ActivityDisplay';
import { Button } from '../ui/Button';

export function TimeTrackerCard() {
  const { currentActivity, startActivity, stopActivity } = useActivityStore();
  const [isRecording, setIsRecording] = React.useState(false);

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-4">Time Tracker</h2>
      
      <div className="flex items-center gap-4 mb-6">
        {!currentActivity && (
          <Button
            onClick={() => startActivity('New Activity')}
            variant="primary"
            icon={<Play size={20} />}
          >
            Start Activity
          </Button>
        )}
        
        {currentActivity && !currentActivity.endTime && (
          <Button
            onClick={stopActivity}
            variant="danger"
            icon={<StopCircle size={20} />}
          >
            Stop
          </Button>
        )}
        
        <Button
          onClick={() => setIsRecording(!isRecording)}
          variant={isRecording ? 'danger-outline' : 'outline'}
          icon={<Mic size={20} />}
        >
          {isRecording ? 'Recording...' : 'Voice Command'}
        </Button>
      </div>

      {currentActivity && <ActivityDisplay activity={currentActivity} />}
    </div>
  );
}