function elementFromHtlm(html){
    
    const template=document.createElement("template");
    template.innerHTML=html.trim();
    //return template.content.firstElementChild;
    
    return template.content.childNodes;
}

export default elementFromHtlm