import './style.css';
import createToDoItem from "./todoObj";
import toDoList from "./toDoList";
//import { formatDistance } from "date-fns";Tas
//import { format, compareAsc } from "date-fns";

import {pageLoad, openForm, closeForm,addAutoResize} from "./pageLoad";
//import {pageLoad} from "./pageLoad";
import addListToPage from './dom';
import Sortable from 'sortablejs';
import {lightFormat} from "date-fns";

window.onload=()=>{
	toDoList.returnList()
  }
  window.onbeforeunload=()=>{
	toDoList.saveList()
  }


pageLoad();

//document.getElementById("btnopenForm").addEventListener('click',openForm)
document.getElementById("closeForm").addEventListener('click',closeForm)
document.getElementById("iconAdd").addEventListener('click',openForm)

document.getElementById("date").value=lightFormat(new Date(),'yyyy-MM-dd');

addAutoResize();

//const item1=createToDoItem("Item 1",['i1-t1','i1-t2'])
document.querySelector('.form-container').addEventListener('submit', function(evt){
  evt.preventDefault();
  //addBookToLibrary(document.getElementById('frtitle').value, document.getElementById('frauthor').value, document.getElementById('frpages').value, document.getElementById('frread').checked );
  
  const item=createToDoItem(document.getElementById('frtitle').value, document.getElementById('date').value, document.getElementById('frlist').value)
  toDoList.addToList(item);

  addListToPage(item);
 
  document.getElementById("form-container").reset();
  closeForm();
});

var el=document.getElementById('list');
var sortable=Sortable.create(el)