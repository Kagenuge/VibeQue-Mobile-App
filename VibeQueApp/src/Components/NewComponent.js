// import React, { Component } from 'react';
// import postSong from '../Components/serviceClient';

// import {
//   View,
//   Text,
//   Image,
//   StyleSheet,
//   TouchableOpacity,
//   Alert
// } from 'react-native';

// const url = 'http://localhost:3000/api/songrequest';

// const styles = StyleSheet.create({
//   container: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: 'black'
//   },
//   image: {
//     width: 75,
//     height: 75,
//     marginRight: 10
//   },

//   text: {
//     color: 'white'
//   }
// });

// export class NewComponent extends Component {
//   state = {
//     backgroundColor: '#d8ff2b'
//   };

//   //   state = { style : {
//   //     container: {
//   //       flexDirection: 'row',
//   //       alignItems: 'center',
//   //       color: 'black'
//   //     },
//   //     image: {
//   //         width: 75,
//   //         height: 75,
//   //         marginRight: 10
//   //       },

//   //       text: {
//   //         color: 'white'
//   //       }
//   // }
//   //   };

//   render() {
//     //item: { id, imageUri, title, type, name, previewUrl}
//     const id = this.props.item.id;
//     const title = this.props.item.title;
//     const imageUri = this.props.item.imageUri;
//     const name = this.props.item.name;
//     const previewUrl = this.props.item.previewUrl;
//     const type = this.props.item.type;

//     const apuFunktio = () => {
//       this.setState({ backgroundColor: '#d8ff2b' });
//     };

//     return (
//       <TouchableOpacity
//         style={styles.container}
//         // style={{ backgroundColor: this.state.buttonColor, padding: 15 }}
//         onPress={() => {
//           handleClick = songUrl => {
//             console.log('url: ' + songUrl);
//             // style.container.backgroundColor = 'green';

//             postSong(songUrl);

//             console.log('toimiiiiiko');

//             apuFunktio();
//             // addSong(songUrl);
//             // this.changeColor();
//             // console.log('toimiiiii');
//           };

//           Alert.alert(
//             'Set you entrance song to be: ',
//             '' + this.props.item.name + ' - ' + title + '',
//             [
//               {
//                 style: 'destructive',
//                 text: 'Cancel',
//                 onPress: () => console.log('Cancel Pressed')
//               },
//               {
//                 text: 'OK',
//                 onPress: () => {
//                   if (previewUrl) {
//                     handleClick(previewUrl);
//                   } else {
//                     console.log('No url yet');
//                   }
//                 }
//               }
//             ]
//           );

//           // state = {
//           //   colors: ['green', 'blue', 'yellow', 'red'],
//           //   buttonColor: 'blue'
//           // };
//         }}
//       >
//         <View style={styles.container}>
//           <Image source={{ uri: imageUri }} style={styles.image} />

//           <Text style={styles.text} id={id}>
//             {name}
//             {'\n'}
//             {title}
//           </Text>
//           <Text style={styles.text}>{type}</Text>
//         </View>
//       </TouchableOpacity>
//     );
//   }
// }

// export default NewComponent;
