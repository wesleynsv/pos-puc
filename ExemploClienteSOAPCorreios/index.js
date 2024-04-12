const soap = require('soap');

const url = 'https://apps.correios.com.br/SigepMasterJPA/AtendeClienteService/AtendeCliente?wsdl';
const auth = "Basic " + new Buffer.from("41369640803:K3yencE!").toString("base64");

async function consultaCEP(cep) {
  try {
    const client = await soap.createClientAsync(url, {
      wsdl_headers: {
        Authorization: auth
      }
    });
    const result = await client.consultaCEPAsync({ cep });
    console.log('Dados do Endereço:', result[0].return);
  } catch (error) {
    console.error('Erro ao consultar CEP:', error);
  }
}

consultaCEP('13203552');
