/**
 * @summary Custom Eslint Config for React Native
 *
 * Eslint severities: 2 = error, 1 = warning, 0 = off
 */
module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  parser: '@typescript-eslint/parser',
  globals: {
    NodeJS: true,
    JSX: true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: "./tsconfig.json",
  },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended-type-checked',
    'plugin:@typescript-eslint/stylistic-type-checked',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  plugins: [
    '@typescript-eslint',
    'react',
    'import',
    'prettier',
    'sort-keys-fix',
    'typescript-sort-keys',
  ],
  settings: {
    "import/resolver": {
      "typescript": {
        "project": [
          "./tsconfig.json",
        ],
      },
      node: true,
    },
    "import/parsers": {
      "@typescript-eslint/parser": ['.ts', '.tsx', '.js', '.jsx']
    },
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    // react
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
      },
    ],
    // Allow .tsx to contain JSX
    'react/jsx-filename-extension': ['error', {extensions: ['.tsx']}],
    'react/no-unstable-nested-components': ['error', {allowAsProps: true}],
    // Reference: https://stackoverflow.com/a/59268871
    'react/require-default-props': [1, {ignoreFunctionalComponents: true}],
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'import/prefer-default-export': 0,
    'linebreak-style': 0, // to avoid error in windows os
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        ts: 'never',
        tsx: 'never',
        js: 'never',
      },
    ],
    'import/no-extraneous-dependencies': ['error', {devDependencies: true}],
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', ['parent', 'sibling']],
        pathGroups: [
          {
            pattern: 'react',
            group: 'external',
            position: 'before',
          },
          {
            pattern: 'src/**',
            group: 'internal',
            position: 'after',
          },
        ],
        pathGroupsExcludedImportTypes: ['builtin'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
    // avoid eslint error when using immer's draft
    // Reference: https://github.com/immerjs/immer/issues/189#issuecomment-506396244
    'prefer-destructuring': ['error', {object: true, array: false}],
    '@typescript-eslint/no-use-before-define': ['error'],
    '@typescript-eslint/no-shadow': ['error'],
    '@typescript-eslint/no-unused-vars': [
      'error',
      {argsIgnorePattern: '^_', varsIgnorePattern: '^_'},
    ],
    /**
     * Auto-fixing/removing unneeded type args is nice,
     * But not false-positive generic type args with React props
     * - class Atom extends Component<{ children: ReactNode, onPress: () => void }>
     * - const Atom = ({ children, onPress }: { children: ReactNode; onPress: () => void }) => <></> // Inferred JSX.Element
     * - const Atom: FC<{ onPress: () => void }>
     * React 17 PropsWithChildren, now removed for generic P in React 18
     */
    '@typescript-eslint/no-unnecessary-type-arguments': 'off',
    '@typescript-eslint/no-unsafe-argument': 'warn',
    '@typescript-eslint/no-unsafe-member-access': 'off',
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'variable',
        format: ['camelCase', 'UPPER_CASE', 'PascalCase', 'snake_case'],
        leadingUnderscore: 'forbid',
        trailingUnderscore: 'forbid',
      },
      {
        selector: 'enumMember',
        format: ['UPPER_CASE'],
      },
      {
        selector: 'function',
        format: ['camelCase'],
        leadingUnderscore: 'forbid',
        trailingUnderscore: 'forbid',
      },
    ],
    // Fixes issue where TypeScript enums are wrongly reported as "already
    // declared".
    // Reference: https://stackoverflow.com/a/63961972
    'no-shadow': 'off',
    // Reference: https://stackoverflow.com/a/64024916
    'no-use-before-define': 'off',
    'no-unused-vars': 'off',
    'no-param-reassign': [
      'error',
      {props: true, ignorePropertyModificationsFor: ['draft', 'state']},
    ],
    'no-unneeded-ternary': ['error', {defaultAssignment: false}],
    'no-console': ['error', {allow: ['error']}],
    'no-restricted-syntax': ['error', 'ExportAllDeclaration'],
    // Sorts
    'typescript-sort-keys/interface': 'warn',
    'typescript-sort-keys/string-enum': 'warn',
    'sort-vars': 'warn',
    'sort-keys-fix/sort-keys-fix': 'warn',
    'no-undef': 0,
    'react/jsx-no-undef': [2, {allowGlobals: true}],
  },
  ignorePatterns: [
    '.eslintrc.js',
    'node_modules',
    'public',
    '.turbo',
    'coverage',
    'dist',
  ],
};
