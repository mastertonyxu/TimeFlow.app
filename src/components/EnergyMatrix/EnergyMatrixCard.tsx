import React from 'react';
import { Battery, BatteryCharging } from 'lucide-react';
import { useEnergyStore } from '../../store/energyStore';
import { EnergyStats } from './EnergyStats';
import { ProgressBar } from '../ui/ProgressBar';

export function EnergyMatrixCard() {
  const { currentLevel } = useEnergyStore();

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-4">Energy Matrix</h2>
      
      <div className="flex items-center gap-4 mb-6">
        <ProgressBar progress={currentLevel} />
        {currentLevel > 50 ? (
          <BatteryCharging className="text-green-500" size={24} />
        ) : (
          <Battery className="text-yellow-500" size={24} />
        )}
        <span className="font-bold text-lg">{currentLevel}%</span>
      </div>

      <EnergyStats />
    </div>
  );
}