import React, { useEffect, useRef } from 'react';
import MapaImagem from '../../../assets/images/mapa.jpeg';

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
        { id: 'A404', x: 380, y: 459, color: 'red', background: 'yellow', fontColor: 'black' },
        { id: 'B404', x: 245, y: 459, color: 'red', background: 'yellow', fontColor: 'black' },
        { id: 'C404', x: 110, y: 459, color: 'red', background: 'yellow', fontColor: 'black' },
        { id: 'D404', x: 380, y: 320, color: 'red', background: 'yellow', fontColor: 'black' },
        { id: 'E404', x: 245, y: 320, color: 'red', background: 'yellow', fontColor: 'black' },
        { id: 'F404', x: 110, y: 320, color: 'red', background: 'yellow', fontColor: 'black' },
        { id: 'G404', x: 380, y: 190, color: 'red', background: 'yellow', fontColor: 'black' },
        { id: 'H404', x: 245, y: 190, color: 'red', background: 'yellow', fontColor: 'black' },
        { id: 'I404', x: 110, y: 190, color: 'red', background: 'yellow', fontColor: 'black' }
      ];

      const portaria = [
        { id: 'Portaria', x: 620, y: 590, color: 'green', width: 50, height: 30, background: 'yellow', fontColor: 'black' }
      ];

      const vagas = [
        { id: '75', x: 470, y: 70, color: 'none', background: 'yellow', fontColor: 'black' },
      ];

      const areasData = [...blocos, ...portaria, ...vagas];

      const defaultBlocoWidth = 139;
      const defaultBlocoHeight = 100;
      const defaultVagaWidth = 20;
      const defaultVagaHeight = 30;
      const defaultPortariaWidth = 100;
      const defaultPortariaHeight = 40;

      const BlocoTextBackground = (ctx, text, x, y, width, height, background) => {
        if (background && background !== 'none') {
          ctx.fillStyle = background;
          const textWidth = ctx.measureText(text).width;
          const textX = x + (width - textWidth) / 2;
          const textY = y + (height + 2) / 2;
          ctx.fillRect(textX - 3, textY - 20, textWidth + 12, 33);
          return { textX, textY };
        }
        return { textX: x + (width - ctx.measureText(text).width) / 2, textY: y + (height + 18) / 2 };
      };

      const VagaTextBackground = (ctx, text, x, y, width, height, background) => {
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

      const PortariaTextBackground = (ctx, text, x, y, width, height, background) => {
        if (background && background !== 'none') {
          ctx.fillStyle = background;
          const textWidth = ctx.measureText(text).width;
          const textX = x + (width - textWidth) / 2;
          const textY = y + (height + 4) / 2;
          ctx.fillRect(textX - 5, textY - 6, textWidth + 10, 11);
          return { textX, textY };
        }
        return { textX: x + (width - ctx.measureText(text).width) / 2, textY: y + (height + 10) / 2 };
      };

      // Destacar as áreas
      areasData.forEach(area => {
        let width, height, drawTextBackground;

        if (blocos.some(bloco => bloco.id === area.id)) {
          width = area.width || defaultBlocoWidth;
          height = area.height || defaultBlocoHeight;
          drawTextBackground = BlocoTextBackground;
        } else if (vagas.some(vaga => vaga.id === area.id)) {
          width = area.width || defaultVagaWidth;
          height = area.height || defaultVagaHeight;
          drawTextBackground = VagaTextBackground;
        } else if (portaria.some(port => port.id === area.id)) {
          width = area.width || defaultPortariaWidth;
          height = area.height || defaultPortariaHeight;
          drawTextBackground = PortariaTextBackground;
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
    <canvas ref={canvasRef} width={800} height={699.9}></canvas>
  );
};

export default Mapa;