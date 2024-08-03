import { View, FlatList } from 'react-native';

import { useState } from 'react';

import AppBar from '@/components/Todo/AppBar';
import TodoType from '@/components/Todo/TodoType';
import Order from '@/components/Todo/Order';
import TodoItem from '@/components/Todo/TodoItem';
import NewTodoNotFound from '@/components/Todo/NewTodoNotFound';



export default function HomeScreen() {
  const [works, setWorks] = useState<TodoType[]>([]);

  return (
    <View className="flex-1 items-center justify-between bg-[#b9ffff] h-screen w-screen relative">
      {/* AppBar */}
      <AppBar />

      {/* Todo List */}
      <View className='flex justify-center items-center flex-col h-[85vh]'>
        {
          works.length != 0 ?
            <>
              <Order works={works} setWorks={setWorks} />
              <FlatList
                data={works}
                renderItem={(item) => <TodoItem item={item} works={works} setWorks={setWorks} />
                }
                keyExtractor={item => item.id}
              />
            </> :
            <NewTodoNotFound />
        }
      </View>
    </View>
  );
}