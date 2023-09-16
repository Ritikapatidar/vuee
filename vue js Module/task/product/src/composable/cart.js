import {ref} from 'vue'
const cartArr=ref([])
export function addCart(item)
{
cartArr.value.push(item);
console.log("cart arr", cartArr.value);
}
export function getCart()
{
return cartArr;
}