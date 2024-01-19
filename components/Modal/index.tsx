import { FC, memo } from 'react';
import { Modal } from '@mantine/core';

import { Card } from 'components';
import { ImageType } from 'types';

interface ModalProps {
  item: ImageType;
  opened: boolean;
  close: () => void;
}

const ModalCard: FC<ModalProps> = ({ item, opened, close }) => {
  return (
    <>
      <Modal opened={opened} onClose={close} size="auto" title={item.title}>
        <Card item={item} />
      </Modal>
    </>
  )
}

export default memo(ModalCard)