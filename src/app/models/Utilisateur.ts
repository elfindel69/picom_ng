export class Utilisateur{
  private _id: number | undefined;
  private _prenom: string;
  private _nom: string;
  private _email: string;
  private _password: string;
  private _dateInscription: Date;


  constructor(prenom: string, nom: string, email: string, password: string, dateInscription: Date,id?:number) {
    this._id = id;
    this._prenom = prenom;
    this._nom = nom;
    this._email = email;
    this._password = password;
    this._dateInscription = dateInscription;
  }


  get id(): number | undefined {
    return this._id;
  }

  set id(value: number | undefined) {
    this._id = value;
  }

  get prenom(): string {
    return this._prenom;
  }

  set prenom(value: string) {
    this._prenom = value;
  }

  get nom(): string {
    return this._nom;
  }

  set nom(value: string) {
    this._nom = value;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get password(): string {
    return this._password;
  }

  set password(value: string) {
    this._password = value;
  }

  get dateInscription(): Date {
    return this._dateInscription;
  }

  set dateInscription(value: Date) {
    this._dateInscription = value;
  }

  static fromJSON(utilisateurAsJson: any):Utilisateur{
    return new Utilisateur(
      utilisateurAsJson.prenom,
      utilisateurAsJson.nom,
      utilisateurAsJson.email,
      utilisateurAsJson.password,
      utilisateurAsJson.dateInscription,
      utilisateurAsJson.id
      )
  }

  toJSON():any{
    return {
      id: this.id,
      prenom: this.prenom,
      nom: this.nom,
      email: this.email,
      password: this.password,
      dateInscription: this.dateInscription,
    }
  }
}
