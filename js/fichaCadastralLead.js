function ShowHideDiv(chkPassport) {
    var dvPassport = document.getElementById("dvPassport");
    // dvPassport.style.display = chkPassport.checked ? "block" : "none";

    if (chkPassport.checked) {
    	dvPassport.style.opacity = '1';
    	dvPassport.style.cursor = 'pointer';
    } else {
    	dvPassport.style.opacity = '.4';
    	dvPassport.style.cursor = 'not-allowed';
    }
};


var x = document.documentElement.outerHTML;


var bodyElement = document.querySelector("body");


















// modal dados pessoais
document.querySelector('#plusDadosPessoais').addEventListener('click', function() {
	var modalDadosPessoais = document.querySelector('#modalDadosPessoais');
	if (document.querySelector('#modalDadosPessoais').style.display == 'none') {
		modalDadosPessoais.style.display = 'flex';
	} else {
		modalDadosPessoais.style.display = 'none';
	}
});

document.querySelector('#closeModalDadosPessoais').addEventListener('click', function() {
	document.querySelector('#modalDadosPessoais').style.display = 'none';
});
















// modal midias
document.querySelector('#plusMidias').addEventListener('click', function() {
	var modalMidias = document.querySelector('#modalMidias');
	if (document.querySelector('#modalMidias').style.display == 'none') {
		modalMidias.style.display = 'flex';
		bodyElement.style.overflow = 'hidden!important';
	} else {
		modalMidias.style.display = 'none';
	}
});

document.querySelector('#closeModalMidias').addEventListener('click', function() {
	document.querySelector('#modalMidias').style.display = 'none';
});


















// modal temas
document.querySelector('#plusTemas').addEventListener('click', function() {
	var modalInteresses = document.querySelector('#modalInteresses');
	if (document.querySelector('#modalInteresses').style.display == 'none') {
		modalInteresses.style.display = 'flex';
	} else {
		modalInteresses.style.display = 'none';
	}
});

document.querySelector('#closeModalInteresses').addEventListener('click', function() {
	document.querySelector('#modalInteresses').style.display = 'none';
});
















// modal agências
document.querySelector('#descadastrarBtn').addEventListener('click', function() {
	var modalAgencias = document.querySelector('#modalAgencias');
	if (document.querySelector('#modalAgencias').style.display == 'none') {
		modalAgencias.style.display = 'flex';
	} else {
		modalAgencias.style.display = 'none';
	}
});

document.querySelector('#closeModalAgencias').addEventListener('click', function() {
	document.querySelector('#modalAgencias').style.display = 'none';
});