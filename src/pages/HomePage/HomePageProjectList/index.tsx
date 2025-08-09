import React from 'react';
import styles from './_ProjectList.module.scss'
import { Link } from 'react-router-dom';
import { ViewIcon } from '/src/assets/icons';

interface ProjectCardProps {
  image: any; // TODO: Replace 'any' with proper type
  alt: any; // TODO: Replace 'any' with proper type
  title: any; // TODO: Replace 'any' with proper type
  description: any; // TODO: Replace 'any' with proper type
  link: any; // TODO: Replace 'any' with proper type
  tags: any; // TODO: Replace 'any' with proper type
}
const ProjectCard: React.FC<ProjectCardProps> = ({  image, alt, title, description, link, tags  }) => (
  <div className='bigcard'>
      <div className='bigcardimage'>
        <img src={image} alt={title} />
        <div className='bigcardoverlay'>
          <Link to={link} className='bigcardviewproject'>
           <span><ViewIcon /></span>&nbsp; Projekte ansehen
          </Link>
        </div>
      </div>
      <div className='bigcardcontent'>
        <div className='cardtitle'>{title}</div>
        <p className='carddescription shrink'>{description}</p>

    <div className='bigcardtags'>
        {tags.map(tag => (
            <span key={tag} className='bigcardtag'>{tag}</span>
        ))}
    </div>
     </div>
  </div>
);

export default interface ProjectListProps {
  title: any; // TODO: Replace 'any' with proper type
  data: any; // TODO: Replace 'any' with proper type
  showCta?: boolean;
  link?: string;
  cta?: string;
}
function ProjectList({  title, data, showCta = true, link = '', cta = '' }: ProjectListProps) {
  return (
   <section>
          <h2 className='underlined-mid textcenter'>{title}</h2>
          <div className='grid-lg2 paddingTopSmall paddingBottomSmall'>
            {data.map((project: any, index: number) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
          {showCta && <div className={ styles.projectsCta }>
            <Link to={link} className='buttonprimary'>
              {cta}
            </Link>
          </div>}
        </section>
  );
}
export { ProjectList }