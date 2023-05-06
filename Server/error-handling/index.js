module.exports = (app) => {
    app.use((req, res, next) => {
        res.status(404).json({ code: 'Route not found' });
    });
    app.use((err, req, res, next) => {
        console.error('ERROR', req.method, req.path, err);
        if (!res.headersSent) {
            const statusError = err.status || '500';
            res.status(statusError).json(err);
        }
    });
}