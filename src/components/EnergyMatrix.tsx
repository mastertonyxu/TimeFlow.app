import React from 'react';
import { Battery, BatteryCharging } from 'lucide-react';

export function EnergyMatrix() {
  const energyLevel = 75; // This would come from state management

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full">
      <h2 className="text-2xl font-bold mb-4">Energy Matrix</h2>
      
      <div className="flex items-center gap-4 mb-6">
        <div className="flex-1 bg-gray-200 rounded-full h-6">
          <div
            className="bg-blue-500 h-6 rounded-full transition-all duration-500"
            style={{ width: `${energyLevel}%` }}
          />
        </div>
        {energyLevel > 50 ? (
          <BatteryCharging className="text-green-500" size={24} />
        ) : (
          <Battery className="text-yellow-500" size={24} />
        )}
        <span className="font-bold text-lg">{energyLevel}%</span>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Peak Hours</h3>
          <p className="text-gray-600">10:00 AM - 2:00 PM</p>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Low Energy</h3>
          <p className="text-gray-600">4:00 PM - 6:00 PM</p>
        </div>
      </div>
    </div>
  );
}