import type { FilterCategories } from '../types/filters';

export async function fetchFilterCategories(): Promise<FilterCategories> {
  // This would typically fetch from an API
  return {
    functions: [
      "coding",
      "design",
      "data",
      "sales",
      "marketing",
      "product",
      "legal",
      "operations",
      "content",
      "miscellaneous"
    ],
    extensions: [
      "developer",
      "computer_controller",
      "memory",
      "jetbrains",
      "git",
      "figma",
      "google_drive",
      "google_maps",
      "tavily_web_search"
    ]
  };
}