export const settings = [
  {
    label: 'SVGO',
    name: 'svgo',
    type: 'boolean',
    group: 'global',
    default: true,
  },
  {
    label: 'Prettier',
    name: 'prettier',
    type: 'boolean',
    group: 'global',
    default: true,
  },
  {
    label: 'Expand props',
    name: 'expandProps',
    type: 'boolean',
    group: 'global',
    default: true,
  },
  {
    label: 'Icon',
    name: 'icon',
    type: 'boolean',
    group: 'global',
    default: false,
  },
  {
    label: 'React Native',
    name: 'native',
    type: 'boolean',
    group: 'global',
    default: false,
  },
  {
    label: 'Ref',
    name: 'ref',
    type: 'boolean',
    group: 'global',
    default: false,
  },
  {
    label: 'Replace attribute value',
    name: 'replaceAttrValues',
    placeholder: '#063855=currentColor',
    type: 'string',
    group: 'global',
    transform: value => value.split(',').map(value => value.split('=')),
    default: '',
  },
  {
    label: 'Title',
    name: 'title',
    type: 'boolean',
    group: 'svgo',
    default: true,
  },
  {
    label: 'ViewBox',
    name: 'viewBox',
    type: 'boolean',
    group: 'svgo',
    default: true,
  },
  {
    label: 'Ids',
    name: 'ids',
    type: 'boolean',
    group: 'svgo',
    default: false,
  },
  {
    label: 'Precision',
    name: 'precision',
    type: 'integer',
    group: 'svgo',
    default: 3,
  },
  {
    label: 'Tabs',
    name: 'useTabs',
    type: 'boolean',
    group: 'prettier',
    default: false,
  },
  {
    label: 'Semicolons',
    name: 'semi',
    type: 'boolean',
    group: 'prettier',
    default: true,
  },
  {
    label: 'Single quotes',
    name: 'singleQuote',
    type: 'boolean',
    group: 'prettier',
    default: false,
  },
  {
    label: 'Bracket spacing',
    name: 'bracketSpacing',
    type: 'boolean',
    group: 'prettier',
    default: true,
  },
  {
    label: 'JSX Brackets',
    name: 'jsxBracketSameLine',
    type: 'boolean',
    group: 'prettier',
    default: false,
  },
  {
    label: 'Trailing comma',
    name: 'trailingComma',
    type: 'enum',
    values: ['none', 'es5', 'all'],
    group: 'prettier',
    default: 'none',
  },
  {
    label: 'Tab width',
    name: 'tabWidth',
    type: 'integer',
    group: 'prettier',
    default: 2,
  },
]

export const getInitialState = () =>
  settings.reduce(
    (state, setting) => ({
      ...state,
      [setting.name]: setting.default,
    }),
    {},
  )

export const transformSettings = state =>
  Object.entries(state).reduce((newState, [key, value]) => {
    const { transform } = settings.find(({ name }) => name === key)
    return { ...newState, [key]: transform ? transform(value) : value }
  }, {})
