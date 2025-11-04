interface ImportMetaEnv {
  readonly VITE_API_BASE_URL: string;
  readonly VITE_DEFAULT_LANGUAGE: 'he' | 'en' | 'ar';
  readonly VITE_SECURE_LOCAL_STORAGE_KEY: string;
  readonly VITE_DEFAULT_DATE_FORMAT: string; // e.g. "DD.MM.YYYY"
  readonly VITE_VERSION_DATE: string; // e.g. "04.04.2025"
  readonly VITE_IS_PILOT: 'true' | 'false';
  readonly VITE_IS_SELECT_LANGUAGE: 'true' | 'false';
  readonly VITE_DATABASE_NAME: string;
  readonly VITE_CURRENT_TIMEZONE: string; // e.g. "Asia/Jerusalem"
  readonly VITE_USE_NEW_UI: 'true' | 'false' | boolean;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
