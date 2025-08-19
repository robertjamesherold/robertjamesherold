import { CVSkills } from '../../components/CVSkills';
import { CVAchievements } from '../../components/CVAchievement';
import { CVLanguage } from '../../components/CVLanguage';
import { Flexbox } from '../../components/Flexbox';

// Typ für die sidesectionData Struktur
export type CVSideSectionData = Array<{
  skills?: {
    categories: Array<{
      title: string;
      skills: Array<{
        name: string;
        level: number; // Ihre Daten haben numbers
      }>;
    }>;
  };
  achievements?: {
    categories: Array<{
      title: string;
      achievements: Array<{
        name: string;
      }>;
    }>;
  };
  languages?: Array<{
    name: string;
    level: string;
  }>;
}>;

export type CVSideSectionProps = {
  data: CVSideSectionData;

};

export function CVSideSection({ data }: CVSideSectionProps) {
  // Extrahiere die verschiedenen Datentypen aus dem Array
  const skillsItem = data.find(item => item.skills);
  const achievementsItem = data.find(item => item.achievements);
  const languagesItem = data.find(item => item.languages);

  return (
    <Flexbox gap='large' justify='space-between' align='stretch'>
      {/* Skills Section */}
      {skillsItem?.skills && (
        <CVSkills 
          data={skillsItem.skills.categories.map(category => ({
            title: category.title,
            skills: category.skills.map(skill => ({
              name: skill.name,
              level: skill.level.toString() // Konvertiere number zu string
            }))
          }))} 
        />
      )}

      {/* Achievements Sections */}
     {achievementsItem?.achievements && (
        <CVAchievements
          data={achievementsItem.achievements.categories.map(category => ({
            title: category.title,
            achievements: category.achievements.map(achievement => ({
              name: achievement.name,
            }))
          }))} 
        />
      )}
      {/* Languages Section */}
      {languagesItem?.languages && (
        <CVLanguage data={languagesItem.languages} />
      )}
    </Flexbox>
  );
}