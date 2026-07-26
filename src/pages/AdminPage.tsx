import { useEffect } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';

import { Flex } from '@chakra-ui/react';

import Sidebar from '@/domains/admin/components/Sidebar';
import Dashboard from '@/domains/admin/components/Dashboard';
import PopupManagement from '@/domains/admin/components/PopupManagement';

import { useAuth } from '@/domains/admin/hooks/useAuth';

const types = ['popup', 'portfolio'];

export default function AdminPage() {
  const { type } = useParams();
  
  const navigate = useNavigate();
  const isAuthenticated = useAuth();

  useEffect(() => {
    if (isAuthenticated === false) {
      navigate('/', { replace: true });
    }
  }, [isAuthenticated, navigate]);

  if (isAuthenticated !== true) {
    return null;
  }

  if (!type || !types.includes(type as string)) {
    return <Navigate to="/hana/back/admin/popup" replace />;
  }

  return (
    <Flex minH="100vh" overflow="hidden">
      <Sidebar />
      <Dashboard>
        {type === 'popup' && <PopupManagement />}
      </Dashboard>
    </Flex>
  );
}
