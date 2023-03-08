export type stateType = {
  name: string;
  alias: string;
  url: string;
  landMarks: Array<landMark>;
  description: string;
};

export type landMark = {
  name: string;
  location: string;
};
