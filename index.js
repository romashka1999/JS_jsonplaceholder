/************************************** JSON PLACEHOLDER **********************************/
class JsonPlaceHolder {

    constructor() {}

    /************************************************ ALL  DATA ********************************************/
    getAllUsers(){
        const url =`https://jsonplaceholder.typicode.com/users`;
        fetch(url)
            .then(res => res.json())
            .then(users => {
                console.log('All Users: ',users);
                for(let user of users){
                    this.getUserById(user.id);
                }
            });
    }

    getAllPosts(){
        const url =`https://jsonplaceholder.typicode.com/posts`;
        fetch(url)
            .then(res => res.json())
            .then(posts => {
                console.log('All Posts: ',posts);
            });
    }
    
    getAllTodos(){
        const url =`https://jsonplaceholder.typicode.com/todos`;
        fetch(url)
            .then(res => res.json())
            .then(todos => {
                console.log('All Todos: ',todos);
            });
    }

    getAllComments(){
        const url =`https://jsonplaceholder.typicode.com/comments`;
        fetch(url)
            .then(res => res.json())
            .then(comments => {
                console.log('All Comments: ',comments);
            });
    }
    /*********************************************************************************************************************/



    /****************************************************** DATA BY ID ***************************************************/
    getUserById(id){
        const url = `https://jsonplaceholder.typicode.com/users?id=${id}`;
        fetch(url)
            .then(res => res.json())
            .then(user => {
                console.log(`User By id ${id}: `, user);
                this.getPostsByUserId(user.id);
            })
    }

    getPostById(id){
        const url = `https://jsonplaceholder.typicode.com/posts?id=${id}`;
        fetch(url)
            .then(res => res.json())
            .then(post => {
                console.log(`Post By id ${id}: `, post);
            })
    }

    getTodoById(id){
        const url = `https://jsonplaceholder.typicode.com/todos?id=${id}`;
        fetch(url)
            .then(res => res.json())
            .then(todo => {
                console.log(`Todo By id ${id}: `, todo);
            })
    }

    getCommentById(id){
        const url = `https://jsonplaceholder.typicode.com/comments?id=${id}`;
        fetch(url)
            .then(res => res.json())
            .then(comment => {
                console.log(`Comment By id ${id}: `, comment);
            })
    }

    /*********************************************************************************************************************/   


    getPostsByUserId(userId){
        const url = `https://jsonplaceholder.typicode.com/posts?userId=${userId}`;
        fetch(url)
            .then(res => res.json())
            .then(posts => {
                console.log(`Posts for userid ${userId}: `, posts);
            })
    }

    getCommentsByPostId(postId){
        const url = `https://jsonplaceholder.typicode.com/comments?postId=${postId}`;
        fetch(url)
            .then(res => res.json())
            .then(comments => {
                console.log(`Comments for postId ${postId}: `, comments);
            })
    }

    getTodosByUserId(userId){
        const url = `https://jsonplaceholder.typicode.com/todos?userId=${userId}`;
        fetch(url)
            .then(res => res.json())
            .then(todos => {
                console.log(`Todos for userId ${userId}: `, todos);
            })
    }

    
}

/****************************** DRIVER CODE *************************************/

const db = new JsonPlaceHolder();
db.getAllUsers();

