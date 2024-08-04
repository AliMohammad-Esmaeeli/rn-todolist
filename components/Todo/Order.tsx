import { TouchableOpacity, Text, View } from "react-native";
import { Dispatch, SetStateAction } from "react";
import TodoType from "./TodoType";

interface PropsType {
    works: TodoType[],
    setWorks: Dispatch<SetStateAction<TodoType[]>>
}

export default function Order(props: PropsType) {
    return (
        <View className="flex justify-center items-center gap-3 flex-row w-screen my-4">
            <View className="flex justify-center items-center h-10 w-28 border-2 border-white rounded-lg">
                <TouchableOpacity onPress={() => props.setWorks([...props.works].sort((a, b) => {
                    return a.title.localeCompare(b.title)
                }))}>
                    <Text style={{ fontFamily: "YekanBakh" }} className="text-black text-sm">بر اساس الفبا</Text>
                </TouchableOpacity>
            </View>
            <View className="flex justify-center items-center h-10 w-28 border-2 border-white rounded-lg">
                <TouchableOpacity onPress={() => props.setWorks([...props.works].sort((a, b) => {
                    return new Date(a.time).getTime() - new Date(b.time).getTime()
                })
                )}>
                    <Text style={{ fontFamily: "YekanBakh" }} className="text-black text-sm">بر اساس زمان</Text>
                </TouchableOpacity>
            </View>
            <View className="flex justify-center items-center h-10 w-28 border-2 border-white rounded-lg">
                <TouchableOpacity onPress={() => props.setWorks([...props.works].sort((a, b) => {
                    let c;
                    let d;
                    switch (a.priority) {
                        case "پایین":
                            c = 4;
                            break;
                        case "متوسط":
                            c = 3
                            break;
                        case "بالا":
                            c = 2
                            break;
                        case "اضطراری":
                            c = 1
                            break;
                    }
                    switch (b.priority) {
                        case "پایین":
                            d = 4;
                            break;
                        case "متوسط":
                            d = 3
                            break;
                        case "بالا":
                            d = 2
                            break;
                        case "اضطراری":
                            d = 1
                            break;

                    }
                    return c! - d!
                }
                ))}>
                    <Text style={{ fontFamily: "YekanBakh" }} className="text-black text-sm">براساس اولویت</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
