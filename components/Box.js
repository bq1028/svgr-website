import styled, { css } from 'styled-components'

const addProp = (propName, attribute) => props =>
  typeof props[propName] !== 'undefined'
    ? css`
      ${attribute || propName}: ${props[propName]};
    `
    : null

const Box = styled.div`
  display: flex;
  ${addProp('flex')};
  ${addProp('alignItems', 'align-items')};
  ${addProp('justifyContent', 'justify-content')};
  ${addProp('direction', 'flex-direction')};
  ${addProp('padding')};
`

export default Box
