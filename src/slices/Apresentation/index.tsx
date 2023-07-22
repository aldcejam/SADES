import { Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';

/**
 * Props for `Apresentation`.
 */
export type ApresentationProps =
  SliceComponentProps<Content.ApresentationSlice>;

/**
 * Component for "Apresentation" Slices.
 */
const Apresentation = ({ slice }: ApresentationProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for apresentation (variation: {slice.variation})
      Slices
    </section>
  );
};

export default Apresentation;
