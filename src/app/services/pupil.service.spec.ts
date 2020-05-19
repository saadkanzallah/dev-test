import {TestBed} from '@angular/core/testing';
import {PupilService} from './pupil.service';

describe('PupilService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));

    it('should be created', () => {
        const service: PupilService = TestBed.get(PupilService);
        expect(service).toBeTruthy();
    });

    describe('create', () => {
        it('should create a new pupil', () => {
            const service: PupilService = TestBed.get(PupilService);
            const pupil = service.create({firstname: 'John', lastname: 'Doe', birthdate: '2019-01-01'});
            expect(pupil.firstname).toBe('John');
            expect(pupil.lastname).toBe('Doe');
            expect(pupil.birthdate).toBe('2019-01-01');
            expect(pupil.uuid).toBeDefined();
            expect(service.getAll().length).toBe(1);
        });

        it('should throw error for empty request', () => {
            const service: PupilService = TestBed.get(PupilService);
            expect(() => service.create(undefined)).toThrow();
        });

        it('should throw error for empty firstname', () => {
            const service: PupilService = TestBed.get(PupilService);
            expect(() => service.create({firstname: undefined, lastname: 'Doe', birthdate: '2019-01-01'})).toThrow();
        });

        it('should throw error for empty lastname', () => {
            const service: PupilService = TestBed.get(PupilService);
            expect(() => service.create({firstname: 'John', lastname: undefined, birthdate: '2019-01-01'})).toThrow();
        });

        it('should throw error for empty birthdate', () => {
            const service: PupilService = TestBed.get(PupilService);
            expect(() => service.create({firstname: 'John', lastname: 'Doe', birthdate: undefined})).toThrow();
        });

        it('should throw error if pupil already exist', () => {
            const service: PupilService = TestBed.get(PupilService);
            service.create({firstname: 'John', lastname: 'Doe', birthdate: '2019-01-01'});
            expect(() => service.create({firstname: 'joHn', lastname: 'doE', birthdate: '2019-01-01'})).toThrow();
        });
    });

    describe('delete', () => {
        it('should delete a pupil', () => {
            const service: PupilService = TestBed.get(PupilService);
            const pupil = service.create({firstname: 'John', lastname: 'Doe', birthdate: '2019-01-01'});
            expect(service.getAll().length).toBe(1);
            service.delete(pupil.uuid);
            expect(service.getAll().length).toBe(0);
        });
    });

    describe('getByYearOfBirth', () => {
        it('should create stats', () => {
            const service: PupilService = TestBed.get(PupilService);
            service.create({firstname: 'John', lastname: 'Doe', birthdate: '2019-01-01'});
            service.create({firstname: 'Jack', lastname: 'Smith', birthdate: '2018-01-01'});
            service.create({firstname: 'Jane', lastname: 'Doe', birthdate: '2017-01-01'});
            service.create({firstname: 'Helen', lastname: 'Smith', birthdate: '2018-01-01'});
            const stats = service.getByYearOfBirth();
            expect(stats).toBeDefined();
            expect(stats['2019']).toBeDefined();
            expect(stats['2018']).toBeDefined();
            expect(stats['2017']).toBeDefined();
            expect(stats['2019'].length).toBe(1);
            expect(stats['2018'].length).toBe(2);
            expect(stats['2017'].length).toBe(1);
        });
    });
});
