export type MonthProps = {
  month: string;
  content: {
    movies?: string[];
    tv_shows?: string[];
    comics?: string[];
    games?: { title: string; perfect?: boolean }[];
    books?: string[];
    audiobooks?: string[];
  };
};
