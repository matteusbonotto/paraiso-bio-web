import React, { useEffect, useRef } from 'react';
import MapaImagem from "../assets/images/mapa.jpg";

const Mapa = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const img = new Image();
    img.src = MapaImagem;

    img.onload = () => {
      // Desenha a imagem no canvas
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

      // Escurece a imagem geral
      ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Definição das áreas de destaque
      const blocos = [
        { id: 'A404', x: 245, y: 385, color: 'red', background: 'yellow', fontColor: 'black' },
        { id: 'B404', x: 155, y: 385, color: 'red', background: 'yellow', fontColor: 'black' },
        { id: 'C404', x: 65, y: 385, color: 'red', background: 'yellow', fontColor: 'black' },
        { id: 'D404', x: 245, y: 270, color: 'red', background: 'yellow', fontColor: 'black' },
        { id: 'E404', x: 155, y: 270, color: 'red', background: 'yellow', fontColor: 'black' },
        { id: 'F404', x: 65, y: 270, color: 'red', background: 'yellow', fontColor: 'black' },
        { id: 'G404', x: 245, y: 153, color: 'red', background: 'yellow', fontColor: 'black' },
        { id: 'H404', x: 155, y: 153, color: 'red', background: 'yellow', fontColor: 'black' },
        { id: 'I404', x: 65, y: 153, color: 'red', background: 'yellow', fontColor: 'black' }
      ];

      const portaria = [
        { id: 'Portaria', x: 350, y: 500, color: 'green', width: 100, height: 40, background: 'yellow', fontColor: 'black' }
      ];

      const vagas = [
        { id: '75', x: 299, y: 60, color: 'blue', background: 'yellow', fontColor: 'black' },
      ];

      const areasData = [...blocos, ...portaria, ...vagas];

      const defaultBlocoWidth = 85;
      const defaultBlocoHeight = 95;
      const defaultVagaWidth = 20;
      const defaultVagaHeight = 30;
      const defaultPortariaWidth = 100;
      const defaultPortariaHeight = 40;

      const drawBlocoTextBackground = (ctx, text, x, y, width, height, background) => {
        if (background && background !== 'none') {
          ctx.fillStyle = background;
          const textWidth = ctx.measureText(text).width;
          const textX = x + (width - textWidth) / 2;
          const textY = y + (height + 18) / 2;
          ctx.fillRect(textX - 4, textY - 20, textWidth + 12, 31);
          return { textX, textY };
        }
        return { textX: x + (width - ctx.measureText(text).width) / 2, textY: y + (height + 18) / 2 };
      };

      const drawVagaTextBackground = (ctx, text, x, y, width, height, background) => {
        if (background && background !== 'none') {
          ctx.fillStyle = background;
          const textWidth = ctx.measureText(text).width;
          const textX = x + (width - textWidth) / 2;
          const textY = y + (height + 12) / 2;
          ctx.fillRect(textX - 1, textY - 12, textWidth + 4, 15);
          return { textX, textY };
        }
        return { textX: x + (width - ctx.measureText(text).width) / 2, textY: y + (height + 12) / 2 };
      };

      const drawPortariaTextBackground = (ctx, text, x, y, width, height, background) => {
        if (background && background !== 'none') {
          ctx.fillStyle = background;
          const textWidth = ctx.measureText(text).width;
          const textX = x + (width - textWidth) / 2;
          const textY = y + (height + 18) / 2;
          ctx.fillRect(textX - 1, textY - 10, textWidth + 10, 11);
          return { textX, textY };
        }
        return { textX: x + (width - ctx.measureText(text).width) / 2, textY: y + (height + 18) / 2 };
      };

      // Destacar as áreas
      areasData.forEach(area => {
        let width, height, drawTextBackground;

        if (blocos.some(bloco => bloco.id === area.id)) {
          width = area.width || defaultBlocoWidth;
          height = area.height || defaultBlocoHeight;
          drawTextBackground = drawBlocoTextBackground;
        } else if (vagas.some(vaga => vaga.id === area.id)) {
          width = area.width || defaultVagaWidth;
          height = area.height || defaultVagaHeight;
          drawTextBackground = drawVagaTextBackground;
        } else if (portaria.some(port => port.id === area.id)) {
          width = area.width || defaultPortariaWidth;
          height = area.height || defaultPortariaHeight;
          drawTextBackground = drawPortariaTextBackground;
        }

        // Salva o contexto
        ctx.save();
        
        // Cria um caminho para destacar a área específica
        ctx.beginPath();
        ctx.rect(area.x, area.y, width, height);
        ctx.clip(); // Aplica o recorte

        // Redesenha apenas a parte da imagem dentro do retângulo
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

        // Desenha a borda
        ctx.strokeStyle = area.color;
        ctx.lineWidth = 4;
        ctx.strokeRect(area.x, area.y, width, height);

        // Desenha o fundo amarelo do texto
        const { textX, textY } = drawTextBackground(ctx, area.id, area.x, area.y, width, height, area.background);

        // Desenha o texto centralizado
        ctx.font = '12px Arial';
        ctx.fillStyle = area.fontColor || 'black';
        ctx.fillText(area.id, textX, textY);

        // Restaura o contexto para evitar afetar outras áreas
        ctx.restore();
      });
    };
  }, []);

  return (
    <canvas ref={canvasRef} width={500} height={600}></canvas>
  );
};

export default Mapa;