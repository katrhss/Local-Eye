import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Image } from "react-native";
import { PageScrollView } from "pagescrollview";
import { Button, Dialog } from "react-native-elements";
import Spacer from "../components/Spacer";
import * as ImagePicker from "expo-image-picker";
import { Context as PlaceContext } from "../context/PlaceContext";
import { useContext } from "react";
import { Feather } from "@expo/vector-icons";

const CreatePlaceScreen = () => {
  const { addPlace } = useContext(PlaceContext);
  const [visibleSub, setVisibleSub] = useState(false);
  const [visibleInfo, setVisibleInfo] = useState(false);
  const [name, setName] = useState("");
  const [details, setDetails] = useState("");
  const [displayPhoto, setDisplayPhoto] = useState();
  const [photo, setPhoto] = useState();
  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState();

  const openImageLibrary = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: false,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.canceled) {
      setDisplayPhoto(result.assets[0].uri);
      setPhoto(result.assets[0]);
      console.log(result.assets[0]);
    }
  };

  const toggleSubmitDialog = () => {
    setVisibleSub(!visibleSub);
  };
  const toggleInfoDialog = () => {
    setVisibleInfo(!visibleInfo);
  };

  return (
    <View style={styles.container}>
      <PageScrollView>
        <View style={{ height: 1000 }}>
          <Text style={styles.titleText}>Τίτλος</Text>
          <TextInput
            style={styles.titleInput}
            onChangeText={setName}
            placeholder="Όνομα τοποθεσίας"
          />
          <Spacer />
          <Text style={styles.detailText}>Λεπτομέρειες</Text>
          <TextInput
            style={styles.detailInput}
            onChangeText={setDetails}
            placeholder="Λεπτομέρειες τοποθεσίας"
            multiline
          />
          <Text style={styles.titleText}> Ανεβάστε φωτογραφία </Text>
          <Text style={styles.imageBtn} onPress={openImageLibrary}>
            Επιλέξτε φωτογραφία
          </Text>
          {displayPhoto && (
            <Image source={{ uri: displayPhoto }} style={styles.image} />
          )}
          <View
            style={{
              flexDirection: "row",
              alignContent: "center",
            }}
          >
            <Text style={styles.coordText}>Συντεταγμένες τοποθεσίας</Text>
            <Feather
              name="info"
              size={24}
              color="black"
              style={{ paddingTop: 8, marginLeft: 4 }}
              onPress={() => {
                toggleInfoDialog();
              }}
            />
          </View>
          <View style={{ flexDirection: "row", marginLeft: 20, marginTop: 14 }}>
            <Text style={styles.coordInput}> Longitude:</Text>
            <TextInput
              style={styles.longitude}
              onChangeText={setLongitude}
              placeholder="πχ 21.785312"
              keyboardType="numeric"
            />
          </View>
          <View style={{ flexDirection: "row", marginLeft: 20, marginTop: 10 }}>
            <Text style={styles.coordInput}> Latitude:</Text>
            <TextInput
              style={styles.latitude}
              onChangeText={setLatitude}
              placeholder="πχ 40.301313"
              keyboardType="numeric"
            />
          </View>
          <Spacer />
          <Button
            title="Υποβολή"
            buttonStyle={{
              backgroundColor: "#008e9d",
              borderWidth: 2,
              borderColor: "#008e9d",
              borderRadius: 30,
            }}
            containerStyle={{
              width: "50%",
              marginVertical: 10,
              alignSelf: "center",
            }}
            titleStyle={{ fontWeight: "bold" }}
            onPress={() => {
              toggleSubmitDialog();
            }}
          />
        </View>
      </PageScrollView>

      <Dialog isVisible={visibleSub} onBackdropPress={toggleSubmitDialog}>
        <Dialog.Title title="Προσοχή!" titleStyle={{ fontWeight: "bold" }} />
        <Text>
          Μετά την υποβολή της τοποθεσίας δεν μπορεί να γίνει επεξεργασία στις
          πληροφορίες. Βεβαιωθείτε ότι όλα είναι σωστά!
        </Text>
        <Text style={{ marginTop: 5, fontWeight: "500" }}>
          Θέλετε να συνεχίσετε?
        </Text>
        <Dialog.Actions>
          <Dialog.Button
            title="Ναι"
            titleStyle={{ marginHorizontal: 50, fontSize: 18 }}
            onPress={() => {
              if (name && details && photo) console.log(latitude);
              addPlace(name, details, photo, latitude, longitude);
            }}
          />
          <Dialog.Button
            title="Όχι"
            titleStyle={{ color: "red", marginHorizontal: 50, fontSize: 18 }}
            onPress={() => toggleSubmitDialog()}
            style={{ alignSelf: "flex-start", justifyContent: "flex-start" }}
          />
        </Dialog.Actions>
      </Dialog>
      <Dialog isVisible={visibleInfo} onBackdropPress={toggleInfoDialog}>
        <Dialog.Title
          title="Πληροφορίες συντεταγμένων"
          titleStyle={{ fontWeight: "bold" }}
        />
        <Text>
          Για την προσθήκη συντεταγμένων θα χρειαστεί να ψάξετε στο Google και
          να προσθέσετε τις ακριβείς συντεταγμένες για να μπορεί να εμφανίζεται
          σωστά η τοποθεσία στον χάρτη μετά την υποβολή.
        </Text>
        <Dialog.Actions>
          <Dialog.Button
            title="OK"
            onPress={() => {
              toggleInfoDialog();
            }}
          />
        </Dialog.Actions>
      </Dialog>
    </View>
  );
};

CreatePlaceScreen.navigationOptions = {
  headerTitle: "Δημηουργία Τοποθεσίας",
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  actionButtons: {
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  titleInput: {
    marginHorizontal: 12,
    paddingHorizontal: 4,
    paddingVertical: 4,
    borderBottomColor: "black",
    borderBottomWidth: 1,
    fontSize: 18,
  },
  detailInput: {
    marginHorizontal: 12,
    height: "26%",
    textAlignVertical: "top",
    elevation: 2,
    paddingHorizontal: 10,
    paddingVertical: 12,
  },
  titleText: {
    marginLeft: 15,
    marginTop: 8,
    fontWeight: "500",
    fontSize: 18,
  },
  detailText: {
    marginLeft: 15,
    marginVertical: 8,
    fontWeight: "500",
    fontSize: 18,
  },
  imageBtn: {
    marginHorizontal: 18,
    marginTop: 8,
    alignSelf: "flex-start",
    backgroundColor: "#008e9d",
    fontWeight: "500",
    color: "white",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  image: {
    alignSelf: "center",
    height: "24%",
    width: "85%",
    borderRadius: 20,
    borderColor: "gray",
    borderWidth: 3,
    // height: 260,
    marginTop: 10,
  },
  longitude: {
    borderRadius: 10,
    borderWidth: 1,
    marginLeft: 15,
    paddingHorizontal: 6,
  },
  latitude: {
    borderRadius: 10,
    borderWidth: 1,
    marginLeft: 26,
    paddingHorizontal: 6,
  },
  coordInput: {
    paddingTop: 6,
  },
  coordText: {
    marginLeft: 20,
    marginTop: 8,
    fontWeight: "500",
    fontSize: 18,
  },
});

export default CreatePlaceScreen;
