import sqlalchemy as sa 
import sqlalchemy.orm as orm

engine = sa.create_engine("sqlite:///BancoDeDadosRelacional//dp.db")
base = orm.declarative_base()

#Tabela DP
class dp (base):
    __tablename__ = "dp"

    codDP = sa.Column(sa.INTEGER,primary_key= True, index=True)
    nome = sa.Column(sa.VARCHAR(100), nullable=False)
    endereco = sa.Column(sa.VARCHAR(255), nullable=False)

#Tabela responsavel
class responsavel (base):
    __tablename__ = "responsavel"

    codDP = sa.Column(sa.INTEGER,primary_key= True, index=True)
    delegado = sa.Column(sa.VARCHAR(100), nullable=False)

#Tabela municipio
class municipio (base):
    __tablename__ = "municipio"

    codIBGE = sa.Column(sa.INTEGER,primary_key= True, index=True)
    municipio = sa.Column(sa.VARCHAR(100), nullable=False)
    regiao = sa.Column(sa.VARCHAR(25), nullable=False)

#Tabela ocorrencias
class ocorrencias (base):
    __tablename__ = "ocorrencias"

    idRegistro = sa.Column(sa.INTEGER,primary_key= True, index=True)
    codDP = sa.Column(sa.INTEGER,sa.ForeignKey("dp.codDP", ondelete="NO ACTION", onupdate="CASCADE"),index = True)
    codIBGE = sa.Column(sa.INTEGER,sa.ForeignKey("municipio.codIBGE", ondelete="NO ACTION", onupdate="CASCADE"), index=True)
    ano = sa.Column(sa.CHAR(4), nullable= False)
    mes = sa.Column(sa.VARCHAR(2), nullable= False)
    ocorrencia = sa.Column(sa.VARCHAR(100), nullable= False)
    qtde = sa.Column(sa.INTEGER, nullable=False)

try:
    base.metadata.create_all(engine) #criar tabelas
    print("Tabelas criadas")
    
except ValueError:
    ValueError()