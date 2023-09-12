const app = require('./server')

app.set('port', process.env.PORT || 5000);
const port = app.get('port');

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
});