import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Headline } from "react-native-paper";
import PersonalExpenseCard from "./PersonalExpenseCard";
import theme from "../../config/defaultStyle";

function PersonalTab(props) {
  const expenseFilters = ["Today", "Yesterday", "7 Days", , "One Month", "All"];
  const [activeFilter, setActiveFilter] = useState(expenseFilters[0]);
  const handleFilterSelect = (filter) => () => {
    setActiveFilter(filter);
  };
  return (
    <View style={styles.root}>
      <Headline style={styles.heading}>My Expenses</Headline>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.filterContainer}
        overScrollMode="always"
      >
        {expenseFilters.map((filter) => (
          <Text
            style={[
              styles.filter,
              activeFilter === filter && {
                backgroundColor: theme.palette.primary,
                color: "white",
              },
            ]}
            key={filter}
            onPress={handleFilterSelect(filter)}
          >
            {filter}
          </Text>
        ))}
      </ScrollView>
      <PersonalExpenseCard />
      <PersonalExpenseCard />
      <PersonalExpenseCard />
    </View>
  );
}
const styles = StyleSheet.create({
  root: {
    paddingHorizontal: 14,
  },
  heading: {
    fontSize: 14,
    fontWeight: "bold",
    color: "rgba(0,0,0,0.7)",
  },
  filterContainer: {
    display: "flex",
    flexDirection: "row",
    marginVertical: 10,
  },
  filter: {
    borderColor: theme.palette.primary,
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 20,
    marginRight: 10,
    paddingHorizontal: 15,
    paddingVertical: 5,
    color: "black",
  },
});
export default PersonalTab;
