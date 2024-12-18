import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Card, Text, ProgressBar } from './ui';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useTheme } from '../contexts/ThemeContext';

export function EnergyMatrixCard() {
  const energyLevel = 75;
  const { colors } = useTheme();

  return (
    <Card>
      <Text style={styles.title}>Energy Matrix</Text>
      
      <View style={styles.progressContainer}>
        <ProgressBar
          progress={energyLevel / 100}
          color={colors.primary}
          style={styles.progress}
        />
        <Icon
          name={energyLevel > 50 ? 'battery-charging' : 'battery'}
          size={24}
          color={energyLevel > 50 ? colors.success : colors.warning}
        />
        <Text style={styles.percentage}>{energyLevel}%</Text>
      </View>

      <View style={styles.statsContainer}>
        <View style={styles.statCard}>
          <Text style={styles.statTitle}>Peak Hours</Text>
          <Text style={styles.statValue}>10:00 AM - 2:00 PM</Text>
        </View>
        
        <View style={styles.statCard}>
          <Text style={styles.statTitle}>Low Energy</Text>
          <Text style={styles.statValue}>4:00 PM - 6:00 PM</Text>
        </View>
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  progressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 24,
  },
  progress: {
    flex: 1,
    height: 8,
  },
  percentage: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  statsContainer: {
    flexDirection: 'row',
    gap: 16,
  },
  statCard: {
    flex: 1,
    backgroundColor: '#f3f4f6',
    padding: 12,
    borderRadius: 8,
  },
  statTitle: {
    fontWeight: '600',
    marginBottom: 4,
  },
  statValue: {
    color: '#6b7280',
  },
});