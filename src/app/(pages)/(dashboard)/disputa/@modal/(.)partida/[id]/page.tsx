import Modal from "../../../partida/components/template/modal";
import { PartidaContent } from "../../../partida/components/template/partidaContent";
import styled from "./styled.module.scss"

export default function Page({ params }: any) {
 

    return (
        <Modal> 
            <PartidaContent display="modal"/>
        </Modal>
    );
};
