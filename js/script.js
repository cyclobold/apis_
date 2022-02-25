(async function(){
    //get the users id
    let users = document.querySelector("#users");


    //get the users from Random Users API
    let results = await fetch("https://randomuser.me/api/?results=5");

    results = await results.json()

    console.log(results);
    let usersResults = results.results;

    //console.log("These are the users: ", usersResults);

    //the beginning part of the table
    let table = `<table>
                <thead>
                    <th>Email</th>
                    <th>First name</th>
                    <th>Last name</th>
                    <th>Profile Picture</th>
                </thead>
                <tbody>
                `
                
    usersResults.forEach(userResult =>{ 
        //console.log(userResult);
        let userEmail = userResult.email;
        let userFirstname = userResult.name.first;
        let userLastname = userResult.name.last;
        let userPicture = userResult.picture.thumbnail;

        table += `<tr>
        
                    <td>${userEmail}</td>
                    <td>${userFirstname}</td>
                    <td>${userLastname}</td>    
                    <td><img src='${userPicture}'></td>
                </tr>`;

    })

    //the ending part of the table
    table += `</tbody></table>`;

    users.innerHTML = table;


}())