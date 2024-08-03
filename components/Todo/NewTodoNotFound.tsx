import { Text, View } from "react-native";

export default function NewTodoNotFound() {
    return (
        <View className='flex flex-col-reverse justify-center items-center gap-4'>
            <Text style={{ fontFamily: "YekanBakh" }} className='text-2xl'>تبریک! مورد تازه ای یافت نشد.</Text>
            <Text style={{ fontFamily: "IphoneEmoji" }} className='text-4xl'>🥳</Text>
        </View>
    )
}
