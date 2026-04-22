IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.ObjetRequeteListeMessagerie = void 0;
    const ObjetRequeteJSON_1 = require('ObjetRequeteJSON');
    const CollectionRequetes_1 = require('CollectionRequetes');
    const ObjetListeElements_1 = require('ObjetListeElements');
    const ObjetTri_1 = require('ObjetTri');
    const TypeOrigineCreationEtiquetteMessage_1 = require('TypeOrigineCreationEtiquetteMessage');
    const Enumere_Espace_1 = require('Enumere_Espace');
    class ObjetRequeteListeMessagerie extends ObjetRequeteJSON_1.ObjetRequeteConsultation {
      lancerRequete(aParametres) {
        const lParametres = $.extend({}, aParametres);
        $.extend(this.JSON, lParametres);
        if (!!this.JSON.listeRessources) {
          this.JSON.listeRessources.setSerialisateurJSON({
            ignorerEtatsElements: true,
          });
        }
        return this.appelAsynchrone();
      }
      actionApresRequete() {
        const lTriEtiquette = [
          ObjetTri_1.ObjetTri.init((D) => {
            switch (D.getGenre()) {
              case 1000:
                return -1;
              case TypeOrigineCreationEtiquetteMessage_1
                .TypeOrigineCreationEtiquetteMessage.OCEM_Pre_Archive:
                return 1;
              case TypeOrigineCreationEtiquetteMessage_1
                .TypeOrigineCreationEtiquetteMessage.OCEM_Pre_Brouillon:
                return 2;
              default:
                return 100;
            }
          }),
          ObjetTri_1.ObjetTri.init('Libelle'),
        ];
        this.JSONReponse.listeEtiquettes.setTri(lTriEtiquette).trier();
        for (let I = 0; I < this.JSONReponse.listeMessagerie.count(); I++) {
          const lLigne = this.JSONReponse.listeMessagerie.get(I);
          lLigne.indice = I;
          lLigne.estUneDiscussion = !!lLigne.estUneDiscussion;
          if (lLigne.indicePere >= 0) {
            lLigne.pere = this.JSONReponse.listeMessagerie.get(
              lLigne.indicePere,
            );
            if (lLigne.estUneDiscussion) {
              lLigne.pere.estUnDeploiement = true;
              lLigne.pere.estDeploye = true;
            }
            if (!!lLigne.contexte && !!lLigne.pere && !lLigne.pere.contexte) {
              lLigne.pere.contexte = lLigne.contexte;
            }
          }
          if (this.JSONReponse.listeEtiquettes) {
            if (!lLigne.listeEtiquettes) {
              lLigne.listeEtiquettes =
                new ObjetListeElements_1.ObjetListeElements();
            } else {
              lLigne.listeEtiquettes.parcourir((aEtiquette) => {
                const lTrouve =
                  this.JSONReponse.listeEtiquettes.getElementParNumero(
                    aEtiquette.getNumero(),
                  );
                Object.assign(aEtiquette, lTrouve);
                if (
                  aEtiquette.getGenre() ===
                  TypeOrigineCreationEtiquetteMessage_1
                    .TypeOrigineCreationEtiquetteMessage.OCEM_Pre_Archive
                ) {
                  lLigne.archive = true;
                } else if (
                  aEtiquette.getGenre() ===
                  TypeOrigineCreationEtiquetteMessage_1
                    .TypeOrigineCreationEtiquetteMessage.OCEM_Pre_Poubelle
                ) {
                  lLigne.poubelle = true;
                }
              });
            }
            lLigne.listeEtiquettes.setTri(lTriEtiquette).trier();
          }
        }
        if (
          GEtatUtilisateur.GenreEspace ===
            Enumere_Espace_1.EGenreEspace.PrimParent ||
          GEtatUtilisateur.GenreEspace ===
            Enumere_Espace_1.EGenreEspace.Mobile_PrimParent
        ) {
          const lFuncChangerNumero = function (aEtiquette, aContexte) {
            if (!!aContexte) {
              aEtiquette.Numero =
                aEtiquette.Numero + '_' + aContexte.getNumero();
            }
          };
          this.JSONReponse.listeEtiquettes.parcourir((D) => {
            if (
              D.getGenre() ===
              TypeOrigineCreationEtiquetteMessage_1
                .TypeOrigineCreationEtiquetteMessage.OCEM_Pre_CarnetLiaison
            ) {
              lFuncChangerNumero(D, D.contexte);
            }
          });
          this.JSONReponse.listeMessagerie.parcourir((aMessage) => {
            if (!!aMessage.listeEtiquettes) {
              aMessage.listeEtiquettes.parcourir((D) => {
                if (
                  D.getGenre() ===
                  TypeOrigineCreationEtiquetteMessage_1
                    .TypeOrigineCreationEtiquetteMessage.OCEM_Pre_CarnetLiaison
                ) {
                  lFuncChangerNumero(D, aMessage.contexte);
                }
              });
            }
          });
        }
        this.callbackReussite.appel(this.JSONReponse);
      }
    }
    exports.ObjetRequeteListeMessagerie = ObjetRequeteListeMessagerie;
    CollectionRequetes_1.Requetes.inscrire(
      'ListeMessagerie',
      ObjetRequeteListeMessagerie,
    );
  },
  fn: 'objetrequetelistemessagerie.js',
});