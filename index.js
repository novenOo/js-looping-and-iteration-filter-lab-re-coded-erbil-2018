// Code your solution in this file
function findMatching(array, name){
    return array.filter(function(item){
    	if(item.toLowerCase() === name.toLowerCase()){
    		return item
    	}
    })
}
function fuzzyMatch(arra, letters){
	return arra.filter(function(item){
		  var toStr= (item.slice(0,2)).toString()
          if(toStr === letters){
          	return item
          }
	})
}
function matchName (arra, name) {
  return arra.filter(function (driver) {
    if (driver.name.toLowerCase() === name.toLowerCase()){
    	return driver.name;
    }


  });
    }