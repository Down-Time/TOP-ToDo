
import icon from './delete.svg'
import icon2 from './edit.svg'
import {lightFormat, addMonths} from "date-fns";

function addListToPage(list){

    const stringdate=lightFormat(new Date(list.DueDate.split('-')),'M/d/yy');
    console.log(stringdate)


    let listDisplay=document.getElementById('list');
    const listDiv=document.createElement("div");
    listDiv.className='listItem new-box';
    const listTitle=document.createElement('h4');
    listTitle.innerText=list.Title;
    const listTasks=document.createElement('p');
    listTasks.innerText=list.Tasks;
    const dueDate=document.createElement('p');
    dueDate.innerText=stringdate;
    
    const removeIcon=document.createElement('div');
    removeIcon.id='iconRemove';
    removeIcon.addEventListener('click',function(e){
        var element=e.target;
        element.parentNode.parentNode.remove()
    })
    const iconObject=document.createElement('object')
    iconObject.type='image/svg+xml'
    iconObject.data=icon
    iconObject.className="icon";
    removeIcon.appendChild(iconObject)

    const editIcon=document.createElement('div');
    removeIcon.id='iconEdit';
    removeIcon.addEventListener('click',function(e){
        console.log("Edit Clicked")
    })
    
    const iconObject2=document.createElement('object')
    iconObject2.type='image/svg+xml'
    iconObject2.data=icon2
    iconObject2.className="icon";
    editIcon.appendChild(iconObject2)
    
    const headInfo=document.createElement('div')
    headInfo.id='headInfo'
    
    const titleInfo=document.createElement('div')
    titleInfo.id='titleInfo'

    titleInfo.appendChild(listTitle)
    titleInfo.appendChild(dueDate)
    headInfo.appendChild(editIcon)
    headInfo.appendChild(removeIcon)
    
    listDiv.appendChild(titleInfo);
    
    listDiv.appendChild(listTasks);
    
    listDiv.appendChild(headInfo);
    listDisplay.appendChild(listDiv);
    
}


function deleteList(el){
    var element=el;
    console.log(element)
    element.remove();
}

export default addListToPage;