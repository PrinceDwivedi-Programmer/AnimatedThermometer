const thermo =()=>{


               const temperature =document.getElementById("temp")
               temperature.innerHTML ="&#xf2cb"
               temperature.style.color="white"
                
               setTimeout(()=>{

                temperature.innerHTML ="&#xf2ca"
                temperature.style.color="yellow"
               },1000)


               setTimeout(()=>{

                temperature.innerHTML ="&#xf2c9"
                temperature.style.color="green"
               },2000)


               setTimeout(()=>{

                temperature.innerHTML ="&#xf2c8"
                temperature.style.color="red"
               },3000)

               setTimeout(()=>{

                temperature.innerHTML ="&#xf2c7"
                temperature.style.color="red"
               },4000)
}

thermo()

setInterval(thermo,5000)