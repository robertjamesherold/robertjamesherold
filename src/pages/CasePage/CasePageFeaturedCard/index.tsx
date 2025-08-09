import React from 'react';
import { ViewIcon } from '@icons/ViewIcon';
import { Link } from 'react-router-dom';

type CaseType = {
  image: string;
  title: string;
  description: string;
  link: string;
  technologies: string[];
};

export type FeaturedCardProps = {
  Case: CaseType;
};

export function FeaturedCard({ Case }: FeaturedCardProps) {
  return (
    <div className="bigcard">
      <div className="bigcardimage">
        <img src={Case.image} alt={Case.title} />
        <div className="bigcardoverlay">
          <Link to={Case.link} className="bigcardviewproject">
            <span><ViewIcon /></span>&nbsp; Projekte ansehen
          </Link>
        </div>
      </div>

      <div className="bigcardcontent">
        <div className="cardtitle">{Case.title}</div>
        <p className="carddescription shrink">{Case.description}</p>

        <div className="bigcardtags">
          {Case.technologies.map((tech, index) => (
            <span key={index} className="cardtag">{tech}</span>
          ))}
        </div>
      </div>
    </div>
  );
}