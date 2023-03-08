export type stateType = {
  name: string;
  alias: string;
  url: string;
  landMarks: Array<landMarkType>;
  description: string;
};

export type landMarkType = {
  name: string;
  location: string;
};
