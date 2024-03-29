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

const Details = ({ navigation }) => {
  const { state, getPlaces } = useContext(PlaceContext);

  useEffect(() => {
    getPlaces();
    navigation.addListener("didFocus", () => {
      getPlaces();
    });
  }, [navigation]);

  return (
    <View style={{ flex: 1, backgroundColor: "#E2E8E9" }}>
      <View style={{ flex: 1 }}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={state}
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
                      <Image style={styles.image} source={item.thumbnail} />
                    </View>
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      <Text style={styles.places}>{item.title}</Text>
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
    borderRadius: 20,
    marginBottom: 10,
    backgroundColor: "#F3F6F6",
    marginHorizontal: 8,
    marginTop: 8,
    elevation: 8,
    elevation: 8,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.8,
    shadowRadius: 5,
  },
});

export default withNavigation(Details);
