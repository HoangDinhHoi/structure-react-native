module.exports = {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
        [
            'module-resolver',
            {
                root: ['.'],
                extensions: [
                    '.ios.ts',
                    '.android.ts',
                    '.ts',
                    '.ios.tsx',
                    '.android.tsx',
                    '.tsx',
                    '.jsx',
                    '.js',
                    '.json',
                ],
                alias: {
                    '@assets': './src/assets',
                    '@components': './src/components',
                    '@configs': './src/configs',
                    '@context': './src/context',
                    '@i18n': './src/i18n',
                    '@pages': './src/pages',
                    '@redux': './src/redux',
                    '@repository': './src/repository',
                    '@routes': './src/routes',
                    '@styles': './src/styles',
                    '@utils': './src/utils',
                },
            },
        ],
    ],
};
