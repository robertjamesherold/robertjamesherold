
export type ContactCardProps =  {
    icon?: string;
    title?: string;
    text?: string | string[];
    tag?: string;}
s

export const ContactData: ContactCardProps[] = [
  {
    icon: '📞',
    title: 'Telefon',
    text: '+49 151 616 60 444',
  },
  {
    icon: '📬',
    title: 'E-Mail',
    text: 'me@robertjamesherold.com'
  },
  {
    icon: '🏡',
    title: 'Adresse',
    text: ["Im Kammerfest 23", "63628 Bad Soden-Salmünster"]
  },
  {
    icon: '🕒',
    title: 'Verfügbarkeit',
    text: ["Montag bis Freitag","09:00 - 18:00"]
  }
]