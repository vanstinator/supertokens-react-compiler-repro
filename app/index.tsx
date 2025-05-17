import { useEffect, useState } from "react";
import { Platform, Text, View } from "react-native";
import SuperTokens from "supertokens-react-native";

const isWeb = Platform.OS === "web";

if (Platform.OS !== "web") {
  SuperTokens.init({
    apiDomain: "http://localhost:8081",
    apiBasePath: "/api/auth",
    tokenTransferMethod: "header",
    autoAddCredentials: true,
  });
}

export default function Index() {
  const [text, setText] = useState("");


  useEffect(() => {
      const fetchText = async function fetchText() {
        try {
          const response = await fetch("http://localhost:8081/");
          const text_0 = await response.text();
          setText(text_0);
        } catch (t2) {
          const error = t2;
          setText(error instanceof Error ? error.message : String(error));
        }
      };  

    fetchText();
  }, []);

  return (
    <View>
      <Text>{text}</Text>
    </View>
  );

}
