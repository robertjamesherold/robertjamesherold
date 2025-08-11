import { AchievementsData } from "./AchievementsData";
import { AdditionalData } from "./AdditionalData";
import { EducationData } from "./EducationData";
import { ExperienceData } from "./ExperienceData";
import { SkillsData } from "./SkillsData";
import { LanguageData } from "./LanguageData";
import { CTAData } from "./CtAData";




export const cv = {
  education: EducationData,
  experience: ExperienceData,
  additional: AdditionalData,
  skills: SkillsData,
  achievements: AchievementsData,
  languages: LanguageData,
  cta: CTAData
};

export const sidesection = [
  SkillsData,
  AchievementsData,
  LanguageData
];