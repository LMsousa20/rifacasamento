    const grid = document.getElementById('rifaGrid');
    const modal = document.getElementById('modal');
    const selectedNumberSpan = document.getElementById('selectedNumber');
    let selectedNumber = null;
    let statusMapa = []; // Mapeia os status dos números
    let pagos = [
      {
        "createdAt": 1744150558,
        "numero": 1,
        "nome": "Carol",
        "pago": true,
        "telefone": "859",
        "id": "1"
      },
      {
        "createdAt": 1744150507,
        "numero": 5,
        "nome": "Carol",
        "pago": true,
        "telefone": "859",
        "id": "2"
      },
      {
        "createdAt": 1744150451,
        "numero": 7,
        "nome": "Carol",
        "pago": true,
        "telefone": "859",
        "id": "3"
      },
      {
        "createdAt": 1744150396,
        "numero": 8,
        "nome": "Carol",
        "pago": true,
        "telefone": "859",
        "id": "4"
      },
      {
        "createdAt": 1744150346,
        "numero": 13,
        "nome": "Carol",
        "pago": true,
        "telefone": "859",
        "id": "5"
      },
      {
        "createdAt": 1744150297,
        "numero": 30,
        "nome": "Carol",
        "pago": true,
        "telefone": "859",
        "id": "6"
      },
      {
        "createdAt": 1744150250,
        "numero": 34,
        "nome": "Carol",
        "pago": true,
        "telefone": "859",
        "id": "7"
      },
      {
        "createdAt": 1744150198,
        "numero": 105,
        "nome": "Carol",
        "pago": true,
        "telefone": "859",
        "id": "8"
      },
      {
        "createdAt": 1744150159,
        "numero": 213,
        "nome": "Carol",
        "pago": true,
        "telefone": "859",
        "id": "9"
      },
      {
        "createdAt": 1744150105,
        "numero": 240,
        "nome": "Carol",
        "pago": true,
        "telefone": "859",
        "id": "10"
      },
      {
        "createdAt": 1744150068,
        "numero": 2,
        "nome": "Julio",
        "pago": true,
        "telefone": "859",
        "id": "11"
      },
      {
        "createdAt": 1744150012,
        "numero": 3,
        "nome": "Julio",
        "pago": true,
        "telefone": "859",
        "id": "12"
      },
      {
        "createdAt": 1744149956,
        "numero": 4,
        "nome": "Julio",
        "pago": true,
        "telefone": "859",
        "id": "13"
      },
      {
        "createdAt": 1744149901,
        "numero": 6,
        "nome": "Julio",
        "pago": true,
        "telefone": "859",
        "id": "14"
      },
      {
        "createdAt": 1744149853,
        "numero": 9,
        "nome": "Julio",
        "pago": true,
        "telefone": "859",
        "id": "15"
      },
      {
        "createdAt": 1744149799,
        "numero": 10,
        "nome": "Julio",
        "pago": true,
        "telefone": "859",
        "id": "16"
      },
      {
        "createdAt": 1744149742,
        "numero": 11,
        "nome": "Julio",
        "pago": true,
        "telefone": "859",
        "id": "17"
      },
      {
        "createdAt": 1744149686,
        "numero": 12,
        "nome": "Julio",
        "pago": true,
        "telefone": "859",
        "id": "18"
      },
      {
        "createdAt": 1744149634,
        "numero": 14,
        "nome": "Julio",
        "pago": true,
        "telefone": "859",
        "id": "19"
      },
      {
        "createdAt": 1744149577,
        "numero": 15,
        "nome": "Julio",
        "pago": true,
        "telefone": "859",
        "id": "20"
      },
      {
        "createdAt": 1744149520,
        "numero": 16,
        "nome": "Julio",
        "pago": true,
        "telefone": "859",
        "id": "21"
      },
      {
        "createdAt": 1744149464,
        "numero": 17,
        "nome": "Julio",
        "pago": true,
        "telefone": "859",
        "id": "22"
      },
      {
        "createdAt": 1744149408,
        "numero": 18,
        "nome": "Julio",
        "pago": true,
        "telefone": "859",
        "id": "23"
      },
      {
        "createdAt": 1744149352,
        "numero": 19,
        "nome": "Julio",
        "pago": true,
        "telefone": "859",
        "id": "24"
      },
      {
        "createdAt": 1744149295,
        "numero": 20,
        "nome": "Julio",
        "pago": true,
        "telefone": "859",
        "id": "25"
      },
      {
        "createdAt": 1744149239,
        "numero": 21,
        "nome": "Julio",
        "pago": true,
        "telefone": "859",
        "id": "26"
      },
      {
        "createdAt": 1744149183,
        "numero": 22,
        "nome": "Julio",
        "pago": true,
        "telefone": "859",
        "id": "27"
      },
      {
        "createdAt": 1744149127,
        "numero": 23,
        "nome": "Julio",
        "pago": true,
        "telefone": "859",
        "id": "28"
      },
      {
        "createdAt": 1744149070,
        "numero": 24,
        "nome": "Julio",
        "pago": true,
        "telefone": "859",
        "id": "29"
      },
      {
        "createdAt": 1744149014,
        "numero": 25,
        "nome": "Julio",
        "pago": true,
        "telefone": "859",
        "id": "30"
      },
      {
        "createdAt": 1744148968,
        "numero": 26,
        "nome": "Thayna",
        "pago": true,
        "telefone": "859",
        "id": "31"
      },
      {
        "createdAt": 1744148924,
        "numero": 27,
        "nome": "Paty",
        "pago": true,
        "telefone": "859",
        "id": "32"
      },
      {
        "createdAt": 1744148871,
        "numero": 28,
        "nome": "Paty",
        "pago": true,
        "telefone": "859",
        "id": "33"
      },
      {
        "createdAt": 1744148815,
        "numero": 29,
        "nome": "Paty",
        "pago": true,
        "telefone": "859",
        "id": "34"
      },
      {
        "createdAt": 1744148772,
        "numero": 31,
        "nome": "Marjore",
        "pago": true,
        "telefone": "859",
        "id": "35"
      },
      {
        "createdAt": 1744148718,
        "numero": 32,
        "nome": "Marjory",
        "pago": true,
        "telefone": "859",
        "id": "36"
      },
      {
        "createdAt": 1744148661,
        "numero": 33,
        "nome": "Marjory",
        "pago": true,
        "telefone": "859",
        "id": "37"
      },
      {
        "createdAt": 1744148620,
        "numero": 60,
        "nome": "Clairton",
        "pago": true,
        "telefone": "859",
        "id": "38"
      },
      {
        "createdAt": 1744148576,
        "numero": 64,
        "nome": "Paty",
        "pago": true,
        "telefone": "859",
        "id": "39"
      },
      {
        "createdAt": 1744148522,
        "numero": 74,
        "nome": "Paty",
        "pago": true,
        "telefone": "859",
        "id": "40"
      },
      {
        "createdAt": 1744148484,
        "numero": 76,
        "nome": "Vinicius ACS ",
        "pago": true,
        "telefone": "859",
        "id": "41"
      },
      {
        "createdAt": 1744148443,
        "numero": 77,
        "nome": "Bruno ACS ",
        "pago": true,
        "telefone": "859",
        "id": "42"
      },
      {
        "createdAt": 1744148399,
        "numero": 99,
        "nome": "MilenaACS ",
        "pago": true,
        "telefone": "859",
        "id": "43"
      },
      {
        "createdAt": 1744148353,
        "numero": 104,
        "nome": "Clairton",
        "pago": true,
        "telefone": "859",
        "id": "44"
      },
      {
        "createdAt": 1744148322,
        "numero": 109,
        "nome": "Vinicius ACS",
        "pago": true,
        "telefone": "859",
        "id": "45"
      },
      {
        "createdAt": 1744148327,
        "numero": 111,
        "nome": "Clairton",
        "pago": true,
        "telefone": "",
        "id": "46"
      },
      {
        "createdAt": 1744148281,
        "numero": 124,
        "nome": "Ellson",
        "pago": true,
        "telefone": "",
        "id": "47"
      },
      {
        "createdAt": 1744148272,
        "numero": 278,
        "nome": "Isaac",
        "pago": true,
        "telefone": "859",
        "id": "48"
      },
      {
        "createdAt": 1744148230,
        "numero": 282,
        "nome": "Isaac",
        "pago": true,
        "telefone": "859",
        "id": "49"
      },
      {
        "createdAt": 1744148182,
        "numero": 286,
        "nome": "Isaac",
        "pago": true,
        "telefone": "859",
        "id": "50"
      },
      {
        "createdAt": 1744148130,
        "numero": 295,
        "nome": "Isaac",
        "pago": true,
        "telefone": "859",
        "id": "51"
      },
      {
        "createdAt": 1744148075,
        "numero": 296,
        "nome": "Isaac",
        "pago": true,
        "telefone": "859",
        "id": "52"
      },
      {
        "createdAt": 1744149016,
        "numero": 177,
        "nome": "Ana Glecia Vasconcelos Rodrigues",
        "pago": true,
        "telefone": "85981531961",
        "id": "53"
      },
      {
        "createdAt": 1744150883,
        "numero": 275,
        "nome": "Ana Luiza ",
        "pago": true,
        "telefone": "85981038095",
        "id": "54"
      },
      {
        "createdAt": 1744150861,
        "numero": 250,
        "nome": "Ana Luiza ",
        "pago": true,
        "telefone": "85981038095",
        "id": "55"
      },
      {
        "createdAt": 1744150821,
        "numero": 37,
        "nome": "Ana Luiza ",
        "pago": true,
        "telefone": "85981038095",
        "id": "56"
      },
      {
        "createdAt": 1744155898,
        "numero": 45,
        "nome": "Lucas",
        "pago": true,
        "telefone": "85992816086",
        "id": "57"
      },
      {
        "createdAt": 1744155873,
        "numero": 41,
        "nome": "ALISON NOJOSA",
        "pago": true,
        "telefone": "85999573517",
        "id": "58"
      },
      {
        "createdAt": 1744155828,
        "numero": 115,
        "nome": "ALISON NOJOSA",
        "pago": true,
        "telefone": "85999573517",
        "id": "59"
      },
      {
        "createdAt": 1744199684,
        "numero": 123,
        "nome": "Pedro Henrique",
        "pago": true,
        "telefone": "85998125603",
        "id": "60"
      },
      {
        "createdAt": 1744201389,
        "numero": 241,
        "nome": "Pedro Henrique",
        "pago": true,
        "telefone": "85998125603",
        "id": "61"
      },
      {
        "createdAt": 1744201339,
        "numero": 300,
        "nome": "Pedro Henrique",
        "pago": true,
        "telefone": "85998125603",
        "id": "62"
      },
      {
        "createdAt": 1744219567,
        "numero": 289,
        "nome": "Augusta Araújo de Moura Duarte",
        "pago": true,
        "telefone": "",
        "id": "64"
      },
      {
        "createdAt": 1744219521,
        "numero": 119,
        "nome": "Augusta Araújo de Moura Duarte",
        "pago": true,
        "telefone": "",
        "id": "65"
      },
      {
        "createdAt": 1744219477,
        "numero": 143,
        "nome": "Augusta Araújo de Moura Duarte",
        "pago": true,
        "telefone": "",
        "id": "66"
      },
      {
        "createdAt": 1744219427,
        "numero": 107,
        "nome": "Augusta Araújo de Moura Duarte",
        "pago": true,
        "telefone": "",
        "id": "67"
      },
      {
        "createdAt": 1744219398,
        "numero": 186,
        "nome": "Augusta Araújo de Moura Duarte",
        "pago": true,
        "telefone": "",
        "id": "68"
      },
      {
        "createdAt": 1744219378,
        "numero": 232,
        "nome": "Talita Brena",
        "pago": true,
        "telefone": "85998374367",
        "id": "69"
      },
      {
        "createdAt": 1744219335,
        "numero": 155,
        "nome": "Dayse",
        "pago": true,
        "telefone": "85997734952",
        "id": "70"
      },
      {
        "createdAt": 1744219281,
        "numero": 237,
        "nome": "Dayse",
        "pago": true,
        "telefone": "85997734952",
        "id": "71"
      },
      {
        "createdAt": 1744219238,
        "numero": 299,
        "nome": "Maria do Socorro Santos silveira",
        "pago": true,
        "telefone": "85991236584",
        "id": "72"
      },
      {
        "createdAt": 1744219438,
        "numero": 53,
        "nome": "Debby yohanna abreu de souza",
        "pago": true,
        "telefone": "85988776797",
        "id": "73"
      },
      {
        "createdAt": 1744219708,
        "numero": 35,
        "nome": "Tia Ângela aero",
        "pago": true,
        "telefone": "",
        "id": "74"
      },
      {
        "createdAt": 1744219659,
        "numero": 36,
        "nome": "Tia Ângela aero",
        "pago": true,
        "telefone": "",
        "id": "75"
      },
      {
        "createdAt": 1744225779,
        "numero": 69,
        "nome": "Tamires e Gilberto ",
        "pago": true,
        "telefone": "85991587854",
        "id": "76"
      },
      {
        "createdAt": 1744227329,
        "numero": 100,
        "nome": "Marlon da Marília ",
        "pago": true,
        "telefone": "98982218140",
        "id": "77"
      },
      {
        "createdAt": 1744228629,
        "numero": 56,
        "nome": "Ione Lara",
        "pago": true,
        "telefone": "85987817702",
        "id": "78"
      },
      {
        "createdAt": 1744228578,
        "numero": 57,
        "nome": "Ione Lara",
        "pago": true,
        "telefone": "85987817702",
        "id": "79"
      },
      {
        "createdAt": 1744230404,
        "numero": 55,
        "nome": "Luciane Silva",
        "pago": true,
        "telefone": "88996711272",
        "id": "80"
      },
      {
        "createdAt": 1744233325,
        "numero": 59,
        "nome": "Lucas",
        "pago": true,
        "telefone": "85992816086",
        "id": "81"
      },
      {
        "createdAt": 1744233272,
        "numero": 88,
        "nome": "Lucas",
        "pago": true,
        "telefone": "85992816086",
        "id": "82"
      },
      {
        "createdAt": 1744235459,
        "numero": 86,
        "nome": "Lu",
        "pago": true,
        "telefone": "85999287030",
        "id": "83"
      },
      {
        "createdAt": 1744235427,
        "numero": 87,
        "nome": "Lu",
        "pago": true,
        "telefone": "85999287030",
        "id": "84"
      },
      {
        "createdAt": 1744296787,
        "numero": 42,
        "nome": "Maria Aparecida Monteiro ",
        "pago": true,
        "telefone": "85994035540",
        "id": "85"
      },
      {
        "createdAt": 1744312337,
        "numero": 199,
        "nome": "Mirla Araujo",
        "pago": true,
        "telefone": "85987151460",
        "id": "86"
      },
      {
        "createdAt": 1744328860,
        "numero": 297,
        "nome": "Denize",
        "pago": true,
        "telefone": "85997121832",
        "id": "87"
      },
      {
        "createdAt": 1744330737,
        "numero": 38,
        "nome": "Egilando ",
        "pago": true,
        "telefone": "85986080288",
        "id": "88"
      },
      {
        "createdAt": 1744330691,
        "numero": 39,
        "nome": "Egilando ",
        "pago": true,
        "telefone": "85986080288",
        "id": "89"
      }
    ];
    
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
            btn.disabled = true;
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
            console.log(statusMapa)
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
    
    pagos.forEach(item => {
      statusMapa[parseInt(item.numero)] = item;
    });
    renderGrid();
    carregarStatus();