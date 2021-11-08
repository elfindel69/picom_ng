import { Utilisateur } from "./Utilisateur";


export class Administrateur extends Utilisateur{
  constructor(prenom: string, nom: string, email: string, password: string, dateInscription: Date,id?:number){
    super(prenom,nom,email,password,dateInscription,id)
  }

  static override fromJSON(adminAsJSON:any):Administrateur{
    return new Administrateur(
      adminAsJSON.prenom,
      adminAsJSON.nom,
      adminAsJSON.email,
      adminAsJSON.password,
      adminAsJSON.dateInscription,
      adminAsJSON.id);
  }

  override toJSON():any{
    return super.toJSON();
  }
}
