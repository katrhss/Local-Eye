import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";

const Details = ({ places, navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={places}
          renderItem={({ item }) => {
            return (
              <View>
                <TouchableOpacity
                  onPress={() => navigation.navigate("Details")}
                >
                  <View style={styles.list}>
                    <Image style={styles.image} source={item.image} />
                  </View>
                  <View>
                    <Text style={styles.places}>{item.name}</Text>
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
    flexDirection: "row",
    paddingVertical: 4,
    justifyContent: "center",
    backgroundColor: "#C0C6CD",
    borderRadius: 25,
    marginHorizontal: 8,
    height: 260,
  },
  places: {
    fontSize: 22,
    marginLeft: 8,
  },
  image: {
    alignSelf: "center",
    height: "100%",
    width: "98%",
    borderRadius: 20,
  },
});

export default Details;
