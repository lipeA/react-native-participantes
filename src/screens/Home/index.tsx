import {
  View,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Alert,
} from "react-native";
import { styles } from "./styles";
import Participant from "../../components/Participant";
import { useState } from "react";

export default function Home() {
  const [Participantes, setParticipantes] = useState<String[]>([]);
  const [newParticipant, setNewParticipant] = useState("");

  function handleParticipantAdd() {
    console.log("Add Participant");

    if (Participantes.includes(newParticipant)) {
      return Alert.alert(
        "Erro ao cadastrar participante",
        "já existe um participante com esse nome"
      );
    }

    setParticipantes((prevState) => [...prevState, newParticipant]);
    Alert.alert(
      "Participante adicionado",
      `${newParticipant} foi adicionado com sucesso`
    );
    setNewParticipant("");
  }

  function handleParticipantRemove(name: string) {
    console.log(`Remove Participant: ${name}`);

    Alert.alert("Remover", `remover o participante ${name}?`, [
      {
        text: "Sim",
        onPress: () => Alert.alert("Participante removido"),
      },
      {
        text: "Não",
        style: "cancel",
      },
    ]);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>
      <Text style={styles.eventDate}>Sexta, 4 de Novembro de 2022</Text>

      <View style={styles.participantsContainer}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6b6b6b"
          onChangeText={setNewParticipant}
          value={newParticipant}
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={Participantes}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Participant
            name={item}
            key={item}
            onRemove={() => handleParticipantRemove(item)}
          />
        )}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Nenhum participante cadastrado
          </Text>
        )}
      />
    </View>
  );
}
