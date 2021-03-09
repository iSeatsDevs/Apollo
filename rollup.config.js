import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import autoprefixer from 'autoprefixer';
import copy from 'rollup-plugin-copy';
import filesize from 'rollup-plugin-filesize';
import { terser } from 'rollup-plugin-terser';

import pkg from './package.json';

const INPUT_FILE_PATH = 'src/index.jsx';

const GLOBALS = {
  react: 'React',
  'react-dom': 'ReactDOM',
  'prop-types': 'PropTypes'
};

const PLUGINS = [
  postcss({
    modules: true,
    extensions: ['.css', '.sass', '.scss'],
    plugins: [autoprefixer]
  }),
  peerDepsExternal(),
  babel({
    babelHelpers: 'runtime',
    exclude: 'node_modules/**'
  }),
  resolve({
    extensions: ['.js', '.jsx'],
    browser: true,
    resolveOnly: [/^(?!react$)/, /^(?!react-dom$)/, /^(?!prop-types)/]
  }),
  commonjs(),
  copy({
    targets: [
      {
        src: 'src/_global.scss',
        dest: 'dist',
        rename: '_variables.scss'
      }
    ]
  }),
  terser(),
  filesize()
];

const EXTERNAL = ['react', 'react-dom', 'prop-types'];

const CJS_AND_ES_EXTERNALS = EXTERNAL.concat(/@babel\/runtime/);

const OUTPUT_DATA = [
  {
    file: pkg.main,
    format: 'cjs',
    sourcemap: true
  },
  {
    file: pkg.module,
    format: 'esm',
    sourcemap: true
  }
];

const config = OUTPUT_DATA.map(({ file, dir, format }) => ({
  input: INPUT_FILE_PATH,
  output: {
    file,
    dir,
    format,
    globals: GLOBALS,
    assetFileNames: '[name]-[hash][extname]'
  },
  external: ['cjs', 'esm'].includes(format) ? CJS_AND_ES_EXTERNALS : EXTERNAL,
  plugins: PLUGINS
}));

export default config;
