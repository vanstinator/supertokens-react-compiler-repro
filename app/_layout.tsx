import { useColorScheme } from '@/hooks/useColorScheme';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';
import SuperTokens from 'supertokens-react-native';

SuperTokens.init({
  apiDomain: 'http://localhost:8081',
  apiBasePath: '/api/auth',
  tokenTransferMethod: 'header',
  autoAddCredentials: true,
})

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    async function fetchSomeData() {

      const response = await fetch('http://localhost:8081', {
        method: 'GET',
      });
      console.log('we made it here')
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      console.log(await response.text());
    }

    console.log('Fetching data...');

    fetchSomeData().then(() => {
      console.log('Data fetched successfully');
    }
    ).catch((error) => {
      console.error('Error fetching data:', error);
    });
  })

    if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
 