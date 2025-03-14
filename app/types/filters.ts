export type FilterType = "functions" | "extensions" | "verified";

export interface Filters {
  functions: string[];
  extensions: string[];
  verified: boolean;
}

export interface FilterCategories {
  functions: string[];
  extensions: string[];
}

export interface FilterCategory {
  id: string;
  name: string;
}