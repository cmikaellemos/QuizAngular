(function () {
    var MyAppModule = angular.module('MyApp');

    var QuestionsController = function ($scope, $stateParams, $mdDialog) {

        $scope.objSelected = false;

        if($stateParams.obj === 'Historia'){
            $scope.objSelected = [{
                question: 'Quem descobriu o Brasil?',
                items: ['Tiririca', 'Pedro Alvarez Cabral', 'Colombo', 'Lula', 'Temer'],
                correctitem: '1',
                isShowDetail: false
            }, {
                question: 'A Era Vargas é o período da história nacional em que o Brasil foi governado por Getúlio ' +
                'Vargas. A alternativa que corresponde corretamente à data do período citado é?',
                items: ['1930-1954','1930-1940','1940-1945','1930-1945','1930-1964'],
                correctitem: '4',
                isShowDetail: false
            }, {
                question: 'Qual o nome do deus do vinho na mitologia grega?',
                items: ['Apolo','Ares','Dioniso','Hércules','Zeus'],
                correctitem: '2',
                isShowDetail: false
            }, {
                question: 'Onde viviam os deuses gregos?',
                items: ['Arcádia','Atlântida','Olimpo','Campos Elísios','Palácio de cristal'],
                correctitem: '2',
                isShowDetail: false
            }, {
                question: 'Qual o nome do deus grego da guerra?',
                items: ['Zeus','Quírion','Ésquilo','Ares','Poseidon'],
                correctitem: '0',
                isShowDetail: false
            }];
        }
        if($stateParams.obj === 'Quimica'){
            $scope.objSelected = [{
                question: 'Qual é a símbolo do enxofre?',
                items: ['E','X','S','Xo','Fr'],
                correctitem: '2',
                isShowDetail: false
            }, {
                question: 'Quem criou (organizou) a tabela periódica?',
                items: ['Isaac Newton','Lavoisier','Mendeleev','Albert Einstein','Marie Curie'],
                correctitem: '2',
                isShowDetail: false
            }, {
                question: 'Qual é o símbolo do potássio (elemento)?',
                items: ['P','Pt','T','Pk','K'],
                correctitem: '4',
                isShowDetail: false
            }, {
                question: 'O que diz a Lei da Conservação da Massa?',
                items: ['Um corpo em repouso , permanece em repouso','Na natureza nada se cria, nada se perde, tudo se ' +
                'transforma','Toda ação, consequentemente, tem uma reação','Calor = Temperatura','Temperatura é o grau ' +
                'de agitação das moléculas de um corpo.'],
                correctitem: '1',
                isShowDetail: false
            }, {
                question: 'Qual é o elemento predominante na banana?',
                items: ['Potássio','Cálcio','Nitrogênio','Flúor','Ouro'],
                correctitem: '0',
                isShowDetail: false
            }];
        }
        if($stateParams.obj === 'Geografia'){
            $scope.objSelected = [{
                question: 'Qual é a capital do Vietnã?',
                items: ['Zaberg','Bruxelas','Hanói','Bogotá', 'Viena'],
                correctitem: '2',
                isShowDetail: false
            }, {
                question: 'Qual é a capital da Bélgica?',
                items: ['Bruxelas','Amsterdã','Berlin','Bangcoc','Oslo'],
                correctitem: '0',
                isShowDetail: false
            }, {
                question: 'Dublin é a capital da:',
                items: ['Malásia','Venezuela','China','Áustria','Irlanda'],
                correctitem: '4',
                isShowDetail: false
            }, {
                question: 'Qual é a capital do Canadá?',
                items: ['Varsóvia','Ottawa','Moscou','Berlim','Cairo'],
                correctitem: '1',
                isShowDetail: false
            }, {
                question: 'A capital da Tailândia é:',
                items: ['Kuala Lumpur','Santiago','Bangcoc','Caracas','Moscou'],
                correctitem: '2',
                isShowDetail: false
            }];
        }
        if($stateParams.obj === 'Biologia'){
            $scope.objSelected = [{
                question: 'Qual significado de DNA?',
                items: ['Ácido Ribonucleico','Ácido Dexorribonucleíco','Base Adenina Nitrogenada','Purina Ácido Pirimid' +
                'ina','Nenhuma das anteriores'],
                correctitem: '1',
                isShowDetail: false
            }, {
                question: 'Quais são as bases nitrogenadas presentes no DNA ?',
                items: ['Adenina, Tinina, Guanina, Uracila','Adenina, Timina, Citosina, Guanina','Uracila, Timina, Cito' +
                'sina, Adenina','Uracila, Timina, Guanina, Citosina','Nenhuma das anteriores'],
                correctitem: '1',
                isShowDetail: false
            }, {
                question: 'Em que parte da célula o RNA realiza a função de sintetizar proteínas?',
                items: ['No núcleo','No citoplasma','No genoma','Na dupla hélice','Nenhuma das anteriores'],
                correctitem: '0',
                isShowDetail: false
            }, {
                question: 'Qual destas é uma das funções do esqueleto?',
                items: ['Proteção de órgãos vitais','Armazenamento de íons','Sustentação e conformação','Sistema de ' +
                'alavancas','Todas as anteriores.'],
                correctitem: '4',
                isShowDetail: false
            }, {
                question: 'A dureza de um osso é possível graças a:',
                items: ['Ferro','Substâncias minerais','Substâncias tóxicas','Substâncias hipertróficas','Luz do sol'],
                correctitem: '1',
                isShowDetail: false
            }];
        }

        $scope.choiceItem = '';

        $scope.showDetail = function(obj) {
            obj.isShowDetail = true;
        };

        $scope.closeDetail = function(obj) {
            obj.isShowDetail = false;
        };


        $scope.verifyQuestion = function (obj, choice, ev) {
            console.log(obj);
            console.log(choice);
            if(obj.correctitem === choice) {
                text = 'Resposta correta';
            }
            else {
                text = 'Resposta errada';
            }
            $mdDialog.show(
                $mdDialog.alert()
                    .parent(angular.element(document.querySelector('#popupContainer')))
                    .clickOutsideToClose(true)
                    .textContent(text)
                    .ok('Fechar')
                    .targetEvent(ev)
            );
        }
    };

    QuestionsController.$inject = ['$scope', '$stateParams', '$mdDialog'];

    MyAppModule.controller('QuestionsController', QuestionsController);
}());