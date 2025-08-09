export type StatCardProps = {
  title: string,
  text: string,
}
export function StatCard({ title, text }: StatCardProps) {
    return (
        <div className='card bgTer' style={{ width: '100%' }}>
      <div className='cardcontent textcenter'>
        <div style={{fontSize: '1.875rem', fontWeight: '700'}} className='textBlue'>{title}</div>
        <p style={{fontSize: '16px', fontWeight: '500'}} className='textPri'>{text}</p>
      </div></div>
  );
}