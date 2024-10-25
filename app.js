const contenedorQR = document.getElementById('contenedorQR');
const formulario = document.getElementById('formulario');

const QR = new QRCode(contenedorQR );

formulario.addEventListener('submit', (e) => {
	e.preventDefault();
	const url = formulario.link.value +"?Params=";
	var Parametros = formulario.txtExp.value + "|"+formulario.txtFecha.value + "|"+formulario.txtEst.value + "|"+formulario.txtTitular.value;
	var str = Parametros.replace(/\s+/g, '!').toUpperCase();
	console.log(url+str);
	QR.makeCode(url+str);
});


$( document ).ready(function() {
    console.log( "ready!" );
	OcultaControles();
	const keysValues = window.location.search;
    const urlParams = new URLSearchParams(keysValues)
    const param1 = urlParams.get('Usr')
	if(param1 != "wicho")
	{
		UsuarioInvalido();
	}

	$('#selectFormulario').on('change', function(){
		var selected = $('#selectFormulario').val();
		var url = "";
		if($('#selectFormulario').val() == "1")
		{
			url = "https://GobDocs.github.io/Gob-Docs/Index.html";
			$('#divCdmx').show();
			$('#divInveamex').hide();
			$('#divInvea').hide();
			$('#link').val(url);
			ClearCampos();
			
			
				$('#contenedorQR img').remove();
		}
		else if ($('#selectFormulario').val() == "2")
		{
			url = "https://GobDocs.github.io/Gob-Docs/Inveamex.html"
			$('#divInveamex').show();
			$('#divCdmx').hide();
			$('#divInvea').hide();
			$('#Invlink').val(url);
			ClearCampos();
			$('#contenedorQR img').remove();
			
		}
		else
		{
			url = "https://GobDocs.github.io/Gob-Docs/Inveacdmx.html"
			$('#divInveamex').hide();
			$('#divCdmx').hide();
			$('#divInvea').show();
			$('#Invcdmxlink').val(url);
			ClearCampos();
			$('#contenedorQR img').remove();

			
		}
	 });

	 $( "#btnQRCDMX" ).on( "click", function() {
		const url = formulario.link.value +"?Params=";
		var Parametros = formulario.txtExp.value + "|"+formulario.txtFecha.value + "|"+formulario.txtEst.value + "|"+formulario.txtTitular.value;
		var str = Parametros.replace(/\s+/g, '!').toUpperCase();

		var qrcode = new QRCode(document.getElementById("contenedorQR"), {
			text: url+str,
			colorDark : "#000000",
			colorLight : "#ffffff",
			correctLevel : QRCode.CorrectLevel.H
		});
		
		qrcode.clear(); // clear the code.
	
		qrcode.makeCode(url+str);

	
	});
	 $( "#btnQRInveamex" ).on( "click", function() {
		const urlPage = formulario.Invlink.value +"?Params=";
		var Parametros = formulario.InvAsunto.value + "|"+formulario.InvFolio.value + "|"+formulario.InvFechaNot.value + "|"+formulario.InvFechavis.value + "|"+formulario.InvHoravis.value + "|"+formulario.InvVerificador.value + "|"+formulario.InvrRazonSoc.value+ "|"+formulario.InvDireccion.value;
		var str = Parametros.replace(/\s+/g, '!').toUpperCase();
		const urlPagina = urlPage+str
		

		var qrcode = new QRCode(document.getElementById("contenedorQR"), {
			text: urlPagina,
		
			colorDark : "#000000",
			colorLight : "#ffffff",
			correctLevel : QRCode.CorrectLevel.H
		});
		
		qrcode.clear(); // clear the code.
	
		qrcode.makeCode(urlPagina);
	 
	});

	$( "#btnQRInvea" ).on( "click", function() {
		const urlPage = formulario.Invcdmxlink.value +"?Params=";
		var Parametros = formulario.InvcdmxAsunto.value + "|"+formulario.InvcdmxFecha.value + "|"+formulario.InvcdmxVerificador.value + "|"+formulario.InvcdmxAsignacion.value + "|"+formulario.InvcdmxFolio.value + "|"+formulario.InvcdmxHora.value + "|"+formulario.InvcdmxDudas.value ;
		var str = Parametros.replace(/\s+/g, '!').toUpperCase();
		const urlPagina = urlPage+str
		console.log(urlPagina);
		
		var qrcode = new QRCode(document.getElementById("contenedorQR"), {
			text: urlPagina,
			
			colorDark : "#000000",
			colorLight : "#ffffff",
			correctLevel : QRCode.CorrectLevel.H
		});
		
		qrcode.clear(); // clear the code.
	
		qrcode.makeCode(urlPagina);

	
	});

});

function OcultaControles(){
	$('#divCdmx').hide();
	$('#divInveamex').hide();
	$('#divInvea').hide();
}
function ClearCampos(){
	$('#txtExp').val('');
	$('#txtFecha').val('');
	$('#txtEst').val('');
	$('#txtTitular').val('');
	$('#InvAsunto').val('');
	$('#InvFolio').val('');
	$('#InvFechaNot').val('');
	$('#InvFechavis').val('');
	$('#InvHoravis').val('');
	$('#InvVerificador').val('');
	$('#InvrRazonSoc').val('');
	$('#InvDireccion').val('');
	$('#InvcdmxAsunto').val('');
	$('#InvcdmxFecha').val('');
	$('#InvcdmxVerificador').val('');
	$('#InvcdmxAsignacion').val('');
	$('#InvcdmxFolio').val('');
	$('#InvcdmxHora').val('');
	$('#InvcdmxDudas').val('');
}

function UsuarioInvalido(){
	$( "#selectFormulario" ).prop( "disabled", true );
}