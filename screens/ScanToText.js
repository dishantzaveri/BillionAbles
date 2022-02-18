// import React, {useState} from 'react';
// import {Button,AppRegistry, StyleSheet, Text, View, Image, ScrollView} from 'react-native';
// import ImagePicker from 'react-native-image-crop-picker';

// import TesseractOcr, {
//   LANG_ENGLISH,
//   useEventListener,
// } from 'react-native-tesseract-ocr';

// const DEFAULT_HEIGHT = 500;
// const DEFAULT_WITH = 600;
// const defaultPickerOptions = {
//   cropping: true,
//   height: DEFAULT_HEIGHT,
//   width: DEFAULT_WITH,
// };

// function ScanToText() {
//   const [isLoading, setIsLoading] = useState(false);
//   const [progress, setProgress] = useState(0);
//   const [imgSrc, setImgSrc] = useState(null);
//   const [text, setText] = useState('');
//   useEventListener('onProgressChange', (p) => {
//     setProgress(p.percent / 100);
//   });

//   const recognizeTextFromImage = async (path) => {
//     setIsLoading(true);

//     try {
//       const tesseractOptions = {};
//       const recognizedText = await TesseractOcr.recognize(
//         path,
//         LANG_ENGLISH,
//         tesseractOptions,
//       );
//       setText(recognizedText);
//     } catch (err) {
//       console.error(err);
//       setText('');
//     }

//     setIsLoading(false);
//     setProgress(0);
//   };

//   const recognizeFromPicker = async (options = defaultPickerOptions) => {
//     try {
//       const image = await ImagePicker.openPicker(options);
//       setImgSrc({uri: image.path});
//       await recognizeTextFromImage(image.path);
//     } catch (err) {
//       if (err.message !== 'User cancelled image selection') {
//         console.error(err);
//       }
//     }
//   };

//   const recognizeFromCamera = async (options = defaultPickerOptions) => {
//     try {
//       const image = await ImagePicker.openCamera(options);
//       setImgSrc({uri: image.path});
//       await recognizeTextFromImage(image.path);
//     } catch (err) {
//       if (err.message !== 'User cancelled image selection') {
//         console.error(err);
//       }
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Dyslexic Friendly Font</Text>
//       <Text style={styles.instructions}>Select an image source:</Text>
//       <View style={styles.options}>
//         <View style={styles.button}>
//           <Button
//             disabled={isLoading}
//             title="Camera"
//             onPress={() => {
//               recognizeFromCamera();
//             }}
//           />
//         </View>
//         <View style={styles.button}>
//           <Button
//             disabled={isLoading}
//             title="Picker"
//             onPress={() => {
//               recognizeFromPicker();
//             }}
//           />
//         </View>
//       </View>
//       <ScrollView>

//       {imgSrc && (
//         <View style={styles.imageContainer}>
//           <Image style={styles.image} source={imgSrc} />
//           {isLoading ? (
//             <Text>Loading...</Text>
//             ) : (
//               <Text style={styles.dsylexic_text}>{text}</Text>
//               )}
//         </View>
//       )}
//       </ScrollView>
//       {/* <Text style={styles.dsylexic_text}>
//         Hello, naoiksd knpasd njkfdohasnb knmfdopsnfj 
//         naosdnufds  sdfjknosdf
//       </Text> */}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   options: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     padding: 10,
//   },
//   button: {
//     marginHorizontal: 10,
//   },
//   imageContainer: {
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   image: {
//     marginVertical: 15,
//     height: DEFAULT_HEIGHT / 2.5,
//     width: DEFAULT_WITH / 2.5,
//   },
//   title: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
//   dsylexic_text:{
//     letterSpacing:0.35,
//     fontWeight:"bold",
//     fontSize:18,
//     lineHeight: 25,
//     fontFamily: 'sans-serif-medium'
//   }
// });

// AppRegistry.registerComponent('AndroidFonts', () => AndroidFonts);

// export default ScanToText;
