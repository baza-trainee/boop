export interface ICounterItem {
  id: number;
  number: number;
  text: string;
  variant: string;
  order: number;
}

export type CounterFormData = Omit<ICounterItem, 'id' | 'order'>;
