let searchBar = document.getElementById("searchBar")
let products = [
    { id:1 , imgPath:"./IMG/plv1313-White-list.png",title:"Alphaboost shoes", price:"$290" , rate:4.5 },
    { id:2 , imgPath:"./IMG/plv1121-White-list.png",title:"Alphaedge 4d reflective shoes R", price:"$149.9" , rate:4 },
    { id:3 , imgPath:"./IMG/plv2011-Brown-list.png",title:"Edge gameday shoes", price:"$799" , rate:5 },
    { id:4 , imgPath:"./IMG/plv2353-White-list.png",title:"Lite racer adapt 3.0 shoes", price:"$678" , rate:3.5 },
    { id:6 , imgPath:"./IMG/plv2390-Red-list.png",title:"Senseboost go shoes", price:"$467" , rate:4.5 },
    { id:7 , imgPath:"./IMG/plv2674-Black-list.png",title:"Custom chuck taylor all star by you", price:"$290" , rate:3 },
    { id:8 , imgPath:"./IMG/plv2960-Purple-list.png",title:"Jack purcell leather", price:"$900" , rate:5 },
    { id:9 , imgPath:"./IMG/plv2996-Purple-list.png",title:"Chuck taylor all star move", price:"$290" , rate:4.5 },
    { id:10,imgPath:"./IMG/plv3169-Blue-list.png",title:"Seasonal color chuck 70", price:"$990" , rate:4 },
    { id:11,imgPath:"./IMG/plv3206-Blue-list.png",title:"Nike air presto by you", price:"$490" , rate:2.5 },
    { id:12,imgPath:"./IMG/plv4622-Green-list.png",title:"Nike drop-type premium", price:"$890" , rate:4.5 },
    { id:13 ,imgPath:"./IMG/plv7632-Green-list.png",title:"Nike odyssey react flyknit 2", price:"$940.6" , rate:4.5 },
]

let newList =[]
newList = [...products];
function showData() {
    let temp = ""
    newList.forEach((el)=>{
        temp+= `
        <div class="col-md-3 col-sm-6 ">
        <div class='addParent rounded'>
            <div class='container'>
                <img src="${el.imgPath}" class='w-100' alt="" />
                <p>${el.title}</p>
                <div class='d-flex justify-content-between py-2'>
                    <span>${el.price}</span>
                    <span>
                        <i class="fa-solid fa-star rating-color px-2"></i>${el.rate}
                    </span>
                </div>
            </div>
            <div  class='d-flex justify-content-between py-3 align-items-center '>
                <button class='btn w-75 bg-dark addHover text-white addColorChange'> + Add</button>
                <button class='btn btnFocus'><i class=" fa-solid fa-heart fa-xl heartPosition"></i></button>
            </div>
        </div>
    </div> `
    })
    document.getElementById("myRow").innerHTML = temp
}

function handleChange() {
    let productList = [];
    productList = products.filter((e) => e.title.toLowerCase().includes(searchBar.value))
    if(productList.length === 0){
        newList = [...products]
        console.log("didn't find anything");
        showData()
    }
    else{
        console.log("there is products");
        newList = [...productList]
        showData()
    }
}

handleChange()


