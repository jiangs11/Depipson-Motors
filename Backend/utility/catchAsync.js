module.exports = fn => {
    return (req, res, next) => {
        console.log('H! From the Catch Async Function.')
        fn(req, res, next).catch(next)
    }
}