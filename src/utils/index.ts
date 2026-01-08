export const createPageUrl = (page: string): string => {
  if (page === "Accueil") return "/";
  return `/${page.toLowerCase()}`;
};