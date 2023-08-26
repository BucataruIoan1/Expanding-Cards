const panels = document.querySelectorAll('.panel');
const h3Elements = document.querySelectorAll('h3');

panels.forEach(panel => {

    const h3Element = panel.querySelector('h3');
    if(!panel.classList.contains('active')) {
        h3Element.style.display = 'none';
    } else {
        h3Element.style.display = 'block';
    }

    panel.addEventListener('click', () => {
        h3Elements.forEach(h3Element => {
            h3Element.style.display = 'none';
        })

        panels.forEach(panel => {
            panel.classList.remove('active');
        })

        h3Element.style.display = 'block';
        panel.classList.add('active');

    })
})