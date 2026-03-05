import { ProfitValues } from '@/domains/business/profit/Profit';

export const calcProfit = async (values: ProfitValues): Promise<{
  generationTime: number;
  rateOfReturn: number;
  monthlyProfit: number;
  annualProfit: number;
} | undefined> => {
  const { 
    // 사업지유형
    areaType, 
    // 설치용량
    capacity, 
    // SMP 가격
    smpPrice,
    // REC 가격
    recPrice,
    // 공사비
    constructionCost, 
    // 발전 시간
    generationTime,
  } = values;

  if (areaType.value === 'land') {
    switch (true) {
      // 100kW 미만 - 가중치 1.2
      case capacity < 100: {
        const smpRecRate = calcSmpRecRate(smpPrice, recPrice, 1.2);
        const annualProfit = calcAnnualProfit(generationTime, smpRecRate, capacity);
        const rateOfReturn = calcRateOfReturn(annualProfit, capacity, constructionCost);
        const monthlyProfit = annualProfit / 12;

        return {
          generationTime,
          rateOfReturn,
          monthlyProfit,
          annualProfit,
        };
      }
      // 100kW 이상 3000kW 이하 - 가중치 1.0
      case capacity <= 3000: {
        const smpRecRate = calcSmpRecRate(smpPrice, recPrice, 1.0);
        const annualProfit = calcAnnualProfit(generationTime, smpRecRate, capacity);
        const rateOfReturn = calcRateOfReturn(annualProfit, capacity, constructionCost);
        const monthlyProfit = annualProfit / 12;

        return {
          generationTime,
          rateOfReturn,
          monthlyProfit,
          annualProfit,
        };
      }
      // 3000kW 초과 - 가중치 0.8
      default: {
        const smpRecRate = calcSmpRecRate(smpPrice, recPrice, 0.8);
        const annualProfit = calcAnnualProfit(generationTime, smpRecRate, capacity);
        const rateOfReturn = calcRateOfReturn(annualProfit, capacity, constructionCost);
        const monthlyProfit = annualProfit / 12;

        return {
          generationTime,
          rateOfReturn,
          monthlyProfit,
          annualProfit,
        };
      }
    }
  }

  if (areaType.value === 'building') {
    switch (true) {
      // 3000kW 이하 - 가중치 1.5
      case capacity <= 3000: {
        const smpRecRate = calcSmpRecRate(smpPrice, recPrice, 1.5);
        const annualProfit = calcAnnualProfit(generationTime, smpRecRate, capacity);
        const rateOfReturn = calcRateOfReturn(annualProfit, capacity, constructionCost);
        const monthlyProfit = annualProfit / 12;

        return {
          generationTime,
          rateOfReturn,
          monthlyProfit,
          annualProfit,
        };
      }
      // 3000kW 초과 - 가중치 1.3
      default: {
        const smpRecRate = calcSmpRecRate(smpPrice, recPrice, 1.3);
        const annualProfit = calcAnnualProfit(generationTime, smpRecRate, capacity);
        const rateOfReturn = calcRateOfReturn(annualProfit, capacity, constructionCost);
        const monthlyProfit = annualProfit / 12;

        return {
          generationTime,
          rateOfReturn,
          monthlyProfit,
          annualProfit,
        };
      }
    }
  }
}

// SMP + REC * 가중치
const calcSmpRecRate = (smpPrice: number, recPrice: number, weight: number) => {
  return smpPrice + recPrice * weight;
}

// 연간 수익금 계산
const calcAnnualProfit = (generationTime: number, calcSmpRecRate: number, capacity: number) => {
  return generationTime * calcSmpRecRate * capacity * 365;
}

// 수익률 계산
const calcRateOfReturn = (annualProfit: number, capacity: number, constructionCost: number) => {
  return (annualProfit / (capacity * constructionCost)) * 100;
}