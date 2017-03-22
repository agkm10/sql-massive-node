const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const session = require('express-session');
const massive = require('massive');
const connectionString = "postgres://postgres:spydertl@localhost/sandbox"
const massiveConnection = massive.connectSync({
    connectionString: connectionString
})

const app = express();
const port = 3000;

app.set('db', massiveConnection)
const db = module.exports = app.get('db');
const productCtrl = require('./productCtrl.js')

app.use(bodyParser.json());
app.use(cors());
app.use(session({
    secret: 'keyboard cat'
}));
app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})

app.post('/', productCtrl.Create);
app.get('/', productCtrl.GetAll);
app.get('/:id', productCtrl.GetOne);
app.put('/', productCtrl.Update);
app.delete('/:id', productCtrl.Delete);
