async function getPostWithAuthor(postId){
    const getPosts=await fetch(`/posts/${postId}`);
    const post=await getPosts.json();
    const getAurthor=await fetch(`/users/${post.aurthorId}`);
    const user=await getAurthor.json();
    return {...post,getAurthor:user};
}
//done