enum enumPath {
  CONSTRUCTOR = 'constructor',
  ARTICLE = 'article',
  //   SEPARATE_ARTICLE = 'article/:normalised_title',
}

export const pathRoutes: Record<enumPath, string> = {
  [enumPath.ARTICLE]: '/article',
  //   [enumPath.SEPARATE_ARTICLE]: '/article/:normalised_title',
  [enumPath.CONSTRUCTOR]: '/constructor',
}
