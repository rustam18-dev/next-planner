import {IBase} from "@/types/root.types";

export interface ITimeBlockResponse extends IBase {
  name: string
  color?: number
  duration: number
  order: number
}

export type TypeTimeBlockFormState = Partial<Omit<ITimeBlockResponse, 'id' | 'updatedAt'>>
