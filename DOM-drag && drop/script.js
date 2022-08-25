//2 task 
(function dragDrop() {
    let coordX
    let coordY

    const dragEl = document.querySelector('.drag_el')
    const dropZone = document.querySelector('.drap-zone')
    dragEl.draggable = true

    dragEl.addEventListener('dragstart', e => {
        e.dataTransfer.setData('text/html', 'dragstart')
        coordX = e.offsetX
        coordY = e.offsetY
    })

    dropZone.addEventListener('dragover', e => {
        e.preventDefault()
    })

    dropZone.addEventListener('drop', e => {
        dragEl.style.position = "absolute"
        dragEl.style.top = (e.pageY - coordY) + "px"
        dragEl.style.left = (e.pageX - coordX) + "px"
    })

})()

//1 task
const box1 = document.querySelector(".box_1")
const box2 = document.querySelector(".box_2")


function moveDiv(box1, box2) {
    box1.addEventListener("touchmove", e => {
        e.target.style.cssText += `
      transform: translateX(${e.touches[0].clientX}px) translateY(${e.touches[0].clientY}px);
    `;
        box2.addEventListener("touchmove", e => {
            e.target.style.cssText += `
        transform: translateX(${e.touches[0].clientX}px) translateY(${e.touches[0].clientY}px);
    `;
        })
        if (box1.clientX === box2.clientX || box1.clientY === box2.clientY) {
            box1.style.backgroundColor = "rgba(72, 83, 236, 0.9)"
            box2.style.backgroundColor = "rgba(209, 90, 239, 0.9)"

        }
    })
}
moveDiv(box1, box2)