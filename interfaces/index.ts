// Button Component Props
export interface ButtonProps {
  label: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  disabled?: boolean;
  className?: string;
}

// Property Card Component Props
export interface CardProps {
  id: string;
  image: string;
  title: string;
  location: string;
  rating: number;
  price: number;
  onClick?: () => void;
}