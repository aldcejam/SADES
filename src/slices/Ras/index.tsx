import { Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';

/**
 * Props for `Ras`.
 */
export type RasProps = SliceComponentProps<Content.RasSlice>;

/**
 * Component for "Ras" Slices.
 */
const Ras = ({ slice }: RasProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for ras (variation: {slice.variation}) Slices
    </section>
  );
};

export default Ras;
