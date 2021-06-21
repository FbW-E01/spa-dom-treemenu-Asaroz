let tree = document.querySelector("#tree")

tree.addEventListener("click",toggle)

function toggle(e){
    let target = e.target
    let childNodes = target.childNodes
    for(i=1;i<childNodes.length;i++)
        if(childNodes[i].style.display==="none"){
            childNodes[i].style.display = "block"
        }else{
            childNodes[i].style.display = "none"
        }
        
}