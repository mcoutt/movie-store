module.exports = process.env.NODE_ENV === 'development'
    ? require('./webpack.config.dev.cjs')
    : require('./webpack.config.prod')
