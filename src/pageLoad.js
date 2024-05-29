import icon from './add.svg'
import elementFromHtlm from './elementFromHtml'

function pageLoad(){

    const content = elementFromHtlm(`
        <div id="content">
            <div id="iconAdd">
                <object type="image/svg+xml" data=${icon} class="icon"></object>
            </div>
            
        </div>
        <div id="list"></div>
        <!-- A button to open the popup form 
        <button type="button" class="open-button" id="btnopenForm">New Task</button>-->
    
        <!-- The form -->
        <div class="form-popup" id="myForm" >
        <form action="" id="form-container" class="form-container">
            
            <input type="text" placeholder="Title" name="title" id="frtitle" required>

            <textarea placeholder="List" name="list" id="frlist" data-autoresize cols="50" ></textarea>

            <div class="ckb">
            <label for="date">Date</label>
            <input type="date" name="date" id="date" />
            </div>
    
            
            <button type="submit" class="btn">Submit</button>
            <button type="button" class="btn cancel" id="closeForm">Close</button>
            
        </form>
        </div>`);
    
    //document.body.appendChild(content)
    for (let i = 0; i<content.length;i++){
        document.body.appendChild(content[i])

    }

}

function openForm() {

    document.getElementById("myForm").style.display = "block";
}
    
function closeForm() {
    document.getElementById("myForm").style.display = "none";
}



function addAutoResize() {
    document.querySelectorAll('[data-autoresize]').forEach(function (element) {
      element.style.boxSizing = 'border-box';
      var offset = element.offsetHeight - element.clientHeight;
      element.addEventListener('input', function (event) {
        event.target.style.height = 'auto';
        event.target.style.height = event.target.scrollHeight + offset + 'px';
      });
      element.removeAttribute('data-autoresize');
    });
  }



export{pageLoad, openForm, closeForm, addAutoResize}



