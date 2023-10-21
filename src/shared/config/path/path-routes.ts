enum enumPath {
    CONSTRUCTOR = "constructor",
    ARTICLE = "article",
}

export const pathRoutes: Record<enumPath, string> = {
    [enumPath.ARTICLE]: "/article",
    [enumPath.CONSTRUCTOR]: "/constructor"
}