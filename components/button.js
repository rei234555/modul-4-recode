import React from "react";
import { Pressable, Text } from "native-base";

const Button = (props) => {
  return (
    <Pressable
      bg={'#dddddd'}
      p={'15px'}
      alignItems="center"
      borderRadius={30}
      onPress={props.onPress}>
      <Text
        fontSize={'16px'}
        textTransform="uppercase"
        fontWeight="bold">
        {props.text}
      </Text>
    </Pressable>
  );
};

export default Button;


// import { TouchableOpacity, Text, StyleSheet } from "react-native";

// // Functional Component with props
// const Button = (props) => {
//   return (
//     <TouchableOpacity style={styles.container} onPress={props.onPress}>
//       <Text style={styles.text}>{props.text}</Text>
//     </TouchableOpacity>
//   );
// };

// // Styles
// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: "#dddddd",
//     padding: 15,
//     alignItems: "center",
//     borderRadius: 30,
//   },
//   text: {
//     fontSize: 16,
//     textTransform: "uppercase",
//     fontWeight: "bold",
//   },
// });

// export default Button;
