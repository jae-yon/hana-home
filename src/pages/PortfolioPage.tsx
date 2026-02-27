import { Navigate, useParams } from 'react-router-dom';

import Header from '@/shared/components/header';
import Footer from '@/shared/components/footer';
import SubHero from '@/shared/components/sub/SubHero';
import FloatingActionButton from '@/shared/components/fab';

import Portfolio from '@/domains/portfolio';

export default function PortfolioPage() {
  const { type } = useParams();
  
  if (!type || !['ppa', 'rps', 'residential', 'electrical-work'].includes(type)) {
    return <Navigate to={`/portfolio/ppa`} replace />;
  }
  
  return (
    <>
      <Header />
      <SubHero />
      <Portfolio type={type as 'ppa' | 'rps' | 'residential' | 'electrical-work'} />
      <Footer />
      <FloatingActionButton />
    </>
  );
}