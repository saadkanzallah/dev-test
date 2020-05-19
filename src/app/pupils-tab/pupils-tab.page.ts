import {Component, OnInit} from '@angular/core';
import {PupilService} from '../services/pupil.service';
import {Pupil} from '../models/pupil.model';
import {AlertController} from '@ionic/angular';

@Component({
    selector: 'pupils-tab',
    templateUrl: 'pupils-tab.page.html',
    styleUrls: ['pupils-tab.page.scss']
})
export class PupilsTabPage implements OnInit {
    private pupils: Pupil[];
    private stats: { [year: number]: Pupil[] };

    constructor(private readonly pupilService: PupilService,
                private readonly  alertController: AlertController) {
    }

    public ngOnInit() {
        this.refresh();
    }

    public async add() {
        const alert = await this.alertController.create({
            header: 'Create a new pupil',
            inputs: [
                {
                    name: 'firstname',
                    type: 'text',
                    placeholder: 'Firstname'
                },
                {
                    name: 'lastname',
                    type: 'text',
                    placeholder: 'Lastname'
                },
                {
                    name: 'birthdate',
                    type: 'date',
                    label: 'Birthdate'
                }
            ],
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    cssClass: 'secondary',
                }, {
                    text: 'Save',
                    handler: data => {
                        this.pupilService.create(data);
                        this.refresh();
                    }
                }
            ]
        });
        await alert.present();
    }

    public delete(pupil: Pupil) {
        this.pupilService.delete(pupil.uuid);
        this.refresh();
    }

    private refresh() {
        this.pupils = this.pupilService.getAll();
        this.stats = this.pupilService.getByYearOfBirth();
    }
}
