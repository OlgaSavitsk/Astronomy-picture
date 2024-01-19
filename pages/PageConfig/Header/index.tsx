import { memo, FC } from 'react';
import { AppShellHeader as LayoutHeader, Container, Title } from '@mantine/core';

import { LogoImage } from 'public/images';
import classes from './index.module.css';

const Header: FC = () => {

  return (
    <LayoutHeader>
      <Container
        className={classes.header}
        mih={72}
        px={32}
        display='flex'
        fluid
      >
        <LogoImage />
        <Title order={3} className={classes.title}>Astronomy Picture of the Day</Title>
      </Container>
    </LayoutHeader>
  );
};

export default memo(Header);
