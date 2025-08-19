import { Container } from '../../layout/Container';
import { FilterNav } from '../../components/FilterNav';
import { CTASection } from '../../components/CallToAction';
import { useFilter } from '../../hooks/useFilter';
import { cases, projects  } from '../../data/BigCardPage';
import { BigCardGrid } from '../../layout/BigCardGrid';
import { type BigCardProps } from '../../components/BigCard'; 
import { Header } from '../../layout/Header';

// Typen-Definitionen
export type Category = {
  id: string;
  label: string;
};

export type PageProps = {
  headerTitle?: string;
  headerText?: string;
  featuredTitle?: string;
  filterTitle?: string;
  caseCategories?: Category[];
  projectCategories?: Category[];
  casesData?: BigCardProps[];
  projectsData?: BigCardProps[];
  showCTA?: boolean;
};

export function CaseCardPage({
  showCTA = true,
}: PageProps) {
  const {
    activeFilter: activeCaseFilter,
    setActiveFilter: setActiveCaseFilter,
    filteredCases
  } = useFilter(cases.data);
  return (
    <main>
      <Header title='Meine Fallstudien'/>
        <Container>
          <FilterNav
            categories={cases.categories}
            activeFilter={activeCaseFilter}
            onFilterChange={setActiveCaseFilter}
          />
          <BigCardGrid 
            isPadding={true}
            showButton={false}
            grid={{lg:2}} 
            id='casestudys'
            data={filteredCases} 
          />
        </Container>
      {showCTA && (
        
          <CTASection id='cta' isPadding={false} isSection={true} data={cases.cta} />
        
      )}
    </main>
  );
}

export function ProjectCardPage({showCTA = true}: PageProps) {
// Destructuring mit Umbenennung für Projects
  const {
    activeFilter: activeProjectFilter,
    setActiveFilter: setActiveProjectFilter,
    filteredCases: filteredProjects
  } = useFilter(projects.data);

  return (
    <main>
      <Header title='Meine Projekte'/>
        <Container>
          <FilterNav
            categories={projects.categories}
            activeFilter={activeProjectFilter}
            onFilterChange={setActiveProjectFilter}
          />
          <BigCardGrid 
            isPadding={true}
            showButton={false}
            grid={{lg:2}} 
            id='casestudys'
 data={filteredProjects}          />
         
       
      </Container>
      {showCTA && (
          <CTASection id='cta' isPadding={false} isSection={true} data={cases.cta} />
      )}
    </main>
  );
}