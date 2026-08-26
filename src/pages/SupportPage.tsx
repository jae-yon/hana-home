import { Navigate, useParams } from 'react-router-dom';

import PageLayout from '@/shared/components/layout/PageLayout';

import Support from '@/domains/support';

export default function SupportPage() {
  const { type, id } = useParams();

  if (!type || !['faq', 'notice', 'inquiry'].includes(type)) {
    return <Navigate to={`/support/faq`} replace />;  
  }
    
  return (
    <PageLayout>
      <Support type={type as 'faq' | 'notice' | 'inquiry'} id={id}/>
    </PageLayout>
  );
}