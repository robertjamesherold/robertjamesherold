
export type CardProps = {
  icon: string; 
  title: React.ReactNode; 
  text: string;
  tag?: string; 
  tags?: string[]
}

export function Card({ icon, title, text, tag }: CardProps) {
  return (
    <div className='card'>
      <div className='cardiconXL textcenter'>{icon}</div>
      <div className='cardcontent textcenter'>
        <div className='cardtitle'>{title}</div>
        <p className='carddescription'>{text}</p>
        {tag &&  <div className='cardtags'>
          <div className='cardtag'>{tag}</div>
        </div>}
      </div>
    </div>
  );
}