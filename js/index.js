const product = [
    {
        id: 0,
        title: 'Auriss',
        price: 5,
        image: 'img/auriculares.jpg',
    },
    {
        id: 1,
        title: 'Licuadora',
        price: 60,
        image: 'img/licuadora.jpg',
    },
    {
        id: 2,
        title: 'Neetbook',
        price: 180,
        image: 'img/neetbook.jpg',
    },
    {
        id: 3,
        image: 'img/televisor.jpg',
        title: 'TV 60 pulgadas',
        price: 300,
    },
    {
        id: 4,
        image: 'img/celular.jpg',
        title: 'Celular',
        price: 100,
    },
    {
        id: 5,
        image: 'img/camara.jpg',
        title: 'Camara pro',
        price: 220,
    },
    {
        id: 6,
        image: 'img/secador.jpg',
        title: 'Secador',
        price: 45,
    },
    {
        id: 7,
        image: 'img/pava.png',
        title: 'Pava electrica',
        price: 10,
    },
    {
        id: 8,
        image: 'img/batidora.jpg',
        title: 'Batidora',
        price: 50,
    },
    {
        id: 9,
        image: 'img/lavarropas.jpg',
        title: 'Lavarropas',
        price: 245,
    },
];

const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
    var {image, title, price} = item;
    return(
    `<div class='box'>
        <div class='img-box'>
            <img class='images' src=${image}></img>
        </div>
    <div class='bottom'>
    <p>${title}</p>
    <h2>$ ${price}.000</h2>`+
    "<button onclick='index("+(i++)+")'>Añadir al carrito</button>"+
    `</div>
    </div>`
    )
}).join('');

var cart =[];

function index(a){
    cart.push({...categories[a]});
    displaycart();
}

function delElement(a){
    cart.splice(a, 1);
    displaycart();
}

function displaycart(a){
    let j = 0, total=0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "Tu carrito está vacio";
        document.getElementById("total").innerHTML = "$ "+0+".00";
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            var {image, title, price} = items;
            total=total+price;
            document.getElementById("total").innerHTML = "$ "+total+".00";
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p style='font-size: 12px;'>${title}</p>
                <h2 style='font-size: 15px;'>$ ${price}.00</h2>`+
                "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
            );
        }).join('');
    }
}