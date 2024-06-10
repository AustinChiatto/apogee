type Props = {
  variant: 'success' | 'warning' | 'danger' | 'primary' | 'secondary' | 'muted' | 'accent';
};

const variants = {
  success: 'bg-success-foreground',
  warning: 'bg-warning-foreground',
  danger: 'bg-danger-foreground',
  primary: 'bg-primary',
  secondary: 'bg-secondary',
  muted: 'bg-muted',
  accent: 'bg-accent-foreground'
};

const AttemptMarker = ({ variant }: Props) => {
  return <span className={`inline-block w-4 h-2 rounded-full ${variants[variant]}`}></span>;
};

export default AttemptMarker;
