const toDoList=(function(){
	const TaskList=[];
		return{
			addToList:function(item){
				TaskList.push(item)
			},
			removeFromList:function(position){
				TaskList.splice(position,1)
			},

			printList:function(){
				TaskList.forEach((element)=>{console.log(element.Title)});
			},
			loadList:function(){
				TaskList=dateStorage.returnList()
			},
			saveList:function(){
				if (storageAvailable("localStorage")) {
					localStorage.setItem('items', JSON.stringify(TaskList))
				  } else {
					console.log("Data Cannot Be Saved")
				  }
			},
			returnList:function(){
				if (storageAvailable("localStorage")) {
					if(localStorage.getItem('isAuth')=='true'){
						JSON.parse(localStorage.getItem('items')).forEach((element)=>{toDoList.addToList(element)})}
				  } else {
					console.log("Data Cannot Be Retreived")
				  }
			}
	};
})();




function storageAvailable(type) {
	let storage;
	try {
	  storage = window[type];
	  const x = "__storage_test__";
	  storage.setItem(x, x);
	  storage.removeItem(x);
	  return true;
	} catch (e) {
	  return (
		e instanceof DOMException &&
		// everything except Firefox
		(e.code === 22 ||
		  // Firefox
		  e.code === 1014 ||
		  // test name field too, because code might not be present
		  // everything except Firefox
		  e.name === "QuotaExceededError" ||
		  // Firefox
		  e.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
		// acknowledge QuotaExceededError only if there's something already stored
		storage &&
		storage.length !== 0
	  );
	}
  }

  export default toDoList;