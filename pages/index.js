import React from 'react'
import { injectGlobal } from 'styled-components'
import Settings from 'components/Settings'
import Box from 'components/Box'
import svgr from 'modules/svgr'
import defaultSvg from 'config/fixtures/defaultSvg'
import Header from 'components/Header'
import Loading from 'components/Loading'
import { settings, getInitialState, transformSettings } from 'config/settings'

/* eslint-disable no-unused-expressions */
injectGlobal`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    background-color: #1E1F21;
    font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  }

  .loading {
    transition: opacity 300ms;
    opacity: 0.5;
  }
`
/* eslint-enable no-unused-expressions */

const editorProps = { $blockScrolling: true }

class Index extends React.Component {
  state = {
    input: defaultSvg,
    settings: getInitialState(),
    output: '',
    loading: false,
    Editor: null,
  }

  componentDidMount() {
    import('components/Editor').then(({ default: Editor }) =>
      this.setState({ Editor }),
    )
    this.transform(this.state)
  }

  transformId = 0

  handleInputChange = async input => {
    this.setState({ input })
    this.transform({ input, settings: this.state.settings })
  }

  handleSettingsChange = settings => {
    this.setState({ settings })
    this.transform({ settings, input: this.state.input })
  }

  async transform({ input, settings }) {
    if (input.trim() === '') {
      this.setState({ output: '' })
      return
    }

    this.setState({ loading: true })

    try {
      const transformId = ++this.transformId
      const output = await svgr(input, transformSettings(settings))
      if (transformId === this.transformId) {
        this.setState({ output })
        this.setState({ loading: false })
      }
    } catch (error) {
      // We do nothing and assume that provided code is not correct
    }
  }

  render() {
    return (
      <Box
        direction="column"
        style={{ position: 'absolute', height: '100%', width: '100%' }}
      >
        <Header />
        <Box flex="1">
          <Settings
            settings={settings}
            onChange={this.handleSettingsChange}
            initialState={this.state.settings}
          />
          <Box flex="1">
            {this.state.Editor ? (
              <React.Fragment>
                <Box flex="1">
                  <this.state.Editor
                    width="100%"
                    height="100%"
                    showPrintMargin={false}
                    mode="xml"
                    theme="tomorrow_night"
                    onChange={this.handleInputChange}
                    value={this.state.input}
                    name="input"
                    editorProps={editorProps}
                    scrollMargin={[10, 0, 0, 0]}
                    fontSize={13}
                  />
                </Box>
                <Box flex="1" className={this.state.loading ? 'loading' : ''}>
                  <this.state.Editor
                    width="100%"
                    height="100%"
                    showPrintMargin={false}
                    mode="jsx"
                    theme="tomorrow_night"
                    value={this.state.output}
                    name="output"
                    readOnly
                    editorProps={editorProps}
                    scrollMargin={[10, 0, 0, 0]}
                    fontSize={13}
                  />
                </Box>
              </React.Fragment>
            ) : (
              <Loading />
            )}
          </Box>
        </Box>
      </Box>
    )
  }
}

export default Index
