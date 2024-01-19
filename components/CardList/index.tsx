import { FC, memo } from 'react';
import { Skeleton } from '@mantine/core';

import { Card } from 'components';
import { ImageType } from 'types';
import classes from './index.module.css';

interface CardListProps {
  data: ImageType[];
  isListLoading: boolean;
}

const CardList: FC<CardListProps> = ({ data, isListLoading }) => {
  return (
    <div className={classes.container}>
      {data.map((item: ImageType, index: number) => (
        <Skeleton
          key={index}
          className={classes.cardSkeleton}
          radius="sm"
          visible={isListLoading}
          height="auto"
        >
          <Card item={item} isList={true} />
        </Skeleton>
      ))
      }
    </div>
  );
};

export default memo(CardList);