'use strict';
module.exports = function(app){
    var portfolio = require ('../controllers/portfolioController.js');
   
   
    app.route('/portfolio')
        .get(portfolio.list_all_portfolio)
        .post(portfolio.create_a_portfolio)
    
    app.route('/portfolio/portfolioId')
        .get(portfolio.read_a_portfolio)
        .put(portfolio.update_a_portfolio)
        .delete(portfolio.delete_a_portfolio)
};
