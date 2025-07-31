import { View, Text, TouchableOpacity } from "react-native";
import "./styles";
import { styles } from "./styles";

interface props {
  name: string;
  onRemove: () => void;
}

export default function Participant({ name, onRemove }: props) {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.name}>{name}</Text>
        <TouchableOpacity style={styles.button} onPress={onRemove}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}
