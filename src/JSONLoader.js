module.exports = new JSONLoader();
function JSONLoader(){
  var self = this;

  self.load = function(location,callback){
    var xhr = (window.XMLHttpRequest) ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
    xhr.open("GET", location, true);
    xhr.onreadystatechange = function(){
      if (xhr.status==200 && xhr.readyState==4){
        try{
          callback(null,JSON.parse(xhr.responseText) );
          console.log( 'got json' );
        }catch(err){
          callback(err,null);
          console.log( 'failed to load json',location,err );
        }
      }
    }
    xhr.send();
  };
};