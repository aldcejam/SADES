'use client';
import { useSearchParams } from 'next/navigation';
import { PageDisputaBuscarConnection } from './@core/connection';

export const Client = ({ children }: { children: React.ReactNode }) => {
  const { courseSelected } = PageDisputaBuscarConnection();

  const searchParams = useSearchParams();
  const curso = searchParams.get('curso');

  if (!curso) return <p>curso não selecionado</p>;

  function RemoveAccents(str: string) {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }
  courseSelected.Update(RemoveAccents(curso));

  return <>{children}</>;
};
