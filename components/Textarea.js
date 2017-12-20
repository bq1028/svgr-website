import React from 'react'
import styled from 'styled-components'
import { transparentize } from 'polished'
import theme from 'config/theme'

const StyledTextarea = styled.textarea`
  border-radius: 2px;
  border: 1px solid ${theme.colors.controlBorder};
  font-size: 13px;
  line-height: 18px;
  padding: 5px;
  transition: border-color 300ms;
  color: ${theme.colors.controlText};

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

class Textarea extends React.Component {
  focus() {
    if (this.input) this.input.focus()
  }

  handleRef = input => {
    this.input = input
  }

  render() {
    return <StyledTextarea innerRef={this.handleRef} {...this.props} />
  }
}

export default Textarea
