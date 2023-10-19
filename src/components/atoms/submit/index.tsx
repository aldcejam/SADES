import { ComponentProps } from 'react';
import styled from './styled.module.scss';

type SubmitButtonProps = ComponentProps<'div'> & {
  value: string;
  Submit?: () => void;
  type?: 'submit' | "button";
  width?: "full" | "cover";
};

const SubmitButton = ({ value, Submit, type="button", width = "full" }: SubmitButtonProps) => {
  return (
    <button
      id={styled['submit-button']}
      data-width={width}
      type={type}
      onClick={() => (Submit ? Submit() : '')}>
      <span>
        {value}
      </span>
    </button>
  );
};

export default SubmitButton;
