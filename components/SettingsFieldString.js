import React from 'react'
import Box from 'smooth-ui/Box'
import FormGroup from 'smooth-ui/FormGroup'
import SmallLabel from './SmallLabel'
import TextareaControl from './controls/TextareaControl'

const SettingsFieldBoolean = ({ setting }) => (
  <Box padding="5px 15px">
    <FormGroup>
      <SmallLabel htmlFor={setting.name}>{setting.label}</SmallLabel>
      <TextareaControl
        id={setting.name}
        placeholder={setting.placeholder}
        model={`.${setting.name}`}
        size="sm"
      />
    </FormGroup>
  </Box>
)

export default SettingsFieldBoolean
