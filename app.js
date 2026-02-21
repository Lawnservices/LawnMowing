let colores = document.getElementById('titulo');
let tiempo = new Date().getHours();
if(tiempo < 12){
    colores.style.backgroundColor = 'green';
    
} else if(tiempo < 18){
    colores.style.backgroundColor = 'bluee';
} else{
    colores.style.backgroundColor = '#061125';
}

let home = document.getElementById('main');

if(tiempo < 12){
    home.style.backgroundImage = "url('https://mlaguna.pythonanywhere.com/static/uploads/589997df-dc5a-484b-bbcc-bdee87f5cdae.jpg')";
} else if(tiempo < 18){
    home.style.backgroundImage = "url('https://mlaguna.pythonanywhere.com/static/uploads/412f23ae-8b46-4624-91ff-633123992290.jpg')";

} else{
    home.style.backgroundImage = "url('https://mlaguna.pythonanywhere.com/static/uploads/36e903cf-1dcf-405d-a98b-8a85cd2532e9.jpg')";

}