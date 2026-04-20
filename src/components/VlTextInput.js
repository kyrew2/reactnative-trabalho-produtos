import { StyleSheet, View, TextInput, TouchableOpacity } from "react-native";
import Feather from "@expo/vector-icons/Feather";
import { useState } from "react";

export default function VLTextInput({
  placeholder,
  value,
  setValue,
  passwordInput,
}) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        secureTextEntry={passwordInput && !showPassword}
        value={value}
        onChangeText={setValue}
      />
      {passwordInput && (
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          {!showPassword ? (
            <Feather name="eye" size={24} color="black" />
          ) : (
            <Feather name="eye-off" size={24} color="black" />
          )}
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    fontSize: 20,
    color: "red",
    width: 200,
  },
  inputContainer: {
    width: 300,
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 6,
    paddingRight: 12,
    paddingVertical: 6,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
