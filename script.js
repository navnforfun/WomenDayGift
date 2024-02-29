const params = new Proxy(new URLSearchParams(window.location.search), {
	get: (searchParams, prop) => searchParams.get(prop),
});
// Get the value of "some_key" in eg "https://example.com/?some_key=some_value"
var user = params.name; // "some_value"
var carousel = $(".swiper-wrapper");
var listCarousel = $(".swiper-slide");
var statusAudio = false;
var aPau = $(".a-pause");
var aPla = $(".a-play");
var ctrl = $(".ctrl-audio");
var progress = $(".progress");
var timeAudio = $(".time-audio");
// add bg img
let userName;
switch (user) {
	case "nhi":
		userName = "Ngọc Nhi";
		break;
	case "huyen":
		userName = "Khánh Huyền";
		break;
	case "nhan":
		userName = "Thanh Nhàn";
		break;
	case "oanh":
		userName = "Kim Oanh";
		break;
	case "binh":
		userName = "Thanh Bình";
		break;
		case "linh":
		userName = "Phạm Linh";
		break;

}
console.log(userName);

var data = {
	audio: new Audio(`data/${user}/audio.mp3`),
	images: [],
};
var setName = $(".user-name")
setName.text(userName)
listCarousel.each((index, element) => {
	console.log(element);
	element.style.backgroundImage =
		'url("' + "./data/" + user + "/imgs/" + `i (${index + 1}).jpg` + '")';
	// element.css(
	// 	"background-image",
	// 	'url("' + "./data/" + user + `i (${index}).jpg` + '")'
	// );
});
// console.log(audio);
ctrl.on("click", function () {
	// alert("hii")
	changeStatusPlay();
});
function changeStatusPlay() {
	if (statusAudio) {
		statusAudio = false;
		aPau.addClass("hidden");
		aPla.removeClass("hidden");
		data.audio.pause();
	} else {
		statusAudio = true;
		aPau.removeClass("hidden");
		aPla.addClass("hidden");
		data.audio.play();
	}
}
// console.log(progress);
data.audio.ontimeupdate = function () {
	let time = (data.audio.currentTime / data.audio.duration) * 100;
	progress.val(time);
	// console.log(progress.val());
};
// timeAudio.text("hhh")

var swiper = new Swiper(".mySwiper", {
	effect: "cards",
	grabCursor: true,
});
