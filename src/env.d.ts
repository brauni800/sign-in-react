/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_URL: string
  readonly VITE_SIGN_IN_PATH: string
  readonly VITE_GET_USER_DATA_PATH: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
