import AuthHttpRequest from "@/components/fetch";
import { useEffect, useState } from "react";
import { Platform, Text, View } from "react-native";

if (Platform.OS !== "web") {
  // SuperTokens.init({
  //   apiDomain: "http://localhost:8081",
  //   apiBasePath: "/api/auth",
  //   tokenTransferMethod: "header",
  //   autoAddCredentials: true,
  // });

  AuthHttpRequest.init({
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
          setText(await response.text());
        } catch (error) {
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
