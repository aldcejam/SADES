import { TextField } from '@mui/material';
import './styled.scss';

type ModifySocialMidiasProps = {
  errors: any;
  register: any;
};

const ModifySocialMidias = ({ errors, register }: ModifySocialMidiasProps) => {
  return (
    <div className="modify-social-midias">
      <TextField
        {...register('instagram', { required: false, minLength: 3 })}
        label="Instagram"
        error={errors.instagram ? true : false}
        className="input-material-ui"
      />
      <TextField
        {...register('twitter', { required: false, minLength: 3 })}
        label="Twitter"
        error={errors.twitter ? true : false}
        className="input-material-ui"
      />
    </div>
  );
};

export default ModifySocialMidias;
