import {Injectable} from '@angular/core';
import {Pupil} from '../models/pupil.model';
// import * as uuid from 'uuid';

@Injectable({
    providedIn: 'root'
})
export class PupilService {
    private inMemoryDatabase: Pupil[];

    constructor() {
        this.inMemoryDatabase = [];
    }

    public getAll(): Pupil[] {
        return this.inMemoryDatabase;
    }

    public create(req: { firstname: string, lastname: string, birthdate: string }): Pupil {
        throw new Error('Not Implemented');
    }

    public delete(uuid: string): boolean {
        throw new Error('Not Implemented');
    }

    public getByYearOfBirth(): { [year: number]: Pupil[] } {
        throw new Error('Not Implemented');
    }
}
