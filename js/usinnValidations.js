function insertValidations(graph){
	graph.multiplicities.push(new mxMultiplicity(
	    true, 'OpeningPoint', null, null, 1, 1, ['PresentationUnit'],
	    'Ponto de Abertura deve ser conectado a uma Unidade de Apresentação', 'null'
	));

	graph.multiplicities.push(new mxMultiplicity(
	    true, 'ClosurePoint', null, null, 0, 0, ['PresentationUnit'],
	    'Ponto de Fechamento não pode navegar para outro componente', 'null'
	));
}