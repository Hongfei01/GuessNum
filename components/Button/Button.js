import { View, Text, Pressable } from 'react-native';

import style from './style';
const Button = ({ children, onPress }) => {
  return (
    <Pressable onPress={onPress}>
      <View style={style.container}>
        <Text style={style.buttonTxt}>{children}</Text>
      </View>
    </Pressable>
  );
};
export default Button;
