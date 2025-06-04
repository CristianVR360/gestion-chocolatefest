const cafeterias = [
    { nombre: "Cafe encuentro Temuco", numero: "56962453209" },
    { nombre: "Cafeteria del turista", numero: "56988432898" },
    { nombre: "CAfeteria Central", numero: "452210083" },
    { nombre: "Club CAfe", numero: "56958760763" },
    { nombre: "Casis Temuco", numero: "56991476525" },
    { nombre: "Mimis Market", numero: "56920760241" },
    { nombre: "Zanaholiva", numero: "56976225143" },
    { nombre: "Rolicoff", numero: "56983535898" },
    { nombre: "Pasteleria Caramelia", numero: "56936953632" },
    { nombre: "Cafeteria Clementina", numero: "56944785881" },
    { nombre: "Infusion hope", numero: "56971774631" },
    { nombre: "Gracias Cafeteria y pasteleria", numero: "56930778233" },
    { nombre: "Cafe Andino", numero: "56993516354" },
    { nombre: "Pasteleria Kiki", numero: "56950787994" },
    { nombre: "Tasty lab", numero: "56990851695" },
    { nombre: "Cafe Premium", numero: "56975413595" },
    { nombre: "Golden Churros", numero: "56997291794" },
    { nombre: "Crazy wafles", numero: "56973808780" }
];

const lista = document.getElementById('cafeteria-list');
const modal = document.getElementById('modal-confirm');
const modalTitle = document.getElementById('modal-title');
const modalMessage = document.getElementById('modal-message');
const btnLlamar = document.getElementById('btn-llamar');
const btnWhatsapp = document.getElementById('btn-whatsapp');
const modalClose = document.getElementById('modal-close');

let currentCafe = null;

const mensajeWhatsapp = encodeURIComponent(
    `Hola, mi nombre es Joana Obreque, presidenta de la Asociación Araucanía Gourmet. Me gustaría hacerle llegar una invitación formal (ticket de cortesía) y una propuesta para el Chocolate Fest que se realizará en el Museo Nacional Ferroviario Pablo Neruda los días 25, 26 y 27 de julio. Quedo atenta a su respuesta para enviarle más detalles. Además, la invito a visitar nuestro sitio web oficial: www.chocolatefestaraucania.cl y la página de la Asociación en Instagram: www.instagram.com/aaraucaniagourmet. ¡Muchas gracias!`
);

cafeterias.forEach(cafe => {
    const btn = document.createElement('button');
    btn.className = 'taplink-btn';
    btn.textContent = cafe.nombre;
    btn.onclick = () => {
        currentCafe = cafe;
        modalTitle.textContent = cafe.nombre;
        modalMessage.textContent = "¿Cómo deseas contactar?";
        modal.style.display = "flex";
    };
    lista.appendChild(btn);
});

btnLlamar.onclick = () => {
    if (currentCafe) window.open(`tel:${currentCafe.numero}`, '_blank');
    modal.style.display = "none";
};
btnWhatsapp.onclick = () => {
    if (currentCafe) window.open(`https://wa.me/${currentCafe.numero}?text=${mensajeWhatsapp}`, '_blank');
    modal.style.display = "none";
};
modalClose.onclick = () => {
    modal.style.display = "none";
};
window.onclick = (e) => {
    if (e.target === modal) modal.style.display = "none";
};