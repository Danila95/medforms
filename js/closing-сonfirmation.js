function closeOrNot(e) {
	if(!e)
		e = window.event;
	e.cancelBubble = true;
	e.returnValue = '';
	if (e.stopPropagation) {
		e.stopPropagation();
		e.preventDefault();
	}
}
window.onbeforeunload=closeOrNot;

