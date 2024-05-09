import panda as pd
import sqlalchemy as sa
import sqlalchemy.orm as orm

engine = sa.create_engine("sqlite:///BancoDeDadosRelacional//dp.db")
Sessao = orm.sessionmaker(bind = engine)
sessao = Sessao()

rankMunic = pd.DataFrame(
sessao.query(
    oc.municipio.municipio.label("Municipio"),
    sa.func.sum(oc.ocorrencia.qtde).label("Total")
).join(
    oc.ocorrencia,
    oc.ocorrencia.codIBGE == oc.municipio.codIBGE
).where(
    oc.ocorrencia.ocorrencia == "roubo_veiculo"
).group_by(
    oc.municipio.municipio
).order_by(
    sa.func.sum(oc.ocorrencia.qtde).desc()
).all()
)

print (rankMunic)

