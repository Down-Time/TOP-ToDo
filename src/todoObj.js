const createToDoItem=(title,duedate, items)=> {
	let itemTitle=title;
	let itemDate=duedate;
	let itemTasks=items;
	
	return {
		get Title(){
			return itemTitle
		},
		set Title(title){
			itemTitle= title
		},
		get Tasks(){
			return itemTasks
		},
		set Tasks(items){
			itemTasks= items
		},
		get DueDate(){
			return itemDate
		},
		set DueDate(duedate){
			itemDate= duedate
		}
	}
};

export default createToDoItem;