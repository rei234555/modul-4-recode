import React, { useState } from "react";
import { FlatList, Image, Text, Pressable, Box, Modal, Button, VStack, Center } from "native-base";

const data = [
  {
    id: 1,
    title:
      "Dorong Pengembangan UMKM, IT Telkom Surabaya Gandeng UD Rozi dalam Pembuatan Website",
    image:
      "https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/Salinan-IMG_0823-768x512.jpg",
  },
  {
    id: 2,
    title:
      "Mahasiswa ITTelkom Surabaya Menang Kompetisi di New Delhi",
    image:
      "https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/asdfghjk-768x492.jpg",
  },
  {
    id: 3,
    title: "Benarkah Generasi Baru Generasi Strawberi? Ayo Belajar Growth Mindset dari Kampus ITTelkom Surabaya",
    image:
      "https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/asdfghkl-768x472.jpg",
  },
  {
    id: 4,
    title: "4 Industri Tahan Resesi! Pastikan Kemampuanmu Termasuk Di Dalamnya",
    image:
      "https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/mbacay-768x512.jpg",
  },
  {
    id: 5,
    title:
      "Selamat Datang Mahasiswa Baru, PKKMB ITTelkom Surabaya Berlangsung Secara Luring",
    image:
      "https://ittelkom-sby.ac.id/wp-content/uploads/2022/09/DSC_1931-768x512.jpg",
  },
  {
    id: 6,
    title:
      "Dorong Pengembangan UMKM, IT Telkom Surabaya Gandeng UD Rozi dalam Pembuatan Website",
    image:
      "https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/Salinan-IMG_0823-768x512.jpg",
  },
  {
    id: 7,
    title:
      "Mahasiswa ITTelkom Surabaya Menang Kompetisi di New Delhi",
    image:
      "https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/asdfghjk-768x492.jpg",
  },
  {
    id: 8,
    title: "Benarkah Generasi Baru Generasi Strawberi? Ayo Belajar Growth Mindset dari Kampus ITTelkom Surabaya",
    image:
      "https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/asdfghkl-768x472.jpg",
  },
  {
    id: 9,
    title: "4 Industri Tahan Resesi! Pastikan Kemampuanmu Termasuk Di Dalamnya",
    image:
      "https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/mbacay-768x512.jpg",
  },
  {
    id: 10,
    title:
      "Selamat Datang Mahasiswa Baru, PKKMB ITTelkom Surabaya Berlangsung Secara Luring",
    image:
      "https://ittelkom-sby.ac.id/wp-content/uploads/2022/09/DSC_1931-768x512.jpg",
  },
];

const List = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const openModal = (item) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  const renderItem = ({ item }) => {
    return (
      <Pressable
        padding={15}
        borderBottomColor="#dddddd"
        borderBottomWidth={1}
        onPress={() => openModal(item)}
      >
        <Box>
          <Image source={{ uri: item.image }} height={200} width={null} />
          <Text fontSize={18} paddingTop={2}>
            {item.title}
          </Text>
        </Box>
      </Pressable>
    );
  };

  return (
    <Box paddingBottom={100}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />

      {/* Modal */}
      <Modal isOpen={selectedItem !== null} onClose={closeModal} size="lg">
        <Modal.Content>
          <Modal.Header>{selectedItem ? selectedItem.title : ""}</Modal.Header>
          <Modal.CloseButton />
          <Modal.Body>
            {selectedItem && (
              <VStack space={3}>
                <Image source={{ uri: selectedItem.image }} height={200} width={null} />
                <Text>{selectedItem.title}</Text>
              </VStack>
            )}
          </Modal.Body>
          <Modal.Footer>
            <Button onPress={closeModal}>Close</Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </Box>
  );
};

export default List;


// import {
//   FlatList,
//   Image,
//   Text,
//   TouchableOpacity,
//   View,
//   StyleSheet,
//   Modal,
//   Pressable
// } from "react-native";

// import { useState } from "react";

// // Dummmy Data (Array of Object) 
// const datas = [
//   {
//     id: 1,
//     title:
//       "Dorong Pengembangan UMKM, IT Telkom Surabaya Gandeng UD Rozi dalam Pembuatan Website",
//     image:
//       "https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/Salinan-IMG_0823-768x512.jpg",
//   },
//   {
//     id: 2,
//     title: "Mahasiswa ITTelkom Surabaya Menang Kompetisi di New Delhi",
//     image:
//       "https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/asdfghjk-768x492.jpg",
//   },
//   {
//     id: 3,
//     title:
//       "Benarkah Generasi Baru Generasi Strawberi? Ayo Belajar Growth Mindset dari Kampus ITTelkom Surabaya",
//     image:
//       "https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/asdfghkl-768x472.jpg",
//   },
//   {
//     id: 4,
//     title: "4 Industri Tahan Resesi! Pastikan Kemampuanmu Termasuk Di Dalamnya",
//     image:
//       "https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/mbacay-768x512.jpg",
//   },
//   {
//     id: 5,
//     title:
//       "Selamat Datang Mahasiswa Baru, PKKMB ITTelkom Surabaya Berlangsung Secara Luring",
//     image:
//       "https://ittelkom-sby.ac.id/wp-content/uploads/2022/09/DSC_1931-768x512.jpg",
//   },
//   {
//     id: 6,
//     title:
//       "Dorong Pengembangan UMKM, IT Telkom Surabaya Gandeng UD Rozi dalam Pembuatan Website",
//     image:
//       "https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/Salinan-IMG_0823-768x512.jpg",
//   },
//   {
//     id: 7,
//     title: "Mahasiswa ITTelkom Surabaya Menang Kompetisi di New Delhi",
//     image:
//       "https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/asdfghjk-768x492.jpg",
//   },
//   {
//     id: 8,
//     title:
//       "Benarkah Generasi Baru Generasi Strawberi? Ayo Belajar Growth Mindset dari Kampus ITTelkom Surabaya",
//     image:
//       "https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/asdfghkl-768x472.jpg",
//   },
//   {
//     id: 9,
//     title: "4 Industri Tahan Resesi! Pastikan Kemampuanmu Termasuk Di Dalamnya",
//     image:
//       "https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/mbacay-768x512.jpg",
//   },
//   {
//     id: 10,
//     title:
//       "Selamat Datang Mahasiswa Baru, PKKMB ITTelkom Surabaya Berlangsung Secara Luring",
//     image:
//       "https://ittelkom-sby.ac.id/wp-content/uploads/2022/09/DSC_1931-768x512.jpg",
//   },
// ];

// // Functional Component
// const List = () => {
//   // Modal State
//   const [modalVisible, setModalVisible] = useState(false);
//   const [itemSelect, setItemSelect] = useState('kosong');
  
//   console.log(itemSelect);

//   // Arrow Function with destructured argument
//   const renderItem = ({ item }) => {
//     // console.log(item);
//     return (
//       // Modal Component
//       <TouchableOpacity style={styles.view} onPress={() => {setModalVisible(true); setItemSelect(item)}}>
//         <View>
//           <Modal        
//             animationType="fade"
//             transparent={true}
//             visible={modalVisible}
//             onRequestClose={() => {
//             setModalVisible(!modalVisible);}}>
//             <View style={styles.modalView}>
//             <Image style={styles.modalImage} source={{uri: itemSelect.image }}/>
//             <Text>{itemSelect ? itemSelect.title : 'wleowleo'}</Text>
//               <View style={{ alignItems: 'center' }}>
//                 <Pressable
//                   style={[styles.button, styles.buttonClose]}
//                   onPress={() => setModalVisible(!modalVisible)}>
//                   <Text style={{ padding: 5 }}>Close</Text>
//                 </Pressable>
//               </View>
//             </View>    
//           </Modal>
//           <Image source={{ uri: item.image }} style={styles.image} />
//           <Text style={styles.text}>{item.title}</Text>
//         </View>
//       </TouchableOpacity>
//     // <TouchableOpacity style={styles.view} onPress={() => alert("Pressed")}>
//     //   <View>
//     //     <Image source={{ uri: item.image }} style={styles.image} />
//     //     <Text style={styles.text}>{item.title}</Text>
//     //   </View>
//     // </TouchableOpacity>
//     );
//   };

//   return (
//     <FlatList
//       data={datas}
//       renderItem={renderItem}
//       keyExtractor={(item) => item.id}
//     />
//   );
// };


// // Styles
// const styles = StyleSheet.create({
//   view: {
//     padding: 15,
//     borderBottomColor: "#dddddd",
//     borderBottomWidth: 1,
//   },
//   image: {
//     height: 200,
//     width: null,
//   },
//   text: {
//     fontSize: 18,
//     paddingTop: 10,
//   },
//   modalView: {
//     justifyContent: 'center',
//     alignItems: 'center',
//     margin: 20,
//     backgroundColor: 'white',
//     borderRadius: 20,
//     padding: 20,
//     alignItems: 'center',
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 4,
//     elevation: 5,
//   },
//   button: {
//     borderRadius: 20,
//     padding: 10,
//     elevation: 2,
//   },
//   buttonOpen: {
//     backgroundColor: '#F194FF',
//   },
//   buttonClose: {
//     backgroundColor: '#2196F3',
//   },
//   modalImage: {
//     height: 200,
//     width: '70%',
//     borderRadius: 8,
//     marginBottom: 20,
//   },
// });

// export default List;

// // import {
// //     FlatList,
// //     Image,
// //     Text,
// //     TouchableOpacity,
// //     View,
// //     StyleSheet,
// //   } from "react-native";
  
// //   // Dummmy Data (Array of Object)
// //   const datas = [
// //     {
// //       id: 1,
// //       title:
// //         "Dorong Pengembangan UMKM, IT Telkom Surabaya Gandeng UD Rozi dalam Pembuatan Website",
// //       image:
// //         "https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/Salinan-IMG_0823-768x512.jpg",
// //     },
// //     {
// //       id: 2,
// //       title: "Mahasiswa ITTelkom Surabaya Menang Kompetisi di New Delhi",
// //       image:
// //         "https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/asdfghjk-768x492.jpg",
// //     },
// //     {
// //       id: 3,
// //       title:
// //         "Benarkah Generasi Baru Generasi Strawberi? Ayo Belajar Growth Mindset dari Kampus ITTelkom Surabaya",
// //       image:
// //         "https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/asdfghkl-768x472.jpg",
// //     },
// //     {
// //       id: 4,
// //       title: "4 Industri Tahan Resesi! Pastikan Kemampuanmu Termasuk Di Dalamnya",
// //       image:
// //         "https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/mbacay-768x512.jpg",
// //     },
// //     {
// //       id: 5,
// //       title:
// //         "Selamat Datang Mahasiswa Baru, PKKMB ITTelkom Surabaya Berlangsung Secara Luring",
// //       image:
// //         "https://ittelkom-sby.ac.id/wp-content/uploads/2022/09/DSC_1931-768x512.jpg",
// //     },
// //     {
// //       id: 6,
// //       title:
// //         "Dorong Pengembangan UMKM, IT Telkom Surabaya Gandeng UD Rozi dalam Pembuatan Website",
// //       image:
// //         "https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/Salinan-IMG_0823-768x512.jpg",
// //     },
// //     {
// //       id: 7,
// //       title: "Mahasiswa ITTelkom Surabaya Menang Kompetisi di New Delhi",
// //       image:
// //         "https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/asdfghjk-768x492.jpg",
// //     },
// //     {
// //       id: 8,
// //       title:
// //         "Benarkah Generasi Baru Generasi Strawberi? Ayo Belajar Growth Mindset dari Kampus ITTelkom Surabaya",
// //       image:
// //         "https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/asdfghkl-768x472.jpg",
// //     },
// //     {
// //       id: 9,
// //       title: "4 Industri Tahan Resesi! Pastikan Kemampuanmu Termasuk Di Dalamnya",
// //       image:
// //         "https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/mbacay-768x512.jpg",
// //     },
// //     {
// //       id: 10,
// //       title:
// //         "Selamat Datang Mahasiswa Baru, PKKMB ITTelkom Surabaya Berlangsung Secara Luring",
// //       image:
// //         "https://ittelkom-sby.ac.id/wp-content/uploads/2022/09/DSC_1931-768x512.jpg",
// //     },
// //   ];
  
// //   // Functional Component
// //   const List = () => {
// //     // Arrow Function with destructured argument
// //     const renderItem = ({ item }) => {
// //       return (
// //         <TouchableOpacity style={styles.view} onPress={() => alert("Pressed")}>
// //           <View>
// //             <Image source={{ uri: item.image }} style={styles.image} />
// //             <Text style={styles.text}>{item.title}</Text>
// //           </View>
// //         </TouchableOpacity>
// //       );
// //     };
  
// //     return (
// //       <FlatList
// //         data={datas}
// //         renderItem={renderItem}
// //         keyExtractor={(item) => item.id}
// //       />
// //     );
// //   };
  
// //   // Styles
// //   const styles = StyleSheet.create({
// //     view: {
// //       padding: 15,
// //       borderBottomColor: "#dddddd",
// //       borderBottomWidth: 1,
// //     },
// //     image: {
// //       height: 200,
// //       width: null,
// //     },
// //     text: {
// //       fontSize: 18,
// //       paddingTop: 10,
// //     },
// //   });
  
// //   export default List;
  