import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Input, Button, Dialog } from "react-native-elements";

const CreatePlaceScreen = () => {
  const [visible, setVisible] = useState(false);
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");

  const toggleDialog = () => {
    setVisible(!visible);
  };

  return (
    <View>
      <View>
        <Input />
        <Button title={"Test"} onPress={toggleDialog} />
      </View>
      <Dialog isVisible={visible} onBackdropPress={toggleDialog}>
        <Dialog.Title title="Προσοχή!" titleStyle={{ fontWeight: "bold" }} />
        <Text>
          Μετά την υποβολή της τοποθεσίας δεν μπορεί να γίνει επεξεργασία στις
          πληροφορίες. Βεβαιωθείτε ότι όλα είναι σωστά!
        </Text>
        <Text style={{ marginTop: 5, fontWeight: "500" }}>
          {" "}
          Θέλετε να συνεχίσετε?
        </Text>
        <Dialog.Actions>
          <Dialog.Button
            title="Ναι"
            titleStyle={{ marginRight: 35, fontSize: 18 }}
            onPress={() => console.log("Primary Action Clicked!")}
          />
          <Dialog.Button
            title="Όχι"
            titleStyle={{ color: "red", marginRight: 120, fontSize: 18 }}
            onPress={() => console.log("Secondary Action Clicked!")}
            style={{ alignSelf: "flex-start", justifyContent: "flex-start" }}
          />
        </Dialog.Actions>
      </Dialog>
    </View>
  );
};

const styles = StyleSheet.create({
  actionButtons: {
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
});

export default CreatePlaceScreen;
