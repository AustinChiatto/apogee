import { ReactNode } from 'react';

type BaseProps = {
  children: ReactNode;
  className?: string;
};

interface CardProps extends BaseProps {
  variant?: 'default' | 'image' | 'tall' | 'sectionLabel';
}

type CardHeaderProps = {
  preHeading?: string;
  heading?: string;
  children?: ReactNode;
  isTitle?: boolean;
};

export const Card = ({ variant = 'default', children, className }: CardProps) => {
  const variants = {
    default: 'min-h-[9rem] bg-card p-[1.125rem]',
    image: 'p-0 relative border',
    tall: '',
    sectionLabel: 'pt-12 px-2 pb-[1.625rem] bg-background'
  };

  const cardVariant = variants[variant];

  return (
    <section
      className={`flex-1 flex flex-col justify-between rounded-2xl overflow-hidden ${cardVariant} ${className}`}
    >
      {children}
    </section>
  );
};

export const CardHeader = ({ preHeading, heading, children, isTitle }: CardHeaderProps) => {
  return (
    <header className={`${children && 'flex items-start justify-between'}`}>
      {(preHeading || heading) && (
        <div className="flex flex-col gap-1">
          {preHeading && <h3 className="heading-sm">{preHeading}</h3>}
          {heading && (
            <h4 className={`leading-none ${isTitle ? 'heading-xl' : 'heading-lg'}`}>{heading}</h4>
          )}
        </div>
      )}
      {children}
    </header>
  );
};

export const CardContent = ({ children, className }: BaseProps) => {
  return <div className={`pt-4 ${className}`}>{children}</div>;
};
