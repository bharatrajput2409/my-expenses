import React from "react";
import { StyleSheet, View } from "react-native";
import { Paragraph, Text } from "react-native-paper";
import Screen from "../common/Screen";
import UserProfileNavBar from "../individual/UserProfileNav";
import AppText from "../common/AppText";
import paperTheme from "../../config/paperTheme";

function IndividualUser(props) {
  return (
    <Screen style={styles.root} navBar={<UserProfileNavBar />}>
      <PaymentCard
        borderBottom
        left={<AppText>Recived form Ankit Gupta</AppText>}
        right={<AppText bold>$123</AppText>}
      />
      <PaymentCard
        left={<AppText>Given to Ankit Gupta</AppText>}
        right={<AppText bold>$123</AppText>}
        borderBottom
      />
      <PaymentCard
        left={<AppText>Total</AppText>}
        right={<AppText bold>$0</AppText>}
      />
      <AppText size={16} style={styles.heading}>
        Transactions
      </AppText>
      <PaymentCard
        left={
          <Paragraph style={{ maxWidth: "80%" }}>
            Samosa party payed by me.Samosa party payed by me
          </Paragraph>
        }
        right={<AppText bold>$100</AppText>}
      />
    </Screen>
  );
}

function PaymentCard({ left, right, borderTop, borderBottom }) {
  const style = {
    borderStyle: "solid",
    borderColor: "rgba(0,0,0,0.1)",
  };
  if (borderTop) style.borderTopWidth = 1;
  if (borderBottom) style.borderBottomWidth = 1;
  return (
    <View style={[styles.paymentCard, style]}>
      {left}
      {right}
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: paperTheme.colors.background,
  },
  paymentCard: {
    display: "flex",
    padding: 15,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  heading: {
    padding: 10,
  },
});
export default IndividualUser;
