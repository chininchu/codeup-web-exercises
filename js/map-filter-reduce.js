const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];


let lang = users.filter(user => {
    return user.languages.length >= 3;
});


let email = users.map(user => {

    return user.email
})


let yearsofExp = users.reduce((total,user) => {

    total += user.yearsOfExperience;
    return total;


},0)

let totalYears = yearsofExp / users.length;


let LongestEmail = users.reduce((Email,user)=>{

    if(Email.length > user.email.length){
        return Email;
    }

    else
        return user.email;



},'')






let UsersName = users.reduce((FinalString,users,currentIndex) =>{

    // The if statement ensures that the comma is replaced with a fullstop in the last element

    if (currentIndex === users.length -1 ){

        FinalString += users.name + "."


    }else{
        FinalString += users.name + ","
    }

    return FinalString

}, 'Your instructors are: ')

console.log(UsersName)










