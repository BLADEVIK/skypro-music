export type authPromise = {
  data: dataType | undefined;
  error: errorType | undefined;
};
type dataType = {
  id: number;
  username: string;
  first_name: string;
  last_name: string;
  email: string;
};
type errorType = {
  username: string[];
  email: string[];
  password: string[];
};
