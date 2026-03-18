let services = [
    {
        name: "Dry Cleaning",
        price: 200,
        img: "https://images.unsplash.com/photo-1520434901111-8e9bcb42c628?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZHJ5JTIwY2xlYW5pbmd8ZW58MHx8MHx8fDA%3D"
    },
    {
        name: "Leather Cleaning",
        price: 999,
        img: "https://plus.unsplash.com/premium_photo-1678718606493-9acf0fb85e1b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TGVhdGhlciUyMGNsZWFuaW5nfGVufDB8fDB8fHww"
    },
    {
        name: "Ironing",
        price: 30,
        img: "https://images.unsplash.com/photo-1740684589228-54b6fba08985?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8SXJvbmluZ3xlbnwwfHwwfHx8MA%3D%3D"
    },
    {
        name: "Wash & Fold",
        price: 140,
        img: "https://media.istockphoto.com/id/1286024201/photo/stacked-and-ready-to-be-packed.webp?a=1&b=1&s=612x612&w=0&k=20&c=t_C9QR-aF7hGnOwAktgQCBWiwuIBaHa5CdaF_cmTv7k="
    },
    {
        name: "Stain Removal",
        price: 500,
        img: "https://plus.unsplash.com/premium_photo-1676810460522-bc963e5554d8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3RhaW4lMjByZW1vdmFsfGVufDB8fDB8fHww"
    }
];
let currentIndex = 0;
let cart = [];
let total = 0;

function displayServices() {
    let container = document.getElementById("services");
    container.innerHTML = "";

    if (currentIndex >= services.length) {
        container.innerHTML = "<h3>No more services</h3>";
        return;
    }

    let item = services[currentIndex];

    let div = document.createElement("div");
    div.className = "service";

    div.innerHTML = `
        <img src="${item.img}">
        <h3>${item.name}</h3>
        <p>₹${item.price}</p>

        <div class="btns">
            <button class="skip" onclick="skipItem()">Skip</button>
            <button class="add" onclick="addItem()">Add Item</button>
        </div>
    `;

    container.appendChild(div);
}

function addItem() {
    let item = services[currentIndex];

    cart.push(item);
    total += item.price;

    currentIndex++;  

    updateCart();
    displayServices();
}

function skipItem() {
    currentIndex++; 

    displayServices();
}

function updateCart() {
    let tbody = document.getElementById("cartItems");
    tbody.innerHTML = "";

    cart.forEach((item, i) => {
        tbody.innerHTML += `
            <tr>
                <td>${i + 1}</td>
                <td>${item.name}</td>
                <td>₹${item.price}</td>
            </tr>
        `;
    });

    document.getElementById("total").innerText = total;

    document.getElementById("bookBtn").disabled = cart.length === 0;
}

function bookNow() {
    let name = document.getElementById("name").value;

    if (name === "") {
        document.getElementById("msg").innerText = "Enter your name!";
        return;
    }

    document.getElementById("msg").innerText =
        "Thank you for contacting, we will get back to you soon!";
}

displayServices();