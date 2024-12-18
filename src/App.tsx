import React from 'react';
import { TimeTrackerCard } from './components/TimeTracker/TimeTrackerCard';
import { EnergyMatrixCard } from './components/EnergyMatrix/EnergyMatrixCard';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto space-y-6">
        <TimeTrackerCard />
        <EnergyMatrixCard />
      </div>
    </div>
  );
}