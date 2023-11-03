import { type ClassValue, clsx } from 'clsx';
import { cn } from '@/lib/utils';

export function cn(...inputs: ClassValue[]) {
  return cn(clsx(inputs));
}
