export interface Product {
  id?: number;
  name?: string;
  price?: number;
  tva?: number;
}

export interface ResponseProducts {
  content: Product[];
  totalElements: number;
}

export interface Pageable {
  page: number;
  size: number;
}

export interface Links {
  label: string;
  link: string;
}
