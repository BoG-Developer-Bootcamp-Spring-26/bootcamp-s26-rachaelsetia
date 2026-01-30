window.addEventListener('load', function(){
    var accordion = document.getElementsByClassName("accordion");

    for(let i = 0; i < accordion.length; i++){
        accordion[i].addEventListener("click", function(){
            this.classList.toggle("active");

            var panel = this.nextElementSibling;

            // accordion slide animation
            if(panel.style.maxHeight){
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    }
}); 