import * as React from "react";
import { FAB } from "react-native-paper";

import defaultStyle from "../../config/defaultStyle";

const AppFabs = () => {
  const [state, setState] = React.useState({ open: false });

  const onStateChange = ({ open }) => setState({ open });

  const { open } = state;

  return (
    <FAB.Group
      open={open}
      icon={open ? "calendar-today" : "plus"}
      fabStyle={{ backgroundColor: defaultStyle.palette.primary }}
      actions={[
        { icon: "plus", onPress: () => console.log("Pressed add") },
        {
          icon: "star",
          label: "Star",
          onPress: () => console.log("Pressed star"),
        },
        {
          icon: "email",
          label: "Email",
          onPress: () => console.log("Pressed email"),
        },
        {
          icon: "bell",
          label: "Remind",
          onPress: () => console.log("Pressed notifications"),
          small: false,
        },
      ]}
      onStateChange={onStateChange}
      onPress={() => {
        if (open) {
          // do something if the speed dial is open
        }
      }}
    />
  );
};

export default AppFabs;
