import babel from 'rollup-plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import autoprefixer from 'autoprefixer';
import copy from 'rollup-plugin-copy';
import filesize from 'rollup-plugin-filesize';
import { terser } from "rollup-plugin-terser";
import pkg from './package.json';

export default {
  input: 'src/index.jsx',
  output: [
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
  ],
  plugins: [
    peerDepsExternal(),
    babel({
      exclude: 'node_modules/**'
    }),
    resolve({
      extensions: ['.js', '.jsx']
    }),
    commonjs(),
    postcss({
      modules: true,
      extensions: ['.css', '.sass', '.scss'],
      plugins: [autoprefixer()]
    }),
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
  ]
};
