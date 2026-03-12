'use client';

import { createContext, useContext, useState, ReactNode } from 'react';
import { Colour } from './types';
import { HERO_COLOURS } from './colours';

interface ColourContextValue {
  selectedColour: Colour;
  setSelectedColour: (colour: Colour) => void;
  accentColour: string;
}

const ColourContext = createContext<ColourContextValue>({
  selectedColour: HERO_COLOURS[0],
  setSelectedColour: () => {},
  accentColour: '#C4956B',
});

export function ColourProvider({ children }: { children: ReactNode }) {
  const [selectedColour, setSelectedColour] = useState<Colour>(HERO_COLOURS[0]);

  return (
    <ColourContext.Provider
      value={{
        selectedColour,
        setSelectedColour,
        accentColour: selectedColour.complementaryAccent,
      }}
    >
      {children}
    </ColourContext.Provider>
  );
}

export function useColour() {
  return useContext(ColourContext);
}
