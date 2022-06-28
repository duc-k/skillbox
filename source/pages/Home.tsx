import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Platform,
  FlatList,
} from 'react-native';

import Button from '../components/Button';
import Skills from '../components/Skills';

interface SkillData {
  id: string;
  name: string;
}

export default function Home() {
  const [skill, setSkill] = useState('');
  const [skills, setSkills] = useState<SkillData[]>([]);
  const [greeting, setGreeting] = useState('');

  function handleAddSkill() {
    const data = {
      id: String(new Date().getTime()),
      name: skill,
    };

    setSkills(oldState => [...oldState, data]);
  }

  function handleRemoveSkill(id: string) {
    setSkills(oldState => oldState.filter(skill => skill.id !== id));
  }

  useEffect(() => {
    const currentHour = new Date().getHours();

    if (currentHour < 12) {
      setGreeting('Bom dia');
    } else if (currentHour >= 12 && currentHour < 18) {
      setGreeting('Boa tarde');
    } else {
      setGreeting('Boa noite');
    }
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo, Ricardo! 👋</Text>
      <Text style={styles.greeting}>{greeting}</Text>

      <TextInput
        style={styles.input}
        placeholder="Nova habilidade"
        placeholderTextColor="#555"
        onChangeText={setSkill}
      />

      <Button title="Adicionar" onPress={handleAddSkill} />

      <Text
        style={[
          styles.title,
          {
            marginBottom: 30,
            marginTop: 50,
          },
        ]}>
        Minhas Habilidades
      </Text>

      <FlatList
        data={skills}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <Skills
            skill={item.name}
            onPress={() => handleRemoveSkill(item.id)}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
    paddingVertical: 70,
  },
  title: {
    fontSize: 22,
    color: '#555',
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#f3f4f6',
    fontSize: 18,
    padding: Platform.OS === 'ios' ? 15 : 10,
    marginTop: 20,
    borderRadius: 7,
  },
  greeting: {
    color: '#888',
    fontSize: 15,
  },
});
