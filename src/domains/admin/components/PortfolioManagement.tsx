import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

import { Box, Button, Flex, Spinner, Text, VStack } from '@chakra-ui/react';
import { PlusIcon } from 'lucide-react';

import type { Portfolio, PortfolioType } from '@/types/common';
import { useResponsive } from '@/shared/hooks/useResponsive';

import PortfolioCard from '@/shared/components/common/PortfolioCard';
import PortfolioEditDialog from '@/domains/admin/components/PortfolioEditDialog';

import {
  PortfolioCategory,
  useDeletePortfolio,
  usePortfolios,
} from '@/domains/admin/hooks/usePortfolio';

const PORFOLIO_CATEGORIES: { label: string; value: PortfolioCategory }[] = [
  {
    label: '전체',
    value: 'all',
  },
  {
    label: 'PPA(자가소비형)',
    value: 'ppa',
  },
  {
    label: 'RPS(발전사업)',
    value: 'rps',
  },
  {
    label: '가정용(상계거래형) 태양광',
    value: 'residential',
  },
];

function toPortfolioType(category: PortfolioCategory): PortfolioType {
  if (category === 'all') return 'PPA';
  return category.toUpperCase() as PortfolioType;
}

export default function PortfolioManagement({ isAuthenticated }: { isAuthenticated: boolean }) {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const { isDesktop } = useResponsive();

  const category = (searchParams.get('category') as PortfolioCategory | null) ?? 'all';

  const { data: portfolios = [], isLoading } = usePortfolios(category);
  const { mutate: deletePortfolio } = useDeletePortfolio();

  const [dialogOpen, setDialogOpen] = useState(false);
  const [editing, setEditing] = useState<Portfolio | null>(null);

  useEffect(() => {
    const current = searchParams.get('category');
    // 카테고리가 없거나 존재하지 않는 경우 전체로 이동
    if (!current || !PORFOLIO_CATEGORIES.some((c) => c.value === current)) {
      navigate('/hana/back/admin/portfolio?category=all', { replace: true });
    }
  }, [searchParams, navigate]);

  const handleCategoryChange = (value: PortfolioCategory) => {
    setSearchParams({ category: value });
  };

  const openCreate = () => {
    setEditing(null);
    setDialogOpen(true);
  };

  const openEdit = (portfolio: Portfolio) => {
    setEditing(portfolio);
    setDialogOpen(true);
  };

  const handleDelete = (portfolio: Portfolio) => {
    if (!confirm(`"${portfolio.title}" 시공사례를 삭제하시겠습니까?`)) return;
    deletePortfolio(portfolio.id);
  };

  return (
    <VStack align="stretch" gap={6} fontFamily="Pretendard">
      <Box>
        <Text fontSize="xl" fontWeight="700" color="gray.800">
          시공사례 관리
        </Text>
        <Text mt={1} fontSize="sm" color="gray.500">
          시공사례 페이지에서 보여줄{' '}PPA(자가소비형)·RPS(발전사업)·가정용(상계거래형){' '}태양광 시공사례를 관리할 수 있는 공간입니다.
        </Text>
      </Box>

      <Flex gap={3} align="center" justify="space-between" flexWrap="wrap">
        <Flex gap={2} flexWrap="wrap">
          {PORFOLIO_CATEGORIES.map((item) => {
            const isActive = category === item.value;
            return (
              <Button
                key={item.value}
                size="sm"
                shadow="xs"
                rounded="md"
                variant="solid"
                bg={isActive ? 'orange.600' : 'white'}
                color={isActive ? 'white' : 'gray.600'}
                borderColor={isActive ? 'orange.600' : 'gray.200'}
                fontWeight={isActive ? '600' : '500'}
                _hover={{
                  bg: 'orange.600',
                  color: 'white',
                  borderColor: 'orange.600',
                }}
                onClick={() => handleCategoryChange(item.value)}
              >
                {item.label}
              </Button>
            );
          })}
        </Flex>

        <Button
          size="sm"
          shadow="xs"
          rounded="md"
          bg="gray.800"
          color="white"
          fontWeight="600"
          _hover={{ bg: 'gray.700' }}
          onClick={openCreate}
        >
          <PlusIcon size={16} />
          시공사례 추가
        </Button>
      </Flex>

      <VStack align="stretch" gap={3}>
        {isLoading ? (
          <Flex justify="center" py={10}>
            <Spinner color="orange.500" />
          </Flex>
        ) : portfolios.length === 0 ? (
          <Box p={8} textAlign="center" minH="300px" display="flex" alignItems="center" justifyContent="center">
            <Text color="gray.500" fontSize="md">
              시공사례가 없습니다.
            </Text>
          </Box>
        ) : (
          portfolios.map((portfolio) => (
            <PortfolioCard
              key={portfolio.id}
              portfolio={portfolio}
              isDesktop={isDesktop}
              isEditable={isAuthenticated}
              onEdit={() => openEdit(portfolio)}
              onDelete={() => handleDelete(portfolio)}
            />
          ))
        )}
      </VStack>

      <PortfolioEditDialog
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        editing={editing}
        defaultType={toPortfolioType(category)}
      />
    </VStack>
  );
}
