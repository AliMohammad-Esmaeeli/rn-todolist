import { View, FlatList } from 'react-native';

import { useState } from 'react';

import AppBar from '@/components/Todo/AppBar';
import TodoType from '@/components/Todo/TodoType';




export default function HomeScreen() {
  const [works, setWorks] = useState<TodoType[]>([]);

  return (
    <View className="flex-1 items-center justify-between bg-[#b9ffff] h-screen w-screen relative">
      {/* AppBar */}
      <AppBar />
    </View>
  );
}