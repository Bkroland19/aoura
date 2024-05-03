import {  Text, TouchableOpacity } from 'react-native'

const CustomButton = () => {
  return (
    <TouchableOpacity  className={`bg-secondary rounded-xl min-h-[62px] justify-center items-center`}>
      <Text>CustomButton</Text>
    </TouchableOpacity>
  )
}

export default CustomButton