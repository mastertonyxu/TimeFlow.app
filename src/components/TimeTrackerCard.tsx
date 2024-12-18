import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Card, Text } from './ui';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useVoiceRecognition } from '../hooks/useVoiceRecognition';
import { Activity } from '../types';
import { formatTime } from '../utils/dateUtils';
import { useTheme } from '../contexts/ThemeContext';

export function TimeTrackerCard() {
  const [activity, setActivity] = useState<Activity | null>(null);
  const { isRecording, startRecording, stopRecording } = useVoiceRecognition();
  const { colors } = useTheme();

  const startActivity = () => {
    setActivity({
      id: Date.now().toString(),
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
    <Card>
      <Text style={styles.title}>Time Tracker</Text>
      
      <View style={styles.buttonContainer}>
        {!activity && (
          <Button
            onPress={startActivity}
            mode="contained"
            icon={<Icon name="play" size={20} color="white" />}
          >
            Start Activity
          </Button>
        )}
        
        {activity && !activity.endTime && (
          <Button
            onPress={stopActivity}
            mode="contained"
            color={colors.error}
            icon={<Icon name="stop" size={20} color="white" />}
          >
            Stop
          </Button>
        )}
        
        <Button
          onPress={isRecording ? stopRecording : startRecording}
          mode="outlined"
          color={isRecording ? colors.error : colors.primary}
          icon={<Icon name="microphone" size={20} color={isRecording ? colors.error : colors.primary} />}
        >
          {isRecording ? 'Recording...' : 'Voice Command'}
        </Button>
      </View>

      {activity && (
        <View style={styles.activityInfo}>
          <View style={styles.row}>
            <Text>Current Activity:</Text>
            <Text style={styles.value}>{activity.name}</Text>
          </View>
          
          <View style={styles.row}>
            <Text>Started:</Text>
            <Text style={styles.value}>{formatTime(activity.startTime)}</Text>
          </View>

          {activity.endTime && (
            <View style={styles.row}>
              <Text>Ended:</Text>
              <Text style={styles.value}>{formatTime(activity.endTime)}</Text>
            </View>
          )}
        </View>
      )}
    </Card>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 16,
  },
  activityInfo: {
    gap: 12,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  value: {
    fontWeight: '600',
  },
});