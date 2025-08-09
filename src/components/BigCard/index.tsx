import React from 'react';
import styles from './_ProjectList.module.scss'
import { Link } from 'react-router-dom';
import { ViewIcon } from '/src/assets/icons';

export type BigCardProps = {
  image: string; 
  alt: string; 
  title: string; 
  text: string; 
  link: string; 
  tags: string[]; 
}
export function BigCard({  image, alt, title, description, link, tags  }: BigCardProps){return(
  <div className='bigcard'>
      <div className='bigcardimage'>
        <img src={image} alt={alt} />
        <div className='bigcardoverlay'>
          <Link to={link} className='bigcardviewproject'>
           <span><ViewIcon /></span>&nbsp; Projekte ansehen
          </Link>
        </div>
      </div>
      <div className='bigcardcontent'>
        <div className='cardtitle'>{title}</div>
        <p className='carddescription'>{text}</p>

    <div className='bigcardtags'>
        {tags.map(tag => (
            <span key={tag} className='bigcardtag'>{tag}</span>
        ))}
    </div>
     </div>
  </div>
)}