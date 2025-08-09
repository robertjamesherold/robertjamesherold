import React from 'react';

type CaseStudySidebarProps = {
  children: any
}
export function CaseStudySidebar({  children  }: CaseStudySidebarProps) {
  return (
    <aside className='grid-md2-xl1'>
      {children}
    </aside>
  )
}
