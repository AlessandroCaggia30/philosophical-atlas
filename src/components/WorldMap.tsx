'use client';

import { useEffect, useRef, useState, useMemo } from 'react';
import Link from 'next/link';
import { traditions } from '@/data/traditions';
import { authors } from '@/data/authors';
import { formatYear, getTraditionColor } from '@/lib/utils';

interface MapMarker {
  id: string;
  type: 'tradition' | 'author';
  name: string;
  lat: number;
  lng: number;
  color: string;
  tradition?: string;
  period?: string;
}

export default function WorldMap() {
  const mapRef = useRef<HTMLDivElement>(null);
  const leafletMap = useRef<any>(null);
  const [loaded, setLoaded] = useState(false);
  const [showTraditions, setShowTraditions] = useState(true);
  const [showAuthors, setShowAuthors] = useState(true);
  const [selectedMarker, setSelectedMarker] = useState<MapMarker | null>(null);

  const markers = useMemo(() => {
    const result: MapMarker[] = [];

    if (showTraditions) {
      traditions.forEach(t => {
        if (t.location) {
          result.push({
            id: t.id,
            type: 'tradition',
            name: t.name,
            lat: t.location.lat,
            lng: t.location.lng,
            color: t.color,
            period: `${formatYear(t.timeSpan.start)} – ${t.timeSpan.end >= 2024 ? 'present' : formatYear(t.timeSpan.end)}`,
          });
        }
      });
    }

    if (showAuthors) {
      authors.forEach(a => {
        if (a.places.length > 0) {
          result.push({
            id: a.id,
            type: 'author',
            name: a.name,
            lat: a.places[0].lat,
            lng: a.places[0].lng,
            color: getTraditionColor(a.traditions[0] || ''),
            tradition: a.traditions[0],
            period: `${formatYear(a.dates.start)} – ${formatYear(a.dates.end)}`,
          });
        }
      });
    }

    return result;
  }, [showTraditions, showAuthors]);

  useEffect(() => {
    if (!mapRef.current || loaded) return;

    import('leaflet').then(L => {
      if (leafletMap.current) return;

      const map = L.map(mapRef.current!, {
        center: [25, 40],
        zoom: 3,
        minZoom: 2,
        maxZoom: 12,
        zoomControl: true,
      });

      L.tileLayer('https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; OpenStreetMap contributors &copy; CARTO',
        maxZoom: 20,
      }).addTo(map);

      leafletMap.current = map;
      setLoaded(true);
    });

    return () => {
      if (leafletMap.current) {
        leafletMap.current.remove();
        leafletMap.current = null;
      }
    };
  }, []);

  // Update markers
  useEffect(() => {
    if (!leafletMap.current || !loaded) return;

    import('leaflet').then(L => {
      const map = leafletMap.current;

      // Clear existing markers
      map.eachLayer((layer: any) => {
        if (layer instanceof L.CircleMarker) {
          map.removeLayer(layer);
        }
      });

      // Add markers
      markers.forEach(m => {
        const radius = m.type === 'tradition' ? 10 : 5;
        const marker = L.circleMarker([m.lat, m.lng], {
          radius,
          fillColor: m.color,
          color: '#fff',
          weight: m.type === 'tradition' ? 2 : 1,
          fillOpacity: 0.8,
        }).addTo(map);

        marker.bindTooltip(`<b>${m.name}</b><br/>${m.type}${m.period ? ` · ${m.period}` : ''}`, {
          className: 'leaflet-tooltip-custom',
        });

        marker.on('click', () => {
          setSelectedMarker(m);
        });
      });
    });
  }, [markers, loaded]);

  return (
    <div style={{ width: '100%', height: '100%', position: 'relative' }}>
      <div ref={mapRef} style={{ width: '100%', height: '100%' }} />

      {/* Controls */}
      <div style={{
        position: 'absolute',
        top: 16,
        right: 16,
        zIndex: 1000,
        background: 'var(--color-surface)',
        border: '1px solid var(--color-border)',
        borderRadius: 8,
        padding: '12px 16px',
        fontSize: 13,
      }}>
        <div style={{ fontWeight: 600, marginBottom: 8 }}>Show</div>
        <label style={{ display: 'flex', alignItems: 'center', gap: 6, cursor: 'pointer', marginBottom: 4 }}>
          <input type="checkbox" checked={showTraditions} onChange={e => setShowTraditions(e.target.checked)} />
          Traditions
        </label>
        <label style={{ display: 'flex', alignItems: 'center', gap: 6, cursor: 'pointer' }}>
          <input type="checkbox" checked={showAuthors} onChange={e => setShowAuthors(e.target.checked)} />
          Authors
        </label>
      </div>

      {/* Selected marker info */}
      {selectedMarker && (
        <div style={{
          position: 'absolute',
          bottom: 16,
          left: 16,
          zIndex: 1000,
          background: 'var(--color-surface)',
          border: '1px solid var(--color-border)',
          borderRadius: 8,
          padding: 16,
          maxWidth: 320,
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
            <div>
              <h3 style={{ margin: '0 0 4px', fontSize: 16 }}>{selectedMarker.name}</h3>
              <div style={{ fontSize: 12, color: 'var(--color-text-muted)' }}>
                {selectedMarker.type} {selectedMarker.period && `· ${selectedMarker.period}`}
              </div>
            </div>
            <button onClick={() => setSelectedMarker(null)}
              style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--color-text-muted)' }}>✕</button>
          </div>
          <Link href={`/${selectedMarker.type}/${selectedMarker.id}`}
            style={{ display: 'inline-block', marginTop: 8, fontSize: 13, color: 'var(--color-accent)', textDecoration: 'none' }}>
            View details →
          </Link>
        </div>
      )}
    </div>
  );
}
