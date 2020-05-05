export interface ISnkThemeProviderProps {
  theme?: {
    primaryAccent: string;
    secondaryAccent: string;
    secondaryColor: string;
    primaryColor: string;
    borderRadius: string;
    mainBg: string;
  },
  children: React.ReactChild
}