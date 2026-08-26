import { Navigate, useParams } from 'react-router-dom';

import PageLayout from '@/shared/components/layout/PageLayout';

import Portfolio from '@/domains/portfolio';

export default function PortfolioPage() {
  const { type } = useParams();
  
  if (!type || !['ppa', 'rps', 'residential', 'electrical-work'].includes(type)) {
    return <Navigate to={`/portfolio/ppa`} replace />;
  }
  
  return (
    <PageLayout>
      <Portfolio type={type as 'ppa' | 'rps' | 'residential' | 'electrical-work'} />
    </PageLayout>
  );
}