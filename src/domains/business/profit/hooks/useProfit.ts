import { useQuery } from '@tanstack/react-query';

import supabase from '@/shared/config/supabase';

export const useCalcOptions = () => {
  return useQuery({
    queryKey: ['profit', 'options'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('calc_options')
        .select('*')
        .limit(1);

      if (error) throw error;

      return {
        constructionCost: data[0].construction_cost,
        loanRate: data[0].loan_ratio,
        loanInterestRate: data[0].interest_rate,
      }
    },
  })
}

export const getCalcResult = (values: any) => {
  const { 
    areaType, 
    capacity, 
    smpPrice,
    recPrice,
    constructionCost, 
    loanRate, 
    loanInterestRate,
    generationTime,
    rateOfReturn,
    monthlyProfit,
    annualProfit,
  } = values;

  if (areaType.value === 'land') {
    // 기본 발전 시간
    const defaultGenerationTime = 3.6;

    switch (true) {
      // 100kW 미만 - 가중치 1.2
      case capacity < 100: {
        // SMP + REC * 가중치
        const calcSmpRecRate = smpPrice + recPrice * 1.2;

        // 월 평균 수익금 계산 = 기본 발전 시간 * (SMP + REC * 가중치) * 설치용량 * 365 / 12
        const monthlyProfit = (defaultGenerationTime * calcSmpRecRate * capacity * 365) / 12;

        // 연간 수익금 계산 = 월 평균 수익금 * 12
        const yearlyProfit = monthlyProfit * 12;

        let calcRateOfReturn = 0;

        if (loanRate > 0 && loanInterestRate > 0) {
          // 수익률 계산 (대출 있음) = (연간 수익금 / 발전용량 * 공사비) * 100
          calcRateOfReturn = (yearlyProfit / (capacity * constructionCost)) * 100;
        } else {
          // 수익률 계산 (대출 없음) = (연간 수익금 / 발전용량 * 공사비) * 100
          calcRateOfReturn = (yearlyProfit / (capacity * constructionCost)) * 100;
        }

        return {
          // 발전 시간
          generationTime: defaultGenerationTime,
          // 수익률
          calcRateOfReturn,
          // 월 평균 수익금
          monthlyProfit,
          // 연간 수익금
          annualProfit: yearlyProfit,
        };
      }
      // 100kW 이상 3000kW 이하 - 가중치 1.0
      case capacity <= 3000: {
        // SMP + REC * 가중치
        const calcSmpRecRate = smpPrice + recPrice * 1.0;
        // 월 평균 수익금 계산 = 기본 발전 시간 * (SMP + REC * 가중치) * 설치용량 * 365 / 12
        const monthlyProfit = (defaultGenerationTime * calcSmpRecRate * capacity * 365) / 12;
        // 연간 수익금 계산 = 월 평균 수익금 * 12
        const yearlyProfit = monthlyProfit * 12;

        let calcRateOfReturn = 0;

        if (loanRate > 0 && loanInterestRate > 0) {
          // 수익률 계산 (대출 있음) = (연간 수익금 / 발전용량 * 공사비) * 100
          calcRateOfReturn = (yearlyProfit / (capacity * constructionCost)) * 100;
        } else {
          // 수익률 계산 (대출 없음) = (연간 수익금 / 발전용량 * 공사비) * 100
          calcRateOfReturn = (yearlyProfit / (capacity * constructionCost)) * 100;
        }

        return {
          // 발전 시간
          generationTime: defaultGenerationTime,
          // 수익률
          calcRateOfReturn,
          // 월 평균 수익금
          monthlyProfit,
          // 연간 수익금
          annualProfit: yearlyProfit,
        };
      }
      // 3000kW 초과 - 가중치 0.8
      default: {
        const calcSmpRecRate = smpPrice + recPrice * 0.8;
        // 월 평균 수익금 계산 = 기본 발전 시간 * (SMP + REC * 가중치) * 설치용량 * 365 / 12
        const monthlyProfit = (defaultGenerationTime * calcSmpRecRate * capacity * 365) / 12;
        // 연간 수익금 계산 = 월 평균 수익금 * 12
        const yearlyProfit = monthlyProfit * 12;
        
        let calcRateOfReturn = 0;

        if (loanRate > 0 && loanInterestRate > 0) {
          // 수익률 계산 (대출 있음) = (연간 수익금 / 발전용량 * 공사비) * 100
          calcRateOfReturn = (yearlyProfit / (capacity * constructionCost)) * 100;
        } else {
          // 수익률 계산 (대출 없음) = (연간 수익금 / 발전용량 * 공사비) * 100
          calcRateOfReturn = (yearlyProfit / (capacity * constructionCost)) * 100;
        }

        return {
          // 발전 시간
          generationTime: defaultGenerationTime,
          // 수익률
          calcRateOfReturn,
          // 월 평균 수익금
          monthlyProfit,
          // 연간 수익금
          annualProfit: yearlyProfit,
        };
      }
    }
  }

  if (areaType.value === 'building') {
    const defaultGenerationTime = 3.6;

    switch (true) {
      // 3000kW 이하 - 가중치 1.5
      case capacity <= 3000: {
        const calcSmpRecRate = smpPrice + recPrice * 1.5;
        const monthlyProfit = (defaultGenerationTime * calcSmpRecRate * capacity * 365) / 12;
        const yearlyProfit = monthlyProfit * 12;

        let calcRateOfReturn = 0;
        if (loanRate > 0 && loanInterestRate > 0) {
          calcRateOfReturn = (yearlyProfit / (capacity * constructionCost)) * 100;
        } else {
          calcRateOfReturn = (yearlyProfit / (capacity * constructionCost)) * 100;
        }

        return {
          // 발전 시간
          generationTime: defaultGenerationTime,
          // 수익률
          calcRateOfReturn,
          // 월 평균 수익금
          monthlyProfit,
          // 연간 수익금
          annualProfit: yearlyProfit,
        };
      }
      // 3000kW 초과 - 가중치 1.3
      default: {
        const calcSmpRecRate = smpPrice + recPrice * 1.3;
        const monthlyProfit = (defaultGenerationTime * calcSmpRecRate * capacity * 365) / 12;
        const yearlyProfit = monthlyProfit * 12;

        let calcRateOfReturn = 0;
        if (loanRate > 0 && loanInterestRate > 0) {
          calcRateOfReturn = (yearlyProfit / (capacity * constructionCost)) * 100;
        } else {
          calcRateOfReturn = (yearlyProfit / (capacity * constructionCost)) * 100;
        }

        return {
          // 발전 시간
          generationTime: defaultGenerationTime,
          // 수익률
          calcRateOfReturn,
          // 월 평균 수익금
          monthlyProfit,
          // 연간 수익금
          annualProfit: yearlyProfit,
        };
      }
    }
  }
}