'use client'
import './globals.css';
import React ,{useState} from 'react';
import 'primeicons/primeicons.css';
import { PrimeReactProvider } from 'primereact/api';
import 'primeflex/primeflex.css';
import 'primereact/resources/primereact.css';
export default function RootLayout({ children }) {
  const [theme, setTheme] = useState('saga-blue');
  const changeTheme = (themePath) => {
    setTheme(themePath);
  };
  return (
    <html lang="en">
      <head>
        <link id="theme-link" rel="stylesheet" href={`/themes/${theme}/theme.css`}/>
      </head>
      <body>
        <React.StrictMode>
          <PrimeReactProvider>
          <div>
              <button onClick={() => changeTheme('saga-blue')}>Saga Blue</button>
              <button onClick={() => changeTheme('lara-light-cyan')}>Lara Light Cyan</button>
              <button onClick={() => changeTheme('lara-light-green')}>Lara Light Green</button>
            </div>
              {children}
          </PrimeReactProvider>
        </React.StrictMode>
      </body>
    </html>
  );
}