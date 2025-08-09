import React from 'react';
import { Container } from '../../layout/Container'

import { ServiceList}  from './ContactPageServiceList'
import { FormCard } from './ContactPageForm'
import { serviceData } from './ContactPageData'

export function ContactPage() {
  return (
    <main>
      <Container span={{ default: 12 }}>
    <h1 className='colored textcenter'>Kontakt</h1>
  </Container>
      
      <Container span={{ default: 12, lg: 7}}>
          
          {/* Kontaktformular */}
          <FormCard >
        </FormCard>
  </Container>
      <Container span={{ default: 12, lg: 5 }}>

        {/* Values Section */}
        <ServiceList
          data={serviceData}
        />
  </Container>
      

   
    </main>
  )
}