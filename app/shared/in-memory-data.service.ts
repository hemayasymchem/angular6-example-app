import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        let heroesPowers = [
            'Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'
        ];

        let heroes = [
            { id: 11, name: 'Mr. Nice', power: 'Really Smart', alterEgo: 'nice' },
            { id: 12, name: 'Narco', power: 'Weather Changer', alterEgo: 'pe' },
            { id: 13, name: 'Bombasto', power: 'Weather Changer', alterEgo: 'bombi' },
            { id: 14, name: 'Celeritas', power: 'Super Hot', alterEgo: 'cele' },
            { id: 15, name: 'Magneta', power: 'Really Smart', alterEgo: 'magne' },
            { id: 16, name: 'RubberMan', power: 'Super Flexible', alterEgo: 'rubb' },
            { id: 17, name: 'Dynama', power: 'Super Flexible', alterEgo: 'dy' },
            { id: 18, name: 'Dr IQ', power: 'Really Smart', alterEgo: 'iq' },
            { id: 19, name: 'Magma', power: 'Super Flexible', alterEgo: 'cold' },
            { id: 20, name: 'Tornado', power: 'Really Smart', alterEgo: 'torny' }
        ];

        return { heroes, heroesPowers };
    }
}