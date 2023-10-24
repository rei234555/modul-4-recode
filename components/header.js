import React from "react";
import { Box, Pressable, Image } from "native-base";

const Header = (props) => {
  return (
    <Box
      bg={'#AA0002'}
      flexDirection="row"
      justifyContent="space-between"
      p={'15px'} >
      <Pressable onPress={() => props.drawer.current.openDrawer()}>
        <Image source={require("../assets/menu.png")} w={'18px'} h={'18px'} />
      </Pressable>
      <Box>
        <Box flexDirection="row" alignItems="center" justifyContent="center">
          <Icon source={require("../assets/facebook.png")} />
          <Icon source={require("../assets/youtube.png")} />
          <Icon source={require("../assets/twitter.png")} />
          <Icon source={require("../assets/search.png")} />
        </Box>
      </Box>
    </Box>
  );
};

const Icon = (props) => (
  <Image source={props.source} w={'36px'} h={'16px'} resizeMode="contain" />
);

export default Header;


// import { View, TouchableOpacity, Image, StyleSheet } from "react-native";

// // Functional Component with props
// const Header = (props) => {
//   return (
//     <View style={styles.header}>
//       <TouchableOpacity onPress={() => props.drawer.current.openDrawer()}>
//         <Image
//           source={require("../assets/menu.png")}
//           style={{ width: 18, height: 18 }}
//         />
//       </TouchableOpacity>
//       <View>
//         <View style={styles.iconsView}>
//           <Image
//             source={require("../assets/facebook.png")}
//             style={styles.icons}
//           />
//           <Image
//             source={require("../assets/youtube.png")}
//             style={styles.icons}
//           />
//           <Image
//             source={require("../assets/twitter.png")}
//             style={styles.icons}
//           />
//           <Image
//             source={require("../assets/search.png")}
//             style={styles.icons}
//           />
//         </View>
//       </View>
//     </View>
//   );
// };

// // Styles
// const styles = StyleSheet.create({
//   header: {
//     backgroundColor: "#AA0002",
//     flexDirection: "row",
//     justifyContent: "space-between",
//     padding: 15,
//   },
//   iconsView: {
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   icons: {
//     width: 36,
//     height: 16,
//     resizeMode: "contain",
//   },
// });

// export default Header;