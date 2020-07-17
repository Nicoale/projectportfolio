'use_strict';
var mongoose = require('mongoose'),
Portfolio = mongoose.model('Portfolio');


exports.list_all_portfolio = function(req,res){
    Portfolio.find({},function(err,project_name){
        if(err)
        res.send(err);
        res.json(project_name);
    });
};
exports.create_a_portfolio =  function(req,res){ 
    var new_portfolio = new Portfolio(res.body);
    new_portfolio.save(function(err,project_name){
        if (err)
        res.send(err);
        res.json(project_name);
    });
};
exports.read_a_portfolio = function(req, res){
    Portfolio.findById(req.params.portfolioId,function(err,project_name){
        if(err)
        res.send(err);
        res.json(project_name);
    });
};

exports.update_a_portfolio = function(req,res){
    Portfolio.findOneAndUpdate
    ({_id: req.params.portfolioId},function(err,project_name){
        if(err)
        res.send(err);
        res.json(project_name);
    })
}
exports.delete_a_portfolio = function(req,res){
    Portfolio.remove({id:red.params.portfolioId},function(err,project_name){
        if(err)
        res.send(err);
        res.json({message:'Successfully deleted'});
    })
}
