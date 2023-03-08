export type stateType = {
  name: string;
  alias: string;
  capital: string;
  url: string;
  landMarks: Array<landMarkType>;
  description: string;
};

export type landMarkType = {
  name: string;
  location: string;
  url: string;
  rating: number;
};
