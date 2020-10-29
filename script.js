const phoneItems = document.querySelector(".phone-items");
const popup = document.querySelector(".popup-box")
const popupCloseBtn = popup.querySelector(".popup-close-btn");
const popupCloseIcon = popup.querySelector(".popup-close-icon");

phoneItems.addEventListener("click", function(event){
	if(event.target.tagName.toLowerCase() == "button"){
		const item = event.target.parentElement;
		const h3 = item.querySelector("h3").innerHTML;
		const readMoreCont =  item.querySelector(".read-more-content").innerHTML;

		popup.querySelector("h3").innerHTML = h3;
		popup.querySelector(".popup-body").innerHTML = readMoreCont;
		popupBox();
	}
})

popupCloseBtn.addEventListener("click", popupBox);
popupCloseIcon.addEventListener("click", popupBox);

// Close popup box when clicked outside the box other than the close icon or the close button
popup.addEventListener("click", function(event){
	if (event.target == popup) {
		popupBox();
	}
})


function popupBox(){
	popup.classList.toggle("open")
}