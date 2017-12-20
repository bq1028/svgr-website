import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import theme from 'config/theme'

const SwitchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: ${theme.zIndexes.innerSwitch};
`

const Input = styled.input`
  margin: 0;
  padding: 0;
  position: absolute;
  height: 100%;
  width: 100%;
  opacity: 0;
  z-index: ${theme.zIndexes.innerSwitch};
`

class InnerSwitch extends React.Component {
  static propTypes = {
    onChange: PropTypes.func,
    checked: PropTypes.bool,
    children: PropTypes.node,
    onStateChange: PropTypes.func,
  }

  static defaultProps = {
    checked: false,
  }

  constructor(props) {
    super(props)
    this.state = { focused: false, checked: props.checked }
  }

  componentWillMount() {
    if (this.props.onStateChange) {
      this.props.onStateChange(this.state)
    }
  }

  componentWillReceiveProps(nextProps) {
    if (
      nextProps.checked !== undefined &&
      nextProps.checked !== this.state.checked
    ) {
      this.updateState({ checked: nextProps.checked })
    }
  }

  handleChange = event => {
    if (this.props.checked === undefined) {
      this.updateState({ checked: event.target.checked })
    }

    if (this.props.onChange) {
      this.props.onChange(event)
    }
  }

  handleFocus = event => {
    this.updateState({ focused: true })
    if (this.props.onFocus) {
      this.props.onFocus(event)
    }
  }

  handleBlur = event => {
    this.updateState({ focused: false })
    if (this.props.onBlur) {
      this.props.onBlur(event)
    }
  }

  updateState(state) {
    if (this.props.onStateChange) {
      this.props.onStateChange(state)
    }
    this.setState(state)
  }

  render() {
    const {
      children,
      inputType,
      onStateChange,
      onChange,
      onBlur,
      onFocus,
      checked,
      ...props
    } = this.props

    return (
      <SwitchContainer>
        <Input
          type={inputType}
          onChange={this.handleChange}
          checked={this.state.checked}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          {...props}
        />

        {children
          ? React.cloneElement(React.Children.only(children), {
              focused: this.state.focused,
              checked: this.state.checked,
              disabled: props.disabled,
            })
          : null}
      </SwitchContainer>
    )
  }
}

export default InnerSwitch
