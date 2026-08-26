import { Navigate, useParams } from 'react-router-dom';

import PageLayout from '@/shared/components/layout/PageLayout';

import About from '@/domains/about';

export default function AboutPage() {
  const { type } = useParams();

  if (!type || !['introduction', 'location'].includes(type)) {
    return <Navigate to={`/about/introduction`} replace />;
  }

  return (
    <PageLayout>
      <About type={type as 'introduction' | 'location'} />
    </PageLayout>
  );
}