const { createBot, createProvider, createFlow, addKeyword, addAnswer } = require('@bot-whatsapp/bot')

const QRPortalWeb = require('@bot-whatsapp/portal')
const BaileysProvider = require('@bot-whatsapp/provider/baileys')
const MockAdapter = require('@bot-whatsapp/database/mock')





const flujoprincipal = addKeyword(['hola', 'menú', 'menu', 'buen dia','buenos dias' , 'buen día', 'buenas'])
    .addAnswer('Hola, soy Spoti 🤖 el asistente virtual del *Laboratorio Spotorno*')
    .addAnswer('Elegí una de las siguientes opciones para que podamos ayudarte', 
        {buttons : [
            {body:'Estudios de Laboratorio'}, 
            {body:'Mis resultados ✉️'},
            {body:'Consultas'}
        ]
    }
)
const flujoconsultas = addKeyword('Consultas') .addAnswer('Elegí una de las siguientes opciones para que podamos ayudarte', 
{buttons : [
    {body:'Sedes y Horarios'}, 
    {body:'Indicaciones y Ayuno'},
    {body:'Requiero asistencia'}
]
}

)

const flujolab = addKeyword('Estudios de Laboratorio') .addAnswer('Elgí una opción',
            {buttons : [
            {body:'COVID 19'},   
            {body:'Laboratorio presencial'},
            {body:'Laboratorio a domicilio'},
        ]
    }
)
const flujopresencial = addKeyword('Laboratorio presencial') 
 .addAnswer('El horario de extraccion de sangre es de 8 a 11hs en todas las sedes')
 .addAnswer(
        'Elegí una opción',           
        {buttons : [
        {body:'Cotización'},    
        {body:'Obras Sociales y Prepagas'}, 
        {body:'Sedes y Horarios'},
        ]
    })

const flujocotizacion = addKeyword('Cotización') .addAnswer('Elgí una opción',           
            {buttons : [
            {body:'Tengo una orden médica'},    
            {body:'No tengo una orden'}, 
            {body:'Indicaciones y Ayuno'},
        ]
    }
)


const flujotengo = addKeyword('Tengo una orden médica') .addAnswer('Podes enviarnos una foto de tu orden o bien a través de nuestro web realizar una autogestión')
            .addAnswer('Elgí una opción',           
            {buttons : [
            {body:'Enviar foto de la orden'},
            {body:'Autogestión'}, 
            {body:'Obras Sociales y Prepagas'},  

        ]
    }
)
const flujofoto = addKeyword('Enviar foto de la orden') .addAnswer('Podemos cotizar tu orden en forma fácil y rápida, envianos una foto de la orden por este medio y nos contactaremos contigo')
const flujoauto = addKeyword('Autogestión') .addAnswer('Ingresa a www.laboratoriospotorno.com/estudios y selecciona los anális que deseas realizar') .addAnswer('Si necesitas ayuda o tenes alguna consulta al momento de hacerlo podes comunicarte con un asistente con el siguiente boton', 
{buttons : [
    {body:'Requiero asistencia'},
]})

    const flujonotengo = addKeyword('No tengo una orden') .addAnswer(['Si queres hacerte un chequeo de salud, tenemos uno que se adapta a vos',
        '*Conoce nuestros chequeos.*'])
    .addAnswer('Tambien podes *seleccionar los estudios* que te queiras realizar y armar una solicitud perzonalizada y cotizarla en tiempo real.')
    .addAnswer('Elgí una opción',           
     {buttons : [
        {body:'Chequeos de salud'},
        {body:'Seleccionar estudios'}, 
        {body:'Requiero asistencia'},  

        ]
    }
)
const flujoasistencia = addKeyword('Requiero asistencia').addAnswer('*¡Estamos para ayudarte!*')
    .addAnswer('Te pedimos que uses el medio mas adecuado según el grado de urgencia de tu necesidad.',
{buttons : [
{body:'WhatsApp'},   
{body:'Correo electrónico'},
{body:'Telefonicamente'},
]
}
)
const flujohumano = addKeyword ('WhatsApp') .addAnswer('*No respondas este mensaje* y aguardá que un asistente se comunicará contigo.')
    .addAnswer('🚨🚨🚨')
const flujotel = addKeyword ('Telefonicamente').addAnswer('Nuestro horario de atencion telefonica es de 9 a 19 hs.') 
    .addAnswer(['Por incovenientes con los reslutados debes comunicarte con la sede en la que ha sido atendido',
        'En caso de encontrarse fuera del horario de atención de la sede o tratarse de una visita a domicilio.'])
    .addAnswer('comuniquese al *1126005711*')
const flujocorreo = addKeyword ('Correo electrónico')
    .addAnswer('Envianos un email a *info@laboratoriospotorno.com*')



const flujocovid = addKeyword('COVID 19') .addAnswer('Podes realizar cualquiera de estos estudios en nuestras sedes, o bien podemos visitarte en tu domicilio')
    .addAnswer('Elegi una opcion',  
        {buttons : [
            {body:'PCR'}, 
            {body:'Test Rápido'},  
            {body:'Servicio a Empresas'}
        ]
    }
)
const flujopcr = addKeyword('PCR') .addAnswer('*PCR COVID 19*') .addAnswer([
        'La muestra se obtiene mediante un *hisopado nasofaringeo* que no requiere ayuno.', 
        'El resultado estará disponible en el día (si la muestra se toma por la mañana).', 
        'No es necesario solicitar turno, ni tener orden médica. Podes acercarte a cualquiera de nuestras sedes o pactar una *Visita a Domicilio.*'])
    .addAnswer([
        'El valor de la determinación es de *$8500* y la visita a domicilio en CABA de *$1500*.', 
        'En GBA el valor puede variar segun la distancia, si queres una cotización dejanos tu dirección exacta y un asistente te contactará.'])

const flujotr = addKeyword('Test Rápido') .addAnswer('*Test Rápido de Antigenos COVID 19*')
.addAnswer([
    'La muestra se obtiene mediante un *hisopado nasofaringeo* que no requiere ayuno.', 
    'Este método arroja el resultado en el momento y es ideal para pacientes sintomaticos 🤒.', 
    'No es necesario solicitar turno, ni tener orden médica. Podes acercarte a cualquiera de nuestras sedes o pactar una *Visita a Domicilio.*'
])
.addAnswer([
    'El valor de la determinación es de *$3500* y la visita a domicilio en CABA de *$1500*.', 
    'En GBA el valor puede variar segun la distancia, si queres una cotización dejanos tu dirección exacta y un asistente te contactará.'
    ])

const flujoempresas = addKeyword('Servicio a Empresas') .addAnswer('*Servicio COVID 19*') .addAnswer([
    '*Nuestros servicios incluyen:*','Operativo de testeo en la empresa.', 
    'Testeo individual de trabajadores en nuestras sedes.', 
    'Testeo individual de trabajadores en sus domicilios.'
])
.addAnswer('Por favor, dejanos los datos de contacto y un asistente se pondrá en contacto con Ustedes lo antes posible')

const flujodomicilios = addKeyword('Laboratorio a domicilio') .addAnswer([
        'Con *Labo a Domi* tenemos la mayor cobertura a domicilio.', 
        'cubrimos toda la Capital Federal y la mayor parte del Conurbano'])
    .addAnswer('Además para los pacientes PAMI (Red COFYB), o si tu orden particular supera los $5.000 la visita a domicilio es sin cargo en CABA')
    .addAnswer('Por favor completa el siguiente formulario para solicitar y nos comunicaremos contigo https://forms.gle/QBNCtpWiHKnkZrFx6')


const flujosedes = addKeyword('Sedes y Horarios') .addAnswer('*Contamos con 4 sedes para estar siempre cerca*')
.addAnswer(['*Lab Spotorno*', 'Fabian Onsari 884 - Wilde.', 'Horario extracción Lunes a Sábado de 8 a 11 hs atención Lunes a Viernes de 8 a 16hs y Sábados de 8 a 12 hs.'])
.addAnswer(['*Lab Liaudat*', 'Aguapey 3706 - Lanús.', '*Horarios: extracción Lunes a Viernes de 8 a 11 hs, atención Lunes a Vieres de 8 a 12 hs.'])
.addAnswer(['*Medicina Diagnóstica*', 'Alberti 631 - Once (CABA).', 'Horarios: extracción Lunes a Viernes de 8 a 11 hs, atención Lunes a Vieres de 8 a 16hs.'])
.addAnswer(['*Centro Médico Universal*', 'Av Lope de Vega 2287 - Devoto (CABA).', 'Horario extracción: Lunes a Viernes de 8 a 11 hs.', '*Horario de atención:* Lunes a Vieres de 8 a 16hs.'])

const flujoresultados = addKeyword('Mis resultados ✉️').addAnswer('Podes acceder a tus resultados desde', 'Necesitas el código que se encuentra en la parte inferior del "ticket de retiro".') .addAnswer ('www.misinformes.com.ar') 
    .addAnswer('En caso de dificultades para acceder o visualizarlos podes solicitar asistencia perzonalizada',{buttons : {body:'Requiero asistencia'}},)


const flujoorden = addKeyword('Tengo una Orden Médica 🧾').addAnswer('Envianos una foto de tu orden médica lo más clara posible, te enviaremos una cotización y las indicaciones para tus estudios.')
    .addAnswer('Si queres que la extracción sea en tu domicilio 🏠 indicanos tambien la dirección.')

const flujoooss = addKeyword('Obras Sociales y Prepagas').addAnswer('Podes ver el listado completo de las Obras Sociales y Prepagas que atendemos en') .addAnswer('www.laboratoriospotorno.com/ooss')


const flujoayuno = addKeyword('Indicaciones y Ayuno').addAnswer('Puedo ayudarte con todas estas indicaciones', {buttons : [{body:'Sangre'}, {body:'Orina'},  {body:'Cultivos'},]})

const flujosangre = addKeyword('Sangre') .addAnswer(['Los análisis de clínicos por norma general requieren 8hs de ayuno, con excepción de algunos.','incluiremos en el siguiente listado aquellos estudios con requerimientos especiales.']) 
    .addAnswer(['Para tener mas información podes acceder a www.laboraotiospotorno.com/indicaciones'],
)
const flujoorina = addKeyword('Orina') .addAnswer('')

const flujocultivos = addKeyword('Cultivos') .addAnswer('')


const main = async () => {
    const adapterDB = new MockAdapter()
    const adapterFlow = createFlow([flujoprincipal,flujoauto,flujofoto,flujosangre,flujoorina,flujocultivos, flujoconsultas, flujohumano, flujocovid, flujodomicilios, flujosedes, flujoorden, flujoooss,flujoresultados,flujoayuno, flujoempresas,flujopcr,flujotr,flujocorreo,flujopresencial,flujotengo,flujonotengo,flujotel, flujolab,flujocotizacion,flujoasistencia])
    const adapterProvider = createProvider(BaileysProvider)

    createBot({
        flow: adapterFlow,
        provider: adapterProvider,
        database: adapterDB,
    })

    QRPortalWeb()
}

main()
