IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.TypeOrigineCreationEtiquetteMessageUtil =
      exports.TypeOrigineCreationEtiquetteMessage = void 0;
    var TypeOrigineCreationEtiquetteMessage;
    (function (TypeOrigineCreationEtiquetteMessage) {
      TypeOrigineCreationEtiquetteMessage[
        (TypeOrigineCreationEtiquetteMessage['OCEM_Utilisateur'] = 0)
      ] = 'OCEM_Utilisateur';
      TypeOrigineCreationEtiquetteMessage[
        (TypeOrigineCreationEtiquetteMessage['OCEM_Pre_Reception'] = 1)
      ] = 'OCEM_Pre_Reception';
      TypeOrigineCreationEtiquetteMessage[
        (TypeOrigineCreationEtiquetteMessage['OCEM_Pre_Archive'] = 2)
      ] = 'OCEM_Pre_Archive';
      TypeOrigineCreationEtiquetteMessage[
        (TypeOrigineCreationEtiquetteMessage['OCEM_Pre_Envoye'] = 3)
      ] = 'OCEM_Pre_Envoye';
      TypeOrigineCreationEtiquetteMessage[
        (TypeOrigineCreationEtiquetteMessage['OCEM_Pre_Brouillon'] = 4)
      ] = 'OCEM_Pre_Brouillon';
      TypeOrigineCreationEtiquetteMessage[
        (TypeOrigineCreationEtiquetteMessage['OCEM_Pre_Poubelle'] = 5)
      ] = 'OCEM_Pre_Poubelle';
      TypeOrigineCreationEtiquetteMessage[
        (TypeOrigineCreationEtiquetteMessage['OCEM_Pre_Signalement'] = 6)
      ] = 'OCEM_Pre_Signalement';
      TypeOrigineCreationEtiquetteMessage[
        (TypeOrigineCreationEtiquetteMessage['OCEM_Expl_Bleu'] = 7)
      ] = 'OCEM_Expl_Bleu';
      TypeOrigineCreationEtiquetteMessage[
        (TypeOrigineCreationEtiquetteMessage['OCEM_Expl_Vert'] = 8)
      ] = 'OCEM_Expl_Vert';
      TypeOrigineCreationEtiquetteMessage[
        (TypeOrigineCreationEtiquetteMessage['OCEM_Expl_Rouge'] = 9)
      ] = 'OCEM_Expl_Rouge';
      TypeOrigineCreationEtiquetteMessage[
        (TypeOrigineCreationEtiquetteMessage['OCEM_Pre_CarnetLiaison'] = 10)
      ] = 'OCEM_Pre_CarnetLiaison';
      TypeOrigineCreationEtiquetteMessage[
        (TypeOrigineCreationEtiquetteMessage['OCEM_Pre_Alerte'] = 11)
      ] = 'OCEM_Pre_Alerte';
      TypeOrigineCreationEtiquetteMessage[
        (TypeOrigineCreationEtiquetteMessage['OCEM_Pre_ContactVS'] = 12)
      ] = 'OCEM_Pre_ContactVS';
      TypeOrigineCreationEtiquetteMessage[
        (TypeOrigineCreationEtiquetteMessage['OCEM_Pre_Conversation'] = 13)
      ] = 'OCEM_Pre_Conversation';
      TypeOrigineCreationEtiquetteMessage[
        (TypeOrigineCreationEtiquetteMessage[
          'OCEM_Pre_InvisiblePlageDesactivee'
        ] = 14)
      ] = 'OCEM_Pre_InvisiblePlageDesactivee';
      TypeOrigineCreationEtiquetteMessage[
        (TypeOrigineCreationEtiquetteMessage['OCEM_Pre_Harcelement'] = 15)
      ] = 'OCEM_Pre_Harcelement';
    })(
      TypeOrigineCreationEtiquetteMessage ||
        (exports.TypeOrigineCreationEtiquetteMessage =
          TypeOrigineCreationEtiquetteMessage =
            {}),
    );
    const TypeOrigineCreationEtiquetteMessageUtil = {
      estEtiquettePerso(aGenreEtiquette) {
        return (
          TypeOrigineCreationEtiquetteMessageUtil.tabEtiquetesPersos.indexOf(
            aGenreEtiquette,
          ) >= 0
        );
      },
      tabEtiquetesPersos: [
        TypeOrigineCreationEtiquetteMessage.OCEM_Utilisateur,
        TypeOrigineCreationEtiquetteMessage.OCEM_Expl_Bleu,
        TypeOrigineCreationEtiquetteMessage.OCEM_Expl_Vert,
        TypeOrigineCreationEtiquetteMessage.OCEM_Expl_Rouge,
      ],
    };
    exports.TypeOrigineCreationEtiquetteMessageUtil =
      TypeOrigineCreationEtiquetteMessageUtil;
  },
  fn: 'typeoriginecreationetiquettemessage.js',
});