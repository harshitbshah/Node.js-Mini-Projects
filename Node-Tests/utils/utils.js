module.exports.add = (a,b) => a + b;

module.exports.asyncadd = (a,b,call) => {
    setTimeout(() => {
        call(a + b);
    },1000);
};

module.exports.square = (a) => a*a;

module.exports.asyncsquare = (a,call) => {
    setTimeout(() => {
        call(a * a);
    },1000);
};

module.exports.setName = (user, fullName) => {
    var names = fullName.split(' ');
    user.firstName = names[0];
    user.lastName = names[1];
    return user;
};