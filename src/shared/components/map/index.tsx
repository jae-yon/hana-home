import { useEffect, useRef } from 'react';

import { MAP_NAVER_API_URL } from '@/shared/config/constants';

import { MapLocation } from '@/types/map';

declare global { interface Window { naver: any; } }

const DEFAULT_LOCATION: MapLocation = { lat: 37.5665, lng: 126.9780 };

interface MapProps {
  location?: MapLocation;
}

export default function Map({ location: locationProp }: MapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);
  const markerRef = useRef<any>(null);
  const location = locationProp ?? DEFAULT_LOCATION;

  useEffect(() => {
    const initMap = () => {
      const { naver } = window as any;
      const center = new naver.maps.LatLng(location.lat, location.lng);

      const map = new naver.maps.Map(mapRef.current, {
        center,
        zoom: 16,
      });
      mapInstanceRef.current = map;

      const marker = new naver.maps.Marker({
        position: center,
        map,
      });
      markerRef.current = marker;
    };

    if (typeof window !== 'undefined' && (window as any).naver?.maps) {
      initMap();
    } else {
      const script = document.createElement('script');
      script.src = MAP_NAVER_API_URL;
      script.onload = initMap;
      document.head.appendChild(script);

      return () => {
        if (markerRef.current) {
          markerRef.current.setMap(null);
          markerRef.current = null;
        }
        mapInstanceRef.current = null;
        document.head.removeChild(script);
      };
    }

    return () => {
      if (markerRef.current) {
        markerRef.current.setMap(null);
        markerRef.current = null;
      }
      mapInstanceRef.current = null;
    };
  }, [location.lat, location.lng]);

  return (
    <div ref={mapRef} style={{ width: '100%', height: 500 }} />
  );
}