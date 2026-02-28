// 지도 좌표 정보
export interface MapLocation {
  lat: number;
  lng: number;
}

// 주소 좌표 조회 반환값
export interface AddressToLocationResult {
  longitude: number;
  latitude: number;
  roadAddress: string;
  jibunAddress: string;
}