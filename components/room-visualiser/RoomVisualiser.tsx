'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ALL_COLOURS, COLOUR_FAMILIES } from '@/lib/colours';
import { ROOM_TEMPLATES } from '@/lib/data';
import { RoomTemplate, RoomZone } from '@/lib/types';

// SVG illustrations for each room
function LivingRoomSVG({ zoneColours, activeZone }: { zoneColours: Record<string, string>; activeZone: string | null }) {
  return (
    <svg viewBox="0 0 800 480" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
      <defs>
        <filter id="vis-shadow"><feDropShadow dx="0" dy="3" stdDeviation="6" floodColor="#1A1917" floodOpacity="0.12" /></filter>
        <linearGradient id="vis-floor" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#D4C5B0" /><stop offset="100%" stopColor="#C0B09A" /></linearGradient>
        <linearGradient id="vis-ceil" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#F0EDE8" /><stop offset="100%" stopColor="#E8E4DD" /></linearGradient>
      </defs>
      {/* Main wall */}
      <rect x="0" y="0" width="800" height="380"
        fill={zoneColours['main-wall'] || '#F5F0E8'}
        className="room-wall"
        stroke={activeZone === 'main-wall' ? '#C4956B' : 'none'}
        strokeWidth={activeZone === 'main-wall' ? '3' : '0'}
        strokeDasharray={activeZone === 'main-wall' ? '8 4' : '0'}
      />
      {/* Feature wall */}
      <rect x="0" y="0" width="200" height="380"
        fill={zoneColours['feature-wall'] || '#D4D1CB'}
        className="room-wall"
        stroke={activeZone === 'feature-wall' ? '#C4956B' : 'none'}
        strokeWidth={activeZone === 'feature-wall' ? '3' : '0'}
        strokeDasharray={activeZone === 'feature-wall' ? '8 4' : '0'}
      />
      {/* Ceiling */}
      <rect x="0" y="0" width="800" height="55"
        fill={zoneColours['ceiling'] || '#F5F0E8'}
        className="room-wall"
        stroke={activeZone === 'ceiling' ? '#C4956B' : 'none'}
        strokeWidth={activeZone === 'ceiling' ? '3' : '0'}
        strokeDasharray={activeZone === 'ceiling' ? '8 4' : '0'}
      />
      {/* Ceiling gradient overlay */}
      <rect x="0" y="0" width="800" height="55" fill="url(#vis-ceil)" fillOpacity="0.3" />
      <line x1="0" y1="55" x2="800" y2="55" stroke="#C8BFA9" strokeWidth="1" />
      {/* Skirting */}
      <rect x="0" y="368" width="800" height="14"
        fill={zoneColours['trim'] || '#FFFFFF'}
        className="room-wall"
        stroke={activeZone === 'trim' ? '#C4956B' : 'none'}
        strokeWidth={activeZone === 'trim' ? '2' : '0'}
        strokeDasharray={activeZone === 'trim' ? '6 3' : '0'}
      />
      {/* Floor */}
      <rect x="0" y="380" width="800" height="100" fill="url(#vis-floor)" />
      {/* Sofa */}
      <g filter="url(#vis-shadow)">
        <rect x="160" y="310" width="480" height="70" rx="5" fill="#D8D2C8" />
        <rect x="168" y="258" width="464" height="58" rx="5" fill="#CDC7BD" />
        <rect x="148" y="266" width="46" height="112" rx="5" fill="#C8C2B8" />
        <rect x="606" y="266" width="46" height="112" rx="5" fill="#C8C2B8" />
        <line x1="310" y1="312" x2="310" y2="378" stroke="#BEB8AE" strokeWidth="1.5" />
        <line x1="490" y1="312" x2="490" y2="378" stroke="#BEB8AE" strokeWidth="1.5" />
      </g>
      {/* Window */}
      <g filter="url(#vis-shadow)">
        <rect x="310" y="72" width="180" height="230" rx="2" fill="#E8E4DC" stroke="#D0CAC0" strokeWidth="1.5" />
        <rect x="320" y="82" width="160" height="208" fill="#D4EAF5" fillOpacity="0.7" />
        <rect x="320" y="183" width="160" height="5" fill="#E8E4DC" />
        <rect x="397" y="82" width="5" height="208" fill="#E8E4DC" />
      </g>
    </svg>
  );
}

function BedroomSVG({ zoneColours, activeZone }: { zoneColours: Record<string, string>; activeZone: string | null }) {
  return (
    <svg viewBox="0 0 800 480" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
      <defs>
        <filter id="bed-shadow"><feDropShadow dx="0" dy="3" stdDeviation="6" floodColor="#1A1917" floodOpacity="0.12" /></filter>
        <linearGradient id="bed-floor" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#D4C5B0" /><stop offset="100%" stopColor="#C0B09A" /></linearGradient>
      </defs>
      {/* Walls */}
      <rect x="0" y="0" width="800" height="380"
        fill={zoneColours['walls'] || '#F5F0E8'} className="room-wall"
        stroke={activeZone === 'walls' ? '#C4956B' : 'none'}
        strokeWidth={activeZone === 'walls' ? '3' : '0'}
        strokeDasharray={activeZone === 'walls' ? '8 4' : '0'}
      />
      {/* Ceiling */}
      <rect x="0" y="0" width="800" height="55"
        fill={zoneColours['ceiling'] || '#F5F0E8'} className="room-wall"
        stroke={activeZone === 'ceiling' ? '#C4956B' : 'none'}
        strokeWidth={activeZone === 'ceiling' ? '3' : '0'}
        strokeDasharray={activeZone === 'ceiling' ? '8 4' : '0'}
      />
      <line x1="0" y1="55" x2="800" y2="55" stroke="#C8BFA9" strokeWidth="1" />
      {/* Skirting */}
      <rect x="0" y="368" width="800" height="13" fill="#E8E4DC" />
      {/* Floor */}
      <rect x="0" y="380" width="800" height="100" fill="url(#bed-floor)" />
      {/* Wardrobe */}
      <g filter="url(#bed-shadow)">
        <rect x="50" y="80" width="200" height="300"
          fill={zoneColours['wardrobe'] || '#FFFFFF'} className="room-wall"
          stroke={activeZone === 'wardrobe' ? '#C4956B' : '#D0CAC0'}
          strokeWidth={activeZone === 'wardrobe' ? '3' : '1'}
          strokeDasharray={activeZone === 'wardrobe' ? '8 4' : '0'}
        />
        <line x1="150" y1="80" x2="150" y2="380" stroke="#C8C2B8" strokeWidth="1.5" />
        <circle cx="145" cy="225" r="4" fill="#C8BFA9" />
        <circle cx="155" cy="225" r="4" fill="#C8BFA9" />
        {/* Wardrobe top panel */}
        <rect x="50" y="80" width="200" height="30" fill="#E0DAD0" />
        <line x1="50" y1="110" x2="250" y2="110" stroke="#D0CAC0" strokeWidth="1" />
      </g>
      {/* Bed */}
      <g filter="url(#bed-shadow)">
        <rect x="280" y="250" width="440" height="130" rx="4" fill="#D8D2C8" />
        <rect x="280" y="200" width="440" height="58" rx="6" fill="#CDC7BD" />
        <rect x="280" y="198" width="440" height="12" rx="4" fill="#E8E2D8" />
        {/* Pillows */}
        <rect x="300" y="208" width="160" height="44" rx="6" fill="#F0EDE8" />
        <rect x="480" y="208" width="160" height="44" rx="6" fill="#ECEAE4" />
        {/* Duvet */}
        <rect x="280" y="252" width="440" height="80" rx="4" fill="#E4DED6" />
        <line x1="500" y1="252" x2="500" y2="332" stroke="#D8D2C8" strokeWidth="1" />
        {/* Bed legs */}
        <rect x="290" y="370" width="14" height="12" rx="2" fill="#A89880" />
        <rect x="696" y="370" width="14" height="12" rx="2" fill="#A89880" />
      </g>
      {/* Bedside table */}
      <g filter="url(#bed-shadow)">
        <rect x="695" y="290" width="70" height="8" rx="2" fill="#C4B8A8" />
        <rect x="702" y="298" width="6" height="60" rx="2" fill="#C0B4A4" />
        <rect x="751" y="298" width="6" height="60" rx="2" fill="#C0B4A4" />
        <rect x="695" y="354" width="70" height="4" rx="1" fill="#B8AC9C" />
        {/* Lamp */}
        <rect x="718" y="268" width="4" height="24" rx="2" fill="#C8C0B4" />
        <path d="M710 268 L748 268 L742 290 L716 290 Z" fill="#E8DFD0" stroke="#D4C8B8" strokeWidth="1" />
      </g>
    </svg>
  );
}

function KitchenSVG({ zoneColours, activeZone }: { zoneColours: Record<string, string>; activeZone: string | null }) {
  return (
    <svg viewBox="0 0 800 480" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
      <defs>
        <filter id="kit-shadow"><feDropShadow dx="0" dy="3" stdDeviation="6" floodColor="#1A1917" floodOpacity="0.12" /></filter>
        <linearGradient id="kit-floor" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#E0D8CC" /><stop offset="100%" stopColor="#CCC0B0" /></linearGradient>
        <linearGradient id="kit-counter" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#D8D4CE" /><stop offset="100%" stopColor="#C8C4BE" /></linearGradient>
      </defs>
      {/* Walls */}
      <rect x="0" y="0" width="800" height="380"
        fill={zoneColours['walls'] || '#F5F0E8'} className="room-wall"
        stroke={activeZone === 'walls' ? '#C4956B' : 'none'}
        strokeWidth={activeZone === 'walls' ? '3' : '0'}
        strokeDasharray={activeZone === 'walls' ? '8 4' : '0'}
      />
      {/* Ceiling */}
      <rect x="0" y="0" width="800" height="55"
        fill={zoneColours['ceiling'] || '#F5F0E8'} className="room-wall"
        stroke={activeZone === 'ceiling' ? '#C4956B' : 'none'}
        strokeWidth={activeZone === 'ceiling' ? '3' : '0'}
        strokeDasharray={activeZone === 'ceiling' ? '8 4' : '0'}
      />
      <line x1="0" y1="55" x2="800" y2="55" stroke="#C8BFA9" strokeWidth="1" />
      {/* Floor */}
      <rect x="0" y="380" width="800" height="100" fill="url(#kit-floor)" />
      {/* Floor tiles */}
      {[0,1,2,3].map(row => [0,1,2,3,4].map(col => (
        <rect key={`${row}-${col}`} x={col * 160} y={380 + row * 25} width="158" height="23" fill="none" stroke="#D4CCC0" strokeWidth="0.5" />
      )))}
      {/* Upper cabinets */}
      <g filter="url(#kit-shadow)">
        <rect x="0" y="70" width="340" height="140"
          fill={zoneColours['cabinets'] || '#FFFFFF'} className="room-wall"
          stroke={activeZone === 'cabinets' ? '#C4956B' : '#D0CAC0'}
          strokeWidth={activeZone === 'cabinets' ? '2' : '1'}
          strokeDasharray={activeZone === 'cabinets' ? '6 3' : '0'}
        />
        <line x1="113" y1="70" x2="113" y2="210" stroke="#C8C2B8" strokeWidth="1" />
        <line x1="226" y1="70" x2="226" y2="210" stroke="#C8C2B8" strokeWidth="1" />
        {/* Handles */}
        <rect x="53" y="135" width="8" height="30" rx="4" fill="#B8B0A8" />
        <rect x="166" y="135" width="8" height="30" rx="4" fill="#B8B0A8" />
        <rect x="279" y="135" width="8" height="30" rx="4" fill="#B8B0A8" />
      </g>
      {/* Window above sink */}
      <g filter="url(#kit-shadow)">
        <rect x="360" y="80" width="200" height="140" rx="2" fill="#E8E4DC" stroke="#D0CAC0" strokeWidth="1.5" />
        <rect x="370" y="90" width="180" height="118" fill="#D4EAF5" fillOpacity="0.7" />
        <rect x="370" y="146" width="180" height="4" fill="#E8E4DC" />
        <rect x="457" y="90" width="4" height="118" fill="#E8E4DC" />
      </g>
      {/* Right upper cabinets */}
      <g filter="url(#kit-shadow)">
        <rect x="580" y="70" width="220" height="140"
          fill={zoneColours['cabinets'] || '#FFFFFF'} className="room-wall"
          stroke={activeZone === 'cabinets' ? '#C4956B' : '#D0CAC0'}
          strokeWidth={activeZone === 'cabinets' ? '2' : '1'}
          strokeDasharray={activeZone === 'cabinets' ? '6 3' : '0'}
        />
        <line x1="690" y1="70" x2="690" y2="210" stroke="#C8C2B8" strokeWidth="1" />
        <rect x="626" y="135" width="8" height="30" rx="4" fill="#B8B0A8" />
        <rect x="736" y="135" width="8" height="30" rx="4" fill="#B8B0A8" />
      </g>
      {/* Lower cabinets + counter */}
      <g filter="url(#kit-shadow)">
        <rect x="0" y="260" width="340" height="120"
          fill={zoneColours['cabinets'] || '#FFFFFF'} className="room-wall"
          stroke={activeZone === 'cabinets' ? '#C4956B' : '#D0CAC0'}
          strokeWidth={activeZone === 'cabinets' ? '2' : '1'}
          strokeDasharray={activeZone === 'cabinets' ? '6 3' : '0'}
        />
        <rect x="340" y="252" width="460" height="128"
          fill={zoneColours['cabinets'] || '#FFFFFF'} className="room-wall"
          stroke={activeZone === 'cabinets' ? '#C4956B' : '#D0CAC0'}
          strokeWidth={activeZone === 'cabinets' ? '2' : '1'}
          strokeDasharray={activeZone === 'cabinets' ? '6 3' : '0'}
        />
        {/* Countertop */}
        <rect x="0" y="248" width="800" height="16" rx="2" fill="url(#kit-counter)" />
        {/* Handles bottom */}
        <rect x="110" y="300" width="30" height="6" rx="3" fill="#B8B0A8" />
        <rect x="220" y="300" width="30" height="6" rx="3" fill="#B8B0A8" />
        {/* Sink */}
        <rect x="385" y="256" width="165" height="70" rx="3" fill="#C8D4D8" stroke="#B8C8D0" strokeWidth="1" />
        <circle cx="540" cy="270" r="6" fill="#C0B8B0" />
        {/* Dividers */}
        <line x1="113" y1="260" x2="113" y2="380" stroke="#C8C2B8" strokeWidth="1" />
        <line x1="226" y1="260" x2="226" y2="380" stroke="#C8C2B8" strokeWidth="1" />
        <line x1="570" y1="260" x2="570" y2="380" stroke="#C8C2B8" strokeWidth="1" />
        <line x1="680" y1="260" x2="680" y2="380" stroke="#C8C2B8" strokeWidth="1" />
      </g>
    </svg>
  );
}

const ROOM_SVGS = {
  'living-room': LivingRoomSVG,
  'bedroom': BedroomSVG,
  'kitchen': KitchenSVG,
};

export function RoomVisualiser() {
  const [activeRoom, setActiveRoom] = useState<RoomTemplate>(ROOM_TEMPLATES[0]);
  const [activeZone, setActiveZone] = useState<string>(ROOM_TEMPLATES[0].zones[0].id);
  const [zoneColours, setZoneColours] = useState<Record<string, Record<string, string>>>({});

  const currentRoomColours = zoneColours[activeRoom.id] || {};
  const RoomSVG = ROOM_SVGS[activeRoom.id as keyof typeof ROOM_SVGS];

  const handleColourSelect = (hex: string) => {
    setZoneColours(prev => ({
      ...prev,
      [activeRoom.id]: {
        ...(prev[activeRoom.id] || {}),
        [activeZone]: hex,
      },
    }));
  };

  const handleReset = () => {
    setZoneColours(prev => ({ ...prev, [activeRoom.id]: {} }));
  };

  const selectedZoneData = activeRoom.zones.find(z => z.id === activeZone);
  const selectedColourHex = currentRoomColours[activeZone];
  const selectedColourData = ALL_COLOURS.find(c => c.hex === selectedColourHex);

  // Summary: zones that have been coloured
  const colouredZones = activeRoom.zones.filter(z => currentRoomColours[z.id]);

  return (
    <section id="visualiser" className="py-24 lg:py-36" style={{ backgroundColor: '#F0EDEA' }}>
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-10 lg:mb-14">
          <p className="text-xs tracking-widest uppercase mb-4" style={{ color: '#7A756E' }}>Interactive Tool</p>
          <h2
            className="font-serif mb-4"
            style={{
              fontFamily: 'var(--font-display, serif)',
              fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
              fontWeight: 400,
              color: '#1A1917',
            }}
          >
            Try the colours in your space.
          </h2>
          <p className="text-sm max-w-md mx-auto" style={{ color: '#7A756E' }}>
            Select a room, pick a zone, choose a colour. This is the first step to getting it right.
          </p>
          <p className="text-xs mt-2" style={{ color: '#C4956B' }}>
            Demo tool. Colours are representative and will vary on your specific walls and in your light conditions.
          </p>
        </div>

        {/* Room tabs */}
        <div className="flex gap-2 mb-6 justify-center flex-wrap">
          {ROOM_TEMPLATES.map(room => (
            <button
              key={room.id}
              onClick={() => {
                setActiveRoom(room);
                setActiveZone(room.zones[0].id);
              }}
              className="px-5 py-2.5 text-sm font-medium rounded-full transition-all duration-200"
              style={{
                backgroundColor: activeRoom.id === room.id ? '#1A1917' : 'transparent',
                color: activeRoom.id === room.id ? '#F5F3F0' : '#7A756E',
                border: '1px solid #E5E0DA',
              }}
            >
              {room.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Room preview - takes 2 columns */}
          <div className="lg:col-span-2">
            <div
              className="rounded-xl overflow-hidden"
              style={{
                backgroundColor: '#FAF9F6',
                border: '1px solid #E5E0DA',
                boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
              }}
            >
              <RoomSVG zoneColours={currentRoomColours} activeZone={activeZone} />
            </div>

            {/* Zone selector */}
            <div className="flex flex-wrap gap-2 mt-4">
              {activeRoom.zones.map(zone => (
                <button
                  key={zone.id}
                  onClick={() => setActiveZone(zone.id)}
                  className="flex items-center gap-2 px-4 py-2 text-sm rounded-full transition-all duration-200"
                  style={{
                    backgroundColor: activeZone === zone.id ? '#1A1917' : '#FAF9F6',
                    color: activeZone === zone.id ? '#F5F3F0' : '#7A756E',
                    border: '1px solid #E5E0DA',
                  }}
                >
                  {currentRoomColours[zone.id] && (
                    <span
                      className="inline-block rounded-full border border-white/40"
                      style={{
                        width: 12,
                        height: 12,
                        backgroundColor: currentRoomColours[zone.id],
                      }}
                    />
                  )}
                  {zone.label}
                </button>
              ))}
            </div>

            {/* Colour palette */}
            <div className="mt-5">
              <p className="text-xs tracking-widest uppercase mb-3 font-medium" style={{ color: '#7A756E' }}>
                Pick a colour for: {selectedZoneData?.label}
              </p>
              <div className="max-h-48 overflow-y-auto pr-1">
                {COLOUR_FAMILIES.map(family => (
                  <div key={family.name} className="mb-3">
                    <p className="text-xs mb-2" style={{ color: '#7A756E' }}>{family.name}</p>
                    <div className="flex flex-wrap gap-2">
                      {family.colours.map(colour => (
                        <button
                          key={colour.hex}
                          onClick={() => handleColourSelect(colour.hex)}
                          title={colour.name}
                          className="transition-all duration-200"
                          style={{
                            width: 36,
                            height: 36,
                            borderRadius: '50%',
                            backgroundColor: colour.hex,
                            border: selectedColourHex === colour.hex
                              ? `2px solid ${colour.hex}`
                              : '2px solid transparent',
                            boxShadow: selectedColourHex === colour.hex
                              ? `0 0 0 2px white, 0 0 0 3px ${colour.hex}`
                              : '0 1px 4px rgba(0,0,0,0.15)',
                            transform: selectedColourHex === colour.hex ? 'scale(1.15)' : 'scale(1)',
                          }}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Summary panel */}
          <div className="lg:col-span-1">
            <div
              className="rounded-xl p-6 h-full flex flex-col"
              style={{
                backgroundColor: '#FAF9F6',
                border: '1px solid #E5E0DA',
              }}
            >
              <p className="text-xs tracking-widest uppercase mb-5 font-medium" style={{ color: '#7A756E' }}>
                Your Colour Scheme
              </p>

              {colouredZones.length === 0 ? (
                <div className="flex-1 flex items-center justify-center">
                  <p className="text-sm text-center" style={{ color: '#7A756E' }}>
                    Select a zone and pick a colour to start building your scheme.
                  </p>
                </div>
              ) : (
                <div className="flex flex-col gap-3 flex-1">
                  {colouredZones.map(zone => {
                    const hex = currentRoomColours[zone.id];
                    const colourData = ALL_COLOURS.find(c => c.hex === hex);
                    return (
                      <div key={zone.id} className="flex items-center gap-3">
                        <div
                          className="rounded-full flex-shrink-0"
                          style={{ width: 36, height: 36, backgroundColor: hex, boxShadow: '0 1px 4px rgba(0,0,0,0.1)' }}
                        />
                        <div className="min-w-0">
                          <p className="text-xs font-medium truncate" style={{ color: '#1A1917' }}>
                            {zone.label}
                          </p>
                          <p className="text-xs truncate" style={{ color: '#7A756E' }}>
                            {colourData?.name || hex}
                          </p>
                          <p className="text-xs font-mono" style={{ color: '#7A756E', fontSize: '0.625rem' }}>
                            {hex}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}

              <div className="mt-6 pt-5" style={{ borderTop: '1px solid #E5E0DA' }}>
                <button
                  onClick={handleReset}
                  className="w-full py-2 text-sm transition-colors duration-200 mb-3"
                  style={{ color: '#7A756E' }}
                >
                  Reset this room
                </button>
                <a
                  href="/contact"
                  className="block w-full text-center py-3 text-sm font-medium text-white rounded transition-all duration-200"
                  style={{ backgroundColor: '#C4956B' }}
                >
                  Book a consultation &rarr;
                </a>
                <p className="text-xs text-center mt-3" style={{ color: '#7A756E' }}>
                  We will bring the real swatches.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
