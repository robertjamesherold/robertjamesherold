import type { IconProps } from './types/IconProps'

export function MailIcon({ height, width }: IconProps) {
  return (
      <a className='socialLink' href="mailto:me@robertjamesherold.com" aria-label="E-Mail">
      <svg width={width} height={height} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20 4H4C2.897 4 2 4.897 2 6v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2ZM20 6v.511l-8 5.333-8-5.333V6h16Zm0 12H4V8.489l8 5.333 8-5.333V18Z"/>      </svg>
    </a>
  )
}