
var user = require("../../../models/user/user");
var sequelize = require('sequelize');
var constants = require("../../../config/constants");
var requestHelper = require("../../../helpers/request");
var responseHelper = require("../../../helpers/response");


var main = {
  title: "Hello World",
  statusCode: constants.HTTP.CODES.SUCCESS
}

function validateSignup(body){
    if(body.name!=null && body.email!=null && body.password!=null){
      return true;
    }   ///*** Add Email regex here as well */

    return false;
}

main.home = function(req,res,next){
   res.send('API Working');

}

main.login = function(req,res,next){
   res.send('Success');
}

main.signup = function(req,res,next){
 
     var postBody = requestHelper.parseBody(req.body);
     var responseBody = {};

     if(validateSignup(postBody)){

          user.build(postBody).save().then(function(response){
              
              responseBody = responseHelper.formatResponse(
                                                      constants.MESSAGES.SIGNUP.SUCCESS,
                                                      {id:response.id,name:response.name}
                                          )
              res.statusCode = constants.HTTP.CODES.SUCCESS;
              res.send(responseBody); 


          }).catch(function(error){
              
              responseBody = responseHelper.formatResponse(
                                          constants.MESSAGES.SIGNUP.ERROR,
                                          {}
                                          )
              res.statusCode = constants.HTTP.CODES.SUCCESS;
              res.send(responseBody);
              



          });

     }else{

              responseBody = responseHelper.formatResponse(
                                          constants.MESSAGES.GENERAL.FIELDS_REQUIRED,
                                          {}
                                          )
              
              res.statusCode = constants.HTTP.CODES.BAD_REQUEST;
              res.send(responseBody);
              

     }

     

   
}





module.exports = main;


