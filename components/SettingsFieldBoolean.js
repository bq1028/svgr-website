import React from 'react'
import { FormCheck, FormCheckLabel, Box } from 'smooth-ui'
import CheckboxControl from './controls/CheckboxControl'

const SettingsFieldBoolean = ({ setting }) => (
  <Box padding="3px 15px">
    <FormCheck>
      <CheckboxControl id={setting.name} model={`.${setting.name}`} />
      <FormCheckLabel htmlFor={setting.name}>{setting.label}</FormCheckLabel>
    </FormCheck>
  </Box>
)

export default SettingsFieldBoolean
