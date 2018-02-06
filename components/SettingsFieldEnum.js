import React from 'react'
import { Box, FormGroup, FormCheck, FormCheckLabel } from 'smooth-ui'
import RadioControl from './controls/RadioControl'
import SmallLabel from './SmallLabel'

const SettingsFieldBoolean = ({ setting }) => (
  <Box padding="5px 15px">
    <FormGroup>
      <SmallLabel htmlFor={setting.name}>{setting.label}</SmallLabel>
      {setting.values.map(value => (
        <FormCheck key={value}>
          <RadioControl
            id={`${setting.name}-${value}`}
            model={`.${setting.name}`}
            value={value}
          />
          <FormCheckLabel htmlFor={`${setting.name}-${value}`}>
            {value}
          </FormCheckLabel>
        </FormCheck>
      ))}
    </FormGroup>
  </Box>
)

export default SettingsFieldBoolean
