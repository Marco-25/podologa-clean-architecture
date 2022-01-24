

export default class ExpressAdapter {

    static create(fn, status: number = 200) {
        return async function (req, res) {
            const obj = await fn(req.params, req.body);
            res.status(status).json(obj);
        }
    }
}
