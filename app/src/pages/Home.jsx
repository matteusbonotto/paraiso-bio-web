import React, { useEffect, useRef } from 'react';
import Mapa from "../assets/images/mapa.jpg";

const Home = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const img = new Image();
    img.src = Mapa;

    img.onload = () => {
      // Desenha a imagem no canvas
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

      // Escurece a imagem geral
      ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Definição das áreas de destaque
      const areas = [
        { x: 230, y: 145, width: 100, height: 100, color: 'red', text: 'G404' }, // Apartamento
        { x: 300, y: 60, width: 20, height: 30, color: 'blue', text: '75' }, // Vaga
        { x: 350, y: 500, width: 100, height: 40, color: 'green', text: 'Portaria' } // Portaria
      ];

      //Criar uma lista com as coordenadas de cada bloco e vaga em json.



      // Destacar as áreas
      areas.forEach(area => {
        // Salva o contexto
        ctx.save();
        
        // Cria um caminho para destacar a área específica
        ctx.beginPath();
        ctx.rect(area.x, area.y, area.width, area.height);
        ctx.clip(); // Aplica o recorte

        // Redesenha apenas a parte da imagem dentro do retângulo
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

        // Desenha a borda
        ctx.strokeStyle = area.color;
        ctx.lineWidth = 5;
        ctx.strokeRect(area.x, area.y, area.width, area.height);

        // Desenha o texto centralizado
        ctx.font = '16px Arial';
        ctx.fillStyle = 'black';
        const textWidth = ctx.measureText(area.text).width;
        const textX = area.x + (area.width - textWidth) / 2;
        const textY = area.y + (area.height + 16) / 2;
        ctx.fillText(area.text, textX, textY);

        // Restaura o contexto para evitar afetar outras áreas
        ctx.restore();
      });
    };
  }, []);

  return (
    <div>
      <h1>Paraiso Bio Web</h1>
      <canvas ref={canvasRef} width={500} height={600}></canvas>
    </div>
  );
};

export default Home;
