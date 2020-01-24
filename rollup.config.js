import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import postcss from 'rollup-plugin-postcss';
import autoExternal from 'rollup-plugin-auto-external';
import autoprefixer from 'autoprefixer';
import copy from 'rollup-plugin-copy';
import pkg from './package.json';

export default {
  input: 'src/index.jsx',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: pkg.module,
      format: 'es',
      sourcemap: true,
    },
  ],
  plugins: [
    copy({
      targets: [
        {
          src: 'src/_global.scss',
          dest: 'dist',
          rename: '_variables.scss',
        },
      ],
    }),
    postcss({
      modules: true,
      extensions: ['.css', '.sass', '.scss'],
      plugins: [autoprefixer()],
    }),
    autoExternal(),
    babel({
      exclude: 'node_modules/**',
    }),
    resolve({
      extensions: ['.mjs', '.js', '.jsx', '.json', '.node'],
    }),
    commonjs(),
  ],
};
