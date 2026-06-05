export interface Page {
    id: string,
    name: string,
    emoji?: string
}

export interface PagesState {
    page_selected: string | null
}

export interface PagesList {
    pages: Page[]
}