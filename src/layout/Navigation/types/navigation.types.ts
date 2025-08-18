// types/navigation.types.ts

export type NavigationItem = {
  label: string;
  href: string;
  subItems?: Array<{ label: string; href: string }>;
}

export type NavigationProps = {
  className?: string;
}


export type MenuToggleProps = {
  isOpen: boolean;
  onClick: () => void;
  className?: string;
}

export type OverlayProps = {
  isOpen: boolean;
  items: NavigationItem[];
  onClose: () => void;
}