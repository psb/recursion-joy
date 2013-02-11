var stringifyJSON = function(obj){
  var start = Array.isArray(obj) ? "[" : "{";
  var type = Array.isArray(obj) ? "[" : "{";
  var end = Array.isArray(obj) ? "]" : "}";

  _.each(obj, function(value, key){
    if(!(value === undefined || typeof(value) === "function")) {
      if (!(value instanceof Object || value instanceof Array)){
        if (type === "{"){
          start += "\"" + key + "\"" + ":"; 
        }
        start += typeof(value) === "string" ? ("\"" + value.toString() + "\"" + ",") : (value + ","); 
      } else {   
        if (type === "{"){
          start += "\"" + key + "\"" + ":"; 
        }
        start += stringifyJSON(value) + ",";
      }
    }
  });

  start = start[start.length - 1] === "," ? start.slice(0, -1) : start;
  start += end;

  return start;
};
