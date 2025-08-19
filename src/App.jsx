import React, { useState } from "react";
import "./App.css";

function App() {
  const cras = [
    {
      id: "cras-alto",
      titulo: "CRAS ALTO",
      telefone: "(21) 2644-9555",
      ramal: "1001",
      coordenador: "Esvetilana Machado de Lima Pereira",
      endereco: "Rua Nilza Chiapeta Fadigas, nº 190 - Várzea",
      imagem:
        "https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=A0dD3lTgSVbeWbNv2nu72A&cb_client=search.gws-prod.gps&w=408&h=240&yaw=127.02197&pitch=0&thumbfov=100",
      coordenadas:
        "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7376.502934890504!2d-42.974405!3d-22.4195591!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x984cd2d403bd1f%3A0x5e43d1f4afd5f767!2sR.%20Nilza%20Chiapeta%20Fadigas%2C%20190%20-%20V%C3%A1rzea%2C%20Teres%C3%B3polis%20-%20RJ%2C%2025963-150!5e0!3m2!1spt-BR!2sbr!4v1755525001878!5m2!1spt-BR!2sbr",
      abrangencia: [
        "Agriões",
        "Albuquerque",
        "Alto",
        "Artistas",
        "Beira Linha/Cascata Guarani",
        "Canoas",
        "Carlos Guinle",
        "Cascata dos Amores",
        "Castelinho",
        "Corta Vento",
        "Ermitage",
        "Fazendinha",
        "Granja Guarani",
        "Iúcas",
        "Jardim Cascata",
        "Jardim Europa",
        "Jardim Serrano",
        "Montanhas",
        "Morro dos Pinheiros",
        "Panorama",
        "Parque Ingá",
        "Parque São Luiz",
        "Pedreira",
        "Prata dos Aredes",
        "Soberbo",
        "Taumaturgo",
        "Tijuca",
        "Vale Paraíso",
        "Várzea",
        "40 Casas",
      ],
    },
    {
      id: "cras-barra",
      titulo: "CRAS BARRA",
      telefone: "(21) 2644-9562",
      ramal: "1008",
      coordenador: "Regiane Ferreira Ventura",
      endereco: "Rua Dr. Oliveira, nº 110 - Barra",
      imagem:
        "https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=jIFJLtIzD1jsb4wvy_oRvw&cb_client=search.gws-prod.gps&w=408&h=240&yaw=216.43628&pitch=0&thumbfov=100",
      coordenadas:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3688.7074962432125!2d-42.977208999999995!3d-22.4023818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x984cdef22c62a3%3A0x6c5eec0a00645943!2sR.%20Dr.%20Oliveira%2C%20110%20-%20Barra%20do%20Imbu%C3%AD%2C%20Teres%C3%B3polis%20-%20RJ%2C%2025965-175!5e0!3m2!1spt-BR!2sbr!4v1755528430763!5m2!1spt-BR!2sbr",
      abrangencia: [
        "Barra do Imbuí",
        "Caleme",
        "Campo Grande",
        "Cascata do Imbuí",
        "Cova da Onça",
        "Córrego do Príncipe",
        "Dente de Ouro",
        "Espanhol",
        "Feo",
        "Golf",
        "Granja Florestal",
        "Jardim Pinheiros",
        "Paineiras",
        "Parque Imbuí",
        "Pedra da Tartaruga",
        "Pimenteiras",
        "Posse",
        "Quebra Frascos",
        "Quinta da Barra",
        "Salaco",
        "Vila Muqui",
      ],
    },
    {
      id: "cras-barroso",
      titulo: "CRAS BARROSO",
      telefone: "(21) 2644-9556",
      ramal: "1002",
      coordenador: "Paolla Alves Chagas",
      endereco: "Rua Pará, s/nº - Barroso",
      imagem:
        "https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=rOjwsT6Pqu9peQSIc0-h-w&cb_client=search.gws-prod.gps&w=408&h=240&yaw=171.55518&pitch=0&thumbfov=100",
      coordenadas:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3687.741684529537!2d-42.9663336!3d-22.4387464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x99b3d922c26371%3A0x9beb0bd1b38f1ad!2sCRAS%20Barroso!5e0!3m2!1spt-BR!2sbr!4v1755528705717!5m2!1spt-BR!2sbr",
      abrangencia: [
        "Araras",
        "Barroso",
        "Fátima",
        "Ilha do Caxangá",
        "Rosário",
        "Santa Cecília",
      ],
    },
    {
      id: "cras-bonsucesso",
      titulo: "CRAS BONSUCESSO",
      telefone: "(21) 2644-9559",
      ramal: "1005",
      coordenador: "",
      endereco: "Rua Domingos Augusto da Costa - Bonsucesso",
      imagem:
        "https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=uUHi43jVYnmkv7_2aPHf9g&cb_client=search.gws-prod.gps&w=408&h=240&yaw=101.20357&pitch=0&thumbfov=100",
      coordenadas:
        "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d118067.86605838961!2d-42.983967!3d-22.3679421!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x98397631b680a7%3A0x3d1da1858673cfef!2sCRAS%20Bonsucesso!5e0!3m2!1spt-BR!2sbr!4v1755528794884!5m2!1spt-BR!2sbr",
      abrangencia: [
        "Alegria",
        "Agriões de Dentro",
        "Agriões de Fora",
        "Boa Fé",
        "Boa Vida",
        "Bonsucesso",
        "Campanha",
        "Córrego das Pedras",
        "Estrelinha",
        "Frades",
        "Imbiú",
        "Mottas",
        "Lucios",
        "Morro Grande",
        "Porto",
        "Prates",
        "Quebra Vidro",
        "Santa Rosa",
        "Sebastiana",
        "Serrinha",
        "Soledade",
        "Vale Alpino",
        "Vargem Grande",
        "Venda Nova",
        "Viana",
        "Vieira",
        "Xotó",
      ],
    },
    {
      id: "cras-meudon",
      titulo: "CRAS MEUDON",
      telefone: "(21) 2644-9557",
      ramal: "1003",
      coordenador: "Tereza Crisstina A. dos Santos",
      endereco: "Rua Caramuru, nº 108 - Meudon",
      imagem: "/meudon.jpeg",
      coordenadas:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d921.9662036396326!2d-42.94598673036933!3d-22.43410935911563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x99b3569f61f27f%3A0xfe3c2bc107645051!2sR.%20Caramuru%2C%20108%20-%20Meudon%2C%20Teres%C3%B3polis%20-%20RJ%2C%2025954-175!5e0!3m2!1spt-BR!2sbr!4v1755528896232!5m2!1spt-BR!2sbr",
      abrangencia: [
        "Bom Retiro",
        "Coreia",
        "Jacarandá",
        "Jardim Meudon",
        "Meudon",
        "Vale da Revolta",
      ],
    },
    {
      id: "cras-prata",
      titulo: "CRAS PRATA",
      telefone: "(21) 2644-9558",
      ramal: "1004",
      coordenador: "Mariza Souza Ferreira",
      endereco: "Rua Avelino Machado Bastos, nº 250 - Prata",
      imagem:
        "https://lh3.googleusercontent.com/p/AF1QipP8kryUYCb9Q6IcEHqPvcoa2Dxz3GQt25vM7JjP=w408-h304-k-no",
      coordenadas:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3689.1554710058003!2d-42.95530679999999!3d-22.3854957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x984d6921ced511%3A0x2e309819819c1ade!2sCRAS%20PRATA!5e0!3m2!1spt-BR!2sbr!4v1755529021384!5m2!1spt-BR!2sbr",
      abrangencia: [
        "Água Quente",
        "Andradas",
        "Arrieiro",
        "Bacia",
        "Biquinha",
        "Boa União",
        "Brejal",
        "Campo Limpo",
        "Cruzeiro",
        "Cuiabá",
        "Fazenda Alpina",
        "Gamboa",
        "Granja Mafra",
        "Holliday",
        "Morro Agudo",
        "Pessegueiros",
        "Pião",
        "Ponte Nova",
        "Providência",
        "Poço dos Peixes",
        "Álvaro Paná",
        "Fazenda Ermitage",
        "Fischer",
        "Fonte Santa",
        "Prata",
        "Quebra Coco",
        "Quinta Lebrão",
        "Roncador",
        "Santa Rita",
        "Serra do Capim",
        "Três Córregos" 

      ],
    },
    {
      id: "cras-sao-pedro",
      titulo: "CRAS SÃO PEDRO",
      telefone: "(21) 2644-9560",
      ramal: "1006",
      coordenador: "Lívia Marílha Fermiane Gomes da Silva",
      endereco: "Rua Fileuterpe, nº 845 – São Pedro",
      imagem:
        "https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=SHmSJ1ahOMBk9AYc7OBkhA&cb_client=search.gws-prod.gps&w=408&h=240&yaw=92.579445&pitch=0&thumbfov=100",
      coordenadas:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3688.0535075151593!2d-42.967749399999995!3d-22.427011800000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x99b33164d887a7%3A0xbfefff181b2f9e3b!2sR.%20Fileuterpe%2C%20845%20-%20Bairro%20da%20S%C3%A3o%20Pedro%2C%20Teres%C3%B3polis%20-%20RJ%2C%2025956-005!5e0!3m2!1spt-BR!2sbr!4v1755529098785!5m2!1spt-BR!2sbr",
      abrangencia: [
        "Granja Primor",
        "Morro do Tiro",
        "Perpétuo",
        "Pimentel",
        "São Pedro",
        "Servidão Delta",
      ],
    },
    {
      id: "creas",
      titulo: "CREAS",
      telefone: "(21) 2644-9563",
      ramal: "1009",
      coordenador: "Bibiana Correa Fernande",
      endereco: "Rua Carmela Dutra, nº 812 – Agriões",
      imagem:
        "https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=UVfAxI1DaBP__s52SNNC6A&cb_client=search.gws-prod.gps&w=408&h=240&yaw=137.13556&pitch=0&thumbfov=100",
      coordenadas:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3688.326380408051!2d-42.9737996!3d-22.416738199999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x984cd3b0317c59%3A0xed2a8e05e3597557!2sR.%20Carmela%20Dutra%2C%20812%20-%20Agri%C3%B5es%2C%20Teres%C3%B3polis%20-%20RJ%2C%2025963-140!5e0!3m2!1spt-BR!2sbr!4v1755529232389!5m2!1spt-BR!2sbr",
      abrangencia: ["Município de Teresópolis"],
    },
  ];

  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState();
  const [bairroSelecionado, setBairroSelecionado] = useState();
  const [crasSelecionado, setCrasSelecionado] = useState(cras[0]);


  const [searchTerm, setSearchTerm] = useState("");
  const [filteredBairros, setFilteredBairros] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const allBairros = [...new Set(cras.flatMap((item) => item.abrangencia))];

  const normalizeText = (text) => {
    return text
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();
  };

  const toggleList = (item, index) => {
    setSelectedIndex(index);
    setCrasSelecionado(item);
    setIsExpanded((prev) => !prev);
  };

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (value.length > 0) {
      const normalizedSearch = normalizeText(value);
      const filtered = allBairros.filter((bairro) =>
        normalizeText(bairro).includes(normalizedSearch)
      );
      setFilteredBairros(filtered);
      setShowSuggestions(true);
    } else {
      setFilteredBairros([]);
      setShowSuggestions(false);
    }
  };

  const handleSelectBairro = (bairro) => {
    
    setBairroSelecionado(bairro)

    const crasEncontrado = cras.find((item) =>
      item.abrangencia.includes(bairro)
    );
    if (crasEncontrado) {
      setCrasSelecionado(crasEncontrado);
      setSelectedIndex(cras.indexOf(crasEncontrado));
      setIsExpanded(true);
      setSearchTerm(bairro);
      setShowSuggestions(false);
    }
  };

  return (
    <div className="App">
      <div className="header">
        <div className="part-1">
          <h1>Sistema Único de Assistência Social</h1>
        </div>
        <div className="part-2">
          <div className="search-container">
            <input
              id="field-sitewide-search"
              type="text"
              className="search"
              name="q"
              placeholder="Pesquisar por Bairro"
              aria-label="Pesquisar por Bairro"
              value={searchTerm}
              onChange={handleSearch}
              onFocus={() => {
                if (searchTerm.length > 0) setShowSuggestions(true);
              }}
              onBlur={() => {
                // Delay para permitir clicar na sugestão
                setTimeout(() => setShowSuggestions(false), 150);
              }}
            />
            {showSuggestions && filteredBairros.length > 0 && (
              <ul className="suggestions-list">
                {filteredBairros.map((bairro, index) => (
                  <li
                    key={index}
                    className="suggestion-item"
                    onClick={() => handleSelectBairro(bairro)}
                  >
                    {bairro}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
      <div className="page-container">
        <div className="left-column">
          <h2>Equipamentos de Proteção Social</h2>
          <ul>
            <li>Selecione um equipamento abaixo;</li>
            <li>Ou busque por seu bairro na barra de pesquisa;</li>
          </ul>

          <div className="select-cras">
            {cras.map((item, index) => {
              return (
                <>
                  <button
                    onClick={() => {
                      toggleList(item, index);
                    }}
                    className="cras-button"
                  >
                    {item.titulo}
                  </button>
                  {index == selectedIndex && isExpanded && (
                    <>
                      <b>Área de Abrangência:</b>
                      <ul className="bairro-list">
                        {crasSelecionado.abrangencia.map((bairro, index) => (
                          <li style={{color: bairro == bairroSelecionado? "red": ""}}  key={index}>{bairro}</li>
                        ))}
                      </ul>
                    </>
                  )}
                </>
              );
            })}
          </div>
        </div>

        <div className="right-column">
          <div className="map-card">
            <img
              className="imagem-cras"
              src={crasSelecionado.imagem}

            />
            <div className="map-card-info">
              <h3>{crasSelecionado.titulo}</h3>
              <p>Coordenadora: {crasSelecionado.coordenador}</p>
              <p>
                Telefone: {crasSelecionado.telefone} - Ramal:{" "}
                {crasSelecionado.ramal}
              </p>
              <p>Endereço: {crasSelecionado.endereco}</p>
              <h3>Localização</h3>
              <div className="map-embed">
                <iframe
                  title="Google Map"
                  src={crasSelecionado.coordenadas}
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <p className="text-footer">
          © 2025 Secretaria Municipal de Ciência e Tecnologia
        </p>
      </div>
    </div>
  );
}

export default App;
