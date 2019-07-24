module.exports = {
    processors: {
        '.json': {
            preprocess: function(text, filename) {
                return [
                    { text: `(${ text })`, filename: filename },
                ];
            },

            supportsAutofix: false,
        },
    },
};
