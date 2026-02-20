import { useEffect, useState } from 'react';

import AppRoutes from '@/routes';

import Loader from '@/shared/components/common/Loader';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <AppRoutes />
    </>
  )
}

export default App;
