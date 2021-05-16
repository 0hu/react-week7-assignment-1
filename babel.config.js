module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
    '@babel/preset-react',
  ],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@fixtures': './fixtures',
          '@utils': './src/utils',
          '@actions': './src/redux/actions',
          '@api': './src/services/api',
        },
      },
    ],
  ],
};
