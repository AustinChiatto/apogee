import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getStatusClass = (id: number) => {
  if ([6, 1, 3].includes(id)) {
    return 'success';
  } else if ([8, 5, 2].includes(id)) {
    return 'warning';
  } else if ([4, 7].includes(id)) {
    return 'danger';
  } else {
    return 'secondary';
  }
};

export const translateDate = (dateString: string): string => {
  const dateObj = new Date(dateString);
  const now = new Date();
  const diffInMilliseconds = now.getTime() - dateObj.getTime();
  const diffInHours = diffInMilliseconds / (1000 * 60 * 60);

  const isSameYear = now.getFullYear() === dateObj.getFullYear();
  const isYesterday =
    diffInHours >= 24 && diffInHours < 48 && now.getDate() - dateObj.getDate() === 1 && isSameYear;

  if (diffInHours < 0) {
    if (Math.abs(diffInHours) < 24) {
      return `Today at ${dateObj.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
      })}`;
    }
    if (Math.abs(diffInHours) < 48) {
      return `Tomorrow at ${dateObj.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
      })}`;
    }
    if (Math.abs(diffInHours) < 24 * 365 && isSameYear) {
      return dateObj.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    }
    return dateObj.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  }

  if (diffInHours < 24) {
    return `${Math.floor(diffInHours)} hours ago`;
  }
  if (isYesterday) {
    return `Yesterday at ${dateObj.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    })}`;
  }
  if (diffInHours < 24 * 365 && isSameYear) {
    return dateObj.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  }

  return dateObj.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
};
