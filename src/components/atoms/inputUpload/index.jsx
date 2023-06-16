"use client"
import Image from "next/image";
import {useState } from "react";
import { useDropzone } from "react-dropzone";
import { uniqueId } from "lodash";
import {StyledInputUpload,ThumbsContainer} from "./styled";
import { CircularProgressbar } from "react-circular-progressbar";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

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
            return <p>Este arquivo não pode</p>;
        } else {
            return <p>Arraste a imagem ou clique para enviar</p>;
        }
    };

    return (
        <StyledInputUpload
            dragaccept={isDragAccept.toString()}
            dragreject={isDragReject.toString()}
        >
            <div {...getRootProps({ className: "dropzone" })}>
                <input name="profilePic" {...getInputProps()} />

                <div className="label">
                        <ChevronRightIcon className="icon"/>
                    {RederizeUserMovimentSituation()}
                </div>
            </div>
            <ThumbsContainer>
                {
                    files.map((file) => (
                        <div className="data-image-upload" key={file.id}>
                            <div className="data-image-upload__thumb">
                                <Image alt="icon" fill
                                    src={file.preview}
                                    onLoad={() => {
                                        URL.revokeObjectURL(file.preview);
                                    }}
                                />
                            </div>
                            <div className="data-image-upload__informations">
                                <div>
                                    <p>{file.size} MB</p>
                                    <div className="informations__clear-data-image" onClick={() => CleanFiles()}>
                                        Remover Imagem
                                    </div>
                                </div>
                                <div className="informations__upload-progress">
                                    <CircularProgressbar
                                        styles={{
                                            root: { width: 40 },
                                            path: { stroke: "#3ef153" },
                                        }}
                                        strokeWidth={10}
                                        value={file.progress}
                                    />
                                </div>
                            </div>
                        </div>
                    ))
                }
            </ThumbsContainer>
        </StyledInputUpload>
    );
};

export default InputUpload;
