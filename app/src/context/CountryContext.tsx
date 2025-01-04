import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface CountryContextType {
  countryCode: string | null;
  setCountryCode: React.Dispatch<React.SetStateAction<string | null>>;
}

const CountryContext = createContext<CountryContextType | undefined>(undefined);

export const CountryProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [countryCode, setCountryCode] = useState<string | null>(null);

  useEffect(() => {
    const fetchCountryCode = async () => {
      try {
        const response = await fetch('https://ipapi.co/country/');
        if (response.ok) {
          const country = await response.text();
          setCountryCode(country);
        }
      } catch (error) {
        console.error('Failed to fetch country code:', error);
        setCountryCode(null);
      }
    };

    fetchCountryCode();
  }, []);

  return (
    <CountryContext.Provider value={{ countryCode, setCountryCode }}>
      {children}
    </CountryContext.Provider>
  );
};

export const useCountry = (): CountryContextType => {
  const context = useContext(CountryContext);
  if (!context) {
    throw new Error('useCountry must be used within a CountryProvider');
  }
  return context;
};
