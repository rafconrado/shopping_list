import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Pressable,
  View,
} from "react-native";

import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Feather from "@expo/vector-icons/Feather";
import { useState } from "react";
import React from "react";

interface BuysProps {
  id: number;
  name: string;
  complete: boolean;
}

export default function index() {
  const [buys, setBuys] = useState<BuysProps[]>([]);
  const [item, setItem] = useState("");
  const [editId, setEditId] = useState<number | null>(null);
  const [editName, setEditName] = useState("");

  function saveItem() {
    if (item.trim()) {
      setBuys([...buys, { id: buys.length + 1, name: item, complete: false }]);
      setItem("");
    }
  }

  function toggleComplete(id: number) {
    const updateBuys = buys.map((buy) =>
      buy.id === id ? { ...buy, complete: !buy.complete } : buy
    );
    setBuys(updateBuys);
  }

  function removeItem(id: number) {
    const filteredBuys = buys.filter((buy) => buy.id !== id);
    setBuys(filteredBuys);
  }

  function clearAll() {
    setBuys([]);
  }

  function editItem(id: number, name: string) {
    setEditId(id); 
    setEditName(name); 
  }

  function saveEdit() {
    if (editName.trim()) {
      const updatedBuys = buys.map((buy) =>
        buy.id === editId ? { ...buy, name: editName } : buy
      );
      setBuys(updatedBuys);
      setEditId(null); 
      setEditName(""); 
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Compras da Semana</Text>

      <TextInput
        style={styles.input}
        placeholder="Adicionar um novo item"
        placeholderTextColor="#9CA3AF"
        value={item}
        onChangeText={setItem}
      />
      <TouchableOpacity onPress={saveItem} style={styles.button}>
        <Text style={styles.textButton}>Adicionar item</Text>
      </TouchableOpacity>

      <View style={styles.cardContainer}>
        {buys.map((item) => (
          <View
            key={item.id}
            style={[
              styles.card,
              item.complete && { backgroundColor: "#a9ffbe" },
            ]}
          >
            <View style={styles.infoCard}>
              <Pressable onPress={() => toggleComplete(item.id)}>
                {item.complete ? (
                  <MaterialIcons name="check-box" size={20} color="black" />
                ) : (
                  <MaterialIcons
                    name="check-box-outline-blank"
                    size={20}
                    color="#D1D5DB"
                  />
                )}
              </Pressable>
              {editId === item.id ? (
                <TextInput
                  style={styles.editInput}
                  placeholder="Novo nome"
                  value={editName}
                  onChangeText={setEditName}
                />
              ) : (
                <Text style={styles.textItem}>{item.name}</Text>
              )}
            </View>
            <View style={styles.actionButtons}>
              {editId === item.id ? (
                <TouchableOpacity onPress={saveEdit}>
                  <Feather name="check" size={24} color="#D1D5DB" style={{ marginLeft: 5 }}  />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity onPress={() => editItem(item.id, item.name)}>
                  <Feather name="edit" size={24} color="#D1D5DB" />
                </TouchableOpacity>
              )}
              <Pressable onPress={() => removeItem(item.id)}>
                <AntDesign name="delete" size={24} color="#D1D5DB" />
              </Pressable>
            </View>
          </View>
        ))}
      </View>

      {buys.length > 0 && (
        <View style={styles.footer}>
          <TouchableOpacity onPress={clearAll} style={styles.clearButton}>
            <Text style={styles.textClearButton}>Remover todos</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F5FB",
    paddingHorizontal: 30,
    paddingTop: 60,
    alignItems: "center",
  },
  title: {
    color: "#111827",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 50,
  },
  input: {
    width: "100%",
    height: 44,
    borderWidth: 1,
    borderColor: "#D1D5D8",
    borderRadius: 12,
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  editInput: {
    flex: 1,
    height: 44,
    borderWidth: 1,
    borderColor: "#D1D5D8",
    borderRadius: 12,
    paddingHorizontal: 20,
    fontSize: 16,
    backgroundColor: "#FFFFFF",
  },
  button: {
    width: "100%",
    height: 44,
    backgroundColor: "#10aa31",
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  clearButton: {
    width: "100%",
    height: 44,
    backgroundColor: "#e53935",
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  textButton: {
    fontWeight: "bold",
    color: "#FFFF",
    fontSize: 16,
  },
  textClearButton: {
    fontWeight: "bold",
    color: "#FFF",
    fontSize: 16,
  },
  card: {
    width: "100%",
    height: 57,
    backgroundColor: "#FFFFFF",
    elevation: 15,
    borderRadius: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  infoCard: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    flex: 1,
  },
  textItem: {
    color: "#374151",
    fontSize: 16,
    flex: 1,
  },
  actionButtons: {
    flexDirection: "row",
    gap: 10,
  },
  cardContainer: {
    gap: 20,
    marginBottom: 20,
  },
  footer: {
    position: "absolute",
    bottom: 20,
    width: "100%",
    paddingHorizontal: 30,
  },
});