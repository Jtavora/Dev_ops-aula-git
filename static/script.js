function carregarImagem() {
    fetch('https://api.thecatapi.com/v1/images/search')
      .then(response => response.json())
      .then(data => {
        const imageUrl = data[0].url;
        const imagemGato = document.getElementById('imagem-gato');
        imagemGato.src = imageUrl;
      })
      .catch(error => console.error('Ocorreu um erro:', error));
}