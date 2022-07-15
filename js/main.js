document.addEventListener('DOMContentLoaded', function () {
	let error = document.getElementById('error');
	let ver = document.getElementById('ver');
	//Создаем объект 'user', который будет содержать информацию Detect.js 
	//Вызываем detect.parse() с navigator.userAgent в качестве аргумента
	let user = detect.parse(navigator.userAgent);
	// console.log(user);
	// console.log(navigator.userAgent.match(/Opera|OPR\//));
	// Выводим нужные значения в консоли браузера
	// console.log(user.browser.family);
	// console.log(user.browser.major);
	// console.log(user.os.family);

	// выводим инфу о браузере в win3
	// смотрим по Opera
	if (navigator.userAgent.match(/Opera|OPR\//)) {
		ver.innerHTML = user.os.family + ' Opera';
	// смотрим по IE
	} else if (document.documentMode) {
		ver.innerHTML = user.os.family + ' Internet Explorer';
	// смотрим по edge
	} else if (/Edge/.test(navigator.userAgent)) {
		ver.innerHTML = user.os.family + ' Microsoft Edge';
	}
	else {
		ver.innerHTML =  user.os.family + ' '
		+ user.browser.family + ' '
		+ user.browser.major + '.' + 
		user.browser.minor + ' patch: '
		+ user.browser.patch;
	}
	// проверяем браузер на наличие модуля webkitSpeechRecognition
	// checking by google
	if (!('webkitSpeechRecognition' in window)) {
		console.log('GOOGLE: not working on this browser');
		error.style.display = 'block'; 
	} else {
		console.log('GOOGLE: working');
	}
	//your way
	if (window.hasOwnProperty('webkitSpeechRecognition')) {
		console.log('YOUR: working');
	} else {
		console.log('YOUR: not working on this browser');
	}
	// проверяем на браузер Opera
	if (navigator.userAgent.match(/Opera|OPR\//))
		error.style.display = 'block';

});


function slowScroll(id) {
	let offset = 0;
	$('html, body').animate({
		scrollTop: $(id).offset ().top - offset
	}, 900);
	return false;
}
//делаем прослушку для кнопки reset
// let btnReset = document.getElementById('btn-reset');

// btnReset.addEventListener('click', function () {
// 	if (confirm("Для закрытия окна нажмите 'OK'?"))
// 		alert('confirmed');
// 	else
// 		alert('canceled');
// });

//сохраняем данные в файл
$(document).ready(function () {
	$('#btnSaveNDownload').click(function () {
		let identification = $('#identification').val();
		let dataAndTime = $('#dataAndTime').val();
		let complaints = $('#complaints').val();
		let anamnesisDisease = $('#anamnesisDisease').val();
		let anamnesisLife = $('#anamnesisLife').val();
		let anamnesisVTE = $('#anamnesisVTE').val();
		let objectiveStatus = $('#objectiveStatus').val();
		let localStatus = $('#localStatus').val();
		let diagnosisAdmission = $('#diagnosisAdmission').val();
		let justificationDiagnosis = $('#justificationDiagnosis').val();
		let diagnosis = $('#diagnosis').val();
		let nameFile = $('#nameFile').val();

		let patientDetails = 'Номер пациента, пол и возраст\n' + ' ' + identification + '\n' + '\n'
		+ 'Дата и время осмотра\n' + ' ' + dataAndTime + '\n' + '\n'
		+ 'Жалобы\n' + ' ' + complaints + '\n' + '\n'
		+ 'Анамнез болезни\n' + ' ' + anamnesisDisease + '\n' + '\n'
		+ 'Анамнез жизни\n' + ' ' + anamnesisLife + '\n' + '\n'
		+ 'Анамнез ВТЭ\n' + ' ' + anamnesisVTE + '\n' + '\n'
		+ 'Объективный статус\n' + ' ' + objectiveStatus + '\n' + '\n'
		+ 'Локальный статус\n' + ' ' + localStatus + '\n' + '\n'
		+ 'Диагноз при поступлении\n' + ' ' + diagnosisAdmission + '\n' + '\n' 
		+ 'Обоснование диагноза\n' + ' ' + justificationDiagnosis + '\n' + '\n' 
		+ 'Диагноз\n' + ' ' + diagnosis + '\n' + '\n';

		let blob = new Blob([patientDetails],
			{
				type: 'aplication/json;utf - 8'
			}
		)

		if (identification == '' || dataAndTime == '' || complaints == '' ||
		anamnesisDisease == '' || anamnesisLife == '' || anamnesisVTE == '' || 
		objectiveStatus == '' || localStatus == '' || diagnosisAdmission == '' ||
		justificationDiagnosis == '' || diagnosis == '' || nameFile == '' ) {
			alert('Пожалуйста, заполните все поля данными.');
		} else saveAs(blob, nameFile + '_medforms.txt');
	});
});