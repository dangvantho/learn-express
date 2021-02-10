function render(users,tbody){
    for(let i=0; i<users.length; ++i){
        tbody.innerHTML+=`
            <tr>
               <td>${i+1}</td>
               <td>${users[i].name}</td>
               <td>
                  <a class="text-decoration-none" href="/users/${users[i].name}/${users[i].id}">
                  View
                  </a>
                  </td>
            </tr>  
            `
    }
}
function findUsers(key,users,tbody){
    tbody.innerHTML=''
    let matchUsers=users.filter(user=>{
        return user.name.toLowerCase().includes(key.toLowerCase())
    })
    render(matchUsers,tbody)
}