import { cva } from '~/lib/utils'
import styles from './separator.module.css'

export const separatorVariants = cva(styles['rt-Separator'], {
  variants: {
    size: {
      '1': styles['rt-r-size-1'],
      '2': styles['rt-r-size-2'],
      '3': styles['rt-r-size-3'],
      '4': styles['rt-r-size-4'],
    },
  },
})

export const separatorAttrs = (props: {
  orientation?: 'horizontal' | 'vertical'
}) => ({
  'data-orientation': props.orientation,
})