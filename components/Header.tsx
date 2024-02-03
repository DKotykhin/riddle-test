import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { SvgBell, SvgLight, SvgStar } from '../constants/svg';

const NotificationBadge = ({ count, colors }: { count: number, colors: string[] }) => (
  <View style={styles.badge}>
    <LinearGradient
      colors={colors}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.gradient}
    >
      <Text style={styles.badgeText}>{count}</Text>
    </LinearGradient>
  </View>
);

export const Header = () => {

  const stars = 954;
  const bells = 2;
  const lights = 5;

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#F8B469', '#FF708A']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.gradient}
      >
        <View style={styles.star_box}>
          <SvgStar />
          <Text style={styles.star_text}>{stars}</Text>
        </View>
      </LinearGradient>
      <View style={styles.prompt_wrapper}>
        <View style={styles.prompt_box}>
          <SvgBell />
          <NotificationBadge count={bells} colors={['#E75AC8', '#FF708A']} />
        </View>
        <View style={styles.prompt_box}>
          <SvgLight />
          <NotificationBadge count={lights} colors={['#7DCB44', '#6DBC33']} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 310,
    marginVertical: 20,
  },
  star_box: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5,
    borderRadius: 12,
    width: 71,
    height: 40,
  },
  star_text: {
    color: '#fff',
    fontSize: 14,
  },
  prompt_wrapper: {
    flexDirection: 'row',
    gap: 10,
  },
  prompt_box: {
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    width: 40,
    height: 40,
    backgroundColor: '#fff',
  },
  badge: {
    position: 'absolute',
    right: -10,
    top: -10,
    borderRadius: 10,
    padding: 3,
    minWidth: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  badgeText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  image_box: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 320,
    marginVertical: 10,
  },
  gradient: {
    padding: 2,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    minWidth: 20,
    minHeight: 20,
  },
});
