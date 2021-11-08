import { CarteBancaire } from "./CarteBancaire";
import { Utilisateur } from "./Utilisateur";
import {Annonce} from "./Annonce";

export class Client extends Utilisateur{

  private _telephone: string;
  private _carteBancaires: Array<CarteBancaire>;
  private _annonces: Array<Annonce>;


  constructor(prenom: string, nom: string, email: string, password: string, dateInscription: Date, telephone: string, carteBancaires: Array<CarteBancaire>, annonces: Array<Annonce>,id?: number) {
    super(prenom, nom, email, password, dateInscription, id);
    this._telephone = telephone;
    this._carteBancaires = carteBancaires;
    this._annonces = annonces;
  }

  get telephone(): string {
    return this._telephone;
  }

  set telephone(value: string) {
    this._telephone = value;
  }


  get carteBancaires(): Array<CarteBancaire> {
    return this._carteBancaires;
  }

  set carteBancaires(value: Array<CarteBancaire>) {
    this._carteBancaires = value;
  }

  get annonces(): Array<Annonce> {
    return this._annonces;
  }

  set annonces(value: Array<Annonce>) {
    this._annonces = value;
  }

  static override fromJSON(data: any):Client{
    return new Client(
      data.prenom,
      data.nom,
      data.email,
      data.password,
      data.dateInscription,
      data.telephone,
      data.carteBancaires,
      data.annonces,
      data.id
    )
  }

  override toJSON():any{
    let res = super.toJSON();
    res.telephone = this.telephone;
    res.carteBancaires = this.carteBancaires;
    res.annonces = this.annonces;

    return res;
  }
}
