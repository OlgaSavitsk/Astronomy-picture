import { FC, memo } from 'react';
import { Group, Card, Text, Image, Button, Badge, AspectRatio } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

import { ImageType } from 'types';
import { ModalCard } from 'components';
import classes from './index.module.css';

interface CardProps {
  item: ImageType;
  isList?: boolean;
}

const CardProduct: FC<CardProps> = ({ item, isList }) => {
  const [opened, { close, open }] = useDisclosure(false);
  return (
    <>
      <ModalCard item={item} opened={opened} close={close} />
      <Card shadow="sm" padding="lg" radius="md" maw={800} withBorder className={classes.card}>
        <Card.Section>
          {item.media_type === 'image' ? <Image
            src={item.url}
            height='auto'
            alt={item.title}
          /> :
            (
              <AspectRatio ratio={16 / 9}>
                <iframe
                  src={item.url}
                  title={item.title}
                  style={{ border: 0 }}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </AspectRatio>
            )
          }
        </Card.Section>

        <Group justify="space-between" mt="md" mb="xs">
          <Text fw={500}>{item.title}</Text>
        </Group>

        {!isList && <Text size="sm" c="dimmed">
          {item.explanation}
        </Text>}

        <Badge size="lg" color="teal" mt="md">
          {item.date}
        </Badge>

        {isList && <Button color="blue" fullWidth mt="md" radius="md" onClick={open}>
          Read more
        </Button>}
      </Card>
    </>
  );
};

export default memo(CardProduct);