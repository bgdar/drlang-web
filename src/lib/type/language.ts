export const translations = {
  'en-US': {
    nav: {
      navTitle: '> Menu',
      socialTitle: '> Socials',
      langTitle: '> Language',
      home: 'Home',
      about: 'About',
      projects: 'Projects',
      contact: 'Contact'
    },
    index: {
      heroDescription:
        'A programming language focused on high performance and ease of use.',
    },
      install: {
      installSubtitle:
        'Follow the steps below to install the Dr Lang Compiler on your computer in seconds.'
    }
  },
  'id-ID': {
    nav: {
      navTitle: '> Menu',
      socialTitle: '> Sosial Media',
      langTitle: '> Bahasa',
      home: 'Beranda',
      about: 'Tentang',
      projects: 'Proyek',
      contact: 'Kontak'
    },
 index : {
        heroDescription:
        'Bahasa pemrograman yang berfokus pada performa tinggi dan kemudahan dalam penggunaan.',
    },
    install: {
      installSubtitle:
        'Ikuti langkah-langkah di bawah ini untuk memasang Kompilator Dr Lang di komputer Anda dalam hitungan detik.'
    }
  }
} as const;


export type Locale = keyof typeof translations;

// Mengambil struktur tipe dari salah satu bahasa sebagai acuan
type TranslationSchema = (typeof translations)['en-US'];
export type TranslationKey = NestedKeyOf<TranslationSchema>;
// Helper type untuk membuat union path otomatis: 'nav.navTitle' | 'index.installSubtitle' | dst.
type NestedKeyOf<T extends object> = {
  [K in keyof T & string]: T[K] extends object
    ? `${K}.${keyof T[K] & string}`
    : K;
}[keyof T & string];


// Konstanta key yang dikelompokkan sesuai sub-datanya
export const LANG_KEYS = {
  NAV: {
    NAV_TITLE: 'nav.navTitle',
    SOCIAL_TITLE: 'nav.socialTitle',
    LANG_TITLE: 'nav.langTitle',
    HOME: 'nav.home',
    ABOUT: 'nav.about',
    PROJECTS: 'nav.projects',
    CONTACT: 'nav.contact'
  },
  INDEX : {
    HERO_DESCRIPTION: 'index.heroDescription',
  },
  INSTALL: {
    INSTALL_SUBTITLE: 'install.installSubtitle'
  }
} as const;
