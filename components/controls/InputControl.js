import React from 'react'
import { Control } from 'react-redux-form'
import Input from '../Input'

const InputControl = props => <Control.input {...props} component={Input} />

export default InputControl
