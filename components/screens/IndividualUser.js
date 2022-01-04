import React from "react";
import { StyleSheet, View } from "react-native";
import { Paragraph, Text } from "react-native-paper";
import Screen from "../common/Screen";
import UserProfileNavBar from "../individual/UserProfileNav";
import AppText from "../common/AppText";
import paperTheme from "../../config/paperTheme";
import { useRoute } from "@react-navigation/core";
import { useDispatch, useSelector } from "react-redux";
import { fetchTransaction } from "../../store/transaction";

function IndividualUser(props) {
  const route = useRoute();
  const dispatch = useDispatch();
  const userId = route?.params?.userId;
  const users = useSelector((state) => state.user.list);
  const user = users.filter((user) => user.id === userId)[0];
  const transaction = useSelector((state) => state.transaction);
  React.useEffect(() => {
    dispatch(fetchTransaction(user?.id));
  }, []);
  const positivepayment = transaction.list.reduce(
    (p, c) => (c.amount > 0 ? p + c.amount : p),
    0
  );
  const negativepayment = transaction.list.reduce(
    (p, c) => (c.amount < 0 ? p + c.amount : p),
    0
  );
  return (
    <Screen style={styles.root} navBar={<UserProfileNavBar user={user} />}>
      <PaymentCard
        borderBottom
        left={<AppText>Recived form {user?.name}</AppText>}
        right={<AppText bold>₹{-negativepayment}</AppText>}
      />
      <PaymentCard
        left={<AppText>Given to {user?.name}</AppText>}
        right={<AppText bold>₹{positivepayment}</AppText>}
        borderBottom
      />
      <PaymentCard
        left={<AppText>Total</AppText>}
        right={<AppText bold>₹{positivepayment + negativepayment}</AppText>}
      />
      <AppText size={16} style={styles.heading}>
        Transactions
      </AppText>
      {transaction?.list?.map((txn) => (
        <PaymentCard
          key={txn.id}
          left={
            <Paragraph style={{ maxWidth: "80%" }}>{txn.comment}</Paragraph>
          }
          right={<AppText bold>₹{txn.amount}</AppText>}
        />
      ))}
      {!transaction?.list?.length && (
        <AppText light center>
          Create new transaction using + button
        </AppText>
      )}
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
  root: {},
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
