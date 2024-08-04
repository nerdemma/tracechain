
const { Router } = require('express');
const { render } = require('../app');

const router = Router();
const fs = require('fs');
const { v4: uuidv4 } = require('uuid'); 

const json_trace = fs.readFileSync('../src/trace.json','utf-8');
let trace = JSON.parse(json_trace);

router.get('/',(req, res) => 
    {
    res.render('index',{ trace });
    });

    router.get('/new-entry', (req, res) =>{
    res.render('new-entry');    
    });
      
router.post('/new-entry', (req, res) => {
    const { title, date, coords, description } = req.body;

    if (!title || !date || !coords || !description) {
        res.status(400).send("Entries must have title and body");
        return;
    }

    let newReg = {
        id:uuidv4(),
        title,
        date,
        coords,
        description
    };

    trace.push(newReg);
    const json_trace = JSON.stringify(trace);
    fs.writeFileSync('../src/trace.json',json_trace,'utf-8');
    res.redirect('/');
});

    
    
    
    
    

	router.get('/delete/:id', (req, res) => {
	trace = trace.filter(entry => entry.id !== req.params.id);
	const json_trace = JSON.stringify(trace);
    fs.writeFileSync('../src/trace.json', json_trace,'utf-8');
    res.redirect('/');
    });

router.get('/about', (req, res) => {
res.render('about', { trace });
    });    

module.exports = router;




                                                                                                                                                                                     
	
