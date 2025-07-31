import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#131016",
    padding: 24,
  },
  eventName: {
    color: "#fdfcfe",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 48,
  },
  eventDate: {
    color: "#6b6b6b",
    fontSize: 16,
    marginBottom: 16,
  },
  input: {
    flex: 1,
    backgroundColor: "#1f1e25",
    borderRadius: 8,
    padding: 16,
    fontSize: 16,
    color: "#fdfcfe",
    marginRight: 12,
  },
  buttonText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  button: {
    width: 56,
    height: 56,
    backgroundColor: "#31cf67",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  participantsContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 24,
    marginBottom: 24,
  },
  listEmptyText: {
    color: "#6b6b6b",
    fontSize: 16,
    textAlign: "center",
  },
});
