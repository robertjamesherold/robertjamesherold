import { Container } from '../../layout/Container';
import { FilterNav } from './CasePageFilterNav';
import { CasesGrid } from './CasePageGrid';
import { CallToAction } from '../../components/CallToAction';
import { useCaseFilter } from './useCaseFilter';
import { CaseCategories, CasesData } from './CasePageData';

// Typen
export type CaseCategory = {
  id: string;
  name: string;
};

export type Case = {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  technologies?: string[];
  link?: string;
  [key: string]: any;
};

export type UniversalCasePageProps = {
  headerTitle: string;
  headerText?: string;
  featuredTitle: string;
  filterTitle: string;
  categories: CaseCategory[];
  casesData: Case[]; // ✅ camelCase statt CasesData
  showCTA?: boolean;
  ctaTitle?: string;
  ctaDescription?: string;
  ctaPrimaryText?: string;
  ctaPrimaryLink?: string;
  ctaSecondaryText?: string;
  ctaSecondaryLink?: string;
  showPrimaryButton?: boolean;
  showSecondaryButton?: boolean;
};

export function UniversalCasePage({
  headerTitle,
  headerText,
  filterTitle,
  categories,
  casesData,
  showCTA = true,
  ctaTitle,
  ctaDescription,
  ctaPrimaryText,
  ctaPrimaryLink,
  ctaSecondaryText,
  ctaSecondaryLink,
  showPrimaryButton = true,
  showSecondaryButton = false,
}: UniversalCasePageProps) {
  const {
    activeFilter,
    setActiveFilter,
    filteredCases,
  } = useCaseFilter(casesData);

  return (
    <main>
      <Container span={{ default: 12 }}>
        <h1 className="colored textcenter">{headerTitle}</h1>
        {headerText && <p className="textcenter">{headerText}</p>}
      </Container>

      {/* All Cases Section */}
      <Container span={{ default: 12 }}>
        <FilterNav
          title={filterTitle}
          categories={categories}
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
        />
        <CasesGrid Cases={filteredCases} />
      </Container>

      {/* Call to Action */}
      {showCTA && (
        <Container span={{ default: 12 }}>
          <CallToAction
            title={ctaTitle ?? 'Bereit für Ihr nächstes Design-Projekt?'}
            text={
              ctaDescription ??
              'Lassen Sie uns gemeinsam Ihre Ideen visuell zum Leben erwecken. Ich freue mich auf Ihre Nachricht!'
            }
            primaryButtonText={ctaPrimaryText ?? 'Kontaktiere mich'}
            primaryButtonLink={ctaPrimaryLink ?? '/kontakt'}
            secondaryButtonText={ctaSecondaryText}
            secondaryButtonLink={ctaSecondaryLink}
            showPrimaryButton={showPrimaryButton}
            showSecondaryButton={showSecondaryButton}
          />
        </Container>
      )}
    </main>
  );
}

export function CasePage() {
  return (
    <UniversalCasePage
      headerTitle="Meine Fallstudien"
      featuredTitle="Ausgewählte Fallstudien"
      filterTitle="Alle Fallstudien"
      categories={CaseCategories}
      casesData={CasesData}
    />
  );
}