'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './ActiveLink.module.css';

interface Props {
  path: string;
  text: string;
  exact?: boolean; // Opcional: para coincidencia exacta
}

export const ActiveLink = ({ path, text, exact = false }: Props) => {
  const pathName = usePathname();

  // Lógica para determinar si está activo
  const isActive = exact 
    ? pathName === path 
    : pathName.startsWith(path);

  return (
    <Link
      className={`${styles.link} ${isActive ? styles['active-link'] : ''}`}
      href={path}
    >
      {text}
    </Link>
  );
};