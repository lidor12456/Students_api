const table = document.querySelector('.table');
const h1 = document.querySelector("h1");

let input = document.querySelector("#userInput");
let submit = document.querySelector("#submit");
const backUp = [
    {
        "id": "011",
        "gender": "female",
        "firstName": "zzרי",
        "lastName": "פורמן",
        "hobby": "ציור",
        "age": 26,
        "city": "באר שבע",
        "capsule": 2
    },
    {
        "id": "012",
        "gender": "male",
        "firstName": "מיכאל",
        "lastName": "קונין",
        "hobby": "טיולים",
        "age": 38,
        "city": "קדומים",
        "capsule": 3
    },
    {
        "id": "013",
        "gender": "male",
        "firstName": "מוחמד",
        "lastName": "נאטשה",
        "hobby": "פתרון בעיות",
        "age": 22,
        "city": "ירושלים",
        "capsule": 4
    },
    {
        "id": "014",
        "gender": "male",
        "firstName": "מאיר",
        "lastName": "יוסף כהן",
        "hobby": "מוסיקה",
        "age": 37,
        "city": "כרמיאל",
        "capsule": 2
    },
    {
        "id": "015",
        "gender": "male",
        "firstName": "לידור",
        "lastName": "אשוש",
        "hobby": "ציד מדוזות",
        "age": 29,
        "city": "נתיבות",
        "capsule": 1
    },
    {
        "id": "016",
        "gender": "female",
        "firstName": "יעל",
        "lastName": "לניר",
        "hobby": "השקמות בלילה",
        "age": 23,
        "city": "ראשון לציון",
        "capsule": 3
    },
    {
        "id": "017",
        "gender": "male",
        "firstName": "יוסף",
        "lastName": "פדול",
        "hobby": "תכנות",
        "age": 26,
        "city": "פקיעין",
        "capsule": 2
    },
    {
        "id": "018",
        "gender": "male",
        "firstName": "בן",
        "lastName": "גרינולד",
        "hobby": "כדורגל",
        "age": 29,
        "city": "באר שבע",
        "capsule": 4
    },
    {
        "id": "019",
        "gender": "male",
        "firstName": "באשיר",
        "lastName": "טאריף",
        "hobby": "סריגה",
        "age": 24,
        "city": "ג'וליס",
        "capsule": 1
    },
    {
        "id": "020",
        "gender": "male",
        "firstName": "אראל",
        "lastName": "חגאג",
        "hobby": "בישול",
        "age": 30,
        "city": "נתיבות",
        "capsule": 1
    },
    {
        "id": "021",
        "gender": "female",
        "firstName": "אדוה",
        "lastName": "מוזס",
        "hobby": "גלישה",
        "age": 31,
        "city": "פתח תקווה",
        "capsule": 4
    },
    {
        "id": "001",
        "gender": "female",
        "firstName": "רעות",
        "lastName": "גולדין",
        "hobby": "guitars",
        "age": 39,
        "city": "עראמשה",
        "capsule": 2
    },
    {
        "id": "002",
        "gender": "male",
        "firstName": "ראני",
        "lastName": "עלי",
        "hobby": "אנימה",
        "age": 32,
        "city": "עראמשה",
        "capsule": 2
    },
    {
        "id": "003",
        "gender": "male",
        "firstName": "פרג",
        "lastName": "פדול",
        "hobby": "תכנות משחקים",
        "age": 26,
        "city": "קרית שמונה",
        "capsule": 4
    },
    {
        "id": "004",
        "gender": "male",
        "firstName": "עמירם",
        "lastName": "אברג'ל",
        "hobby": "לבשל",
        "age": 30,
        "city": "נתניה",
        "capsule": 3
    },
    {
        "id": "005",
        "gender": "male",
        "firstName": "עמאר",
        "lastName": "אלעמור",
        "hobby": "משחקי מחשב",
        "age": 21,
        "city": "כסיפה",
        "capsule": 2
    },
    {
        "id": "006",
        "gender": "male",
        "firstName": "עלא",
        "lastName": "שעלאן",
        "hobby": "עיצוב",
        "age": 38,
        "city": "עין קנייא",
        "capsule": 4
    },
    {
        "id": "007",
        "gender": "male",
        "firstName": "עומר",
        "lastName": "עברון",
        "hobby": "גלישה",
        "age": 23,
        "city": "טבריה",
        "capsule": 1
    },
    {
        "id": "008",
        "gender": "female",
        "firstName": "סחר",
        "lastName": "סאבק באדר",
        "hobby": "ריקודים סלונים",
        "age": 21,
        "city": "חורפש",
        "capsule": 4
    },
    {
        "id": "009",
        "gender": "male",
        "firstName": "נתנאל",
        "lastName": "בדוק",
        "hobby": "שחייה",
        "age": 21,
        "city": "אשדוד",
        "capsule": 3
    },
    {
        "id": "010",
        "gender": "female",
        "firstName": "נופר",
        "lastName": "מימון",
        "hobby": "לישון",
        "age": 28,
        "city": "נתיבות",
        "capsule": 4
    },
    {
        "id": "022",
        "gender": "male",
        "firstName": "אחמד",
        "lastName": "מוחטאסב",
        "hobby": "אוהב לטוס במחשבות",
        "age": 18,
        "city": "ירושלים",
        "capsule": 1
    },
    {
        "id": "023",
        "gender": "female",
        "firstName": "איה",
        "lastName": "יוסף",
        "hobby": "לטייל",
        "age": 26,
        "city": "עכו",
        "capsule": 3
    },
    {
        "id": "024",
        "gender": "female",
        "firstName": "אמל",
        "lastName": "מדלג",
        "hobby": "ספורט",
        "age": 28,
        "city": "כפר קרע",
        "capsule": 3
    },
    {
        "id": "025",
        "gender": "female",
        "firstName": "אנדרה",
        "lastName": "קאטוב",
        "hobby": "טיפוס הרים",
        "age": 32,
        "city": "חדרה",
        "capsule": 1
    }
]




const paintRow = (arrOfData) => {
    const row = document.createElement('div');
    row.classList.add('row');
  
    arrOfData.forEach((e) => {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      cell.textContent = e;
      row.appendChild(cell);
    });
  
    table.appendChild(row);
  };



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
    let allUsersDetails = [];
    const usersArr  = await fetchData("https://capsules7.herokuapp.com/api/group/one");
    const usersArr2 = await fetchData("https://capsules7.herokuapp.com/api/group/two");

    const connectedArr = usersArr.concat(usersArr2);
    
   
    for (let i=0; i<connectedArr.length; i++) {
        let id = connectedArr[i].id;
        const detail = await fetchData (`https://capsules7.herokuapp.com/api/user/${id}`)
        allUsersDetails.push(detail)
    }    
    return allUsersDetails;
}


allUsers().then((state) => {
    // state.forEach((student) => {
    //     const newArr = [student.id,student.firstName, student.lastName , student.age, student.hobby, student.capsule, student.city ];
    //     paintRow(newArr);
    //   });

      const byFirstName = (key_name, char , array) => {
     

        if (key_name === "firstName") {
            array = array.map(x => x.firstName)
        }
       
        const filteredData = []
        for (var j=0; j<array.length; j++) {
            if (array[j].match(char )) 
            filteredData.push( array[j])
        }
        console.log(filteredData)
        let ul = document.createElement("ul");
        table.appendChild(ul);
        for (let i=0; i<filteredData.length; i ++) {
            let li = document.createElement("li");
            li.textContent = filteredData[i];
            ul.appendChild(li);
        }
    }



      const byLastName = (key_name, char , array) => {
         
    
        if (key_name === "lastName") {
            array = array.map(x => x.lastName)
        }
       
        const filteredData = []
        for (var j=0; j<array.length; j++) {
            if (array[j].match(char )) 
            filteredData.push( array[j])
        }
        console.log(filteredData)
        let ul = document.createElement("ul");
        table.appendChild(ul);
        for (let i=0; i<filteredData.length; i ++) {
            let li = document.createElement("li");
            li.textContent = filteredData[i];
            ul.appendChild(li);
        }
    }
      const byHobby = (key_name, char , array) => {
         
    
        if (key_name === "hobby") {
            array = array.map(x => x.hobby)
        }
       
        const filteredData = []
        for (var j=0; j<array.length; j++) {
            if (array[j].match(char )) 
            filteredData.push( array[j])
        }
        console.log(filteredData)
        let ul = document.createElement("ul");
        table.appendChild(ul);
        for (let i=0; i<filteredData.length; i ++) {
            let li = document.createElement("li");
            li.textContent = filteredData[i];
            ul.appendChild(li);
        }
    }
      const byCity = (key_name, char , array) => {
         
    
        if (key_name === "city") {
            array = array.map(x => x.city)
        }
       
        const filteredData = []
        for (var j=0; j<array.length; j++) {
            if (array[j].match(char )) 
            filteredData.push( array[j])
        }
        console.log(filteredData)
        let ul = document.createElement("ul");
        table.appendChild(ul);
        for (let i=0; i<filteredData.length; i ++) {
            let li = document.createElement("li");
            li.textContent = filteredData[i];
            ul.appendChild(li);
        }
    }
      const byId = (key_name, char , array) => {
         
    
        if (key_name === "id") {
            array = array.map(x => x.id)
        }
       
        const filteredData = []
        for (var j=0; j<array.length; j++) {
            if (array[j].match(char )) 
            filteredData.push( array[j])
        }
        console.log(filteredData)
        let ul = document.createElement("ul");
        table.appendChild(ul);
        for (let i=0; i<filteredData.length; i ++) {
            let li = document.createElement("li");
            li.textContent = filteredData[i];
            ul.appendChild(li);
        }
    }
    
    submit.addEventListener ('click', () => {
        let choose = document.querySelector("#keys")
        let userKey = choose.value;
    
        if ( userKey == "firstName") {
            byFirstName ("firstName",input.value,state);
        }
        if ( userKey == "lastName") {
            byLastName ("lastName",input.value,state);
        }
        if ( userKey == "hobby") {
            byHobby ("hobby",input.value,state);
        }
        if ( userKey == "city") {
            byCity ("city",input.value,state);
        }
        if ( userKey == "id") {
            byId ("id",input.value,state);
        }
    })
    


}); 







  
  