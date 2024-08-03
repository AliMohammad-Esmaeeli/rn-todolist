import { Dispatch, SetStateAction, useState } from "react";
import { Image, TouchableOpacity, Text, View, TextInput, Touchable } from "react-native";
import { Dialog } from 'react-native-simple-dialogs';
import SelectDropdown from 'react-native-select-dropdown'
import TodoType from "./TodoType";

interface PropsType {
    works: TodoType[],
    setWorks: Dispatch<SetStateAction<TodoType[]>>,
}

export default function FAB(props: PropsType) {
    const [visible, setVisible] = useState(false);

    const [_title, _setTitle] = useState<string | undefined | null>();
    const [_description, _setDescription] = useState<string | undefined | null>();
    const [_color, _setColor] = useState<string | undefined | null>();
    const [_priority, _setPriority] = useState<string | undefined | null>();
    return (
        <>
            <TouchableOpacity onPress={() => setVisible(true)}>
                <View className='bg-[#79d0fd] h-16 w-16 rounded-full shadow-lg absolute bottom-10 left-24 flex justify-center items-center'>
                    <Image className='h-10 w-10' source={require("@/assets/images/icons/add.png")}></Image>
                </View>
            </TouchableOpacity>

            <Dialog
                visible={visible}
                onTouchOutside={() => setVisible(false)}
                onRequestClose={() => { }}
                contentInsetAdjustmentBehavior="never"
            >

                <View className="flex justify-center items-end gap-3">
                    <Text style={{ fontFamily: "YekanBakh" }} className='text-xl text-black'>افزودن تسک جدید</Text>
                    <Text style={{ fontFamily: "YekanBakh" }} className='text-base text-black'>نام تسک 👇</Text>
                    <TextInput
                        value={_title!}
                        onChangeText={_setTitle}
                        style={{ fontFamily: "YekanBakh" }}
                        className='text-black text-base border-b-2 border-b-slate-600 w-64'
                    ></TextInput>

                    <Text style={{ fontFamily: "YekanBakh" }} className='text-base text-black'>توضیحات تسک 👇</Text>
                    <TextInput
                        value={_description!}
                        onChangeText={_setDescription}
                        style={{ fontFamily: "YekanBakh" }}
                        className='text-black text-base border-b-2 border-b-slate-600 w-64'
                    >
                    </TextInput>

                    <View className="flex flex-row justify-center items-center gap-5">
                        <TouchableOpacity onPress={() => _setColor("bg-red-500")}>
                            <View className="rounded-full h-10 w-10 bg-red-500"></View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => _setColor("bg-blue-500")}>
                            <View className="rounded-full h-10 w-10 bg-blue-500"></View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => _setColor("bg-yellow-500")}>
                            <View className="rounded-full h-10 w-10 bg-yellow-500"></View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => _setColor("bg-green-500")}>
                            <View className="rounded-full h-10 w-10 bg-green-500"></View>
                        </TouchableOpacity>
                    </View>

                    <SelectDropdown
                        data={[{ Name: "پایین", Num: 0 }, { Name: "متوسط", Num: 1 }, { Name: "بالا", Num: 2 }, { Name: "اضطراری", Num: 3 }]}
                        onSelect={(selectedItem) => _setPriority(selectedItem.Name)}
                        renderButton={(selectedItem, isOpened) => {
                            return (
                                <View>
                                    <Text className="text-xl text-blue-400 mt-3" style={{ fontFamily: "YekanBakh" }}>
                                        انتخاب وضعیت
                                    </Text>
                                </View>
                            );
                        }}
                        renderItem={(item, index, isSelected) => {
                            return (
                                <View className="border-2 border-black">
                                    <Text className="text-base m-2" style={{ fontFamily: "YekanBakh" }}>{item.Name}</Text>
                                </View>
                            );
                        }} />
                    <View className="flex justify-end items-center flex-row gap-8">
                        <TouchableOpacity onPress={() => setVisible(false)} >
                            <Text className="text-base text-blue-400" style={{ fontFamily: "YekanBakh" }}>بیخیال</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {
                            setVisible(false);
                            props.setWorks([...props.works, {
                                id: `${Math.random()}`,
                                title: _title!,
                                description: _description!,
                                done: false,
                                time: `${new Date().toISOString}`,
                                color: _color === null ? "bg-blue-400" : _color!,
                                priority: _priority!
                            }]);
                            _setTitle(null)
                            _setDescription(null)
                            _setColor(null)
                            _setPriority(null)
                        }}>
                            <Text className="text-base text-blue-400" style={{ fontFamily: "YekanBakh" }} >حله</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Dialog>
        </>
    )
}
