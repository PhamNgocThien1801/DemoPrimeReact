'use client'
import './globals.css';
import React ,{useState} from 'react';
import 'primeicons/primeicons.css';
import { PrimeReactProvider } from 'primereact/api';
import 'primeflex/primeflex.css';
import 'primereact/resources/primereact.css';
import { Button } from 'primereact/button';
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
              <Button className='mx-3' onClick={() => changeTheme('saga-blue')}>Saga Blue</Button>
              <Button className='mx-3' onClick={() => changeTheme('lara-light-cyan')}>Lara Light Cyan</Button>
              <Button className='mx-3' onClick={() => changeTheme('lara-light-green')}>Lara Light Green</Button>
            </div>
              {children}
          </PrimeReactProvider>
        </React.StrictMode>
      </body>
    </html>
  );
}