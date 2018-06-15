export const safeRoute = fn => 
    (req, res, next) =>
        Promise
            .resolve(fn(req, res, next))
            .catch(next)

export const dispatchReponse = (res, fn) => 
    async (...params) => {
        const { statusCode, data } = await fn(...params);
        return res.status(statusCode).json(data);
    }
