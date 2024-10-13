import React from "react";



const postFetch = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = response.json();
    return data;
}



const UserDetailsPage = async () => {
    const getPost = await postFetch();
    console.log("getPost", getPost);
    return <div>
        {/* <singleUserPage getPost={getPost[0]?.title}/> */}
    </div>;
};

export default UserDetailsPage;
