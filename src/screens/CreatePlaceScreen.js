import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import { Input, Button, Dialog } from "react-native-elements";
import Spacer from "../components/Spacer";
import * as ImagePicker from "expo-image-picker";
import { Context as PlaceContext } from "../context/PlaceContext";
import { useContext } from "react";

const CreatePlaceScreen = () => {
  const { addPlace } = useContext(PlaceContext);
  const [visible, setVisible] = useState(false);
  const [name, setName] = useState("");
  const [details, setDetails] = useState("");
  const [photo, setPhoto] = useState();

  const openImageLibrary = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: false,
      aspect: [4, 3],
      quality: 1,
    });
    console.log(result);
    if (!result.canceled) {
      setPhoto(result.assets[0].uri);
    }
  };

  const toggleDialog = () => {
    setVisible(!visible);
  };

  return (
    <View style={styles.container}>
      <View>
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
        <TouchableOpacity onPress={openImageLibrary}>
          <Text style={styles.imageBtn}> Upload Image</Text>
        </TouchableOpacity>

        {console.log(photo)}
        {photo && (
          <Image
            source={{ uri: photo }}
            style={{
              marginLeft: 20,
              marginTop: 10,
              width: "50%",
              height: "25%",
            }}
          />
        )}

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
            setVisible(!visible);
          }}
        />
      </View>
      <Dialog isVisible={visible} onBackdropPress={toggleDialog}>
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
              addPlace(name, details, photo);
            }}
          />
          <Dialog.Button
            title="Όχι"
            titleStyle={{ color: "red", marginHorizontal: 50, fontSize: 18 }}
            onPress={() => console.log("Secondary Action Clicked!")}
            style={{ alignSelf: "flex-start", justifyContent: "flex-start" }}
          />
        </Dialog.Actions>
      </Dialog>
    </View>
  );
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
    // backgroundColor: "lightgray",
    marginHorizontal: 12,
    paddingHorizontal: 4,
    paddingVertical: 4,
    // height: "15%",
    borderBottomColor: "black",
    borderBottomWidth: 1,
    fontSize: 18,
  },
  detailInput: {
    // backgroundColor: "lightgray",
    marginHorizontal: 12,
    height: "26%",
    // borderBottomColor: "black",
    // borderBottomWidth: 1,
    textAlignVertical: "top",
    elevation: 2,
    padding: 6,
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
    backgroundColor: "red",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    // marginVertical: 10,
    // elevation: 1,
  },
});

export default CreatePlaceScreen;
