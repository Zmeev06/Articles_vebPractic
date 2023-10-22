enum enumPath {
    CONSTRUCTOR = "constructor",
    ARTICLE = "article",
    NOTFOUND = "not_found",
}

export const pathRoutes: Record<enumPath, string> = {
    [enumPath.ARTICLE]: "/article/:title",
    [enumPath.CONSTRUCTOR]: "/constructor",
    [enumPath.NOTFOUND]: "/not_found",
}