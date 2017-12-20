import React from 'react'
import { Control } from 'react-redux-form'
import Textarea from '../Textarea'

const TextareaControl = props => (
  <Control.textarea {...props} component={Textarea} />
)

export default TextareaControl
