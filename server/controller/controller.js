var Userdb = require('../model/model');

//create new user db
exports.create = (req,res) => {

    //validate request
    if(!req.body){
        res.status(400).send({message:"Contact can not be emtpy"});
        return;
    }

    //new user
    const user = new Userdb({
        name: req.body.name,
        email: req.body.email,
        gender: req.body.gender,
        status: req.body.status
    })

    //save user db
    user
        .save(user)
        .then((data) => {
            // res.send(data);
             res.redirect('/add-user');
        })
        .catch((err) => {
            res.status(500).send({message:err.message||"some error occurred while creating a create operation"});
        })
}


//recive and return user

exports.find = (req,res) => {
    if(req.query.id){
        const id = req.query.id;
        Userdb.findById(id)
            .then((data) =>{
                if(!data){
                    res.status(404).send({message:"Not found user with id "+id});
                }else{
                    res.send(data);
                }
            })
            .catch(err=>{
                res.status(500).send({message:"error user with id "+id});
            })
    }else{
        Userdb.find()
        .then((user) => {
            res.send(user)
        })
        .catch(err=>{
            res.status(500).send({message:err.message});
        })
    }
}

//update user

exports.update = (req,res) => {
    if(!req.body){
        return res
        .status(400)
        .send({message:"data update"})
    }
    const id = req.params.id;
    Userdb.findByIdAndUpdate(id,req.body,{useFindAndModify:false})
        .then((data) => {
            if(!data){
                res.status(404).send({message:'data not found'});
            }
            else{
                res.send(data);
            }
        })
        .catch(err => {
            res.status(500).send({message:'user update by info'});
        })


}

//delete user
exports.delete = (req,res) => {
    const id = req.params.id;

    Userdb.findByIdAndDelete(id)
        .then((data) => {
            if(!data){
                res.status(404).send({message:"Id property not delete"+id});
            }
        })
        .catch(err=>{
            res.status(500).send({message:"could not delete user with id="});
        })
    
}