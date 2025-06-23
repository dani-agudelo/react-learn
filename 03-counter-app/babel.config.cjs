module.exports = {
    presets: [
        ['@babel/preset-env', {
            targets: {
                node: 'current',
                esmodules: true
            }
        }],
        ['@babel/preset-react', {
            runtime: 'automatic' // Use the new JSX transform
        }],
    ]
};