import "../styles/main.css";
import "katex/dist/katex.min.css";
import "tippy.js/animations/scale-subtle.css";
import "tippy.js/dist/tippy.css";
import "tippy.js/themes/material.css";
import "easymde/dist/easymde.min.css";
import "../components/Dashboard/heatmap-styles.css";
import "react-calendar-heatmap/dist/styles.css";
import "instantsearch.css/themes/algolia.css";
import type { AppProps } from "next/app";
import { GoogleAnalytics } from "@next/third-parties/google";
import GlobalErrorBoundary from "../context/GlobalErrorBoundary";
import { FirebaseProvider } from "../context/FirebaseContext";
import { UserDataProvider } from "../context/UserDataContext/UserDataContext";
import { DarkModeProvider } from "../context/DarkModeProvider";
import { SignInProvider } from "../context/SignInContext";
import { UserGroupsProvider } from "../hooks/groups/useUserGroups";
import { EditorContext } from "../context/EditorContext";
import { Toaster } from "react-hot-toast";
import { BlindModeProvider } from "../context/BlindModeContext";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const GA_MEASUREMENT_ID =
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? "G-1JGYFFBHXN";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={inter.className}>
      {GA_MEASUREMENT_ID && <GoogleAnalytics gaId={GA_MEASUREMENT_ID} />}
      <GlobalErrorBoundary>
        <FirebaseProvider>
          <UserDataProvider>
            <DarkModeProvider>
              <SignInProvider>
                <UserGroupsProvider>
                  <BlindModeProvider>
                    <EditorContext.Provider value={{ inEditor: false }}>
                      <Component {...pageProps} />
                    </EditorContext.Provider>
                  </BlindModeProvider>
                </UserGroupsProvider>
              </SignInProvider>
            </DarkModeProvider>
          </UserDataProvider>
        </FirebaseProvider>
      </GlobalErrorBoundary>
      <Toaster position="top-right" />
    </div>
  );
}
