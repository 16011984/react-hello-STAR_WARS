import { useEffect } from "react";

const Arrows = () => {

    useEffect(() => {
        let nextBtn = document.querySelector('.next');
        let prevBtn = document.querySelector('.prev');
        let carousel = document.querySelector('.carousel');
        let list = document.querySelector('.list');

        if (!nextBtn || !prevBtn || !carousel || !list) {
            console.error("Error: No se encontraron los elementos necesarios en el DOM.");
            return;
        }

        let timeRunning = 3000;
        let timeAutoNext = 7000;

        nextBtn.onclick = function () {
            showSlider('next');
        };

        prevBtn.onclick = function () {
            showSlider('prev');
        };

        let runTimeOut;
        let runNextAuto = setTimeout(() => {
            nextBtn.click();
        }, timeAutoNext);

        function showSlider(Type) {
            let sliderItemDom = list.querySelectorAll('.item');

            if (sliderItemDom.length === 0) return;

            if (Type === 'next') {
                list.appendChild(sliderItemDom[0]);
                carousel.classList.add('next');
            } else {
                list.prepend(sliderItemDom[sliderItemDom.length - 1]);
                carousel.classList.add('prev');
            }

            clearTimeout(runTimeOut);
            runTimeOut = setTimeout(() => {
                carousel.classList.remove('next', 'prev');
            }, timeRunning);

            clearTimeout(runNextAuto);
            runNextAuto = setTimeout(() => {
                nextBtn.click();
            }, timeAutoNext);
        }
    }, []); // Se ejecuta solo una vez al montar el componente

    return null; // No renderiza nada, solo ejecuta la lógica
};

export default Arrows;
