import React from 'react'
import { Control } from 'react-redux-form'
import { Input } from 'smooth-ui'

const InputControl = props => <Control.input {...props} component={Input} />

export default InputControl
