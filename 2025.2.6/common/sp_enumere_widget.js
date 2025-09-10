IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.EGenreWidgetUtil = exports.EGenreWidget = void 0;
    var EGenreWidget;
    (function (EGenreWidget) {
      EGenreWidget[(EGenreWidget['discussions'] = 0)] = 'discussions';
      EGenreWidget[(EGenreWidget['casier'] = 1)] = 'casier';
      EGenreWidget[(EGenreWidget['appelNonFait'] = 2)] = 'appelNonFait';
      EGenreWidget[(EGenreWidget['CDTNonSaisi'] = 3)] = 'CDTNonSaisi';
      EGenreWidget[(EGenreWidget['conseilDeClasse'] = 4)] = 'conseilDeClasse';
      EGenreWidget[(EGenreWidget['menuDeLaCantine'] = 5)] = 'menuDeLaCantine';
      EGenreWidget[(EGenreWidget['vieScolaire'] = 6)] = 'vieScolaire';
      EGenreWidget[(EGenreWidget['travailAFaire'] = 7)] = 'travailAFaire';
      EGenreWidget[(EGenreWidget['agenda'] = 8)] = 'agenda';
      EGenreWidget[(EGenreWidget['actualites'] = 9)] = 'actualites';
      EGenreWidget[(EGenreWidget['notes'] = 10)] = 'notes';
      EGenreWidget[(EGenreWidget['QCM'] = 11)] = 'QCM';
      EGenreWidget[(EGenreWidget['EDT'] = 12)] = 'EDT';
      EGenreWidget[(EGenreWidget['ressources'] = 13)] = 'ressources';
      EGenreWidget[(EGenreWidget['kiosque'] = 14)] = 'kiosque';
      EGenreWidget[(EGenreWidget['ressourcePedagogique'] = 15)] =
        'ressourcePedagogique';
      EGenreWidget[(EGenreWidget['DS'] = 16)] = 'DS';
      EGenreWidget[(EGenreWidget['aide'] = 17)] = 'aide';
      EGenreWidget[(EGenreWidget['competences'] = 18)] = 'competences';
      EGenreWidget[(EGenreWidget['coursNonAssures'] = 19)] = 'coursNonAssures';
      EGenreWidget[(EGenreWidget['penseBete'] = 20)] = 'penseBete';
      EGenreWidget[(EGenreWidget['DSEvaluation'] = 21)] = 'DSEvaluation';
      EGenreWidget[(EGenreWidget['RetourEspace'] = 22)] = 'RetourEspace';
      EGenreWidget[(EGenreWidget['carnetDeCorrespondance'] = 23)] =
        'carnetDeCorrespondance';
      EGenreWidget[(EGenreWidget['Encouragement'] = 24)] = 'Encouragement';
      EGenreWidget[(EGenreWidget['TAFARendre'] = 25)] = 'TAFARendre';
      EGenreWidget[(EGenreWidget['IntendanceExecute'] = 26)] =
        'IntendanceExecute';
      EGenreWidget[(EGenreWidget['lienUtile'] = 27)] = 'lienUtile';
      EGenreWidget[(EGenreWidget['partenaireCDI'] = 28)] = 'partenaireCDI';
      EGenreWidget[(EGenreWidget['partenaireAgate'] = 29)] = 'partenaireAgate';
      EGenreWidget[(EGenreWidget['incidents'] = 30)] = 'incidents';
      EGenreWidget[(EGenreWidget['donneesVS'] = 31)] = 'donneesVS';
      EGenreWidget[(EGenreWidget['donneesProfs'] = 32)] = 'donneesProfs';
      EGenreWidget[(EGenreWidget['tableauDeBord'] = 33)] = 'tableauDeBord';
      EGenreWidget[(EGenreWidget['communications'] = 34)] = 'communications';
      EGenreWidget[(EGenreWidget['connexionsEnCours'] = 35)] =
        'connexionsEnCours';
      EGenreWidget[(EGenreWidget['partenaireARD'] = 36)] = 'partenaireARD';
      EGenreWidget[(EGenreWidget['personnelsAbsents'] = 37)] =
        'personnelsAbsents';
      EGenreWidget[(EGenreWidget['tachesSecretariatExecute'] = 38)] =
        'tachesSecretariatExecute';
      EGenreWidget[(EGenreWidget['Planning'] = 39)] = 'Planning';
      EGenreWidget[(EGenreWidget['elections'] = 40)] = 'elections';
      EGenreWidget[(EGenreWidget['activite'] = 41)] = 'activite';
      EGenreWidget[(EGenreWidget['enseignementADistance'] = 42)] =
        'enseignementADistance';
      EGenreWidget[(EGenreWidget['TAFPrimaire'] = 43)] = 'TAFPrimaire';
      EGenreWidget[(EGenreWidget['absRetardsJustifiesParents'] = 44)] =
        'absRetardsJustifiesParents';
      EGenreWidget[(EGenreWidget['blogFilActu'] = 45)] = 'blogFilActu';
      EGenreWidget[(EGenreWidget['maintenanceInfoExecute'] = 46)] =
        'maintenanceInfoExecute';
      EGenreWidget[(EGenreWidget['TAFEtActivites'] = 47)] = 'TAFEtActivites';
      EGenreWidget[(EGenreWidget['evenementRappel'] = 48)] = 'evenementRappel';
      EGenreWidget[(EGenreWidget['exclusions'] = 49)] = 'exclusions';
      EGenreWidget[(EGenreWidget['partenaireApplicam'] = 50)] =
        'partenaireApplicam';
      EGenreWidget[(EGenreWidget['commandeExecute'] = 51)] = 'commandeExecute';
      EGenreWidget[(EGenreWidget['registreAppel'] = 52)] = 'registreAppel';
      EGenreWidget[(EGenreWidget['previsionnelAbsServiceAnnexe'] = 53)] =
        'previsionnelAbsServiceAnnexe';
      EGenreWidget[(EGenreWidget['partenaireFAST'] = 54)] = 'partenaireFAST';
      EGenreWidget[(EGenreWidget['modificationEDT'] = 55)] = 'modificationEDT';
      EGenreWidget[(EGenreWidget['RemplacementsEnseignants'] = 56)] =
        'RemplacementsEnseignants';
      EGenreWidget[(EGenreWidget['voteElecMembreBureau'] = 57)] =
        'voteElecMembreBureau';
      EGenreWidget[(EGenreWidget['voteElecElecteur'] = 58)] =
        'voteElecElecteur';
      EGenreWidget[(EGenreWidget['InfosParcoursupLSL'] = 59)] =
        'InfosParcoursupLSL';
      EGenreWidget[(EGenreWidget['documentsASigner'] = 60)] =
        'documentsASigner';
    })(EGenreWidget || (exports.EGenreWidget = EGenreWidget = {}));
    const MethodesObjet_1 = require('MethodesObjet');
    const EGenreWidgetUtil = {
      getNomClasseWidget(aGenreWidget) {
        const lListeKeysWidget =
          MethodesObjet_1.MethodesObjet.enumKeys(EGenreWidget);
        return lListeKeysWidget[aGenreWidget].toLowerCase();
      },
    };
    exports.EGenreWidgetUtil = EGenreWidgetUtil;
  },
  fn: 'enumere_widget.js',
});