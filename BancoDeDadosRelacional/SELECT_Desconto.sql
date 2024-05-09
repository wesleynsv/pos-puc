SELECT 
    p.descricao,
    p.preco_base,
    d.porcentagem_desconto AS desconto_aplicado,
    (p.preco_base * (1 - d.porcentagem_desconto / 100)) AS preco_com_desconto
FROM 
    Produtos p
JOIN 
    Descontos d ON p.id_produto = d.id_produto
WHERE 
    p.id_produto = 101
    AND '2023-04-01' BETWEEN d.data_inicio AND d.data_fim;
