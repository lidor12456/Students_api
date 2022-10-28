const table = document.querySelector('.table');
let allUsersDetails = [];

// const paintRow = (arrOfData) => {
//     const row = document.createElement('div');
//     row.classList.add('row');
  
//     arrOfData.forEach((e) => {
//       const cell = document.createElement('div');
//       cell.classList.add('cell');
//       cell.textContent = e;
//       row.appendChild(cell);
//     });
  
//     table.appendChild(row);
//   };


const fetchData = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
    //   console.log(data);
      return data;
    } catch (e) {
      console.log(e);
    }
  }; //will return promise

//   save all users to one array
const allUsers =  async () => {
    const usersArr  = await fetchData("https://capsules7.herokuapp.com/api/group/one");
    const usersArr2 = await fetchData("https://capsules7.herokuapp.com/api/group/two");

    const connectedArr = usersArr.concat(usersArr2);
    console.log(connectedArr);

    // let id = 0;
    
    for (let i=0; i<connectedArr.length; i++) {
        const id = connectedArr[i].id;
        const detail = await fetchData (`https://capsules7.herokuapp.com/api/user/${id}`)
        allUsersDetails.push(detail)
    }

 
   
}
allUsers();
console.log(allUsersDetails);




  
  