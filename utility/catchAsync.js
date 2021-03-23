module.exports = fn => {
    return (req, res, next) => {
        console.log('Hi! From the Catch Async Function.')
        fn(req, res, next).catch(next)
    }
}