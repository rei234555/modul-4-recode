import React, { createRef, useState } from 'react';
import { NativeBaseProvider, Box } from 'native-base'
import { StatusBar, DrawerLayoutAndroid } from 'react-native';
import Article from './screens/article';
import Header from './components/header';
import Button from './components/button';
import List from './screens/list';
import Separator from './components/separator';

const App = () => {
  const [page, setPage] = useState('list');
  const drawer = createRef();
  const changePage = (drawer, pageName) => {
    drawer.current.closeDrawer();
    setPage(pageName);
  };
  const NavigationView = (props) => (
    <Box style={{ padding: 30, backgroundColor: '#222222', flex: 1 }}>
      <Button text="List" onPress={() => changePage(props.drawer, 'list')} />
      <Separator height={30} />
      <Button
        text="Article"
        onPress={() => changePage(props.drawer, 'article')}
      />
      <Separator height={30} />
      <Button text="Close" onPress={() => props.drawer.current.closeDrawer()} />
    </Box>
  );
  return (
    <NativeBaseProvider>
      <DrawerLayoutAndroid
        ref={drawer}
        drawerWidth={300}
        drawerPosition="left"
        renderNavigationView={() => <NavigationView drawer={drawer} />}>
        <Box style={{ paddingTop: 0 }}>
          <StatusBar style="auto" backgroundColor="#AA0002" />
          <Header drawer={drawer} />
          {page == 'list' && <List />}
          {page == 'article' && <Article />}
        </Box>
      </DrawerLayoutAndroid>
    </NativeBaseProvider>
  );
};
export default App;


// import { useRef, useState } from "react";
// import { View, DrawerLayoutAndroid, StatusBar } from "react-native";
// import Header from "./components/header";
// import Button from "./components/button";
// import Separator from "./components/separator";
// import List from "./screens/list";
// import Article from "./screens/article";

// // Functional Component
// const App = () => {
//   // State Declaration
//   const [page, setPage] = useState("list");
//   // Ref Declaration
//   const drawer = useRef(null);

//   // Arrow Function inside Functional Component
//   const changePage = (drawer, pageName) => {
//     // Close Drawer
//     drawer.current.closeDrawer();
//     // Change state value

//     setPage(pageName);
//   };

//   // Arrow Function inside Functional Component
//   const navigationView = () => (
//     <View style={{ padding: 30, backgroundColor: "#222222", flex: 1 }}>
//       <Button text="List" onPress={() => changePage(drawer, "list")} />
//       <Separator height={30} />
//       <Button text="Article" onPress={() => changePage(drawer, "article")} />
//       <Separator height={30} />
//       <Button text="Close" onPress={() => drawer.current.closeDrawer()} />
//     </View>
//   );

//   return (
//     <DrawerLayoutAndroid
//       ref={drawer}
//       drawerWidth={300}
//       drawerPosition="left"
//       renderNavigationView={navigationView}
//     >
//       <StatusBar style="light" backgroundColor="#AA0002" />
//       <View>
//         <Header drawer={drawer} />
//         {page == "list" ? <List /> : page == "article" ? <Article /> : null}
//       </View>
//     </DrawerLayoutAndroid>
//   );
// };

// export default App;
