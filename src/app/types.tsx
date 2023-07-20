export type ID = number | string;

export interface BookProps {
  id?: ID;
  name: string;
  price?: number;
  category: string;
  description?: string;
}
