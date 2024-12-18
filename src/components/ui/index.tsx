import React from 'react';
import {
  TouchableOpacity,
  View,
  Text as RNText,
  StyleSheet,
  ViewStyle,
  TextStyle,
  TouchableOpacityProps,
} from 'react-native';
import { useTheme } from '../../contexts/ThemeContext';

interface CardProps {
  children: React.ReactNode;
  style?: ViewStyle;
}

export function Card({ children, style }: CardProps) {
  const { colors } = useTheme();
  
  return (
    <View style={[styles.card, { backgroundColor: colors.surface }, style]}>
      {children}
    </View>
  );
}

interface TextProps {
  children: React.ReactNode;
  style?: TextStyle;
}

export function Text({ children, style }: TextProps) {
  const { colors } = useTheme();
  
  return (
    <RNText style={[{ color: colors.text }, style]}>
      {children}
    </RNText>
  );
}

interface ButtonProps extends TouchableOpacityProps {
  children: React.ReactNode;
  mode?: 'contained' | 'outlined';
  icon?: React.ReactNode;
  color?: string;
}

export function Button({
  children,
  mode = 'contained',
  icon,
  color,
  style,
  ...props
}: ButtonProps) {
  const { colors } = useTheme();
  const buttonColor = color || colors.primary;
  
  const buttonStyles = [
    styles.button,
    mode === 'contained'
      ? { backgroundColor: buttonColor }
      : {
          borderColor: buttonColor,
          borderWidth: 1,
        },
    style,
  ];

  const textColor = mode === 'contained' ? 'white' : buttonColor;

  return (
    <TouchableOpacity style={buttonStyles} {...props}>
      {icon && <View style={styles.icon}>{icon}</View>}
      <RNText style={[styles.buttonText, { color: textColor }]}>
        {children}
      </RNText>
    </TouchableOpacity>
  );
}

interface ProgressBarProps {
  progress: number;
  color?: string;
  style?: ViewStyle;
}

export function ProgressBar({ progress, color, style }: ProgressBarProps) {
  const { colors } = useTheme();
  const barColor = color || colors.primary;
  
  return (
    <View style={[styles.progressTrack, style]}>
      <View
        style={[
          styles.progressFill,
          {
            backgroundColor: barColor,
            width: `${progress * 100}%`,
          },
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 16,
    borderRadius: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
    borderRadius: 8,
  },
  buttonText: {
    fontWeight: '600',
  },
  icon: {
    marginRight: 8,
  },
  progressTrack: {
    height: 8,
    backgroundColor: '#e5e7eb',
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    borderRadius: 4,
  },
});