import React from 'react'
import Box from 'smooth-ui/Box'
import FormGroup from 'smooth-ui/FormGroup'
import InputControl from './controls/InputControl'
import SmallLabel from './SmallLabel'

const SettingsFieldBoolean = ({ setting }) => (
  <Box padding="5px 15px">
    <FormGroup>
      <SmallLabel htmlFor={setting.name}>{setting.label}</SmallLabel>
      <InputControl
        type="number"
        size="sm"
        id={setting.name}
        model={`.${setting.name}`}
      />
    </FormGroup>
  </Box>
)

export default SettingsFieldBoolean
