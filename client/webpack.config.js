const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // Точка входа для вашего приложения
    entry: './src/index.js', 

    // Конфигурация сборки
    output: {
        filename: 'bundle.js', // Имя выходного файла
        path: path.resolve(__dirname, 'dist'), // Папка для выходных файлов
        publicPath: '/', // Публичный путь для ресурса
    },

    // Правила для обработки файлов
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/, // Обработка .js и .jsx файлов
                exclude: /node_modules/, // Исключаем папку node_modules
                use: {
                    loader: 'babel-loader', // Используем Babel для транспиляции
                },
            },
            {
                test: /\.css$/, // Обработка файлов CSS
                use: ['style-loader', 'css-loader'], // Используем style-loader и css-loader
            },
            {
                test: /\.(png|jpg|gif|svg)$/, // Обработка изображений
                use: [
                    {
                        loader: 'file-loader', // Используем file-loader для изображений
                        options: {
                            name: '[path][name].[ext]', // Сохраняем оригинальное имя и путь
                            outputPath: 'images/', // Папка для выходных изображений
                        },
                    },
                ],
            },
        ],
    },

    // Плагины
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html', // Шаблон HTML
        }),
    ],

    // Настройки Dev Server
    devServer: {
        static: path.resolve(__dirname, 'dist'), // Папка для статических файлов
        compress: true, // Включаем сжатие
        port: 8080, // Порт на котором будет запущен сервер
        historyApiFallback: true, // Поддержка HTML5 History API
    },

    // Расширения, которые Webpack будет разрешать
    resolve: {
        extensions: ['.js', '.jsx'], // Расширения файлов для разрешения
    },
};
