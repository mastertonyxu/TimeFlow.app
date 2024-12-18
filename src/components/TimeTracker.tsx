import React, { useState } from 'react';
import { Play, Pause, StopCircle, Mic } from 'lucide-react';
import type { Activity } from '../types';

export function TimeTracker() {
  const [activity, setActivity] = useState<Activity | null>(null);
  const [isRecording, setIsRecording] = useState(false);

  const startActivity = () => {
    setActivity({
      id: crypto.randomUUID(),
      name: 'New Activity',
      startTime: new Date(),
    });
  };

  const stopActivity = () => {
    if (activity) {
      setActivity({ ...activity, endTime: new Date() });
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full">
      <h2 className="text-2xl font-bold mb-4">Time Tracker</h2>
      
      <div className="flex items-center gap-4 mb-6">
        {!activity && (
          <button
            onClick={startActivity}
            className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
          >
            <Play size={20} />
            Start Activity
          </button>
        )}
        
        {activity && !activity.endTime && (
          <button
            onClick={stopActivity}
            className="flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
          >
            <StopCircle size={20} />
            Stop
          </button>
        )}
        
        <button
          onClick={() => setIsRecording(!isRecording)}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg ${
            isRecording
              ? 'bg-red-100 text-red-600'
              : 'bg-gray-100 text-gray-600'
          } hover:bg-opacity-80`}
        >
          <Mic size={20} />
          {isRecording ? 'Recording...' : 'Voice Command'}
        </button>
      </div>

      {activity && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-gray-600">Current Activity:</span>
            <span className="font-medium">{activity.name}</span>
          </div>
          
          <div className="flex items-center justify-between">
            <span className="text-gray-600">Started:</span>
            <span className="font-medium">
              {activity.startTime.toLocaleTimeString()}
            </span>
          </div>

          {activity.endTime && (
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Ended:</span>
              <span className="font-medium">
                {activity.endTime.toLocaleTimeString()}
              </span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}