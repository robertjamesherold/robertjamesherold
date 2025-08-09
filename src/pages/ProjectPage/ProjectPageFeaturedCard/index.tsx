import React from 'react';
import { ViewIcon } from '@icons/ViewIcon';
import { Link } from 'react-router-dom';

export type FeaturedCardProps = {
  project: Record<string, any>
}
export function FeaturedCard({  project  }: FeaturedCardProps) {
  return (
  <div className='bigcard'>
      <div className='bigcardimage'>
        <img src={project.image} alt={project.title} />
        <div className='bigcardoverlay'>
          <Link to={project.link} className='bigcardviewproject'>
           <span><ViewIcon /></span>&nbsp; Projekte ansehen
          </Link>
        </div>
      </div>
      <div className='bigcardcontent'>
        <div className='cardtitle'>{project.title}</div>
        <p className='carddescription shrink'>{project.description}</p>

        <div className='bigcardtags'>
          {project.technologies.map((tech: any, index: number) => (
            <span key={index} className='cardtag'>{tech}</span>
          ))}
        </div>
      </div>
    </div>
  )
}
