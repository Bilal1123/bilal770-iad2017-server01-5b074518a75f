var constants = require("../../../config/constants");
var requestHelper = require("../../../helpers/request");
var responseHelper = require("../../../helpers/response");

var calculator = {
  title: "Hello World",
  statusCode: constants.HTTP.CODES.SUCCESS
}

calculator.add = function (req, res,next){      //http://localhost:3000/api/addOperation
    postBody = requestHelper.parseBody(req.body);
    if(validationAdd(postBody)){
           var answer = postBody.operand1 + postBody.operand2; 
           res.statusCode = constants.HTTP.CODES.SUCCESS;
            res.send(responseHelper.formatResponse(
                            constants.MESSAGES.CALC.SUCCESS,
                            {"Addition Values":answer}
            ))


    }else{

        res.statusCode = constants.HTTP.CODES.BAD_REQUEST;
        res.send(responseHelper.formatResponse(
                            constants.MESSAGES.GENERAL.FIELDS_REQUIRED
        ))
    }


}

calculator.subtract = function (req, res,next){  //http://localhost:3000/api/subtractOperation
    postBody = requestHelper.parseBody(req.body);
    if(validationSubtract(postBody)){
        var answer = postBody.operand1 - postBody.operand2;
        res.statusCode = constants.HTTP.CODES.SUCCESS;
        res.send(responseHelper.formatResponse(
            constants.MESSAGES.CALC.SUCCESS,
            {"Subtraction Value":answer}
        ))


    }else{

        res.statusCode = constants.HTTP.CODES.BAD_REQUEST;
        res.send(responseHelper.formatResponse(
            constants.MESSAGES.GENERAL.FIELDS_REQUIRED
        ))
    }


}

calculator.multiply = function (req, res,next){     //http://localhost:3000/api/MultiplyOperation
    postBody = requestHelper.parseBody(req.body);
    if(validationMultiply(postBody)){
        var answer = (postBody.operand1 * postBody.operand2);
        res.statusCode = constants.HTTP.CODES.SUCCESS;
        res.send(responseHelper.formatResponse(
            constants.MESSAGES.CALC.SUCCESS,
            {"Multiplication Value":answer}
        ))


    }else{

        res.statusCode = constants.HTTP.CODES.BAD_REQUEST;
        res.send(responseHelper.formatResponse(
            constants.MESSAGES.GENERAL.FIELDS_REQUIRED
        ))
    }


}


calculator.divide = function (req, res,next){    //http://localhost:3000/api/DivideOperation
    postBody = requestHelper.parseBody(req.body);
    if(validationDivide(postBody)){
        var answer = (postBody.operand1 / postBody.operand2);
        res.statusCode = constants.HTTP.CODES.SUCCESS;
        res.send(responseHelper.formatResponse(
            constants.MESSAGES.CALC.SUCCESS,
            {"Division Value":answer}
        ))


    }else{

        res.statusCode = constants.HTTP.CODES.BAD_REQUEST;
        res.send(responseHelper.formatResponse(
            constants.MESSAGES.GENERAL.FIELDS_REQUIRED
        ))
    }


}

calculator.marksheet = function (req, res,next){    //http://localhost:3000/api/MarksheetOperation
    postBody = requestHelper.parseBody(req.body);
    if(validationMarksheet(postBody)){
        var answer = (postBody.operand1 + postBody.operand2 + postBody.operand3 + postBody.operand4);
        answer = (answer * 100)/400;
        res.statusCode = constants.HTTP.CODES.SUCCESS;
        res.send(responseHelper.formatResponse(
            constants.MESSAGES.CALC.SUCCESS,
            {"Average Marks":answer+"%"}
        ))


    }else{

        res.statusCode = constants.HTTP.CODES.BAD_REQUEST;
        res.send(responseHelper.formatResponse(
            constants.MESSAGES.GENERAL.FIELDS_REQUIRED
        ))
    }


}


function validationAdd(body){
    if(body.operand1!=null && body.operand2!=null){
        return true;
    }
       return false;

}

function validationSubtract(body){
    if(body.operand1!=null && body.operand2!=null){
        return true;
    }
    return false;

}
function validationMultiply(body){
    if(body.operand1!=null && body.operand2!=null){
        return true;
    }
    return false;

}

function validationDivide(body){
    if(body.operand1!=null && body.operand2!=null){
        return true;
    }
    return false;

}
function validationMarksheet(body){
    if(body.operand1!=null && body.operand2!=null && body.operand3!=null && body.operand4!=null){
        return true;
    }
    return false;

}

module.exports = calculator;


