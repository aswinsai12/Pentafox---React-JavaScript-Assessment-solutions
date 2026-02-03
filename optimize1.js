async function getUsers(userIds){
    //using Promise to get user data through mapping id simaltanesouly
    const getPromises=userIds.map((id)=>{
        fetch(`/users/${id}`).then(res=>res.json);
    })
    return await Promise.all(getPromises);
}
//done