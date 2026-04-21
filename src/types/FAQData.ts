import type { ReactNode } from 'react';

export interface FAQItem {
  id: number;
  question: string;
  answer: string | ReactNode;
}