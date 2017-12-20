import React from 'react'
import TextareaControl from './controls/TextareaControl'
import Box from './Box'

const Label = Box.withComponent('label').extend`
  text-transform: uppercase;
  font-size: 11px;
  font-weight: bold;
`

const SettingsFieldBoolean = ({ setting }) => (
  <Box direction="column" padding="5px 15px">
    <Label htmlFor={setting.name} padding="0 0 10px">
      {setting.label}
    </Label>
    <TextareaControl
      id={setting.name}
      placeholder={setting.placeholder}
      model={`.${setting.name}`}
    />
  </Box>
)

export default SettingsFieldBoolean
