export type SearchResult = {
  key: number;
  text: string;
};

function createResults(length: number): SearchResult[] {
  return Array.from({ length }, (_, i) => ({
    key: i,
    text: `${i}`.padStart(6, "0"),
  }));
}

export const results = createResults(20_000);
