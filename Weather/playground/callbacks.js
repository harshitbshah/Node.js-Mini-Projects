var getUser = (id, callback) => {
    var user = {
        id: id,
        name: 'harshit'
    };
    setTimeout(() => {
        callback(user);    
    }, 3000);
};

getUser(27, (user) => {
    console.log(user);
});