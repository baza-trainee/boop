export type CounterData = ICounter[];

export interface ICounter {
  id: number;
  number: number;
  text: string;
  variant: string;
  order: number;
}
