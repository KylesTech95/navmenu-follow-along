let listContainer2=document.querySelector('.list-container2')
let togBtn = document.getElementById('toggle-button')
let counter = 0;
togBtn.style = 'background:red;'
// pressing toggle button
toggleFn = () => {
    counter += 1;
    // counter++
// change toggle button color
let colors = ['green','red']
togBtn.style = `background-color: ${colors[counter%2==0?1:0]}`


let list = [...listContainer2.children]
console.log(list)
list.forEach((li,index) => {
    setTimeout(() => {
        li.classList.toggle('list-item-appear')
    }, 600 * (index+1))
})
}

//resize function to reset toggle menu back to default state

function resizeMe(){
    window.addEventListener('resize',e=>{
        let testWidth = e.target.innerWidth;
        // console.log(testWidth)
        if(testWidth > 800){
            counter = 0;
            togBtn.style='background:red;'
            let list = [...listContainer2.children]

            list.forEach((li,index) => {
                li.classList.remove('list-item-appear')
            }) 
        }
    })
}
resizeMe()