"use client" 
import { useState } from "react";
import { useDropzone } from "react-dropzone";
import { uniqueId } from "lodash"; 
import styled from "./styled.module.scss" 
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Thumb } from "./thumb";

const InputUpload = () => {
    const [files, setFiles] = useState([]);

    const { getRootProps, getInputProps, isDragAccept, isDragReject } =
        useDropzone({
            maxFiles: 1,
            maxSize: 2500000,
            accept: {
                "image/*": [],
            },
            onDrop: (acceptedFiles) => {
                setFiles(
                    acceptedFiles.map((file) => ({
                        file,
                        size: file.size / 1000000,
                        id: uniqueId(),
                        preview: URL.createObjectURL(file),
                        name: file.name,
                        progress: 0,
                        uploaded: false,
                        error: false,
                        url: null,
                    }))
                );
            },
        });

    

    const CleanFiles = () => {
        setFiles([]);
    };


    const RederizeUserMovimentSituation = () => {
        if (isDragAccept) {
            return <p>Solte o arquivo</p>;
        } else if (isDragReject) {
            return <p>arquivo não permitido</p>;
        } else {
            return <p>Arraste a imagem ou clique para enviar</p>;
        }
    };

    return (
        <div className={styled["input-upload"]}
            data-dragaccept={isDragAccept.toString()} 
            data-dragreject={isDragReject.toString()} 
        >
            <div {...getRootProps({ className: styled["dropzone"] })}>
                <input name="profilePic" {...getInputProps()} />

                <div className={styled["label"]}>
                        <ChevronRightIcon className={styled["icon"]}/>
                    {RederizeUserMovimentSituation()}
                </div>
            </div>
            <Thumb files={files} CleanFiles={CleanFiles}/>
        </div>
    );
};

export default InputUpload;
