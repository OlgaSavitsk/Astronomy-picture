import { useCallback, useState } from 'react';
import {
  Skeleton,
  LoadingOverlay,
  Flex,
  rem,
  Container,
  Text,
} from '@mantine/core';
import { DatePickerInput, DatesRangeValue } from '@mantine/dates';
import { IconCalendar } from '@tabler/icons-react';

import { imageApi } from 'services';
import { Card, CardList } from 'components';
import { handleFormate } from 'utils';
import { ImageType } from 'types';

import classes from './index.module.css';

export interface ListParams {
  start_date: string | null;
  end_date: string | null;
  date?: string | null
}

const HomePage = () => {
  const [filterDate, setFilterDate] = useState<DatesRangeValue>();
  const [params, setParams] = useState<ListParams>();
  const icon = <IconCalendar style={{ width: rem(18), height: rem(18) }} stroke={1.5} />;

  const handleFilter = useCallback(([start_date, end_date]: DatesRangeValue) => {
    console.log(start_date, end_date)
    setFilterDate([start_date, end_date])
    if (!start_date) {
      setParams(undefined);
    }
    if (end_date) {
      setParams({
        start_date: handleFormate(start_date),
        end_date: handleFormate(end_date),
      })
    }
  }, []);

  const { data, isLoading: isListLoading } = imageApi.useList(params);

  return (
    <>
      <Flex gap={28}>
        <Skeleton
          className={classes.datePickerSkeleton}
          height={42}
          radius="sm"
          visible={isListLoading}
          width={260}
        >
          <DatePickerInput
            clearable
            leftSection={icon}
            type="range"
            size="md"
            maxDate={new Date()}
            placeholder="Pick date"
            allowSingleDateInRange
            value={filterDate}
            onChange={handleFilter}
          />
        </Skeleton>
        <Flex direction="column" gap="xl" className={classes.container}>
          <LoadingOverlay visible={isListLoading}
            loaderProps={{ size: 'lg', variant: 'dots' }}
            style={{ height: 'inherit' }}
          />
          {(params && data) ?
            (<CardList data={data as ImageType[]} isListLoading={isListLoading} />)
            :
            (
              data && <Skeleton
                className={classes.cardSkeleton}
                radius="sm"
                visible={isListLoading}
                height="auto"
              >
                <Card item={data as ImageType} />
              </Skeleton>
            )
          }
           {!data && <Container p={75}>
              <Text size="xl" color="grey">
                No results found, try to adjust your search.
              </Text>
            </Container>}
        </Flex>
      </Flex >
    </>
  )
};

export default HomePage
