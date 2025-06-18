const buttonSelectors = [
    '.button', 
    '.cta-button', 
    '.primary-button', 
    '.submit-button', 
  ];
  
  buttonSelectors.forEach(selector => {
    const button = document.querySelector(selector);
    if (button) {
      button.addEventListener('click', () => {
        window.location.href = "https://rutube.ru/video/1891e6f7db73f1e1d54cadea2de2b361/";
      });
    }
  }); 

window.addEventListener('DOMContentLoaded', () => {



const modal = document.getElementById('modal');
    const closeModal = document.getElementById('closeModal'); 
    const finishModal = document.getElementById('frame-8');

    const classes = [
      'button-order', 'button-6', 'button-d', 'button-15',
      'cart-1c', 'order-button-22', 'order-button-2a',
      'button-31', 'button-39'
    ];


    classes.forEach(cls => {
      const elems = document.querySelectorAll(`.${cls}`);
      elems.forEach(el => {
        el.addEventListener('click', () => {
          modal.style.display = 'flex'; 
          document.body.style.overflow = 'hidden'; 
        });
      });
    });

  
    closeModal.addEventListener('click', () => {
      modal.style.display = 'none'; 
      document.body.style.overflow = ''; 
    }); 

    finishModal.addEventListener('click', () =>{
      modal.style.display = 'none'; 
      document.body.style.overflow = '';
    });

    window.addEventListener('click', e => {
      if (e.target === modal) {
        modal.style.display = 'none'; 
        document.body.style.overflow = ''; 
      }
    }); 
    });  


  const inputs = document.querySelectorAll('.frame-3, .frame-4, .frame-6, .frame-7');
  const button = document.querySelector('.frame-8');

  function checkFormFilled() {
    const allFilled = Array.from(inputs).every(input => input.value.trim() !== '');

    if (allFilled) {
      button.classList.add('active');
    } else {
      button.classList.remove('active');
    }
  }

  inputs.forEach(input => {
    input.addEventListener('input', checkFormFilled);
  });


  button.addEventListener('click', () => {
    if (!button.classList.contains('active')) return;

    alert('Поставьте 5 плез');
  });

 

