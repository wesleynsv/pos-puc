import panda as pd
import sqlalchemy as sa
import sqlalchemy.orm as orm
import ocorrencias as oc

engine = sa.create_engine("sqlite:///BancoDeDadosRelacional//dp.db")
Sessao = orm.sessionmaker(bind = engine)
sessao = Sessao()

RankDP = pd.DataFrame(
sessao.query(
    oc.dp.nome.label("DP"),
    sa.func.sum(oc.ocorrencia.qtde).label("Total")
).join(
    oc.ocorrencia,
    oc.ocorrencia.codDP == oc.dp.codDP
).join(
    oc.municipio,
    oc.ocorrencia.codIBGE == oc.municipio.codIBGE
).where(
    oc.municipio.regiao == "Interior",
    sa.or_(oc.ocorrencia.ocorrencias == "roubo_veiculo", oc.ocorrencia.ocorrencias == "furto_veiculos")
).group_by(
    oc.dp.nome
).order_by(
     sa.func.sum(oc.ocorrencia.qtde).label("Total").desc()
).all()

)
print (RankDP)