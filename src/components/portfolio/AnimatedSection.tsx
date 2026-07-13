import { motion, type HTMLMotionProps } from 'framer-motion';
import { staggerContainer, fadeUp, viewportOnce } from '@/lib/motion';
import type { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  stagger?: number;
  delay?: number;
  className?: string;
  id?: string;
  as?: 'section' | 'div' | 'ul' | 'ol' | 'article';
} & Omit<HTMLMotionProps<'section'>, 'variants' | 'initial' | 'whileInView' | 'viewport'>;

/**
 * Wrap a section — its direct children marked with `variants={item}` will
 * stagger into view. Use <Reveal> for individual children below.
 */
export function AnimatedSection({
  children,
  stagger = 0.09,
  delay = 0,
  as = 'section',
  ...rest
}: Props) {
  const Component = motion[as] as typeof motion.section;
  return (
    <Component
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      variants={staggerContainer(stagger, delay)}
      {...rest}
    >
      {children}
    </Component>
  );
}

/** Individual child that fades/slides up as part of a staggered container. */
export const revealItem = fadeUp(16, 0.7);
export const revealItemLg = fadeUp(20, 0.8);
export const revealItemSm = fadeUp(10, 0.55);
