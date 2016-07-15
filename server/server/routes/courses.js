var Course = require('../models/course.model');

var config = require('../config');

//var mongodb = require('mongodb');

module.exports = function(express) {
    var api = express.Router();

    api.get('/', function(req, res) {
        res.send('happy to be here');
    });

    api.post('/courses', function(req, res) {
        console.log('hello');
        var course = new Course(req.body);
        course.save(function(err, data) {
            if (err) {
                res.send(err);
            }
            else{
               var result={
                  success:true,
                  data:data
                        }
                  }
            res.json({ message: 'Course has been created!!' },result);
        });
    });

    api.get('/courses', function(req, res) {
        console.log('getting all courses');
        Course.find({})
            .exec(function(err, course) {
                if (err) {
                    res.send('error occured')
                } else {
                    console.log(course);
                    res.json(course);
                }
            });
    });

    api.get('/courses/:id', function(req, res) {
        console.log('getting the one particular course');
        Course.findOne({
                _id: req.params.id
            })
            .exec(function(err, course) {
                if (err) {
                    res.send('error occured')
                } else {
                    console.log(course);
                    res.json(course);
                }
            });
    });

    api.put('/courses/:id', function(req, res) { 

        console.log('id of course '+req.params.id);
        
    	var id = req.params.id;
    	console.log(id);
        Course.findByIdAndUpdate(id,req.body,function(err,result){
        	if(err){
        		throw err;
        	}
            else{
               var result={
                  success:true,
                  data:result
                        }
                  }
        	
        	res.json(result); 
        });
       

        //     _id: req.params.id
        // }, {
        //     $set: { title: req.body.title,author: req.body.author }
        // }, { upsert: true }, function(err, newCourse) {
        //     if (err) {
        //         res.send('error updating ');
        //     } else {
        //         console.log(newCourse);
        //         res.send(newCourse);
        //     }
        // });
    });

    api.delete('/courses/:id', function(req, res) {
    	var id = req.params.id;
    	console.log(id);
        Course.findOneAndRemove({
            _id: id
        }, function(err, result) {
            if (err) {
                res.send('error removing')
            } //else {
                // console.log('deleted data :'+course);
                // res.status(204);
                // res.json('deleted data:'+course);
               else{
               var result={
                  success:true,
                  data:result
                        }
                  }
            console.log(result);
            res.json(result); 
        });
    });


    return api;

}
