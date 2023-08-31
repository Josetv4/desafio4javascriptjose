// Array propiedades en Alquiler

const propiedades_alquiler = [
    {
        nombre: "Condominio moderno en zona residencial",
        src: "https://cloudfront-us-east-1.images.arcpublishing.com/semana/RFMYKD3VLNBHPPM4R2EV3DRNNM.jpg",
        descripcion: "Este elegante condominio moderno está ubicado en una tranquila zona residencial",
        ubicacion: "santa Elena 1489, Macul, Piso 3",
        habitaciones: 5,
        baño: 2,
        costo: 3510,
        smoke: false,
        pets: true,
    },
    {
        nombre: "Lujoso apartamento en zona residencial",
        src: "https://d2p0bx8wfdkjkb.cloudfront.net/static/properties/TBCZYOYRXE/9NT7O9W6NP/rSL5z2ZxUJ/VILLA_MARIA.jpeg",
        descripcion: "Amplio departamento en pleno Barrio Yungay, haciendo que su ubicación sea muy atractivo.",
        ubicacion: "131 Main Street, Estacion Central, Piso 22",
        habitaciones: 3,
        baño: 3,
        costo: 2815,
        smoke: true,
        pets: true,
    },
    {
        nombre: "Amplio y confortable apartamento en zona comercial",
        src: "https://estaticos-cdn.prensaiberica.es/clip/3dc30e71-95fa-4287-894f-01db03dd9a7c_16-9-discover-aspect-ratio_default_0.jpg",
        descripcion: "Exquisito departamento con vista privilegiada de la ciudad. Principal en suite con walking clóset.",
        ubicacion: "Caracas 1547, Chacao, CA 91234",
        habitaciones: 6,
        baño: 3,
        costo: 4200,
        smoke: false,
        pets: false,
    },
    {
        nombre: "Condominio seguro, practico y confiable",
        src: "https://cdn.rentalmar.com/_fotos-apartamentos/2021/apartamentos-salouplaya-portada.jpg",
        descripcion: "Muy cercando al metro condominio tranquilo",
        ubicacion: "Barranquilla 2049, Siape, Cr 14",
        habitaciones: 4,
        baño: 2,
        costo: 3200,
        smoke: true,
        pets: false,
    },
    {
        nombre: "Condominio moderno en zona residencial",
        src: "https://i.ytimg.com/vi/IAdg_Ua8AMI/maxresdefault.jpg",
        descripcion: "Este elegante condominio moderno está ubicado en una tranquila zona residencial",
        ubicacion: "Guarenas-Guatire, La Raiza, CA 234",
        habitaciones: 3,
        baño: 3,
        costo: 2870,
        smoke: true,
        pets: true,
    },
    {
        nombre: "Condominio moderno en zona residencial",
        src: "https://media-cdn.tripadvisor.com/media/vr-splice-j/03/5a/a1/83.jpg",
        descripcion: "Este elegante condominio moderno está ubicado en una tranquila zona residencial",
        ubicacion: "Florida, Anytown, CA 91234",
        habitaciones: 5,
        baño: 4,
        costo: 2700,
        smoke: true,
        pets: false,
    }
];

const sectionSell1 = document.querySelector("#propertySale1")
for (let propiedad_alquiler of propiedades_alquiler) {
const template = `
<section id="propertySale1">
<div class="card">
    <div class="carImg">
    <img src="${propiedad_alquiler.src}" alt="">
    </div>
    <div class="cardDescription">
    <h3  class="title1">${propiedad_alquiler.nombre}</h3>
    <p class="description">${propiedad_alquiler.descripcion}</p>
    </div>
    <div class="cardBody">
    <p><i class="fas fa-map-marker-alt"></i> ${propiedad_alquiler.ubicacion}</p>
    <p>
        <i class="fas fa-bed"></i> <strong>${propiedad_alquiler.habitaciones} Habitaciones</strong> |
        <i class="fas fa-bath"></i> <strong>${propiedad_alquiler.baño} Baños</strong>
    </p>
    <p>Precio <i class="fas fa-dollar-sign"></i>${propiedad_alquiler.costo}</p>
    </div>
    <div id="cardFooter">
    ${propiedad_alquiler.smoke
        ? '<p class="text-success"><i class="fas fa-smoking"></i> Permitido fumar</p>' 
        : '<p class="text-danger"><i class="fas fa-smoking-ban"></i> No se permite fumar</p>'
    }
    ${propiedad_alquiler.pets
        ? '<p class="text-success"><i class="fas fa-paw"></i> Mascotas permitidas</p>' 
        : '<p class="text-danger"><i class="fas fa-ban"></i> No se permiten mascotas</p>'
    }
    </div>
</div>
</section>
`;
sectionSell1.innerHTML += template;
}
