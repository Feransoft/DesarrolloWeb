const service = (() => {

    const constructor = () => {

    }

    const hiddenHTML = (object1, object2) => {
        object1.setAttribute('style', 'display : none;');
        object2.setAttribute('style', 'display : none;');
    };

    const visibleHTML = (object1, object2, object3, object4) => {
        object1.setAttribute('style', 'display : visible;');
        object2.setAttribute('style', 'display : visible;');
        object3.disabled = true;
        object4.disabled = true;
    };

    return {
        constructor,
        hiddenHTML,
        visibleHTML
    }

})();