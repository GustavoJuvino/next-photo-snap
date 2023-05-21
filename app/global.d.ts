export {};

declare global {
    interface dataProps {
        id: number;
        title: string;
        author: string;
        date?: string;
        src: string;
      };
}