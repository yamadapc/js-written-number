declare module "written-number" {
  export type DefaultLanguage =
    | "en"
    | "es"
    | "ar"
    | "az"
    | "pt"
    | "prPT"
    | "fr"
    | "eo"
    | "it"
    | "vi"
    | "tr"
    | "hu"
    | "enIndian"
    | "uk"
    | "ru"
    | "id"

  export type WrittenNumberOptions = {
    noAnd?: boolean
    alternativeBase?: Record<string, string> | null
    lang?: DefaultLanguage | string
  }

  export default function writtenNumber(
    n: number,
    options?: WrittenNumberOptions
  ): string
}
