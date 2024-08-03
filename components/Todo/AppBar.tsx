import { Text, View } from "react-native";

export default function AppBar() {
    return (
        <View className='h-28 w-screen bg-[#79d0fd] border-b-8 border-b-[#4e5cf9] flex justify-end'>
            <Text style={{ fontFamily: "YekanBakh" }} className='text-[#abfffe] text-2xl mb-3 mr-4'>فعالیت های امروز</Text>
        </View>
    )
}
