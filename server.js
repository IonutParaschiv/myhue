const express = require('express');

const port = 3000 || process.env.PORT;
const app = express();

app.engine('html', require('ejs').renderFile);

app.set('view engine', 'html');
app.set('views', 'dist');

app.use('/', express.static('dist', { index: false }));


app.get('/api/info', (req, res)=>{
    let data = [{
        name: "Ionut Paraschiv",
        email: "ionupara@gmail.com",
        phone: "(+45) 24598295"
    }]

    res.json(data);
})

app.get('/*', (req, res) => {
    res.render('./index', {req, res});
});

app.listen(port, () => {
        console.log(`Live on: http://localhost:${port}`);
})