export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  github: string;
  live: string;
}

export interface Skill {
  name: string;
  iconName: string;
  level: number;
}