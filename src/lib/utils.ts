import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const translateDate = (dateString: string): string => {
  const dateObj = new Date(dateString);
  const now = new Date();
  const diffInMilliseconds = dateObj.getTime() - now.getTime();
  const diffInHours = diffInMilliseconds / (1000 * 60 * 60);

  const isSameYear = now.getFullYear() === dateObj.getFullYear();

  if (diffInHours < 0) {
    return 'Past date'; // Handle past dates if needed
  } else if (diffInHours < 24) {
    return `Today at ${dateObj.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    })}`;
  } else if (diffInHours < 48) {
    return `Tomorrow at ${dateObj.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    })}`;
  } else if (diffInHours < 24 * 365 && isSameYear) {
    return dateObj.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  } else {
    return dateObj.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  }
};

export const getStatusClass = (id: number) => {
  if ([6, 1, 3].includes(id)) {
    return 'bg-green-500';
  } else if ([8, 5, 2].includes(id)) {
    return 'bg-yellow-500';
  } else if ([4, 7].includes(id)) {
    return 'bg-red-500';
  } else {
    return 'bg-gray-500'; // Fallback color if id doesn't match any condition
  }
};
