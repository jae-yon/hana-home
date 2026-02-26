import { useEffect, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';

import Header from '@/shared/components/header';
import Footer from '@/shared/components/footer';
import SubHero from '@/shared/components/sub/SubHero';
import FloatingActionButton from '@/shared/components/fab';

import Portfolio from '@/domains/portfolio';

import { PORTFOLIO_ITEMS } from '@/shared/config/constants';

import { Portfolio as PortfolioType } from '@/types/common';

export default function PortfolioPage() {
  const { type } = useParams();
  
  if (!type) {
    const defaultType = PORTFOLIO_ITEMS[0]?.type.toLowerCase() ?? 'ppa';
    return <Navigate to={`/portfolio/${defaultType}`} replace />;
  }

  const [items, setItems] = useState<PortfolioType[]>([]);

  useEffect(() => {
    const items = PORTFOLIO_ITEMS.filter((item) => item.type.toLowerCase() === type.toLowerCase());
    setItems(items);
  }, [type]);
  
  return (
    <>
      <Header />
      <SubHero />
      <Portfolio type={type as 'ppa' | 'rps' | 'residential'} items={items} />
      <Footer />
      <FloatingActionButton />
    </>
  );
}