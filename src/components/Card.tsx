import { getStatusType } from '@/lib/utils';
import { Badge } from './ui/badge';
import { ReactNode } from 'react';

type BaseProps = {
  children: ReactNode;
  className?: string;
};

interface CardProps extends BaseProps {
  variant?: 'default' | 'wide' | 'tall';
}

type CardHeaderProps = {
  preHeading?: string;
  heading?: string;
  children?: ReactNode;
};

export const Card = ({ variant = 'default', children, className }: CardProps) => {
  const variants = {
    default: 'min-h-[9rem]',
    wide: '',
    tall: ''
  };

  const cardVariant = variants[variant];

  return (
    <section
      className={`flex-1 flex flex-col justify-between p-[1.125rem] rounded-2xl bg-card overflow-hidden ${cardVariant} ${className}`}
    >
      {children}
    </section>
  );
};

export const CardHeader = ({ preHeading, heading, children }: CardHeaderProps) => {
  return (
    <header className={`${children && 'flex items-start justify-between'}`}>
      {(preHeading || heading) && (
        <div className="flex flex-col gap-1">
          {preHeading && <h3 className="heading-sm">{preHeading}</h3>}
          {heading && <h4 className="heading-lg pt-1">{heading}</h4>}
        </div>
      )}
      {children}
    </header>
  );
};

export const CardContent = ({ children, className }: BaseProps) => {
  return <div className={`pt-4 ${className}`}>{children}</div>;
};
