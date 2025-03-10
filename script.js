// // 1.
// let arr = [32, 23, 65, 4, 8, 10, 12];
// let maxValue = Math.max(...arr);
// console.log(maxValue);
// let arr = [32, 23, 65, 4, 8, 10, 12];
// let max = arr[0];


// for(let i = 1; i < arr.length; i++) {
// if (max < arr[i]) {
//   max = arr[i];
// }
// }
// console.log(max);

// //2.
// let array1 = [1, 0, 2, 3, 4];
// let array2 = [3, 5, 6, 7, 8, 13];

// let maxLength = Math.max(array1.length, array2.length);

// let arraySum = Array.from({ length: maxLength }, (_, i) => 
// (array1[i] || 0) + (array2[i] || 0));

// console.log(arraySum);

//////////////////////////////////////////////////////
// let array1 = [1, 0, 2, 3, 4];
// let array2 = [3, 5, 6, 7, 8, 13];

// let array3 = [];
// let sum = 0;

// let maxLength = array1.length > array2.length ? array1.length : array2.length;

// for (let i = 0; i < maxLength; i++) {
// sum = (array1[i] || 0) + (array2[i]|| 0); 
// array3.push(sum);
// }
//////////////!!!!ten sam przykład na czwartek, tylko z if else

// //3.
// let array = [4, 2, 8, 5];
// let sum = 0;

// for(let value of array) {
//     sum += value;
// }
// console.log(sum)

//4
let listOfUsers = document.getElementById('listOfCharacters');
class User {
    constructor(name, email, image) {
        this.name = name;
        this.email = email;
        this.image = image;
    }
}

let Users = [
    new User(
        "John Wick", 
        "johnwick@gmail.com", 
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.londoncomicconspring.com%2Fwp-content%2Fuploads%2F2024%2F01%2FJohnWick.png&f=1&nofb=1&ipt=1bb332f538cb84715cd91732d7320d1509a0b354e1c3417334f9263fd64f0a34&ipo=images"
    ),
    new User(
        "Forest Gump", 
        "forestgump@gmail.com", 
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2FsaHP97rTPS5eLmrLQEcANmKrsFl.jpg&f=1&nofb=1&ipt=5ba74a6035f2145d32902c821782cacbe99448f26d8fdfcbe1ad4e93bebfcdde&ipo=images"
    ),
    new User(
        "Harry Potter", 
        "harrypotter@gmail.com", 
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftr.web.img2.acsta.net%2Fpictures%2F13%2F12%2F09%2F19%2F08%2F285670.jpg&f=1&nofb=1&ipt=37ddbaf8fe27e3faaa58f19865740c9247d9152c69750c079114c03d764c113d&ipo=images"
    ),
    new User(
        "Ace Ventura", 
        "aceventura@gmail.com", 
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.themoviedb.org%2Ft%2Fp%2Foriginal%2Fd5xhgscUHaBCbhafUttC2hPd6jA.jpg&f=1&nofb=1&ipt=7138723b538cde2824f31fb4e43e889eb0ce57d37efcdfe41ab710cb2c621224&ipo=images"
    ),
    new User(
        "Batman", 
        "batman@gmail.com", 
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FM%2FMV5BMjY2ZmMyZTMtMDBiYi00MTZlLWFmZjAtYzE2NWE4OTBmYTJiXkEyXkFqcGdeQXVyMTI1MzYzODMy._V1_.jpg&f=1&nofb=1&ipt=2624d5a8aeeffcc451967b8881dbad2ad09e2c29dd1b467d9d7cefc01f8d882d&ipo=images"
    ),
];

Users.forEach(user => {
    let card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
    <img src="${user.image}" alt="${user.name}" class="card-image" />
    <h2 class="card-name">${user.name}</h2>
    <p class="card-email">${user.email}</p>
`;
listOfUsers.appendChild(card);
})