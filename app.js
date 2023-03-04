const { createBot, createProvider, createFlow, addKeyword, addAnswer } = require('@bot-whatsapp/bot')

const QRPortalWeb = require('@bot-whatsapp/portal')
const BaileysProvider = require('@bot-whatsapp/provider/baileys')
const MockAdapter = require('@bot-whatsapp/database/mock')




const flujoprincipal = addKeyword(['hola','Hola','hola!','Hola!','hola,','Hola,', 'menú', 'menu', 'buen dia','buenos dias','Buenos','Buen', 'buen día', 'buenas'])
    .addAnswer('Hola, soy Docty 🤖 el asistente virtual del *Laboratorio Spotorno* y *Medicina Diagnóstica*','Seleccioná una de las siguientes opciones',

        {buttons : [
            {body:'Laboratorio 💉'}, 
            {body:'Estudios y Médicos 👩‍⚕️👨‍⚕️'},
            {body:'Otras consultas 💡'}]}) 
            .addAnswer('En la opción de *Laboratorio* podrás resolver todas tus dudas, solicitar turnos o agendar una visita a domicilio')
        .addAnswer('En  *Estudios y Médicos* encontraras Ecografías, Ecodoppler, Radiografías (Rx), Mamografías, y turnos con nuestros Médicos Clínicos, Cardiólogos, Ginecólogos, Traumatólogos entre otros')
        .addAnswer('En *Otras consultas* encontraras acceso a tus resultados, nuestras sedes y horarios, indicaciones médicas para tus análisis o comunicarte con uno de nuestros asesores')


    const flujomedico = addKeyword('Estudios y Médicos 👩‍⚕️👨‍⚕️').addAnswer('*Cartilla*')
        .addAnswer('Seleccioná una de las siguientes opciones', 
        {buttons : [
            {body:'Solicitá un turno 👨‍⚕️'}, 
            {body:'Cartilla Médica'},
            {body:'Otras consultas 💡'}]})
        .addAnswer('En *Cartilla Médica* Podrás ver los turnos disponibles para nuestros Médicos y estudios Médicos')

            const flujosedemed = addKeyword('Solicita un turno 👨‍⚕️') .addAnswer('Ahora podrás solicitar un turno completando un formulario muy simple, entra a "-Forms-"')

            const flujocartilla = addKeyword('Cartilla Médica') .addAnswer('Consultanos telefonicamente llamando a este numero en el horario de 10 a 16 hs')

                const flujomd = addKeyword('Dias y horario por médico y estudio') .addAnswer('')

                const flujocmu = addKeyword('') .addAnswer('')

            // Otras consultas 💡 en Más..



    const flujolaboratorio = addKeyword(['Laboratorio 💉'])
    .addAnswer('Podras gestionar turnos, agendar visitas a domicilio, cotizar tus ordenes y también crear una que se adapte a vos.')
    .addAnswer('Seleccioná una de las siguientes opciones', 
        {buttons : [
        {body:'Laboratorio presencial 🩸'}, 
        {body:'Laboratorio a Domicilio'}]})

        // LABORATORIO PRESENCIAL

        const flujolab = addKeyword('Laboratorio presencial 🩸') .addAnswer('Elegí una opción',
            {buttons : [
            {body:'COVID 19'},   
            {body:'Solicitar un turno 💉'},
            {body:'Cotizar en linea'}]})

            const flujocovid = addKeyword('COVID 19') .addAnswer('Puedes realizar cualquiera de estos estudios en nuestras sedes, o bien podemos visitarte en tu domicilio').addAnswer('Elegí una opcion', {buttons : [
                {body:'PCR'}, 
                {body:'Test Rápido'},  
                {body:'Servicio COVID a Empresas'}]})
    
    
                const flujopcr = addKeyword('PCR') 
                    .addAnswer('*PCR COVID 19*') .addAnswer(['La muestra se obtiene mediante un *hisopado nasofaringeo* que no requiere ayuno.', 
                        'El resultado estará disponible en el día (si la muestra se toma por la mañana).', 
                        'No es necesario solicitar turno, ni tener orden médica. Puedes acercarte a cualquiera de nuestras sedes o pactar una *Visita a Domicilio.*'])
                    .addAnswer(['El valor de la determinación es de *$8.500* y la visita a domicilio en CABA de *$1.000*.', 
                        'En GBA el valor puede variar segun la distancia, si queres una cotización dejanos tu dirección en el siguiente formulario','https://forms.gle/QBNCtpWiHKnkZrFx6'])
    
                const flujotr = addKeyword('Test Rápido') 
                    .addAnswer('*Test Rápido de Antígenos COVID 19*')
                    .addAnswer(['La muestra se obtiene mediante un *hisopado nasofaringeo* que no requiere ayuno.', 
                        'Este método arroja el resultado en el momento y es ideal para pacientes sintomaticos 🤒.', 
                        'No es necesario solicitar turno, ni tener orden médica. Puedes acercarte a cualquiera de nuestras sedes o pactar una *Visita a Domicilio.*'])
                    .addAnswer(['El valor de la determinación es de *$3.500* y la visita a domicilio en CABA de *$1.000*.', 
                        'En GBA el valor puede variar segun la distancia, si quieres una cotización dejanos tu dirección en el siguiente formulario','https://forms.gle/QBNCtpWiHKnkZrFx6'])
    
                const flujoempresas = addKeyword('Servicio COVID a Empresas') 
                    .addAnswer('*Servicio COVID 19*') .addAnswer([
                        '*Nuestros servicios incluyen:*','Operativo de testeo en la empresa.', 
                        'Testeo individual de trabajadores en nuestras sedes.', 
                        'Testeo individual de trabajadores en sus domicilios.'])
                    .addAnswer('Por favor, dejanos los datos de contacto y un asistente se pondrá en contacto con Ustedes lo antes posible')
    

            const flujoturno = addKeyword('Solicitar un turno 💉') .addAnswer('No es necesario solicitar un turno para la atención presencial en ninguna de nuestras sedes').addAnswer('Elegí una de las siguientes opciones', {buttons : [
                {body:'Sedes y Horarios'}, 
                {body:'Indicaciones y Ayuno'},
                {body:'Requiero asistencia'}]})

                //sedes y horario en otras consultas

                //Indicaciones y ayuno en otras consultas

                //Requiero asistencia en otras consultas

            
            const flujocotizacion = addKeyword('*Cotizar en linea*').addAnswer('En Cobertura Médica encontraras el listado de Obras Sociales que atendemos') .addAnswer('Elgí una opción', {buttons : [
                {body:'Cobertura Médica'},
                {body:'Tengo una orden médica'},    
                {body:'No tengo una orden'}]})

                const flujotengo = addKeyword('Tengo una orden médica') .addAnswer('Puedes enviarnos una foto de tu orden o bien a través de nuestro web realizar una autogestión')
                    .addAnswer('Elegí una opción', {buttons : [
                        {body:'Enviar foto de la orden'},
                        {body:'Autogestión'}, 
                        {body:'Obras Sociales y Prepagas'}]})

                    
                    const flujofoto = addKeyword('Enviar foto de la orden') .addAnswer('Podemos cotizar tu orden en forma fácil y rápida, envianos una foto de la orden por acá y nos contactaremos contigo')

                    const flujoauto = addKeyword('Autogestión') .addAnswer('Ingresá a www.laboratoriospotorno.com/estudios y seleccioná los análisis que deseas realizar') 
                        .addAnswer('Si necesitas ayuda o tenes alguna consulta al momento de hacerlo Puedes comunicarte con un asistente con el siguiente botón', {buttons : [
                            {body:'Requiero asistencia'}]})

                            //requiero asistencia en otras consultas

                
                const flujonotengo = addKeyword('No tengo una orden') .addAnswer(['Si quieres hacerte un chequeo, tenemos uno que se adapta a vos',
                        '*Conoce los Controles de salud ingresando a www.laboratoriospotorno.com/chequeos.*'])
                    .addAnswer('También armar una Orden de análisis personalizada y cotizarla en tiempo real ingresando en www.laboratoriospotorno.com/estudios .')
                    .addAnswer('o bien comunicate con nosotros', {buttons : [
                        {body:'Requiero asistencia'}]})

                    
                const flujoooss = addKeyword(['Cobertura Médica', 'obra social','obras sociales']).addAnswer('Elegí una opción..', {buttons : [
                        {body:'Laboratorio Clinico OOSS'},   
                        {body:'Consultas y estudios Médicos OOSS'}]})
                    
                        const flujooslab = addKeyword('Laboratorio Clinico OOSS') .addAnswer('Atendemos más de 100 OOSS entre las que se destacan PAMI, IOMA, Galenos, Swiss Medical, Emergencias, Poder Judicial, IOSFA, UPCN entre otras').addAnswer('Puedes ver el listado completo de las en:') .addAnswer('www.laboratoriospotorno.com/ooss')
                    
                        const flujoosmed = addKeyword('Consultas y estudios Médicos OOSS') .addAnswer('Emergencias Salud, SPS Mutual, ODOP')


        //LABORATORIO A DOMICILIO
        const flujodomicilios = addKeyword('Laboratorio a domicilio') .addAnswer(['Con *Labo a Domi* tenemos la mayor cobertura en extracción de sangre e hisopados a domicilio.', 'Cubrimos toda la Capital Federal y la mayor parte del Conurbano']).addAnswer('Además para los pacientes PAMI (Red COFYB y UGL X), o si tu orden particular supera los $6.000 la visita a domicilio es sin cargo en CABA', {buttons : [
            {body:'COVID 19'}, 
            {body:'Extracciones a domicilio'},  
            {body:'PAMI'}]})

            //COVID 19 esta desarrollado LABORATORIO PRESENCIAL

            const flujextraccion = addKeyword('Extracciones a domicilio') .addAnswer('Puedes realizar cualquiera de estos estudios en nuestras sedes, o bien podemos visitarte en tu domicilio') .addAnswer('Elegí una opción', {buttons : [
                {body:'Agendar turno'}, 
                {body:'Cotización de domicilio'},  
                {body:'Indicaciones y Ayuno'}]})


                const flujoturnodomi = addKeyword('Agendar turno') .addAnswer('Podés agendar un turno desde el siguiente formulario de google', 'https://forms.gle/QBNCtpWiHKnkZrFx6') .addAnswer('Una vez completado el formulario, te llamaremos al numero que nos dejaste para confirmar todo').addAnswer('También puede interesarte saber:', {buttons : [
                    {body:'Sedes y Horarios'}, 
                    {body:'Indicaciones y Ayuno'},
                    {body:'Cotización de domicilio'}]})

                const flujcotizadomi = addKeyword('Cotización de domicilio') .addAnswer('Es muy simple saber el costo de una visita a domicilio, solo debes enviarnos una foto de tu orden o los análisis que deseas y la dirección donde necesitas el servicio') .addAnswer('Enviá estos datos por aquí y tan rápido como sea posible un asesor te responderá')

                //Indicaciones y Ayuno desarrollado en "otras consultas"

                const flujopami = addKeyword('PAMI') .addAnswer('Los pacientes PAMI son muy importantes para nosotros, por eso aunque tu orden no diga "a domicilio", nosotros vamos igual y sin que tengas que *abonar nada*')
                    .addAnswer('Si estás en nuestro padrón podés disfrutar de este beneficio agendando una visita ahora mismo.').addAnswer('¿Cómo?', 'Es muy facil envianos una foto de tu orden desde el celular, dejanos la dirección a donde tenemos que ir y un telefono de contacto','Lo antes posible nos pondremos en contacto contigo')


     //Otras consultas           
    const flujoconsultas = addKeyword('Otras consultas 💡') .addAnswer('Elegí una de las siguientes opciones para que podamos ayudarte', {buttons : [
        {body:'Servicios a Empresas'}, 
        {body:'Mis resultados ✉️'},
        {body:'Más..'}]})

        const flujoempresas2 = addKeyword('Servicio a Empresas') 
        .addAnswer('Realizamos operativos de diagnóstico COVID, preocupacionales, controles periodicos, detección de drogas de abuso y alcholemia') .addAnswer('Por favor envienos a través su consulta', {buttons : [
                {body:'Servicios a Empresas COVID'}, 
                {body:'Preocupacionales'},
                {body:'Datos de contacto'}]})

                //servicio COVID en labo a domi

        const flujoresultados = addKeyword('Mis resultados ✉️').addAnswer('Puedes acceder a tus resultados desde', 'Necesitas el código que se encuentra en la parte inferior del "ticket de retiro".') .addAnswer ('www.misinformes.com.ar') 
            .addAnswer('En caso de dificultades para acceder o visualizarlos puedes solicitar asistencia personalizada',{buttons : {body:'Requiero asistencia'}},)

        const flujomas = addKeyword('Más..') .addAnswer('En "Cobertura Médica" encontraras el listado completo de las Obras Sociales y Prepagas con las cuales trabajamos').addAnswer('Elegí una opción',
            {buttons : [
            {body:'Requiero asistencia'},
            {body:'Sedes e Indicaciones'},
            {body:'Cobertura Médica'}]})
            

            const flujoasistencia = addKeyword('Requiero asistencia').addAnswer('*¡Estamos para ayudarte!*')
                .addAnswer('Te pedimos que uses el medio mas adecuado según el grado de urgencia de tu necesidad.', {buttons : [
                    {body:'WhatsApp'},   
                    {body:'Correo electrónico'},
                    {body:'Telefonicamente'},]})

                const flujohumano = addKeyword ('WhatsApp') .addAnswer('*No respondas este mensaje* y aguardá que un asistente se comunicará contigo.')
                    .addAnswer('🚨🚨🚨')

                const flujocorreo = addKeyword ('Correo electrónico')
                    .addAnswer('Envianos un email a *info@laboratoriospotorno.com*')

                const flujotel = addKeyword ('Telefonicamente').addAnswer('Nuestro horario de atención telefonica es de 9 a 19 hs.') 
                    .addAnswer(['Por incovenientes con los reslutados debes comunicarte con la sede en la que ha sido atendido',
                        'En caso de encontrarse fuera del horario de atención de la sede o tratarse de una visita a domicilio.'])
                    .addAnswer('comuniquese al *1126005711*')

            const flujointermedio = addKeyword('Sedes e Indicaciones').addAnswer('Elegí una opción',{buttons : [
                            {body:'Sedes y Horarios'},
                            {body:'Indicaciones y Ayuno'}]})
                const flujosedes = addKeyword('Sedes y Horarios', 'sedes y horarios') .addAnswer('Contamos con 4 sedes para estar siempre cerca')
                    .addAnswer(['*Lab Spotorno*', 'Fabian Onsari 884 - Wilde.', '*extraccíon* Lunes a Sábado de 8 a 11 hs *atención* Lunes a Viernes de 8 a 16hs y Sábados de 8 a 12 hs.'])
                    .addAnswer(['*Lab Liaudat*', 'Aguapey 3706 - Lanús.', '*extracción* Lunes a Viernes de 8 a 11 hs, *atención* Lunes a Vieres de 8 a 12 hs.'])
                    .addAnswer(['*Medicina Diagnóstica*', 'Alberti 631 - Once (CABA).', '*extracción* Lunes a Viernes de 8 a 11 hs, *atención* Lunes a Vieres de 8 a 16hs.'])
                    .addAnswer(['*Centro Médico Universal*', 'Av Lope de Vega 2287 - Devoto (CABA).', '*extracción* Lunes a Viernes de 8 a 11 hs.', '*atención* Lunes a Vieres de 8 a 16hs.'])

                const flujoayuno = addKeyword('Indicaciones y Ayuno').addAnswer('Puedes encontrar toda la inforamción en www.laboratoriospotorno.com/indicaciones')


                //Cobertura = OOSS y Prepagas

const main = async () => {
    const adapterDB = new MockAdapter()
    const adapterFlow = createFlow([flujoprincipal,flujoempresas2,flujopami, flujointermedio,flujooslab,flujoosmed, flujolaboratorio,flujomedico, flujcotizadomi, flujoturno, flujextraccion, flujoturnodomi, flujomas,flujoauto,flujofoto, flujoconsultas, flujohumano, flujocovid, flujodomicilios, flujosedes, flujoooss,flujoresultados,flujoayuno, flujoempresas,flujopcr,flujotr,flujocorreo,flujotengo,flujonotengo,flujotel, flujolab,flujocotizacion,flujoasistencia])
    const adapterProvider = createProvider(BaileysProvider)

    createBot({
        flow: adapterFlow,
        provider: adapterProvider,
        database: adapterDB,
    })

    QRPortalWeb()
}

main()
