/* eslint-disable prettier/prettier */
// types/DataTypes.ts
export interface DataItem {
    id: number;
    name: string;
    // other fields...
  }
  
  export interface DataState {
    items: DataItem[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null | undefined;
  }
  