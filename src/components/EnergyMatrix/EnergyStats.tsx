import React from 'react';

export function EnergyStats() {
  return (
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
  );
}