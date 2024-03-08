document.addEventListener('DOMContentLoaded', () => {

  window.addEventListener('load', () => {
    const pantallaCarga =  document.querySelector('.carga');
    pantallaCarga.classList.add('d-none');
  });

  const url = new String(window.location);
  const urlSeccionada = url.split('/');
  const ultimaSeccion = urlSeccionada.length;
  const activo = urlSeccionada[ultimaSeccion - 1];

  if (activo === 'elem1.html') {

    const contenedor1 = document.getElementById('img1');
    const contenedor2 = document.getElementById('img2');

    contenedor1.style.backgroundImage = "url('../img/fotos/1.jpg')";
    contenedor1.style.backgroundSize = 'cover';
    contenedor1.style.backgroundRepeat = 'no-repeat';
    contenedor1.style.backgroundPosition = 'center';
    contenedor1.setAttribute('href', '../img/fotos/1.jpg');
    contenedor1.setAttribute('target', '_blank');

    contenedor2.style.backgroundImage = "url('../img/fotos/2.jpg')";
    contenedor2.style.backgroundSize = 'cover';
    contenedor2.style.backgroundRepeat = 'no-repeat';
    contenedor2.style.backgroundPosition = 'center';
    contenedor2.setAttribute('href', '../img/2.jpg');
    contenedor2.setAttribute('target', '_blank');

  } else if (activo === 'elem2.html') {

    const contenedor1 = document.getElementById('img1');
    const contenedor2 = document.getElementById('img2');

    contenedor1.style.backgroundImage = "url('../img/fotos/3.jpg')";
    contenedor1.style.backgroundSize = 'cover';
    contenedor1.style.backgroundRepeat = 'no-repeat';
    contenedor1.style.backgroundPosition = 'center';
    contenedor1.setAttribute('href', '../img/fotos/3.jpg');
    contenedor1.setAttribute('target', '_blank');

    contenedor2.style.backgroundImage = "url('../img/fotos/4.jpg')";
    contenedor2.style.backgroundSize = 'cover';
    contenedor2.style.backgroundRepeat = 'no-repeat';
    contenedor2.style.backgroundPosition = 'center';
    contenedor2.setAttribute('href', '../img/fotos/4.jpg');
    contenedor2.setAttribute('target', '_blank');
    
  } else if (activo === 'elem3.html') {

    const contenedor1 = document.getElementById('img1');
    const contenedor2 = document.getElementById('img2');

    contenedor1.style.backgroundImage = "url('../img/fotos/5.jpg')";
    contenedor1.style.backgroundSize = 'cover';
    contenedor1.style.backgroundRepeat = 'no-repeat';
    contenedor1.style.backgroundPosition = 'center';
    contenedor1.setAttribute('href', '../img/fotos/5.jpg');
    contenedor1.setAttribute('target', '_blank');

    contenedor2.style.backgroundImage = "url('../img/fotos/6.jpg')";
    contenedor2.style.backgroundSize = 'cover';
    contenedor2.style.backgroundRepeat = 'no-repeat';
    contenedor2.style.backgroundPosition = 'center';
    contenedor2.setAttribute('href', '../img/fotos/6.jpg');
    contenedor2.setAttribute('target', '_blank');
    
  } else if (activo === 'elem4.html') {

    const contenedor1 = document.getElementById('img1');
    const contenedor2 = document.getElementById('img2');

    contenedor1.style.backgroundImage = "url('../img/costura.png')";
    contenedor1.style.backgroundSize = 'cover';
    contenedor1.style.backgroundRepeat = 'no-repeat';
    contenedor1.style.backgroundPosition = 'center';
    contenedor1.setAttribute('href', '../img/costura.png');
    contenedor1.setAttribute('target', '_blank');

    contenedor2.style.backgroundImage = "url('../img/costura.png')";
    contenedor2.style.backgroundSize = 'cover';
    contenedor2.style.backgroundRepeat = 'no-repeat';
    contenedor2.style.backgroundPosition = 'center';
    contenedor2.setAttribute('href', '../img/costura.png');
    contenedor2.setAttribute('target', '_blank');
    
  } else if (activo === 'elem5.html') {

    const contenedor1 = document.getElementById('img1');
    const contenedor2 = document.getElementById('img2');

    contenedor1.style.backgroundImage = "url('../img/fotos/9.jpg')";
    contenedor1.style.backgroundSize = 'cover';
    contenedor1.style.backgroundRepeat = 'no-repeat';
    contenedor1.style.backgroundPosition = 'center';
    contenedor1.setAttribute('href', '../img/fotos/9.jpg');
    contenedor1.setAttribute('target', '_blank');

    contenedor2.style.backgroundImage = "url('../img/fotos/10.jpg')";
    contenedor2.style.backgroundSize = 'cover';
    contenedor2.style.backgroundRepeat = 'no-repeat';
    contenedor2.style.backgroundPosition = 'center';
    contenedor2.setAttribute('href', '../img/fotos/10.jpg');
    contenedor2.setAttribute('target', '_blank');
    
  } else if (activo === 'elem6.html') {

    const contenedor1 = document.getElementById('img1');
    const contenedor2 = document.getElementById('img2');

    contenedor1.style.backgroundImage = "url('../img/tejido.png')";
    contenedor1.style.backgroundSize = 'cover';
    contenedor1.style.backgroundRepeat = 'no-repeat';
    contenedor1.style.backgroundPosition = 'center';
    contenedor1.setAttribute('href', '../img/tejido.png');
    contenedor1.setAttribute('target', '_blank');

    contenedor2.style.backgroundImage = "url('../img/tejido.png')";
    contenedor2.style.backgroundSize = 'cover';
    contenedor2.style.backgroundRepeat = 'no-repeat';
    contenedor2.style.backgroundPosition = 'center';
    contenedor2.setAttribute('href', '../img/tejido.png');
    contenedor2.setAttribute('target', '_blank');
    
  } else if (activo === 'elem7.html') {

    const contenedor1 = document.getElementById('img1');
    const contenedor2 = document.getElementById('img2');

    contenedor1.style.backgroundImage = "url('../img/fotos/13.jpg')";
    contenedor1.style.backgroundSize = 'cover';
    contenedor1.style.backgroundRepeat = 'no-repeat';
    contenedor1.style.backgroundPosition = 'center';
    contenedor1.setAttribute('href', '../img/fotos/13.jpg');
    contenedor1.setAttribute('target', '_blank');

    contenedor2.style.backgroundImage = "url('../img/fotos/14.jpg')";
    contenedor2.style.backgroundSize = 'cover';
    contenedor2.style.backgroundRepeat = 'no-repeat';
    contenedor2.style.backgroundPosition = 'center';
    contenedor2.setAttribute('href', '../img/fotos/14.jpg');
    contenedor2.setAttribute('target', '_blank');
    
  } else if (activo === 'elem8.html') {

    const contenedor1 = document.getElementById('img1');
    const contenedor2 = document.getElementById('img2');

    contenedor1.style.backgroundImage = "url('../img/fotos/15.jpg')";
    contenedor1.style.backgroundSize = 'cover';
    contenedor1.style.backgroundRepeat = 'no-repeat';
    contenedor1.style.backgroundPosition = 'center';
    contenedor1.setAttribute('href', '../img/fotos/15.jpg');
    contenedor1.setAttribute('target', '_blank');

    contenedor2.style.backgroundImage = "url('../img/fotos/16.jpg')";
    contenedor2.style.backgroundSize = 'cover';
    contenedor2.style.backgroundRepeat = 'no-repeat';
    contenedor2.style.backgroundPosition = 'center';
    contenedor2.setAttribute('href', '../img/fotos/16.jpg');
    contenedor2.setAttribute('target', '_blank');
    
  } else if (activo === 'elem9.html') {

    const contenedor1 = document.getElementById('img1');
    const contenedor2 = document.getElementById('img2');

    contenedor1.style.backgroundImage = "url('../img/fotos/17.jpg')";
    contenedor1.style.backgroundSize = 'cover';
    contenedor1.style.backgroundRepeat = 'no-repeat';
    contenedor1.style.backgroundPosition = 'center';
    contenedor1.setAttribute('href', '../img/fotos/17.jpg');
    contenedor1.setAttribute('target', '_blank');

    contenedor2.style.backgroundImage = "url('../img/fotos/18.jpg')";
    contenedor2.style.backgroundSize = 'cover';
    contenedor2.style.backgroundRepeat = 'no-repeat';
    contenedor2.style.backgroundPosition = 'center';
    contenedor2.setAttribute('href', '../img/fotos/18.jpg');
    contenedor2.setAttribute('target', '_blank');
    
  } else if (activo === 'elem10.html') {

    const contenedor1 = document.getElementById('img1');
    const contenedor2 = document.getElementById('img2');

    contenedor1.style.backgroundImage = "url('../img/fotos/19.jpg')";
    contenedor1.style.backgroundSize = 'cover';
    contenedor1.style.backgroundRepeat = 'no-repeat';
    contenedor1.style.backgroundPosition = 'center';
    contenedor1.setAttribute('href', '../img/fotos/19.jpg');
    contenedor1.setAttribute('target', '_blank');

    contenedor2.style.backgroundImage = "url('../img/fotos/20.jpg')";
    contenedor2.style.backgroundSize = 'cover';
    contenedor2.style.backgroundRepeat = 'no-repeat';
    contenedor2.style.backgroundPosition = 'center';
    contenedor2.setAttribute('href', '../img/fotos/20.jpg');
    contenedor2.setAttribute('target', '_blank');
    
  } else if (activo === 'elem11.html') {

    const contenedor1 = document.getElementById('img1');
    const contenedor2 = document.getElementById('img2');

    contenedor1.style.backgroundImage = "url('../img/fotos/21.jpg')";
    contenedor1.style.backgroundSize = 'cover';
    contenedor1.style.backgroundRepeat = 'no-repeat';
    contenedor1.style.backgroundPosition = 'center';
    contenedor1.setAttribute('href', '../img/fotos/21.jpg');
    contenedor1.setAttribute('target', '_blank');

    contenedor2.style.backgroundImage = "url('../img/fotos/22.jpg')";
    contenedor2.style.backgroundSize = 'cover';
    contenedor2.style.backgroundRepeat = 'no-repeat';
    contenedor2.style.backgroundPosition = 'center';
    contenedor2.setAttribute('href', '../img/fotos/22.jpg');
    contenedor2.setAttribute('target', '_blank');
    
  } else if (activo === 'elem12.html') {

    const contenedor1 = document.getElementById('img1');
    const contenedor2 = document.getElementById('img2');

    contenedor1.style.backgroundImage = "url('../img/fotos/23.jpg')";
    contenedor1.style.backgroundSize = 'cover';
    contenedor1.style.backgroundRepeat = 'no-repeat';
    contenedor1.style.backgroundPosition = 'center';
    contenedor1.setAttribute('href', '../img/fotos/23.jpg');
    contenedor1.setAttribute('target', '_blank');

    contenedor2.style.backgroundImage = "url('../img/fotos/24.jpg')";
    contenedor2.style.backgroundSize = 'cover';
    contenedor2.style.backgroundRepeat = 'no-repeat';
    contenedor2.style.backgroundPosition = 'center';
    contenedor2.setAttribute('href', '../img/fotos/24.jpg');
    contenedor2.setAttribute('target', '_blank');
    
  } else if (activo === 'elem13.html') {

    const contenedor1 = document.getElementById('img1');
    const contenedor2 = document.getElementById('img2');

    contenedor1.style.backgroundImage = "url('../img/bordadora.png')";
    contenedor1.style.backgroundSize = 'cover';
    contenedor1.style.backgroundRepeat = 'no-repeat';
    contenedor1.style.backgroundPosition = 'center';
    contenedor1.setAttribute('href', '../img/bordadora.png');
    contenedor1.setAttribute('target', '_blank');

    contenedor2.style.backgroundImage = "url('../img/bordadora.png')";
    contenedor2.style.backgroundSize = 'cover';
    contenedor2.style.backgroundRepeat = 'no-repeat';
    contenedor2.style.backgroundPosition = 'center';
    contenedor2.setAttribute('href', '../img/bordadora.png');
    contenedor2.setAttribute('target', '_blank');
    
  } else if (activo === 'elem14.html') {

    const contenedor1 = document.getElementById('img1');
    const contenedor2 = document.getElementById('img2');

    contenedor1.style.backgroundImage = "url('../img/fotos/27.jpg')";
    contenedor1.style.backgroundSize = 'cover';
    contenedor1.style.backgroundRepeat = 'no-repeat';
    contenedor1.style.backgroundPosition = 'center';
    contenedor1.setAttribute('href', '../img/fotos/27.jpg');
    contenedor1.setAttribute('target', '_blank');

    contenedor2.style.backgroundImage = "url('../img/fotos/28.jpg')";
    contenedor2.style.backgroundSize = 'cover';
    contenedor2.style.backgroundRepeat = 'no-repeat';
    contenedor2.style.backgroundPosition = 'center';
    contenedor2.setAttribute('href', '../img/fotos/28.jpg');
    contenedor2.setAttribute('target', '_blank');
    
  }

  if (activo === 'index.html' || activo === '') {
    const imagen = document.getElementById('imagenPpal');
    const elem1 = document.querySelector('#elementos #elem1');
    const elem2 = document.querySelector('#elementos #elem2');
    const elem3 = document.querySelector('#elementos #elem3');
    const elem4 = document.querySelector('#elementos #elem4');
    const elem5 = document.querySelector('#elementos #elem5');
    const elem6 = document.querySelector('#elementos #elem6');
    const elem7 = document.querySelector('#elementos #elem7');
    const elem8 = document.querySelector('#elementos #elem8');
    const elem9 = document.querySelector('#elementos #elem9');
    const elem10 = document.querySelector('#elementos #elem10');
    const elem11 = document.querySelector('#elementos #elem11');
    const elem12 = document.querySelector('#elementos #elem12');
    const elem13 = document.querySelector('#elementos #elem13');
    const elem14 = document.querySelector('#elementos #elem14');
    
    imagen.addEventListener('click', () => {
      if (!elem1.classList.contains('desplazar1')) {
        elem1.classList.add('desplazar1');      
      }
  
      if (!elem2.classList.contains('desplazar2')) {
        elem2.classList.add('desplazar2');      
      }
  
      if (!elem3.classList.contains('desplazar3')) {
        elem3.classList.add('desplazar3');      
      }
  
      if (!elem4.classList.contains('desplazar4')) {
        elem4.classList.add('desplazar4');      
      }
  
      if (!elem5.classList.contains('desplazar5')) {
        elem5.classList.add('desplazar5');      
      }
  
      if (!elem6.classList.contains('desplazar6')) {
        elem6.classList.add('desplazar6');      
      }
  
      if (!elem7.classList.contains('desplazar7')) {
        elem7.classList.add('desplazar7');      
      }
      
      if (!elem8.classList.contains('desplazar8')) {
        elem8.classList.add('desplazar8');      
      }
      
      if (!elem9.classList.contains('desplazar9')) {
        elem9.classList.add('desplazar9');
      }
      
      if (!elem10.classList.contains('desplazar10')) {
        elem10.classList.add('desplazar10');
      }
  
      if (!elem11.classList.contains('desplazar11')) {
        elem11.classList.add('desplazar11');
      }
  
      if (!elem12.classList.contains('desplazar12')) {
        elem12.classList.add('desplazar12');
      }
  
      if (!elem13.classList.contains('desplazar13')) {
        elem13.classList.add('desplazar13');
      }
  
      if (!elem14.classList.contains('desplazar14')) {
        elem14.classList.add('desplazar14');
      }
    });    
  }

});