import Image from 'next/image';
import { CircularProgressbar } from 'react-circular-progressbar';
import styled from './styled.module.scss';

type ThumbProps = {
  files: {
    id: string;
    preview: string;
    size: number;
    progress: number;
  }[];
  CleanFiles: () => void;
};

export const Thumb = ({ files, CleanFiles }: ThumbProps) => {
  return (
    <aside className={styled['thumb']}>
      {files.map((file) => (
        <div className={styled['data-image-upload']} key={file.id}>
          <div className={styled['data-image-upload__thumb']}>
            <Image
              alt="icon"
              fill
              src={file.preview}
              onLoad={() => {
                URL.revokeObjectURL(file.preview);
              }}
            />
          </div>
          <div className={styled['data-image-upload__informations']}>
            <div>
              <p>{file.size} MB</p>
              <div
                className={styled['informations__clear-data-image']}
                onClick={() => CleanFiles()}
              >
                Remover Imagem
              </div>
            </div>
            <div className={styled['informations__upload-progress']}>
              <CircularProgressbar
                styles={{
                  root: { width: 40 },
                  path: { stroke: '#3ef153' },
                }}
                strokeWidth={10}
                value={file.progress}
              />
            </div>
          </div>
        </div>
      ))}
    </aside>
  );
};
