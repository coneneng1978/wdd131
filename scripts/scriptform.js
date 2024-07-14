const products = [
    {
        id: 'fc-1888',
        name: "Flux Capacitor",
        avgRating: 4.5
    },
    {
        id: 'fc-2050',
        name: "Power Laces",
        avgRating: 4.7
    },
    {
        id: 'fs-1987',
        name: "Time Circuits",
        avgRating: 3.5
    },
    {
        id: 'ac-2000',
        name: "Low Voltage Reactor",
        avgRating: 3.9
    },
    {
        id: 'jj-1969',
        name: "Warp Equalizer",
        avgRating: 5.0
    }
];

// Populate Product Name options
const productNameSelect = document.getElementById('productName');
products.forEach(product => {
    const option = document.createElement('option');
    option.textContent = product.name;
    option.value = product.id;
    productNameSelect.appendChild(option);
});