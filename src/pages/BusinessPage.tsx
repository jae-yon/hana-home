import { Navigate, useParams } from 'react-router-dom';

import PageLayout from '@/shared/components/layout/PageLayout';

import Business from '@/domains/business';

export default function BusinessPage() {
  const { type } = useParams();

  if (!type || !['ppa', 'rps', 're-powering', 'profit-calculator', 're100', 'solar-home', 'solar-parking', 'solar-cleaning'].includes(type)) {
    return <Navigate to={`/business/solar-home`} replace />;
  }

  return (
    <PageLayout>
      <Business type={type as 'ppa' | 'rps' | 're100' | 're-powering' | 'profit-calculator' | 'solar-home' | 'solar-parking' | 'solar-cleaning'} />
    </PageLayout>
  );
}