// document.addEventListener('DOMContentLoaded', function () {
//     const scene = document.querySelector('a-scene');
//     const loadingSpinner = document.querySelector('.loading-spinner');

//      const locations = [
        
//          '5.jpg',
        
//      ];

//     let loadedCount = 0;

//     locations.forEach((imageURL, index) => {
//         const panorama = document.createElement('a-sky');
//         panorama.setAttribute('src', imageURL);
//         panorama.setAttribute('id', `location${index + 1}`);
//         panorama.addEventListener('materialtextureloaded', () => {
//             loadedCount++;
//             if (loadedCount === locations.length) {
//                 loadingSpinner.style.display = 'none';
//             }
//         });
//         scene.appendChild(panorama);
//     });
// });