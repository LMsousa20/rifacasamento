    const grid = document.getElementById('rifaGrid');
    const modal = document.getElementById('modal');
    const selectedNumberSpan = document.getElementById('selectedNumber');
    let selectedNumber = null;
    let statusMapa = {}; // Mapeia os status dos números
    
    function renderGrid() {
      grid.innerHTML = '';
      for (let i = 1; i <= 300; i++) {
        const btn = document.createElement('button');
        btn.textContent = i;

        if (statusMapa[i]) {
          if (statusMapa[i].pago === true) {
            btn.classList.add('pago');
            btn.disabled = true;
          } else {
            btn.classList.add('reservado');
          }
        }

        btn.onclick = () => {
          selectedNumber = i;
          selectedNumberSpan.textContent = `#${i}`;
          modal.style.display = 'flex';
        };
        grid.appendChild(btn);
      }
    }

    function carregarStatus() {
       

      fetch('https://67f50ca6913986b16fa2fed9.mockapi.io/Pontos')
        .then(res => res.json())
        .then(data => {
            console.log(data)
          data.forEach(item => {
            statusMapa[parseInt(item.numero)] = item;
          });
          renderGrid();
        });
    }

    function sendData() {
      const name = document.getElementById('name').value;
      const phone = document.getElementById('phone').value;

      fetch('https://67f50ca6913986b16fa2fed9.mockapi.io/Pontos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          numero: selectedNumber,
          nome: name,
          telefone: phone
        })
      })
      .then(response => response.json())
      .then(data => {
        alert('Reserva realizada com sucesso!');
        modal.style.display = 'none';
        carregarStatus();
      })
      .catch(error => {
        console.error('Erro ao enviar:', error);
        alert('Erro ao enviar os dados.');
      });
    }

    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }

    carregarStatus();