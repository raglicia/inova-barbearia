const links = document.querySelectorAll('a[href^="#"]');

links.forEach(link =>{
    link.addEventListener('click', function(e)  {
        e.preventDefault();
        const destino = document.querySelector(this.getAttribute("href"));
        destino.scrollIntoView({ behavior: "smooth" });
    });
});

function chamarWhatsApp(){
    const numero = 5589981218799;
    const mensagem = "Olá! Gostaria de agendar um horário ";
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, '_blank');
}