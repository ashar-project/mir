import { Card } from "./Card";

export const SomeTable = () => {
  return [1, 1, 1, 1].map(() => {
    <Card />;
  });
};
