import { Image, ListRenderItemInfo, TouchableOpacity, Text, View } from "react-native";
import Feather from '@expo/vector-icons/Feather';
import { Dispatch, SetStateAction } from 'react';
import TodoType from './TodoType';

interface PropsType {
    item: ListRenderItemInfo<TodoType>,
    setWorks: Dispatch<SetStateAction<TodoType[]>>,
    works: TodoType[],
}

export default function TodoItem(props: PropsType) {
    return (
        <View className={`flex justify-around items-center flex-row gap-10 my-3 rounded w-96 h-32 pb-6 ${props.item.item.color}`}>
            <View className='flex justify-center items-center flex-col gap-2'>
                <TouchableOpacity onPress={() => {
                    props.setWorks(
                        props.works.map(item => item.id === props.item.item.id ? {
                            id: props.item.item.id,
                            title: props.item.item.title,
                            description: props.item.item.description,
                            done: props.item.item.done ? false : true,
                            time: props.item.item.time,
                            color: props.item.item.color,
                            priority: props.item.item.priority,
                        } : item)
                    )
                }}>
                    {
                        props.item.item.done ?
                            <Image className='h-12 w-12' source={require("@/assets/images/icons/check.png")} /> :
                            <Image className='h-10 w-10' source={require("@/assets/images/icons/square.png")} />
                    }
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    props.setWorks((pervWorks) => {
                        return pervWorks.filter((work) => work.id != props.item.item.id)
                    })
                }}>
                    <Feather name="trash-2" size={38} color="#2145b7" />
                </TouchableOpacity>
            </View>
            <View className='flex justify-center items-center gap-1'>
                <Text style={{ fontFamily: "YekanBakh" }} className='text-xl text-[#2145b7]'>
                    {props.item.item.title}
                </Text>
                <Text style={{ fontFamily: "YekanBakh" }} className='text-lg text-[#2145b7]'>
                    {props.item.item.description}
                </Text>
                <Text style={{ fontFamily: "YekanBakh" }} className='text-base text-[#2145b7]'>
                    {props.item.item.priority}
                </Text>
            </View>
        </View>
    )
}
