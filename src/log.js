module.exports = (log) => {
	var currentdate = new Date(); 
	var datetime = currentdate.getDate() + "/"
					+ (currentdate.getMonth()+1)  + "/" 
					+ currentdate.getFullYear() + " "  
					+ currentdate.getHours() + ":"  
					+ currentdate.getMinutes() + ":" 
					+ currentdate.getSeconds();
    let datelog = datetime + log;
    return datelog
}
