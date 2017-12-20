import React from 'react'
import { Control } from 'react-redux-form'
import Radio from '../Radio'

const RadioControl = props => <Control.radio component={Radio} {...props} />

export default RadioControl
