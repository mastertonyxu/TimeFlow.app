import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { TimeTrackerCard } from '../components/TimeTrackerCard';
import { EnergyMatrixCard } from '../components/EnergyMatrixCard';
import { useTheme } from '../contexts/ThemeContext';

export function HomeScreen() {
  const { colors } = useTheme();

  return (
    <ScrollView style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={styles.content}>
        <TimeTrackerCard />
        <EnergyMatrixCard />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 16,
    gap: 16,
  },
});