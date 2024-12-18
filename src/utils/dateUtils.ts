import { format } from 'date-fns';

export function formatTime(date: Date): string {
  return format(date, 'h:mm a');
}

export function formatDuration(startDate: Date, endDate: Date): string {
  const duration = endDate.getTime() - startDate.getTime();
  const minutes = Math.floor(duration / 1000 / 60);
  const hours = Math.floor(minutes / 60);
  
  if (hours > 0) {
    return `${hours}h ${minutes % 60}m`;
  }
  return `${minutes}m`;
}