export interface Idiom {
    id: number
    chinese: string
    pinyin: string
    literalTranslation: string
    meaning: string
    example?: string
    story?: string
    categories: string[]
    audioUrl?: string
}
