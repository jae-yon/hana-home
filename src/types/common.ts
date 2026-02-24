// 가중치
export type Weight = 0.5 | 1.0 | 1.2 | 1.5;

// 지역
export type Region = 'ALL' | 'LAND' | 'JEJU';

export type PortfolioType = 'Residential' | 'PPA' | 'RPS';

// 사업실적
export interface Portfolio {
  id: number;
  image: string;
  title: string;
  module: string;
  inverter: string;
  capacity: string;
  isVisible: boolean;
  type: PortfolioType;
  isMainVisible: boolean;
}