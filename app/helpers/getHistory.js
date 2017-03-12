export default (history, position) =>
    history
        .filter((_, i) => {
            if (position === 1) {
                return i % 2 === 0
            } else {
                return i % 2 !== 0
            }
        })
        .slice(-3)
        .map((_, i) => `${!!i ? ', ' : ''}${_}`)
