import {Annonce} from "./Annonce";
import {TrancheHoraire} from "./TrancheHoraire";
import {Client} from "./Client";
import {Zone} from "./Zone";
export class AnnonceHtml extends Annonce{
  private _contenu: string;


  constructor(titre: string, description: string, dateDeDebut: Date, dateDeFin: Date, dateDeCreation: Date, zones: Array<Zone>, trancheHoraires: Array<TrancheHoraire>, client: Client, contenu: string, id?: number) {
    super(titre, description, dateDeDebut, dateDeFin, dateDeCreation, zones, trancheHoraires, client, id);
    this._contenu = contenu;
  }


  get contenu(): string {
    return this._contenu;
  }

  set contenu(value: string) {
    this._contenu = value;
  }

  static override fromJSON(data: any):AnnonceHtml{
    return new AnnonceHtml(
      data.titre,
      data.description,
      data.dateDeDebut,
      data.dateDeFin,
      data.dateDeCreation,
      data.zones,
      data.trancheHoraires,
      data.client,
      data.contenu,
      data.id
   )
  }

  override toJSON():any {
    let res = super.toJSON();
    res.contenu = this.contenu;
    return res;
  }
}
