
export interface NavItem {
  label: string;
  path: string;
  icon?: string;
  colorClass?: string;
}

export interface ServiceCardProps {
  title: string;
  description: string;
  points: string[];
  cta: string;
  colorClass: string;
  icon: string;
}

export interface FYCQuestion {
  q: string;
  options: { text: string; score: number }[];
  insight?: string;
}
