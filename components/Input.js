import React from 'react'
import styled from 'styled-components'
import { transparentize } from 'polished'
import theme from 'config/theme'

const StyledInput = styled.input`
  border-radius: 2px;
  border: 1px solid ${theme.colors.controlBorder};
  font-size: 13px;
  line-height: 18px;
  padding: 6px 16px;
  transition: border-color 300ms;
  color: ${theme.colors.controlText};

  &[type='number'] {
    width: 70px;
    padding-right: 6px;
  }

  &::placeholder {
    color: ${theme.colors.placeholder};
  }

  &:focus {
    ${theme.mixins.controlFocus};
  }

  &[disabled] {
    background-color: ${theme.colors.grayLight};
    color: ${transparentize(0.5, theme.colors.controlText)};
  }
`

class Input extends React.Component {
  focus() {
    if (this.input) this.input.focus()
  }

  handleRef = input => {
    this.input = input
  }

  render() {
    return <StyledInput innerRef={this.handleRef} {...this.props} />
  }
}

export default Input
