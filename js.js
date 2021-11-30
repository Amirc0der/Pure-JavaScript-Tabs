const tabs = document.querySelector(".tabs")
const item = tabs.querySelector(".tabpage")
const items = tabs.querySelectorAll(".tabpage")
const list = tabs.querySelector(".tabheaditem")
const lists = tabs.querySelectorAll(".tabheaditem")
item.classList.add("show")
list.classList.add("active")

if (lists.length != items.length) {
	alert("The number of tabs does not match the number of pages.")
}

for ( i = lists.length -1 ; ~i!=0 ; i-- ) {
	lists[i].setAttribute("onclick", "makemeshow(" + i + ")")
}

function makemeshow (t) {
	tabs.querySelector(".show").classList.remove("show");
	items[t].classList.add("show")
	tabs.querySelector(".active").classList.remove("active");
	lists[t].classList.add("active")
}

