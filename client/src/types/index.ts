// Project types
export type ProjectCategory = "ai" | "web" | "automation";

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: ProjectCategory;
  categoryLabel: string;
  technologies: string[];
  link?: string;
}

// Idea types
export interface Idea {
  id: number;
  title: string;
  description: string;
  status: string;
  tags: string[];
}

// Media types
export interface VideoItem {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  duration: string;
  date: string;
  url?: string;
}
