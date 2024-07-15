const bands = [
    'The Plot in You', 
    'The Devil Wears Prada', 
    'Pierce the Veil', 
    'Norma Jean', 
    'The Bled', 
    'Say Anything', 
    'The Midway State', 
    'We Came as Romans', 
    'Counterparts', 
    'Oh, Sleeper', 
    'A Skylit Drive', 
    'Anywhere But Here', 
    'An Old Dog'
];

// Function to strip "a", "an", "the" from the beginning of the string
function strip(bandName) {
    return bandName.replace(/^(a |an |the )/i, '').trim();
}

// Sort the bands array ignoring "a", "an", "the"
const sortedBands = bands.sort((a, b) => strip(a).localeCompare(strip(b)));

// Get the UL element
const bandList = document.getElementById('bands');

// Create LI elements and append them to the UL
sortedBands.forEach(band => {
    const li = document.createElement('li');
    li.textContent = band;
    bandList.appendChild(li);
});