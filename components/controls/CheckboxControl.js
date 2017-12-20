import React from 'react'
import { Control } from 'react-redux-form'
import Checkbox from '../Checkbox'

const CheckboxControl = props => (
  <Control.checkbox component={Checkbox} {...props} />
)

export default CheckboxControl
