const collapsibles = document.querySelectorAll(".collapsible");
collapsibles.forEach((item) => {
    item.addEventListener("click", function () {
        this.classList.toggle("collapsible--expanded");
    })
});

const scriptURL = 'https://script.google.com/macros/s/AKfycbynzQmnZzPJ3J_v4ipwiAMfGnyhUj6Ky21IKlwyvHBYiyQDi4Qft7Iv4yljOifTx7rO4g/exec'
        const form = document.forms['submit-to-google-sheet']
        const msg = document.getElementById('msg')
      
        form.addEventListener('submit', e => {
          e.preventDefault()
          fetch(scriptURL, { method: 'POST', body: new FormData(form)})
            .then(response =>{
                msg.innerHTML = "Message Sent!"
                setTimeout(function(){ msg.innerHTML = "" }, 5000);
                form.reset()
            })
            .catch(error => {
                msg.innerHTML = "Message Failed to Send!"
            })
        })

        document.addEventListener("DOMContentLoaded", () => {
            const links = document.querySelectorAll('nav a[href^="#"]');
            
            links.forEach(link => {
                link.addEventListener("click", e => {
                    const targetId = link.getAttribute("href").slice(1);
                    const target = document.getElementById(targetId);
                    
                    if (target) {
                        e.preventDefault();
                        
                        window.scrollTo({
                            top: target.offsetTop,
                            behavior: "smooth"
                        });
                    }
                });
            });
        });