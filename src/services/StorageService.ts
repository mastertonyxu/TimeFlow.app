import AsyncStorage from '@react-native-async-storage/async-storage';
import { Activity } from '../types';

class StorageService {
  private static ACTIVITIES_KEY = 'timeflow_activities';

  async saveActivity(activity: Activity): Promise<void> {
    try {
      const activities = await this.getActivities();
      activities.push(activity);
      await AsyncStorage.setItem(
        StorageService.ACTIVITIES_KEY,
        JSON.stringify(activities)
      );
    } catch (error) {
      console.error('Error saving activity:', error);
      throw error;
    }
  }

  async getActivities(): Promise<Activity[]> {
    try {
      const data = await AsyncStorage.getItem(StorageService.ACTIVITIES_KEY);
      return data ? JSON.parse(data) : [];
    } catch (error) {
      console.error('Error getting activities:', error);
      throw error;
    }
  }

  async clearActivities(): Promise<void> {
    try {
      await AsyncStorage.removeItem(StorageService.ACTIVITIES_KEY);
    } catch (error) {
      console.error('Error clearing activities:', error);
      throw error;
    }
  }
}

export const storageService = new StorageService();