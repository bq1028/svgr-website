import React from 'react'
import styled from 'styled-components'
import { transparentize } from 'polished'
import classNames from 'classnames'
import theme from 'config/theme'
import InnerSwitch from 'components/internal/InnerSwitch'

const Container = styled.div`
  display: inline-block;
  position: relative;
  width: 24px;
  height: 24px;
  z-index: ${theme.zIndexes.control};
`

const StyledCheckbox = styled.div`
  width: 14px;
  height: 14px;
  background-color: white;
  border-radius: 2px;
  border-width: 2px;
  border-style: solid;
  border-color: ${transparentize(0.5, theme.colors.secondary)};
  transition: border-color 300ms, background-color 300ms;

  svg {
    position: absolute;
    left: 7px;
    top: 8px;
    pointer-events: none;
    transform: scale(0);
    transition: transform 400ms;
  }

  &.checked {
    background-color: ${theme.colors.accent};
    border-color: transparent;

    svg {
      transform: scale(1);
    }
  }

  &.focused {
    ${theme.mixins.controlFocus};
  }

  &.disabled {
    background-color: ${theme.colors.disabledControl};
  }
`

const InnerCheckbox = ({ checked, focused, disabled }) => (
  <StyledCheckbox className={classNames({ checked, focused, disabled })}>
    <svg viewBox="0 0 10 8" width="10" height="8">
      <path
        d="M3.7 7.3L.3 4l1-.8 2.4 2.3 5-4.8 1 1"
        fill="#fff"
        fillRule="evenodd"
      />
    </svg>
  </StyledCheckbox>
)

const Checkbox = props => (
  <Container>
    <InnerSwitch inputType="checkbox" {...props}>
      <InnerCheckbox />
    </InnerSwitch>
  </Container>
)

export default Checkbox
