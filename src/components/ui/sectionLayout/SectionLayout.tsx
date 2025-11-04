import React, { ReactNode } from 'react';
import classes from './sectionLayout.module.scss';
import { attachMultipleClasses } from '@/Languages';

interface SectionLayoutProps {
  renderHeader?: ReactNode;
  renderMain?: ReactNode;
  renderFooter?: ReactNode;
  headerClassName?: string;
  mainClassName?: string;
  footerClassName?: string;
  className?: string;
}

const SectionLayout: React.FC<SectionLayoutProps> = ({
  renderHeader,
  renderMain,
  renderFooter,
  headerClassName = '',
  mainClassName = '',
  footerClassName = '',
  className = ''
}) => {
  return (
    <main className={attachMultipleClasses(classes.sectionContainer, className)}>
      {renderHeader ? (
        <header className={attachMultipleClasses(classes.sectionHeader, headerClassName)}>
          {renderHeader}
        </header>
      ) : null}
      {renderMain ? (
        <section className={attachMultipleClasses(classes.sectionBody, mainClassName)}>
          {renderMain}
        </section>
      ) : null}
      {renderFooter ? (
        <footer className={attachMultipleClasses(classes.sectionFooter, footerClassName)}>
          {renderFooter}
        </footer>
      ) : null}
    </main>
  );
};

export default SectionLayout;
