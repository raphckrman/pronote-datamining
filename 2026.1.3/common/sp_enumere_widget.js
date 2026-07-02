IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.TypeGenreHttpWidgetUtil = exports.TypeGenreHttpWidget = void 0;
    const MethodesObjet_1 = require('@librairies/script/Outils/MethodesObjet');
    var TypeGenreHttpWidget;
    (function (TypeGenreHttpWidget) {
      TypeGenreHttpWidget[(TypeGenreHttpWidget['Discussions'] = 0)] =
        'Discussions';
      TypeGenreHttpWidget[(TypeGenreHttpWidget['Casier'] = 1)] = 'Casier';
      TypeGenreHttpWidget[(TypeGenreHttpWidget['AppelNonFait'] = 2)] =
        'AppelNonFait';
      TypeGenreHttpWidget[(TypeGenreHttpWidget['CDTNonSaisi'] = 3)] =
        'CDTNonSaisi';
      TypeGenreHttpWidget[(TypeGenreHttpWidget['ConseilDeClasse'] = 4)] =
        'ConseilDeClasse';
      TypeGenreHttpWidget[(TypeGenreHttpWidget['MenuDeLaCantine'] = 5)] =
        'MenuDeLaCantine';
      TypeGenreHttpWidget[(TypeGenreHttpWidget['VieScolaire'] = 6)] =
        'VieScolaire';
      TypeGenreHttpWidget[(TypeGenreHttpWidget['TravailAFaire'] = 7)] =
        'TravailAFaire';
      TypeGenreHttpWidget[(TypeGenreHttpWidget['Agenda'] = 8)] = 'Agenda';
      TypeGenreHttpWidget[(TypeGenreHttpWidget['Actualites'] = 9)] =
        'Actualites';
      TypeGenreHttpWidget[(TypeGenreHttpWidget['Notes'] = 10)] = 'Notes';
      TypeGenreHttpWidget[(TypeGenreHttpWidget['QCM'] = 11)] = 'QCM';
      TypeGenreHttpWidget[(TypeGenreHttpWidget['EDT'] = 12)] = 'EDT';
      TypeGenreHttpWidget[(TypeGenreHttpWidget['Ressources'] = 13)] =
        'Ressources';
      TypeGenreHttpWidget[(TypeGenreHttpWidget['Kiosque'] = 14)] = 'Kiosque';
      TypeGenreHttpWidget[(TypeGenreHttpWidget['RessourcePedagogique'] = 15)] =
        'RessourcePedagogique';
      TypeGenreHttpWidget[(TypeGenreHttpWidget['DevoirSurveille'] = 16)] =
        'DevoirSurveille';
      TypeGenreHttpWidget[(TypeGenreHttpWidget['Aide'] = 17)] = 'Aide';
      TypeGenreHttpWidget[(TypeGenreHttpWidget['Competences'] = 18)] =
        'Competences';
      TypeGenreHttpWidget[(TypeGenreHttpWidget['CoursNonAssures'] = 19)] =
        'CoursNonAssures';
      TypeGenreHttpWidget[(TypeGenreHttpWidget['PenseBete'] = 20)] =
        'PenseBete';
      TypeGenreHttpWidget[(TypeGenreHttpWidget['DSEvaluation'] = 21)] =
        'DSEvaluation';
      TypeGenreHttpWidget[(TypeGenreHttpWidget['RetourEspace'] = 22)] =
        'RetourEspace';
      TypeGenreHttpWidget[
        (TypeGenreHttpWidget['carnetDeCorrespondance'] = 23)
      ] = 'carnetDeCorrespondance';
      TypeGenreHttpWidget[(TypeGenreHttpWidget['Encouragement'] = 24)] =
        'Encouragement';
      TypeGenreHttpWidget[(TypeGenreHttpWidget['TAFARendre'] = 25)] =
        'TAFARendre';
      TypeGenreHttpWidget[(TypeGenreHttpWidget['IntendanceExecute'] = 26)] =
        'IntendanceExecute';
      TypeGenreHttpWidget[(TypeGenreHttpWidget['LienUtile'] = 27)] =
        'LienUtile';
      TypeGenreHttpWidget[(TypeGenreHttpWidget['PartenaireCDI'] = 28)] =
        'PartenaireCDI';
      TypeGenreHttpWidget[(TypeGenreHttpWidget['PartenaireAgate'] = 29)] =
        'PartenaireAgate';
      TypeGenreHttpWidget[(TypeGenreHttpWidget['Incidents'] = 30)] =
        'Incidents';
      TypeGenreHttpWidget[(TypeGenreHttpWidget['DonneesVS'] = 31)] =
        'DonneesVS';
      TypeGenreHttpWidget[(TypeGenreHttpWidget['DonneesProfs'] = 32)] =
        'DonneesProfs';
      TypeGenreHttpWidget[(TypeGenreHttpWidget['TableauDeBord'] = 33)] =
        'TableauDeBord';
      TypeGenreHttpWidget[(TypeGenreHttpWidget['Communications'] = 34)] =
        'Communications';
      TypeGenreHttpWidget[(TypeGenreHttpWidget['ConnexionsEnCours'] = 35)] =
        'ConnexionsEnCours';
      TypeGenreHttpWidget[(TypeGenreHttpWidget['PartenaireARD'] = 36)] =
        'PartenaireARD';
      TypeGenreHttpWidget[(TypeGenreHttpWidget['PersonnelsAbsents'] = 37)] =
        'PersonnelsAbsents';
      TypeGenreHttpWidget[
        (TypeGenreHttpWidget['tachesSecretariatExecute'] = 38)
      ] = 'tachesSecretariatExecute';
      TypeGenreHttpWidget[(TypeGenreHttpWidget['Planning'] = 39)] = 'Planning';
      TypeGenreHttpWidget[(TypeGenreHttpWidget['elections'] = 40)] =
        'elections';
      TypeGenreHttpWidget[(TypeGenreHttpWidget['activite'] = 41)] = 'activite';
      TypeGenreHttpWidget[(TypeGenreHttpWidget['enseignementADistance'] = 42)] =
        'enseignementADistance';
      TypeGenreHttpWidget[(TypeGenreHttpWidget['tafPrimaire'] = 43)] =
        'tafPrimaire';
      TypeGenreHttpWidget[
        (TypeGenreHttpWidget['absRetardsJustifiesParents'] = 44)
      ] = 'absRetardsJustifiesParents';
      TypeGenreHttpWidget[(TypeGenreHttpWidget['blogFilActu'] = 45)] =
        'blogFilActu';
      TypeGenreHttpWidget[
        (TypeGenreHttpWidget['MaintenanceInfoExecute'] = 46)
      ] = 'MaintenanceInfoExecute';
      TypeGenreHttpWidget[(TypeGenreHttpWidget['TAFEtActivites'] = 47)] =
        'TAFEtActivites';
      TypeGenreHttpWidget[(TypeGenreHttpWidget['EvenementsRappel'] = 48)] =
        'EvenementsRappel';
      TypeGenreHttpWidget[(TypeGenreHttpWidget['Exclusions'] = 49)] =
        'Exclusions';
      TypeGenreHttpWidget[(TypeGenreHttpWidget['PartenaireApplicam'] = 50)] =
        'PartenaireApplicam';
      TypeGenreHttpWidget[(TypeGenreHttpWidget['commandeExecute'] = 51)] =
        'commandeExecute';
      TypeGenreHttpWidget[(TypeGenreHttpWidget['registreAppel'] = 52)] =
        'registreAppel';
      TypeGenreHttpWidget[
        (TypeGenreHttpWidget['previsionnelAbsServiceAnnexe'] = 53)
      ] = 'previsionnelAbsServiceAnnexe';
      TypeGenreHttpWidget[(TypeGenreHttpWidget['PartenaireFAST'] = 54)] =
        'PartenaireFAST';
      TypeGenreHttpWidget[(TypeGenreHttpWidget['ModificationEDT'] = 55)] =
        'ModificationEDT';
      TypeGenreHttpWidget[
        (TypeGenreHttpWidget['RemplacementsEnseignants'] = 56)
      ] = 'RemplacementsEnseignants';
      TypeGenreHttpWidget[(TypeGenreHttpWidget['voteElecMembreBureau'] = 57)] =
        'voteElecMembreBureau';
      TypeGenreHttpWidget[(TypeGenreHttpWidget['voteElecElecteur'] = 58)] =
        'voteElecElecteur';
      TypeGenreHttpWidget[(TypeGenreHttpWidget['InfosParcoursupLSL'] = 59)] =
        'InfosParcoursupLSL';
      TypeGenreHttpWidget[(TypeGenreHttpWidget['documentsASigner'] = 60)] =
        'documentsASigner';
    })(
      TypeGenreHttpWidget ||
        (exports.TypeGenreHttpWidget = TypeGenreHttpWidget = {}),
    );
    exports.TypeGenreHttpWidgetUtil = {
      getNomClasseWidget(aGenreWidget) {
        const lListeKeysWidget =
          MethodesObjet_1.MethodesObjet.enumKeys(TypeGenreHttpWidget);
        return lListeKeysWidget[aGenreWidget].toLowerCase();
      },
    };
  },
  fn: 'enumere_widget.js',
});