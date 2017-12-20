import React from 'react'
import CheckboxControl from './controls/CheckboxControl'
import Box from './Box'

const Label = Box.withComponent('label')

const SettingsFieldBoolean = ({ setting }) => (
  <Box alignItems="center" padding="3px 15px">
    <CheckboxControl id={setting.name} model={`.${setting.name}`} />
    <Label htmlFor={setting.name} flex="1" padding="0 0 0 5px">
      {setting.label}
    </Label>
  </Box>
)

export default SettingsFieldBoolean
