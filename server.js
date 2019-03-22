const path = require('path');
const express = require('express');
const hbs = require('hbs');

var app = express();

// app.get('/', (req, res)=>{
// res.send("YOYO Honey Singh");
// });

app.set('view engine', 'hbs');
//hbs.registerPartials(__dirname+'/view/partials');

app.use(express.static(path.join(__dirname, '/view')));
const partialsPath = path.join(__dirname, 'view/partials/layout');

hbs.registerPartials(partialsPath);
app.set('views', path.join(__dirname, 'view/partials'));


app.get('/', (req, res)=>{
res.render('home',{
    title: 'Home Page Through HBS',
    name: 'Vishal Singh 1',
    imgPath: '/images/abstractArt.jpg'
})

});


app.get('/crap',(req,res) => {
    res.render('crap',{
        name: 'CRAP Director'
    })

})


app.get('/about', (req, res)=>{
    res.send({
        name: 'vishal singh',
        work:{
            jobLocation: 'Gurugram',
            company: 'Accenture',
            position : 'SSE'
        }
    })
});

app.listen(3000);