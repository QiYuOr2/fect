import { PropType } from 'vue'
import type { AlignContentTypes, JustifyTypes, WrapTypes, AlignTypes, DirectionTypes } from './interface'
import { assign, omit } from '../utils'

export const gridGroupProps = {
  gap: {
    type: Number,
    default: 0
  },
  col: {
    type: Number,
    default: 0
  },
  count: {
    type: [Number, Array],
    default: 0
  },
  wrap: {
    type: String as PropType<WrapTypes>,
    default: 'wrap'
  },
  justify: {
    type: String as PropType<JustifyTypes>,
    default: 'flex-start'
  },
  alignItems: {
    type: String as PropType<AlignTypes>,
    default: 'stretch'
  },
  alignContent: {
    type: String as PropType<AlignContentTypes>,
    default: 'flex-start'
  },
  direction: {
    type: String as PropType<DirectionTypes>,
    default: 'row'
  },
  xs: {
    type: [Number, Boolean],
    default: false
  },
  sm: {
    type: [Number, Boolean],
    default: false
  },
  md: {
    type: [Number, Boolean],
    default: false
  },
  lg: {
    type: [Number, Boolean],
    default: false
  },
  xl: {
    type: [Number, Boolean],
    default: false
  }
}

export const props = omit(gridGroupProps, ['gap', 'wrap', 'col', 'count'])

export const groupBaiscProps = assign(props, {
  fluid: Boolean
})
