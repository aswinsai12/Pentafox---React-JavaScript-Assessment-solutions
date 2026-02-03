function buildTree(comments){
    //mapping,childs strong in array
    const mappingObj={};
    const parent=[];
    comments.array.forEach(element=>{
        mappingObj[element.id]={...element,child:[]};
    });
    comments.array.forEach(element=>{
        if(element.parentId==null){
            return parent.push[element.id];
        }
        return mappingObj[parent.id].element.push[element.id];
    });
    return mappingObj;
}
//done