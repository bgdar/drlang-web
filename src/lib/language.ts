import { writable ,derived , get } from "svelte/store";
import { translations , type Locale, type TranslationKey  } from "./type/language";


 export let currentLang = writable<Locale>(getInitialLang());

   function getInitialLang(): Locale {
    if (typeof localStorage !== 'undefined') {
      const saved = localStorage.getItem('app_lang') as Locale | null;
      if (saved && saved in translations) {
        return saved;
      }
    }
    return 'en-US';
  }

  // Mengambil teks berdasarkan bahasa aktif saat ini
// Mendukung pemanggilan dot-notation ('nav.socialTitle' atau LANG_KEYS.NAV.SOCIAL_TITLE)
  // function t(key: TranslationKey): string {
  //   const activeLang = get(this.current);
  //   const [section, subKey] = key.split('.') as [
  //     keyof (typeof translations)[Locale],
  //     string
  //   ];
  //
  //   const sectionData = translations[activeLang]?.[section] as
  //     | Record<string, string>
  //     | undefined;
  //
  //   return sectionData?.[subKey] || key;
  // }

  // Derived store reaktif untuk template Svelte ($t)
  // t = derived(this.current, ($current) => {
  //   return (key: TranslationKey): string => translations[$current]?.[key] || key;
  // });

  // Fungsi mengubah bahasa & menyimpannya ke localStorage
 export function setLang(newLang: Locale) {
  currentLang.set(newLang);
  if (typeof localStorage !== 'undefined') {
    localStorage.setItem('app_lang', newLang);
  }
}

  // Helper non-reaktif (jika dibutuhkan di luar komponen .svelte)
  // function translateInstant(key: TranslationKey): string {
  //   const activeLang = get(this.current);
  //   return translations[activeLang]?.[key] || key;
  // }

// export const langState = new LanguageState();
// Store turunan yang otomatis memicu update UI saat currentLang berubah
export const langState = derived(currentLang, ($current) => {
  return {
    current: $current,
    setLang,
    t(key: TranslationKey): string {
      const [section, subKey] = key.split('.') as [
        keyof (typeof translations)[Locale],
        string
      ];

      const sectionData = translations[$current]?.[section] as
        | Record<string, string>
        | undefined;

      return sectionData?.[subKey] || key;
    }
  };
})
