module.exports = {
    root: true,
    extends: '@react-native-community',
    settings: {
        'import/resolver': {
            alias: [
                ['@assets', './src/assets'],
                ['@components', './src/components'],
                ['@configs', './src/configs'],
                ['@context', './src/context'],
                ['@i18n', './src/i18n'],
                ['@pages', './src/pages'],
                ['@redux', './src/redux'],
                ['@repository', './src/repository'],
                ['@routes', './src/routes'],
                ['@styles', './src/styles'],
                ['@utils', './src/utils'],
            ],
        },
    },
};
