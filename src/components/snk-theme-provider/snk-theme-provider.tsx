import React from 'react';
import { ISnkThemeProviderProps } from './snk-theme-provider.types';
import "./snk-theme-provider.scss";

export const ThemeContext = React.createContext({});

const SnkThemeProvider = (props: ISnkThemeProviderProps) => {
  const { theme } = props;

  React.useEffect(() => {
    const style = {
      '--snk-primary-accent': theme.primaryAccent || 'orange',
      '--snk-secondary-accent': theme.secondaryAccent || '#282828',
      '--snk-primary-color': theme.primaryColor || '#000',
      '--snk-secondary-color': theme.secondaryColor || '#fff',
      '--snk-border-radius': theme.borderRadius || '4px',
      '--snk-main-bg': theme.mainBg || '#fff',
    } as React.CSSProperties;

    for (const variable in style) {
      document.documentElement.style.setProperty(variable, style[variable]);
    }
  }, []);

  return (
    <ThemeContext.Provider value={theme.mainBg ? theme : {}} >
      {props.children}
    </ThemeContext.Provider>
  );
}

export default SnkThemeProvider;