var allBtn = document.querySelectorAll('.btn')
    Array.from(allBtn).forEach((el)=>{
        el.addEventListener('click',(event)=>{
            var clickedBtn = event.target.innerText
            var textArea = document.getElementById('ans')
            var prevVal = textArea.value
            var newVal = prevVal+clickedBtn
           
            if(clickedBtn == "="){
                newVal = eval(prevVal)
            }
            if(clickedBtn == "C"){
                newVal = " "
            }

            textArea.value = newVal
            console.log(clickedBtn)
        })
    })