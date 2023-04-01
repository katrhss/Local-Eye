import React, { useContext, useEffect } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Context as PlaceContext } from "../context/PlaceContext";
import { withNavigation } from "react-navigation";
import HeartPress from "../components/HeartPress";

const Details = ({ navigation }) => {
  const { state, getPlaces } = useContext(PlaceContext);

  useEffect(() => {
    getPlaces();
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: "#E2E8E9" }}>
      <View style={{ flex: 1 }}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={state}
          // keyExtractor={(place) => {place.title}}
          renderItem={({ item }) => {
            return (
              <View style={styles.container}>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("Details", { places: item })
                  }
                >
                  <View style={styles.list}>
                    <View>
                      <Image style={styles.image} source={item.image} />
                    </View>
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      <Text style={styles.places}>{item.name}</Text>
                      <HeartPress />
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    paddingVertical: 4,
    justifyContent: "space-evenly",
    backgroundColor: "#F3F6F6",
    borderRadius: 20,
    marginHorizontal: 8,
    marginVertical: 8,
  },
  places: {
    fontSize: 22,
    marginLeft: 8,
    marginTop: 8,
  },
  image: {
    height: "100%",
    width: "100%",
    borderRadius: 20,
    height: 260,
  },
  container: {
    borderWidth: 1.75,
    borderColor: "#ccc",
    borderRadius: 20,
    marginBottom: 10,
    backgroundColor: "#F3F6F6",
    marginHorizontal: 8,
    marginTop: 8,
  },
});

export default withNavigation(Details);

// container: {
//   flex: 1,
//   flexDirection: "column",
//   alignItems: "center",
//   justifyContent: "space-evenly",
//   paddingTop: 40,
//   paddingBottom: 50,

//   backgroundColor: "#C0C6CD",
//   borderRadius: 25,
//   marginHorizontal: 5,
//   marginVertical: 12,
// },
// list: {
//   height: 150,
//   width: 200,
// },
// places: {
//   fontSize: 18,
//   // marginTop: 40,
//   marginLeft: 8,
//   justifyContent: "center",
// },
// image: {
//   height: "100%",
//   width: "98%",
//   borderRadius: 20,
// },
