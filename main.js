const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const add = document.getElementById("add");
const table = document.getElementById("table");
const content = document.getElementById("content");

const list = [];

function addToList() {
  let fullName = {
    fName: firstName.value,
    lName: lastName.value,
  };

  list.push(fullName);

  firstName.value = null;
  lastName.value = null;

  console.log(list);
}

function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}


function finalResult() {
    let count = 1;
  const shuffledArray = shuffle(list);
  console.log(shuffledArray);

  content.innerHTML = " ";
  for (const arrayElement of shuffledArray) {
    content.innerHTML += `
    <tr>
      <th scope="row">${count}</th>
      <td>${arrayElement.fName}</td>
      <td>${arrayElement.lName}</td>
        </tr>`;
    count++;
  }
}
