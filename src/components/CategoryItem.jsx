import { Pressable, StyleSheet, Text } from "react-native";
import Card from "./Card";

const CategoryItem = ({ category, navigation }) => {
  return (
    <Pressable onPress={() => navigation.navigate("ItemListCategories", {category})}>
      <Card style={styles.cardContainer}>
        <Text style={styles.text}>🔸{category}</Text>
      </Card>
    </Pressable>
  );
};

export default CategoryItem;

const styles = StyleSheet.create({
  cardContainer: {
    marginVertical: 10,
    padding: 10,
    justifyContent: "center",
    alignItems: "flex-start",
    borderRadius: 10,
  },
  text: {
    color: "#431e0b",
    fontSize: 20,
    textTransform: "capitalize",
    fontFamily: "Lexend",
  },
});
