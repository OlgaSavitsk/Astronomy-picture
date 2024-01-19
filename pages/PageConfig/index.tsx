import { FC, ReactElement } from 'react';
import { AppShell } from '@mantine/core';

import Header from './Header';
import classes from './index.module.css';

interface PageConfigProps {
  children: ReactElement;
}

const PageConfig: FC<PageConfigProps> = ({ children }) => {
  return (
    <AppShell
      header={{ height: 72 }}
      classNames={{
        root: classes.root,
        main: classes.main,
      }}
    >
      <Header />

      <AppShell.Main>
        {children}
      </AppShell.Main>

    </AppShell>
  )
};

export default PageConfig;