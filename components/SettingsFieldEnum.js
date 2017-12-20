import React from 'react'
import RadioControl from './controls/RadioControl'
import Box from './Box'

const Label = Box.withComponent('label').extend`
  text-transform: uppercase;
  font-size: 11px;
  font-weight: bold;
`

const SettingsFieldBoolean = ({ setting }) => (
  <Box direction="column" padding="5px 15px">
    <Label htmlFor={setting.name} padding="5px 0">
      {setting.label}
    </Label>
    {setting.values.map(value => (
      <Box key={value} alignItems="center" padding="2px 5px">
        <RadioControl
          id={`${setting.name}-${value}`}
          model={`.${setting.name}`}
          value={value}
        />
        <Label
          htmlFor={`${setting.name}-${value}`}
          flex="1"
          padding="0 0 0 5px"
        >
          {value}
        </Label>
      </Box>
    ))}
  </Box>
)

export default SettingsFieldBoolean
