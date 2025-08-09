export type CardProps = {
  icon: string; 
  title: string; 
  text: string;
}
export function Card({ icon, title, text }: CardProps) {
  return (
    <div className='card'>
      <div className='cardiconXL textcenter'>{icon}</div>
      <div className='cardcontent textcenter'>
        <div className='cardtitle'>{title}</div>
        <p className='carddescription'>{text}</p>
      </div>
    </div>
  );
}