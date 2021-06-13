export class Pass {
    pk: string;
    sk: string;
    date: Date;
    email: string;
    facilityName: string;
    firstName: string;
    lastName: string;
    numberOfGuests: string;
    passStatus: string;
    registrationNumber: string;
    type: string;
    constructor(obj?: any) {
        this.pk = obj && obj.pk || null;
        this.sk = obj && obj.sk || null;
        this.date = obj && obj.date || null;
        this.email = obj && obj.email || null;
        this.facilityName = obj && obj.facilityName || null;
        this.firstName = obj && obj.firstName || null;
        this.lastName = obj && obj.lastName || null;
        this.numberOfGuests = obj && obj.numberOfGuests || null;
        this.passStatus = obj && obj.passStatus || null;
        this.registrationNumber = obj && obj.registrationNumber || null;
        this.type = obj && obj.type || null;
    }
}

export class PostPass {
    numberOfGuests: string;
    lastName: string;
    email: string;
    firstName: string;
    date: Date;
    type: string;
    facilityName: string;
    parkName: string;
    constructor(obj?: any) {
        this.numberOfGuests = obj && obj.numberOfGuests || null;
        this.lastName = obj && obj.lastName || null;
        this.email = obj && obj.email || null;
        this.firstName = obj && obj.firstName || null;
        this.date = obj && obj.date || null;
        this.type = obj && obj.type || null;
        this.facilityName = obj && obj.facilityName || null;
        this.parkName = obj && obj.parkName || null;
    }
}