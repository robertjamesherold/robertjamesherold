import React from 'react';
import { FeaturedCard } from '../CasePageFeaturedCard';

// Typdefinition – Verwendung von `type` statt `interface`
export type CaseType = {
  id: string | number;
  [key: string]: any;
};

export type CasesGridProps = {
  Cases: CaseType[];
};

export function CasesGrid({ Cases }: CasesGridProps) {
  return (
    <div className="grid-lg2 paddingTopSmall">
      {Cases.map((Case) => (
        <FeaturedCard key={Case.id} Case={Case} />
      ))}
    </div>
  );
}