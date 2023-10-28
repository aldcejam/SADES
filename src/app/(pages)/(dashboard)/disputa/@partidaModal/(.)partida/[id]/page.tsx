"use client"
import Modal from '../../../partida/components/template/modal';
import { PartidaContent } from '../../../partida/components/template/partidaContent';

export default function Page({ params }: any) {
  return (
    <Modal>
      <PartidaContent display="modal" />
    </Modal>
  );
}
