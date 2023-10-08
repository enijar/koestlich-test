import { create } from "zustand";
import type { Language } from "@/types";

type AppState = {
  language: Language;
  setLanguage: (language: AppState["language"]) => void;
};

export const appState = create<AppState>((setState) => {
  return {
    language: "en",
    setLanguage(language) {
      setState({ language });
    },
  };
});
