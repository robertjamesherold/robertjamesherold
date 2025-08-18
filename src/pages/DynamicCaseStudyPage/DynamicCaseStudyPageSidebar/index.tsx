type CaseStudySidebarProps = {
  children: React.ReactNode
}
export function CaseStudySidebar({  children  }: CaseStudySidebarProps) {
  return (
    <aside className='grid-md2-xl1'>
      {children}
    </aside>
  )
}
