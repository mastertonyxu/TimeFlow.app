export interface Activity {
  id: string;
  name: string;
  startTime: Date;
  endTime?: Date;
  energyLevel?: number;
  notes?: string;
  category?: string;
}