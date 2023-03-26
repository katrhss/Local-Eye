import React, { useState } from "react";
import {
  FlatList,
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";

import Details from "../components/Details";

const places = [
  {
    name: "Ιστορικό - Λαογραφικό και Φυσικής Ιστορίας Μουσείο",
    image: {
      uri: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/7f/b5/b1/museum.jpg?w=1000&h=-1&s=1",
    },
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    name: "Αρχαιολογικό Μουσείο Κοζάνης",
    image: {
      uri: "https://upload.wikimedia.org/wikipedia/commons/7/73/Macedonian_Museums-2-Arx_Kozanis-8.jpg",
    },
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    name: "Αρχοντικό Γρ. Βούρκα",
    image: {
      uri: "https://lh5.googleusercontent.com/p/AF1QipOPEuKpSAysd7rnm6_fu8bXeFjazqMcF1HYhSg5=w243-h174-n-k-no-nu",
    },
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    name: "Πλατεία Νίκης",
    image: {
      uri: "https://underwriterpress.com.cy/wp-content/uploads/2016/05/pegasus_LARGE_t_242261_54431829-700x469.jpg",
    },
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    name: "Κοβεντάρειος Δημοτική Βιβλιοθήκη Κοζάνης",
    image: {
      uri: "https://lh3.googleusercontent.com/p/AF1QipM2vC1R9EMzmFJ_20-T_74-BxYF6r1XaWGx5pRJ=s680-w680-h510",
    },
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
];

const HomeScreen = ({ navigation }) => {
  return <Details places={places} navigation={navigation} />;
};

const styles = StyleSheet.create({
  // list: {
  //   flex: 1,
  //   flexDirection: "row",
  //   padding: 10,
  //   justifyContent: "center",
  //   backgroundColor: "#C0C6CD",
  //   borderRadius: 25,
  //   marginHorizontal: 8,
  //   height: 260,
  // },
  // places: {
  //   fontSize: 22,
  //   marginLeft: 8,
  // },
  // image: {
  //   height: "100%",
  //   width: "98%",
  //   borderRadius: 20,
  // },
});

export default HomeScreen;
