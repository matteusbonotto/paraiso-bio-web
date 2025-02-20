import React from 'react';
import './apto.css';

const apto = () => {
  console.log('apto component rendered');

  const copyToClipboard = (id) => {
    const text = document.getElementById(id).value;
    navigator.clipboard.writeText(text)
      .then(() => {
        alert(`${id} copiado para a área de transferência!`);
      })
      .catch((err) => {
        console.error(`Erro ao copiar ${id}: `, err);
      });
  };

  return (
    <div className="container mx-auto p-4">
      <h3 className="text-center my-4 flex items-center justify-center">
        <i
          className="fas fa-chevron-left mr-3 cursor-pointer"
          onClick={() => window.history.back()}
          title="Voltar"
        ></i>
        Informações do Imóvel
      </h3>
        {/* <div className="flex flex-wrap" style={{ height: 'calc(100vh - 100px)' }}>
          <div className="w-full md:w-1/2 mb-2">
            <div
              className="bg-primary text-white mb-3 h-full rounded-lg shadow-lg cursor-pointer card"
              id="card-instalacoes"
              data-toggle="modal"
              data-target="#modalInstalacoes"
            >
              <div className="p-4">
                <h5 className="text-lg font-bold">
                  <i className="fas fa-cogs mr-2"></i> Instalações
                </h5>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 mb-2">
            <div
              className="bg-success text-white mb-3 h-full rounded-lg shadow-lg cursor-pointer card"
              id="card-endereco"
              data-toggle="modal"
              data-target="#modalEndereco"
            >
              <div className="p-4">
                <h5 className="text-lg font-bold">
                  <i className="fas fa-map-marker-alt mr-2"></i> Dados do imóvel
                </h5>
              </div>
            </div>
          </div>
        </div>
  */}
      {/* Modal para Instalações */}
      <div className="modal fade" id="modalInstalacoes" tabIndex="-1" role="dialog">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Instalações</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Fechar"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="info-card">
                <h5><i className="fas fa-home icon"></i> Endereço de Instalação</h5>
                <p>
                  R Osvaldo Orlando da Costa, 203, Resi. Cosmos CEP: 13059-091
                </p>
              </div>

              {/* Card para a primeira empresa */}
              <div className="info-card">
                <div className="flex items-start">
                  <img
                    src="https://media.licdn.com/dms/image/v2/C4E0BAQH5vx-H2S6I_Q/company-logo_200_200/company-logo_200_200/0/1630586570963/vivo_interior_paulista_logo?e=2147483647&v=beta&t=RHP8Mgb3ZCvHrpmNUkA2T5DYOmR_IrsmYHxVeuEKpys"
                    alt=""
                    className="w-16 h-16"
                  />
                  <div className="ml-3">
                    <p><strong>Código de cliente:</strong> 899925861182</p>
                    <p><strong>CNPJ:</strong> 54.708.257.0001-21</p>
                  </div>
                </div>
              </div>

              {/* Card para a segunda empresa */}
              <div className="info-card">
                <div className="flex items-start">
                  <img
                    src="https://ecossis.com/www1/wp-content/uploads/2018/11/ICONE-CLIENTE-ecossis-logos-clientes-sanasa.png"
                    alt=""
                    className="w-16 h-16"
                  />
                  <div className="ml-3">
                    <p><strong>Código de Instalação:</strong> 5156781</p>
                  </div>
                </div>
              </div>

              {/* Card para a terceira empresa */}
              <div className="info-card">
                <div className="flex items-start">
                  <img
                    src="https://assets.hgbrasil.com/finance/companies/big/cpfl-energia.png"
                    alt=""
                    className="w-16 h-16"
                  />
                  <div className="ml-3">
                    <p><strong>Código de instalação:</strong> 4003944945</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal para Endereço */}
      <div className="modal fade" id="modalEndereco" tabIndex="-1" role="dialog">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Endereço do Apartamento</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Fechar"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="info-card">
                <h5><i className="fas fa-map icon"></i> Endereço Completo</h5>
                <p>
                  Rua Vandick Reidner P. Coqueiro, 597, Resi. Cosmos, CEP 13059-112
                  <i
                    className="fas fa-copy copy-icon cursor-pointer ml-2"
                    onClick={() => copyToClipboard('endereco')}
                    title="Copiar Endereço"
                  ></i>
                </p>
                <p><strong>BLOCO:</strong> G</p>
                <p><strong>APARTAMENTO:</strong> 404</p>
                <p><strong>Vaga de Garagem:</strong> 75</p>
                <hr />
                <h6>Detalhes do Endereço:</h6>
                <div className="accordion" id="accordionDetails">
                  <div className="card">
                    <div className="card-header" id="headingDetails">
                      <h5 className="mb-0">
                        <button
                          className="btn btn-link"
                          type="button"
                          data-toggle="collapse"
                          data-target="#collapseDetails"
                          aria-expanded="true"
                          aria-controls="collapseDetails"
                        >
                          Ver Detalhes do Endereço
                        </button>
                      </h5>
                    </div>
                    <div
                      id="collapseDetails"
                      className="collapse"
                      aria-labelledby="headingDetails"
                      data-parent="#accordionDetails"
                    >
                      <div className="card-body">
                        <div className="form-group flex items-center">
                          <label htmlFor="metragem" className="mr-2">Metragem</label>
                          <input
                            type="text"
                            className="form-control mr-2"
                            id="metragem"
                            value="43,66m2"
                            readOnly
                          />
                          <i
                            className="fas fa-copy copy-icon cursor-pointer"
                            onClick={() => copyToClipboard('metragem')}
                            title="Copiar Metragem"
                          ></i>
                        </div>
                        <div className="form-group flex items-center">
                          <label htmlFor="rua" className="mr-2">Rua</label>
                          <input
                            type="text"
                            className="form-control mr-2"
                            id="rua"
                            value="Rua Vandick Reidner P. Coqueiro"
                            readOnly
                          />
                          <i
                            className="fas fa-copy copy-icon cursor-pointer"
                            onClick={() => copyToClipboard('rua')}
                            title="Copiar Rua"
                          ></i>
                        </div>
                        <div className="form-group flex items-center">
                          <label htmlFor="logradouro" className="mr-2">Logradouro</label>
                          <input
                            type="text"
                            className="form-control mr-2"
                            id="logradouro"
                            value="Vandick Reidner P. Coqueiro"
                            readOnly
                          />
                          <i
                            className="fas fa-copy copy-icon cursor-pointer"
                            onClick={() => copyToClipboard('logradouro')}
                            title="Copiar Logradouro"
                          ></i>
                        </div>
                        <div className="form-group flex items-center">
                          <label htmlFor="numero" className="mr-2">Número</label>
                          <input
                            type="text"
                            className="form-control mr-2"
                            id="numero"
                            value="597"
                            readOnly
                          />
                          <i
                            className="fas fa-copy copy-icon cursor-pointer"
                            onClick={() => copyToClipboard('numero')}
                            title="Copiar Número"
                          ></i>
                        </div>
                        <div className="form-group flex items-center">
                          <label htmlFor="bairro" className="mr-2">Bairro</label>
                          <input
                            type="text"
                            className="form-control mr-2"
                            id="bairro"
                            value="Resi. Cosmos"
                            readOnly
                          />
                          <i
                            className="fas fa-copy copy-icon cursor-pointer"
                            onClick={() => copyToClipboard('bairro')}
                            title="Copiar Bairro"
                          ></i>
                        </div>
                        <div className="form-group flex items-center">
                          <label htmlFor="cidade" className="mr-2">Cidade</label>
                          <input
                            type="text"
                            className="form-control mr-2"
                            id="cidade"
                            value="Campinas"
                            readOnly
                          />
                          <i
                            className="fas fa-copy copy-icon cursor-pointer"
                            onClick={() => copyToClipboard('cidade')}
                            title="Copiar Cidade"
                          ></i>
                        </div>
                        <div className="form-group flex items-center">
                          <label htmlFor="estado" className="mr-2">Estado</label>
                          <input
                            type="text"
                            className="form-control mr-2"
                            id="estado"
                            value="São Paulo"
                            readOnly
                          />
                          <i
                            className="fas fa-copy copy-icon cursor-pointer"
                            onClick={() => copyToClipboard('estado')}
                            title="Copiar Estado"
                          ></i>
                        </div>
                        <div className="form-group flex items-center">
                          <label htmlFor="uf" className="mr-2">UF</label>
                          <input
                            type="text"
                            className="form-control mr-2"
                            id="uf"
                            value="SP"
                            readOnly
                          />
                          <i
                            className="fas fa-copy copy-icon cursor-pointer"
                            onClick={() => copyToClipboard('uf')}
                            title="Copiar UF"
                          ></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default apto;