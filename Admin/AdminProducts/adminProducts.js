var nameinput = document.getElementById("productName")
var priceinput = document.getElementById("productPrice")
var categoryinput = document.getElementById("productCategory")
var descinput = document.getElementById("productDescription")
var productList = []
function addProduct() {
    var product ={
        name: nameinput.value,
        price: priceinput.value,
        category: categoryinput.value,
        desc: descinput.value,
    }
    productList.push(product)
    displayDate()
}
function  displayDate(){
    var temp =""
    for(var i = 0 ; i < productList.length ; i++){
        temp += `<tr>
        <td>` + i +`</td>
        <td>` + productList[i].name + `</td>
        <td>` + productList[i].price + `</td>
        <td>` + productList[i].category + `</td>
        <td>
            <button class="btn btn-outline-warning">Update</button>
        </td>
        <td>
            <button class="btn btn-outline-danger">Delete</button>
        </td>
    </tr>`
    }
    document.getElementById("tableBody").innerHTML = temp
}