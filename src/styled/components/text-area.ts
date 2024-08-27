import { cva } from '~/lib/utils'
import styles from './text-area.module.css'

export const textAreaVariants = {
  root: cva(['rt-reset', styles['rt-TextAreaRoot']], {
    variants: {
      variant: {
        surface: styles['rt-variant-surface'],
        classic: styles['rt-variant-classic'],
        soft: styles['rt-variant-soft'],
      },
      size: {
        '1': styles['rt-r-size-1'],
        '2': styles['rt-r-size-2'],
        '3': styles['rt-r-size-3'],
      },
    },
  }),
  input: styles['rt-TextAreaInput'],
}

export const textAreaAttrs = (props: { onePasswordFilled?: boolean }) => ({
  input: {
    'data-com-onepassword-filled': props.onePasswordFilled ? '' : undefined,
  },
})
