import {Arret} from "./Arret";
import {Annonce} from "./Annonce";

export class Zone{
  private _id: number | undefined;
  private _nom: string;
  private _multiplicateur: number;
  private _arrets: Array<Arret>;
  private _annonces: Array<Annonce>;


  constructor( nom: string, multiplicateur: number, arrets: Array<Arret>, annonces: Array<Annonce>,id?: number) {
    this._id = id;
    this._nom = nom;
    this._multiplicateur = multiplicateur;
    this._arrets = arrets;
    this._annonces = annonces;
  }


  get id(): number | undefined {
    return this._id;
  }

  set id(value: number | undefined) {
    this._id = value;
  }

  get nom(): string {
    return this._nom;
  }

  set nom(value: string) {
    this._nom = value;
  }

  get multiplicateur(): number {
    return this._multiplicateur;
  }

  set multiplicateur(value: number) {
    this._multiplicateur = value;
  }

  get arrets(): Array<Arret> {
    return this._arrets;
  }

  set arrets(value: Array<Arret>) {
    this._arrets = value;
  }

  get annonces(): Array<Annonce> {
    return this._annonces;
  }

  set annonces(value: Array<Annonce>) {
    this._annonces = value;
  }

  static fromJSON(data: any):Zone{
    return new Zone(
      data.nom,
      data.multiplicateur,
      data.arrets,
      data.annonces,
      data.id
    )
  }

  toJSON():any{
    return {
      id: this.id,
      nom: this.nom,
      multiplicateur: this.multiplicateur,
      arrets: this.arrets,
      annonces: this.annonces
    }
  }
}
