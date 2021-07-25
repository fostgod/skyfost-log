var colors = require('colors');

const error = (e) => {
	var currentdate = new Date(); 
	var datetime = currentdate.getDate() + "/"
					+ (currentdate.getMonth()+1)  + "/" 
					+ currentdate.getFullYear() + " "  
					+ currentdate.getHours() + ":"  
					+ currentdate.getMinutes() + ":" 
					+ currentdate.getSeconds();
    let dateerr = datetime +" | "+ e;
    return colors.red(dateerr)
}

const log = (log) => {
	var currentdate = new Date(); 
	var datetime = currentdate.getDate() + "/"
					+ (currentdate.getMonth()+1)  + "/" 
					+ currentdate.getFullYear() + " "  
					+ currentdate.getHours() + ":"  
					+ currentdate.getMinutes() + ":" 
					+ currentdate.getSeconds();
    let datelog = datetime +" | "+ log;
    return colors.green(datelog)
}

module.exports = {
	log,
	error
};
