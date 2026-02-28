import { useEffect, useRef } from 'react';

import { MAP_NAVER_API_URL } from '@/shared/config/constants';

import { MapLocation } from '@/types/common';

declare global { interface Window { naver: any; } }

const DEFAULT_LOCATION = { lat: 37.5665, lng: 126.9780 };

interface MapProps {
  location?: MapLocation;
}

export default function Map({ location: locationProp }: MapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const location = locationProp ?? DEFAULT_LOCATION;

  useEffect(() => {
    const script = document.createElement('script');
    script.src = MAP_NAVER_API_URL;
    script.onload = () => {
      const { naver } = window as any;
      const center = new naver.maps.LatLng(location.lat, location.lng);

      new naver.maps.Map(mapRef.current, {
        center,
        zoom: 15,
      });
    };

    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [location.lat, location.lng]);

  return (
    <div ref={mapRef} style={{ width: '100%', height: 400 }} />
  );
}