import pandas as pd
import sqlalchemy as sa
import sqlalchemy.orm as orm
import vendas as vd

endereco = "C:\\Users\\wesle\\Downloads\\Dados_Exemplo\\"

vendedor = pd.read_csv(endereco + "vendedor.csv", sep = ";")

tbVendedor = pd.DataFrame(vendedor)

engine = sa.create_engine("sqlite:///BancoDeDadosRelacional//vendas.db")

sessao = orm.sessionmaker(bind=engine)
sessao = sessao()

#tbVendedor
for i in  range(len(tbVendedor)):
    dados_vendedor = vd.vendedor(
        registro_vendedor = int(tbVendedor['registro_vendedor'][i]), 
        cpf = tbVendedor["cpf"][i],
        nome = tbVendedor["nome"][i],
        genero = tbVendedor["genero"][i],
        email = tbVendedor["email"][i]

    )

    try:
        sessao.add(dados_vendedor)
        sessao.commit()
    except ValueError:
        ValueError()

print ("Dados inseridos na tbVendedor")
    
#tbProduto
produto = pd.read_excel(endereco + "produto.xlsx")

tbProduto = pd.DataFrame(produto)

conn = engine.connect()

#metadata = sa.schema.MetaData(bind=engine)
metadata = sa.MetaData()
metadata.bind = engine

DadosProduto = tbProduto.to_dict(orient="records")

#tabela_produto = sa.Table(vd.produto.__tablename__,metadata,autoload=True)
tabela_produto = sa.Table(vd.produto.__tablename__,metadata,autoload_with=engine)

try:
    conn.execute(tabela_produto.insert(),DadosProduto)
    sessao.commit()

except ValueError:
    ValueError()

print ("Dados inseridos na tbProduto")

#sessao.close_all
sessao.close()

