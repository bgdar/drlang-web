import {
  Briefcase,
  Camera,
  FolderGit2,
  UserCheck,
  type Component,
  type GitBranchPlus,
} from "@lucide/svelte";
import { pagesName, type pageLink } from "../type/pagesLink";

/*
 * @property onePage : mementukan apakah cuman di render sub halaman atau 1 halaman penuh
 */
export const pagesLinks: pageLink[] = [
  { name: pagesName.Index },
  { name: pagesName.Tools },
  { name: pagesName.Install },
  { name: pagesName.Docs },
  { name: pagesName.Blog },
];

export interface SocialLink {
  name: string;
  url: string;
  class: string;
  icon: Component;
}
export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/bgdar",
    icon: FolderGit2,
    class:
      "text-white-light-2 hover:text-white-light-1 hover:bg-main-3 border-main-3",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/nadhar2005",
    icon: Camera,
    class: "text-pink-400 hover:text-pink-300 hover:bg-main-3 border-main-3",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/muhammad-nadhar-36a323338",
    icon: UserCheck,
    class: "text-sky-400 hover:text-sky-300 hover:bg-main-3 border-main-3",
  },
  {
    name: "Portfolio",
    url: "https://bgdar.github.io/PortofolioV3/",
    icon: Briefcase,
    class:
      "text-emerald-400 hover:text-emerald-300 hover:bg-main-3 border-main-3",
  },
];
