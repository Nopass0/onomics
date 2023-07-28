import { type AppType } from "next/app";
import { api } from "~/utils/api";
import "~/styles/globals.css";
import Layout from "./layout";
import { ThemeProvider } from "next-themes";
const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <ThemeProvider>

      </ThemeProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};

export default api.withTRPC(MyApp);
