import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const badgeVariants = cva(
  'inline-flex cursor-default rounded-full items-center px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
  {
    variants: {
      variant: {
        default: ' bg-primary text-primary-foreground ',
        secondary: 'bg-secondary text-secondary-foreground',
        muted: 'bg-muted text-foreground',
        destructive: 'bg-destructive text-destructive-foreground',
        outline: 'text-foreground',
        glass: 'bg-gray-600/[.35] backdrop-blur-3xl text-primary',
        success: 'text-success-foreground bg-success flex gap-2',
        warning: 'text-warning-foreground bg-warning flex gap-2',
        danger: 'text-danger-foreground bg-danger flex gap-2',
        feature: 'text-orange bg-orange/20 flex gap-2',
        learnMore: 'text-purple bg-purple/20 flex gap-2'
      }
    },
    defaultVariants: {
      variant: 'default'
    }
  }
);

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  );
}

export { Badge, badgeVariants };
