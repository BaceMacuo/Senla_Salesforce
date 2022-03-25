import { LightningElement, api, wire, track} from 'lwc';
import main from '@salesforce/apex/ControlLwcCorusel.main';

export default class CoruselImgComp extends LightningElement {
    @api recordId;
    @track attachImg = [];
    connectedCallback() {
        this.currenRecordId = this.recordId;
        main({caseId: this.currenRecordId})
        .then(result => {
            if (result) {
            this.attachImg = result;
            }
        }).catch(error => {

        })
    }
    // @wire(main, { caseId: '$currenRecordId' }) attachImg;
}