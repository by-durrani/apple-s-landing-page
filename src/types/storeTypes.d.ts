declare interface MacbookStoreTypes {
  color: string;
  scale: number;

  setColor: (color: string) => void;
  setScale: (scale: number) => void;

  reset: () => void;
}
