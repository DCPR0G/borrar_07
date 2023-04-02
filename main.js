const topNavButtons = document.querySelectorAll(".top_nav_buttons");

topNavButtons.forEach(topNavButton => {
    topNavButton.addEventListener("focus",()=>{
        topNavButton.innerHTML = ``
   })
   topNavButton.addEventListener("blur",()=>{
    topNavButton.innerHTML = topNavButton.value
})
});

const plus = document.querySelector(".plus_fed_credits")

plus.addEventListener("click",()=>{
    // let soles = document.querySelector(".fed_credits")

    // soles.innerHTML = parseInt(soles.innerHTML) + 1

    setInterval(() => {
        let soles = document.querySelector(".fed_credits")
        soles.innerHTML = parseInt(soles.innerHTML) + 1
    }, 1);
    
})











const buttonOpenOne = document.querySelector(".button_open_one");
const buttonOpenFive = document.querySelector(".button_open_five");

const itemBoxes = document.querySelectorAll(".toy_counter_boxes")
const itemBox1 = document.querySelector(".toy_counter_box_1")
const itemBox2 = document.querySelector(".toy_counter_box_2")
const itemBox3 = document.querySelector(".toy_counter_box_3")
const itemBox4 = document.querySelector(".toy_counter_box_4")
const itemBox5 = document.querySelector(".toy_counter_box_5")

let claimable1 = undefined
let claimable2 = undefined
let claimable3 = undefined
let claimable4 = undefined
let claimable5 = undefined

let claimed1 = false
let claimed2 = false
let claimed3 = false
let claimed4 = false
let claimed5 = false

let voyClaimable1 = document.querySelector(".voy_claimable1");
let voyClaimable2 = document.querySelector(".voy_claimable2");
let voyClaimable3 = document.querySelector(".voy_claimable3");
let voyClaimable4 = document.querySelector(".voy_claimable4");
let voyClaimable5 = document.querySelector(".voy_claimable5");

let voyCheck1 = document.querySelector(".voy_check1");
let voyCheck2 = document.querySelector(".voy_check2");
let voyCheck3 = document.querySelector(".voy_check3");
let voyCheck4 = document.querySelector(".voy_check4");
let voyCheck5 = document.querySelector(".voy_check5");


const progressLine = document.querySelector(".progress_line");

let progressLineNumber = -41

buttonOpenOne.addEventListener("click",()=>{
    progressLineNumber = progressLineNumber + 1
    progressLine.style.height = `${progressLineNumber}px`

    console.log(progressLineNumber)

    verifyProgress()
})

buttonOpenFive.addEventListener("click",()=>{
    progressLineNumber = progressLineNumber + 5
    progressLine.style.height = `${progressLineNumber}px`

    console.log(progressLineNumber)

    verifyProgress()
})

const verifyProgress = () => {
    if(progressLineNumber >= -1 && progressLineNumber < 39){
        itemBox5.style.background = `#B99763`
        itemBox5.style.border = `1px solid #D6B387`

        if(claimed5 === false){
            claimable5 = true
            console.log("me estan tocando a mi?")
            verifyClaimable()
        }
    }

    else if(progressLineNumber >= 39 && progressLineNumber < 79){
       itemBox4.style.background = `#B99763`
       itemBox4.style.border = `1px solid #D6B387`

       if(claimed4 == false){
            claimable4 = true
            verifyClaimable()
        }
    }

    else if(progressLineNumber >= 79 && progressLineNumber < 118){
        itemBox3.style.background = `#B99763`
        itemBox3.style.border = `1px solid #D6B387`

        if(claimed3 == false){
            claimable3 = true
            verifyClaimable()
        }
    }

    else if(progressLineNumber > 118 && progressLineNumber < 159){
        itemBox2.style.background = `#B99763`
        itemBox2.style.border = `1px solid #D6B387`

        if(claimed2 == false){
            claimable2 = true
            verifyClaimable()
        }
    }

    else if(progressLineNumber > 158 && progressLineNumber < 170){
        itemBox1.style.background = `#B99763`
        itemBox1.style.border = `1px solid #D6B387`

        if(claimed1 == false){
            claimable1 = true
            verifyClaimable()
        }
    }
    else if(progressLineNumber > 170){
        progressLineNumber = 170
    }
}

const verifyClaimable = () => {
    if (claimable1 == true){
        voyClaimable1.style.display = 'block'
        itemBox1.style.cursor = `pointer`
    }
    else if (claimable2 == true){
        voyClaimable2.style.display = 'block'
        itemBox2.style.cursor = `pointer`
    }
    else if (claimable3 == true){
        voyClaimable3.style.display = 'block'
        itemBox3.style.cursor = `pointer`
    }
    else if (claimable4 == true){
        voyClaimable4.style.display = 'block'
        itemBox4.style.cursor = `pointer`
    }
    else if (claimable5 == true){
        voyClaimable5.style.display = 'block'
        itemBox5.style.cursor = `pointer`
    }
}












itemBoxes.forEach(itembox => {
    itembox.addEventListener("click",()=>{

        if(claimable1 == true){
            if(itembox.getAttribute("value") == 1){
                voyCheck1.style.display = `block`
                voyClaimable1.style.display = 'none'
                itemBox1.style.cursor = `auto`

                claimed1 = true
            }
        }
        if(claimable2 == true){
            if(itembox.getAttribute("value") == 2){
                voyCheck2.style.display = `block`
                voyClaimable2.style.display = 'none'
                itemBox2.style.cursor = `auto`

                claimed2 = true
            }
        }
        if(claimable3 == true){
            if(itembox.getAttribute("value") == 3){
                voyCheck3.style.display = `block`
                voyClaimable3.style.display = 'none'
                itemBox3.style.cursor = `auto`

                claimed3 = true
            }            
        }
        if(claimable4 == true){
            if(itembox.getAttribute("value") == 4){
                voyCheck4.style.display = `block`
                voyClaimable4.style.display = 'none'
                itemBox4.style.cursor = `auto`

                claimed4 = true
            }            
        }
        if(claimable5 == true){
            if(itembox.getAttribute("value") == 5){
                voyCheck5.style.display = `block`
                voyClaimable5.style.display = 'none'
                itemBox5.style.cursor = `auto`

                claimed5 = true
            }            
        }





    })
})



const voyClaimRewards = () => {
    if (true){
        voyCheck1.style.display = `block`
    }
}
