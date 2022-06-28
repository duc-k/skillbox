import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  TouchableOpacityProps,
} from 'react-native';

interface SkillsProps extends TouchableOpacityProps {
  skill: string;
}

export default function Skills({skill, ...rest}: SkillsProps) {
  return (
    <TouchableOpacity style={styles.buttonSkill} {...rest}>
      <Text style={styles.textSkill}>{skill}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonSkill: {
    backgroundColor: '#f3f4f6',
    borderRadius: 7,
    padding: 15,
    alignItems: 'center',
    marginVertical: 5,
  },
  textSkill: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#555',
  },
});
