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
  heading?: string | ReactNode;
  children?: ReactNode;
  isTitle?: boolean;
};

export const Card = ({ variant = 'default', children, className }: CardProps) => {
  const variants = {
    default: 'min-h-[9rem] bg-card p-6',
    image: 'p-0 relative border',
    tall: 'min-h-[24rem] bg-card p-6',
    sectionLabel: 'p-6 pt-12 pb-[1.125rem] pl-2 bg-background'
  };

  const cardVariant = variants[variant];

  return (
    <section className={`flex-1 flex flex-col col-span-2 lg:col-span-1 justify-between rounded-lg overflow-hidden ${cardVariant} ${className}`}>
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
          {heading && <h4 className={`leading-none ${isTitle ? 'heading-xl' : 'heading-lg'}`}>{heading}</h4>}
        </div>
      )}
      {children}
    </header>
  );
};

export const CardContent = ({ children, className }: BaseProps) => {
  return <div className={`pt-4 ${className}`}>{children}</div>;
};
