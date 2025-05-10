# Reproduction of a react compiler issue when using the `react-native-supertokens` library

The `react-native-supertokens` library attempts to replace the global `fetch` function when an application invokes `SuperTokens.init(...)`. In a vanilla project this works fine. When the React Compiler is enabled in the project calls to `fetch` result in a thrown exception of `TypeError: Cannot read property 'doRequest' of undefined`.

This is demonstrated in the `./app/_layout.tsx` file. `SuperTokens.init(...)` is called and a `fetch` call is made in the `useEffect` hook. If you either set `experiments.react-compiler: false` in `app.json` _or_ comment out the `SuperTokens.init(...)` call you can observe the `fetch` request complete and print out the stringified DOM for the app.

The SuperTokens patching of `fetch` is happening here:
https://github.com/supertokens/supertokens-react-native/blob/master/lib/ts/fetch.ts#L63-L91
