import React from 'react';
import { Activity } from '../../types/activity';
import { formatTime } from '../../utils/dateUtils';

interface ActivityDisplayProps {
  activity: Activity;
}

export function ActivityDisplay({ activity }: ActivityDisplayProps) {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <span className="text-gray-600">Current Activity:</span>
        <span className="font-medium">{activity.name}</span>
      </div>
      
      <div className="flex items-center justify-between">
        <span className="text-gray-600">Started:</span>
        <span className="font-medium">{formatTime(activity.startTime)}</span>
      </div>

      {activity.endTime && (
        <div className="flex items-center justify-between">
          <span className="text-gray-600">Ended:</span>
          <span className="font-medium">{formatTime(activity.endTime)}</span>
        </div>
      )}
    </div>
  );
}