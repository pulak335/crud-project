const axios = require('axios');

exports.homeRoutes = (req, res) =>{
    axios.get('http://localhost:3200/api/users')
        .then((res) => {
            res.render('index',{users:res.data});
            
        })
        .catch((err) => {
            res.send(err);
        })
        
}
exports.add_User = (req, res) =>{
    res.render('add_user');
}
exports.update_User = (req, res) =>{
    axios.get('http://localhost:3200/api/users',{params:{id:req.query.id}})
        .then(userdata=>{
            res.render("update_user",{user:userdata.data})
        })
        .catch(err=>{
            res.send(err);
        })
    
}
