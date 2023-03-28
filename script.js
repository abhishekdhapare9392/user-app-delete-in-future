// IFEE Function to load on reload
const userList = document.querySelector("#userList");

// Fetch the users
fetch("https://dummyjson.com/users/?limit=10").then(res => res.json()).then(data => {
    console.log(data);
    let users = data.users;
    users.map(user => {
        let li = document.createElement('li');
        li.className = 'list-group-item list-group-item-action'
        li.dataset.id = user.id;
        li.innerText = `${user.firstName} ${user.lastName}`;
        userList.append(li);
    })

}).catch(err => {
    console.error(err.message)
})


document.addEventListener('click', function (e) {
    const target = e.target.closest(".list-group-item");
    if (target) {
        const userId = target.dataset.id;
        fetch(`https://dummyjson.com/users/${userId}`).then(res => res.json()).then(user => {
            let userDetailsElement = document.querySelector('#userDetails');

            let cardDetails = `
            <div class="card-header">${user.firstName} ${user.lastName}</div>
            <div class="card-body">
              <p><span class="badge bg-primary">Email: </span> ${user.email}</p> 
              <p><span class="badge bg-primary">Phone: </span> ${user.phone}</p>
            </div>
            `;

            userDetailsElement.innerHTML = cardDetails
        })
    }
})