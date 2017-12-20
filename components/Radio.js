import React from 'react'
import styled from 'styled-components'
import { transparentize } from 'polished'
import classNames from 'classnames'
import theme from 'config/theme'
import InnerSwitch from './internal/InnerSwitch'

const Container = styled.div`
  display: inline-block;
  width: 24px;
  height: 24px;
  position: relative;
`

const RadioCircle = styled.div`
  width: 8px;
  height: 8px;
  transition: transform 300ms;
  border-radius: 50%;
  background-color: ${theme.colors.accent};
  transform: scale(0);
`

const StyledRadio = styled.div`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background-color: white;
  border-width: 2px;
  border-style: solid;
  border-color: ${transparentize(0.5, theme.colors.secondary)};
  transition: border-color 300ms, background-color 300ms;

  &.checked {
    border-color: ${theme.colors.accent};

    ${RadioCircle} {
      transform: scale(1);
    }
  }

  &.focused {
    ${theme.mixins.controlFocus};
  }

  &.disabled {
    opacity: 0.5;
  }
`

const InnerRadio = ({ focused, checked, disabled }) => (
  <StyledRadio className={classNames({ focused, checked, disabled })}>
    <RadioCircle />
  </StyledRadio>
)

const Radio = props => (
  <Container>
    <InnerSwitch inputType="radio" {...props}>
      <InnerRadio />
    </InnerSwitch>
  </Container>
)

export default Radio
