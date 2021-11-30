const tabs = document.querySelector(".tabs")
const item = tabs.querySelector(".tabpage")
const items = tabs.querySelectorAll(".tabpage")
const list = tabs.querySelector(".tabheaditem")
const lists = tabs.querySelectorAll(".tabheaditem")
item.classList.add("show")
list.classList.add("active")
let timeout = 0;

for ( i = lists.length -1 ; ~i!=0 ; i-- ) {
	lists[i].setAttribute("onclick", "makemeshow(" + i + ")")
}

function makemeshow (t) {
	tabs.querySelector(".show").classList.remove("show");
	items[t].classList.add("show")
	tabs.querySelector(".active").classList.remove("active");
	lists[t].classList.add("active")
	timeout = t;

}
function timer() {
	if (timeout >= lists.length) {
		timeout = 0;
		timer()
	} else {
		makemeshow(timeout)
		timeout++
		window.setTimeout(timer, 5000)
	}
}
timer()
