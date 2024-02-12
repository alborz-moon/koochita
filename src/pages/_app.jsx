import { store } from "@/component/store";
import { ThemeProvider } from "@emotion/react";
import { Provider } from "react-redux";
import { theme } from "../component/theme";
import "../app/globals.css"

export default function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
}
