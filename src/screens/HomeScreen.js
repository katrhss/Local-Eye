import React, { useState } from "react";
import {
  FlatList,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import HeartPress from "../components/HeartPress";
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

const places = [
  { name: "Place 1" },
  { name: "Place 2" },
  { name: "Place 3" },
  { name: "Place 4" },
  { name: "Place 5" },

];

const HomeScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <FlatList
          data={places}
          renderItem={({ item }) => {
            return (
              <View style={styles.list}>
                <Text style={styles.places}>{item.name}</Text>
                <HeartPress style={styles.like} />
              </View>
            );
          }}
        />
      </View>
      <View style={styles.footer}>
        <View style={styles.homeFooter}>
          <FontAwesome name="home" size={24} color="#F0F0F5" style={styles.icon}/>
          <Text style={{color:"#F0F0F5"}}>Home</Text>
        </View>
        <View style={styles.searchFooter}>
          <Ionicons name="search" size={24} color="#F0F0F5" style={styles.icon}/>
          <Text style={{color:"#F0F0F5"}}>Search</Text>
        </View>
        <View style={styles.nearbyFooter}>
          <FontAwesome5 name="map-marker-alt" size={24} color="#F0F0F5" style={{marginLeft: 10}}/>
          <Text style={{color:"#F0F0F5"}}>Nearby</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    flexDirection: "row",
    paddingVertical: 4,
    borderBottomWidth: 2,
    justifyContent: "space-between",
  },
  places: {
    fontSize: 24,
    marginLeft: 8,
  },
  like: {
    alignSelf: "center",
    fontSize: 20,
    marginRight: 15,
  },
  footer: {
    width: "100%",
    height: 70,
    flex: 0,
    flexDirection: "row",
    backgroundColor: "#182425",
    alignSelf: "flex-end",
    justifyContent: "space-around",
  },
  icon:{
    marginLeft: 6
  },
  homeFooter:{
    marginTop: 10,
  },
  searchFooter:{
    marginTop: 10,
   
  },
  nearbyFooter:{
    marginTop: 10
  }
});

export default HomeScreen;
