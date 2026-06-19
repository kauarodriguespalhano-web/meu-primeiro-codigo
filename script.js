document.getElementById('agrinhoForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Captura os valores digitados pelo usuário
    const hectares = parseFloat(document.getElementById('tamanhoTerra').value);
    const plantacao = document.getElementById('tipoPlantacao').value;

    // Fatores de consumo de água (litros aproximados por hectare/dia)
    const consumoAguaPorHectare = {
        soja: 45000,
        milho: 50000,
        arroz: 110000,
        hortalicas: 35000
    };

    // Textos de impactos ambientais baseados nas premissas do Agrinho
    const impactosAmbientais = {
        soja: "A expansão da soja pode gerar compactação do solo e exige rotação de culturas para evitar o esgotamento de nutrientes. Atenção ao uso correto de defensivos para proteger polinizadores.",
        milho: "Consome muitos nutrientes do solo (principalmente nitrogênio). O impacto pode ser reduzido com o plantio direto e a integração lavoura-pecuária sugerida pelo Agrinho.",
        arroz: "O arroz irrigado por inundação tem altíssimo consumo de água e emite gás metano. O manejo correto da água reduz o desperdício nos mananciais locais.",
        hortalicas: "Exige uso frequente de água e fertilizantes. O risco é a lixiviação de químicos para o lençol freático. Recomenda-se o uso de irrigação por gotejamento para economizar até 50% de água."
    };

    // Realiza o cálculo
    const aguaTotal = hectares * consumoAguaPorHectare[plantacao];

    // Exibe os resultados formatados na tela
    document.getElementById('litrosAgua').innerText = aguaTotal.toLocaleString('pt-BR');
    document.getElementById('textoImpacto').innerText = impactosAmbientais[plantacao];

    // Mostra a área de resultados tirando a classe 'hidden'
    document.getElementById('resultado').classList.remove('hidden');
});
