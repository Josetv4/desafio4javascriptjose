//Array: Propiedades en venta
const propiedades_venta = [
    {
        nombre: "Condominio moderno en zona residencial",
        src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/284649054.jpg?k=1de619d25f769cac36f3d4f658eaeeeb1f357dcc4f60c45227b65744f58bd76d&o=&hp=1",
        descripcion: "Excelente departamento a 1 cuadra de estación metro Toesca, sector tranquilo y residencial, cercano a parques, colegios y centros comerciales.",
        ubicacion: "124 Main Street, Puente Alto, Piso 1",
        habitaciones: 2,
        baño: 2,
        costo: 3500,
        smoke: false,
        pets: true,
    },
    {
        nombre: "Confortable apartamentos en zona colonial",
        src: "https://www.alcossebreseaexperience.com/wp-content/uploads/2020/03/Alcossebre-Sea-Experience-Aparthotel-4-Estrellas-Apartamento-1-dormitorio-DormitorioA-800x533.jpg",
        descripcion: "Se vende departamento con privilegiada ubicación, orientación nor-oriente, vista despejada hacia cordillera.",
        ubicacion: "125 Main Street, La Pintana, Piso 8",
        habitaciones: 2,
        baño: 3,
        costo: 2800,
        smoke: true,
        pets: true,
    },
    {
        nombre: "Amplio apartamento en zona comercial",
        src: "https://estaticos-cdn.prensaiberica.es/clip/3dc30e71-95fa-4287-894f-01db03dd9a7c_16-9-discover-aspect-ratio_default_0.jpg",
        descripcion: "Cómodo y luminoso departamento con cocina separada y amoblada, equipada con horno eléctrico, campana y encimera.",
        ubicacion: "126 Main Street, Las Condes, Piso 25",
        habitaciones: 2,
        baño: 4,
        costo: 4200,
        smoke: false,
        pets: false,
    },
    {
        nombre: "Lindo y acogedor apartamento en zona residencial",
        src: "https://cartagenaspain.com/wp-content/uploads/apartamentos-turisticos-3.jpg",
        descripcion: "Este elegante condominio moderno está ubicado en una tranquila zona residencial",
        ubicacion: "127 Main Street, Cerro Navia, Piso 1",
        habitaciones: 2,
        baño: 2,
        costo: 1200,
        smoke: true,
        pets: false,
    },
    {
        nombre: "Condominio moderno en zona residencial",
        src: "https://apartamentogudar.com/templates/yootheme/cache/Apartamentos-Sierra-Gudar-casa1_08-b6078931.jpeg",
        descripcion: "Este elegante condominio moderno está ubicado en una tranquila zona residencial",
        ubicacion: "128 Main Street, Tierra de Nadie, Piso 6",
        habitaciones: 2,
        baño: 3,
        costo: 2800,
        smoke: true,
        pets: true,
    },
    {
        nombre: "Apartamento amplio y moderno",
        src: "https://media-cdn.tripadvisor.com/media/photo-s/06/76/4b/31/apartamentos-amueblados.jpg",
        descripcion: "Este elegante condominio moderno está ubicado en una tranquila zona residencial",
        ubicacion: "129 Main Street, Tierra de Nadie, Piso 12",
        habitaciones: 2,
        baño: 1,
        costo: 2800,
        smoke: true,
        pets: false,
    }
];

const sectionSell = document.querySelector("#propertySale")
for (let propiedad_venta of propiedades_venta) {
const template = `
<section id="propertySale">
<div class="card">
    <div class="carImg">
    <img src="${propiedad_venta.src}" alt="">
    </div>
    <div class="cardDescription">
    <h3 class="title">${propiedad_venta.nombre}</h3>
    <p class="description">${propiedad_venta.descripcion}</p>
    </div>
    <div class="cardBody">
    <p><i class="fas fa-map-marker-alt"></i> ${propiedad_venta.ubicacion}</p>
    <p>
        <i class="fas fa-bed"></i> <strong>${propiedad_venta.habitaciones} Habitaciones</strong> |
        <i class="fas fa-bath"></i> <strong>${propiedad_venta.baño} Baños</strong>
    </p>
    <p>Precio <i class="fas fa-dollar-sign"></i>${propiedad_venta.costo}</p>
    </div>
    <div id="cardFooter">
    ${propiedad_venta.smoke
        ? '<p class="text-success"><i class="fas fa-smoking"></i> Permitido fumar</p>' 
        : '<p class="text-danger"><i class="fas fa-smoking-ban"></i> No se permite fumar</p>'
    }
    ${propiedad_venta.pets
        ? '<p class="text-success"><i class="fas fa-paw"></i> Mascotas permitidas</p>' 
        : '<p class="text-danger"><i class="fas fa-ban"></i> No se permiten mascotas</p>'
    }
    </div>
</div>
</section>
`;
sectionSell.innerHTML += template;
}
