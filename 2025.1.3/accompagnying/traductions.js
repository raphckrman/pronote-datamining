﻿IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    module.exports.trad = function (a) {
      a('Precedent', 'Précédent');
      a('Suivant', 'Suivant');
      a('Agrandir', 'Agrandir');
      a('Reduire', 'Réduire');
      a('Ajouter', 'Ajouter');
      a('Modifier', 'Modifier');
      a('Supprimer', 'Supprimer');
      a('Dupliquer', 'Dupliquer');
      a('Imprimer', 'Imprimer');
      a('ApercuAvantImpression', 'Aperçu avant impression...');
      a(
        'MessageImpression',
        "L'impression n'est pas possible ici mais vous pouvez utiliser le bouton d'impression depuis votre espace si l'impression est disponible pour l'affichage souhaité.",
      );
      a('Legende', 'Légende');
      a('Annuler', 'Annuler');
      a('Valider', 'Valider');
      a('Fermer', 'Fermer');
      a('Editer', 'Editer');
      a('SansTitre', 'Sans titre');
      a('Bloc.Documents', 'Documents');
      a('Ferie', 'Férié');
      a('Feriee', 'Fériée');
      a('VacancesEtJoursFeries', 'Vacances et jours fériés');
      a('PhotoDe_S', 'Photo de %s');
      a('PhotoNonAutoriseeDe_S', 'Photo de %s (non autorisée)');
      a('AjouterDesPiecesJointes', 'Ajouter des pièces jointes');
      a('VoirParametresAffichage', "Voir les paramètres d'affichage");
      a('VueChronologique', 'Vue chronologique');
      a('VueHebdomadaire', 'Vue hebdomadaire');
      a('unite.O', 'o');
      a('unite.Ko', 'Ko');
      a('unite.Mo', 'Mo');
      a('unite.Go', 'Go');
      a('MsgConfirmSupprDe', 'Confirmez-vous la suppression de %s ?');
      a('QRCode', 'QRCode');
      a('ChampsObligatoires', 'Champs obligatoires');
      a('MarqueurChampsObligatoires', '*');
      a('principal.fermer', 'Fermer');
      a('principal.oui', 'Oui');
      a('principal.non', 'Non');
      a('principal.annuler', 'Annuler');
      a('principal.affecter', 'Affecter');
      a('liste.doublon', 'Ce nom est déjà dans la liste !');
      a('liste.doublonNom', '"%s" est déjà dans la liste !');
      a('liste.creationImpossible', 'Création impossible');
      a('liste.editionImpossible', 'Edition impossible');
      a('liste.suppressionImpossible', 'Suppression impossible');
      a(
        'liste.suppressionMotifImpossible',
        "Suppression impossible, ce motif est utilisé dans d'autres projets",
      );
      a('liste.suppressionSelection', 'Voulez-vous supprimer la sélection ?');
      a('liste.erreurDate', 'La date doit être de la forme dd/mm/aaaa');
      a('liste.erreurHeureMinute', "L'heure doit être comprise entre %s et %s");
      a(
        'liste.tailleMaxSaisie',
        'Vous avez atteint la taille maximale possible.',
      );
      a('liste.creer', 'Créer');
      a('liste.modifier', 'Modifier');
      a('liste.supprimer', 'Supprimer');
      a('liste.nouveau', 'Nouveau');
      a('liste.tri', 'Tri');
      a('liste.toutCocher', 'Tout cocher');
      a('liste.toutDecocher', 'Tout décocher');
      a('liste.total', 'Total');
      a(
        'liste.ClicListeArbo',
        'Cliquer ici pour dérouler ou replier un élément',
      );
      a('liste.DossierObligatoire', 'Dossier obligatoire');
      a('liste.HintBoutonDeploiement', 'Tout réduire / Tout déployer');
      a('liste.HintBoutonMonter', 'Monter');
      a('liste.HintBoutonDescendre', 'Descendre');
      a('liste.HintCopier', 'Copier la liste (format CSV)');
      a('liste.HintBoutonParametre', 'Paramétrer');
      a('liste.TitreExportCSV', 'Export CSV');
      a('liste.PersonnaliserListe', 'Personnalisation de la liste');
      a('liste.ChangerRang', 'Changer de rang');
      a('liste.EchangerRang', 'Echanger de rang');
      a('liste.Rechercher', 'Rechercher dans la liste');
      a('liste.Filtrer', 'Filtrer la liste');
      a('liste.FiltrerActif', 'La liste est filtrée');
      a('liste.BtnAction', 'Cliquer pour déployer les actions');
      a('liste.ElementSelectionne_D', '%d élément sélectionné');
      a('liste.ElementsSelectionnes_D', '%d éléments sélectionnés');
      a('liste.ReinitialiserFiltre', 'Réinitialiser');
      a('liste.wai.EnteteDeListe', 'Entête de liste');
      a(
        'liste.wai.ModifierCoche',
        'Modifiez les cases à cocher avec la touche Barre espace',
      );
      a('liste.wai.WAI_Tri_D', 'Inverser le tri %d');
      a('liste.wai.TrierColonne', 'Trier sur la colonne');
      a('liste.wai.Lu', 'Lu');
      a('liste.wai.MsgRechercheNonTrouve', 'Aucune ligne trouvée');
      a(
        'liste.wai.MsgRechercheNonTrouvePour_S',
        'Aucune ligne trouvée pour "%s"',
      );
      a(
        'liste.wai.MsgRechercheXTrouveesPour_DDS',
        '%d sur %d lignes trouvées pour "%s"',
      );
      a(
        'liste.wai.MsgRechercheXTrouveePour_DDS',
        '%d sur %d ligne trouvée pour "%s"',
      );
      a('liste.wai.CocherLigne', 'Cocher la ligne');
      a('liste.wai.DecocherLigne', 'Décocher la ligne');
      a(
        'fenetreImpression.MessageAlerteImpression',
        "Attention ! Les données qui seront imprimées n'ont pas toutes été validées. Voulez-vous continuer ?",
      );
      a('fenetreImpression.FormatDImpression', "Format d'impression");
      a('fenetreImpression.GrandFormat', 'Grand format');
      a('fenetreImpression.MoyenFormat', 'Moyen format');
      a('fenetreImpression.PetitFormat', 'Petit format');
      a('fenetreImpression.TresPetitFormat', 'Très petit format');
      a('FenetreMentionsLegales.hebergeur', 'Hébergeur');
      a('FenetreMentionsLegales.formeJuridique', 'Forme juridique');
      a(
        'FenetreMentionsLegales.responsablePublication',
        'Responsable de la publication',
      );
      a(
        'FenetreMentionsLegales.informationsComplementaires',
        'Informations complémentaires',
      );
      a(
        'FenetreMentionsLegales.utilisationCookie',
        'Utilisation des cookies :',
      );
      a(
        'FenetreMentionsLegales.informationCookie',
        "Le fonctionnement de %s est garanti par l'utilisation de cookies fonctionnels, ces cookies sont nécessaires au fonctionnement du site. Le dépôt de ces cookies ne requiert pas votre consentement préalable.",
      );
      a(
        'FenetreMentionsLegales.informationCookieSuite',
        "Ces cookies ne sont envoyés qu'au serveur %s auquel vous êtes connecté.",
      );
      a(
        'FenetreMentionsLegales.utilisationCookieTitre',
        'Ces cookies permettent :',
      );
      a(
        'FenetreMentionsLegales.utilisationCookieCASTGC',
        "l'authentification auprès du service, d'assurer la sécurité du mécanisme d'authentification, et de limiter les tentatives d'accès robotisées ou inattendues (nom du cookie : CASTGC) ;",
      );
      a(
        'FenetreMentionsLegales.utilisationCookieLang',
        'la personnalisation de la langue utilisée lors de vos visites sur le site (nom du cookie : ielang).',
      );
      a('FenetreUploadFichiers.Titre', 'Envoyer un fichier');
      a(
        'FenetreUploadFichiers.ChoisissezNatureFichier',
        'Cliquez sur le bouton correspondant à la nature de votre fichier',
      );
      a('FenetreUploadFichiers.deposerAudio', 'Déposer votre enregistrement');
      a(
        'FenetreUploadFichiers.BoutonUnSeulFichier',
        'Un seul fichier (*.pdf, *.doc, ...)',
      );
      a('FenetreUploadFichiers.BoutonFichierAudio', 'Ajouter un fichier audio');
      a('FenetreUploadFichiers.ou', 'ou');
      a(
        'FenetreUploadFichiers.BoutonPlusieursImages',
        'Une ou plusieurs images (*.png, *.jpg, ...)',
      );
      a(
        'FenetreUploadFichiers.SelectionUneParUne',
        "Si votre appareil ne permet pas la multisélection d'images, insérez les une par une",
      );
      a(
        'FenetreUploadFichiers.BoutonUneImage',
        'Ajouter une image (*.png, *.jpg, ...)',
      );
      a('FenetreUploadFichiers.EnvoyerImages', 'Envoyer les images');
      a('EnregistrementAudio.titre', 'Enregistrement direct');
      a('EnregistrementAudio.stop', "Arrêter l'enregistrement");
      a('EnregistrementAudio.record', "Démarrer l'enregistrement");
      a('EnregistrementAudio.encours', 'Enregistrement en cours');
      a('EnregistrementAudio.remplacer', "Remplacer l'enregistrement");
      a('EnregistrementAudio.recommencer', 'Recommencer');
      a('EnregistrementAudio.upload', 'Déposer');
      a('EnregistrementAudio.deposer', 'Déposer un enregistrement');
      a('EnregistrementAudio.depose', 'Enregistrement déposé');
      a('EnregistrementAudio.monEnregistrement', 'Mon enregistrement');
      a(
        'EnregistrementAudio.deposerExistant',
        'Déposer un enregistrement existant',
      );
      a(
        'EnregistrementAudio.suppression',
        "Voulez-vous supprimer l'enregistrement ?",
      );
      a(
        'EnregistrementAudio.suppressionExistant',
        "Voulez-vous supprimer l'enregistrement existant ?",
      );
      a(
        'EnregistrementAudio.msgAutoriser',
        "PRONOTE n'a pas accès à votre microphone.\nVous devez lui donner l'autorisation.",
      );
      a(
        'EnregistrementAudio.msgErreur',
        "PRONOTE n'a pas accès à votre microphone.\nVérifiez que le microphone est bien branché et que PRONOTE a le droit de l'utiliser.",
      );
      a(
        'EnregistrementAudio.echecFormat',
        "Le fichier %s n'est pas dans un format audio autorisé",
      );
      a('fenetreAjoutImagesMultiple.titre', 'Envoyer un fichier');
      a('fenetreAjoutImagesMultiple.deposerUneImage', 'Déposer une image');
      a('fenetre_ActionContextuelle.titre', 'Insérer une pièce jointe');
      a('fenetre_ActionContextuelle.depuisMonPoste', 'Depuis mon poste');
      a(
        'fenetre_ActionContextuelle.depuisMesDocuments',
        'Depuis mes documents',
      );
      a('fenetre_ActionContextuelle.depuisMonCloud', 'Depuis mon cloud');
      a(
        'fenetre_ActionContextuelle.parmiLesDocsENEJ',
        'Parmi les documents de "%s"',
      );
      a('fenetre_ActionContextuelle.prendrePhoto', 'Prendre une photo');
      a(
        'fenetre_ActionContextuelle.prendrePlusieursImages',
        'prendre plusieurs images',
      );
      a('ListeClouds.TitrePDF', 'Génération de PDF');
      a('ListeClouds.TitreCloud', 'Choix du cloud');
      a('ListeClouds.Connecte', 'Connecté');
      a('ListeClouds.Deconnecter', 'Se déconnecter du cloud');
      a(
        'ListeClouds.texteExplicatifClouds',
        'Cliquez sur un cloud pour y déposer le PDF.',
      );
      a('ListeClouds.voirPDF', 'Voir le PDF');
      a('ListeClouds.voirDocument', 'Voir le document');
      a('ListeClouds.hintMessage', 'Commentaire associé au document');
      a('ListeClouds.documentCertifies', 'Documents certifiés');
      a(
        'ListeClouds.infoDocumentCertifies',
        'Informations sur les documents certifiés',
      );
      a(
        'FenetreSaisieVisiosCours.URLAssocieeAuCours',
        'Lien pour une visioconférence',
      );
      a(
        'FenetreSaisieVisiosCours.URLAssocieeAuConseil',
        'Lien pour un conseil en visioconférence',
      );
      a('FenetreSaisieVisiosCours.ChampURL', 'Lien du cours');
      a('FenetreSaisieVisiosCours.ChampLibelleURL', 'Libellé du lien');
      a('FenetreSaisieVisiosCours.ChampCommentaireURL', 'Commentaire');
      a(
        'FenetreSaisieVisiosCours.PlaceholderCommentaire',
        'Rédigez votre commentaire',
      );
      a('FenetreSaisieVisiosCours.ChampObligatoire', 'Champ obligatoire');
      a('FenetreSaisieVisiosCours.MarqueurChampObligatoire', '*');
      a(
        'FenetreSaisieVisiosCours.ChampURLEstObligatoire',
        'Vous devez obligatoirement renseigner un lien.',
      );
      a('FenetreSaisieVisiosCours.TesterURL', 'Tester');
      a('FenetreSaisieVisiosCours.AccederAuCoursVirtuel', 'Lancer la visio');
      a(
        'FenetreSaisieVisiosCours.XCoursEnVisioProgrammes',
        'Au moins un élève "A la maison" a déjà %d cours en visioconférence à cette date',
      );
      a(
        'FenetreSaisieVisiosCours.1CoursEnVisioProgramme',
        '1 cours en visioconférence est déjà programmé pour au moins un élève à cette date',
      );
      a(
        'FenetreSaisieVisiosCours.ConfirmationSuppression',
        'Voulez-vous supprimer ce lien ?',
      );
      a(
        'FenetreSaisieVisiosCours.SaisirContenu1Seance',
        'Editer un lien Visio pour la séance sélectionnée',
      );
      a(
        'FenetreSaisieVisiosCours.SaisirContenuXSeances',
        'Editer un lien Visio pour toutes les séances sélectionnées (%d)',
      );
      a(
        'FenetreSaisieVisiosCours.SaisirContenuToutesSeances',
        'Editer un lien Visio pour toutes les seances de la progression (%d)',
      );
      a(
        'FenetreSaisieVisiosCours.MessagePlusieursSeances1',
        'Vous avez selectionné plusieurs séances',
      );
      a(
        'FenetreSaisieVisiosCours.MessagePlusieursSeances2',
        "A l'issue de la modification, toutes les séances sélectionnées (%s) porteront les mêmes informations liées à la visio.",
      );
      a(
        'FenetreSaisieVisiosCours.MessagePlusieursSeances3',
        'Les éventuelles informations déjà saisies pourraient être écrasées.',
      );
      a(
        'FenetreSaisieVisiosCours.MessagePlusieursSeances4',
        'Souhaitez-vous continuer la modification ?',
      );
      a(
        'FenetreSaisieVisiosCours.MessageToutesSeances1',
        'Vous avez selectionné une visio qui concerne toutes les séances',
      );
      a(
        'FenetreSaisieVisiosCours.MessageToutesSeances2',
        "Une modification impactera l'ensemble des séances de la progression à l'exception de celles ayant déjà un lien spécifique",
      );
      a(
        'FenetreSaisieVisiosCours.PresenceLiens',
        'Présence de liens visios : pour voir le détail, sélectionner les séances une à une.',
      );
      a('FenetreSaisieVisiosCours.Visioconference', 'Visioconférence');
      a('ParametresUtilisateur.Personnalisation', 'Personnalisation');
      a('ParametresUtilisateur.Accessibilite', 'Accessibilité');
      a(
        'ParametresUtilisateur.Accessible_Active',
        'Activer la compatibilité "lecteur d\'écran" pour certains affichages',
      );
      a(
        'ParametresUtilisateur.Accessible_Desactive',
        'Désactiver le mode accessible',
      );
      a('ParametresUtilisateur.Langue', 'Langue');
      a('ParametresUtilisateur.TitreCompte', 'Compte');
      a(
        'ParametresUtilisateur.TitreSecurisationCompte',
        'Sécurisation du compte',
      );
      a('ParametresUtilisateur.TitreMonProfil', 'Mon profil');
      a('ParametresUtilisateur.TitreNotifications', 'Notifications');
      a('ParametresUtilisateur.TitrePreferences', 'Préférences');
      a('ParametresUtilisateur.TitreCommunication', 'Communication');
      a('ParametresUtilisateur.StyleAccessibilite', 'Style et accessibilité');
      a('ParametresUtilisateur.Coordonnees', 'Coordonnées');
      a('ParametresUtilisateur.DroitALImage', "Droit à l'image");
      a('ObjetGrille.TitreInfosDetails', 'Informations détaillées');
      a('ObjetGrille.AucunInfosDetails', 'Aucune informatios détaillés');
      a('Fenetre_SelecteurCouleur.Titre', 'Choix de la couleur');
      a('ModuleEditeurHtml.editeurHtml', 'Editeur HTML');
      a('ModuleEditeurHtml.miseEnForme', 'Mise en forme du texte');
      a('Fenetre_SelectionPublic.SansClasse', 'Sans classe');
      a('Fenetre_SelectionPublic.SansGroupe', 'Sans groupe');
      a('Fenetre_SelectionPublic.Cumul.Label', 'Classer par : ');
      a('Fenetre_SelectionPublic.Cumul.Aucun', 'Ordre alphabétique');
      a('Fenetre_SelectionPublic.Cumul.AttendusEnCours', 'Attendus en cours');
      a(
        'Fenetre_SelectionPublic.CumulLieuEnseignement.Etablissement',
        "dans l'établissement",
      );
      a(
        'Fenetre_SelectionPublic.CumulLieuEnseignement.ALaMaison',
        'à la maison',
      );
      a(
        'Fenetre_SelectionPublic.CumulAttendusEnCours.Detaches',
        'Détachés de ce cours',
      );
      a('Fenetre_SelectionPublic.CumulAttendusEnCours.Attendus', 'Attendus');
      a('Fenetre_SelectionPublic.CumulFamille.SansRubrique', 'Sans rubrique');
      a(
        'Fenetre_SelectionPublic.CumulServicePeriscolaire.Sans',
        'Sans service périscolaire',
      );
      a(
        'Fenetre_SelectionPublic.CumulProjetsAccompagnement.Sans',
        "Sans projets d'accompagnement",
      );
      a(
        'Fenetre_SelectionPublic.AucunDestinataire',
        'Aucun destinataire possible',
      );
      a('Fenetre_SelectionPublic.Preferentiel', 'Préférentiel');
      a('Fenetre_SelectionPublic.EleveDetache', 'élève détaché');
      a(
        'Fenetre_SelectionPublic.AucunAccepteRdv',
        "Aucun individu n'accepte les demandes de rendez-vous",
      );
      a(
        'GenerationPDF.MessageAlerteGenerationPdf',
        'Attention ! Les données non validées seront ignorées. Voulez-vous continuer ?',
      );
      a('GenerationPDF.Generer', 'Générer');
      a('GenerationPDF.TitreCommande', "Générer un PDF pour l'impression");
      a('GenerationPDF.TitreCommandeAucun', 'Aucun PDF pour cet affichage');
      a('GenerationPDF.Orientation', 'Orientation');
      a('GenerationPDF.Portrait', 'Portrait');
      a('GenerationPDF.Paysage', 'Paysage');
      a('GenerationPDF.TaillePolice', 'Taille de police');
      a('GenerationPDF.TaillePoliceSouhaitee', 'Souhaitée');
      a('GenerationPDF.TaillePoliceMinAutorisee', 'Minimale autorisée');
      a(
        'GenerationPDF.EDT.TaillePoliceCours',
        'Taille de police dans les cours',
      );
      a('GenerationPDF.EDT.CouleurCours', 'Couleur des cours');
      a('GenerationPDF.EDT.Aucune', 'Aucune');
      a('GenerationPDF.EDT.FondCouleur', 'Fond en couleur');
      a('GenerationPDF.EDT.TexteCouleur', 'Texte en couleur');
      a('GenerationPDF.EDT.AucunRenvoi', 'Aucun renvoi');
      a('GenerationPDF.EDT.Renvois', 'Renvois');
      a(
        'GenerationPDF.EDT.RenvoiSousChaqueGrille',
        'Sous la grille (max. 3 lignes)',
      );
      a('GenerationPDF.EDT.RenvoiApresChaquePage', 'Sur une nouvelle page');
      a('GenerationPDF.EDT.RenvoiRegroupeFin', 'Regroupés à la fin');
      a('GenerationPDF.EDT.Agencement', 'Agencement');
      a('GenerationPDF.EDT.GrilleDomaine', '1 grille pour toutes les semaines');
      a('GenerationPDF.EDT.GrilleParSemaine', '1 grille par semaine');
      a('GenerationPDF.EDT.DefinitionDesAxes', 'Définition des axes');
      a('GenerationPDF.EDT.HintAxes', 'Permuter les axes');
      a('GenerationPDF.EDT.Horizontal', 'Horizontal');
      a('GenerationPDF.EDT.Vertical', 'Vertical');
      a('GenerationPDF.EDT.Heures', 'Heures');
      a('GenerationPDF.EDT.Sequences', 'Sequences');
      a('GenerationPDF.EDT.Jours', 'Jours');
      a('GenerationPDF.EDT.Semaines', 'Semaines');
      a('GenerationPDF.EDT.Ressources', 'Ressources');
      a('GenerationPDF.EDT.DefinitionDesPlages', 'Définition des plages');
      a(
        'GenerationPDF.EDT.IgnorerLesPlagesSansCours',
        'Ignorer les plages sans cours',
      );
      a(
        'GenerationPDF.ReleveNotes.TaillePoliceNotes',
        'Taille de police pour les notes',
      );
      a(
        'GenerationPDF.ReleveNotes.TaillePolicePied',
        'Taille de police pour les appréciations et le pied',
      );
      a('GenerationPDF.ReleveNotes.HauteurService', "Hauteur d'un service");
      a('GenerationPDF.ReleveNotes.Minimum', 'Minimum');
      a('GenerationPDF.ReleveNotes.Maximum', 'Maximum');
      a(
        'GenerationPDF.ReleveNotes.AdapterHauteurApp',
        'Adapter la hauteur aux appréciations',
      );
      a(
        'GenerationPDF.Bulletin.GererRectoVerso',
        'Gérer le recto/verso (ajout de pages blanches)',
      );
      a('GenerationPDF.Bulletin.choixBulletin', 'Choix du bulletin');
      a(
        'GenerationPDF.Bulletin.choixBulletin_DeLaClasse',
        'Bulletin de la classe',
      );
      a('GenerationPDF.Bulletin.choixBulletin_DeLEleve', "Bulletin de l'élève");
      a(
        'GenerationPDF.Bulletin.choixBulletin_Eleves',
        'Bulletin élève de tous les élèves de la classe',
      );
      a('GenerationPDF.Lien.TitreLienPDF', 'Le PDF a été généré');
      a(
        'GenerationPDF.Lien.LienValidePendant',
        'Ce lien est valide pendant %s secondes',
      );
      a('GenerationPDF.Lien.CliquerIci', 'Cliquer ici pour ouvrir le PDF');
      a(
        'Navigation.Tableau',
        'Utilisez les flèches haut, bas, gauche et droite pour naviguer. ',
      );
      a(
        'Navigation.AvecValidation',
        'Validez votre choix avec les touches Entrée ou Barre espace. ',
      );
      a('Navigation.BarreOnglets', "Barre d'onglets : ");
      a(
        'Navigation.NavigationHorizontal',
        'Utilisez les flèches gauche et droite pour naviguer. ',
      );
      a(
        'Navigation.NavigationVertical',
        'Utilisez les flèches haut et bas pour naviguer. ',
      );
      a(
        'Navigation.NavigationHorizontalAvecValidation',
        'Utilisez les flèches gauche et droite pour naviguer et la barre espace ou entrée pour valider. ',
      );
      a(
        'Navigation.NavigationVerticalAvecValidation',
        'Utilisez les flèches haut et bas pour naviguer et la barre espace ou entrée pour valider. ',
      );
      a(
        'Navigation.CalendrierNavigation',
        'Pour sélectionner la semaine précédente ou suivante, ',
      );
      a(
        'Navigation.CalendrierPrecedent',
        'Sélectionnez la semaine précédente. ',
      );
      a('Navigation.CalendrierSuivant', 'Sélectionnez la semaine suivante. ');
      a(
        'Navigation.ValidezEvenement',
        "les touches Entrée ou Barre espace pour consulter les détails de l'évènement. ",
      );
      a(
        'Navigation.TitreDetailEvenement',
        'Détails des évènements pour la période sélectionnée : ',
      );
      a('Navigation.ItemDesactiver', 'Cet item est désactivé. ');
      a(
        'Navigation.AvecEdition',
        "Activez l'édition avec les touches entrée ou majuscule + entrée. ",
      );
      a(
        'Navigation.Tabulation',
        'Utilisez les touches tabulation ou majuscule + tabulation pour naviguer entre les éléments. ',
      );
      a(
        'Navigation.Supprimer',
        'Supprimez la sélection avec la touche Suppr. ',
      );
      a('Navigation.Fenetre', 'Nouvelle fenêtre, ');
      a('Navigation.NouvelElement', 'Pour ajouter un nouvel élément, ');
      a(
        'Navigation.BarreOngletsPrincipal',
        'menu déroulant, Sélection des onglets et sous-onglets. Utilisez les flèches haut et bas pour naviguer dans un niveau, gauche et droite pour changer de niveau, barre espace ou entrée pour valider, échappe pour fermer le menu. ',
      );
      a('Navigation.SousOnglets', 'sous menu, ');
      a('Navigation.RetourDebutFenetre', 'Retour en début de fenêtre, ');
      a(
        'Navigation.FenetreChoix',
        'Utilisez la touche entrée ou flèche bas pour ouvrir la fenêtre de choix',
      );
      a(
        'Navigation.AideRaccourcisClavier',
        'Pour utiliser les raccourcis clavier, appuyez simultanément sur les touches Alt + Maj + un des chiffres de la partie supérieure du clavier (pas le pavé numérique). ',
      );
      a(
        'Navigation.AideRaccourcisClavierDetails',
        'Menu: Alt + Maj + 0, Contenu: Alt + Maj + 1, Déconnexion: Alt + Maj + 9',
      );
      a(
        'Navigation.AideRaccourcisClavierMacOs',
        'Pour pouvoir utiliser les touches fléchées pour naviguer dans les composants, vous devez désactiver la navigation rapide de VoiceOver.',
      );
      a('Navigation.ObjetSaisieVide', 'La liste ne contient aucune donnée.');
      a('Navigation.MasquerMenu', 'Masquer le menu');
      a('Navigation.AfficherMenu', 'Afficher le menu');
      a('Navigation.MenuPrincipal', 'Menu principal');
      a('Navigation.MenuSecondaire', 'Menu secondaire');
      a('Navigation.MenuDeTroisiemeNiveau', 'Menu de troisième niveau');
      a('WAI.FermerFiche', 'Fermer la fiche');
      a('WAI.FicheCours', 'Ouverture de la fiche de cours');
      a(
        'WAI.ListeSelectionCategorie',
        'Liste déroulante : sélectionnez une catégorie.',
      );
      a('WAI.ZoneDImpression', "Zone d'impression");
      a('infoSond.information', 'Information');
      a('infoSond.sondage', 'Sondage');
      a(
        'infoSond.msgAucun',
        'Aucun sondage ni aucune information ne sont disponibles',
      );
      a('infoSond.msgAucunModele', "Aucun modèle n'est disponible");
      a(
        'infoSond.msgAucunSelection',
        'Sélectionnez une information ou un sondage pour afficher son contenu',
      );
      a('infoSond.repondre', 'Je réponds (%s jours restants)');
      a('infoSond.repondre1', 'Je réponds (dernier jour restant)');
      a(
        'infoSond.msgSurAR',
        'Vous avez pris connaissance de cette information',
      );
      a('infoSond.publicationFutur', 'Publication à venir');
      a('infoSond.publicationPassee', 'Publication passée');
      a('infoSond.sondageDu', 'Sondage du %s');
      a('infoSond.infoDu', 'Information du %s');
      a(
        'infoSond.nonDispoSurMobile',
        "Cette opération n'est pas disponible depuis la version mobile",
      );
      a('infoSond.ajouterPJ', 'Ajouter une pièce jointe');
      a('infoSond.avecPJ', 'Avec pièce jointe');
      a('infoSond.redigerTitre', 'Rédiger le titre');
      a('infoSond.redigerContenuInfo', "Rédiger le contenu de l'information");
      a('infoSond.destinataires', 'Destinataires');
      a('infoSond.parClasses', 'par classes');
      a('infoSond.ouGroupes', 'ou groupes');
      a('infoSond.aTitreIndiv', 'à titre individuel');
      a('infoSond.recus', 'Reçus');
      a('infoSond.diffuses', 'Diffusés');
      a('infoSond.enCours', 'En cours');
      a('infoSond.aVenir', 'À venir');
      a('infoSond.passes', 'Passés');
      a('infoSond.brouillons', 'Brouillons');
      a('infoSond.modelesSondage', 'Modèles de sondage');
      a('infoSond.modelesInfo', "Modèles d'information");
      a(
        'infoSond.detailPartageSondage',
        '%s accède au sondage en consultation',
      );
      a(
        'infoSond.detailPartageSondN',
        '%s personnes accèdent au sondage en consultation',
      );
      a('infoSond.Edit.dupliquerQu', 'Dupliquer la question');
      a('infoSond.Edit.dupliquerTxt', 'Dupliquer le texte');
      a('infoSond.creerBrouillon', 'Créer le brouillon');
      a('infoSond.publier', 'Publier');
      a('infoSond.modelepartage', 'Modèle partagé');
      a('infoSond.categorie', 'Catégorie');
      a('infoSond.libelleTitre', 'Titre');
      a(
        'infoSond.Edition.LabelFiltreDestinataire',
        'Afficher tous les destinataires',
      );
      a('infoSond.Edition.FiltreTous', 'Afficher tous les destinataires');
      a(
        'infoSond.Edition.FiltreRepondu',
        'Afficher uniquement les personnes ayant répondu',
      );
      a(
        'infoSond.Edition.FiltreNonRepondu',
        "Afficher uniquement les personnes n'ayant pas répondu",
      );
      a('infoSond.reponseSurNbTotal', '%s réponse / %s');
      a('infoSond.reponsesSurNbTotal', '%s réponses / %s');
      a('infoSond.reponseManquanteSurNbTotal', '%s réponse manquante / %s');
      a('infoSond.reponsesManquantesSurNbTotal', '%s réponses manquantes / %s');
      a('infoSond.TauxLecture', 'taux de lecture');
      a('infoSond.TauxReponse', 'taux de réponse');
      a('infoSond.DocumentsJoints', 'Documents joints');
      a('infoSond.DocumentJoint', 'Document joint');
      a('infoSond.Categories', 'Catégories');
      a('infoSond.Contenu', 'Contenu');
      a('infoSond.altImgViewer', "Image de l'information");
      a('TAFEtContenu.donneLe', 'Donné le');
      a('TAFEtContenu.TAFFait', 'Fait');
      a('TAFEtContenu.TAFNonFait', 'Non Fait');
      a('TAFEtContenu.cbTermine', "J'ai terminé");
      a('TAFEtContenu.aVenir', 'A venir');
      a('TAFEtContenu.hebdomadaire', 'Hebdomadaire');
      a('TAFEtContenu.pourLe', 'pour le');
      a('TAFEtContenu.pour', 'pour');
      a('TAFEtContenu.jours', 'Jours');
      a('TAFEtContenu.jour', 'Jour');
      a('TAFEtContenu.Fait', 'Fait');
      a('TAFEtContenu.AFaire', 'A faire');
      a('TAFEtContenu.executerQCM', 'Exécuter le QCM');
      a('TAFEtContenu.voirQCM', 'Voir le corrigé');
      a(
        'TAFEtContenu.aucunTAFSelonCriteres',
        'Aucun travail à faire selon les critères choisis',
      );
      a('TAFEtContenu.toutesLesMatieres', 'Toutes les matières');
      a(
        'TAFEtContenu.suppressionCopieEleve',
        'Voulez-vous supprimer la copie ?',
      );
      a(
        'FenetreDevoir.ValeurComprise',
        'La valeur doit être comprise entre #1 et #2',
      );
      a('connexion.ErreurConnexionInterrompue', 'Connexion interrompue !');
      a('connexion.Deconnecter', 'Vous avez été déconnecté');
      a('connexion.SeConnecter', 'Se connecter');
      a('connexion.EchecChargement', 'Échec lors du chargement de la page');
      a(
        'connexion.PageIndisponible',
        'La page que vous recherchez est actuellement indisponible ou inexistante.',
      );
      a('connexion.AffichagePageImpossible', "Impossible d'afficher la page");
      a('connexion.Erreur', 'Erreur');
      a('connexion.DeconnexionEnCours', 'Déconnexion en cours');
      a(
        'connexion.DeconnexionSaisieNonValidee',
        "Vous n'avez pas validé votre saisie.",
      );
      a('connexion.ConfirmezDeconnexion', 'Confirmez-vous la déconnexion ?');
      a('connexion.MessageVeuillezPatienter', 'Veuillez patienter...');
      a('connexion.Chargement', 'Chargement');
      a('connexion.VoirMDP', 'Voir le mot de passe');
      a('connexion.masquerMDP', 'Masquer le mot de passe');
      a('requete.validationEchec', 'La validation a échoué.');
      a('requete.erreur', "Une erreur s'est produite");
      a(
        'requete.erreurGenerationPDF',
        'Document inaccessible\nLa mise à disposition de ce document a échoué',
      );
      a('requete.validationEnCours', 'Validation en cours');
      a('requete.VeuillezPatienter', 'Veuillez patienter...');
      a('requete.transfertPJ', 'Transfert des pièces jointes');
      a(
        'requete.ConnexionPerdue',
        'La connexion au serveur a été perdue, tentative de reconnexion.',
      );
      a(
        'interface.SaisieNonValidee',
        "Attention, votre saisie n'est pas validée",
      );
      a(
        'interface.SaisieAValider',
        'Vous devez valider votre saisie avant de poursuivre.',
      );
      a('genreBoiteMessage.Information', 'Information');
      a('genreBoiteMessage.Confirmation', 'Confirmation');
      a(
        'inputFile.echecSelection',
        "Le fichier sélectionné n'est pas valide. Il doit avoir l'extension %s",
      );
      a(
        'inputFile.msgEchecTailleFichier',
        'La taille des documents joints est limitée à %d %s',
      );
      a(
        'inputFile.msgDocJointVide',
        'Le fichier "%s" est refusé car il a une taille de 0 ko',
      );
      a(
        'inputFile.msgEchecLibelleFichier',
        'Un document portant le même nom existe déjà. Veuillez renommer le document.',
      );
      a(
        'inputFile.msgEchecLibelleFichierAvecInfo',
        'Un document portant le même nom existe déjà parmi vos pièces jointes. Pour le joindre à nouveau, ouvrez le gestionnaire de pièces jointes.',
      );
      a('inputFile.EchecAjoutFichier', "Echec lors de l'ajout du fichier");
      a('inputFile.echecEnvoi', "Echec lors de l'envoi du fichier");
      a('inputFile.AnnulerLEnvoi', "Annuler l'envoi");
      a('inputFile.msgEnvoiFichierAnnule', "L'envoi de fichier a été annulé");
      a('inputFile.msgPreparationFichier', 'Préparation du fichier à envoyer');
      a(
        'inputFile.reductionTailleImage_SDDDDDD',
        'Le fichier %s a été réduit : %dx%d (%d ko) -> %dx%d (%d ko)',
      );
      a('inputFile.echecImagePDF_S', "L'image %s est incompatible");
      a('date.separateurHeure', 'h');
      a('date.separateurMin', 'min');
      a('date.separateurMn', 'min');
      a('date.separateurJour', 'j');
      a('Jours', 'lundi');
      a('Jours', 'mardi');
      a('Jours', 'mercredi');
      a('Jours', 'jeudi');
      a('Jours', 'vendredi');
      a('Jours', 'samedi');
      a('Jours', 'dimanche');
      a('JourCourt', 'J');
      a('JoursCourt', 'lun.');
      a('JoursCourt', 'mar.');
      a('JoursCourt', 'mer.');
      a('JoursCourt', 'jeu.');
      a('JoursCourt', 'ven.');
      a('JoursCourt', 'sam.');
      a('JoursCourt', 'dim.');
      a('Aujourdhui', "Aujourd'hui");
      a('Demain', 'Demain');
      a('Hier', 'Hier');
      a('Dates.LeDate', 'le %s');
      a('Dates.DuDate', 'du %s');
      a('Dates.DuPourDate', 'du');
      a('Dates.AuPourDate', 'au');
      a('Dates.AHeure', 'à %s');
      a('Dates.DepuisDateAHeure', 'depuis %0:s à %1:s');
      a('Dates.DeHeureDebutAHeureFin', 'de %0:s à %1:s');
      a(
        'Dates.DateDebutAHeureDebutAuDateFinAHeureFin',
        '%0:s à %1:s au %2:s à %3:s',
      );
      a('Dates.DateDebutAuDateFin', '%0:s au %1:s');
      a('Dates.LeDateDebutDeHeureDebutAHeureFin', 'le %0:s de %1:s à %2:s');
      a(
        'Dates.DuDateDebutAHeureDebutAuDateFinAHeureFin',
        'du %0:s à %1:s au %2:s à %3:s',
      );
      a('Dates.DateDebutAHeureDebutAuDateFin', '%0:s à %1:s au %2:s');
      a('Dates.DateDebutAHeureDebut', '%0:s à %1:s');
      a('Dates.LeDateDebutAHeureDebut', 'le %0:s à %1:s');
      a('Dates.DuDateDebutAuDateFin', 'du %0:s au %1:s');
      a('Fenetre_Date.Titre', 'Choisir un jour');
      a('Fenetre_Date.AucuneDate', 'Aucune date');
      a('Fenetre_Date.WAI.SelectionMois', 'Sélectionner un mois');
      a('Fenetre_Date.WAI.SelectionAnnee', 'Sélectionner une année');
      a(
        'ChangementLangue.MessageConfirmationChangerLangue',
        'Le changement de langue nécessite le rechargement de la page.\nConfirmez-vous ce changement ?',
      );
      a('ChangementLangue.ChangerLaLangue', 'Changer la langue');
      a(
        'ChangementLangue.ChangerLangueImpossible',
        'Changement de langue impossible!',
      );
      a(
        'ChangementLangue.ChangerLangueImpossibleDetail',
        'Le changement de langue nécessite que le stockage des cookies soit autorisé.',
      );
      a('selecteurPJ.ajoutNouvellePJ', 'Ajouter une nouvelle pièce jointe');
      a('selecteurPJ.ajoutNouveauLien', 'Ajouter un nouveau lien');
      a(
        'selecteurPJ.ajoutPJExistante',
        'Ouvrir le gestionnaire de pièces jointes',
      );
      a('selecteurPJ.ajoutLienExistant', 'Ouvrir le gestionnaire de liens');
      a('selecteurPJ.supprimerPJ', 'Supprimer');
      a(
        'selecteurPJ.msgConfirmPJ',
        'Confirmez-vous la suppression du document « %s » ?',
      );
      a(
        'selecteurPJ.msgConfirmLien',
        'Confirmez-vous la suppression du lien « %s » ?',
      );
      a('selecteurPJ.siteInternet', 'Sites internet');
      a('selecteurPJ.nomDocument', 'Nom du document');
      a('selecteurPJ.majPJ', 'Mettre à jour');
      a('selecteurPJ.Telecharger', 'Télécharger');
      a(
        'LienPolitiqueMotDePasse.ConsulterNotrePolitiqueSecuriteMDP',
        'Comment renforcer la sécurité de mon compte ?',
      );
      a('timeline.aucun', "Il n'existe aucun évènement.");
      a('timeline.ajouterElement', 'Cliquer pour ajouter un évènement');
      a('saisieMDP.ModificationMDP', 'Modification de votre mot de passe');
      a(
        'saisieMDP.ConfirmationIncorrecte',
        'La confirmation ne correspond pas au nouveau mot de passe !',
      );
      a(
        'saisieMDP.MotActuelIncorrect',
        "Le mot de passe actuel n'est pas correct !",
      );
      a('saisieMDP.TitreFenetre', 'Personnalisation du mot de passe');
      a('saisieMDP.MotDePasseActuel', 'Mot de passe actuel');
      a('saisieMDP.NewMotDePasse', 'Nouveau mot de passe');
      a('saisieMDP.Confirmation', 'Confirmation du nouveau');
      a('saisieMDP.EchecModification', 'Echec de la modification');
      a(
        'saisieMDP.ReussiteModification',
        'Votre modification a bien été prise en compte',
      );
      a('messagesDyn.marquerLu', 'Marquer les messages comme lus.');
      a('FenetreSuiviStage.CreerSuivi', "Création d'un suivi de stage");
      a('FenetreSuiviStage.ModifierSuivi', 'Modification du suivi de stage');
      a('FenetreSuiviStage.NouveauSuivi', 'Nouveau suivi');
      a('FenetreSuiviStage.Evenement', 'Evenement');
      a('FenetreSuiviStage.Date', 'Date');
      a('FenetreSuiviStage.DefinirHoraireSuivi', "Definir l'horaire de suivi");
      a(
        'FenetreSuiviStage.DefinirHoraireSuiviFin',
        "Definir l'horaire de fin de suivi",
      );
      a('FenetreSuiviStage.AfficherDate', "Afficher l'heure du suivi");
      a('FenetreSuiviStage.AfficherHeureDebut', 'Heure de début');
      a('FenetreSuiviStage.AfficherHeureFin', 'Heure de fin');
      a('FenetreSuiviStage.Lieu', 'Lieu');
      a('FenetreSuiviStage.RespAdmin', 'Responsable administratif');
      a(
        'FenetreSuiviStage.SelectionnerRespAdmin',
        'Sélectionner un responsable administratif',
      );
      a('FenetreSuiviStage.ChoixLieu', 'Choisir un lieu');
      a('FenetreSuiviStage.Commentaire', 'Commentaire');
      a(
        'FenetreSuiviStage.RedigezVotreCommentaire',
        'Rédigez votre commentaire',
      );
      a('FenetreSuiviStage.AjouterPieceJointe', 'Ajouter une pièce jointe');
      a('FenetreSuiviStage.Publier', 'Publier');
      a('FenetreSuiviStage.TypeDeStage', 'Type de stage');
      a('FenetreAnnexePedaStage.annexePedagogique', 'Annexe pédagogique');
      a('FenetreAnnexePedaStage.sujetDetaille', 'Sujet détaillé');
      a('FenetreAnnexePedaStage.commentaire', 'Commentaire');
      a('FenetreAnnexePedaStage.objectifs', 'Objectifs');
      a('FenetreAnnexePedaStage.activitesPrevues', 'Activités prévues');
      a('FenetreAnnexePedaStage.competencesVisees', 'Compétences visées');
      a(
        'FenetreAnnexePedaStage.modalitesConcertation',
        'Modalités de concertation',
      );
      a('FenetreAnnexePedaStage.modalitesEvaluation', "Modalités d'évaluation");
      a('BandeauEspace.LogoEtablissement', "Logo de l'établissement");
      a('BandeauEspace.LogoDepartement', 'Logo du département');
      a(
        'BandeauEspace.AccederSiteDepartement',
        'Accéder au site du departement',
      );
      a('BandeauEspace.LiensEvitement.Contenu', 'Accéder au contenu');
      a('BandeauEspace.LiensEvitement.Menu', 'Accéder au menu');
      a('PiedPage.btnMasquer', 'Masquer le pied de page du site');
      a('PiedPage.btnAfficher', 'Afficher le pied de page du site');
      a(
        'PiedPage.hebergementDonneesFrance',
        'Toutes vos données sont hébergées en France',
      );
      a('PiedPage.certifISO27001', 'Certifié ISO 27001');
      a('PiedPage.mentionsLegales', 'Mentions légales');
      a('PiedPage.planSite', 'Plan du site');
      a('PiedPage.declarationAccessibilite', "Déclaration d'accessibilité");
      a(
        'PiedPage.AccessibiliteConformite',
        'Accessibilité : partiellement conforme',
      );
      a('PiedPage.AccessibiliteNonConformite', 'Accessibilité : non conforme');
      a(
        'PiedPage.CookieInfo_Message_1',
        'Seuls des cookies (ou informations stockées en local) de fonctionnement sont utilisés.',
      );
      a('PiedPage.CookieInfo_Message_2', "Pour plus d'informations, voir nos");
      a('PiedPage.IndexEducation', 'INDEX ÉDUCATION');
      a('FicheStageCP.SigneePar', 'Signée');
      a('FicheStageCP.NonSigneePar', 'Non signée');
      a('FicheStageCP.Optionnel', 'optionnel');
      a('Mobile.Menu.Notifs', 'Notifs');
      a('Tiny.WAITitre', 'Zone de texte riche');
      a('Visionneuse.altImage', "Visionneuse d'image");
      a('SyntheseVocale.ChoixVoix', 'Sélectionner la voix');
      a('SyntheseVocale.Activer', 'Activer la synthèse vocale');
      a(
        'SyntheseVocale.SurLignage',
        'Activer le surlignage sur la lecture des mots',
      );
      a('SyntheseVocale.BoutonPlayStop', 'Démarrer/Arreter la lecture');
      a('TypeGenreICal.EDT', 'Emploi du temps');
      a('TypeGenreICal.Agenda', "Evènements de l'agenda");
      a('TypeGenreICal.Perso', 'Mes Informations');
      a('modeSombre.theme', 'Thème');
      a('modeSombre.claire', 'Clair');
      a('modeSombre.sombre', 'Sombre');
      a('modeSombre.systeme', 'Système');
      a('SaisieQCM.Libelle', 'Libellé');
      a('SaisieQCM.Categorie', 'Catégories');
      a('SaisieQCM.Matiere', 'Matière');
      a('SaisieQCM.Niveau', 'Niveau');
      a('SaisieQCM.SelectionnerNiveau', 'Sélectionner un niveau');
      a('SaisieQCM.Proprios', 'Propriétaires');
      a('SaisieQCM.Contributeurs', 'Contributeurs');
      a(
        'SaisieQCM.HintNiveau',
        "Le niveau est pris en compte pour l'organisation des QCM dans la bibliothèque",
      );
      a(
        'SaisieQCM.HintMatiere',
        "La matière est prise en compte pour l'organisation des QCM dans la bibliothèque",
      );
      a(
        'SaisieQCM.HintLibelle',
        'Ce nom sera également utilisé dans la bibliothèque',
      );
      a('SaisieQCM.HintCategorie', 'Catégories');
      a('SaisieQCM.HintQCMPartage', 'Partagé aux autres enseignants');
      a('SaisieQCM.ModifierQCM', 'Modifier le QCM');
      a('SaisieQCM.LigneNouveauQCM', 'Créer un nouveau QCM');
      a('SaisieQCM.LigneNouveauQCMCollab', 'Créer un nouveau QCM collaboratif');
      a(
        'SaisieQCM.UniquementMatieresEnseignees',
        'Uniquement les matières enseignées',
      );
      a('SaisieQCM.SelectionnerUnQCM', 'Sélectionner un QCM');
      a('SaisieQCM.copieqcm.ok', 'Le QCM  a été copié avec succès.');
      a(
        'SaisieQCM.copieqcm.ko',
        "Une erreur s'est produite lors de la copie du QCM",
      );
      a(
        'SaisieQCM.copiequest.ok',
        'Les questions ont été copiées avec succès.',
      );
      a('SaisieQCM.TitreQCM', '%s - %d questions - total de points %d');
      a(
        'SaisieQCM.TitreQCMQSoumises',
        '%s - %d questions / %d - total de points %d',
      );
      a('SaisieQCM.TitreQCMSansPoint', '%s - %d questions');
      a('SaisieQCM.TitreQCMQSoumisesSansPoint', '%s - %d questions / %d');
      a('SaisieQCM.InfoQCMSelection', '%d questions - noté sur %d');
      a('SaisieQCM.NbUneQuestion', '1 question');
      a('SaisieQCM.NbQuestions', '%d questions');
      a('SaisieQCM.DureeExec', 'durée %d min');
      a('SaisieQCM.InfoPreCreationTrou', 'Création des trous :');
      a('SaisieQCM.InfoPreSuppressionTrou', 'Suppression des trous : ');
      a('SaisieQCM.InfoPreEditerTrou', 'Edition des réponses : ');
      a(
        'SaisieQCM.InfoSelectClic',
        'sélectionnez le texte concerné et cliquez sur le bouton',
      );
      a(
        'SaisieQCM.InfoCadrePointilleClic',
        'placez votre curseur dans le cadre en pointillés qui symbolise le trou et cliquez sur le bouton',
      );
      a(
        'SaisieQCM.InfoEditionSupprimer',
        "cliquez sur le bouton « Supprimer » dans la fenêtre d'édition des réponses proposées",
      );
      a('SaisieQCM.TexteARenseigner', 'Texte à renseigner %d');
      a('SaisieQCM.Choix', 'Choix %d');
      a('SaisieQCM.HintBonneReponseSingle', 'Indique la bonne réponse');
      a('SaisieQCM.HintBonnesReponsesMulti', 'Indique les bonnes réponses');
      a('SaisieQCM.HintMediaReponses', 'Média liés aux réponses');
      a(
        'SaisieQCM.HintReponsesShortAnswer',
        'Indique les bonnes réponses. Seule une réponse sera acceptée',
      );
      a('SaisieQCM.SaisieQuestions', 'Saisie des questions');
      a('SaisieQCM.SaisieModaliteExe', "Modalités d'exécution");
      a('SaisieQCM.SaisieResultats', 'Résultats');
      a(
        'SaisieQCM.AjouterImage',
        "Choisir une image qui sera affichée avec l'énoncé de la question",
      );
      a(
        'SaisieQCM.SupprimerImage',
        "Retirer l'image de l'énoncé de la question",
      );
      a(
        'SaisieQCM.BaremeQCMMax',
        "Vous avez atteint le barème max d'un QCM fixé à %d",
      );
      a(
        'SaisieQCM.ValiderPourVisu',
        'Valider votre saisie pour avoir la visualisation',
      );
      a(
        'SaisieQCM.AjouterSon',
        "Choisir un son qui sera associé à l'énoncé de la question",
      );
      a('SaisieQCM.SupprimerSon', 'Souhaitez-vous supprimer ce son ?');
      a(
        'SaisieQCM.SiteInternet',
        "Site internet qui sera affichée avec l'énoncé de la question",
      );
      a('SaisieQCM.EditeurReponse', "Edition avancée d'une réponse");
      a('SaisieQCM.CreerDevoir', 'Associer le QCM à un nouveau devoir');
      a(
        'SaisieQCM.EditionAvanceePerteDonnee',
        'Souhaitez-vous vraiment convertir la mise en forme des réponses déjà saisies ? Des données peuvent être perdues !',
      );
      a('SaisieQCM.AvecMiseEnForme', 'Avec mise en forme');
      a(
        'SaisieQCM.SaisirPourcentagePourReponse',
        'Saisir un pourcentage de points pour chaque réponse',
      );
      a(
        'SaisieQCM.ReponseDoitEtreNumerique',
        'La réponse doit être une valeur numérique',
      );
      a(
        'SaisieQCM.ConfirmationDestructionPourcentageReponse',
        'Les pourcentages déjà saisis vont être supprimés.\nConfirmez-vous la suppression ?',
      );
      a(
        'SaisieQCM.MFichePointAttribueQCM',
        '{"titre":"Comment définir les points attribués à chaque réponse","html":{"_T":23,"V":"<p>Cochez l\'option<span style=\\\"color: #7e8c8d;\\\"> <strong>Saisir un poucentage de points pour chaque r&eacute;ponse </strong></span><span style=\\\"color: #000000;\\\">puis d&eacute;finissez le pourcentage de points &agrave; attribuer &agrave; chaque r&eacute;ponse.</span></p><p style=\\\"padding-left: 40px;\\\"><em><span style=\\\"text-decoration: underline;\\\">Exemple :</span> <br />Pour une question qui vaut 10 points :</em><br /><em>- une bonne r&eacute;ponse avec 100 %, rapportera 10 points</em><br /><em>- une bonne r&eacute;ponse avec 60 %, rapportera 6 points</em><br /><em>- une mauvaise avec -10 %, fera perdre 1 point</em></p><p style=\\\"padding-left: 40px;\\\"><em>Si un &eacute;l&egrave;ve coche la bonne r&eacute;ponse &agrave; 60 % et la mauvaise r&eacute;ponse &agrave; -10 %, il obtiendra le score de 5 points.</em><br /><em>Si un &eacute;l&egrave;ve coche uniquement la mauvaise r&eacute;ponse &agrave; -10 %, il n\'obtiendra aucun point.</em></p><p>Dans le cas des questions &agrave; choix unique, le choix d\'une r&eacute;ponse associ&eacute;e &agrave; un malus pourra entrainer un r&eacute;sultat n&eacute;gatif sur la question. En revanche sur la globalit&eacute; du QCM, l\'&eacute;l&egrave;ve ne pourra pas avoir une note en dessous de 0.</p><p>Les bonus et malus d&eacute;finis ne seront pris en compte que si l\'option <span style=\\\"color: #7e8c8d;\\\"><strong>Attribuer les points selon les % d&eacute;finis pour chaque r&eacute;ponse </strong></span>est coch&eacute;e dans les modalit&eacute;s d\'ex&eacute;cution.</p>"},"width":505,"height":355,"type":4,"boutons":{"_T":18,"V":1024}}',
      );
      a(
        'SaisieQCM.TexteAnnulerNote',
        "Définir la nouvelle date de disponibilité de l'iDevoir",
      );
      a(
        'SaisieQCM.ConfirmDeleteExeQCM',
        'Etes-vous sûr de vouloir supprimer cette exécution QCM ? Les résultats, devoirs et contenus associés seront effacés !',
      );
      a('SaisieQCM.TypeAssociationTexte', 'Textes');
      a('SaisieQCM.TypeAssociationImage', 'Images');
      a('SaisieQCM.TypeAssociationSon', 'Sons');
      a('SaisieQCM.SupprimerImageReponse', "Supprimer l'image");
      a('SaisieQCM.VoirCorrigeQCM', 'Afficher le corrigé');
      a('SaisieQCM.TafToDevoir', 'Associer à un devoir');
      a(
        'SaisieQCM.ConfirmTafToDevoir',
        "Le travail à faire n'était pas noté. Souhaitez-vous continuer ?",
      );
      a(
        'SaisieQCM.TafNonCloture',
        "Les élèves peuvent encore répondre à ce travail à faire, l'association de ce qcm à un devoir n'est pas encore possible",
      );
      a(
        'SaisieQCM.HintNbCompetences',
        'Nombre de compétences évaluées par les questions de ce QCM',
      );
      a('SaisieQCM.NbCompetencesCourt', 'Cpt');
      a('SaisieQCM.AjouterDesQuestions', 'Ajouter des questions');
      a(
        'SaisieQCM.GlisserDeposerFichier',
        'Cliquer pour parcourir ou glisser/déposer',
      );
      a('SaisieQCM.ConfirmSuppression', 'Confirmez-vous la suppression ?');
      a('SaisieQCM.HintQuestionNonPresentee', 'Question non présentée');
      a('SaisieQCM.NonFait', 'Non fait');
      a('SaisieQCM.MsgSuccesAjoutUneQuestion', '1 question ajoutée');
      a('SaisieQCM.MsgSuccesAjoutXQuestions', '%d questions ajoutées');
      a('SaisieQCM.ListeDesQCM', 'Liste des QCM');
      a('SaisieQCM.ListeDesQCMEtablissement', "QCM de l'établissement");
      a('SaisieQCM.ListeDesQCMCollaboratif', 'QCM collaboratifs');
      a('SaisieQCM.ListeDesQCMPersonnel', 'Mes QCM');
      a(
        'SaisieQCM.ConfirmChangementAssociationA',
        "Etes-vous sûr de vouloir modifier le genre d'association ?\nLes saisies déjà effectuées pour les éléments A vont être supprimées.",
      );
      a(
        'SaisieQCM.ConfirmChangementAssociationB',
        "Etes-vous sûr de vouloir modifier le genre d'association ?\nLes saisies déjà effectuées pour les éléments B vont être supprimées.",
      );
      a(
        'SaisieQCM.MFicheTypeDeQuestions',
        '{"titre":" Les différents types de questions","html":{"_T":23,"V":"<div><em><strong><span style=\\\"font-family: Arial; font-size: 12px;\\\">Choix unique : </span></strong></em><span style=\\\"font-family: Arial; font-size: 12px;\\\">une seule bonne r&eacute;ponse &agrave; retrouver parmi les choix propos&eacute;s.</span></div><div style=\\\"font-family: Arial; font-size: 13px;\\\"><span style=\\\"font-family: Arial; font-size: 12px;\\\">&nbsp;</span></div><div><em><strong><span style=\\\"font-family: Arial; font-size: 12px;\\\">Choix multiple :</span></strong></em><span style=\\\"font-family: Arial; font-size: 12px;\\\"> plusieurs bonnes r&eacute;ponses &agrave; retrouver parmi les choix propos&eacute;s.</span></div><div>&nbsp;</div><div><em><strong><span style=\\\"font-family: Arial; font-size: 12px;\\\">Valeur num&eacute;rique :</span></strong></em><span style=\\\"font-family: Arial; font-size: 12px;\\\"> une ou plusieurs bonnes r&eacute;ponses sont r&eacute;dig&eacute;es dans un format num&eacute;rique, une d\'elles doit &ecirc;tre saisie dans une zone de texte. La r&eacute;ponse de l\'&eacute;l&egrave;ve est prise en compte ind&eacute;pendamment &nbsp;des s&eacute;parateurs num&eacute;riques et des espaces.</span></div><div style=\\\"font-family: Arial; font-size: 13px;\\\"><em><strong><span style=\\\"font-family: Arial; font-size: 12px;\\\">&nbsp;</span></strong></em></div><div><em><strong><span style=\\\"font-family: Arial; font-size: 12px;\\\">R&eacute;ponse &agrave; saisir :</span></strong></em><span style=\\\"font-family: Arial; font-size: 12px;\\\"> une ou plusieurs bonnes r&eacute;ponses sont r&eacute;dig&eacute;es, une d\'elles doit &ecirc;tre saisie dans une zone de texte. Une option permet de pr&eacute;ciser si les majuscules et accents doivent &ecirc;tre pris en compte.</span></div><div style=\\\"font-family: Arial; font-size: 13px;\\\"><span style=\\\"font-family: Arial; font-size: 12px;\\\">&nbsp;</span></div><div><em><strong><span style=\\\"font-family: Arial; font-size: 12px;\\\">Epellation :</span></strong></em><span style=\\\"font-family: Arial; font-size: 12px;\\\"> une seule bonne r&eacute;ponse &agrave; &eacute;peler lettre par lettre. Une option permet de pr&eacute;ciser si les majuscules et accents doivent &ecirc;tre pris en compte.</span></div><div style=\\\"font-family: Arial; font-size: 13px;\\\"><span style=\\\"font-family: Arial; font-size: 12px;\\\">&nbsp;</span></div><div><em><strong><span style=\\\"font-family: Arial; font-size: 12px;\\\">Association : </span></strong></em><span style=\\\"font-family: Arial; font-size: 12px;\\\">diff&eacute;rentes associations de 2 &eacute;l&eacute;ments doivent &ecirc;tre reform&eacute;es.</span></div><div style=\\\"font-family: Arial; font-size: 13px;\\\"><span style=\\\"font-family: Arial; font-size: 12px;\\\">&nbsp;</span><em><em><strong><span style=\\\"font-family: Arial; font-size: 12px;\\\">&nbsp; &nbsp;</span></strong></em></em></div><div><div><em><strong><span style=\\\"font-family: Arial; font-size: 12px;\\\">Texte &agrave; trous : </span></strong></em><span style=\\\"font-family: Arial; font-size: 12px;\\\">un texte est r&eacute;dig&eacute; et certains mots sont occult&eacute;s</span></div><div><em><strong><span style=\\\"font-family: Arial; font-size: 12px;\\\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- R&eacute;ponse libre : </span></strong></em><span style=\\\"font-family: Arial; font-size: 12px;\\\">les bonnes r&eacute;ponses doivent &ecirc;tre saisies (aucune indication n\'est donn&eacute;e).</span></div><div><em><strong><span style=\\\"font-family: Arial; font-size: 12px;\\\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Liste unique :</span></strong></em><span style=\\\"font-family: Arial; font-size: 12px;\\\">&nbsp;les bonnes r&eacute;ponses sont choisies dans une liste commune &agrave; tous les trous.</span></div><div><span style=\\\"font-family: Arial; font-size: 12px;\\\">&nbsp;&nbsp;&nbsp;&nbsp;</span><em><strong><span style=\\\"font-family: Arial; font-size: 12px;\\\">&nbsp;- Liste variable : </span></strong></em><span style=\\\"font-family: Arial; font-size: 12px;\\\">les bonnes r&eacute;ponses sont choisies dans une liste sp&eacute;cifique &agrave; chaque trou.</span></div></div>"},"width":575,"height":326,"type":4,"boutons":{"_T":18,"V":1024}}',
      );
      a('SaisieQCM.Filtres.SelectionnerMatieres', 'Sélectionner des matières');
      a('SaisieQCM.Filtres.Matieres', 'Matières');
      a('SaisieQCM.Filtres.SelectionnerNiveaux', 'Sélectionner des niveaux');
      a('SaisieQCM.Filtres.Niveaux', 'Niveaux');
      a('SaisieQCM.Filtres.Toutes', 'Toutes');
      a('SaisieQCM.Filtres.Tous', 'Tous');
      a(
        'SaisieQCM.nbPointsRectifiesManuellement',
        '* Nombre de points rectifiés manuellement',
      );
      a('QCM_Divers.Bouton.Nouveau', 'Nouveau QCM');
      a('QCM_Divers.Bouton.Importer', 'Importer des QCM');
      a('QCM_Divers.Bouton.Associer', 'Associer le QCM');
      a('QCM_Divers.Bouton.AutresActions', 'Autres actions');
      a(
        'QCM_Divers.Menu.AssocierActivite',
        'Associer le QCM à une activité en classe',
      );
      a(
        'QCM_Divers.Menu.AssocierTAF',
        'Associer le QCM à un travail à la maison',
      );
      a(
        'QCM_Divers.MatiereObligatoire',
        'Pour ajouter des compétences, veuillez renseigner la matière du QCM',
      );
      a('QCM_Divers.Bareme', 'Barème');
      a('QCM_Divers.Nature', 'Nature');
      a('QCM_Divers.Nature_Obligatoire', 'Obligatoire');
      a('QCM_Divers.Nature_Facultative', 'Facultative');
      a('QCM_Divers.Tag_Niveau', 'Niveau');
      a('QCM_Divers.ErreurReponsesVides', 'Des réponses sont vides');
      a(
        'QCM_Divers.AuMoinsDeuxAssociations',
        'Vous devez saisir au moins deux associations',
      );
      a(
        'QCM_Divers.AuMoinsDeuxPropositions',
        'Vous devez faire au moins deux propositions',
      );
      a(
        'QCM_Divers.AuMoinsDeuxTrous',
        'Vous devez définir au moins 2 trous pour constituer la liste',
      );
      a(
        'QCM_Divers.AuMoinsUneReponse',
        'Vous devez saisir au moins une réponse',
      );
      a('QCM_Divers.AuMoinsUnTrou', 'Vous devez définir au moins un trou');
      a(
        'QCM_Divers.AuMoinsUneBonneReponse',
        'Vous devez définir au moins une bonne réponse',
      );
      a(
        'QCM_Divers.IlManqueLaBonneReponse',
        'Vous devez définir la bonne réponse',
      );
      a(
        'QCM_Divers.LaSommeDesPourcentagesPosDoitEtre100',
        'La somme des pourcentages liés aux bonnes réponses doit être égale à 100',
      );
      a(
        'QCM_Divers.LaSommeDesPourcentagesNegDoitPasEtreInfA100',
        'La somme des pourcentages liés aux mauvaises réponses doit être comprise entre 0 et -100',
      );
      a(
        'QCM_Divers.AuMoinsUneBonneReponseDoitEtre100',
        'Au moins une bonne réponse doit avoir un pourcentage égal à 100',
      );
      a('QCM_Divers.DupliquerQCM', 'Dupliquer un QCM');
      a('QCM_Divers.ImportQCMs', 'Importer des QCM');
      a('QCM_Divers.MnuAjoutQuestionsPerso', 'de mes QCM');
      a('QCM_Divers.MnuAjoutQuestionsCollab', 'des QCM collaboratifs');
      a('QCM_Divers.MnuImportQCMFichier', 'depuis des fichiers XML');
      a('QCM_Divers.Enonce', 'Enoncé');
      a('QCM_Divers.ApercuQuestion', 'Simuler');
      a('QCM_Divers.TitreSaisieQuestion', 'Edition d\'une question "%s"');
      a('QCM_Divers.PourcentagePoints', '% points');
      a('QCM_Divers.PourcentagePositifs', 'Positifs');
      a(
        'QCM_Divers.HintPourcentagePositifs',
        'Indique le pourcentage de points acquis quand la réponse est choisie',
      );
      a('QCM_Divers.PourcentageNegatifs', 'Négatifs');
      a(
        'QCM_Divers.HintPourcentageNegatifs',
        'Indique le pourcentage de points perdus quand la réponse est choisie',
      );
      a('QCM_Divers.ReponsesProposees', 'Réponses proposées');
      a('QCM_Divers.Image', 'Image');
      a('QCM_Divers.CommentaireFacultatif', 'Commentaire facultatif');
      a('QCM_Divers.LigneNouvelleReponse', 'Proposer une réponse');
      a('QCM_Divers.nbReponsesOK', 'Nombre de bonnes réponses');
      a('QCM_Divers.BonnesReponsesPossibles', 'Bonnes réponses possibles');
      a('QCM_Divers.LigneBonneReponse', 'Ajouter une bonne réponse possible');
      a('QCM_Divers.NouvelleAssociation', 'Nouvelle association');
      a('QCM_Divers.AssociationSource', 'Eléments A');
      a('QCM_Divers.AssociationReponse', 'Eléments B');
      a('QCM_Divers.Intitule', 'Intitulé');
      a(
        'QCM_Divers.InfoReponseEpellation',
        "A l'exécution les lettres seront remplacées par un nombre égal de traits",
      );
      a(
        'QCM_Divers.InfoReponseReponseCourte2',
        'Seule la 1ère bonne réponse sera affichée dans le corrigé.',
      );
      a('QCM_Divers.HintDevoirLieQCM', 'Le devoir est lié à un QCM');
      a(
        'QCM_Divers.HintDevoirLieKiosque',
        'Le devoir est associé à un lien vers le contenu du manuel numérique',
      );
      a('QCM_Divers.GenreExerciceChoixUnique', 'Choix unique');
      a('QCM_Divers.GenreExerciceChoixMultiple', 'Choix multiple');
      a('QCM_Divers.GenreExerciceReponseASaisir', 'Réponse à saisir - Texte');
      a(
        'QCM_Divers.GenreExerciceReponseNumerique',
        'Réponse à saisir - Numérique',
      );
      a('QCM_Divers.GenreExerciceAssociation', 'Association');
      a('QCM_Divers.GenreExerciceClozeField', 'Texte à trous - réponse libre');
      a('QCM_Divers.GenreExerciceClozeFixed', 'Texte à trous - liste unique');
      a(
        'QCM_Divers.GenreExerciceClozeVariable',
        'Texte à trous - liste variable',
      );
      a('QCM_Divers.GenreExerciceEpellation', 'Epellation');
      a('QCM_Divers.UpdateQuestion', 'Modifier la question');
      a('QCM_Divers.Reponse', 'Réponse');
      a('QCM_Divers.MaReponse', 'Ma réponse');
      a(
        'QCM_Divers.MaReponseNumerique',
        'Ma réponse numérique (chiffre(s) uniquement)',
      );
      a('QCM_Divers.ReponseAEpeler', 'Réponse à épeler');
      a(
        'QCM_Divers.XCaracteresAttendus',
        '%d caractères attendus (dont les espaces)',
      );
      a('QCM_Divers.PositionLettre', 'Position %d');
      a('QCM_Divers.ToutEffacer', 'Tout effacer');
      a('QCM_Divers.associeA', 'Associé(e) à :');
      a('QCM_Divers.EnSavoirPlus', 'En savoir plus...');
      a(
        'QCM_Divers.CommentaireMauvaiseReponse',
        'Commentaire en cas de mauvaise réponse',
      );
      a('QCM_Divers.A', 'à');
      a('QCM_Divers.Disponibilite', 'Disponibilité');
      a('QCM_Divers.DispoDu', 'Disponible du');
      a('QCM_Divers.Au', 'au');
      a('QCM_Divers.UpdateBareme', 'Modifier le barème');
      a('QCM_Divers.NouvelleQuestion', 'Nouvelle question');
      a('QCM_Divers.DuplicateQuestion', 'Dupliquer la sélection');
      a('QCM_Divers.DeleteQuestion', 'Retirer la question du QCM');
      a('QCM_Divers.DeleteQuestions', 'Retirer les questions du QCM');
      a('QCM_Divers.CopieDe', 'Copie de %s');
      a(
        'QCM_Divers.ConfirmDeleteQuestion',
        'Etes-vous sûr de vouloir retirer cette question du QCM ?',
      );
      a('QCM_Divers.ExporterQCM', 'Exporter le QCM');
      a('QCM_Divers.ExporterQCMFormatXML', 'au format XML (compatible Moodle)');
      a('QCM_Divers.reponduSur', '%d terminés / %d');
      a('QCM_Divers.CopierQCM', 'Copier dans "Mes QCM"');
      a('QCM_Divers.CopierDansQCMCollab', 'Copier dans "QCM collaboratifs"');
      a('QCM_Divers.CopierQuestion', 'Copier les questions dans "Mes QCM"');
      a('QCM_Divers.notes', 'Notes');
      a('QCM_Divers.notesPrecedentes', 'Préc.');
      a('QCM_Divers.notesDernieres', 'Der.');
      a('QCM_Divers.pts', '/%d ');
      a('QCM_Divers.temps', 'Temps');
      a('QCM_Divers.questions', '%d questions');
      a('QCM_Divers.quest', 'Q');
      a('QCM_Divers.xPts', '%d pts');
      a('QCM_Divers.Xmin', '/%d min');
      a('QCM_Divers.min', 'min');
      a('QCM_Divers.Legende', 'Légende :');
      a(
        'QCM_Divers.msgSupprQCMCollabProprio',
        'Etes-vous sûr de vouloir supprimer ce QCM collaboratif ? Il sera supprimé pour tous les contributeurs !',
      );
      a(
        'QCM_Divers.msgSupprQCMCollabContrib',
        'Etes-vous sûr de vouloir supprimer ce QCM collaboratif ? Vous serez retiré de la liste des contributeurs.',
      );
      a(
        'QCM_Divers.infoQCMCollabVerrou',
        "Ce QCM collaboratif n'est pas éditable car il est en cours de modification par %s",
      );
      a(
        'QCM_Divers.msgAucunServicePourDevoir',
        "Aucun service possible pour la création d'un devoir",
      );
      a(
        'QCM_Divers.msgQuestionAttribuerNotes',
        'Souhaitez-vous créer les notes pour le devoir à partir du travail à faire ?',
      );
      a('QCM_Divers.totalResultats', 'Total de bonnes réponses : ');
      a('QCM_Divers.totalResultats', 'Total de réponses partielles : ');
      a('QCM_Divers.totalResultats', 'Total de mauvaises réponses : ');
      a('QCM_Divers.totalResultats', 'Total de sans réponses : ');
      a('QCM_Divers.TitrePDF_ResultatsQCM', 'Résultats de QCM');
      a(
        'QCM_Divers.Consigne',
        'Consigne présentée sur la page de garde du QCM',
      );
      a('QCM_Divers.AucuneConsigne', "Aucune consigne n'est saisie");
      a('FenetreParamExecutionQCM.DiffusionCorriges', 'Diffusion des corrigés');
      a('FenetreParamExecutionQCM.CorrigeSans', 'Sans corrigé');
      a(
        'FenetreParamExecutionQCM.CorrigeApresChaqueQuestion',
        'Corrigé à chaque question',
      );
      a('FenetreParamExecutionQCM.CorrigeALaFin', 'Corrigé à la fin');
      a(
        'FenetreParamExecutionQCM.CorrigeALaDate',
        'Corrigé disponible à partir du',
      );
      a(
        'FenetreParamExecutionQCM.CorrigeAUneDate',
        "Corrigé disponible à partir d'une date",
      );
      a('FenetreParamExecutionQCM.ToutesLesQuestions', 'Toutes les questions');
      a('FenetreParamExecutionQCM.SeulementQuestions', 'Seulement');
      a(
        'FenetreParamExecutionQCM.HomogeneiserNbQuestionsParNiveau',
        'Homogénéiser le nombre de questions par niveau',
      );
      a(
        'FenetreParamExecutionQCM.OrdreQuestionAleatoire',
        "Modifier aléatoirement l'ordre des questions",
      );
      a(
        'FenetreParamExecutionQCM.TypeOrdreAleatoire',
        "Méthode d'ordonnancement",
      );
      a('FenetreParamExecutionQCM.MelangerQuestionGlobalement', 'globalement');
      a('FenetreParamExecutionQCM.MelangerQuestionParNiveau', 'par niveau');
      a(
        'FenetreParamExecutionQCM.PresentationInterdirNavigation',
        'Autoriser le retour aux questions précédentes',
      );
      a(
        'FenetreParamExecutionQCM.OrdreReponseAleatoire',
        "Mélanger l'ordre des réponses proposées",
      );
      a(
        'FenetreParamExecutionQCM.LimiterTempsQuestionnaire',
        'Limiter le temps de réponse à',
      );
      a(
        'FenetreParamExecutionQCM.LimiterTempsReponse',
        'Limiter le temps de réponse',
      );
      a('FenetreParamExecutionQCM.Minutes', 'minutes');
      a(
        'FenetreParamExecutionQCM.PresentationQuestions',
        'Présentation des questions',
      );
      a(
        'FenetreParamExecutionQCM.ReglesPourCorrection',
        'Règles pour la correction',
      );
      a(
        'FenetreParamExecutionQCM.Assouplissement',
        'Assouplir la correction des questions à choix multiples',
      );
      a(
        'FenetreParamExecutionQCM.MFicheAssouplissement',
        '{"titre":"Comment assouplir la notation des questions à choix multiples ?","html":{"_T":23,"V":"<p><span style=\\\"font-size: 12px; font-family: arial,helvetica,sans-serif;\\\">Dans le cas d\'une question &agrave; choix multiples, l\'&eacute;l&egrave;ve doit cocher toutes les bonnes r&eacute;ponses et seulement les bonnes r&eacute;ponses pour avoir la totalit&eacute; des points du bar&egrave;me de la question. La pr&eacute;sence de r&eacute;ponses fausses et l\'oubli de bonnes r&eacute;ponses sont sanctionn&eacute;s par un 0 &agrave; la question.</span></p><p><span style=\\\"font-size: 12px; font-family: arial,helvetica,sans-serif;\\\">Ce mode de notation peut &ecirc;tre assoupli selon deux options ind&eacute;pendantes et&nbsp;cumulables.</span></p><p><span style=\\\"font-size: 12px; font-family: arial,helvetica,sans-serif;\\\"><strong>Accepter les bonnes r&eacute;ponses incompl&egrave;tes</strong> : Dans le cas o&ugrave; l\'&eacute;l&egrave;ve n\'a pas coch&eacute; toutes les bonnes r&eacute;ponses, il peut obtenir au maximum une fraction des points du bar&egrave;me correspondant &agrave; (nombre de bonnes r&eacute;ponses coch&eacute;es / nombre de r&eacute;ponses attendues).</span></p><p><span style=\\\"font-size: 12px; font-family: arial,helvetica,sans-serif;\\\"><strong>Tol&eacute;rer la pr&eacute;sence de r&eacute;ponses fausses</strong> : Dans le cas o&ugrave; l\'&eacute;l&egrave;ve a coch&eacute; des r&eacute;ponses fausses, l\'&eacute;l&egrave;ve obtient au maximum une fraction des points du bar&egrave;me correspondant &agrave; (nombre de bonnes r&eacute;ponses coch&eacute;es - le nombre de r&eacute;ponses fausses) / nombre de r&eacute;ponses attendues.</span></p>"},"width":500,"height":315,"type":4,"boutons":{"_T":18,"V":1024}}',
      );
      a(
        'FenetreParamExecutionQCM.attribuerPointsSelonPourcentage',
        'Attribuer les points selon les pourcentages définis pour chaque réponse',
      );
      a(
        'FenetreParamExecutionQCM.tolererFausses',
        'Tolérer la présence de réponses fausses',
      );
      a(
        'FenetreParamExecutionQCM.tolererIncomplet',
        'Accepter les bonnes réponses incomplètes',
      );
      a('FenetreParamExecutionQCM.ResultatTitre', 'Résultat');
      a('FenetreParamExecutionQCM.Questions', 'questions');
      a(
        'FenetreParamExecutionQCM.ConditionsExecution',
        "Conditions d'exécution",
      );
      a(
        'FenetreParamExecutionQCM.NbMaxTentative',
        "Permettre d'exécuter plusieurs fois le QCM pour améliorer son résultat",
      );
      a('FenetreParamExecutionQCM.NbMaxTentative1', "Permettre d'exécuter");
      a(
        'FenetreParamExecutionQCM.NbMaxTentative2',
        'fois le QCM pour améliorer son résultat',
      );
      a('FenetreParamExecutionQCM.NbQuestions', 'Nombre de questions');
      a(
        'FenetreParamExecutionQCM.msgOptionsReduites',
        "Toutes les modalités d'exécution ne sont pas disponibles sur la version mobile",
      );
      a('FenetreDevoir.SelectionnerUnQCM', 'Sélectionner un QCM');
      a('FenetreDevoir.ListeQCMTitre', 'Liste des QCM');
      a(
        'FenetreDevoir.ParametresExeQCMDevoir',
        "Modalités d'exécution de l'iDevoir",
      );
      a('FenetreDevoir.AssocierAUnQCM', 'Associer un QCM');
      a('FenetreDevoir.AssocierAUnKiosque', 'Associer un lien');
      a('FenetreDevoir.AssocieAUnQCM', 'QCM associé');
      a('FenetreDevoir.AssocieAUnKiosque', 'Lien associé');
      a('FenetreDevoir.resultatKiosque', 'Résultats');
      a('Notes.SelectionnerPeriode', 'Sélectionner une période');
      a('accueil.executionsQCM', 'Prochains iDevoirs');
      a('accueil.AucuneExecutionsQCM', 'Aucun iDevoir programmé');
      a(
        'Numerotation.TypeNumerotationQuestions',
        'Type de numérotation des questions',
      );
      a('Numerotation.NumerotationArabe', '1, 2, 3...');
      a('Numerotation.NumerotationABC', 'A, B, C...');
      a('Numerotation.NumerotationRomaine', 'I, II, III...');
      a('FiltresQCM.ToutVoir', 'Tout voir');
      a('FiltresQCM.Executes', 'Exécutés');
      a('FiltresQCM.ExecutesAPartirDu', 'Exé. à partir du');
      a('FiltresQCM.EnCoursDExecution', "En cours d'exécution");
      a('FiltresQCM.SansExecution', 'Sans exécution');
      a('FiltresQCM.LiesADevoir', 'Devoirs');
      a('FiltresQCM.LiesAEvaluation', 'Évaluations');
      a('FiltresQCM.LiesAContenuDeCours', 'Cahier de texte : contenu');
      a('FiltresQCM.LiesATravailAFaire', 'Cahier de texte : Travail à faire');
      a('FiltresQCM.Categories', 'Catégories');
      a('FiltresQCM.EditerCategories', 'Éditer les catégories');
      a('CategoriesQCM.SelectionnerCategories', 'Sélectionner des catégories');
      a('CategoriesQCM.CreerCategorie', 'Créer une nouvelle catégorie');
      a('CategoriesQCM.ModifierCategorie', 'Modifier la catégorie');
      a('CategoriesQCM.Nom', 'Nom');
      a('CategoriesQCM.Abreviation', 'Abrév.');
      a('CategoriesQCM.Couleur', 'Couleur');
      a(
        'CategoriesQCM.LibelleObligatoire',
        'Le libellé de la catégorie est obligatoire',
      );
      a('Onglet.Libelle', '');
      a('Onglet.Libelle', '');
      a('Onglet.Libelle', 'Communication');
      a('Onglet.Libelle', 'Notes');
      a('Onglet.Libelle', 'Bulletins');
      a('Onglet.Libelle', 'Vie\nscolaire');
      a('Onglet.Libelle', 'Mes données');
      a('Onglet.Libelle', "Page d'accueil");
      a('Onglet.Libelle', 'Informations & sondages');
      a('Onglet.Libelle', 'Agenda');
      a('Onglet.Libelle', 'Menu');
      a('Onglet.Libelle', 'Calendrier');
      a('Onglet.Libelle', 'Relevé');
      a('Onglet.Libelle', 'Bulletin');
      a('Onglet.Libelle', '');
      a('Onglet.Libelle', 'Fiche de dialogue');
      a('Onglet.Libelle', 'Mon emploi du temps');
      a('Onglet.Libelle', 'Cahier de textes');
      a('Onglet.Libelle', '');
      a('Onglet.Libelle', 'Carnet');
      a('Onglet.Libelle', 'Dossiers');
      a('Onglet.Libelle', '');
      a('Onglet.Libelle', 'Compte enfant');
      a('Onglet.Libelle', 'Saisie');
      a('Onglet.Libelle', '');
      a('Onglet.Libelle', 'Appréciations des professeurs du bulletin');
      a('Onglet.Libelle', '');
      a('Onglet.Libelle', 'Appréciations générales');
      a('Onglet.Libelle', 'Saisie');
      a('Onglet.Libelle', "Feuille d'appel");
      a('Onglet.Libelle', 'Appréciations du relevé');
      a('Onglet.Libelle', '');
      a('Onglet.Libelle', '');
      a('Onglet.Libelle', '');
      a('Onglet.Libelle', 'Brevet ou CFG');
      a('Onglet.Libelle', '');
      a('Onglet.Libelle', 'Informations médicales');
      a('Onglet.Libelle', 'Equipe pédagogique');
      a('Onglet.Libelle', 'Graphes');
      a('Onglet.Libelle', 'Résultats');
      a('Onglet.Libelle', 'Orientations');
      a('Onglet.Libelle', 'Bulletin de la classe');
      a('Onglet.Libelle', 'Fiche');
      a('Onglet.Libelle', 'Absences');
      a('Onglet.Libelle', 'Pluriannuel');
      a('Onglet.Libelle', 'Évaluations par compétence');
      a('Onglet.Libelle', '');
      a('Onglet.Libelle', '');
      a('Onglet.Libelle', '');
      a('Onglet.Libelle', 'Compte');
      a('Onglet.Libelle', '');
      a('Onglet.Libelle', '');
      a('Onglet.Libelle', 'Stage');
      a('Onglet.Libelle', '');
      a('Onglet.Libelle', '');
      a('Onglet.Libelle', 'Compétences');
      a('Onglet.Libelle', 'Saisie des évaluations');
      a('Onglet.Libelle', 'Brevet ou CFG');
      a('Onglet.Libelle', 'Equipe pédagogique');
      a('Onglet.Libelle', 'Emploi\ndu temps');
      a('Onglet.Libelle', 'Emploi du temps');
      a('Onglet.Libelle', 'Cahier\nde textes');
      a('Onglet.Libelle', '');
      a('Onglet.Libelle', '');
      a('Onglet.Libelle', 'Tableau');
      a('Onglet.Libelle', 'Liste des évaluations');
      a('Onglet.Libelle', '');
      a('Onglet.Libelle', 'Anciennes évaluations');
      a('Onglet.Libelle', 'Punitions programmées');
      a('Onglet.Libelle', 'Mon entreprise');
      a('Onglet.Libelle', '');
      a('Onglet.Libelle', 'Mes progressions');
      a('Onglet.Libelle', 'Liste');
      a('Onglet.Libelle', 'Liste');
      a('Onglet.Libelle', 'Suivi');
      a('Onglet.Libelle', 'Affectation aux cahiers de textes');
      a('Onglet.Libelle', '');
      a('Onglet.Libelle', 'Trombinoscope');
      a('Onglet.Libelle', 'Carnet');
      a('Onglet.Libelle', '');
      a('Onglet.Libelle', '');
      a('Onglet.Libelle', 'Emploi du temps');
      a('Onglet.Libelle', 'Trombinoscope');
      a('Onglet.Libelle', 'Livret scolaire');
      a('Onglet.Libelle', 'QCM');
      a('Onglet.Libelle', 'Mes QCM');
      a('Onglet.Libelle', "Bibliothèque de l'établissement");
      a('Onglet.Libelle', 'Répondre aux iDevoir');
      a('Onglet.Libelle', 'Travail à faire');
      a('Onglet.Libelle', 'Contenu et ressources');
      a('Onglet.Libelle', 'Rencontres\nParents/Profs');
      a('Onglet.Libelle', 'Indisponibilités');
      a('Onglet.Libelle', 'Desiderata et disponibilités');
      a('Onglet.Libelle', 'Recherche de salles/matériels');
      a('Onglet.Libelle', 'Planning');
      a('Onglet.Libelle', 'QCM pour réviser');
      a('Onglet.Libelle', '');
      a('Onglet.Libelle', 'Emploi du temps');
      a('Onglet.Libelle', 'Offres de stage');
      a('Onglet.Libelle', 'Ressources pédagogiques');
      a('Onglet.Libelle', 'Bilan périodique');
      a('Onglet.Libelle', 'Entreprises');
      a('Onglet.Libelle', 'Casier numérique');
      a('Onglet.Libelle', '');
      a('Onglet.Libelle', 'Casier numérique');
      a('Onglet.Libelle', 'Liste des élèves');
      a('Onglet.Libelle', 'Classes/Groupes');
      a('Onglet.Libelle', 'Salles');
      a('Onglet.Libelle', 'Livret scolaire');
      a('Onglet.Libelle', 'Saisie des appréciations');
      a('Onglet.Libelle', 'Saisie des compétences');
      a('Onglet.Libelle', "Profil de l'élève");
      a('Onglet.Libelle', "Évolution annuelle de l'élève");
      a('Onglet.Libelle', 'Appel et suivi');
      a('Onglet.Libelle', 'Appel');
      a('Onglet.Libelle', '');
      a('Onglet.Libelle', '');
      a('Onglet.Libelle', '');
      a('Onglet.Libelle', 'Remplacements');
      a('Onglet.Libelle', '');
      a('Onglet.Libelle', 'Planning');
      a('Onglet.Libelle', '');
      a('Onglet.Libelle', 'Relevé de notes');
      a('Onglet.Libelle', 'Liste des professeurs');
      a('Onglet.Libelle', 'Liste des classes');
      a('Onglet.Libelle', 'Liste des groupes');
      a('Onglet.Libelle', 'Liste des responsables');
      a('Onglet.Libelle', 'Liste des personnels');
      a('Onglet.Libelle', 'Élèves');
      a('Onglet.Libelle', 'Professeurs');
      a('Onglet.Libelle', "Emploi du temps de l'élève");
      a('Onglet.Libelle', 'Discussions');
      a('Onglet.Libelle', 'Messagerie');
      a('Onglet.Libelle', '');
      a('Onglet.Libelle', 'Emploi du temps');
      a('Onglet.Libelle', 'Incidents');
      a('Onglet.Libelle', 'Professeurs - Appel');
      a('Onglet.Libelle', 'Autorisations de sortie');
      a(
        'Onglet.Libelle',
        "Récapitulatif des absences, retards et passages à l'infirmerie",
      );
      a('Onglet.Libelle', "Récapitulatif des rubriques de la feuille d'appel");
      a('Onglet.Libelle', 'Récapitulatif des punitions et des sanctions');
      a('Onglet.Libelle', 'Programmes officiels');
      a('Onglet.Libelle', 'Trombinoscope des professeurs');
      a('Onglet.Libelle', 'Trombinoscope des personnels');
      a('Onglet.Libelle', '');
      a('Onglet.Libelle', 'Stagiaires');
      a('Onglet.Libelle', 'Cours non assurés');
      a('Onglet.Libelle', 'Personnels');
      a('Onglet.Libelle', 'Documents');
      a('Onglet.Libelle', 'Progression');
      a('Onglet.Libelle', "Bibliothèque de l'établissement");
      a('Onglet.Libelle', 'Saisie');
      a('Onglet.Libelle', 'Consultation');
      a('Onglet.Libelle', '');
      a('Onglet.Libelle', 'Liste des devoirs sur table');
      a('Onglet.Libelle', 'Saisie par élève');
      a('Onglet.Libelle', 'Matériels');
      a('Onglet.Libelle', 'Emploi du temps');
      a('Onglet.Libelle', 'Listes de diffusion');
      a('Onglet.Libelle', '');
      a('Onglet.Libelle', '');
      a('Onglet.Libelle', 'Récapitulatif');
      a('Onglet.Libelle', 'Mon planning multisemaine');
      a('Onglet.Libelle', 'Planning multisemaine');
      a('Onglet.Libelle', 'Planning multisemaine');
      a('Onglet.Libelle', 'Planning multisemaine');
      a('Onglet.Libelle', 'Planning multisemaine');
      a('Onglet.Libelle', 'Planning multisemaine');
      a('Onglet.Libelle', 'Planning multisemaine');
      a('Onglet.Libelle', 'Planning');
      a('Onglet.Libelle', 'Planning');
      a('Onglet.Libelle', 'Planning');
      a('Onglet.Libelle', 'Planning');
      a('Onglet.Libelle', 'Planning');
      a('Onglet.Libelle', 'Planning');
      a('Onglet.Libelle', 'Missions');
      a('Onglet.Libelle', "Travaux d'entretien");
      a('Onglet.Libelle', 'Ressources des enseignants');
      a('Onglet.Libelle', "Bilan de cycle de l'élève");
      a('Onglet.Libelle', "Trombinoscope de l'équipe pédagogique");
      a('Onglet.Libelle', 'Parcours éducatifs');
      a('Onglet.Libelle', 'Parcours éducatifs');
      a('Onglet.Libelle', '');
      a('Onglet.Libelle', '');
      a('Onglet.Libelle', '');
      a('Onglet.Libelle', '');
      a('Onglet.Libelle', '');
      a('Onglet.Libelle', '');
      a('Onglet.Libelle', '');
      a('Onglet.Libelle', '');
      a('Onglet.Libelle', '');
      a('Onglet.Libelle', '');
      a('Onglet.Libelle', 'Punitions');
      a('Onglet.Libelle', 'Saisie');
      a('Onglet.Libelle', '');
      a('Onglet.Libelle', "Évaluation de l'accueil");
      a('Onglet.Libelle', 'Services');
      a('Onglet.Libelle', 'Export LSU');
      a('Onglet.Libelle', 'Les notes');
      a('Onglet.Libelle', 'Référentiels par domaine');
      a('Onglet.Libelle', 'Référentiels par matière');
      a('Onglet.Libelle', 'Les évaluations');
      a('Onglet.Libelle', 'Synthèse et saisie des appréciations');
      a('Onglet.Libelle', 'Référentiels');
      a('Onglet.Libelle', 'Évaluations');
      a('Onglet.Libelle', 'Bulletin');
      a('Onglet.Libelle', 'Bilans de cycle');
      a('Onglet.Libelle', 'Emploi du temps');
      a('Onglet.Libelle', 'Classes/élèves');
      a('Onglet.Libelle', 'Enseignants');
      a('Onglet.Libelle', 'Outils\npédagogiques');
      a('Onglet.Libelle', 'Vision élève');
      a('Onglet.Libelle', 'Récapitulatifs');
      a('Onglet.Libelle', '');
      a('Onglet.Libelle', 'Ressources pédagogiques');
      a('Onglet.Libelle', 'Bilan par domaine de la classe');
      a('Onglet.Libelle', 'Niveaux de maitrise par matière');
      a('Onglet.Libelle', 'Bulletins');
      a('Onglet.Libelle', 'Bilan périodique');
      a('Onglet.Libelle', 'Bilan périodique de la classe');
      a('Onglet.Libelle', 'Personnels');
      a('Onglet.Libelle', 'Procédures\ndisciplinaires');
      a('Onglet.Libelle', 'Dispenses');
      a('Onglet.Libelle', 'Bilans par domaine');
      a('Onglet.Libelle', 'Appréciations générales');
      a('Onglet.Libelle', 'Saisie des appréciations');
      a('Onglet.Libelle', 'Saisie des appréciations');
      a('Onglet.Libelle', 'Anciens bulletins');
      a('Onglet.Libelle', 'Anciens bilans');
      a('Onglet.Libelle', 'Liste des matières');
      a('Onglet.Libelle', 'Relevé de compétences');
      a('Onglet.Libelle', 'Appel');
      a('Onglet.Libelle', 'Services périscolaires');
      a('Onglet.Libelle', 'Inscriptions');
      a('Onglet.Libelle', 'Ma classe');
      a('Onglet.Libelle', 'Renseignements enfant');
      a('Onglet.Libelle', '');
      a('Onglet.Libelle', 'Bilan par domaine');
      a('Onglet.Libelle', 'Pédagogie');
      a('Onglet.Libelle', '');
      a('Onglet.Libelle', 'Pyramide des âges');
      a('Onglet.Libelle', 'Histogramme des âges');
      a('Onglet.Libelle', 'Répartition des élèves par âge');
      a('Onglet.Libelle', 'Planification');
      a('Onglet.Libelle', 'Planning des cahiers de textes');
      a('Onglet.Libelle', 'QCM collaboratifs');
      a('Onglet.Libelle', 'Appréciations des professeurs par élève');
      a('Onglet.Libelle', 'Tâches de secrétariat');
      a('Onglet.Libelle', 'Référentiel de compétences numériques');
      a('Onglet.Libelle', 'Livret de compétences numériques');
      a('Onglet.Libelle', 'Manuels numériques');
      a('Onglet.Libelle', 'Blog');
      a('Onglet.Libelle', '');
      a('Onglet.Libelle', 'Blog');
      a('Onglet.Libelle', 'Médiathèque');
      a('Onglet.Libelle', 'Cahier de textes de la classe');
      a('Onglet.Libelle', 'Inscriptions');
      a('Onglet.Libelle', 'Nouvelle inscription et inscriptions en cours');
      a('Onglet.Libelle', '');
      a('Onglet.Libelle', 'Professeurs - Appel');
      a('Onglet.Libelle', 'Saisir mes avis');
      a('Onglet.Libelle', 'Consulter le suivi');
      a('Onglet.Libelle', 'Suivi');
      a('Onglet.Libelle', 'Justifications des absences/retards');
      a('Onglet.Libelle', 'Maintenance informatique');
      a('Onglet.Libelle', 'Commande');
      a('Onglet.Libelle', 'Cahier journal');
      a('Onglet.Libelle', 'Apprentissages');
      a('Onglet.Libelle', "Domaines d'apprentissage");
      a('Onglet.Libelle', 'Carnet de suivi');
      a('Onglet.Libelle', 'Bilan officiel Cycle 1');
      a('Onglet.Libelle', 'Documents fournis par les responsables');
      a('Onglet.Libelle', 'Suivi du travail à faire');
      a('Onglet.Libelle', 'Parcoursup');
      a('Onglet.Libelle', 'Appel');
      a('Onglet.Libelle', 'Forums pédagogiques');
      a('Onglet.Libelle', 'Suivis des compétences');
      a('Onglet.Libelle', "Difficultés et points d'appui");
      a('Onglet.Libelle', 'Bilan de compétences par matière');
      a('Onglet.Libelle', 'Appréciations générales');
      a('Onglet.Libelle', 'Pédagogie');
      a('Onglet.Libelle', 'Bilan annuel');
      a('Onglet.Libelle', 'Suivi');
      a('Onglet.Libelle', 'Commissions');
      a('Onglet.Libelle', 'Mes rendez-vous');
      a('Onglet.Libelle', 'Remplacements');
      a('Onglet.Libelle', 'Internat');
      a('Onglet.Libelle', 'Remplacements');
      a('Onglet.Libelle', 'Recherche');
      a('Onglet.LibelleLong', '');
      a('Onglet.LibelleLong', '');
      a('Onglet.LibelleLong', '');
      a('Onglet.LibelleLong', '');
      a('Onglet.LibelleLong', '');
      a('Onglet.LibelleLong', '');
      a('Onglet.LibelleLong', '');
      a('Onglet.LibelleLong', '');
      a('Onglet.LibelleLong', '');
      a('Onglet.LibelleLong', "Agenda de l'établissement");
      a('Onglet.LibelleLong', 'Menu de la cantine');
      a('Onglet.LibelleLong', 'Calendrier scolaire');
      a('Onglet.LibelleLong', 'Relevé de notes');
      a('Onglet.LibelleLong', '');
      a('Onglet.LibelleLong', '');
      a('Onglet.LibelleLong', "Voeux et décisions d'orientation");
      a('Onglet.LibelleLong', 'Emploi du temps');
      a('Onglet.LibelleLong', 'Cahier de textes');
      a('Onglet.LibelleLong', 'Remplacements');
      a('Onglet.LibelleLong', 'Carnet de correspondance');
      a('Onglet.LibelleLong', 'Dossiers de la vie scolaire');
      a('Onglet.LibelleLong', '');
      a('Onglet.LibelleLong', 'Les données personnelles de mon enfant');
      a('Onglet.LibelleLong', 'Saisie des notes');
      a('Onglet.LibelleLong', '');
      a('Onglet.LibelleLong', '');
      a('Onglet.LibelleLong', '');
      a('Onglet.LibelleLong', 'Appréciations de pied de bulletin');
      a('Onglet.LibelleLong', 'Saisie du cahier de textes');
      a('Onglet.LibelleLong', '');
      a('Onglet.LibelleLong', 'Appréciations professeurs du relevé de notes');
      a('Onglet.LibelleLong', '');
      a('Onglet.LibelleLong', '');
      a('Onglet.LibelleLong', '');
      a(
        'Onglet.LibelleLong',
        'Fiche brevet ou Certificat de formation générale',
      );
      a('Onglet.LibelleLong', '');
      a('Onglet.LibelleLong', 'Informations médicales');
      a('Onglet.LibelleLong', "Equipe pédagogique de l'enfant");
      a('Onglet.LibelleLong', '');
      a('Onglet.LibelleLong', '');
      a('Onglet.LibelleLong', '');
      a('Onglet.LibelleLong', '');
      a('Onglet.LibelleLong', 'Fiche de stage');
      a('Onglet.LibelleLong', '');
      a('Onglet.LibelleLong', 'Suivi pluriannuel');
      a('Onglet.LibelleLong', '');
      a('Onglet.LibelleLong', '');
      a('Onglet.LibelleLong', '');
      a('Onglet.LibelleLong', '');
      a('Onglet.LibelleLong', 'Les informations liées à mon compte');
      a('Onglet.LibelleLong', '');
      a('Onglet.LibelleLong', '');
      a('Onglet.LibelleLong', '');
      a('Onglet.LibelleLong', '');
      a('Onglet.LibelleLong', '');
      a('Onglet.LibelleLong', '');
      a('Onglet.LibelleLong', 'Saisie des évaluations');
      a('Onglet.LibelleLong', '');
      a('Onglet.LibelleLong', '');
      a('Onglet.LibelleLong', '');
      a('Onglet.LibelleLong', 'Emploi du temps des classes/groupes');
      a('Onglet.LibelleLong', '');
      a('Onglet.LibelleLong', '');
      a('Onglet.LibelleLong', '');
      a('Onglet.LibelleLong', 'Tableau des résultats');
      a('Onglet.LibelleLong', 'Liste des évaluations des compétences');
      a('Onglet.LibelleLong', '');
      a('Onglet.LibelleLong', 'Anciennes évaluations');
      a('Onglet.LibelleLong', 'Liste des punitions programmées');
      a('Onglet.LibelleLong', 'Mon entreprise');
      a('Onglet.LibelleLong', '');
      a('Onglet.LibelleLong', 'Mes progressions');
      a('Onglet.LibelleLong', 'Liste des dispenses');
      a('Onglet.LibelleLong', 'Liste des absences et retards');
      a('Onglet.LibelleLong', 'Suivi des absences et retards');
      a('Onglet.LibelleLong', 'Affectation des progressions');
      a('Onglet.LibelleLong', '');
      a('Onglet.LibelleLong', 'Trombinoscope des classes');
      a('Onglet.LibelleLong', 'Carnet de correspondance');
      a('Onglet.LibelleLong', '');
      a('Onglet.LibelleLong', '');
      a('Onglet.LibelleLong', 'Emploi du temps des salles');
      a('Onglet.LibelleLong', '');
      a('Onglet.LibelleLong', '');
      a('Onglet.LibelleLong', '');
      a('Onglet.LibelleLong', 'Mes QCM');
      a('Onglet.LibelleLong', "Bibliothèque de QCM de l'établissement");
      a('Onglet.LibelleLong', 'Répondre aux iDevoir');
      a('Onglet.LibelleLong', 'Travail à faire à la maison');
      a('Onglet.LibelleLong', 'Contenu et ressources pédagogiques');
      a('Onglet.LibelleLong', '');
      a('Onglet.LibelleLong', 'Indisponibilités pour les rencontres');
      a('Onglet.LibelleLong', 'Desiderata pour les rencontres');
      a('Onglet.LibelleLong', '');
      a('Onglet.LibelleLong', 'Planning des rencontres');
      a('Onglet.LibelleLong', 'QCM pour réviser');
      a('Onglet.LibelleLong', '');
      a('Onglet.LibelleLong', 'Emploi du temps des professeurs');
      a('Onglet.LibelleLong', 'Offres de stage');
      a('Onglet.LibelleLong', '');
      a('Onglet.LibelleLong', '');
      a('Onglet.LibelleLong', 'Liste des entreprises');
      a('Onglet.LibelleLong', 'Casier numérique');
      a('Onglet.LibelleLong', '');
      a('Onglet.LibelleLong', '');
      a('Onglet.LibelleLong', 'Liste des élèves');
      a('Onglet.LibelleLong', '');
      a('Onglet.LibelleLong', '');
      a('Onglet.LibelleLong', '');
      a('Onglet.LibelleLong', '');
      a('Onglet.LibelleLong', '');
      a('Onglet.LibelleLong', '');
      a('Onglet.LibelleLong', '');
      a('Onglet.LibelleLong', '');
      a('Onglet.LibelleLong', '');
      a('Onglet.LibelleLong', '');
      a('Onglet.LibelleLong', '');
      a('Onglet.LibelleLong', '');
      a('Onglet.LibelleLong', 'Remplacements');
      a('Onglet.LibelleLong', 'Remplacements en tableau');
      a('Onglet.LibelleLong', 'Planning des rencontres en liste');
      a('Onglet.LibelleLong', '');
      a('Onglet.LibelleLong', '');
      a('Onglet.LibelleLong', 'Liste des professeurs');
      a('Onglet.LibelleLong', 'Liste des classes');
      a('Onglet.LibelleLong', 'Liste des groupes');
      a('Onglet.LibelleLong', 'Liste des responsables');
      a('Onglet.LibelleLong', 'Liste des personnels');
      a('Onglet.LibelleLong', '');
      a('Onglet.LibelleLong', '');
      a('Onglet.LibelleLong', "Emploi du temps de l'élève");
      a('Onglet.LibelleLong', 'Mes discussions');
      a('Onglet.LibelleLong', 'Messagerie');
      a('Onglet.LibelleLong', '');
      a('Onglet.LibelleLong', 'Emploi du temps des personnels');
      a('Onglet.LibelleLong', 'Incidents liés aux élèves');
      a('Onglet.LibelleLong', '');
      a('Onglet.LibelleLong', 'Autorisations de sortie');
      a('Onglet.LibelleLong', '');
      a('Onglet.LibelleLong', '');
      a('Onglet.LibelleLong', '');
      a(
        'Onglet.LibelleLong',
        "Programmes scolaires (Sources : B.O. de l'Education Nationale)",
      );
      a('Onglet.LibelleLong', 'Trombinoscope des professeurs');
      a('Onglet.LibelleLong', 'Trombinoscope des personnels');
      a('Onglet.LibelleLong', '');
      a('Onglet.LibelleLong', 'Liste des stagiaires');
      a('Onglet.LibelleLong', 'Cours non assurés des professeurs');
      a('Onglet.LibelleLong', '');
      a('Onglet.LibelleLong', "Échanges de documents avec l'établissement");
      a('Onglet.LibelleLong', '');
      a(
        'Onglet.LibelleLong',
        "Bibliothèque des progressions de l'établissement",
      );
      a('Onglet.LibelleLong', '');
      a('Onglet.LibelleLong', '');
      a('Onglet.LibelleLong', '');
      a('Onglet.LibelleLong', '');
      a('Onglet.LibelleLong', '');
      a('Onglet.LibelleLong', '');
      a('Onglet.LibelleLong', 'Emploi du temps des matériels');
      a('Onglet.LibelleLong', 'Listes de diffusion');
      a('Onglet.LibelleLong', '');
      a('Onglet.LibelleLong', '');
      a('Onglet.LibelleLong', 'Récapitulatif de scolarité');
      a('Onglet.LibelleLong', '');
      a('Onglet.LibelleLong', 'Planning multisemaine des professeurs');
      a('Onglet.LibelleLong', 'Planning multisemaine des élèves');
      a('Onglet.LibelleLong', 'Planning multisemaine des classes/groupes');
      a('Onglet.LibelleLong', 'Planning multisemaine des salles');
      a('Onglet.LibelleLong', 'Planning multisemaine des personnels');
      a('Onglet.LibelleLong', 'Planning multisemaine des matériels');
      a('Onglet.LibelleLong', 'Planning des professeurs');
      a('Onglet.LibelleLong', 'Planning des élèves');
      a('Onglet.LibelleLong', 'Planning des classes/groupes');
      a('Onglet.LibelleLong', 'Planning des salles');
      a('Onglet.LibelleLong', 'Planning des personnels');
      a('Onglet.LibelleLong', 'Planning des matériels');
      a('Onglet.LibelleLong', 'Missions');
      a('Onglet.LibelleLong', 'Récapitulatif des demandes de travaux');
      a('Onglet.LibelleLong', '');
      a('Onglet.LibelleLong', '');
      a('Onglet.LibelleLong', "Trombinoscope de l'équipe pédagogique");
      a('Onglet.LibelleLong', '');
      a('Onglet.LibelleLong', '');
      a('Onglet.LibelleLong', '');
      a('Onglet.LibelleLong', '');
      a('Onglet.LibelleLong', '');
      a('Onglet.LibelleLong', '');
      a('Onglet.LibelleLong', '');
      a('Onglet.LibelleLong', '');
      a('Onglet.LibelleLong', '');
      a('Onglet.LibelleLong', '');
      a('Onglet.LibelleLong', '');
      a('Onglet.LibelleLong', '');
      a('Onglet.LibelleLong', "Punitions de l'élève");
      a('Onglet.LibelleLong', 'Saisie des dispenses par élève');
      a('Onglet.LibelleLong', '');
      a('Onglet.LibelleLong', "Évaluation de la qualité de l'accueil");
      a('Onglet.LibelleLong', 'Mes services');
      a('Onglet.LibelleLong', "Récapitulatif d'export LSU");
      a('Onglet.LibelleLong', 'Détail des notes');
      a('Onglet.LibelleLong', 'Référentiels par domaine');
      a('Onglet.LibelleLong', 'Référentiels par matière');
      a('Onglet.LibelleLong', 'Détail des évaluations');
      a('Onglet.LibelleLong', '');
      a('Onglet.LibelleLong', '');
      a('Onglet.LibelleLong', '');
      a('Onglet.LibelleLong', '');
      a('Onglet.LibelleLong', '');
      a('Onglet.LibelleLong', '');
      a('Onglet.LibelleLong', '');
      a('Onglet.LibelleLong', '');
      a('Onglet.LibelleLong', '');
      a('Onglet.LibelleLong', '');
      a('Onglet.LibelleLong', '');
      a('Onglet.LibelleLong', '');
      a('Onglet.LibelleLong', '');
      a('Onglet.LibelleLong', '');
      a('Onglet.LibelleLong', '');
      a('Onglet.LibelleLong', '');
      a('Onglet.LibelleLong', '');
      a('Onglet.LibelleLong', '');
      a('Onglet.LibelleLong', '');
      a('Onglet.LibelleLong', '');
      a('Onglet.LibelleLong', '');
      a('Onglet.LibelleLong', '');
      a('Onglet.LibelleLong', 'Appréciations de pied de bulletin');
      a('Onglet.LibelleLong', '');
      a('Onglet.LibelleLong', '');
      a('Onglet.LibelleLong', '');
      a('Onglet.LibelleLong', '');
      a('Onglet.LibelleLong', '');
      a('Onglet.LibelleLong', '');
      a('Onglet.LibelleLong', 'Appel');
      a('Onglet.LibelleLong', '');
      a('Onglet.LibelleLong', 'Inscriptions aux services périscolaires');
      a('Onglet.LibelleLong', 'Emploi du temps des classes');
      a('Onglet.LibelleLong', 'Les informations concernant mon enfant');
      a('Onglet.LibelleLong', '');
      a('Onglet.LibelleLong', '');
      a('Onglet.LibelleLong', '');
      a('Onglet.LibelleLong', '');
      a('Onglet.LibelleLong', 'Pyramide des âges');
      a('Onglet.LibelleLong', 'Histogramme des âges');
      a('Onglet.LibelleLong', 'Répartition des élèves par âge');
      a('Onglet.LibelleLong', '');
      a('Onglet.LibelleLong', 'Saisie du cahier de textes');
      a('Onglet.LibelleLong', '');
      a('Onglet.LibelleLong', '');
      a('Onglet.LibelleLong', 'Récapitulatif des demandes de tâches');
      a('Onglet.LibelleLong', '');
      a('Onglet.LibelleLong', '');
      a('Onglet.LibelleLong', 'Manuels numériques');
      a('Onglet.LibelleLong', 'Blog');
      a('Onglet.LibelleLong', '');
      a('Onglet.LibelleLong', 'Blog');
      a('Onglet.LibelleLong', 'Médiathèque des documents du blog');
      a('Onglet.LibelleLong', 'Saisie du cahier de textes');
      a(
        'Onglet.LibelleLong',
        "Faire une nouvelle inscription et consulter l'état de mes inscriptions en cours",
      );
      a(
        'Onglet.LibelleLong',
        "Faire une nouvelle inscription et consulter l'état de mes inscriptions en cours",
      );
      a('Onglet.LibelleLong', '');
      a('Onglet.LibelleLong', '');
      a(
        'Onglet.LibelleLong',
        'Saisir mes avis pour le professeur principal/tuteur',
      );
      a('Onglet.LibelleLong', 'Consulter le suivi de mes élèves');
      a('Onglet.LibelleLong', '');
      a(
        'Onglet.LibelleLong',
        'Suivi des justifications des absences et retards',
      );
      a('Onglet.LibelleLong', 'Maintenance informatique');
      a('Onglet.LibelleLong', 'Commande');
      a('Onglet.LibelleLong', 'Mon cahier journal');
      a('Onglet.LibelleLong', '');
      a('Onglet.LibelleLong', '');
      a('Onglet.LibelleLong', '');
      a('Onglet.LibelleLong', 'Synthèse des acquis');
      a('Onglet.LibelleLong', '');
      a('Onglet.LibelleLong', 'Suivi du travail à faire par élève');
      a('Onglet.LibelleLong', 'Appréciations de la Fiche Avenir');
      a('Onglet.LibelleLong', 'Appels aux services périscolaires');
      a('Onglet.LibelleLong', '');
      a('Onglet.LibelleLong', '');
      a('Onglet.LibelleLong', "Difficultés et points d'appui");
      a('Onglet.LibelleLong', 'Bilan de compétences par matière');
      a('Onglet.LibelleLong', 'Saisie des appréciations générales du relevé');
      a('Onglet.LibelleLong', '');
      a('Onglet.LibelleLong', '');
      a('Onglet.LibelleLong', '');
      a('Onglet.LibelleLong', 'Les commissions');
      a('Onglet.LibelleLong', '');
      a('Onglet.LibelleLong', 'Remplacements');
      a('Onglet.LibelleLong', "Appels à l'internat");
      a('Onglet.LibelleLong', 'Remplacements');
      a('Onglet.LibelleLong', 'Recherches de stage');
      a(
        'Demo.Message',
        "Dans cette version de démonstration, aucune saisie n'est prise en compte.",
      );
      a('Demo.Identifiant', 'demonstration4');
      a('Demo.MotDePasse', 'pronotevs');
      a(
        'Louvre.Lien',
        "En savoir plus et découvrir l'exposition %s de la Petite Galerie du Louvre",
      );
      a(
        'mobile.redirigeVersionMobile',
        'Vous avez été redirigé vers la version mobile.',
      );
      a('mobile.accederVersionClassique', 'Accéder à la version classique');
      a('Kiosque.OuvrirManuel', 'Ouvrir le manuel sur le site');
      a('Kiosque.OuvrirAppli', "Ouvrir l'appli");
      a(
        'Kiosque.ContenuNonResponsive',
        "L'éditeur de ce manuel, n'a pas encore fourni de version compatible à la consultation sur smartphone.",
      );
      a('Kiosque.AutresMatieres', 'Autres matières');
      a(
        'SelectionAffichage',
        'Veuillez sélectionner un affichage au travers des menus ci-dessus',
      );
      a('mobile.bandeauIOS2', 'Application gratuite');
      a('mobile.bandeauAndroid2', 'Application gratuite');
      a('mobile.langue', 'Langue');
      a('tous', 'Tous');
      a('toutes', 'Toutes');
      a(
        'MessagePDF',
        "L'impression n'est pas possible ici mais vous pouvez utiliser le bouton PDF depuis votre Espace s'il est disponible pour l'affichage souhaité.",
      );
      a('MinutesCourt', 'min.');
      a('PeriodeCourt', 'T1');
      a('PeriodeCourt', 'T2');
      a('PeriodeCourt', 'T3');
      a('PeriodeCourt', 'S1');
      a('PeriodeCourt', 'S2');
      a('Message', 'Sélectionnez une classe');
      a('Message', 'Sélectionnez un groupe');
      a('Message', 'Sélectionnez un élève');
      a('Message', 'Sélectionnez un service');
      a('Message', 'Sélectionnez une appréciation');
      a('Message', 'Sélectionnez une période');
      a('Message', 'Aucun élève disponible pour cette période');
      a('Message', 'Aucun service disponible pour cette période');
      a('Message', 'Aucune appréciation disponible pour cette période');
      a('Message', "Il n'y a pas de notes pour la période sélectionnée.");
      a('Message', 'Sélectionnez une classe ou un groupe');
      a('Message', 'Aucun élève disponible pour cette classe');
      a('Message', 'Sélectionnez une compétence');
      a('Message', "Cette compétence n'est affectée à aucune classe");
      a('Message', 'Aucune compétence pour cet élève');
      a('Message', "Aucun bulletin n'est publié pour cet élève");
      a('Message', "Aucun relevé de notes n'est publié pour cet élève");
      a(
        'Message',
        "Aucun compte rendu de conseil de classe n'est publié pour cet élève",
      );
      a('Message', "Ce professeur n'enseigne à aucune classe");
      a(
        'Message',
        "Ce professeur n'enseigne aucune matière à la classe sélectionnée.",
      );
      a('Message', 'Sélectionnez un cycle');
      a('Message', 'Aucun cycle');
      a('Message', 'Sélectionnez une matière');
      a('Message', 'Aucune matière');
      a('Message', 'Sélectionnez un item');
      a('Message', 'Sélectionnez une salle');
      a('Message', 'Aucun élève disponible pour ce groupe');
      a('Message', 'Sélectionnez une discipline du livret scolaire');
      a('Message', 'Aucune discipline livret scolaire');
      a('Message', 'Sélectionnez un professeur');
      a('Message', "Aucune classe n'est disponible");
      a('Message', "Aucun bilan périodique n'est publié pour cet élève");
      a('Message', "Aucune salle n'est disponible");
      a('Message', 'Sélectionnez un personnel');
      a('Message', 'Sélectionnez un matériel');
      a('Message', "Aucun matériel n'est disponible");
      a('Message', "Aucune période n'est disponible");
      a('Message', 'Sélectionnez un sous-domaine');
      a('Professeur', 'Professeur');
      a('Professeurs', 'Professeurs');
      a('ProfesseursHistorique', 'Professeurs supprimés');
      a('Profs', 'Professeur(s)');
      a('Classes', 'Classes');
      a('Groupes', 'Groupes');
      a('Parties', 'Parties');
      a('Salles', 'Salles');
      a('Niveau', 'Niveau');
      a('Nom', 'Nom');
      a('Personnel', 'Personnel');
      a('Personnels', 'Personnels');
      a('PersonnelsHistorique', 'Personnels supprimés');
      a('ResponsablesDelegues', 'Responsables délégués');
      a('Materiel', 'Matériel');
      a('Materiels', 'Matériels');
      a('pilier.socleCommun', 'Socle commun');
      a('pilier.personnalise', 'Compétences personnalisées');
      a('AnneeScolaire', 'Année scolaire');
      a('Justifier', 'Justifier');
      a('Semaine', 'Semaine');
      a('SemaineEnCours', 'Semaine en cours');
      a('MoisEnCours', 'Mois en cours');
      a('AnneeComplete', 'Année complète');
      a('Depuis', 'depuis');
      a('Du', 'du');
      a('De', 'de');
      a('Au', 'au');
      a('A', 'à');
      a('Le', 'le');
      a('jusquAu', "jusqu'au");
      a('aPartirDu', 'à partir du');
      a('jusquA', "jusqu'à");
      a('aPartirDe', 'à partir de');
      a('Debut', 'Début');
      a('Fin', 'Fin');
      a('Matin', 'matin');
      a('ApresMidi', 'après-midi');
      a('dea', 'de %s à %s');
      a('Le_Maj', 'Le');
      a('EtLe', 'et le');
      a('Non', 'Non');
      a('Oui', 'Oui');
      a('Et', 'et');
      a('ou', 'ou');
      a('Aucun', 'Aucun');
      a('Aucune', 'Aucune');
      a('Commentaire', 'Commentaire');
      a('Annee', 'Année');
      a('Matieres', 'Matières');
      a('Matiere', 'Matière');
      a('Groupe', 'Groupe');
      a('MesServices', 'Mes services');
      a('Classe', 'Classe');
      a('Salle', 'Salle');
      a('Eleves', 'Élèves');
      a('Eleve', 'Élève');
      a('Responsables', 'Responsables');
      a('Responsable', 'Responsable');
      a('Parent', 'Parent');
      a('Parents', 'Parents');
      a('Etudiants', 'Élèves');
      a('Etudiant', 'Élève');
      a('Appreciation', 'Appréciation');
      a('Devoirs', 'Devoirs');
      a('Moyennes', 'Moyennes');
      a('MoyenneGenerale', 'Moyenne générale');
      a('Heure', 'Heure');
      a('Date', 'Date');
      a('Duree', 'Durée');
      a('SaisieImpossible', 'Saisie impossible !');
      a(
        'PeriodeCloturee',
        'La période est clôturée.\nSeuls les utilisateurs du groupe administratif peuvent enlever la clôture.',
      );
      a('Grille', 'grille');
      a('Total', 'Total');
      a('FormatImpression', 'Impression grand format');
      a('FormatImpression', 'Impression moyen format');
      a('FormatImpression', 'Impression petit format');
      a(
        'MessageTailleMaxAppr',
        "Vous avez atteint la taille maximale de l'appréciation",
      );
      a('HeuresPerdues', 'Heures perdues');
      a('Multiple', 'Multiple');
      a('ToutesLesMatieres', 'Toutes les matières');
      a('ToutesLesClasses', 'Toutes les classes');
      a('DeLaClasse', 'De la classe');
      a('DuGroupe', 'Du groupe');
      a('TousLesEleves', 'Tous les élèves');
      a('NonPublie', 'Non publié');
      a('AfficherSujet', 'Sujet');
      a('AfficherCorrige', 'Corrigé');
      a('AfficherCopieEleve', "Afficher la copie de l'élève");
      a('Libelle', 'Libellé');
      a('Periode', 'Période');
      a('Competence', 'Compétence');
      a('Item', 'Item');
      a('Discipline', 'Discipline');
      a('GenreDIncident', "Genre de l'incident");
      a('SemaineFeriee', 'Semaine fériée');
      a('RegleAdminAbr', 'RA');
      a('Code', 'Code');
      a('Authentification', 'Authentification');
      a('Identification', 'Identification');
      a('FicheRenseignement', 'Voir la fiche de renseignements');
      a('VoirPhotoEleve', "Voir la photo de l'élève");
      a('Autre', 'Autre');
      a('EnregistrementEnCours', 'Enregistrement en cours');
      a('SemainePrecedente', 'Semaine précédente');
      a('SemaineSuivante', 'Semaine suivante');
      a(
        'mficheliencloud',
        '{"titre":"Information sur le partage","html":{"_T":23,"V":"<p>Le document&nbsp;partag&eacute; depuis le&nbsp;cloud sera accessible &agrave; toutes les personnes qui disposeront du lien.</p>"},"width":265,"height":100,"type":4,"boutons":{"_T":18,"V":1024}}',
      );
      a(
        'ErreurMinMaxEntier',
        'Le nombre saisi doit être compris entre %d et %d.',
      );
      a('Nb', 'Nb.');
      a('TypeDeDonnees', 'Type de données');
      a('SelectionnerTypesDeDonnees', 'Sélectionner les types de données');
      a('UniquementMesMatieres', 'Uniquement mes matières');
      a('AfficherToutesMatieres', 'Afficher toutes les matières');
      a('UniquementMesClasses', 'Uniquement mes classes');
      a('TousSelectionner', 'Tout sélectionner');
      a('Themes', 'Thème(s)');
      a('URLIncorrecte', "L'adresse internet est incorrecte.");
      a('Tuteur', 'Tuteur');
      a('ProfPrincipal', 'Prof. principal');
      a(
        'ActiverCompressionAutoPDF',
        "Activer l'optimisateur de pièces jointes",
      );
      a(
        'DesactiverCompressionAutoPDF',
        "Désactiver l'optimisateur de pièces jointes",
      );
      a('PersonnelAccompagnant', 'Ce personnel est un accompagnant');
      a('Service', 'Service');
      a('ConseilDeClasse', 'Conseil de classe');
      a('FichierTexte', 'Fichier texte');
      a('FichierPDF', 'Fichier PDF');
      a('FichierExcel', 'Fichier Excel');
      a('FichierArchive', 'Fichier archive');
      a('FichierImage', 'Fichier image');
      a('FichierSon', 'Fichier son');
      a('FichierVideo', 'Fichier vidéo');
      a('FichierDiaporama', 'Fichier diaporama');
      a('Fichier', 'Fichier');
      a('WAI.ListeSelectionTheme', 'Sélectionnez un thème');
      a('WAI.ListeSelectionPeriode', 'Sélectionnez une période');
      a('WAI.ListeSelectionMatiere', 'Sélectionnez une matière');
      a('WAI.ListeSelectionClasse', 'Sélectionnez une classe');
      a('WAI.ListeSelectionEleve', 'Sélectionnez un élève');
      a('WAI.ListeSelectionSemaine', 'Sélectionnez une semaine');
      a('WAI.ListeSelectionMois', 'Sélectionnez un mois');
      a('WAI.listeSelectionPalier', 'Sélectionnez un cycle');
      a('WAI.listeSelectionCompetence', 'Sélectionnez une compétence');
      a('WAI.listeSelectionEvaluation', 'Sélectionnez une évaluation');
      a(
        'WAI.ListeSelectionPartieJournee',
        'Sélectionnez la partie de journée.',
      );
      a(
        'WAI.SelectionSessionRencontre',
        'Sélectionnez une session de rencontres',
      );
      a('WAI.SelectionPortail', 'Sélectionnez un portail');
      a('WAI.SelectionEDT', 'Sélectionnez un emploi du temps');
      a('WAI.SelectionRessourceEDT', 'Sélectionnez une ressource');
      a('WAI.SelectionLieu', 'Sélectionnez un lieu');
      a('WAI.SelectionRubrique', 'Sélectionnez une rubrique');
      a('WAI.SelectionProfesseur', 'Sélectionnez un professeur');
      a('WAI.SelectionPersonnel', 'Sélectionnez un personnel');
      a('WAI.SelectionEtablissement', 'Sélectionnez un établissement');
      a('WAI.SelectionPeriodicite', 'Sélectionnez une périodicité');
      a(
        'WAI.SelectionClasseGroupeNiv',
        'Sélectionnez une classe, un groupe ou un niveau',
      );
      a('WAI.SelectionResponsable', 'Sélectionnez un responsable');
      a('WAI.MenuSelectGroupe', 'Menu déroulant : Choisissez un groupe :');
      a('WAI.MenuSelectClasse', 'Menu déroulant : Choisissez une classe :');
      a(
        'WAI.MenuSelectClasseGroupe',
        'Menu déroulant : choisissez une classe ou un groupe :',
      );
      a('ModeExclusif.UsageExclusif', 'Usage exclusif');
      a(
        'ModeExclusif.EntrerModeExclusif',
        'Des opérations doivent être effectuées sur la base de données. Vous êtes temporairement mis en mode consultation.',
      );
      a(
        'ModeExclusif.SortieModeExclusif',
        "L'administrateur a terminé ses opérations sur la base. Cette dernière va être mise à jour et vous allez retrouver vos droits.",
      );
      a('ModeExclusif.ConsultationTemporaire', 'Consultation temporaire');
      a(
        'ModeExclusif.SaisieImpossibleConsultation',
        'La saisie est impossible en mode consultation',
      );
      a(
        'ModeExclusif.SortieModeExclusifParentEleve',
        'Les opérations de maintenance sont terminées, vous pouvez à nouveau effectuer des saisies. Merci de votre patience',
      );
      a(
        'ModeExclusif.EntrerModeExclusifParentEleve',
        "Des opérations de maintenance sont réalisées par la direction de l'établissement. Seule la consultation des données est possible, vous ne pouvez pas effectuer de saisie.",
      );
      a(
        'ModeExclusif.TitreSortieModeExclusifParentEleve',
        'Maintenance terminée',
      );
      a(
        'ModeExclusif.TitreEntrerModeExclusifParentEleve',
        'Maintenance en cours',
      );
      a(
        'Fenetre_SelectionRessource.SelectionnerEleves',
        'Sélectionner des élèves',
      );
      a(
        'Fenetre_SelectionRessource.SelectionnerEleve',
        'Sélectionner un élève',
      );
      a(
        'Fenetre_SelectionRessource.SelectionnerProfesseurs',
        'Sélectionner des professeurs',
      );
      a(
        'Fenetre_SelectionRessource.SelectionnerProfesseur',
        'Sélectionner un professeur',
      );
      a(
        'Fenetre_SelectionRessource.SelectionnerResponsables',
        'Sélectionner des responsables',
      );
      a(
        'Fenetre_SelectionRessource.SelectionnerResponsable',
        'Sélectionner un responsable',
      );
      a(
        'Fenetre_SelectionRessource.SelectionnerPersonnels',
        'Sélectionner des personnels',
      );
      a(
        'Fenetre_SelectionRessource.SelectionnerPersonnel',
        'Sélectionner un personnel',
      );
      a(
        'Fenetre_SelectionRessource.SelectionnerMaitresDeStage',
        'Sélectionner des maîtres de stage',
      );
      a(
        'Fenetre_SelectionRessource.SelectionnerMaitreDeStage',
        'Sélectionner un maître de stage',
      );
      a(
        'Fenetre_SelectionRessource.SelectionnerInspecteurs',
        'Sélectionner des inspecteurs pédagogiques',
      );
      a(
        'Fenetre_SelectionRessource.SelectionnerInspecteur',
        'Sélectionner un inspecteur pédagogique',
      );
      a(
        'Fenetre_SelectionRessource.SelectionnerPeriodes',
        'Sélectionner des périodes',
      );
      a(
        'Fenetre_SelectionRessource.SelectionnerPeriode',
        'Sélectionner une période',
      );
      a(
        'Fenetre_SelectionRessource.SelectionnerClasses',
        'Sélectionner des classes',
      );
      a(
        'Fenetre_SelectionRessource.SelectionnerClasse',
        'Sélectionner une classe',
      );
      a(
        'Fenetre_SelectionRessource.filtreAfficher',
        'Afficher seulement les :',
      );
      a(
        'Fenetre_SelectionRessource.filtreProfPrincipaux',
        'Professeurs principaux',
      );
      a(
        'Fenetre_SelectionRessource.filtreProfReferents',
        'Professeurs référents',
      );
      a('Fenetre_SelectionRessource.filtreProfTuteurs', 'Tuteurs');
      a(
        'Fenetre_SelectionRessource.FiltreUniquementElevesEnseigne',
        "Uniquement les élèves auxquels j'enseigne",
      );
      a(
        'FicheEtablissement.ContacterEtablissement',
        "Contacter l'établissement",
      );
      a('FicheEtablissement.ReglementInterieur', 'Règlement intérieur');
      a('FicheEtablissement.CharteUtilisation', "Charte d'utilisation");
      a('FicheEtablissement.Etablissement', 'Etablissement');
      a(
        'FicheEtablissement.Accepter',
        "J'ai pris connaissance des documents disponibles en téléchargement",
      );
      a(
        'FicheEtablissement.ReferentsHarcelement',
        'Référent(s) contre le harcèlement',
      );
      a('FicheEtablissement.ReferentsVieScolaire', 'Référent(s) vie scolaire');
      a('FicheEtablissement.ContacterVS', 'Contacter');
      a('fenetreHarcelement.titreFenetre', 'Non au harcèlement');
      a(
        'fenetreHarcelement.victimeDeHarcelement',
        'Victime ou témoin de harcèlement ?',
      );
      a(
        'fenetreHarcelement.referentsContreHarcelement',
        "Référent(s) contre le harcèlement au sein de l'établissement %s",
      );
      a('fenetreHarcelement.lesNumerosUtiles', 'Les numéros utiles');
      a('fenetreHarcelement.ContacterReferent', 'Contacter');
      a('TypeNiveauDifficulte.0', 'Non précisé');
      a('TypeNiveauDifficulte.1', 'Facile');
      a('TypeNiveauDifficulte.2', 'Moyen');
      a('TypeNiveauDifficulte.3', 'Difficile');
      a('AvisReligion.titreSelection', 'Sélectionner un avis');
      a('mentionsLegales', 'Mentions légales');
      a('Fenetre_ParametrageEDT.DefinitionAxes', 'Définition des axes');
      a('Fenetre_ParametrageEDT.Titre_ParJour', 'Afficher par jour');
      a(
        'Fenetre_ParametrageEDT.Titre_OngletParJour',
        'Afficher un onglet par jour',
      );
      a('Fenetre_ParametrageEDT.Titre_ParSemaine', 'Afficher par semaine');
      a(
        'Fenetre_ParametrageEDT.PersonnalisationPlannings',
        'Personnalisation des plannings',
      );
      a(
        'Fenetre_ParametrageEDT.PersonnalisationEDTs',
        'Personnalisation des emplois du temps',
      );
      a(
        'Fenetre_ParametrageEDT.JoursRessourcesOuSemaines',
        'Jours/Ressources ou Semaines',
      );
      a(
        'Fenetre_ParametrageEDT.RessourcesOuSemaines',
        'Ressources ou Semaines',
      );
      a('Fenetre_ParametrageEDT.Jours', 'Jours');
      a('Fenetre_ParametrageEDT.Horaires', 'Horaires');
      a(
        'Fenetre_ParametrageEDT.NombreSequencesHoraires',
        'Nombre de séquences horaires :',
      );
      a('Fenetre_ParametrageEDT.Personnalise', 'Personnalisé :');
      a(
        'Fenetre_ParametrageEDT.LabelNbJoursMax',
        'Jours (planning multisemaine uniquement) :',
      );
      a('Fenetre_ParametrageEDT.PasAAfficherDefaut', 'Par Défaut (%s)');
      a(
        'Fenetre_ParametrageEDT.NombreMaxDeDonnees',
        "Nombre maximum de données à l'écran",
      );
      a('Fenetre_ParametrageEDT.PasAAfficherSequence', 'Séquence (%s)');
      a(
        'Fenetre_ParametrageEDT.PasAAfficherMatinPauseApresMidi',
        'Matin/Pause/Apres-midi',
      );
      a(
        'Fenetre_ParametrageEDT.PasAAfficherMatinApresMidi',
        'Matin/Apres-midi',
      );
      a(
        'Fenetre_ParametrageEDT.PucePasHoraireAAfficher',
        'Pas horaire à afficher',
      );
      a(
        'Fenetre_ParametrageEDT.ExplicationPasHoraireAAfficher',
        'La grille est définie pour saisir des cours de %s. Vous avez la possiblité de réduire la finesse de votre pas, cela allègera votre vision mais ne vous permettra plus de saisir des cours aussi finement.',
      );
      a(
        'Fenetre_ParametrageEDT.DureePasHoraireAAfficher',
        'Afficher mes emplois du temps en :',
      );
      a(
        'Fenetre_ParametrageEDT.DureePasHoraireAAfficherPlanning',
        'Afficher mes plannings en :',
      );
      a('Fenetre_ParametrageEDT.PuceStructure', 'Structure');
      a(
        'Fenetre_ParametrageEDT.PuceJoursEtHeuresEdt',
        'Jours et heures à afficher dans les emplois du temps',
      );
      a(
        'Fenetre_ParametrageEDT.PuceJoursEtHeuresPlanning',
        'Jours et heures à afficher dans les plannings',
      );
      a('Fenetre_ParametrageEDT.PucePresentation', 'Présentation');
      a(
        'Fenetre_ParametrageEDT.LabelModele',
        'Sélectionnez un modèle de grille',
      );
      a('Fenetre_ParametrageEDT.ModeleDefaut', 'Par Défaut');
      a('Fenetre_ParametrageEDT.ModelePerso', 'Personnalisé');
      a(
        'Fenetre_ParametrageEDT.PrefsDependDesRessources',
        "Les préférences de structure d'affichage de la grille dépendront de l'établissement d'appartenance des ressources affichées",
      );
      a(
        'Fenetre_ParametrageEDT.JourMaxNonApplicable',
        '(non applicable au planning par jour)',
      );
      a('DocumentsATelecharger.Aucun', 'Aucun document à télécharger');
      a('DocumentsATelecharger.Annee', 'Année');
      a('DocumentsATelecharger.ADeposer', 'A déposer');
      a('documentsATelecharger.marquerNonLu', 'Marquer comme non lu');
      a('documentsATelecharger.marquerLu', 'Marquer comme lu');
      a('documentsATelecharger.publieDuAu', 'Publié du %0:s au %1:s');
      a('documentsATelecharger.publieLe', 'Publié le %s');
      a('documentsATelecharger.deposerLeFichier', 'Déposer le fichier');
      a('documentsATelecharger.genererLePdf', 'Générer le PDF');
      a('documentsATelecharger.archiverSurMonCloud', 'Archiver sur mon cloud');
      a(
        'documentsATelecharger.redeposerLeFichierRempli',
        'Redéposer le fichier rempli',
      );
      a('documentsATelecharger.telecharger', 'Télécharger');
      a('documentsATelecharger.categorie', 'catégorie');
      a('documentsATelecharger.aJoindreJusquau', 'à joindre avant le %s');
      a('documentsATelecharger.documentADeposer', 'Documents à déposer');
      a(
        'documentsATelecharger.dateLimiteDepassee',
        'Date limite du dépôt dépassée',
      );
      a('documentsATelecharger.mesDocuments', 'Mes documents');
      a('documentsATelecharger.docAFournir', 'A déposer en ligne');
      a(
        'documentsATelecharger.mesDocsATelecharger',
        'Mes documents à télécharger',
      );
      a('documentsATelecharger.hintDocsASigner', '%s documents à signer');
      a('documentsATelecharger.hintDocsNonLu', '%s documents non lus');
      a('documentsATelecharger.hintDocsADeposer', '%s documents à déposer');
      a('documentsATelecharger.hintDocASigner', '%s document à signer');
      a('documentsATelecharger.hintDocNonLu', '%s document non lu');
      a('documentsATelecharger.hintDocADeposer', '%s document à déposer');
      a('documentsATelecharger.bulletins', 'Bulletins et bilans');
      a(
        'documentsATelecharger.hintMemo',
        'Un commentaire est associé à ce document',
      );
      a('documentsATelecharger.nonLus', 'non lus');
      a('documentsATelecharger.toutesLesNatures', 'Toutes les natures');
      a('documentsATelecharger.supprimerDuCasier', 'Supprimer de mon casier');
      a(
        'documentsATelecharger.messageSuppression',
        'Confirmez-vous la suppression du document ?',
      );
      a(
        'documentsATelecharger.ConfirmSupprDocCasier',
        'Confirmez-vous la suppression du document %s de votre casier ?',
      );
      a('documentsATelecharger.diffusePar', 'Diffusé par %s');
      a('documentsATelecharger.diffuseParLe', 'Diffusé par %0:s le %1:s');
      a('documentsATelecharger.deposeParMoi', 'Déposé par moi le %s');
      a(
        'documentsATelecharger.deposeParUnResponsable',
        'Déposé par un autre responsable le %s',
      );
      a(
        'documentsATelecharger.deposeparEtablissement',
        "Déposé par l'établissement le %s",
      );
      a('documentsATelecharger.jusquAu', "Jusqu'au %s");
      a(
        'documentsATelecharger.aucunDocumentAdeposer',
        'Aucun document à déposer',
      );
      a('ObjetFenetre_ProgrammationPunition.Demande', 'Demande');
      a('ObjetFenetre_ProgrammationPunition.Motifs', 'Motifs');
      a('ObjetFenetre_ProgrammationPunition.Circonstances', 'Circonstances');
      a('ObjetFenetre_ProgrammationPunition.Surveillant', 'Surveillant');
      a('ObjetFenetre_ProgrammationPunition.SalleOuLieu', 'Salle ou lieu');
      a('ObjetFenetre_ProgrammationPunition.Tache', 'Travail à faire');
      a('ObjetFenetre_ProgrammationPunition.Duree', 'Durée');
      a('ObjetFenetre_ProgrammationPunition.VoirLeDetail', 'Voir le détail');
      a('ObjetFenetre_ProgrammationPunition.Etat', 'État');
      a('WidgetEDTJournalier.Dispense', 'Dispense');
      a('WidgetEDTJournalier.ALaMaison', 'A la maison');
      a('TypeAvisConseil.Libelle.type_0', '');
      a('TypeAvisConseil.LibelleOuiNon.type_0', 'Non ');
      a('TypeAvisConseil.Abbreviation.type_0', '');
      a('TypeAvisConseil.Libelle.type_1', 'Très favorable');
      a('TypeAvisConseil.LibelleOuiNon.type_1', 'Oui');
      a('TypeAvisConseil.Abbreviation.type_1', 'T.fav.');
      a('TypeAvisConseil.Libelle.type_2', 'Favorable');
      a('TypeAvisConseil.LibelleOuiNon.type_2', 'Oui');
      a('TypeAvisConseil.Abbreviation.type_2', 'Fav.');
      a('TypeAvisConseil.Libelle.type_3', 'Réservé');
      a('TypeAvisConseil.LibelleOuiNon.type_3', 'Non ');
      a('TypeAvisConseil.Abbreviation.type_3', 'Rés.');
      a('TypeAvisConseil.Libelle.type_4', 'Défavorable');
      a('TypeAvisConseil.LibelleOuiNon.type_4', 'Non ');
      a('TypeAvisConseil.Abbreviation.type_4', 'Déf.');
      a(
        'UtilitaireOAuth2.message',
        "Veuillez vous connecter sur votre cloud.\n\n%s si votre fenêtre de connexion au cloud ne s'est pas ouverte.\n\nFermer ce message pour annuler la connexion au cloud.",
      );
      a('UtilitaireOAuth2.lien', 'Cliquer sur ce lien');
      a(
        'UtilitaireOAuth2.echec',
        "Impossible d'accéder au cloud, veuillez réessayer ultérieurement.",
      );
      a(
        'TypeAffichageRemplacements.Propositions',
        'Propositions de remplacement',
      );
      a('TypeAffichageRemplacements.APourvoir', 'Remplacements à pourvoir');
      a(
        'TypeAffichageRemplacements.MesRemplacementsAVenir',
        'Mes remplacements à venir',
      );
      a(
        'TypeAffichageRemplacements.MesRemplacementsPasses',
        'Mes remplacements passés',
      );
      a(
        'TypeAffichageRemplacements.AutresRemplacements',
        "Remplacés par d'autres professeurs",
      );
      a(
        'TypeAffichageRemplacements.AucuneProposition',
        'Aucune proposition de remplacement pour les filtres sélectionnés',
      );
      a(
        'TypeAffichageRemplacements.AucunAPourvoir',
        'Aucun remplacement à pourvoir pour les filtres sélectionnés',
      );
      a(
        'TypeAffichageRemplacements.AucunAVenir',
        'Aucun remplacement à venir pour les filtres sélectionnés',
      );
      a(
        'TypeAffichageRemplacements.AucunPasse',
        'Aucun remplacement passé pour les filtres sélectionnés',
      );
      a(
        'TypeAffichageRemplacements.AucunAutre',
        'Aucun autre remplacement pour les filtres sélectionnés',
      );
      a(
        'RemplacementsEnseignants.choixEnregistre',
        'Votre choix a été pris en compte',
      );
      a('ObjetFenetre_SelectionCours.titre', 'Choisir le cours');
      a(
        'LienPolitiqueMotDePasse.UrlFAQMotDePasse',
        'https://www.index-education.com/redirect.php?produit=pn&page=comment-renforcer-securite&version=2025.1.3.0&distrib=FR&lg=fr&flag=Espace_Accompagnant&type=LienDocProduit',
      );
      a(
        'AvertissementDemo',
        "Ce site est une version de démonstration de PRONOTE.\nPour consulter vos données personnelles vous devez vous connecter à l'adresse fournie par votre établissement.",
      );
      a('mobile.bandeauIOS1', "Installer ou configurer l'application PRONOTE");
      a('mobile.storeTextIOS', "Télécharger l'application PRONOTE");
      a(
        'mobile.bandeauAndroid1',
        "Installer ou configurer l'application PRONOTE",
      );
      a('PiedPage.tutosForumQCM', 'Tutos vidéo');
      a(
        'PiedPage.Canope',
        "Le réseau de création et d'accompagnement pédagogiques",
      );
      a('PiedPage.PageEtablissement', "Page de l'établissement");
      a(
        'FenetreMentionsLegales.adresseEtablissement',
        "Adresse de l'établissement",
      );
      a('PiedPage.toutSavoirPronote', 'Tout savoir sur PRONOTE');
      a('Commande.Accueil.Actif', 'Accueil');
      a('Commande.Validation.Actif', 'Validez votre saisie');
      a('Commande.Validation.Inactif', 'Aucune donnée à valider');
      a('Commande.Impression.Actif', 'Imprimer');
      a('Commande.Impression.Inactif', 'Aucune impression pour cet affichage');
      a('Commande.QRCode.Actif', "QR code de l'application");
      a('Commande.Communication.Actif', 'Communication');
      a('Commande.PDF.Actif', "Générer un PDF pour l'impression");
      a('Commande.PDF.Inactif', 'Aucun PDF pour cet affichage');
      a('Commande.Harcelement', 'Stop harcèlement');
      a('Commande.Aide.Actif', "Accéder à l'aide en ligne");
      a('Commande.PartageQCM', 'Partage de QCM');
      a('Commande.TelechargerClient.Actif', 'Télécharger le Client PRONOTE');
      a(
        'Commande.SuivrePronoteTwitter.Actif',
        'Suivre PRONOTE sur X, ex-Twitter',
      );
      a('connexion.AccesRefuse', 'Accès refusé');
      a(
        'connexion.ErreurIdentification',
        'Votre identifiant ou votre mot de passe est incorrect.\nPour information, la saisie du mot de passe doit respecter les minuscules et majuscules.',
      );
      a(
        'connexion.ErreurAutorisation',
        "Vous n'avez pas accès à l'#1.\nContactez l'établissement afin qu'il mette à jour votre profil d'autorisations.",
      );
      a(
        'connexion.ErreurConnexionClasse',
        "Vous n'avez pas les autorisations nécessaires pour accéder aux affichages liés au mode de connexion 'Dans la classe'.",
      );
      a(
        'connexion.ErreurAucuneRessource',
        "Vous n'avez pas accès à l'#1.\nContactez l'établissement afin qu'il mette à jour votre fiche de renseignements.",
      );
      a(
        'connexion.ErreurConnexion',
        "Vous n'avez pas les autorisations nécessaires pour accéder aux affichages",
      );
      a(
        'connexion.ErreurBloqueeEleve',
        "Suite à votre départ de l'établissement, votre connexion à l'Espace élèves a été bloquée.",
      );
      a(
        'connexion.ErreurFonctionAccompagnant',
        "Vous n'avez pas accès à l'#1.\nContactez l'établissement afin qu'il mette à jour votre fonction.",
      );
      a(
        'connexion.ErreurAccompagnantAucunEleve',
        "Vous n'avez pas accès à l'#1.\nContactez l'établissement afin qu'il vous affecte les élèves que vous accompagnez.",
      );
      a(
        'connexion.CompteDesactive_S',
        "Vous n'avez pas accès à l'%s.\nVotre compte a été désactivé.",
      );
      a('connexion.modeConnexion', 'Mode de connexion');
      a('connexion.modeConnexionTitre', 'Choisissez le mode de connexion.');
      a(
        'connexion.modeConnexionMessage',
        'En mode "Dans la classe" vous n\'aurez accès qu\'à la saisie des absences et du cahier de textes, pour plus de confidentialité.',
      );
      a('connexion.modeConnexion1', 'Domicile');
      a('connexion.modeConnexion2', 'Dans la classe');
      a('connexion.champsObligatoires', '* champs obligatoires');
      a('connexion.identifiant', 'Identifiant');
      a('connexion.identifiantTitre', 'Saisissez votre IDENTIFIANT.');
      a(
        'connexion.identifiantTitreDemo',
        "En version de démonstration, l'identifiant et le mot de passe ne sont pas modifiables.",
      );
      a('connexion.identifiantInfo', 'Saisissez votre identifiant.');
      a(
        'connexion.identifiantInfoDemo',
        "L'Identifiant n'est pas saisissable.",
      );
      a(
        'connexion.identifiantMessage',
        "Il vous est communiqué par l'établissement et peut être différent de votre nom de famille.",
      );
      a(
        'connexion.identifiantMsgInscription',
        "Saisissez l'e-mail que vous avez utilisé pour créer votre compte.",
      );
      a('connexion.motDePasse', 'Mot de passe');
      a('connexion.motDePasseTitre', 'Saisissez votre MOT DE PASSE.');
      a(
        'connexion.motDePasseTitreDemo',
        'Cliquez sur "Se connecter" afin de découvrir l\'#1.',
      );
      a('connexion.motDePasseInfo', 'Saisissez votre mot de passe.');
      a(
        'connexion.motDePasseInfoDemo',
        "Le mot de passe n'est pas saisissable.",
      );
      a(
        'connexion.motDePasseMessage',
        'Il vous est communiqué par l\'établissement, vous pourrez le modifier dans l\'onglet "#1".',
      );
      a(
        'connexion.motDePasseMessageDemo',
        "Vous pourrez consulter et saisir toutes les données, en revanche aucune validation n'est possible.",
      );
      a(
        'connexion.motDePasseMsgInscription',
        'Saisissez le mot de passe que vous avez utilisé pour créer votre compte.',
      );
      a('connexion.seConnecter', 'Se connecter');
      a('connexion.seConnecterTitre', 'Cliquez sur le bouton "Se connecter".');
      a(
        'connexion.ConnexionCAS',
        'Connexion à PRONOTE.net - Veuillez patienter...',
      );
      a('connexion.altImageDeFond', 'Image de fond');
      a('connexion.lienPartenaire', 'Redirection site partenaire');
      a('connexion.SeDeconnecter', 'Se déconnecter');
      a('connexion.SeSouvenir', 'Se souvenir de moi');
      a(
        'connexion.SeSouvenirInfo',
        'Attention ne cocher pas cette option si vous êtes sur un ordinateur partagé.',
      );
      a('connexion.btnInterrogationTitle', 'Informations');
      a('inscription.titre', "Bienvenue dans l'Espace Inscription");
      a(
        'inscription.parent.titre',
        'Vous avez déjà un compte Parents dans cet établissement',
      );
      a(
        'inscription.parent.info',
        'Un autre enfant est déjà inscrit dans cet établissement, connectez vous directement à votre Espace Parents habituel',
      );
      a(
        'inscription.creation.titre',
        "Vous souhaitez faire une première demande d'inscription",
      );
      a(
        'inscription.creation.info',
        "Vous venez pour la première fois sur l'Espace Inscription et souhaitez créer un compte",
      );
      a(
        'inscription.espace.titre',
        "Vous avez déjà une inscription en cours et compte sur l'Espace Inscription",
      );
      a(
        'inscription.espace.info',
        "Vous avez déjà fait votre demande d'inscription et souhaitez suivre votre dossier",
      );
      a('accueil.titreSelecWidgets', "Personnalisation de la page d'accueil");
      a(
        'accueil.wai.selecWidgets',
        'Cocher les widgets pour les rendre visibles, décocher les widgets pour les masquer',
      );
      a('accueil.hintAfficherElements', 'Afficher les éléments masqués');
      a('accueil.hintCacherElements', 'Cacher les éléments');
      a('mobile.confirmDeco', 'Voulez-vous continuer et vous déconnecter ?');
      a('accueil.hintTravailFait', 'Fait');
      a('accueil.hintTravailNonFait', 'Non fait');
      a(
        'accueil.hintTravailAFaire',
        'Cocher le travail lorsque le travail est fait',
      );
      a(
        'accueil.hintParentTravailFait',
        '%s a indiqué que ce travail a été fait',
      );
      a('accueil.actualites', 'Informations & Sondages');
      a('accueil.actualitesPrimaire', 'Carnet de la classe');
      a('accueil.dernieresNotes', 'Dernières notes');
      a('accueil.vieScolaire', 'Carnet de correspondance');
      a('accueil.menu', 'Menu de la cantine');
      a('accueil.emploiDuTemps', 'Emploi du temps');
      a('accueil.monEmploiDuTemps', 'Mon emploi du temps');
      a('accueil.planning', 'Planning');
      a('accueil.toutVoir', 'Tout voir');
      a('accueil.aucuneNote', 'Aucune nouvelle note');
      a('accueil.aucuneAbsence', 'Aucun nouvel évènement');
      a('accueil.aucuneAgenda', 'Aucun évènement à venir');
      a('accueil.aucuneActualite', 'Aucune nouvelle information');
      a('accueil.pasDeMenu', 'Aucun menu');
      a('accueil.moyClasse', 'Moy. classe');
      a('accueil.moyGroupe', 'Moy. groupe');
      a(
        'accueil.prisConnaissance',
        "J'ai pris connaissance de cette information",
      );
      a('accueil.saisirReponse', 'Saisissez votre réponse ici !');
      a('accueil.info.executionsQCM', 'Les iDevoirs des 15 prochains jours');
      a('accueil.info.notes', 'Notes des 14 derniers jours');
      a('accueil.info.viescolaire', 'Les évènements des 15 derniers jours');
      a('accueil.info.menu', 'Le menu du jour');
      a('accueil.info.agenda', "L'agenda des 10 prochains évènements");
      a('accueil.info.actualites', 'Les informations et sondages non lus');
      a('accueil.info.edtJour', "L'emploi du temps du jour");
      a('accueil.info.edtSemaine', "L'emploi du temps de la semaine");
      a('accueil.info.discussions', 'Les discussions non lues');
      a('accueil.aucunMessage', 'Aucun nouveau message');
      a('accueil.PrecedenteConnection', 'Précédente connexion le %s à %s');
      a('accueil.enseignementADistance.titre', 'Mes prochains jours');
      a('accueil.enseignementADistance.titreParent', 'Ses prochains jours');
      a(
        'accueil.enseignementADistance.enEtablissement',
        "dans l'établissement",
      );
      a('accueil.enseignementADistance.aLaMaison', 'à la maison');
      a(
        'accueil.enseignementADistance.info',
        "Pour savoir où se déroule l'enseignement des prochains jours",
      );
      a('accueil.enseignementADistance.matin', 'matin');
      a('accueil.enseignementADistance.aprem', 'après-midi');
      a('accueil.EDT.commande.CDT', 'Saisir le cahier de textes');
      a('accueil.EDT.commande.appel', "Faire l'appel");
      a('accueil.EDT.commande.notes', 'Saisir des notes');
      a('accueil.EDT.commande.evaluations', 'Saisir des évaluations');
      a('accueil.EDT.commande.appreciations', 'Saisir des appréciations');
      a('accueil.EDT.commande.information', 'Diffuser une information');
      a('accueil.EDT.commande.sondage', 'Effectuer un sondage');
      a(
        'accueil.EDT.commande.associerURL',
        'Ajouter le lien de la visioconférence',
      );
      a('accueil.appelNonFait.titre', 'Appels non faits');
      a('accueil.appelNonFait.message', 'Tous les appels ont été effectués');
      a('accueil.appelNonFait.InitialeAbsAccompagnement', 'A');
      a('accueil.appelNonFait.HintAcc', 'Accompagnateur');
      a('accueil.CDTNonSaisi.titre', 'Cah. de textes non saisis');
      a(
        'accueil.CDTNonSaisi.message',
        'Tous les cahiers de textes ont été saisis',
      );
      a('accueil.CDTNonSaisi.hintLien', 'Saisir le cahier de textes');
      a('accueil.CDC.titre', 'Bulletins');
      a('accueil.CDC.colonne.dateConseilDeClasse', 'Date du conseil de classe');
      a('accueil.CDC.colonne.apprSaisies', 'Appr. saisies');
      a('accueil.CDC.colonne.devoirs', 'Devoirs');
      a('accueil.CDC.colonne.evaluations', 'Évaluations');
      a(
        'accueil.CDC.colonne.hint.dateConseilDeClasse',
        'Date du conseil de classe',
      );
      a('accueil.CDC.colonne.hint.apprSaisies', "Nombre d'appréciations");
      a('accueil.CDC.colonne.hint.devoirs', 'Nombre de devoirs');
      a('accueil.CDC.colonne.hint.evaluations', "Nombre d'évaluations");
      a('accueil.CDC.hintLien.devoir', 'Voir les devoirs');
      a('accueil.CDC.hintLien.evaluation', 'Voir les évaluations');
      a('accueil.CDC.hintLien.appreciation', 'Voir les appréciations');
      a('accueil.CDC.hint.aucunServiceNote', 'Service non noté');
      a('accueil.CDC.hint.CloturePrevueLe', 'Clôture prévue le %s');
      a('accueil.CDC.hint.ClotureDepuisLe', 'Clôturée depuis le %s');
      a('accueil.CDC.hint.NonCloturee', 'Non clôturée');
      a('accueil.CDC.hint.Cloturee', 'Clôturée');
      a('accueil.CDC.hint.ConseilProgrammeLe', 'Conseil programmé le %s');
      a(
        'accueil.infosParcoursupLSL.titre',
        'A compléter pour Parcoursup & LSL',
      );
      a('accueil.agenda.titre', 'Agenda');
      a('accueil.agenda.hintLien', "Afficher le détail de l'évènement");
      a(
        'accueil.informations.hintLien.information',
        "Afficher le détail de l'information",
      );
      a(
        'accueil.informations.hintLien.sondage',
        'Afficher le détail du sondage',
      );
      a('accueil.informations.wai.par', 'par %s');
      a('accueil.discussions.titre', 'Discussions');
      a('accueil.discussions.hintLien', 'Ouvrir la discussion');
      a('accueil.discussions.labelPJ', 'Pièces Jointes');
      a('accueil.competences.titre', 'Dernières évaluations');
      a('accueil.competences.hint', 'Évaluations des 14 derniers jours');
      a('accueil.casier.titre', 'Casier numérique');
      a('accueil.casier.deposePar', 'déposé par %s');
      a('accueil.casier.message', 'Tous les documents ont été lus');
      a('accueil.kiosque.titre', 'Manuels numériques');
      a('accueil.aide.titre', 'Aide INDEX ÉDUCATION');
      a('accueil.coursNonAssures.titre', 'Cours non assurés des professeurs');
      a('accueil.coursNonAssures.message', 'Aucun cours non assuré');
      a('accueil.personnelsAbsents.titre', 'Absences des personnels');
      a('accueil.personnelsAbsents.message', 'Aucun personnel absent');
      a('accueil.penseBete.titre', 'Pense-bête');
      a('accueil.penseBete.InscrivezNotes', 'Inscrivez ici vos notes');
      a('accueil.ressources.titreAvecBO', 'QCM / Progressions / Programmes');
      a('accueil.ressources.titreSansBO', 'QCM / Progressions');
      a('accueil.ressources.QCM', 'QCM');
      a('accueil.ressources.Progressions', 'Progressions');
      a('accueil.ressources.ProgrammesBO', 'Programmes du BO');
      a('accueil.ressources.MesDonnees', 'Mes données');
      a('accueil.ressources.DonneesBibliotheque', 'Données de la bibliothèque');
      a('accueil.ressources.hint.MesQCM', 'Mes QCM');
      a(
        'accueil.ressources.hint.QCMPartages',
        "QCM de la bibliothèque de l'établissement",
      );
      a('accueil.ressources.hint.MesProgressions', 'Mes progressions');
      a(
        'accueil.ressources.hint.ProgressionsPartagees',
        "Progression de la bibliothèque de l'établissement",
      );
      a('accueil.ressources.hint.ProgrammesBO', 'Programmes officiels du BO');
      a('accueil.ressources.libelle', 'Programmes du BO');
      a('accueil.ressources.libelle', 'Manuels numériques');
      a(
        'accueil.ressourcePedagogique.titre',
        'Dernières ressources pédagogiques',
      );
      a(
        'accueil.ressourcePedagogique.aucuneRessourcePedagogique',
        'Aucune ressource pédagogique',
      );
      a(
        'accueil.ressourcePedagogique.info',
        'Les 5 dernières ressources pédagogiques',
      );
      a('accueil.ressourcePedagogique.deposeLe', 'déposé le %s');
      a('accueil.DS.titre', 'Prochains DS');
      a('accueil.DS.hint', 'Devoirs sur table programmés');
      a('accueil.DSEvaluation.titre', 'Prochaines évaluations de compétences');
      a('accueil.DSEvaluation.hint', 'Évaluations de compétences programmées');
      a('accueil.noteAuDessusBareme', 'La note est au dessus du barème');
      a(
        'accueil.remplacementsenseignants.messageAucuneDonnee',
        'Aucune proposition de remplacement',
      );
      a(
        'accueil.kiosques.mrFiche',
        '{"titre":"Que sont les Manuels numériques ?","html":{"_T":23,"V":"<p><span style=\\\"font-family: arial,helvetica,sans-serif; font-size: 11px;\\\">Les&nbsp;Manuels num&eacute;riques&nbsp;sont des ressources disponibles pour l\'ensemble de votre &eacute;tablissement depuis le site web&nbsp;d\'un partenaire :&nbsp;kiosques num&eacute;riques ou &eacute;diteurs. </span></p><p><span style=\\\"font-family: arial,helvetica,sans-serif; font-size: 11px;\\\"><br />PRONOTE vous permet d\'acc&eacute;der directement au contenu en ligne des manuels sans que vous ayez besoin de vous r&eacute;-authentifier aupr&egrave;s du partenaire. </span></p><p><br /><span style=\\\"font-family: arial,helvetica,sans-serif; font-size: 11px;\\\">En cliquant sur le lien d\'un des manuels&nbsp;depuis votre page d\'accueil, votre cahier de textes ou vos ressources p&eacute;dagogiques, vous serez redirig&eacute;s vers&nbsp;le site du partenaire concern&eacute;, plateforme ind&eacute;pendante de PRONOTE.&nbsp;Lorsqu\'une fl&egrave;che verte <img src=\\\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAACxMAAAsTAQCanBgAAAEUSURBVChTY/iPBu58vvp/2YMpUB4CYCh8/u3xf+ddcv+X3J0EFYEAJgYkcPndaYaDz7YyMPxnYJh3u4dh0a2JUBkGBkaQahAjarMtw9M/DxiY2BgZWLmZGRgZGRh+ff7LEKdYyJCoXQhRaDNbhoFdjhmsABn8+/Of4efbPwy+UrEMTFnrQxhYJZgYmJgZGX59/MPw+8tfqDII+PvzH8OHTx8YmNnNfjb8YfzFwHueh0HplRIDF5sUw8uvTxmYWBgZvjz+xRCrUMBQ7tTGwKBVJfC/d0c9yAVg8Pjdg/96zUL/TaaI/V98bAZUFOiP+lUFUCYE3Hh65b9hudT/TWdXQUUgACMc77649X/3xa1QHgz8/w8ArBLxfg5A0i8AAAAASUVORK5CYII=\\\" alt=\\\"\\\" />&nbsp;est accol&eacute;e au logo de l\'&eacute;diteur,&nbsp;cela signifie que le manuel permet de partager un lien vers un &eacute;nonc&eacute;, un corrig&eacute;, une vid&eacute;o ou un article (etc.) directement dans PRONOTE.</span></p><p>&nbsp;</p><p><span style=\\\"font-family: arial,helvetica,sans-serif; font-size: 11px;\\\">Pour ajouter un lien :</span></p><p><span style=\\\"font-family: arial,helvetica,sans-serif; font-size: 11px;\\\"><span style=\\\"font-family: arial,helvetica,sans-serif; font-size: 11px;\\\">1. <strong>Depuis le contenu du manuel num&eacute;rique</strong>, s&eacute;lectionnez la ressource &agrave; l\'aide des ic&ocirc;nes correspondantes : <img src=\\\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAOCAIAAACtuNvgAAACc0lEQVQokWP4TwS48/nqsgdTkEUY5u/qn7y1rnd3+aSDNWvOzfn0+cOnzx9Onj+wec/S1VvnLNswfenO6c+/PXbeJbfk7iSEtoDDtntfr9/6csmaR7MWXO2esadl5a6ZV++e/vT1zb//v3/8+e67z2rFnRnOO+WcdsgtvDkBqi3okN2OVys3P1+04en8Tc8XzD3XuffK2t//v/749fXAo62RW2zt1sk4bJF13a/gdkDBYbPsvCt9////Zwg4YLP91Yqtz5dseDJv9cMZC6/2Hr635eO3l8cf7bWZJ+u0Q879sCIcue5XsFsj032sksF/n82OVysh2tY8mjnvUufuG2s+fn+VtibAYZOsy255xy2yTtvl4Nqsl0pV78hk8NttBbdtzaOZcy6077i26tOPV9Y9ipYLJP1mmFtMVoxf5G2zXNp5p7zFfMlphzr////P4LvTCm7b2sczZ51v23Zlxaefr7WqBLq2Vf/4/cNvs9Pjdw/0moVMpogtPjYDGiRe2ywg2tY/mbf28awZZ5q3XFj6+efr6hXZv/58////v9c6hxtPrxiWS206uwoRAV6bLLe/WrH15dINT+evfTJr2qnGjecWffn19t2X13////r//7/nKvu7L27tvrgVJbpdVprterpy46P56x/N3fR83vRTzZvPLvvx7+P3r59+fvn679tv54VWmOmGQb1dIW1tWNbWiPK9yf2Hq+ed6N56YsW2/WsnbG2vXF2UtzRNuUEei7YJc/vjamOCGwO8GpwdIiysvU2sHE3tXWy9Sj1CqkPiKuMmzp2IRRuc9efv79fvXq9avXLV6lXv37//+/cvnsQNAK43G3vKbeXwAAAAAElFTkSuQmCCAA==\\\" alt=\\\"\\\" />, <img src=\\\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAABq0lEQVQokY1QsaqrQBDdP9m/uP/gR1iYQgQJbBFMYCsXxUYINhYWgklEkiZiFyUELSQGYpGYTJEihOBfJHiLBV8gPN47xbJnZs7MnEGHwyFJksViEQRBFEXb7fb5fHZd13Xd4/FIkmQ+nwdBMJvNlstlURTI9/3j8Xi5XACgaZqyLNfr9W6322w2cRzv9/vr9QoAAHA6nXzfR57nwReKoijL8jvueR5yXfc78Te4roscx/l/geM4yLZtThhjiqLwvyAICKG6rnmcMcbjtm0jy7I4ieMYYwwAdV0jhH5+fsIw5GL+AQDLspCu6/1EjHFd12EYCoLAG3MxHwUAuq4jSmkvUBQlDENeymX87QsopUjTtJ5Pp1PGGF+G99Y0rTcAAJqmIUJIz9M0xRj3O3DrvQEAIIQgVVU/D4cx7m/FGPs0AACqqiJZlv91/T+QZRlJklRVVZZlaZrmeX4+nz8rmqbJ8zxN0yzLqqqSJAmJokgIMQzDNE1K6WAwGI1GURStVqvJZCJJEqXUNE3DMAghoiiitm27D7zf7/v9Ph6Ph8Ph7XZ7vV6f2bZtfwGKnBRsAjJNnQAAAABJRU5ErkJgggA=\\\" alt=\\\"\\\" />, <img src=\\\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAAZUlEQVQokWP4evUySYgBztoqJw5BaGycGuDa0EhibSBKA1Z7yPTDp7OnsfsBK4Lr/3j6FD4NWMMKiwY8YYrQ8O7IYYJKoRo+njmNqQ5PABDwA2YQY9eAJxJxasAViUTZQKwfsCIAfzw1EfSaHBoAAAAASUVORK5CYIIA\\\" alt=\\\"\\\" /><br /></span></span></p><p><span style=\\\"font-family: arial,helvetica,sans-serif; font-size: 11px;\\\"><span style=\\\"font-family: arial,helvetica,sans-serif; font-size: 11px;\\\">2. Envoyez le lien de la ressource vers PRONOTE</span></span></p><p><span style=\\\"font-family: arial,helvetica,sans-serif; font-size: 11px;\\\"><span style=\\\"font-family: arial,helvetica,sans-serif; font-size: 11px;\\\">3. <strong>Depuis PRONOTE</strong>, en fonction de l\'ic&ocirc;ne choisie, s&eacute;lectionnez et ajoutez le lien depuis les affichages correspondants :</span></span></p><ul><li><span style=\\\"font-family: arial,helvetica,sans-serif; font-size: 11px;\\\"><span style=\\\"font-family: arial,helvetica,sans-serif; font-size: 11px;\\\"><strong>Saisie du cahier de textes</strong> : ajouter le lien &agrave; un contenu ou en documents joints dans un travail &agrave; faire</span></span></li><li><span style=\\\"font-family: arial,helvetica,sans-serif; font-size: 11px;\\\"><span style=\\\"font-family: arial,helvetica,sans-serif; font-size: 11px;\\\"><strong>Saisie d\'un travail &agrave; faire *</strong> : ajouter un exercice num&eacute;rique en associant un lien &agrave; un travail &agrave; faire, l\'&eacute;l&egrave;ve y r&eacute;pondra directement sur le site de l\'&eacute;diteur et vous r&eacute;cup&eacute;rerez automatiquement ses r&eacute;ponses dans PRONOTE.</span></span></li><li><span style=\\\"font-family: arial,helvetica,sans-serif; font-size: 11px;\\\"><span style=\\\"font-family: arial,helvetica,sans-serif; font-size: 11px;\\\"><span style=\\\"font-family: arial,helvetica,sans-serif; font-size: 11px;\\\"><span style=\\\"font-family: arial,helvetica,sans-serif; font-size: 11px;\\\"><strong>Saisie des notes *</strong> : ajouter un idevoir en associant un lien &agrave; un devoir, l\'&eacute;l&egrave;ve y r&eacute;pondra directement sur le site de l\'&eacute;diteur et vous r&eacute;cup&eacute;rerez automatiquement ses r&eacute;ponses et sa note dans PRONOTE.</span></span></span></span></li></ul><p><span style=\\\"font-family: arial,helvetica,sans-serif; font-size: 11px;\\\"><span style=\\\"font-family: arial,helvetica,sans-serif; font-size: 11px;\\\"><span style=\\\"font-family: arial,helvetica,sans-serif; font-size: 11px;\\\"><span style=\\\"font-family: arial,helvetica,sans-serif; font-size: 11px;\\\">* Disponible uniquement avec G&eacute;n&eacute;ration 5, la fonctionnalit&eacute; a &eacute;t&eacute; propos&eacute;e &agrave; l\'ensemble des &eacute;diteurs partenaires.</span></span></span></span></p><p><span style=\\\"font-family: arial,helvetica,sans-serif; font-size: 11px;\\\"><span style=\\\"font-family: arial,helvetica,sans-serif; font-size: 11px;\\\">&nbsp;</span></span></p>"},"width":425,"height":185,"type":4,"boutons":{"_T":18,"V":1024}}',
      );
      a('accueil.travailAFaire.titre', 'Travail à faire');
      a('accueil.info.travailAFaire', 'Travaux à faire des 7 prochains jours');
      a(
        'accueil.aucunTAF',
        "Aucun travail à faire n'a été saisi pour cette semaine",
      );
      a('accueil.carnetDeCorrespondance.titre', 'Observations');
      a(
        'accueil.carnetDeCorrespondance.hint',
        'Les observations publiées des 15 derniers jours',
      );
      a('accueil.carnetDeCorrespondance.message', 'Aucune observation');
      a('accueil.carnetDeCorrespondance.vueLe', 'Observation vue le %s');
      a('accueil.TAFARendre.titre', 'A rendre par les élèves');
      a('accueil.TAFARendre.msgAucun', 'Aucun rendu en attente');
      a('accueil.TAFEtActivites.titre', 'Travaux & Activités à rendre');
      a(
        'accueil.TAFEtActivites.msgAucun',
        'Aucun travail ou activité à rendre',
      );
      a('accueil.TAFEtActivites.TAF', 'Travaux à la maison');
      a('accueil.TAFEtActivites.Activites', 'Activités en classe');
      a('accueil.lienUtile.titre', 'Liens et numéros utiles');
      a('accueil.lienUtile.message', 'Aucun lien utile');
      a('accueil.lienExterne', 'Accéder au site web');
      a('accueil.CDI.lienExterne', 'Accéder au portail');
      a('accueil.CDI.lienExterneInfobulle', 'Accéder au site web de %s');
      a('accueil.CDI.titre', 'Portail du CDI');
      a('accueil.CDI.ressourcesEmpruntees', 'Ressources empruntées');
      a('accueil.CDI.emprunteLe', 'Emprunté le');
      a('accueil.CDI.aRendreLe', 'À rendre le');
      a('accueil.CDI.renduLe', 'Rendu le');
      a('accueil.CDI.recherche', 'Tout pour lire ou travailler');
      a('accueil.CDI.rechercher', 'Recherche sur e-sidoc');
      a('accueil.CDI.voirHistorique', "Voir l'historique des prêts");
      a('accueil.CDI.historique', 'Historique des prêts');
      a('accueil.CDI.boutonhistorique', 'Historique');
      a('accueil.CDI.dateRenduDepassee', 'La date de rendu est dépassée');
      a('accueil.CDI.empruntsEnCours', 'Emprunt(s) en cours (%d)');
      a(
        'accueil.CDI.aucunEmprunt',
        "Vous n'avez pas de document emprunté au CDI",
      );
      a('accueil.agate.titre', 'NOEFIL');
      a('accueil.agate.msgAucun', 'Aucune donnée');
      a('accueil.agate.forfait', 'Facturation principale');
      a('accueil.agate.carte', 'Autres éléments facturés');
      a('accueil.FAST.titre', 'Inscriptions et paiement');
      a(
        'accueil.FAST.GestionInscriptions',
        'Inscriptions péri et extra-scolaires',
      );
      a('accueil.FAST.periscolaire', 'Périscolaire (cantine, garderie...)');
      a('accueil.FAST.extrascolaire', 'Extra-scolaire (mercredi, vacances)');
      a('accueil.FAST.FaireUneDemande', 'Faire une demande');
      a(
        'accueil.FAST.GestionReservations',
        'Réservations péri et extra-scolaires',
      );
      a(
        'accueil.FAST.reserverAnnulerService',
        'Réserver, annuler un service péri ou extra-scolaire',
      );
      a('accueil.FAST.AccederAuPlanning', 'Accéder au planning');
      a('accueil.FAST.GestionDuCompte', 'Gestion du compte');
      a('accueil.FAST.inscriptionNouvelEnfant', 'Inscrire un nouvel enfant');
      a('accueil.FAST.piecesJustificatives', 'Pièces justificatives');
      a('accueil.FAST.Deposer', 'Déposer');
      a('accueil.FAST.FacturesEtPaiement', 'Factures et paiement');
      a(
        'accueil.FAST.HistoriqueEtPaiement',
        'Historique de factures et paiement',
      );
      a('accueil.FAST.Payer', 'Payer');
      a('accueil.FAST.Consulter', 'Consulter');
      a('accueil.FAST.ReglementEnAttenteAuD', 'Un règlement en attente au %s');
      a('accueil.FAST.MontantDevise', '%s €');
      a('accueil.FAST.PrelevementAuto', 'Prélèvement automatique');
      a('accueil.FAST.Souscrire', 'Souscrire');
      a('accueil.ard.titre', 'ARD - GECENLIGNE');
      a('accueil.ard.msgAucun', 'Aucune donnée');
      a('accueil.ard.porteMonnaie', 'Porte-monnaie');
      a('accueil.ard.dernierSolde', 'Dernier solde connu');
      a('accueil.ard.attentionSolde', 'Rechargement ou paiement à prévoir');
      a('accueil.culture.titre', 'Culture et loisirs');
      a('accueil.applicam.titre', 'Inscription à %s');
      a('accueil.applicam.valider', "Je m'inscris");
      a('accueil.applicam.message', 'Aucun compte actif');
      a('accueil.applicam.btnConsentement', "Je m'inscris sur le site %s");
      a(
        'accueil.applicam.texteFenetre',
        "En t'inscrivant, tu autorises PRONOTE à diffuser à %s les informations suivantes :",
      );
      a(
        'accueil.applicam.sousTexte',
        'Des informations concernant ton établissement scolaire',
      );
      a('accueil.applicam.donneesTransmises.nom', 'Ton nom');
      a(
        'accueil.applicam.donneesTransmises.dateNaissance',
        'Ta date de naissance',
      );
      a('accueil.applicam.donneesTransmises.adresse', 'Ton adresse');
      a('accueil.applicam.donneesTransmises.codePostal', 'Ton code postal');
      a('accueil.applicam.donneesTransmises.ville', 'Ta ville');
      a('accueil.applicam.donneesTransmises.pays', 'Ton pays');
      a('accueil.applicam.donneesTransmises.responsable', 'Ton responsable');
      a('accueil.incident.titre', 'Incidents');
      a('accueil.incident.msgAucun', 'Tous les incidents ont été visés');
      a('accueil.exclusion.titre', 'Exclusions temporaires ou définitives');
      a(
        'accueil.exclusion.hint',
        "Les élèves exclus temporairement ou définitivement de l'établissement, de la classe, de la demi-pension ou de l'internat",
      );
      a(
        'accueil.exclusion.msgAucun',
        'Aucune exclusion temporaire ou définitive',
      );
      a('fiche.incident.titre', 'Incident');
      a('fiche.incident.motifs', 'Motifs');
      a('fiche.incident.gravite', 'Gravité');
      a('fiche.incident.auteur', 'Auteur');
      a('fiche.incident.victime', 'Victime');
      a('fiche.incident.temoin', 'Témoin');
      a('fiche.incident.actionsEnvisagees', 'Actions envisagées');
      a('fiche.incident.labelCocheVise', "Visé par l'administration");
      a('fiche.incident.lieu', 'Lieu');
      a('accueil.donneesVS.titre', 'Données de la vie scolaire');
      a('accueil.donneesProfs.titre', 'Données des professeurs');
      a('accueil.connexionsEnCours.titre', 'Activation et état des connexions');
      a(
        'accueil.connexionsEnCours.hintConnexionsPronote',
        'Connexion en cours sur le client Pronote',
      );
      a(
        'accueil.connexionsEnCours.hintConnexionsEspaces',
        'Connexion en cours sur les espaces',
      );
      a(
        'accueil.connexionsEnCours.hintConnexionsEDT',
        'Connexion en cours sur le client EDT',
      );
      a('accueil.registreAppel.titre', 'Appels du jour');
      a('accueil.registreAppel.total', 'Total');
      a('accueil.registreAppel.matin', 'Matin');
      a('accueil.registreAppel.apresMidi', 'Après-midi');
      a('accueil.registreAppel.aucun', 'Aucun appel à effectuer');
      a('accueil.previsionnelAbsSP.titre', 'Prévisionnel périscolaire');
      a(
        'accueil.previsionnelAbsSP.hint',
        'Prévisionnel des absences aux services périscolaires',
      );
      a(
        'accueil.previsionnelAbsSP.aucun',
        'Aucune service périscolaire pour le jour sélectionné',
      );
      a('accueil.previsionnelAbsSP.matin', 'Matin');
      a('accueil.previsionnelAbsSP.apresMidi', 'Après-midi');
      a(
        'accueil.previsionnelAbsSP.appelNonFait',
        'appel non fait en classe : %d / %d',
      );
      a(
        'accueil.previsionnelAbsSP.tousAppelsFaits',
        'tous les appels en classe sont faits',
      );
      a('accueil.previsionnelAbsSP.aucunAppelFait', 'aucun appel fait');
      a('accueil.previsionnelAbsSP.pasDAbsencePrevue', "pas d'absence prévue");
      a(
        'accueil.previsionnelAbsSP.nombreDAbsencesPrevues',
        '%d absence(s) prévue(s)',
      );
      a(
        'accueil.previsionnelAbsSP.hintDetail',
        "%s absence(s) prévue(s)\n- absent au service déjà déclaré : %d\n- absent déduit de l'appel en classe : %d",
      );
      a('accueil.tableauDeBord.titre', 'Élèves absents');
      a('accueil.tableauDeBord.aucunEleveAbsent', 'Aucun élève absent ce jour');
      a('accueil.tableauDeBord.absenceAConstater', 'A constater');
      a('accueil.blog.derniersBilletsPublies', 'Derniers billets du blog');
      a('accueil.blog.aucunBilletPublie', 'Aucun billet publié');
      a('accueil.blog.filActuBlog', "Fil d'actualité du blog");
      a(
        'accueil.TAFProchainsJours',
        'Travail à faire pour les prochains jours',
      );
      a('accueil.pourle', 'Pour le');
      a('accueil.pour', 'pour');
      a('accueil.menuPrincipal', 'Menu Principal');
      a('AucunCours', 'Aucun Cours');
      a('Mobile.Menu.Contact', 'Contact');
      a('Mobile.Menu.Alertes', 'Alertes');
      a('Mobile.Menu.Alerter', 'Alerter');
      a('Mobile.Menu.Carnet', 'Carnet');
      a('Mobile.Menu.Chatter', 'Tchatter');
      a('Mobile.Menu.Absence', 'Absence');
      a('Mobile.Menu.Mairie', 'Mairie');
      a('Mobile.Menu.FicheEleve', 'Infos élève');
      a('Mobile.Menu.Harcelement', 'S.O.S');
      a('Accueil.ParametresWidgets', 'Paramètres des widgets');
      a(
        'accueil.hint.fermer',
        'Fermer ce widget.\nVous pourrez le réafficher à partir du bouton "Paramètres des widgets" (symbolisé par une roue crantée)',
      );
      a('accueil.hint.toutVoir', "Accéder à l'affichage dédié");
      a('accueil.hint.refresh', 'Actualiser');
      a('accueil.elections.titre', 'Votes');
      a('accueil.elections.voter', 'Voter');
      a(
        'accueil.elections.prochainementOuverture',
        'Prochainement ouverture du vote',
      );
      a(
        'accueil.elections.leVoteSeraOuvertDuAu',
        'Le vote sera ouvert du %s au %s.',
      );
      a('accueil.elections.voteOuvertDuAu', 'Vote ouvert du %s au %s.');
      a('accueil.elections.sansTitre', 'Vote sans titre');
      a(
        'accueil.elections.nbMaxChoix',
        'Vous pouvez cocher %s choix au maximum.',
      );
      a(
        'accueil.elections.confirmationVote',
        'Confirmez-vous le vote suivant pour «%s» ?',
      );
      a(
        'accueil.elections.votePrisEnCompte',
        'Votre vote a bien été pris en compte.',
      );
      a(
        'accueil.elections.merciParticipation',
        'Merci pour votre participation.',
      );
      a(
        'accueil.elections.candidatsConstitutifsDesListes',
        'Candidats constitutifs des listes',
      );
      a(
        'accueil.elections.constitutionDeLaListe',
        '«%s» est constituée des personnes suivantes',
      );
      a(
        'accueil.elections.aucunChoixEffectue',
        "Aucun choix n'a été effectué.",
      );
      a('accueil.elections.neSePrononcePas', 'Ne se prononce pas');
      a(
        'accueil.absRetJustifieesParents.titre',
        'Absences et retards justifiés par les parents',
      );
      a(
        'accueil.absRetJustifieesParents.aucuneAbsRet',
        'Aucune absence ou retard justifié par les parents',
      );
      a('accueil.evenementRappel.titre', 'Ne pas oublier');
      a('accueil.modificationsEDT.titre', 'Modifications des emplois du temps');
      a(
        'accueil.modificationsEDT.messageAucuneDonnee',
        "Aucune modification de l'emploi du temps",
      );
      a('accueil.modificationsEDT.voirFicheCours', 'Voir la fiche cours');
      a('actualites.ToutesCategories', 'Toutes');
      a(
        'actualites.XAPrisConnaissanceLeX',
        '%s a pris connaissance de cette information le %s',
      );
      a('actualites.reponduParX', 'répondu par %s le %s');
      a('actualites.aiReponduLe', "J'ai répondu le %s");
      a('actualites.modifiableXJours', 'modifiable %d jours');
      a(
        'actualites.TailleMaximale',
        'Vous avez atteint la taille maximale (%s caractères maximum)',
      );
      a('actualites.UniquementNonLues', 'non lues');
      a('actualites.ATitreIndividuel', 'À titre individuel');
      a('actualites.AProposDe', 'Relatif à %s');
      a('actualites.SaisirReponse', 'Saisissez votre réponse ici !');
      a('actualites.Colonnes.Titre', 'Titre');
      a('actualites.Categorie', 'Catégorie');
      a('actualites.MarquerLu', 'Marquer comme lu');
      a('actualites.MarquerNonLu', 'Marquer comme non lu');
      a('actualites.MarquerSupprimee', 'Supprimer');
      a('actualites.creerInfo', 'Diffuser une information');
      a('actualites.creerSondage', 'Effectuer un sondage');
      a(
        'actualites.creerInfoALaClasse',
        'Diffuser une information à la classe %s',
      );
      a(
        'actualites.creerSondagePourLaClasse',
        'Effectuer un sondage pour la classe %s',
      );
      a('actualites.utiliserModele', 'Utiliser le modèle');
      a('actualites.partageAvec', 'Partagé avec');
      a('actualites.exporterModeleSondage', 'Sauvegarder dans un fichier');
      a(
        'actualites.importerModeleSondage',
        "Récupérer les modèles de sondages d'un fichier de modèles",
      );
      a('actualites.creerModele', 'Créer un modèle');
      a('actualites.nouveauModele', 'Nouveau modèle');
      a('actualites.recupererModele', 'Récupérer un modèle');
      a('actualites.uniquementMesModeles', 'Uniquement mes modèles');
      a('actualites.Publie', 'Publié');
      a('actualites.PublicationEffective', 'Publication effective');
      a('actualites.BrouillonEnregistre', 'Brouillon enregistré');
      a('actualites.Publiee', 'Publiée');
      a('actualites.Publier', 'Publier');
      a('actualites.NonPubliee', 'Brouillon');
      a('actualites.Oui', 'Oui');
      a('actualites.Non', 'Non');
      a('actualites.Classes', 'Classes');
      a('actualites.Groupes', 'Groupes');
      a('actualites.Eleves', 'Élèves');
      a('actualites.Professeurs', 'Professeurs');
      a('actualites.Responsables', 'Responsables');
      a('actualites.Personnels', 'Personnels');
      a('actualites.MaitresDeStage', 'Maîtres de stage');
      a('actualites.Inspecteurs', 'Inspecteurs pédagogiques');
      a('actualites.Directeur', "Directeur de l'école");
      a('actualites.ResponsablesPrimaire', 'Responsables des élèves de');
      a('actualites.Classe', 'Classe');
      a('actualites.Groupe', 'Groupe');
      a('actualites.ResponsablePreferentiel', 'Responsables préférentiels');
      a(
        'actualites.ResponsableNonPreferentiel',
        'Responsables non préférentiels',
      );
      a('actualites.ProfsPrincipaux', 'Professeurs principaux');
      a('actualites.Tuteurs', 'Tuteurs');
      a('actualites.Question', 'Question');
      a(
        'actualites.RelancerNonRepondants',
        'Renvoyer une notification aux non répondants',
      );
      a(
        'actualites.ConfirmationSondage',
        "Confirmez-vous le renvoi d'une notification aux %d destinataires n'ayant pas encore répondu ?",
      );
      a(
        'actualites.ConfirmationInformation',
        "Confirmez-vous le renvoi d'une notification aux %d destinataires n'ayant pas accusé réception ?",
      );
      a(
        'actualites.SelectionnerProfPersonnel',
        'Sélectionner des professeurs et des personnels',
      );
      a('actualites.HintAjouterSignature', 'Insérer ma signature');
      a('actualites.Edition.Modification', 'Modifier');
      a(
        'actualites.Edition.NonModifiable',
        "La modification du contenu n'est plus possible car certains destinataires ont déjà répondu au message.",
      );
      a('actualites.Edition.Dupliquer', 'Dupliquer');
      a('actualites.Edition.CopieDe', '%s (copie de)');
      a('actualites.Edition.Publier', 'Publier');
      a('actualites.Edition.Depublier', 'Ne pas publier');
      a(
        'actualites.Edition.PublierPageEtab',
        'Publier sur la page établissement',
      );
      a(
        'actualites.Edition.DepublierPageEtab',
        'Ne pas publier sur la page établissement',
      );
      a(
        'actualites.Edition.DiffuseSurPageEtab',
        'Publié sur la page établissement',
      );
      a('actualites.Edition.Supprimer', 'Supprimer');
      a('actualites.Edition.Destinataires', 'Destinataires');
      a('actualites.Edition.Question', 'Question');
      a('actualites.Edition.Texte', 'Texte');
      a('actualites.Edition.QuestionN', 'Question %d');
      a('actualites.Edition.AbbrQuN', 'Q %d');
      a('actualites.Edition.TexteN', 'Texte %d');
      a('actualites.Edition.AbbrTxtN', 'T %d');
      a('actualites.Edition.AvecAR', 'avec accusé de réception');
      a('actualites.Edition.ModifPJ', 'Modification des pièces jointes');
      a('actualites.Edition.ChoixUnique', 'Choix unique');
      a('actualites.Edition.ChoixMultiple', 'Choix multiple');
      a('actualites.Edition.ReponseASaisir', 'Réponse à saisir');
      a('actualites.Edition.NbrCharTexte', 'caractères maximum');
      a('actualites.Edition.NbrChoix', 'Définir un nombre de choix maximum');
      a(
        'actualites.Edition.NbrMaxChoix',
        'Vous ne pouvez sélectionner que %d choix maximum',
      );
      a(
        'actualites.Edition.AvecChoixAutre',
        "Proposer la rédaction d'un commentaire sous l'appellation :",
      );
      a('actualites.Edition.ChoixAutre', 'Autre');
      a(
        'actualites.Edition.OngletEntite',
        'Destinataires liés aux classes (%d) / groupes (%d)',
      );
      a(
        'actualites.Edition.OngletIndividu',
        'Destinataires à titre individuel (%d)',
      );
      a('actualites.Edition.OngletResultats', 'Voir les réponses');
      a(
        'actualites.Edition.AvecNombreRepondu',
        'Afficher le nombre en plus du pourcentage',
      );
      a('actualites.Edition.ColonneDest', 'Destinataires');
      a('actualites.Edition.ColonneNom', 'Nom');
      a('actualites.Edition.ColonnePrenom', 'Prénom');
      a('actualites.Edition.ColonneARRecu', 'AR reçu');
      a('actualites.Edition.ColonneRepondu', 'répondu');
      a('actualites.Edition.ColonneNonRepondu', 'non répondu');
      a('actualites.Edition.ColonneReponse', 'réponse');
      a(
        'actualites.Edition.MenuGrapheCumul',
        'Générer le graphe des réponses données par "%s"',
      );
      a(
        'actualites.Edition.MenuGrapheTotal',
        'Générer le graphe du total des réponses',
      );
      a(
        'actualites.Edition.menuRenvoyerNotification',
        'Renvoyer une notification à cette personne',
      );
      a(
        'actualites.Edition.TitreGrapheCumul',
        'Graphes des réponses données par "%s"',
      );
      a('actualites.Edition.TitreGrapheTotal', 'Graphe du total des réponses');
      a(
        'actualites.Edition.DiffuserResultats',
        'Partager les résultats du sondage',
      );
      a(
        'actualites.Edition.DiffuserResultatsAnonyme',
        'Résultats anonymes (conseillé pour le partage aux responsables ou élèves)',
      );
      a(
        'actualites.Edition.DiffuserResultatsNominatif',
        'Résultats nominatifs (identité des répondants visible)',
      );
      a(
        'actualites.Edition.TitreDiffusionResultatsDuSondage',
        'Résultats du sondage "%s"',
      );
      a(
        'actualites.Edition.MessageDiffusionResultatsDuSondage',
        'Veuillez trouver ci-joint les résultats du %s "%s".',
      );
      a(
        'actualites.Edition.ErreurCreationFichiersResultats',
        'Une erreur est survenue lors de la création des fichiers de résultats',
      );
      a(
        'actualites.Edition.DonnerAccesConsultationAuSondage',
        "Donner l'accès en consultation à",
      );
      a(
        'actualites.Edition.publicationPageEtablissement',
        'Publier sur la page établissement',
      );
      a(
        'actualites.Edition.AfficherCumulParClasses',
        'Cumuler les réponses des élèves par classe',
      );
      a(
        'actualites.Edition.NonActifSurSondageAnonyme',
        'Non activable sur un sondage anonyme',
      );
      a('actualites.choix.ariaLabel', 'Choix');
      a('actualites.choix.nouveau', "Création d'un nouveau choix");
      a('actualites.choix.monter', 'Monter');
      a('actualites.choix.descendre', 'Descendre');
      a('actualites.question.ariaLabel', 'Questions');
      a('actualites.question.nouveau', 'question ou texte');
      a('actualites.public.supprimer', 'Supprimer les destinataires');
      a(
        'actualites.public.chargerListeDiffusion',
        'Utiliser des listes de diffusion',
      );
      a('actualites.public.responsables', 'Responsables');
      a('actualites.public.relatifAuxEnfants', 'Un envoi par élève');
      a('actualites.public.responsablesLegaux', 'Un envoi par responsable');
      a(
        'actualites.public.hintrelatifAuxEnfants',
        'Les responsables recevront une information/un sondage pour chacun de leurs enfants.\nUne seule réponse par enfant sera prise en compte.',
      );
      a(
        'actualites.public.hintresponsablesLegaux',
        "Les responsables recevront une seule information/un seul sondage quel que soit le nombre d'enfants. \nLes réponses de tous les responsables seront prises en compte.",
      );
      a('actualites.public.professeurs', 'Professeurs');
      a('actualites.public.personnels', 'Personnels');
      a('actualites.public.maitreDeStage', 'Maîtres de stage');
      a('actualites.public.eleves', 'Élèves');
      a(
        'actualites.public.elevesRattaches',
        'Prendre en compte les élèves rattachés',
      );
      a(
        'actualites.AucunDestinataire',
        "Attention : il n'y a pas de destinataire",
      );
      a('actualites.Aucun', 'Aucun');
      a('actualites.Cumul.Classe', 'Classe');
      a('actualites.Cumul.Groupe', 'Groupe');
      a('actualites.Cumul.Alphabetique', 'Ordre alphabétique');
      a('actualites.Cumul.NomDesEleves', 'Nom des élèves');
      a('actualites.Cumul.LieuEnseignement', "Lieu d'enseignement");
      a('actualites.Cumul.ServicesPeriscolaire', 'Services périscolaires');
      a('actualites.Cumul.Fonction', 'Fonction');
      a('actualites.Cumul.sansFonction', 'Fonction non définie');
      a('actualites.Cumul.ProjetsAccompagnement', "Projets d'accompagnement");
      a(
        'actualites.filtre.equipePedagogique',
        "Uniquement l'équipe pédagogique",
      );
      a(
        'actualites.MsgAucunUnDestinataire',
        'Veuillez sélectionner un destinataire.',
      );
      a(
        'actualites.MsgSelectionnerUneClasseGroupe',
        'Vous avez sélectionné des destinataires liés aux classes/groupes. Veuillez sélectionner au moins une classe ou un groupe.',
      );
      a(
        'actualites.MsgSelectionnerUneEntite',
        'Vous avez sélectionné des classes/groupes. Veuillez sélectionner au moins un destinataire (Equipe pédagogique, Personnels, ... ).',
      );
      a('actualites.MsgAucunContenu', 'Veuillez saisir un contenu');
      a(
        'actualites.MsgAucuneQuestion',
        'Le sondage doit comporter au moins une question. Veuillez en créer une',
      );
      a(
        'actualites.saisirContenuQuestionN',
        'Veuillez saisir un contenu pour la question %d',
      );
      a(
        'actualites.saisirContenuTexteN',
        'Veuillez saisir un contenu pour le texte %d',
      );
      a(
        'actualites.ConfirmationSuppression',
        'La sélection contient des réponses. Etes-vous sûr de tout supprimer ?',
      );
      a('actualites.Nominatif', 'Sondage nominatif');
      a('actualites.Anonyme', 'Sondage anonyme');
      a('actualites.InfoNominatif', 'Ce sondage est nominatif');
      a('actualites.InfoAnonyme', 'Ce sondage est anonyme');
      a(
        'actualites.dejaRepondu',
        'Cet individu a déjà répondu à cette information ou à ce sondage',
      );
      a('actualites.discussion.demarrer', 'Démarrer une discussion');
      a('actualites.discussion.reponse', 'Rép : %s');
      a(
        'actualites.discussion.enReponseAInformation',
        'En réponse à l\'information "%s" du %s.',
      );
      a(
        'actualites.discussion.enReponseAuSondage',
        'En réponse au sondage "%s" du %s.',
      );
      a(
        'actualites.discussion.enReponseAInformationDu',
        "En réponse à l'information du %s.",
      );
      a(
        'actualites.discussion.enReponseAuSondageDu',
        'En réponse au sondage du %s.',
      );
      a(
        'actualites.msgConfirmValidation',
        "Vos réponses ont été prises en compte. \nLe sondage reste publié jusqu'au %s.",
      );
      a('actualites.modeles.ListeSondages', 'Liste des modèles de sondage');
      a('actualites.modeles.ListeInfos', "Liste des modèles d'information");
      a('actualites.modeles.AucunSondageDisponible', 'Aucun modèle de sondage');
      a(
        'actualites.modeles.AucuneInfoDisponible',
        "Aucun modèle d'information",
      );
      a(
        'actualites.MaxNombreChoix',
        'Le nombre maximum de choix possibles a été atteint',
      );
      a('actualites.modalites.personalisees', 'Personnalisés');
      a('actualites.modalites.modelePartageTousProf', 'Tous les professeurs');
      a('actualites.modalites.modelePartageTousPerso', 'Tous les personnels');
      a(
        'actualites.modalites.modelePartageTousResp',
        'Tous les responsables délégués',
      );
      a(
        'destinataires.destsParEntites',
        'Destinataires par classes ou groupes',
      );
      a('destinataires.destsATitreIndiv', 'Destinataires à titre individuel');
      a('destinataires.choixClassesGpes', 'Choix des classes / groupes');
      a('destinataires.classes', 'Classes');
      a('destinataires.gpes', 'Groupes');
      a(
        'destinataires.selectionnerTypeDests',
        'Sélectionner le(s) type(s) de destinataire(s)',
      );
      a('destinataires.eleves', 'Élèves');
      a('destinataires.responsables', 'Responsables');
      a('destinataires.envoiParEleve', 'Un envoi par élève');
      a('destinataires.envoiParResp', 'Un envoi par responsable');
      a('destinataires.professeurs', 'Professeurs');
      a('destinataires.personnels', 'Personnels');
      a('destinataires.maitresDeStage', 'Maîtres de stage');
      a('destinataires.inspecteur', 'Inspecteurs');
      a('destinataires.respDesClasses', 'Responsables des classes');
      a('destinataires.Cumul.Classe', 'Classe');
      a('destinataires.Cumul.Groupe', 'Groupe');
      a('destinataires.Cumul.Alphabetique', 'Ordre alphabétique');
      a('destinataires.Cumul.NomDesEleves', 'Nom des élèves');
      a('destinataires.Cumul.ClasseNomDesEleves', 'Classe et nom des élèves');
      a('destinataires.Cumul.GroupeNomDesEleves', 'Groupe et nom des élèves');
      a('destinataires.Cumul.ServicesPeriscolaire', 'Services périscolaires');
      a('menus.Message.AucunJourPublie', 'Aucun jour publié');
      a('menus.RepasMidi', 'Repas de midi');
      a('menus.RepasSoir', 'Repas du soir');
      a('menus.TitreFenetre', 'Légende des icônes');
      a('menus.Allergene', 'Allergènes');
      a('menus.Midi', 'Midi');
      a('menus.Soir', 'Soir');
      a('menus.MenuMidi', 'Menu du Midi');
      a('menus.MenuSoir', 'Menu du Soir');
      a('menus.MenuVide', 'Aucun menu renseigné à cette date');
      a(
        'competences.CalculerLesPositionnementsDeMaClasse',
        'Calculer les positionnements de ma classe',
      );
      a('competences.wai.selectionnezAffichage', 'Sélectionnez un affichage');
      a(
        'competences.fenetreValidationAuto.titre.validationAuto',
        'Calcul du niveau de maîtrise sur un domaine pour les élèves sélectionnés',
      );
      a(
        'competences.fenetreValidationAuto.titre.validationAutoCN',
        'Calcul du niveau de référence des compétences numériques',
      );
      a(
        'competences.fenetreValidationAuto.titre.validationAutoDesComposantes',
        'Calcul du niveau de maîtrise sur un domaine pour les élèves sélectionnés',
      );
      a(
        'competences.fenetreValidationAuto.titre.validationAutoDesComposantesDesClasses',
        'Calcul du niveau de maîtrise sur un domaine pour les élèves des classes sélectionnées',
      );
      a(
        'competences.fenetreValidationAuto.ExplicationCalcul',
        'Pour chaque domaine, le niveau de maîtrise sera calculé selon les options définies dans votre établissement',
      );
      a(
        'competences.fenetreValidationAuto.CalculParEvaluations',
        "à partir de l'ensemble des évaluations qui sont rattachées au domaine",
      );
      a(
        'competences.fenetreValidationAuto.CalculParNiveauxMaitrise',
        'en fonction des niveaux de maîtrise de chaque élément du domaine',
      );
      a(
        'competences.fenetreValidationAuto.EvaluationsAnneeEnCours',
        "en prenant en compte les évaluations uniquement sur l'année en cours",
      );
      a(
        'competences.fenetreValidationAuto.EvaluationsCycle',
        "en prenant en compte les évaluations de l'ensemble du cycle",
      );
      a(
        'competences.fenetreValidationAuto.EnPonderantMatieres',
        'en pondérant les matières selon leur coefficient dans le domaine',
      );
      a(
        'competences.fenetreValidationAuto.IndiquezModeCalcul',
        'Indiquez le mode de calcul que vous souhaitez utiliser ?',
      );
      a(
        'competences.fenetreValidationAuto.QuestionContinuer',
        'Voulez-vous continuer ?',
      );
      a(
        'competences.fenetreValidationAuto.RemplacerExistants',
        'Remplacer les niveaux de maîtrise déjà affectés',
      );
      a(
        'competences.fenetreValidationAuto.OptionNivAcquisCN',
        'en prenant en compte comme niveaux acquis : %s',
      );
      a(
        'competences.fenetreValidationAuto.ExplicationCalculCN',
        'Pour chaque élément, le niveau sera calculé selon les options définies dans votre établissement',
      );
      a(
        'competences.fenetreValidationAuto.RemplacerExistantsCN',
        'Remplacer les niveaux déjà affectés',
      );
      a(
        'competences.fenetreValidationAuto.ExplicationCalculAuto3CN',
        'Le niveau affecté à chaque élément est le niveau le plus élevé où toutes les compétences ont été validées.',
      );
      a(
        'competences.fenetreValidationAuto.ExplicationCalculCECRLDomaine',
        'Le niveau va être déterminé à partir des niveaux de maîtrise obtenus dans chacune des langues vivantes.',
      );
      a(
        'competences.fenetreValidationAuto.MFicheAttributionNiveauCERCLCycle3',
        '{"titre":"CECRL - Attribution des niveaux de maîtrise au cycle 3","html":{"_T":23,"V":"<ul><li><p><span style=\\\"font-family: arial, helvetica, sans-serif;\\\"><strong><span style=\\\"color: #34495e;\\\">Tr&egrave;s bonne maitrise</span> </strong>: affect&eacute; &agrave; partir du niveau A2 dans au moins 1 des 5 activit&eacute;s langagi&egrave;res et A1 dans toutes les autres.</span></p></li><li><p><span style=\\\"font-family: arial, helvetica, sans-serif;\\\"><span style=\\\"color: #34495e;\\\"><strong>Maitrise satisfaisante</strong></span> : affect&eacute; lorsque le niveau A1 est atteint dans les 5 activit&eacute;s langagi&egrave;res.</span></p></li><li><p><span style=\\\"font-family: arial, helvetica, sans-serif;\\\"><span style=\\\"color: #34495e;\\\"><strong>Maitrise fragile</strong></span> : affect&eacute; &agrave; partir du niveau A1 dans au moins 3 des 5 activit&eacute;s langagi&egrave;res.</span></p></li><li><p><span style=\\\"font-family: arial, helvetica, sans-serif;\\\"><span style=\\\"color: #34495e;\\\"><strong>Maitrise insuffisant</strong></span>e : affect&eacute; &agrave; partir du niveau A1 dans 1 ou 2 des 5 activit&eacute;s langagi&egrave;res.</span></p></li></ul>"},"width":500,"height":175,"type":4,"boutons":{"_T":18,"V":1024}}',
      );
      a(
        'competences.fenetreValidationAuto.MFicheAttributionNiveauCERCLCycle4',
        '{"titre":"CECRL - Attribution des niveaux de maîtrise au cycle 4","html":{"_T":23,"V":"<p><span style=\\\"font-family: arial, helvetica, sans-serif;\\\"><strong>Pour les 1&egrave;re langues vivantes</strong></span></p><ul><li><p><span style=\\\"font-family: arial, helvetica, sans-serif;\\\"><strong><span style=\\\"color: #34495e;\\\">Tr&egrave;s bonne maitrise</span> </strong>: affect&eacute; &agrave; partir du niveau B1 dans au moins 1 des 5 activit&eacute;s langagi&egrave;res et A2 dans toutes les autres.</span></p></li><li><p><span style=\\\"font-family: arial, helvetica, sans-serif;\\\"><span style=\\\"color: #34495e;\\\"><strong>Maitrise satisfaisante</strong></span> : affect&eacute; lorsque le niveau A2 est atteint dans les des 5 activit&eacute;s langagi&egrave;res.</span></p></li><li><p><span style=\\\"font-family: arial, helvetica, sans-serif;\\\"><span style=\\\"color: #34495e;\\\"><strong>Maitrise fragile</strong></span> : affect&eacute; &agrave; partir du niveau A2 dans au moins 3 des 5 activit&eacute;s langagi&egrave;res et A1 dans toutes les autres.</span></p></li><li><p><span style=\\\"font-family: arial, helvetica, sans-serif;\\\"><span style=\\\"color: #34495e;\\\"><strong>Maitrise insuffisant</strong></span>e : affect&eacute; &agrave; partir du niveau A2 dans 1 ou 2 des 5 activit&eacute;s langagi&egrave;res et A1 dans toutes les autres.</span></p></li></ul><p><span style=\\\"font-family: arial, helvetica, sans-serif;\\\"><strong>Pour les 2&egrave;me langues vivantes</strong></span></p><ul><li><p><span style=\\\"font-family: arial, helvetica, sans-serif;\\\"><strong><span style=\\\"color: #34495e;\\\">Tr&egrave;s bonne maitrise</span> </strong>: affect&eacute; &agrave; partir du niveau A2 dans plus de 2 des 5 activit&eacute;s langagi&egrave;res et A1 dans toutes les autres.</span></p></li><li><p><span style=\\\"font-family: arial, helvetica, sans-serif;\\\"><span style=\\\"color: #34495e;\\\"><strong>Maitrise satisfaisante</strong></span> : affect&eacute; &agrave; partir du niveau A2 au moins 2 des 5 activit&eacute;s langagi&egrave;res et A1 dans toutes les autres.</span></p></li><li><p><span style=\\\"font-family: arial, helvetica, sans-serif;\\\"><span style=\\\"color: #34495e;\\\"><strong>Maitrise fragile</strong></span> : affect&eacute; &agrave; partir du niveau A2 dans 1 des 5 activit&eacute;s langagi&egrave;res et A1 dans toutes les autres.</span></p></li><li><p><span style=\\\"font-family: arial, helvetica, sans-serif;\\\"><span style=\\\"color: #34495e;\\\"><strong>Maitrise insuffisant</strong></span>e : affect&eacute; &agrave; partir du niveau A1 dans les 5 activit&eacute;s langagi&egrave;res.</span></p></li></ul>"},"width":520,"height":380,"type":4,"boutons":{"_T":18,"V":1024}}',
      );
      a(
        'competences.fenetreValidationAuto.MFicheAttributionNiveauCECRLDomaine1_2',
        '{"titre":"CECRL - Attribution des niveaux de maîtrise pour le domaine 1.2","html":{"_T":23,"V":"<p>En croisant les niveaux de maitrise de LV1 et de LV2 on obtient le niveau de maitrise retenu pour le socle.</p><table style=\\\"border-collapse: collapse; width: 100%;\\\" border=\\\"1\\\" width=\\\"89%\\\"><tbody><tr><td style=\\\"width: 23%;\\\" colspan=\\\"2\\\" rowspan=\\\"2\\\" width=\\\"23%\\\"><p>&nbsp;</p></td><td style=\\\"width: 76%;\\\" colspan=\\\"4\\\" width=\\\"76%\\\"><p style=\\\"text-align: center;\\\">LV1</p></td></tr><tr><td style=\\\"width: 19%; text-align: center;\\\" width=\\\"19%\\\"><p>Ma&icirc;trise insuffisante</p></td><td style=\\\"width: 19%; text-align: center;\\\" width=\\\"19%\\\"><p>&nbsp;Ma&icirc;trise <br />fragile</p></td><td style=\\\"width: 19%; text-align: center;\\\" width=\\\"19%\\\"><p>Ma&icirc;trise satisfaisante</p></td><td style=\\\"width: 19%; text-align: center;\\\" width=\\\"19%\\\"><p>Tr&egrave;s bonne ma&icirc;trise</p></td></tr><tr><td style=\\\"width: 5%;\\\" rowspan=\\\"4\\\" width=\\\"5%\\\"><p>LV2</p></td><td style=\\\"width: 18%;\\\" width=\\\"18%\\\"><p>&nbsp;Ma&icirc;trise insuffisante</p></td><td style=\\\"width: 19%; text-align: center;\\\" width=\\\"19%\\\"><p>Insuffisante</p></td><td style=\\\"width: 19%; text-align: center;\\\" width=\\\"19%\\\"><p>Fragile</p></td><td style=\\\"width: 19%; text-align: center;\\\" width=\\\"19%\\\"><p>Fragile</p></td><td style=\\\"width: 19%; text-align: center;\\\" width=\\\"19%\\\"><p>Satisfaisante</p></td></tr><tr><td style=\\\"width: 18%;\\\" width=\\\"18%\\\"><p>&nbsp;Ma&icirc;trise<br />&nbsp;fragile</p></td><td style=\\\"width: 19%; text-align: center;\\\" width=\\\"19%\\\"><p>Fragile</p></td><td style=\\\"width: 19%; text-align: center;\\\" width=\\\"19%\\\"><p>Fragile</p></td><td style=\\\"width: 19%; text-align: center;\\\" width=\\\"19%\\\"><p>Satisfaisante</p></td><td style=\\\"width: 19%; text-align: center;\\\" width=\\\"19%\\\"><p>Satisfaisante</p></td></tr><tr><td style=\\\"width: 18%;\\\" width=\\\"18%\\\"><p>&nbsp;Ma&icirc;trise satisfaisante</p></td><td style=\\\"width: 19%; text-align: center;\\\" width=\\\"19%\\\"><p>Fragile</p></td><td style=\\\"width: 19%; text-align: center;\\\" width=\\\"19%\\\"><p>Satisfaisante</p></td><td style=\\\"width: 19%; text-align: center;\\\" width=\\\"19%\\\"><p>Satisfaisante</p></td><td style=\\\"width: 19%; text-align: center;\\\" width=\\\"19%\\\">Tr&egrave;s bonne ma&icirc;trise</td></tr><tr><td style=\\\"width: 18%;\\\" width=\\\"18%\\\"><p>&nbsp;Tr&egrave;s bonne ma&icirc;trise</p></td><td style=\\\"width: 19%; text-align: center;\\\" width=\\\"19%\\\"><p>Satisfaisante</p></td><td style=\\\"width: 19%; text-align: center;\\\" width=\\\"19%\\\"><p>Satisfaisante</p></td><td style=\\\"width: 19%; text-align: center;\\\" width=\\\"19%\\\">Tr&egrave;s bonne ma&icirc;trise</td><td style=\\\"width: 19%; text-align: center;\\\" width=\\\"19%\\\">Tr&egrave;s bonne ma&icirc;trise</td></tr></tbody></table>"},"width":675,"height":360,"type":4,"boutons":{"_T":18,"V":1024}}',
      );
      a(
        'competences.fenetreValidationAutoPositionnement.titre',
        'Calcul du positionnement sur un service',
      );
      a(
        'competences.fenetreValidationAutoPositionnement.titreTousLesPositionnements',
        'Calcul des positionnements',
      );
      a(
        'competences.fenetreValidationAutoPositionnement.message',
        "Ce calcul prend en compte le coefficient de chaque évaluation et la valeur en points des niveaux de maîtrise obtenus par l'élève pour chaque compétence évaluée.",
      );
      a(
        'competences.fenetreValidationAutoPositionnement.messageCalculTousServices',
        "Ce calcul permet d'attribuer un positionnement dans chaque matière pour tous les élèves. Il prend en compte le coefficient de chaque évaluation et la valeur en points des niveaux de maîtrise obtenus par l'élève pour chaque compétence évaluée.",
      );
      a(
        'competences.fenetreValidationAutoPositionnement.detailPoints',
        'Les points attribués à chaque niveau de maîtrise dans votre établissement sont les suivants :',
      );
      a(
        'competences.fenetreValidationAutoPositionnement.messageOptionnel',
        'Ce calcul prendra en compte les évaluations saisies entre le %s et le %s.',
      );
      a(
        'competences.fenetreValidationAutoPositionnement.indiquezModeCalculPositionnement',
        'Indiquez le mode de calcul que vous souhaitez utiliser ?',
      );
      a(
        'competences.fenetreValidationAutoPositionnement.voulezVousContinuer',
        'Voulez-vous continuer ?',
      );
      a(
        'competences.fenetreValidationAutoPositionnement.remplacerPositionnementsExistants',
        'Remplacer le positionnement des élèves déjà évalués',
      );
      a(
        'competences.fenetreValidationAutoPositionnement.titreNoteLSUSelonEvaluations',
        "Calcul de la note pour l'export vers LSU",
      );
      a(
        'competences.fenetreValidationAutoPositionnement.messageNoteLSUSelonEvaluations',
        'La note pour LSU est calculée en faisant la somme des points obtenus pour chaque évaluation puis en ramenant ce total de points au barème de notation de la classe.\nLa note obtenue est arrondie au point le plus proche.',
      );
      a(
        'competences.fenetreValidationAutoPositionnement.titrePositionnementNote',
        'Calcul de la note sur un service',
      );
      a(
        'competences.fenetreValidationAutoPositionnement.remplacerPositionnementsNote',
        'Remplacer la note des élèves déjà évalués',
      );
      a(
        'competences.fenetreValidationAutoPositionnement.restrictions.uneCompetencePriseEnCompte',
        '1/%d compétence évaluée prise en compte',
      );
      a(
        'competences.fenetreValidationAutoPositionnement.restrictions.XCompetencesPrisesEnCompte',
        '%d/%d compétences évaluées prises en compte',
      );
      a('competences.SelectionnezEvaluation', 'Sélectionnez une évaluation');
      a('competences.items', 'Items');
      a('competences.competencesConnaissancesEvaluees', 'Compétences évaluées');
      a('competences.ajouterRelationsAEvaluation', 'Ajouter des compétences');
      a(
        'competences.choixCompetencesConnaissancesAEvaluer',
        'Choix des compétences à évaluer',
      );
      a('competences.UniquementMesCompetences', 'Uniquement mes compétences');
      a('competences.niveauDeMaitrise', 'Niveau de maîtrise');
      a('competences.eleve', 'Élève');
      a('competences.eleve', 'élèves');
      a('competences.evaluation', 'Évaluation');
      a('competences.competencesConnaissances', 'Compétences');
      a('competences.Domaines', 'Domaines');
      a('competences.NivLVE', 'Niv. LVE');
      a('competences.NivCN', 'Niveau');
      a('competences.HintNiveauLVE', 'Niveau commun de référence du CECRL');
      a(
        'competences.HintNiveauCN',
        'Niveau commun de référence des compétences numériques',
      );
      a(
        'competences.SaisieImpossibleGrilleLVE',
        'Seuls les services de LVE peuvent évaluer ce référentiel',
      );
      a(
        'competences.TotalElementsCompetencesEvalues',
        'Total des compétences évaluées',
      );
      a('competences.DetailDesResultats', 'Détail des résultats');
      a('competences.ServiceLVE', 'Service LVE');
      a('competences.intitule', 'Intitulé');
      a('competences.descriptif', 'Descriptif');
      a(
        'competences.message.CompetenceManquant',
        "aucune compétence évaluée n'est renseignée",
      );
      a(
        'competences.message.ServiceLVEManquant',
        "le service de langue vivante étrangère (LVE) n'est pas renseigné",
      );
      a(
        'competences.message.IntituleManquant',
        "l'intitulé n'est pas renseigné",
      );
      a(
        'competences.message.ModifNombreItemsImpossible',
        "Cette compétence est évaluée %d fois. Pour réduire le nombre de fois où cette compétence est évaluée, vous devez spécifier les occurences à supprimer dans la fenêtre d'édition des évaluations",
      );
      a(
        'competences.message.ConfirmationSuppression',
        "La suppression de l'évaluation de cette compétence va entrainer la perte des niveaux de maitrise déjà affectés aux élèves\nConfirmez-vous cette suppression ?",
      );
      a('competences.BilanParMatiere', 'Bilan par matière');
      a('competences.BilanTransversal', 'Bilan transversal');
      a('competences.BilansDeCycle', 'Bilans de cycle');
      a('competences.TauxDeReussite', 'Tx. De réussite :');
      a('competences.ValidePar', 'Validé par');
      a(
        'competences.EleveHorsEtablissement',
        "L'élève n'est plus dans l'établissement",
      );
      a('competences.EleveHorsClasse', "L'élève n'est plus dans la classe");
      a('competences.EleveHorsGroupe', "L'élève n'est plus dans le groupe");
      a(
        'competences.CompetenceNonAffecteeAClasse',
        "la compétence n'est pas affectée à sa classe",
      );
      a(
        'competences.EleveNiveauClasseNonCompatible',
        "cet item n'est pas évalué pour le niveau de la classe de l'élève",
      );
      a('competences.DupliquerLaCompetence', 'Dupliquer la compétence');
      a('competences.SupprimerLaCompetence', 'Supprimer la compétence');
      a(
        'competences.AppliquerOrdreDeLaGrille',
        "Appliquer l'ordre de la grille",
      );
      a('competences.ModifierCoefficient', 'Modifier le coefficient');
      a('competences.nombre', 'Nb.');
      a(
        'competences.nombreHint',
        'Nombre de fois où la compétence est évaluée',
      );
      a('competences.ClasseGroupe', 'Classe/Groupe');
      a('competences.service', 'Service');
      a('competences.Informations', 'Informations');
      a('competences.palier', 'Cycle');
      a(
        'competences.DupliquerEvalLVE',
        "Dupliquer l'évaluation concernant la compétence LVE sur les services de langue",
      );
      a(
        'competences.DupliquerEvalService',
        "Dupliquer l'évaluation sur les services",
      );
      a(
        'competences.ImpossibleDeDupliquer',
        "Impossible de dupliquer l'évaluation",
      );
      a('competences.Dupliquer', 'Dupliquer');
      a('competences.DupliquerSurMaClasse', 'Dupliquer sur ma classe');
      a('competences.colonne.coef', 'Coef.');
      a('competences.coefficient', 'Coefficient');
      a('competences.niveauParDefautAbr', 'Niv.');
      a('competences.niveauParDefaut', 'Niveau de maîtrise par défaut');
      a('competences.niveauCalculeEvals', 'Niveau calculé (évaluations)');
      a('competences.selectionnerService', 'Sélectionner un service');
      a('competences.syntheseDesEvaluations', 'Synthèse des évaluations');
      a('competences.niveau', 'Niveau');
      a('competences.AjouterCommentaire', 'Ajouter un commentaire');
      a('competences.ModifierDate', 'Modifier la date');
      a('competences.GrapheAraignee', 'Graphe araignée');
      a(
        'competences.SensDeSaisieHorizontal',
        "Continuer l'édition horizontalement",
      );
      a(
        'competences.SensDeSaisieVertical',
        "Continuer l'édition verticalement",
      );
      a('competences.HintSaisieHorizontale', 'Saisie activée par item');
      a('competences.HintSaisieVerticale', 'Saisie activée par élève');
      a(
        'competences.CommentairesDifferents',
        "Attention, le commentaire n'est pas le même pour tous les niveaux sélectionnés !",
      );
      a(
        'competences.PublieSurEspaceParent',
        "Publié sur l'Espace Parents et Élèves",
      );
      a(
        'competences.PublierSurEspaceParent',
        "Publier sur l'Espace Parents et Élèves",
      );
      a('competences.grilleParDomaine', 'Référentiels par domaine');
      a('competences.grilleParMatiere', 'Référentiels par matière');
      a('competences.competetencesNumeriques', 'Compétences numériques');
      a(
        'competences.ModifierNiveauAcquisition',
        'Modifier le niveau de maîtrise',
      );
      a('competences.SupprimerEvaluations', 'Supprimer les évaluations');
      a('competences.Legende', 'Légende');
      a('competences.ToutesLesCompetences', 'Toutes les compétences');
      a('competences.PositionnementGeneral', 'Positionnement général');
      a('competences.PositionnementLSU', 'Positionnement LSU');
      a('competences.Note', 'Note');
      a('competences.PourcentageDeReussite', 'Pourcentage de réussite :');
      a(
        'competences.NotationClotureePourLaClasse',
        'Le devoir est dans une période clôturée pour cette classe.',
      );
      a(
        'competences.EvaluationClotureePourLaClasse',
        "L'évaluation est dans une période clôturée pour cette classe.",
      );
      a(
        'competences.FiltrerElementsGrilleEvalues',
        'Uniquement les éléments avec évaluations',
      );
      a('competences.FiltrerItemsEvalues', 'Uniquement les items évalués');
      a('competences.AppreciationDeLEleve', "Appréciation de l'élève");
      a(
        'competences.AppreciationDeLaClasse',
        'Appréciation des élèves de la classe',
      );
      a(
        'competences.AppreciationsDifferentes',
        'Des appréciations différentes ont été saisies pour les élèves.',
      );
      a(
        'competences.LegendeCompetenceGrilleMM',
        "Compétence provenant d'un référentiel par matière",
      );
      a(
        'competences.LegendeCompetenceLangagiere',
        'Activité langagière comptant pour la validation CECRL du domaine LVE',
      );
      a('competences.bilanpardomaine.colonnes.Items', 'Items');
      a('competences.bilanpardomaine.colonnes.Coefficient', 'Coef.');
      a('competences.bilanpardomaine.colonnes.Evaluations', 'Évaluations');
      a('competences.bilanpardomaine.colonnes.Niveau', 'Niveau');
      a('competences.bilanpardomaine.colonnes.ValideLe', 'Validé le');
      a(
        'competences.bilanpardomaine.colonnes.hintCoefficient',
        'Coefficients utilisés pour le calcul automatique du niveau de maîtrise',
      );
      a('competences.bilanpardomaine.Observations', 'Observations');
      a(
        'competences.bilanpardomaine.NiveauMaitriseLVE',
        'Niveau de maîtrise de chaque langue',
      );
      a('competences.evaluations', 'Évaluations');
      a(
        'competences.hintEvaluations',
        "Récapitulatifs des évaluations de l'élève",
      );
      a('competences.Synthese', "Synthèse des acquis scolaires de l'élève");
      a('competences.ScoreEleve', 'Score');
      a(
        'competences.ScoreEleveHint',
        'Nombre moyen de points, calculé à partir des évaluations',
      );
      a(
        'competences.graphe.hintBoutonGraphe',
        'Représentation graphique du niveau de maîtrise par domaine',
      );
      a(
        'competences.graphe.TitreFenetre',
        'Représentation graphique du niveau de maîtrise par domaine',
      );
      a(
        'competences.graphe.TitreChoixGraphes',
        "Niveau de maîtrise de l'élève",
      );
      a('competences.graphe.CalculeAutomatiquement', 'Calculé automatiquement');
      a('competences.graphe.SaisieParEnseignant', "Saisi par l'enseignant");
      a(
        'competences.graphe.GrapheNonDisponible',
        "Pour afficher le graphe de l'élève, celui-ci doit avoir été évalué dans au moins 3 domaines.",
      );
      a(
        'competences.xSyntheseRemplie',
        '%d synthèse des acquis scolaires remplie.',
      );
      a(
        'competences.xSynthesesRemplies',
        '%d synthèses des acquis scolaires remplies.',
      );
      a('competences.xAppreciationRemplie', '%d appréciation remplie.');
      a('competences.xAppreciationsRemplies', '%d appréciations remplies.');
      a(
        'competences.RecopierAppreciations',
        "Recopier l'appréciation de la fiche brevet dans la synthèse des acquis",
      );
      a(
        'competences.ConfirmationRecopierAppreciations',
        'Voulez-vous écraser les %d synthèses déjà remplies ?',
      );
      a(
        'competences.ExplicationCalculStr1',
        'Pour un élève, si le score obtenu est :',
      );
      a('competences.Et', 'et');
      a(
        'competences.ExplicationCalculStr2',
        'il obtiendra le niveau de maîtrise %s',
      );
      a('competences.EnseignementDeComplement', 'Enseignement de complément');
      a(
        'competences.AfficherUneJaugeParPeriode',
        'Afficher une jauge par période',
      );
      a('competences.ToutesLesLVE', 'Toutes les LVE');
      a(
        'competences.DomaineLVENon',
        'La validation du domaine ne peut se faire que lorsque "%s" est sélectionné',
      );
      a(
        'competences.TitreAideSaisieNivMaitrise',
        'Quels raccourcis pour les niveaux de maîtrise ?',
      );
      a(
        'competences.MessageAideSaisieNivMaitrise',
        'Vous pouvez indiquer les niveaux de maîtrise des élèves en utilisant les raccourcis claviers ci-dessous :',
      );
      a(
        'competences.MFicheEchelleCompetencesNumeriques',
        '{"titre":"Définition des niveaux des compétences numériques","html":{"_T":23,"V":"<p><span style=\\\"font-family: arial, helvetica, sans-serif; font-size: 12px;\\\">8 niveaux de ma&icirc;trise sont d&eacute;finis sp&eacute;cifiquement pour la validation des comp&eacute;tences num&eacute;riques</span></p><ul><li><span style=\\\"font-family: arial, helvetica, sans-serif; font-size: 12px;\\\">Niveaux 1 et 2&nbsp;: Novice</span></li><li><span style=\\\"font-family: arial, helvetica, sans-serif; font-size: 12px;\\\">Niveaux 3 et 4&nbsp;: Ind&eacute;pendant</span></li><li><span style=\\\"font-family: arial, helvetica, sans-serif; font-size: 12px;\\\">Niveaux 5 et 6&nbsp;: Avanc&eacute;</span></li><li><span style=\\\"font-family: arial, helvetica, sans-serif; font-size: 12px;\\\">Niveaux 7 et 8: &nbsp;Expert</span></li></ul>"},"width":435,"height":110,"type":4,"boutons":{"_T":18,"V":1024}}',
      );
      a('BilanCompetencesParMM.colonnes.Items', 'Items');
      a('BilanCompetencesParMM.colonnes.Jauge', 'Évaluations');
      a('BilanCompetencesParMM.colonnes.Niveau', 'Niveau');
      a(
        'BilanCompetencesParMM.CalculAutoColonneService.hint',
        'Calcul du niveau de maîtrise des éléments',
      );
      a(
        'BilanCompetencesParMM.CalculAutoColonneService.titre',
        'Calcul du niveau de maîtrise des éléments de compétence',
      );
      a(
        'BilanCompetencesParMM.CalculAutoColonneService.message',
        "Ce calcul prend en compte le coefficient de chaque évaluation et la valeur en points des niveaux de maîtrise obtenus par l'élève pour chaque élément évalué.",
      );
      a(
        'BilanCompetencesParMM.CalculAutoColonneService.remplacerExistants',
        'Remplacer les niveaux de maîtrise déjà affectés',
      );
      a('evaluations.UniquementMesEvaluations', 'Uniquement mes évaluations');
      a(
        'evaluations.CliquezPourCreerEvaluation',
        'Cliquez ici pour créer une évaluation',
      );
      a('evaluations.CreerEvaluation', 'Créer une évaluation');
      a(
        'evaluations.CreerEvaluationQCM',
        'Créer une évaluation associée à un QCM',
      );
      a('evaluations.ModifierEvaluation', 'Modifier une évaluation');
      a('evaluations.colonne.intitule', 'Intitulé');
      a('evaluations.colonne.periode1', 'Période 1');
      a('evaluations.colonne.periode2', 'Période 2');
      a('evaluations.colonne.publieeLe', 'Publiée le');
      a('evaluations.colonne.sujet', 'Suj.');
      a('evaluations.colonne.hint.sujet', "Sujet de l'évaluation");
      a('evaluations.colonne.corrige', 'Cor.');
      a('evaluations.colonne.hint.corrige', "Corrigé de l'évaluation");
      a('evaluations.colonne.resultats', 'Résultats');
      a(
        'evaluations.colonne.hint.resultats',
        "Résultats obtenus par les élèves à l'évaluation",
      );
      a('evaluations.colonne.hint.nb', 'Nombre de compétences évaluées');
      a('evaluations.colonne.devoir', 'Devoir');
      a('evaluations.colonne.hint.devoir', "Devoir associé à l'évaluation");
      a('evaluations.colonne.QCM', 'QCM');
      a('evaluations.colonne.hint.QCM', "QCM associé à l'évaluation");
      a('evaluations.colonne.nbSaisi', 'Nb. saisi');
      a(
        'evaluations.colonne.hint.nbSaisi',
        'Nombre de niveaux saisis sur le nombre total à saisir',
      );
      a('evaluations.colonne.estDansBilan', 'Bilan');
      a(
        'evaluations.colonne.hint.estDansBilan',
        "Prendre en compte l'évaluation dans les bilans de cycle",
      );
      a('evaluations.CmdSupprimerSujet', 'Supprimer le sujet');
      a(
        'evaluations.MsgConfirmSupprSujet',
        "Voulez-vous supprimer le sujet de l'évaluation ?",
      );
      a('evaluations.CmdSupprimerCorrige', 'Supprimer le corrigé');
      a(
        'evaluations.MsgConfirmSupprCorrige',
        "Voulez-vous supprimer le corrigé de l'évaluation ?",
      );
      a('evaluations.avecLeSujet', 'avec le sujet');
      a('evaluations.avecLeCorrige', 'avec le corrigé');
      a('evaluations.EvaluationDuDate', 'Évaluation du %s');
      a('evaluations.CoefficientAbrege', 'Coef.');
      a(
        'evaluations.AucuneEvaluationSurPeriode',
        'Aucune évaluation disponible pour cette période',
      );
      a('evaluations.SelectionnezUneEvaluation', 'Sélectionnez une évaluation');
      a('evaluations.DetailsEvaluation', "Details de l'évaluation");
      a('evaluations.tri.Par_ordre_chronologique', 'Par ordre chronologique');
      a('evaluations.tri.Par_matiere', 'Par matière');
      a(
        'evaluations.NonComptabiliseDansBilan',
        'non comptabilisé dans le bilan',
      );
      a(
        'evaluations.MsgAucunServiceDisponiblePourRemplacement',
        "Aucun service n'est disponible pour remplacer le service existant",
      );
      a(
        'evaluations.DupliquerSurLAnneeEnCours',
        "Dupliquer sur l'année en cours",
      );
      a('evaluations.toutesLesEvaluations', 'Toutes les évaluations');
      a('evaluations.notes', 'Notes');
      a(
        'evaluations.calculAutoNotes',
        "Calculer la note à partir des résultats de l'évaluation",
      );
      a(
        'evaluations.confirmationAffectationNotes',
        'Les notes du devoir vont être calculées à partir des niveaux de maîtrise de chaque compétence évaluée.\nVoulez-vous continuer ?',
      );
      a('evaluations.moyenneDevoir', 'Moyenne du devoir');
      a(
        'evaluations.MFicheCalculNote',
        '{"titre":"Comment est calculée la note d\'une évaluation ?","html":{"_T":23,"V":"<p><span style=\\\"color: #333333; text-transform: none; text-indent: 0px; letter-spacing: normal; font-family: arial,helvetica,sans-serif; font-size: 13px; font-style: normal; font-weight: 400; word-spacing: 0px; float: none; display: inline !important; white-space: normal; orphans: 2; widows: 2; background-color: #ffffff; font-variant-ligatures: normal; font-variant-caps: normal; -webkit-text-stroke-width: 0px; text-decoration-style: initial; text-decoration-color: initial;\\\"><span style=\\\"font-family: arial,helvetica,sans-serif; font-size: 13px;\\\">Pour calculer la note :</span></span></p><ol><li><span style=\\\"color: #333333; text-transform: none; text-indent: 0px; letter-spacing: normal; font-family: arial,helvetica,sans-serif; font-size: 13px; font-style: normal; font-weight: 400; word-spacing: 0px; float: none; display: inline !important; white-space: normal; orphans: 2; widows: 2; background-color: #ffffff; font-variant-ligatures: normal; font-variant-caps: normal; -webkit-text-stroke-width: 0px; text-decoration-style: initial; text-decoration-color: initial;\\\"><span style=\\\"font-family: arial,helvetica,sans-serif; font-size: 13px;\\\">On fait la somme des points obtenus &agrave; chaque item (en prenant en compte son coefficient et les points attribu&eacute;s dans <span style=\\\"color: #888888;\\\"><strong>Param&egrave;tres &gt; Niveaux de ma&icirc;trise)</strong></span></span></span></li><li><span style=\\\"color: #333333; text-transform: none; text-indent: 0px; letter-spacing: normal; font-family: arial,helvetica,sans-serif; font-size: 13px; font-style: normal; font-weight: 400; word-spacing: 0px; float: none; display: inline !important; white-space: normal; orphans: 2; widows: 2; background-color: #ffffff; font-variant-ligatures: normal; font-variant-caps: normal; -webkit-text-stroke-width: 0px; text-decoration-style: initial; text-decoration-color: initial;\\\"><span style=\\\"font-family: arial,helvetica,sans-serif; font-size: 13px;\\\">Cette somme est divis&eacute;e <span style=\\\"color: #333333; text-transform: none; text-indent: 0px; letter-spacing: normal; font-family: arial,helvetica,sans-serif; font-size: 13px; font-style: normal; font-weight: 400; word-spacing: 0px; float: none; display: inline !important; white-space: normal; orphans: 2; widows: 2; background-color: #ffffff; font-variant-ligatures: normal; font-variant-caps: normal; -webkit-text-stroke-width: 0px; text-decoration-style: initial; text-decoration-color: initial;\\\"><span style=\\\"font-family: arial,helvetica,sans-serif; font-size: 13px;\\\">par le nombre d\'items &eacute;valu&eacute;s. </span></span></span></span></li><li><span style=\\\"color: #333333; text-transform: none; text-indent: 0px; letter-spacing: normal; font-family: arial,helvetica,sans-serif; font-size: 13px; font-style: normal; font-weight: 400; word-spacing: 0px; float: none; display: inline !important; white-space: normal; orphans: 2; widows: 2; background-color: #ffffff; font-variant-ligatures: normal; font-variant-caps: normal; -webkit-text-stroke-width: 0px; text-decoration-style: initial; text-decoration-color: initial;\\\"><span style=\\\"font-family: arial,helvetica,sans-serif; font-size: 13px;\\\"><span style=\\\"color: #333333; text-transform: none; text-indent: 0px; letter-spacing: normal; font-family: arial,helvetica,sans-serif; font-size: 13px; font-style: normal; font-weight: 400; word-spacing: 0px; float: none; display: inline !important; white-space: normal; orphans: 2; widows: 2; background-color: #ffffff; font-variant-ligatures: normal; font-variant-caps: normal; -webkit-text-stroke-width: 0px; text-decoration-style: initial; text-decoration-color: initial;\\\"><span style=\\\"font-family: arial,helvetica,sans-serif; font-size: 13px;\\\"><span style=\\\"color: #333333; text-transform: none; text-indent: 0px; letter-spacing: normal; font-family: arial,helvetica,sans-serif; font-size: 13px; font-style: normal; font-weight: 400; word-spacing: 0px; float: none; display: inline !important; white-space: normal; orphans: 2; widows: 2; background-color: #ffffff; font-variant-ligatures: normal; font-variant-caps: normal; -webkit-text-stroke-width: 0px; text-decoration-style: initial; text-decoration-color: initial;\\\"><span style=\\\"font-family: arial,helvetica,sans-serif; font-size: 13px;\\\"><span style=\\\"color: #333333; text-transform: none; text-indent: 0px; letter-spacing: normal; font-family: arial,helvetica,sans-serif; font-size: 13px; font-style: normal; font-weight: 400; word-spacing: 0px; float: none; display: inline !important; white-space: normal; orphans: 2; widows: 2; background-color: #ffffff; font-variant-ligatures: normal; font-variant-caps: normal; -webkit-text-stroke-width: 0px; text-decoration-style: initial; text-decoration-color: initial;\\\"><span style=\\\"font-family: arial,helvetica,sans-serif; font-size: 13px;\\\">Le r&eacute;sultat est ramen&eacute; sur 20 (ou sur le bar&egrave;me du devoir) puis arrondi au point le plus proche</span></span></span></span></span></span></span></span></li></ol><p>&nbsp;<span style=\\\"font-size: 11px;\\\"><em>Exemple avec les couleurs et valeurs par d&eacute;faut :</em></span></p><ul><li><span style=\\\"font-size: 11px;\\\"><em><img src=\\\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAACxMAAAsTAQCanBgAAAD+SURBVChTY/wPBAxI4M+fPwzMzMxg9t+/fxlYWFjAbBhggtJgyS23tjC4LXVj4OvgA2MQGyQGkoMBsA0ggabDTQxNB5ugwqigxq6GocGuAWwzWMPW21sZfJb5QKUZGHYE7WCQFJBk0J+nDxVhYNgUuYnBV82XgQnk5t5jvVBh3KD/eD/YfwwgG3jbeP87TXUCMbGC7OXZYDUgAHYSXzsfw+dfn6FmYXcSDxsPw6eKTxAnmUiZQIVxA1MpU3BogW3YfGszg99yP6gUdgD3NIjjpewFDjpcACQHUgMGIBtAAOi0/5tvbv7vuMDxP3crNxiD2JtubgLLwQCJSYOBAQDa1bUAEGd1jwAAAABJRU5ErkJggg==\\\" alt=\\\"\\\" />&nbsp;: 50 points</em></span></li><li><span style=\\\"font-size: 11px;\\\"><em><img src=\\\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAIAAADZF8uwAAAAdUlEQVQYlZXQsQmAQAwF0FvO0gPLOEfazGLlDkKu9uS7gRuYJbQ4UThRz0+KFI8kxG0FcWcXDQzxSl6JIZPNOeqWvhqarLqlv9Bk812kioYDMeQJMeRAPrRPyIe2ACn9WRcN34cXvSBlXMGQWqlWYkiakaOX7D6kKu7V4gTLAAAAAElFTkSuQmCC\\\" alt=\\\"\\\" />&nbsp;: 40 points</em></span></li><li><span style=\\\"font-size: 11px;\\\"><em><img src=\\\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAIAAADZF8uwAAAAZUlEQVQYlZXQMQ7AIAgFULuLh+JcXqp6m4aN1ZH9d7CmTa0JJQwML0B+gKPCPVqBMoQgBGVYnVDLOLZ3t/xAVj9EbysDKS+R8kCSlkiSB9Gvc1Ycj7siuMLcoQyJkAjlvmNC6zoBm69Vps8BQyUAAAAASUVORK5CYII=\\\" alt=\\\"\\\" />&nbsp;: 25 points</em></span></li><li><span style=\\\"font-size: 11px;\\\"><em><img src=\\\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAMCAIAAAA21aCOAAAAZ0lEQVQYlZXQMQ6AMAgFUOfu5Uz/WByqcDZCQ3TQtLFaUwkDwwuEv+1rtbUpRBwwIiNyIFRfXGW2lIauzDcXqk90doh058DMOdCdEc2cEf13q3dDZOmP1VyunEtxwHK2nB1om0b3XQdrUzqm5Ss4FwAAAABJRU5ErkJggg==\\\" alt=\\\"\\\" />&nbsp;: 10 points</em></span></li></ul><p><span style=\\\"font-size: 11px;\\\"><em>Avec les niveaux de ma&icirc;trise suivants (affect&eacute;s du coefficient 1) :&nbsp;<img src=\\\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAIAAADZF8uwAAAAdUlEQVQYlZXQsQmAQAwF0FvO0gPLOEfazGLlDkKu9uS7gRuYJbQ4UThRz0+KFI8kxG0FcWcXDQzxSl6JIZPNOeqWvhqarLqlv9Bk812kioYDMeQJMeRAPrRPyIe2ACn9WRcN34cXvSBlXMGQWqlWYkiakaOX7D6kKu7V4gTLAAAAAElFTkSuQmCC\\\" alt=\\\"\\\" />&nbsp;<img src=\\\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAIAAADZF8uwAAAAdUlEQVQYlZXQsQmAQAwF0FvO0gPLOEfazGLlDkKu9uS7gRuYJbQ4UThRz0+KFI8kxG0FcWcXDQzxSl6JIZPNOeqWvhqarLqlv9Bk812kioYDMeQJMeRAPrRPyIe2ACn9WRcN34cXvSBlXMGQWqlWYkiakaOX7D6kKu7V4gTLAAAAAElFTkSuQmCC\\\" alt=\\\"\\\" />&nbsp;<img src=\\\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAMCAIAAAA21aCOAAAAZ0lEQVQYlZXQMQ6AMAgFUOfu5Uz/WByqcDZCQ3TQtLFaUwkDwwuEv+1rtbUpRBwwIiNyIFRfXGW2lIauzDcXqk90doh058DMOdCdEc2cEf13q3dDZOmP1VyunEtxwHK2nB1om0b3XQdrUzqm5Ss4FwAAAABJRU5ErkJggg==\\\" alt=\\\"\\\" />&nbsp;un &eacute;l&egrave;ve obtiendra la note de 12/20&nbsp;</em></span><em><span style=\\\"font-size: 11px;\\\">&nbsp;car il a obtenu&nbsp;90 points sur les 150 possibles.&nbsp;</span></em></p><p><span style=\\\"font-family: arial,helvetica,sans-serif; font-size: 13px;\\\">&nbsp;</span></p>"},"width":500,"height":275,"type":4,"boutons":{"_T":18,"V":1024}}',
      );
      a('evaluations.parametresAffichage', "Paramètres d'affichage");
      a(
        'FenetreEvaluation.MFicheCoefficientSurEvaluation',
        '{"titre":"Comment gérer les coefficients sur les évaluations ?","html":{"_T":23,"V":"<p><span style=\\\"font-family: arial, helvetica, sans-serif; font-size: 12px;\\\">Vous pouvez affecter un coefficient &agrave; l</span><span style=\\\"font-family: arial, helvetica, sans-serif; font-size: 12px;\\\">&rsquo;&eacute;valuation ou &agrave; c</span><span style=\\\"font-family: arial, helvetica, sans-serif; font-size: 12px;\\\">haque comp&eacute;tence &eacute;valu&eacute;e.</span></p><p><span style=\\\"font-family: arial, helvetica, sans-serif; font-size: 12px;\\\">- le coefficient de l&rsquo;&eacute;valuation s&rsquo;applique &agrave; toutes les comp&eacute;tences &eacute;valu&eacute;es.</span></p><p><span style=\\\"font-family: arial, helvetica, sans-serif; font-size: 12px;\\\">- le coefficient des comp&eacute;tences permet de pond&eacute;rer diff&eacute;remment les comp&eacute;tences &eacute;valu&eacute;es. Pour cela, il faut laisser le coefficient de l&rsquo;&eacute;valuation &agrave; 1 et personnaliser le coefficient de chaque comp&eacute;tence.</span></p><p><span style=\\\"font-family: arial, helvetica, sans-serif;\\\"><span style=\\\"font-size: 12px;\\\">- le coefficient&nbsp;0 permet de ne pas comptabiliser l\'&eacute;valuation ou la comp&eacute;tence concern&eacute;e <span>dans les bilans</span> p&eacute;riodiques et de fin de cycle.</span></span></p>"},"width":500,"height":165,"type":4,"boutons":{"_T":18,"V":1024}}',
      );
      a(
        'FenetrePreferencesCalculPositionnement.MesPreferencesCalculPos',
        'Mes préférences de calcul du positionnement',
      );
      a(
        'FenetrePreferencesCalculPositionnement.DescriptionMode2',
        'Positionnement calculé à partir des dernières évaluations',
      );
      a(
        'FenetrePreferencesCalculPositionnement.DescriptionMode3',
        'Positionnement calculé à partir des meilleures évaluations',
      );
      a('FenetrePreferencesCalculPositionnement.Dernieres', 'dernières');
      a(
        'FenetrePreferencesCalculPositionnement.DerniersPourcents',
        'derniers pourcents',
      );
      a('FenetrePreferencesCalculPositionnement.Meilleures', 'meilleures');
      a(
        'FenetrePreferencesCalculPositionnement.MeilleursPourcents',
        'meilleurs pourcents',
      );
      a('stage.comboStage', 'Liste déroulante : Choisissez un stage:');
      a('stage.listeStagiaire.stagiaire', 'Stagiaire');
      a('stage.listeStagiaire.sujet', 'Sujet');
      a('stage.listeStagiaire.entreprise', 'Entreprise');
      a('stage.listeStagiaire.maitresDeStage', 'Maîtres de stage');
      a('stage.listeStagiaire.referants', 'Référents');
      a('stage.listeStagiaire.parametres', "Mes préférences d'affichage");
      a(
        'stage.listeStagiaire.comboStage',
        'Liste déroulante : Choisissez une session de stage:',
      );
      a('stage.toutesLesSessions', 'Toutes les sessions');
      a('stage.InterrompuLe', 'Interrompu le');
      a('FicheStage.entreprise', 'Entreprise');
      a('FicheStage.details', 'Détails du stage');
      a('FicheStage.suivi', 'Suivi');
      a('FicheStage.annexeMobile', 'Annexe');
      a('FicheStage.annexePeda', 'Annexe pédagogique');
      a('FicheStage.appreciations', 'Appréciations');
      a('FicheStage.conventionSignee', 'Convention signée');
      a('FicheStage.conventionNonSignee', 'Convention non signée');
      a('FicheStage.conventionDeStageSignee', 'Convention de stage signée');
      a(
        'FicheStage.documentsDeStageSigneElectroniquement',
        'Documents de stage signés electroniquement',
      );
      a(
        'FicheStage.detailInfoSignatureConvention',
        'Voir les détails des signatures pour la convention',
      );
      a('FicheStage.parEleve', "par l'élève ou son responsable légal");
      a('FicheStage.parEntreprise', "par l'entreprise");
      a('FicheStage.parEtablissement', "par l'établissement");
      a('FicheStage.entrepriseAccueil', "Entreprise d'accueil");
      a('FicheStage.siegeSocial', 'Siège social');
      a('FicheStage.TelPortable', "Téléphone portable de l'entreprise");
      a('FicheStage.TelFixe', "Téléphone fixe de l'entreprise");
      a('FicheStage.Fax', "Fax de l'entreprise");
      a('FicheStage.responsableEntreprise', "Responsable de l'entreprise");
      a('FicheStage.maitreDeStage', 'Maître de stage');
      a('FicheStage.maitresDeStage', 'Maîtres de stage');
      a('FicheStage.MDS.Portable', 'Téléphone portable du maître de stage');
      a('FicheStage.MDS.TelFixe', 'Téléphone fixe du maître de stage');
      a('FicheStage.MDS.Fax', 'Fax du maître de stage');
      a('FicheStage.PresenceDansEntreprise', "Présence dans l'entreprise");
      a('FicheStage.stageHoraires', 'Horaires');
      a('FicheStage.totalHebdo', 'Total hebdomadaire');
      a('FicheStage.dureeDetails', 'Durée');
      a('FicheStage.referent', 'Référent');
      a('FicheStage.referents', 'Référents');
      a(
        'FicheStage.AjouterPiecesJointes',
        'Ajouter des pièces jointes (publiées aux élèves)',
      );
      a('FicheStage.documentsJoints', 'Documents joints');
      a('FicheStage.autreDocJoint', 'Autre');
      a('FicheStage.stageDates', 'Dates');
      a('FicheStage.msgAucunStage', 'Aucun stage');
      a(
        'FicheStage.PresenceDansLEtablissement',
        "Présence dans l'établissement",
      );
      a(
        'FicheStage.EleveAttenduEnCours',
        "L'élève est attendu en cours sur les demi-journées où il n'est pas en entreprise",
      );
      a(
        'FicheStage.ElevePrevuAuxRepas',
        "L'élève est prévu aux repas du midi et du soir à l'internat",
      );
      a(
        'FicheStage.ElevePrevuMidi',
        "L'élève est prévu au repas du midi à l'internat",
      );
      a(
        'FicheStage.ElevePrevuSoir',
        "L'élève est prévu au repas du soir à l'internat",
      );
      a('FicheStage.annexe.stage', 'Stage');
      a('FicheStage.annexe.sujet', 'Sujet');
      a('FicheStage.annexe.sujetDetaille', 'Sujet détaillé');
      a(
        'FicheStage.annexe.competencesEtActivites',
        "Compétences et activités travaillées par l'élève avant le stage",
      );
      a(
        'FicheStage.annexe.activitesDejaRealisees',
        'Activités déjà réalisées avant stage',
      );
      a('FicheStage.annexe.competencesMobilisees', 'Compétences mobilisées');
      a(
        'FicheStage.annexe.objectifsAssignes',
        'Objectifs assignés pendant le stage',
      );
      a(
        'FicheStage.annexe.activitesPrevuesAuCoursStage',
        'Activités prévues au cours du stage',
      );
      a('FicheStage.annexe.activitesPrevues', 'Activités prévues');
      a('FicheStage.annexe.moyensMobilises', 'Moyens mobilisés');
      a('FicheStage.annexe.competencesVisees', 'Compétences visées');
      a(
        'FicheStage.annexe.travauxAuxMineurs',
        'Travaux réglementés pour mineurs',
      );
      a(
        'FicheStage.annexe.modalitesDEncadrement',
        "Modalité d'encadrement et de suivi de l'élève",
      );
      a(
        'FicheStage.annexe.modalitesDeLaPeriodePro',
        "Modalités d'évaluation de la période de formation en milieu professionnel",
      );
      a('FicheStage.annexe.typeDEvaluation', "Type d'évaluation");
      a('FicheStage.annexe.modalitesDEvaluation', "Modalités d'évaluation");
      a('FicheStage.typeDEvaluation.formative', 'Formative');
      a('FicheStage.typeDEvaluation.certificative', 'Certificative');
      a(
        'FicheStage.listeSuivis.AucunSuivi',
        "Aucun suivi n'a été ajouté pour ce stage",
      );
      a(
        'FicheStage.listeSuivis.RetourListeSuivi',
        'Retourner sur la liste des suivis de stage',
      );
      a('FicheStage.listeSuivis.SuiviDuX', 'Suivi du %s');
      a(
        'FicheStage.listeSuivis.MenuCtxSupprimerSuivi',
        'Supprimer le suivi de stage',
      );
      a(
        'FicheStage.listeSuivis.MenuCtxPasPublierSuivi',
        'Ne pas publier le suivi de stage',
      );
      a(
        'FicheStage.listeSuivis.MenuCtxPublierSuivi',
        'Publier le suivi de stage',
      );
      a(
        'FicheStage.listeSuivis.MenuCtxModifierSuivi',
        'Modifier le suivi de stage',
      );
      a(
        'FicheStage.listeSuivis.etatPublie',
        'Publié sur les Espaces parents et élèves',
      );
      a(
        'FicheStage.listeSuivis.etatNonPublie',
        'Non publié sur les Espaces parents et élèves',
      );
      a('FicheStage.listeSuivis.piecesJointes', 'Pièces jointes');
      a(
        'FicheStage.listeSuivis.publierSuivi',
        'Publier sur les Espaces Parents et Élèves',
      );
      a('FicheStage.listeSuivis.Heure', 'Heure');
      a('FicheStage.listeSuivis.Lieu', 'Lieu');
      a(
        'FicheStage.listeSuivis.MsgConfirmSuppSuivi',
        'Confirmez-vous la suppression de ce suivi de stage ?',
      );
      a('FicheStage.fenetreRespAdmin.cbProfEquipePeda', 'Équipe pédagogique');
      a(
        'FicheStage.fenetreRespAdmin.cbPersConcernes',
        'Personnels concernés par la classe',
      );
      a('iCal.hint', "Exporter l'emploi du temps au format iCal");
      a('iCal.hint', "Exporter l'agenda au format iCal");
      a('iCal.fenetre.titre', 'Export au format iCal');
      a(
        'iCal.fenetre.sousTitre2',
        "2 modes de récupération de l'emploi du temps",
      );
      a('iCal.fenetre.sousTitre2', "2 modes de récupération de l'agenda");
      a(
        'iCal.fenetre.semainesPubliees',
        "L'export contient toujours toutes les semaines publiées",
      );
      a('iCal.fenetre.recupererFichier', "Récupérer l'emploi du temps actuel");
      a('iCal.fenetre.recupererFichier', "Récupérer l'agenda actuel");
      a(
        'iCal.fenetre.recupererSousTitreFichier',
        "L'emploi du temps est récupéré tel qu'il est et ne sera pas mis à jour automatiquement. Cliquez sur le lien ci-dessous :",
      );
      a(
        'iCal.fenetre.recupererSousTitreFichier',
        "L'agenda est récupéré tel qu'il est et ne sera pas mis à jour automatiquement. Cliquez sur le lien ci-dessous :",
      );
      a(
        'iCal.fenetre.synchroniser',
        'Synchroniser l\'emploi du temps avec le "gestionnaire d\'agenda"',
      );
      a(
        'iCal.fenetre.synchroniser',
        'Synchroniser l\'agenda avec le "gestionnaire d\'agenda"',
      );
      a(
        'iCal.fenetre.synchroniserSousTitre',
        "L'emploi du temps sera mis à jour en temps réél",
      );
      a(
        'iCal.fenetre.synchroniserSousTitre',
        "L'agenda sera mis à jour en temps réél",
      );
      a(
        'iCal.fenetre.copiezAdresseOuQRCode',
        "Copiez l'adresse ci dessous ou scannez le QR Code",
      );
      a('iCal.fenetre.copiezAdresse', "Copiez l'adresse ci dessous");
      a('iCal.fenetre.btnCopier', "Copier l'adresse");
      a('iCal.fenetre.btnCopierSucces', 'Adresse copiée');
      a('iCal.fenetre.btnCopierEchec', 'Une erreur est survenue');
      a(
        'iCal.fenetre.salles.Titre',
        'Export au format iCal des occupations de salles',
      );
      a(
        'iCal.fenetre.salles.Hint',
        "Exporter au format iCal l'occupation des salles",
      );
      a(
        'iCal.fenetre.salles.semainesPubliees',
        "L'export contient toujours les 2 prochaines semaines",
      );
      a(
        'iCal.fenetre.salles.PartagerSalles',
        'Partager le planning des salles',
      );
      a('iCal.choixLien', 'Données à récupérer');
      a('iCal.ChoixDonnees.Info', 'Choisissez les données à récupérer');
      a(
        'iCal.ChoixDonnees.InfoSuppl',
        'Si une synchronisation est paramétrée, la modification des données à récupérer sera prise en compte lors de la prochaine connexion au "gestionnaire d\'agenda"',
      );
      a(
        'iCal.ChoixDonnees.InfoSemaines',
        'toutes les semaines publiées seront prises en compte',
      );
      a('iCal.ChoixDonnees.edt', 'Votre emploi du temps');
      a('iCal.ChoixDonnees.agenda', "Les évènements de l'agenda");
      a('iCal.exportImpossible.titre', 'Export impossible');
      a(
        'iCal.exportImpossible.info',
        'Vous devez au préalable choisir, ci-dessus, les données à récupérer',
      );
      a('iCal.modes.titre', 'Il existe 2 modes de récupération');
      a('iCal.modes.ponctuelle.titre', 'Récupération ponctuelle');
      a(
        'iCal.modes.ponctuelle.info',
        'Les données récupérées ne seront pas mises à jour',
      );
      a('iCal.modes.ponctuelle.bouton', 'Exporter');
      a(
        'iCal.modes.ponctuelle.boutonAlt',
        'Exporter au format iCal les données choisies',
      );
      a(
        'iCal.modes.synchro.titre',
        'Synchronisation avec le "gestionnaire d\'agenda"',
      );
      a(
        'iCal.modes.synchro.info',
        'Les données seront mises à jour en temps réel',
      );
      a('iCal.modes.synchro.bouton', "Copier l'adresse");
      a('iCal.modes.synchro.boutonAlt', "Copier l'adresse du lien iCal");
      a('iCal.modes.synchro.qrCode', 'ou scannez ce QR Code');
      a('iCal.modes.synchro.qrCodeAlt', 'QR Code du lien iCal à flasher');
      a(
        'iCal.fenetre.titreLienPermanent',
        'Copiez l\'adresse ci-dessous dans votre "gestionnaire d\'agenda" pour le synchroniser avec PRONOTE (votre emploi du temps sera mis à jour en temps réel)',
      );
      a(
        'iCal.fenetre.titreLienPermanent',
        'Copiez l\'adresse ci-dessous dans votre "gestionnaire d\'agenda" pour le synchroniser avec PRONOTE (votre agenda sera mis à jour en temps réel)',
      );
      a('ficheScolaire.livretScolaire', 'Livret scolaire');
      a('ficheScolaire.titreColDiscipline', 'Discipline');
      a('ficheScolaire.titreColPeriode', 'Période');
      a('ficheScolaire.titreColRang', 'Rang');
      a('ficheScolaire.titreColMoyEleve', "Moyenne de l'élève");
      a('ficheScolaire.titreColAbbrMoyEleve', 'Moy Eleve');
      a('ficheScolaire.titreColMoyClasse', 'Moyenne de la classe');
      a('ficheScolaire.titreColAbbrMoyClasse', 'Moy Classe');
      a('ficheScolaire.titreColInf8', '<8');
      a('ficheScolaire.titreCol8A12', 'Entre 8 et 12');
      a('ficheScolaire.titreColSup12', '>=12');
      a('ficheScolaire.titreColCompetences', 'Évaluation');
      a('ficheScolaire.titreColAppreciations', 'Appréciations des professeurs');
      a('ficheScolaire.titreColAppreciationsAnn', 'Appréciation annuelle');
      a('ficheScolaire.appreciations', 'Appréciations');
      a(
        'ficheScolaire.messageServiceRattache',
        'Les appréciations doivent être saisies sur le service de la classe',
      );
      a(
        'ficheScolaire.HintColonneAnneePrecedente',
        "Conserve ses notes de l'année précédente",
      );
      a('ficheScolaire.TitreColonneAnneePrecedente', 'N-1');
      a(
        'ficheScolaire.HintCocheAnneePrecedente',
        "L'élève conserve ses notes de %s de l'année précédente",
      );
      a(
        'ficheScolaire.AvisDuChefDetablissement',
        "Avis du chef d'établissement",
      );
      a(
        'ficheScolaire.AvisEnVueDuBac',
        "Avis en vue de l'examen du baccalauréat",
      );
      a('ficheScolaire.Engagements', "Engagements de l'élève");
      a(
        'ficheScolaire.Investissement',
        "Avis de l'équipe pédagogique et du CPE sur l'investissement de l'élève",
      );
      a('ficheScolaire.AvisNonRempli', 'Avis non rempli');
      a(
        'ficheScolaire.messageClasseSansFiliere',
        'Le livret scolaire de cette filière ne comporte aucune compétence.',
      );
      a(
        'ficheScolaire.messageGroupeSansFiliere',
        "Aucune classe du groupe n'est affiliée à un livret scolaire officiel",
      );
      a('ficheScolaire.titreSaisieEvaluations', 'Saisie des évaluations');
      a('ficheScolaire.engagement.code', 'Code');
      a(
        'ficheScolaire.engagement.titre',
        "Engagements et responsabilités de l'élève au sein de l'établissement",
      );
      a('ficheScolaire.engagement.aucun', 'Aucun engagement saisi');
      a('ficheScolaire.engagement.commentaire', 'Observations éventuelles');
      a(
        'ficheScolaire.investissement.titre',
        "Avis de l'équipe pédagogique et du conseiller principal d'éducation sur l'investissement de l'élève et sa participation à la vie du lycée",
      );
      a(
        'ficheScolaire.investissement.aucun',
        "Aucun avis sur l'investissement de l'élève saisi",
      );
      a('ficheScolaire.Accessible.inf8', 'Inférieures à 8');
      a('ficheScolaire.Accessible.de8a12', 'Entre 8 et 12');
      a('ficheScolaire.Accessible.sup12', 'Supérieures à 12');
      a('ficheScolaire.Accessible.evaluation', 'Évaluation');
      a('ficheScolaire.Accessible.pasevalue', 'Non évalué');
      a(
        'ficheScolaire.Accessible.RepartitionDesNotesDansLaClasse',
        'Répartition des notes dans la classe',
      );
      a('ficheScolaire.Accessible.Competences', 'Compétences');
      a(
        'ficheScolaire.Signataire.AvisCE',
        "Auteur de l'avis du chef d'établissement",
      );
      a('ficheScolaire.Signataire.Engagement', 'Choix du CPE');
      a(
        'ficheScolaire.Signataire.Investissement',
        'Choix du professeur principal',
      );
      a(
        'ficheScolaire.Signataire.ParcoursDifferencie',
        "Choix de l'auteur du parcours différencié",
      );
      a('ficheScolaire.boutonGraphe', "Profil annuel de l'élève");
      a('ficheScolaire.titreGraphe', 'Profil annuel de %s');
      a(
        'ficheScolaire.pasDAffichageGraphe',
        "Pour afficher un profil significatif, l'élève doit avoir été noté dans au moins 3 matières",
      );
      a(
        'ficheScolaire.afficherResultatsEvals',
        'Afficher les résultats obtenus aux évaluations',
      );
      a('ficheScolaire.calculerAutoEval', 'Calculer les évaluations du livret');
      a(
        'ficheScolaire.msgAutoEval.titre',
        'Remplir automatiquement les niveaux de maîtrise des compétences du livret scolaire à partir des évaluations',
      );
      a(
        'ficheScolaire.msgAutoEval.texte',
        "Pour chaque compétence, le niveau de maîtrise sera calculé à partir des évaluations de l'année scolaire saisies sur les services mis en correspondance.",
      );
      a(
        'ficheScolaire.msgAutoEval.choix',
        "Remplacer l'évaluation des compétences renseignées",
      );
      a(
        'ficheScolaire.MFicheValidationCompetencesLSL',
        '{"titre":"Comment sont calculés les niveaux de compétences du livret ?","html":{"_T":23,"V":"<p><span style=\\\"font-family: arial, helvetica, sans-serif; font-size: 12px; background-color: #ffffff;\\\">Ce calcul prend en compte toutes les &eacute;valuations associ&eacute;es aux services mis en correspondance avec les mati&egrave;res du livret sauf celles qui ont un coefficient nul.</span></p><p><span style=\\\"font-family: arial, helvetica, sans-serif; font-size: 12px; background-color: #ffffff;\\\">L\'&eacute;chelle de valeurs utilis&eacute;e pour le calcul est d&eacute;finie dans <span style=\\\"color: #888888;\\\"><strong><em>Param&egrave;tres &gt; &Eacute;valuation &gt; Niveaux de ma&icirc;trise</em></strong></span>.</span>&nbsp;<em>(Illustration avec les couleurs par d&eacute;faut)&nbsp;</em></p><ol><li><span style=\\\"font-family: arial, helvetica, sans-serif; font-size: 12px;\\\">Le r&eacute;sultat obtenu &agrave; chaque &eacute;valuation prise en compte est transform&eacute; en points&nbsp;</span><br /><span style=\\\"font-family: arial, helvetica, sans-serif; font-size: 12px;\\\">avec les valeurs par d&eacute;faut&nbsp;&nbsp;<img style=\\\"font-family: arial, helvetica, sans-serif; font-size: 12px;\\\" src=\\\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAACxMAAAsTAQCanBgAAAD+SURBVChTY/wPBAxI4M+fPwzMzMxg9t+/fxlYWFjAbBhggtJgyS23tjC4LXVj4OvgA2MQGyQGkoMBsA0ggabDTQxNB5ugwqigxq6GocGuAWwzWMPW21sZfJb5QKUZGHYE7WCQFJBk0J+nDxVhYNgUuYnBV82XgQnk5t5jvVBh3KD/eD/YfwwgG3jbeP87TXUCMbGC7OXZYDUgAHYSXzsfw+dfn6FmYXcSDxsPw6eKTxAnmUiZQIVxA1MpU3BogW3YfGszg99yP6gUdgD3NIjjpewFDjpcACQHUgMGIBtAAOi0/5tvbv7vuMDxP3crNxiD2JtubgLLwQCJSYOBAQDa1bUAEGd1jwAAAABJRU5ErkJggg==\\\" alt=\\\"\\\" />&nbsp;= 50 points |&nbsp;<img style=\\\"font-family: arial, helvetica, sans-serif; font-size: 12px;\\\" src=\\\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAIAAADZF8uwAAAAdUlEQVQYlZXQsQmAQAwF0FvO0gPLOEfazGLlDkKu9uS7gRuYJbQ4UThRz0+KFI8kxG0FcWcXDQzxSl6JIZPNOeqWvhqarLqlv9Bk812kioYDMeQJMeRAPrRPyIe2ACn9WRcN34cXvSBlXMGQWqlWYkiakaOX7D6kKu7V4gTLAAAAAElFTkSuQmCC\\\" alt=\\\"\\\" /> = 40 points |&nbsp;<img style=\\\"font-family: arial, helvetica, sans-serif; font-size: 12px;\\\" src=\\\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAIAAADZF8uwAAAAZUlEQVQYlZXQMQ7AIAgFULuLh+JcXqp6m4aN1ZH9d7CmTa0JJQwML0B+gKPCPVqBMoQgBGVYnVDLOLZ3t/xAVj9EbysDKS+R8kCSlkiSB9Gvc1Ycj7siuMLcoQyJkAjlvmNC6zoBm69Vps8BQyUAAAAASUVORK5CYII=\\\" alt=\\\"\\\" /> = 25 points |&nbsp;<img style=\\\"font-family: arial, helvetica, sans-serif; font-size: 12px;\\\" src=\\\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAMCAIAAAA21aCOAAAAZ0lEQVQYlZXQMQ6AMAgFUOfu5Uz/WByqcDZCQ3TQtLFaUwkDwwuEv+1rtbUpRBwwIiNyIFRfXGW2lIauzDcXqk90doh058DMOdCdEc2cEf13q3dDZOmP1VyunEtxwHK2nB1om0b3XQdrUzqm5Ss4FwAAAABJRU5ErkJggg==\\\" alt=\\\"\\\" /> = 10 points<br />Quand les niveaux interm&eacute;diaires sont utilis&eacute;s&nbsp;<img style=\\\"font-family: arial, helvetica, sans-serif; font-size: 12px;\\\" src=\\\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAIAAADZF8uwAAAAcklEQVQYlZXQLQ6AMAwF4N0EzU7UO3EWRC2b6h1mYerNzVWDGD/JCDCaioovbfPM2lDmnKBOQBwtRyugpL5GIQ/j3FUd8nChpP4uSkPdjgT0hAS0I472CXG0f1DTOaj7frwpgiPMSUC89Lz0Aio7avRSG8YxRv/F+sIoAAAAAElFTkSuQmCC\\\" alt=\\\"\\\" />&nbsp;= 33 points et&nbsp;<img style=\\\"font-family: arial, helvetica, sans-serif; font-size: 12px;\\\" src=\\\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAIAAADZF8uwAAAAaElEQVQYlZXQwQ3AIAgFUDfoWV2Jrbz0ImMwQjk7h+7ye7CmTa0JJRw4vAD5DoZy91gVQuAADhBC0wmVhH17d0kP1PRD9K46kNASCQ3EcYk4WlD4da5aHjdFcIV5QAjZI3sI9R0TWtcJl3BA5JUq0ykAAAAASUVORK5CYII=\\\" alt=\\\"\\\" /> = 18 points.<br /><br /></span></li><li><span style=\\\"font-family: arial, helvetica, sans-serif; font-size: 12px;\\\">On obtient ainsi un nombre de points par mati&egrave;re&nbsp;pour chaque &eacute;l&egrave;ve.<br /><br /></span></li><li><span style=\\\"font-family: arial, helvetica, sans-serif; font-size: 12px;\\\">On divise ce nombre de points par le nombre d\'&eacute;valuations pour obtenir un niveau de comp&eacute;tence entre 1 et 4 :<br />- plus de 45 points :&nbsp; &nbsp; &nbsp; &nbsp; <strong>4</strong></span><br /><span style=\\\"font-family: arial, helvetica, sans-serif; font-size: 12px;\\\">- entre 33 et 45 &nbsp;points : <strong>3</strong></span><br /><span style=\\\"font-family: arial, helvetica, sans-serif; font-size: 12px;\\\">- entre 18 et&nbsp; 33 points : <strong>2</strong></span><br /><span style=\\\"font-family: arial, helvetica, sans-serif; font-size: 12px;\\\">- moins de 18 points :&nbsp; &nbsp; <strong>1</strong></span></li></ol>"},"width":565,"height":340,"type":4,"boutons":{"_T":18,"V":1024}}',
      );
      a('ficheScolaire.optionPDFGraphe', 'Avec le profil annuel (graphe)');
      a('ficheScolaire.pfmp.onglet', 'PFMP');
      a(
        'ficheScolaire.pfmp.titre',
        'Appréciations des professeurs référents sur la nature et le travail fourni pendant les PFMP',
      );
      a(
        'ficheScolaire.pfmp.libelleDuree',
        "Nombre de semaines de PFMP réalisé sur l'ensemble du cycle",
      );
      a(
        'ficheScolaire.pfmp.libelleEtranger',
        "PFMP effectué en partie à l'étranger",
      );
      a(
        'ficheScolaire.pfmp.exportAppreciationsReferents',
        'Exporter les appréciations de stage des référents',
      );
      a('ficheScolaire.pfmp.exportSynthese', 'Exporter la synthèse');
      a(
        'ficheScolaire.pfmp.copierAppreciationsReferents',
        'Copier les appréciations des professeurs référents',
      );
      a(
        'ficheScolaire.pfmp.confirmationCopierAppreciations',
        "Voulez-vous remplacer l'appréciation existante par la concaténation des appréciations des professeurs référents des stages de l'élève ?",
      );
      a('ficheScolaire.pfmp.professeur', 'Professeur référent');
      a('ficheScolaire.pfmp.appreciations', 'Appréciations des référents');
      a('ficheScolaire.pfmp.saisissezlaSyntheseCAP', 'Saisissez une synthèse');
      a(
        'ficheScolaire.pfmp.saisissezlaSynthese',
        'Saisissez la synthèse à exporter à la place des appréciations de stage',
      );
      a(
        'ficheScolaire.pfmp.legendeAppr',
        'Appréciation(s) exportée(s) vers LSL (< %d caractères)',
      );
      a('ficheScolaire.pfmp.redigeePar', 'Rédigée par');
      a(
        'ficheScolaire.pfmp.MFicheSynthesePFMP',
        '{"titre":"Comment renseigner la synthèse des PFMP pour LSL ?","html":{"_T":23,"V":"<p>La synth&egrave;se des appr&eacute;ciations de stage est obligatoire pour l\'export vers LSL.<br />Vous pouvez choisir entre :&nbsp;</p><p>1. <span style=\\\"color: #34495e;\\\"><strong><em>Exporter les appr&eacute;ciations de stage des professeurs r&eacute;f&eacute;rents</em></strong></span><br />Dans ce cas les diff&eacute;rentes appr&eacute;ciations seront export&eacute;es dans la limite de 1000 caract&egrave;res (limite impos&eacute;e par LSL). Les appr&eacute;ciations les plus r&eacute;centes seront export&eacute;es en premier.</p><p>2. <span style=\\\"color: #34495e;\\\"><em><strong>Exporter une synth&egrave;se personnalis&eacute;e</strong></em></span><br />Vous r&eacute;digez vous-m&ecirc;me la synth&egrave;se &agrave; exporter.<br />Gagnez du temps en copiant les appr&eacute;ciations des enseignants via le bouton <img src=\\\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAApUlEQVQ4Eb2U4Q3EIAiFmYuBmMdpWIZhuKjYU47SGpPjT2vKx3tFFPQg4AUrvITIYCJYCgISjxQm+In+OYIt++KdciGsxbBIAteEr/7w0Z7VG2DJ4Vu+mSNQZ4qZa9k5An2Dg27MoL17fgv2/nfh3mDr21/h5be3lBdSVQ0+2qplcvqilR375TWnFMonLCZVn8fzIt0M5gfj6Ej6Njjl/DLw8O36A7b+vtt5g+/AAAAAAElFTkSuQmCC\\\" /> puis personnaiser le texte &agrave; exporter.</p>"},"width":500,"height":235,"type":4,"boutons":{"_T":18,"V":1024}}',
      );
      a('ficheScolaire.ParcoursDifferencie', 'Parcours differencié');
      a('ficheScolaire.parcoursDifferencie.commentaire', 'Commentaire');
      a(
        'fenetreSelectionClasseGroupe.titre',
        'Sélectionner des classes et des groupes',
      );
      a(
        'fenetreSelectionClasseGroupe.titreClasses',
        'Sélectionner des classes',
      );
      a(
        'fenetreSelectionClasseGroupe.titreGroupes',
        'Sélectionner des groupes',
      );
      a(
        'fenetrePJ.filtre.uniquementPJUtilisees',
        'Uniquement les pièces jointes utilisées',
      );
      a(
        'fenetrePJ.filtre.uniquementLiensUtilisees',
        'Uniquement les sites internet utilisés',
      );
      a('fenetrePJ.filtre.memeMatiere', 'Pour les cours de la même matière');
      a(
        'fenetrePJ.filtre.memeClasseGpe',
        'Pour les cours de la même classe ou du même groupe',
      );
      a('fenetrePJ.filtre.today', "Aujourd'hui");
      a('fenetrePJ.filtre.15jours', 'depuis 15 jours');
      a('fenetrePJ.filtre.1mois', 'depuis 1 mois');
      a('fenetrePJ.filtre.3mois', 'depuis 3 mois');
      a('fenetrePJ.filtre.6mois', 'depuis 6 mois');
      a('fenetrePJ.filtre.12mois', "sur toute l'année");
      a('fenetrePJ.filtre.titreRecherchePJ', 'Rechercher parmi les documents');
      a(
        'fenetrePJ.filtre.titreRechercheSites',
        'Rechercher parmi les sites Internet',
      );
      a('fenetrePJ.le', 'le %s');
      a(
        'FenetreCorrespondance.titre',
        "Ajouter une correspondance en tant qu'évènement du dossier",
      );
      a('FenetreCorrespondance.Envoi', 'Envoi');
      a('FenetreCorrespondance.Reponse', 'Réception');
      a('FenetreCorrespondance.TypeContact', 'Type du contact');
      a('FenetreCorrespondance.Date', 'Date');
      a('FenetreCorrespondance.Auteur', 'Auteur');
      a('FenetreCorrespondance.SelectionnerAuteur', "Sélectionner l'auteur");
      a('FenetreCorrespondance.Interlocuteur', 'Interlocuteur');
      a(
        'FenetreCorrespondance.SaisirCommentaires',
        "Saisissez un complément d'information",
      );
      a(
        'FenetreCorrespondance.SelectionnerInterlocuteur',
        'Sélectionner un interlocuteur',
      );
      a('fenetreMotifs.titre', 'Sélectionner un motif');
      a('fenetreMotifs.motif', 'Motif');
      a('fenetreMotifs.genre', "Type d'incident");
      a('fenetreMotifs.SelectionnerGenre', "Sélectionner un type d'incident");
      a('fenetreActions.titre', 'Sélection des actions');
      a('fenetreActions.libelle', 'Libellé');
      a(
        'fenetrePunition.titre',
        "Ajouter une punition en tant qu'événement du dossier",
      );
      a(
        'fenetrePunition.nonAffectees',
        'Afficher uniquement les punitions qui ne sont affectées à aucun dossier',
      );
      a('fenetrePunition.date', 'Date');
      a('fenetrePunition.punition', 'Punition');
      a('fenetrePunition.motif', 'Motif');
      a('fenetrePunition.demandeur', 'Demandeur');
      a('fenetrePunition.programmeeLe', 'Programmée le');
      a('fenetrePunition.realiseeLe', 'Réalisée le');
      a(
        'fenetrePunition.Accessible_comboType',
        'Liste déroulante : Choisissez un type:',
      );
      a(
        'fenetrePunition.Accessible_comboAccomp',
        'Liste déroulante : Choisissez un accompagnateur:',
      );
      a(
        'fenetrePunition.Accessible_comboDuree',
        'Liste déroulante : Choisissez une durée:',
      );
      a(
        'fenetrePunition.Accessible_comboDate',
        'Liste déroulante : Choisissez une date de rendu attendue:',
      );
      a('fenetreSaisiePunition.type', 'Type');
      a('fenetreSaisiePunition.accompagnateur', 'Accompagnateur');
      a(
        'fenetreSaisiePunition.choisirAccompagnateur',
        'Choisir un accompagnateur',
      );
      a('fenetreSaisiePunition.choisirMotif', 'Choisir un motif');
      a('fenetreSaisiePunition.motif', 'Motif');
      a('fenetreSaisiePunition.duree', 'Durée');
      a('fenetreSaisiePunition.circonstances', 'Circonstances');
      a('fenetreSaisiePunition.details', 'Détails');
      a('fenetreSaisiePunition.taf', 'Travail à faire');
      a('fenetreSaisiePunition.aRendre', 'A rendre le');
      a('fenetreSaisiePunition.aRendreMin', 'à rendre le');
      a('fenetreSaisiePunition.creerPunition', 'Ajouter une punition');
      a('fenetreSaisiePunition.modifierPunition', 'Modifier une punition');
      a('fenetreSaisiePunition.creerExclusion', 'Créer une exclusion');
      a('fenetreSaisiePunition.modifierExclusion', 'Modifier une exclusion');
      a('fenetreSaisiePunition.suiteDonnee', 'Suite donnée');
      a('fenetreSaisiePunition.aProgrammer', 'A programmer');
      a(
        'fenetreSaisiePunition.prevenirResponsables',
        'Prévenir les responsables',
      );
      a(
        'fenetreSaisiePunition.publierElementPunitionDossier',
        "Publier le dossier lié dans les dossiers de la vie scolaire sur l'Espace Parents",
      );
      a(
        'fenetreSaisiePunition.publierPunition',
        "Publier la punition dans le carnet de correspondance sur l'Espace Parents",
      );
      a(
        'fenetreSaisiePunition.DatePasUnJoursOuvre',
        "Le %s n'est pas un jour ouvré",
      );
      a('dispenses.presenceObligatoire', 'Présence obligatoire');
      a('dispenses.saisieDesDispenses', 'Saisie des dispenses de');
      a('dispenses.par', 'par');
      a('dispenses.journee', 'journée');
      a('dispenses.matinee', 'matinée');
      a('dispenses.aprem', 'après-midi');
      a('dispenses.menu.addDocument', 'Ajouter une nouvelle pièce jointe');
      a('dispenses.menu.consulter', 'Consulter');
      a('dispenses.menu.supprimer', 'Supprimer');
      a(
        'dispenses.confirmerSuppression',
        'Confirmez-vous la suppression des dispenses sélectionnées ?',
      );
      a('dispenses.suppressionDispense', 'suppression de la dispense de %s %s');
      a('dispenses.piecesjointes', 'Pièces jointes');
      a('dispenses.pj', 'PJ');
      a(
        'dispenses.publicationPJFeuilleDAppel',
        "Publication pièces jointes sur la feuille d'appel",
      );
      a('dispenses.consult1Doc', 'Consulter la pièce jointe');
      a('dispenses.consultLesDocs', 'Consulter les pièces jointes');
      a(
        'BulletinEtReleve.LegendeNonImprimable',
        'Le service ne sera pas imprimé',
      );
      a(
        'BulletinEtReleve.TitreFenetreCalculMoyenne',
        'Méthode de calcul de la moyenne',
      );
      a(
        'BulletinEtReleve.FenetreCalculMoyenneNetteAvecMatiere',
        'Calcul de la moyenne nette de %s en %s :',
      );
      a(
        'BulletinEtReleve.FenetreCalculMoyenneBruteAvecMatiere',
        'Calcul de la moyenne brute de %s en %s :',
      );
      a(
        'BulletinEtReleve.FenetreCalculMoyenneNette',
        'Calcul de la moyenne nette de %s :',
      );
      a(
        'BulletinEtReleve.FenetreCalculMoyenneBrute',
        'Calcul de la moyenne brute de %s :',
      );
      a('BulletinEtReleve.Matieres', 'Matières');
      a('BulletinEtReleve.Moyennes', 'Moyennes');
      a('BulletinEtReleve.Eleve', 'Élève');
      a('BulletinEtReleve.Classe', 'Classe');
      a('BulletinEtReleve.ClasseAbr', 'Cl.');
      a('BulletinEtReleve.Mediane', 'Médiane');
      a('BulletinEtReleve.Moy', 'Moy.');
      a(
        'BulletinEtReleve.hintBtnAfficherJaugeChronologique',
        'Afficher la barrette chronologique',
      );
      a(
        'BulletinEtReleve.hintBtnAfficherJaugeParNiveau',
        'Afficher la barrette par niveau',
      );
      a(
        'BulletinEtReleve.MFichePostionnement',
        '{"titre":"Comment fonctionne l\'attribution automatique d\'un positionnement ?","html":{"_T":23,"V":"<p><span style=\\\"font-family: arial, helvetica, sans-serif; font-size: 12px; background-color: #ffffff;\\\">Il existe 4 modes de calcul qui permettent de d&eacute;finir les &eacute;valuations &agrave; prendre en compte (dans tous les cas les &eacute;valuations de coefficient nul sont ignor&eacute;es) :</span></p><ul><li><span style=\\\"font-family: arial, helvetica, sans-serif; font-size: 12px; background-color: #ffffff;\\\">Mode 1 : toutes les &eacute;valuations affich&eacute;es&nbsp;</span></li><li><span style=\\\"font-family: arial, helvetica, sans-serif; font-size: 12px; background-color: #ffffff;\\\">Mode 2 : les 5 derni&egrave;res &eacute;valuations, lorsque des &eacute;valuations ont lieu &agrave; la m&ecirc;me date, on retient celles auxquelles l\'&eacute;l&egrave;ve a eu les meilleurs r&eacute;sultats</span></li><li><span style=\\\"font-family: arial, helvetica, sans-serif; font-size: 12px; background-color: #ffffff;\\\">Mode 3 : les 5 &eacute;valuations offrant le meilleur r&eacute;sultat</span></li><li><span style=\\\"font-family: arial, helvetica, sans-serif; font-size: 12px; background-color: #ffffff;\\\">Mode 4 : toutes les &eacute;valuations coefficient&eacute;es progressivement (coeff 1 &agrave; la plus ancienne, puis 2, puis 3 ...)</span></li></ul><p><span style=\\\"font-family: arial, helvetica, sans-serif; font-size: 12px; background-color: #ffffff;\\\">L\'&eacute;chelle de valeurs utilis&eacute;e pour le calcul est d&eacute;finie dans <span style=\\\"color: #888888;\\\"><strong><em>Param&egrave;tres &gt; &Eacute;valuation &gt; Niveaux de ma&icirc;trise</em></strong></span>.</span>&nbsp;<em><span>(Illustration avec les couleurs par d&eacute;faut)&nbsp;</span></em></p><ol><li><span style=\\\"font-family: arial, helvetica, sans-serif; font-size: 12px;\\\">Le r&eacute;sultat obtenu &agrave; chaque &eacute;valuation prise en compte est transform&eacute; en points&nbsp;</span><br /><span style=\\\"font-family: arial, helvetica, sans-serif; font-size: 12px;\\\">avec les valeurs par d&eacute;faut&nbsp;&nbsp;<img style=\\\"font-family: arial, helvetica, sans-serif; font-size: 12px;\\\" src=\\\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAACxMAAAsTAQCanBgAAAD+SURBVChTY/wPBAxI4M+fPwzMzMxg9t+/fxlYWFjAbBhggtJgyS23tjC4LXVj4OvgA2MQGyQGkoMBsA0ggabDTQxNB5ugwqigxq6GocGuAWwzWMPW21sZfJb5QKUZGHYE7WCQFJBk0J+nDxVhYNgUuYnBV82XgQnk5t5jvVBh3KD/eD/YfwwgG3jbeP87TXUCMbGC7OXZYDUgAHYSXzsfw+dfn6FmYXcSDxsPw6eKTxAnmUiZQIVxA1MpU3BogW3YfGszg99yP6gUdgD3NIjjpewFDjpcACQHUgMGIBtAAOi0/5tvbv7vuMDxP3crNxiD2JtubgLLwQCJSYOBAQDa1bUAEGd1jwAAAABJRU5ErkJggg==\\\" alt=\\\"\\\" />&nbsp;= 50 points |&nbsp;<img style=\\\"font-family: arial, helvetica, sans-serif; font-size: 12px;\\\" src=\\\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAIAAADZF8uwAAAAdUlEQVQYlZXQsQmAQAwF0FvO0gPLOEfazGLlDkKu9uS7gRuYJbQ4UThRz0+KFI8kxG0FcWcXDQzxSl6JIZPNOeqWvhqarLqlv9Bk812kioYDMeQJMeRAPrRPyIe2ACn9WRcN34cXvSBlXMGQWqlWYkiakaOX7D6kKu7V4gTLAAAAAElFTkSuQmCC\\\" alt=\\\"\\\" /> = 40 points |&nbsp;<img style=\\\"font-family: arial, helvetica, sans-serif; font-size: 12px;\\\" src=\\\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAIAAADZF8uwAAAAZUlEQVQYlZXQMQ7AIAgFULuLh+JcXqp6m4aN1ZH9d7CmTa0JJQwML0B+gKPCPVqBMoQgBGVYnVDLOLZ3t/xAVj9EbysDKS+R8kCSlkiSB9Gvc1Ycj7siuMLcoQyJkAjlvmNC6zoBm69Vps8BQyUAAAAASUVORK5CYII=\\\" alt=\\\"\\\" /> = 25 points |&nbsp;<img style=\\\"font-family: arial, helvetica, sans-serif; font-size: 12px;\\\" src=\\\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAMCAIAAAA21aCOAAAAZ0lEQVQYlZXQMQ6AMAgFUOfu5Uz/WByqcDZCQ3TQtLFaUwkDwwuEv+1rtbUpRBwwIiNyIFRfXGW2lIauzDcXqk90doh058DMOdCdEc2cEf13q3dDZOmP1VyunEtxwHK2nB1om0b3XQdrUzqm5Ss4FwAAAABJRU5ErkJggg==\\\" alt=\\\"\\\" /> = 10 points<br />Quand les niveaux interm&eacute;diaires <span>sont utilis&eacute;s&nbsp;</span><img style=\\\"font-family: arial, helvetica, sans-serif; font-size: 12px;\\\" src=\\\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAIAAADZF8uwAAAAcklEQVQYlZXQLQ6AMAwF4N0EzU7UO3EWRC2b6h1mYerNzVWDGD/JCDCaioovbfPM2lDmnKBOQBwtRyugpL5GIQ/j3FUd8nChpP4uSkPdjgT0hAS0I472CXG0f1DTOaj7frwpgiPMSUC89Lz0Aio7avRSG8YxRv/F+sIoAAAAAElFTkSuQmCC\\\" alt=\\\"\\\" />&nbsp;= 33 points et&nbsp;<img style=\\\"font-family: arial, helvetica, sans-serif; font-size: 12px;\\\" src=\\\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAIAAADZF8uwAAAAaElEQVQYlZXQwQ3AIAgFUDfoWV2Jrbz0ImMwQjk7h+7ye7CmTa0JJRw4vAD5DoZy91gVQuAADhBC0wmVhH17d0kP1PRD9K46kNASCQ3EcYk4WlD4da5aHjdFcIV5QAjZI3sI9R0TWtcJl3BA5JUq0ykAAAAASUVORK5CYII=\\\" alt=\\\"\\\" />&nbsp;= 18 points.<br />Dans le cas du mode 4, le nombre de points de chaque &eacute;valuation est multipli&eacute; par son coefficient.<br /><br /></span></li><li><span style=\\\"font-family: arial, helvetica, sans-serif; font-size: 12px;\\\">On obtient ainsi un nombre de points par mati&egrave;re&nbsp;pour chaque &eacute;l&egrave;ve.<br /><br /></span></li><li><span style=\\\"font-family: arial, helvetica, sans-serif; font-size: 12px;\\\">On divise ce nombre de points par le nombre d\'&eacute;valuations pour obtenir une valeur&nbsp;sur l\'&eacute;chelle de 1 &agrave; 4 :<br />- plus de 45 points : <img style=\\\"font-family: arial, helvetica, sans-serif; font-size: 12px;\\\" src=\\\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAIAAAC0tAIdAAAAq0lEQVQokZWSQQrEIAxFXeUKBb1YunellxhwOXgTVwVPoBexx7CIs6hMrdrONGST8PiE/0PykyL14IJDg0wzUMA0Q4MuuAG9pU1YQV6kb2FFTPFE84UP0b35wg/ar74ncs716Fdf6NnMPdrQaLDQ03vqVRuaalro4Q3NHhQMtL/QpTYabC4+DO7vdsH99GSPqYhJK2/8llae0okpPsiy/hOqKSigml7+yZ/1AQLxfTxrRpW2AAAAAElFTkSuQmCCAA==\\\" alt=\\\"\\\" /></span><br /><span style=\\\"font-family: arial, helvetica, sans-serif; font-size: 12px;\\\">- entre&nbsp;33 et 45 &nbsp;points :&nbsp;<img style=\\\"font-family: arial, helvetica, sans-serif; font-size: 12px;\\\" src=\\\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAIAAAC0tAIdAAAAqklEQVQokWP4TwpgQOZcfnet9WJv5IFkz12hkQeSWy/2Xn53DYvqP//+TLo203VHICaadG3m739/UFT3XZmKVSkE9V2ZilB95f11ZDm4vciCV95fh6puu9iHrBQru/ViL1R12L5ErA5AVh2xPxmqGqs6NHHPXaFkmd16sZcEd19+d41gmECiCRrek6/NwhPek6/NQomd3yTFJXI6idif7LkrNGI/7nRCJAAAVLzZuXva1iAAAAAASUVORK5CYIIA\\\" alt=\\\"\\\" /></span><br /><span style=\\\"font-family: arial, helvetica, sans-serif; font-size: 12px;\\\">- entre 18 et&nbsp; 33 points :&nbsp;<img style=\\\"font-family: arial, helvetica, sans-serif; font-size: 12px;\\\" src=\\\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAIAAAC0tAIdAAAAuElEQVQokZWSQQ6DIBBF7corNMEzdU/3rvRmHkP3JSkHIHIAEyCQCNEuAB2UNnUyCxjeDMN8ivWKFXDjVK8ZlrQSpJS00gw71efoxRreiNft7IY36zIntBnrLBoSxnqnnRrg2SMaDDo1BNqwJ0Tt1HmHCZrhQMv3fYvaqYOZ21pSFOhsr/6SPULKTO08Cmtrhn+jSd9O9eeBHMbiZYrz5u32SuhRoPag5XxBy/SfIEFKSdH3f/KffQBjP/wOoAXwyQAAAABJRU5ErkJgggA=\\\" alt=\\\"\\\" /></span><br /><span style=\\\"font-family: arial, helvetica, sans-serif; font-size: 12px;\\\">- moins de 18&nbsp;points : <img src=\\\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAIAAAC0tAIdAAAAl0lEQVQokZWSSw7FIAhFO+6IJTTBfdGxI10krkkhxk5MrJ++vhIn4OGGXNjKl9juSWYWomRMBEjGCFFmXtGq6lzc9/mpc0Wko9XaJVobrG10DmH4LqUMlRxCpeU8B3SmhajS6TgG1ZlOiJWeB10UARbaT3TTFqJXus2dmd89Yb757f0vv73vdynyYZfdnSBGgIT4fCf/xQXkY7GV9RlSKQAAAABJRU5ErkJgggA=\\\" alt=\\\"\\\" /></span></li></ol>"},"width":630,"height":385,"type":4,"boutons":{"_T":18,"V":1024}}',
      );
      a(
        'BulletinEtReleve.MFicheCalculNoteAutomatique',
        '{"titre":"Comment fonctionne l\'attribution automatique d\'une note","html":{"_T":23,"V":"<p><span style=\\\"font-family: arial,helvetica,sans-serif; font-size: 12px;\\\">L\'attribution automatique d\'une note &agrave; chacun des &eacute;l&egrave;ves se base sur l\'&eacute;chelle de valeurs d&eacute;finie dans Param&egrave;tres &gt; &Eacute;valuations &gt; Niveaux de ma&icirc;trise.</span></p><p><span style=\\\"font-family: arial,helvetica,sans-serif; font-size: 12px;\\\">1. Le r&eacute;sultat obtenu &agrave; chaque &eacute;valuation est transform&eacute; en points <em>(exemple avec les couleurs et valeurs par d&eacute;faut) :</em></span></p><ul><li><span style=\\\"font-family: arial,helvetica,sans-serif; font-size: 12px;\\\"><img src=\\\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAACxMAAAsTAQCanBgAAAD+SURBVChTY/wPBAxI4M+fPwzMzMxg9t+/fxlYWFjAbBhggtJgyS23tjC4LXVj4OvgA2MQGyQGkoMBsA0ggabDTQxNB5ugwqigxq6GocGuAWwzWMPW21sZfJb5QKUZGHYE7WCQFJBk0J+nDxVhYNgUuYnBV82XgQnk5t5jvVBh3KD/eD/YfwwgG3jbeP87TXUCMbGC7OXZYDUgAHYSXzsfw+dfn6FmYXcSDxsPw6eKTxAnmUiZQIVxA1MpU3BogW3YfGszg99yP6gUdgD3NIjjpewFDjpcACQHUgMGIBtAAOi0/5tvbv7vuMDxP3crNxiD2JtubgLLwQCJSYOBAQDa1bUAEGd1jwAAAABJRU5ErkJggg==\\\" alt=\\\"\\\" /> : 50 points</span></li><li><span style=\\\"font-family: arial,helvetica,sans-serif; font-size: 12px;\\\"><img src=\\\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAIAAADZF8uwAAAAdUlEQVQYlZXQsQmAQAwF0FvO0gPLOEfazGLlDkKu9uS7gRuYJbQ4UThRz0+KFI8kxG0FcWcXDQzxSl6JIZPNOeqWvhqarLqlv9Bk812kioYDMeQJMeRAPrRPyIe2ACn9WRcN34cXvSBlXMGQWqlWYkiakaOX7D6kKu7V4gTLAAAAAElFTkSuQmCC\\\" alt=\\\"\\\" /> : 40 points</span></li><li><span style=\\\"font-family: arial,helvetica,sans-serif; font-size: 12px;\\\"><img src=\\\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAIAAADZF8uwAAAAZUlEQVQYlZXQMQ7AIAgFULuLh+JcXqp6m4aN1ZH9d7CmTa0JJQwML0B+gKPCPVqBMoQgBGVYnVDLOLZ3t/xAVj9EbysDKS+R8kCSlkiSB9Gvc1Ycj7siuMLcoQyJkAjlvmNC6zoBm69Vps8BQyUAAAAASUVORK5CYII=\\\" alt=\\\"\\\" /> : 25 points</span></li><li><span style=\\\"font-family: arial,helvetica,sans-serif; font-size: 12px;\\\"><img src=\\\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAMCAIAAAA21aCOAAAAZ0lEQVQYlZXQMQ6AMAgFUOfu5Uz/WByqcDZCQ3TQtLFaUwkDwwuEv+1rtbUpRBwwIiNyIFRfXGW2lIauzDcXqk90doh058DMOdCdEc2cEf13q3dDZOmP1VyunEtxwHK2nB1om0b3XQdrUzqm5Ss4FwAAAABJRU5ErkJggg==\\\" alt=\\\"\\\" /> : 10 points</span></li></ul><p style=\\\"padding-left: 30px;\\\"><span style=\\\"font-family: arial,helvetica,sans-serif; font-size: 12px;\\\">Quand ils sont utilis&eacute;s les niveaux interm&eacute;diaires comptent pour&nbsp;33 (<img src=\\\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAIAAADZF8uwAAAAcklEQVQYlZXQLQ6AMAwF4N0EzU7UO3EWRC2b6h1mYerNzVWDGD/JCDCaioovbfPM2lDmnKBOQBwtRyugpL5GIQ/j3FUd8nChpP4uSkPdjgT0hAS0I472CXG0f1DTOaj7frwpgiPMSUC89Lz0Aio7avRSG8YxRv/F+sIoAAAAAElFTkSuQmCC\\\" alt=\\\"\\\" />) et&nbsp;18 (<img src=\\\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAIAAADZF8uwAAAAaElEQVQYlZXQwQ3AIAgFUDfoWV2Jrbz0ImMwQjk7h+7ye7CmTa0JJRw4vAD5DoZy91gVQuAADhBC0wmVhH17d0kP1PRD9K46kNASCQ3EcYk4WlD4da5aHjdFcIV5QAjZI3sI9R0TWtcJl3BA5JUq0ykAAAAASUVORK5CYII=\\\" alt=\\\"\\\" />) points.</span></p><p><span style=\\\"font-family: arial,helvetica,sans-serif; font-size: 12px;\\\">2. On obtient ainsi un nombre de points par mati&egrave;re&nbsp;pour chaque &eacute;l&egrave;ve.</span></p><p><span style=\\\"font-family: arial,helvetica,sans-serif; font-size: 12px;\\\">3.&nbsp;Ce nombre de points est ramen&eacute; sur le bar&egrave;me de notation de la classe et arrondi au point le plus proche.</span></p><p><em><span style=\\\"font-family: arial,helvetica,sans-serif; font-size: 12px;\\\">Exemple :<br />Pour un total de 135/250 points (5 &eacute;valuations) et un bar&egrave;me de notation sur 20, l\'&eacute;l&egrave;ve obtiendra la note de 11/20&nbsp;<br />(135*20)/250 = 10,8 arrondi au point pr&egrave;s, soit 11</span></em></p>"},"width":565,"height":315,"type":4,"boutons":{"_T":18,"V":1024}}',
      );
      a(
        'BulletinEtReleve.MFichePostionnementCalculeNoteLSU',
        '{"titre":"Comment est calculée la note pour LSU ?","html":{"_T":23,"V":"<p><span style=\\\"font-size: 11px;\\\">La note pour LSU est calcul&eacute;e &agrave; partir des points attribu&eacute;s &agrave; chaque&nbsp;niveaux de ma&icirc;trise&nbsp;(d&eacute;finis dans&nbsp;\\\"Param&egrave;tres &gt; &Eacute;valuations &gt; Niveaux de ma&icirc;trise\\\").</span></p><p><span style=\\\"font-size: 11px;\\\">1. On fait la somme des points&nbsp;de tous&nbsp;les niveaux de maitrise obtenus aux &eacute;valuations</span></p><p><span style=\\\"font-size: 11px;\\\">2. On calcule la note LSU en&nbsp;ramenant ce total de points au&nbsp;bar&egrave;me de notation de la classe. <br /></span></p><p><span style=\\\"font-size: 11px;\\\"><em>Exemple avec les couleurs et valeurs par d&eacute;faut :</em></span></p><ul><li><span style=\\\"font-size: 11px;\\\"><em><img src=\\\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAIAAADZF8uwAAAAeUlEQVQYlZWQuw2AMAxE3ccZ6vaKUJp4Ds+QUMMcYZlQgPhYfE8uLOvpzjpqH0TbVmqBgoVZGIpSi4W6saNIZsIQdqif+uV6iohEkXLNKwTFBhkzKFbIi79z8uIvIOPEwn/ics3vj7fWwhBeKjiW6ZJzyUGxeFjoQTPuSxGLzc5ImAAAAABJRU5ErkJggg==\\\" alt=\\\"\\\" />&nbsp;+ : 50 points</em></span></li><li><span style=\\\"font-size: 11px;\\\"><em><img src=\\\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAIAAADZF8uwAAAAdUlEQVQYlZXQsQmAQAwF0FvO0gPLOEfazGLlDkKu9uS7gRuYJbQ4UThRz0+KFI8kxG0FcWcXDQzxSl6JIZPNOeqWvhqarLqlv9Bk812kioYDMeQJMeRAPrRPyIe2ACn9WRcN34cXvSBlXMGQWqlWYkiakaOX7D6kKu7V4gTLAAAAAElFTkSuQmCC\\\" alt=\\\"\\\" />&nbsp;: 40 points</em></span></li><li><span style=\\\"font-size: 11px;\\\"><em><img src=\\\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAIAAADZF8uwAAAAZUlEQVQYlZXQMQ7AIAgFULuLh+JcXqp6m4aN1ZH9d7CmTa0JJQwML0B+gKPCPVqBMoQgBGVYnVDLOLZ3t/xAVj9EbysDKS+R8kCSlkiSB9Gvc1Ycj7siuMLcoQyJkAjlvmNC6zoBm69Vps8BQyUAAAAASUVORK5CYII=\\\" alt=\\\"\\\" />&nbsp;: 25 points</em></span></li><li><span style=\\\"font-size: 11px;\\\"><em><img src=\\\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAMCAIAAAA21aCOAAAAZ0lEQVQYlZXQMQ6AMAgFUOfu5Uz/WByqcDZCQ3TQtLFaUwkDwwuEv+1rtbUpRBwwIiNyIFRfXGW2lIauzDcXqk90doh058DMOdCdEc2cEf13q3dDZOmP1VyunEtxwHK2nB1om0b3XQdrUzqm5Ss4FwAAAABJRU5ErkJggg==\\\" alt=\\\"\\\" />&nbsp;: 10 points</em></span></li></ul><p><span style=\\\"font-size: 11px;\\\"><em>Avec les niveaux de maitrise suivants&nbsp;:&nbsp;<img src=\\\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAIAAADZF8uwAAAAdUlEQVQYlZXQsQmAQAwF0FvO0gPLOEfazGLlDkKu9uS7gRuYJbQ4UThRz0+KFI8kxG0FcWcXDQzxSl6JIZPNOeqWvhqarLqlv9Bk812kioYDMeQJMeRAPrRPyIe2ACn9WRcN34cXvSBlXMGQWqlWYkiakaOX7D6kKu7V4gTLAAAAAElFTkSuQmCC\\\" alt=\\\"\\\" />&nbsp;<img src=\\\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAIAAADZF8uwAAAAdUlEQVQYlZXQsQmAQAwF0FvO0gPLOEfazGLlDkKu9uS7gRuYJbQ4UThRz0+KFI8kxG0FcWcXDQzxSl6JIZPNOeqWvhqarLqlv9Bk812kioYDMeQJMeRAPrRPyIe2ACn9WRcN34cXvSBlXMGQWqlWYkiakaOX7D6kKu7V4gTLAAAAAElFTkSuQmCC\\\" alt=\\\"\\\" />&nbsp;<img src=\\\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAMCAIAAAA21aCOAAAAZ0lEQVQYlZXQMQ6AMAgFUOfu5Uz/WByqcDZCQ3TQtLFaUwkDwwuEv+1rtbUpRBwwIiNyIFRfXGW2lIauzDcXqk90doh058DMOdCdEc2cEf13q3dDZOmP1VyunEtxwHK2nB1om0b3XQdrUzqm5Ss4FwAAAABJRU5ErkJggg==\\\" alt=\\\"\\\" />&nbsp;un &eacute;l&egrave;ve obtiendra la note de 12/20&nbsp;</em></span><em><span style=\\\"font-size: 11px;\\\">&nbsp;car il a obtenu&nbsp;90 points sur les 150 possibles.</span><br /></em></p>"},"width":545,"height":220,"type":4,"boutons":{"_T":18,"V":1024}}',
      );
      a('BulletinEtReleve.Appreciations', 'Appréciations');
      a('BulletinEtReleve.HAbs', 'H.Abs.');
      a('BulletinEtReleve.HeuresAbsences', "Heures d'absences");
      a('BulletinEtReleve.VolH', 'Vol. H.');
      a('BulletinEtReleve.HintVolH', 'Volumes Horaires');
      a('BulletinEtReleve.HeuresCoursManquees', 'H. Abs.');
      a('BulletinEtReleve.HintHeuresCoursManquees', 'Heures de cours manquées');
      a('BulletinEtReleve.Coeff', 'Coeff.');
      a('BulletinEtReleve.HintCoeff', 'Coefficients');
      a('BulletinEtReleve.ECTS', 'ECTS');
      a('BulletinEtReleve.NbrNotes', 'Nbr. Notes');
      a('BulletinEtReleve.HintNbrNotes', 'Nombre de notes');
      a('BulletinEtReleve.Rang', 'Rang');
      a('BulletinEtReleve.HintRang', "Rang de l'élève");
      a('BulletinEtReleve.Progres', 'En progrès');
      a('BulletinEtReleve.Regulier', 'Régulier');
      a('BulletinEtReleve.Regression', 'En régression');
      a('BulletinEtReleve.arialabel.Progres', 'Évolution en progrès');
      a('BulletinEtReleve.arialabel.Regulier', 'Évolution régulier');
      a('BulletinEtReleve.arialabel.Regression', 'Évolution en régression');
      a('BulletinEtReleve.Evol', 'Evol.');
      a('BulletinEtReleve.HintEvol', 'Évolution');
      a('BulletinEtReleve.MoyAnnee', 'Moy. année');
      a('BulletinEtReleve.HintMoyAnnee', "Moyenne annuelle de l'élève");
      a('BulletinEtReleve.Pts', 'Pts');
      a('BulletinEtReleve.PtsHint', "Nombre de points obtenus par l'élève");
      a('BulletinEtReleve.MoyGen', 'Moyenne générale');
      a('BulletinEtReleve.MoyGenEleve', 'Moyenne générale élève');
      a('BulletinEtReleve.MoyGenClasse', 'Moyenne générale classe');
      a('BulletinEtReleve.MoyGenMediane', 'Médiane');
      a('BulletinEtReleve.MoyBasse', 'Moyenne la plus basse');
      a('BulletinEtReleve.MoyHaute', 'Moyenne la plus haute');
      a('BulletinEtReleve.DetailsMatiere', 'Details de la matière');
      a(
        'BulletinEtReleve.DetailsMoyenneGenerale',
        'Details de la moyenne générale',
      );
      a('BulletinEtReleve.DetailsRegroupement', 'Détails du regroupement');
      a('BulletinEtReleve.MoyClasse', 'Moyenne : %s');
      a('BulletinEtReleve.MoyLaPlusHaute', 'Moyenne la plus haute : %s');
      a('BulletinEtReleve.MoyLaPlusBasse', 'Moyenne la plus basse : %s');
      a('BulletinEtReleve.MoyEleve', 'Moyenne élève');
      a('BulletinEtReleve.MoyenneClasse', 'Moyenne classe');
      a('BulletinEtReleve.BaremeClasse', 'Le barème des moyennes est sur %d');
      a('BulletinEtReleve.Devoirs', 'devoirs');
      a('BulletinEtReleve.Devoir', 'devoir');
      a('BulletinEtReleve.affectationECTS', 'Affectation automatique des ECTS');
      a(
        'BulletinEtReleve.msgAffectationECTS',
        'Ce service compte pour %s ECTS.\nCes crédits ECTS vont être affectés aux élèves en fonction de leur moyenne (%s).\nVoulez-vous continuer ?',
      );
      a('BulletinEtReleve.ECTSParRatio', 'ratio');
      a('BulletinEtReleve.ECTSParSeuil', 'seuil');
      a('BulletinEtReleve.MoyInf', 'Moy. inf.');
      a('BulletinEtReleve.MoySup', 'Moy. sup.');
      a('BulletinEtReleve.MoyMediane', 'Méd.');
      a('BulletinEtReleve.HintMoyMediane', 'Médiane');
      a('BulletinEtReleve.MoyMin', 'M-');
      a('BulletinEtReleve.MoyMax', 'M+');
      a(
        'BulletinEtReleve.HintInf8',
        "Nombre d'élèves ayant moins de 8 de moyenne",
      );
      a('BulletinEtReleve.MoyInf8', '<8');
      a(
        'BulletinEtReleve.HintEntre',
        "Nombre d'élèves entre 8 et 12 de moyenne",
      );
      a('BulletinEtReleve.MoyEntre', '8-12');
      a(
        'BulletinEtReleve.HintSup12',
        "Nombre d'élèves ayant plus de 12 de moyenne",
      );
      a('BulletinEtReleve.MoySup12', '>12');
      a('BulletinEtReleve.aucunDevoir', 'Aucun devoir');
      a('BulletinEtReleve.MoyProposee', 'Moy. prop.');
      a('BulletinEtReleve.HintMoyProposee', 'Moyenne proposée');
      a('BulletinEtReleve.MoyDeliberee', 'Moy. délib.');
      a('BulletinEtReleve.HintMoyDeliberee', 'Moyenne délibérée');
      a('BulletinEtReleve.MoyCalculee', 'Moy. calculée');
      a('BulletinEtReleve.titreGraphe', "Profil de l'élève");
      a(
        'BulletinEtReleve.pasDAffichageGraphe',
        "Pour afficher un profil significatif, l'élève doit avoir été noté dans au moins 3 matières",
      );
      a(
        'BulletinEtReleve.ElementsTravailles',
        'Eléments du programme travaillés',
      );
      a(
        'BulletinEtReleve.InfoHintElementsPgm',
        'Les éléments du programme travaillés dans chaque matière se saisissent par classe ou par groupe soit :\n- dans le bulletin de la classe en sélectionnant uniquement une classe\n- dans la saisie des appréciations des professeurs par matière\n- dans la saisie des appréciations des professeurs par élève\nIl est possible de personnaliser cette saisie pour un élève',
      );
      a('BulletinEtReleve.ElementsProgramme', '%d éléments du programme');
      a(
        'BulletinEtReleve.MenuAffectationAutoElmProg',
        'Affecter automatiquement',
      );
      a(
        'BulletinEtReleve.MenuAffectationManuelleElmProg',
        'Affecter manuellement',
      );
      a('BulletinEtReleve.MenuSuppressionElmProg', 'Supprimer');
      a(
        'BulletinEtReleve.MessageAffectationAutoElmProg',
        'Attention : les éléments du programme déjà saisis vont être remplacés !',
      );
      a(
        'BulletinEtReleve.ConfirmationAffectationAutoElmProg',
        "Confirmez-vous l'affectation à ce service des éléments du programme les plus souvent renseignés dans les cahiers de textes ?",
      );
      a(
        'BulletinEtReleve.InclureTousMesServicesDeMatiere',
        'Affecter automatiquement à mes %d autres services de %s les éléments les plus souvent renseignés dans leurs cahiers de textes respectifs',
      );
      a(
        'BulletinEtReleve.Projets.Aucun',
        "Aucun projet individuel n'est saisi pour cet élève",
      );
      a(
        'BulletinEtReleve.Projets.Detail',
        "Modalités spécifiques d'accompagnement : %s",
      );
      a('BulletinEtReleve.Legende', 'Légende :');
      a('BulletinEtReleve.Pos', 'Pos.');
      a('BulletinEtReleve.Echelle', 'de 1 à 4');
      a('BulletinEtReleve.HintMoyenne', "Moyenne de l'élève");
      a('BulletinEtReleve.HintMoyennePeriode', "Moyenne de l'élève au %s");
      a(
        'BulletinEtReleve.HintPositionnement',
        "Positionnement de l'élève sur une échelle de 1 à 4",
      );
      a(
        'BulletinEtReleve.HintPositionnementPeriode',
        "Positionnement de l'élève sur une échelle de 1 à 4 au %s",
      );
      a(
        'BulletinEtReleve.HintMoyenneOuPositionnement',
        "Moyenne de l'élève ou Positionnement de l'élève sur une échelle de 1 à 4",
      );
      a(
        'BulletinEtReleve.HintMoyenneOuPositionnementPeriode',
        "Moyenne de l'élève ou Positionnement de l'élève sur une échelle de 1 à 4 au %s",
      );
      a(
        'BulletinEtReleve.HintPositionnementObjAppPeriode',
        "Positionnement de l'élève par objectifs d'apprentissage au %s",
      );
      a(
        'BulletinEtReleve.HintPositionnementObjApp',
        "Positionnement de l'élève par objectifs d'apprentissage",
      );
      a(
        'BulletinEtReleve.HintMoyenneOuPositionnementObjAppPeriode',
        "Moyenne de l'élève ou Positionnement de l'élève par objectifs d'apprentissage au %s",
      );
      a(
        'BulletinEtReleve.HintMoyenneOuPositionnementObjApp',
        "Moyenne de l'élève ou Positionnement de l'élève par objectifs d'apprentissage",
      );
      a(
        'BulletinEtReleve.nonExportableLSU',
        'Pas de visualisation du bulletin LSU pour un élève dont les données ne sont pas exportables',
      );
      a(
        'BulletinEtReleve.JAiPrisConnaissanceDuBilanPeriodique',
        "J'ai pris connaissance de ce bilan périodique",
      );
      a(
        'BulletinEtReleve.JAiPrisConnaissanceDuBulletin',
        "J'ai pris connaissance de ce bulletin",
      );
      a(
        'BulletinEtReleve.JAiPrisConnaissanceDuReleve',
        "J'ai pris connaissance de ce relevé",
      );
      a('BulletinEtReleve.AucunAccuseReception', 'Aucun accusé de réception');
      a(
        'BulletinEtReleve.ResponsableAAccuseReception',
        '%s a accusé réception',
      );
      a(
        'BulletinEtReleve.CertainsResponsablesOntAccuseReception',
        'Certains responsables ont accusé réception',
      );
      a(
        'BulletinEtReleve.TousLesResponsablesOntAccuseReception',
        'Tous les responsables ont accusé réception',
      );
      a('BulletinEtReleve.AppA', 'App. A');
      a('BulletinEtReleve.AppB', 'App. B');
      a('BulletinEtReleve.AppC', 'App. C');
      a('BulletinEtReleve.classementEr', '%s er');
      a('BulletinEtReleve.classementEme', '%s ème');
      a(
        'BulletinEtReleve.titreParamAppr',
        "Paramétrage de l'appréciation générale d'un service en groupe",
      );
      a(
        'BulletinEtReleve.strIntroParamAppr',
        "Mode de saisie de l'appréciation générale pour le service %s du groupe %s",
      );
      a(
        'BulletinEtReleve.chxSynchroParamAppr',
        "Saisie unique pour le groupe\nL'appréciation générale est la même pour toutes les classes du groupe",
      );
      a(
        'BulletinEtReleve.chxDeSynchroParamAppr',
        "Saisie différenciée par classe\nL' appréciation générale peut être différente pour chaque classe du groupe",
      );
      a(
        'BulletinEtReleve.msgConfirmParamAppr',
        'Des appréciations différentes ont été saisies pour les classes du service en groupe %s.\nCelles-ci vont être concaténées.\n\nConfirmez-vous la  modification ?',
      );
      a('BulletinEtReleve.appreciationGle', 'Appréciation générale');
      a(
        'BulletinEtReleve.appreciationGleCloture',
        'La saisie des appréciations du pied de bulletin sur la période est clôturée.',
      );
      a('resultatsClasses.eleve', 'élève');
      a('resultatsClasses.eleves', 'élèves');
      a('resultatsClasses.total.noteMediane', 'Note médiane');
      a('resultatsClasses.total.noteHaute', 'Note la plus haute');
      a('resultatsClasses.total.noteBasse', 'Note la plus basse');
      a('resultatsClasses.total.moyenneService', 'Moyenne de classe');
      a('resultatsClasses.total.moyenneGroupe', 'Moyenne des groupes');
      a('resultatsClasses.titres.moyenne', 'Moyenne');
      a('resultatsClasses.titres.nom', 'Nom');
      a('resultatsClasses.titres.numeroNational', 'Numéro National');
      a('resultatsClasses.titres.neLe', 'Né(e) le');
      a('resultatsClasses.titres.redoublantCourt', 'Red');
      a('resultatsClasses.titres.redoublantLong', 'Redoublant');
      a('resultatsClasses.titres.projetAccCourt', 'Projet acc');
      a('resultatsClasses.titres.projetAccLong', "Projet d'accompagnement");
      a('resultatsClasses.titres.dernierEtabCourt', 'Etab préc');
      a('resultatsClasses.titres.dernierEtabLong', 'Etablissement précédent');
      a('resultatsClasses.titres.nbRetards', 'Nb retards');
      a('resultatsClasses.titres.rang', 'Rang');
      a('resultatsClasses.titres.mention', 'Mention');
      a('resultatsClasses.titres.absenceCourt', '1/2 abs');
      a('resultatsClasses.titres.absenceLong', "Demi-journées d'absence");
      a('resultatsClasses.titres.moyenneCourt', 'Moy');
      a('resultatsClasses.titres.credits', 'Crédit scolaire');
      a('resultatsClasses.titres.um', 'U/M');
      a('resultatsClasses.titres.creditsTotaux', 'Crédits totaux');
      a('resultatsClasses.titres.validite', 'Validité année');
      a(
        'resultatsClasses.titres.absenceParServiceLong',
        "Nombre d'heures d'absence dans ce service",
      );
      a('resultatsClasses.titres.volumeHoraire', 'Vol. horaires');
      a(
        'resultatsClasses.titres.positionnement',
        "Niveau de maitrise de l'élève dans ce service",
      );
      a('resultatsClasses.titres.sexe', 'Sexe');
      a('resultatsClasses.titres.sexeCourt', 'S.');
      a('resultatsClasses.options.noteMediane', 'Afficher la note médiane');
      a('resultatsClasses.options.noteBasse', 'Afficher la note la plus basse');
      a('resultatsClasses.options.noteHaute', 'Afficher la note la plus haute');
      a('resultatsClasses.options.absences', 'Afficher les absences');
      a('resultatsClasses.options.sousServices', 'Afficher les sous-services');
      a(
        'resultatsClasses.options.sousServicesUniquement',
        'Afficher uniquement les sous-services',
      );
      a('resultatsClasses.options.afficherServices', 'Afficher les services');
      a(
        'resultatsClasses.options.afficherHManquees',
        'Afficher les heures de cours manquées',
      );
      a(
        'resultatsClasses.options.niveauxMaitrise',
        'Afficher les niveaux de maîtrise des services "avec notes"',
      );
      a('resultatsClasses.options.separateurLignes', 'Lignes de total');
      a(
        'resultatsClasses.options.separateurServices',
        'Présentation des services',
      );
      a('resultatsClasses.options.proposee', 'Proposée');
      a('resultatsClasses.options.calculee', 'Calculée');
      a('resultatsClasses.options.deliberee', 'Délibérée');
      a(
        'resultatsClasses.options.MasquerSansNotes',
        'Masquer les services/sous-services sans notes ou sans niveaux de maîtrise',
      );
      a(
        'resultatsClasses.options.AfficherRougeInferieurMoyenne',
        'Afficher en rouge les notes inférieures à la moyenne',
      );
      a(
        'resultatsClasses.options.AfficherRougeInferieureTroisCinquieme',
        'Afficher en rouge les notes inférieures au trois cinquième du barème',
      );
      a(
        'resultatsClasses.tooltip.estInferieurMoyenne',
        'Note inféreure à la moyenne',
      );
      a(
        'resultatsClasses.tooltip.estInferieureTroisCinquieme',
        'Note inférieure au trois cinquième du barème',
      );
      a('resultatsClasses.tooltip.estServiceFacultatif', 'Service facultatif');
      a(
        'fenetreCommunication.bouton.demarrerDiscussion',
        'Démarrer une discussion',
      );
      a(
        'fenetreCommunication.bouton.discussionsCommunes',
        'Afficher les discussions communes',
      );
      a('fenetreCommunication.bouton.information', 'Donner une information');
      a('fenetreCommunication.bouton.sondage', 'Effectuer un sondage');
      a(
        'fenetreCommunication.cb.inclureDelegues',
        'Copie aux autres parents délégués de la classe',
      );
      a('fenetreCommunication.ecrireEnseignant', 'Écrire dans\nle carnet');
      a('fenetreCommunication.ecrireMairie', 'Écrire à la mairie');
      a(
        'fenetreCommunication.nouveauMessageMairie',
        'Nouveau message à la mairie',
      );
      a('fenetreCommunication.personnelMairie', 'Personnel de mairie');
      a('fenetreCommunication.mettreEnCopie', 'Mettre en copie');
      a('fenetreCommunication.directionEcole', "la direction de l'école");
      a(
        'fenetreCommunication.enseignantDEleve',
        "l'enseignant(e) de mon enfant",
      );
      a('entreprise.titreEntreprise', 'Lieu du stage');
      a('entreprise.titreResponsable', "Contact(s) de l'entreprise");
      a(
        'entreprise.infoSIRET',
        "Saisissez le numéro de SIRET de l'établissement.",
      );
      a(
        'entreprise.infoURSSAF',
        "Saisissez le numéro de URSSAF de l'établissement.",
      );
      a(
        'entreprise.infoContact',
        "Sélectionnez le contact de l'établissement.",
      );
      a(
        'entreprise.infoCivilite',
        "Saisissez la civilité du contact de l'établissement.",
      );
      a(
        'entreprise.infoNom',
        "Saisissez le nom du contact de l'établissement.",
      );
      a(
        'entreprise.infoPrenom',
        "Saisissez le prénom du contact de l'établissement.",
      );
      a(
        'entreprise.infoEmail',
        "Saisissez l'adresse électronique du contact de l'établissement.",
      );
      a('entreprise.infoFax', 'Saisissez le numéro de fax');
      a('entreprise.infoIndFax', "Saisissez l'indicatif du numéro de fax");
      a(
        'entreprise.infoTelephoneFixe',
        'Saisissez le numéro de téléphone fixe',
      );
      a(
        'entreprise.infoIndTelephoneFixe',
        "Saisissez l'indicatif du numéro de téléphone fixe",
      );
      a('entreprise.infoPortable', 'Saisissez le numéro de portable');
      a(
        'entreprise.infoIndPortable',
        "Saisissez l'indicatif du numéro de portable",
      );
      a('entreprise.responsable', "%s du contact de l'établissement.");
      a('entreprise.etablissement', "%s de l'établissement.");
      a('entreprise.responsableEntreprise', "Responsable de l'entreprise");
      a('entreprise.maitreDeStage', 'Maître de stage');
      a('entreprise.nom', 'Nom');
      a('entreprise.prenom', 'Prénom');
      a('entreprise.fax', 'Fax');
      a('entreprise.email', 'Courrier électronique');
      a('entreprise.telephoneFixe', 'Tél. Fixe');
      a('entreprise.telephonePortable', 'Tél. Port.');
      a('entreprise.siret', 'N° SIRET');
      a('entreprise.urssaf', 'N° URSSAF');
      a('entreprise.siteWeb', 'Site web');
      a(
        'entreprise.infoSiteWeb',
        "Saisissez l'adresse du site web de l'entreprise",
      );
      a('infosperso.ElementProgramme', 'Éléments du programme');
      a(
        'infosperso.ElementProgrammeSaisie',
        "Activer la saisie des éléments du programme pour les classes quand cette saisie n'est pas imposée par la maquette de bulletin",
      );
      a('infosperso.CouleursDesCours', 'Couleurs des cours');
      a(
        'infosperso.TipCouleursDesCours',
        "La couleur des classes n'est prise en compte que sur les emplois du temps des professeurs.",
      );
      a('infosperso.LabelCouleur', 'En fonction de :');
      a('infosperso.CouleurMatieres', 'Matières');
      a('infosperso.CouleurClasses', 'Classes');
      a(
        'infosperso.NavigationCoursCDT',
        'Définition du cours précédent / cours suivant',
      );
      a('infosperso.CoursMatiereIdentique', 'Cours de même matière');
      a(
        'infosperso.CoursRessourceIdentique',
        'Cours de même ressource (classe, groupe)',
      );
      a(
        'infosperso.CoursRessourceCommune',
        'Cours ayant une ressource en commun (classe, groupe)',
      );
      a(
        'infosperso.CoursEleveCommun',
        'Cours ayant au moins un élève en commun',
      );
      a(
        'infosperso.AfficherAccueilDemarrage',
        "Lancer la page d'accueil à chaque ouverture",
      );
      a('infosperso.ChoisirTheme', 'Choisir un thème');
      a('infosperso.Generalites', 'Généralités');
      a(
        'infosperso.MasquerDonneesAutresProfesseurs',
        'Masquer les données des autres professeurs',
      );
      a(
        'infosperso.AvecGestionDesThemes',
        'Activer la gestion des thèmes (permettant de taguer les documents joints partagés avec les élèves)',
      );
      a(
        'infosperso.OptionsPublicationAutoCDT',
        'Options de publication automatique des cahiers de textes',
      );
      a('infosperso.DesDebutCours', 'Dès le début du cours');
      a('infosperso.ALaFinDuCours', 'A la fin du cours');
      a('infosperso.OptionsDePartage', 'Options de partage');
      a(
        'infosperso.AutoriserConsultationPJAutresProfesseurs',
        'Partager mes pièces jointes avec les autres enseignants (Dans "Ressources pédagogiques partagées")',
      );
      a(
        'infosperso.RemplacerPastillesCompetences',
        'Remplacer les pastilles de couleurs par les codes dans les compétences',
      );
      a('infosperso.ParcoursEducatifs', 'Parcours éducatifs');
      a(
        'infosperso.ActiverParcoursEducatifs',
        'Activer la saisie des parcours éducatifs',
      );
      a(
        'infosperso.SaisieCommentaireSurSeance',
        'Commentaire sur la séance et la prochaine séance',
      );
      a(
        'infosperso.ActiverSaisieCommentaireSurSeance',
        'Activer la saisie du commentaire sur la séance et la prochaine séance',
      );
      a('infosperso.titreBulletin', 'Bulletins et relevés');
      a('infosperso.titreInfosEleve', "Infos liées à l'élève");
      a('infosperso.titreInfosProf', 'Infos venant des professeurs');
      a('infosperso.titreInfosGen', "Infos non liées à l'élève");
      a('infosperso.infoEmail', 'Saisissez votre adresse électronique.');
      a('infosperso.infoSMS', 'Saisissez votre numéro de téléphone portable.');
      a('infosperso.infoFax', 'Saisissez votre numéro de fax.');
      a(
        'infosperso.infoTelephoneFixe',
        'Saisissez votre numéro de téléphone fixe.',
      );
      a(
        'infosperso.infoSMS_indicatif',
        "Saisissez l'indicatif de votre numéro de téléphone portable.",
      );
      a(
        'infosperso.infoFax_indicatif',
        "Saisissez l'indicatif de votre numéro de fax.",
      );
      a(
        'infosperso.infoTelephoneFixe_indicatif',
        "Saisissez l'indicatif de votre numéro de téléphone fixe.",
      );
      a('infosperso.titreDestinataire', 'Je souhaite être contacté par :');
      a(
        'infosperso.titreDestinataireConsultation',
        'Vous pouvez être contacté par :',
      );
      a('infosperso.titreRecevoir', 'Pour recevoir :');
      a('infosperso.reserveAdministration', "Réservé à l'administration");
      a('infosperso.libelleTelFixe', 'Téléphone fixe');
      a('infosperso.libelleTelPort', 'Téléphone portable');
      a('infosperso.libelleFax', 'Fax');
      a('infosperso.libelleNom', 'Nom');
      a('infosperso.libelleAdresse', 'Adresse');
      a('infosperso.libelleAdresse2', "Complément d'adresse 1");
      a('infosperso.libelleAdresse3', "Complément d'adresse 2");
      a('infosperso.libelleAdresse4', "Complément d'adresse 3");
      a('infosperso.cpVille', 'Code postal');
      a('infosperso.province', 'Province');
      a('infosperso.pays', 'Pays');
      a(
        'infosperso.infosMedicalesTitre',
        "Ces informations seront automatiquement diffusées au corps médical de l'établissement",
      );
      a(
        'infosperso.infosMedicalesConsultables',
        "J'autorise leur diffusion au reste du personnel (administratif et enseignants)",
      );
      a(
        'infosperso.infosAllergiesConsultables',
        "J'autorise leur diffusion au reste du personnel (administratif, enseignants et accompagnants)",
      );
      a(
        'infosperso.infosImperieusesTitre',
        "Ces informations impérieuses à la santé de l'enfant sont automatiquement diffusées au corps médical de l'établissement",
      );
      a(
        'infosperso.infosImperieusesAllergiesComplement',
        'Les allergies alimentaires sont en plus diffusées au personnel en charge de la demi-pension',
      );
      a(
        'infosperso.autoriserHospitalisation',
        "J'autorise l'hospitalisation de mon enfant en cas d'urgence",
      );
      a(
        'infosperso.autoriserImage',
        "J'autorise l'utilisation de ma photographie dans %s",
      );
      a(
        'infosperso.autoriserImageParents',
        "J'autorise l'utilisation de la photographie de %s dans %s",
      );
      a(
        'infosperso.autoriserSignature',
        "J'autorise l'administration à utiliser ma signature sur les bilans périodiques et autres documents officiels (si l'option est choisie par la direction)",
      );
      a('infosperso.SMS', 'SMS');
      a('infosperso.Email', 'Courrier électronique');
      a('infosperso.Papier', 'Courrier papier');
      a('infosperso.fax', 'Fax');
      a('infosperso.telephoneFixe', 'Tél. Fixe');
      a('infosperso.EmailEtablissement', "De l'établissement");
      a('infosperso.EMailParents', "Des parents d'élèves");
      a('infosperso.AccepteDiscussionAvec', "J'accepte les discussions avec :");
      a('infosperso.DiscussionsParents', 'Les parents');
      a('infosperso.DiscussionsEleves', 'Les élèves');
      a('infosperso.DiscussionsProf', 'Les professeurs');
      a('infosperso.DiscussionsPerso', 'Les personnels');
      a('infosperso.Rdv', 'Rendez-vous');
      a(
        'infosperso.AccepteDemandeRdv',
        "J'accepte les demandes de rendez-vous des parents de mes classes",
      );
      a(
        'infosperso.AccepteDemandeRdvDirEns',
        "J'accepte les demandes de rendez-vous des parents",
      );
      a('infosperso.PourLesClassesGroupes', 'Pour les classes/groupes');
      a('infosperso.Tout', 'Tout');
      a(
        'infosperso.wai.boutonAccepteDiscussionAvecXPourClasses',
        "J'accepte les discussions avec les %s pour les classes/groupes :",
      );
      a('infosperso.EstContactVS', "Accepte d'être un contact de vie scolaire");
      a(
        'infosperso.communiquerEmail',
        'Accepte de diffuser son adresse e-mail aux responsables',
      );
      a('infosperso.communicationsParents', 'Communication entre responsables');
      a(
        'infosperso.discussionsAvecParents',
        'Accepte la messagerie entre responsables',
      );
      a(
        'infosperso.avecLesResponsablesDeLaClasse',
        'Avec les responsables de la classe %s et tous les responsables délégués',
      );
      a(
        'infosperso.avecLesResponsablesDesClasses',
        'Avec les responsables des classes %s et tous les responsables délégués',
      );
      a(
        'infosperso.avecRespDeleguesClasse',
        'Avec les responsables délégués de la classe %s',
      );
      a(
        'infosperso.avecRespDeleguesClasses',
        'Avec les responsables délégués des classes %s',
      );
      a('infosperso.avecTousResponsables', 'À tous les responsables');
      a('infosperso.discussion.tous', 'Tous');
      a('infosperso.discussion.mesClassesGroupes', 'De mes classes/groupes');
      a('infosperso.discussion.personnalises', 'Personnalisés');
      a('infosperso.SignerEnLigne', 'Signer en ligne');
      a(
        'infosperso.importerImageSignature',
        'Ma signature sur les bilans périodiques',
      );
      a('infosperso.btnImporterSignature', 'Ajouter ma signature');
      a('infosperso.supprimerSignature', 'Supprimer ma signature');
      a(
        'infosperso.msgSupprimerSignature',
        'Voulez-vous supprimer votre signature ?',
      );
      a('infosperso.apercu', 'Aperçu :');
      a('infosperso.Liste_DroitImage', "Droit à l'image");
      a('infosperso.Liste_Signature', 'Signature');
      a('infosperso.Liste_Deconnexion', 'Droit à la déconnexion');
      a('infosperso.Liste_CahierTexte', 'Cahier de textes');
      a('infosperso.Liste_Generalites', 'Généralités');
      a('infosperso.Liste_PreferencesContact', 'Préférences de contact');
      a('infosperso.SeparateurDateHeure', 'à');
      a(
        'infosperso.AffecterElevesDetaches',
        'Affecter par défaut les élèves détachés',
      );
      a('infosperso.SaisieTAFs', 'Saisie des travaux à faire');
      a(
        'infosperso.MessagerieSignature',
        'Signature des Discussions et des Infos/sondages',
      );
      a(
        'infosperso.labelWAIMessagerieSignature',
        'Zone de texte riche saisie de la signature des discussions',
      );
      a('infosperso.iCal.Titre', 'Export au format ICal');
      a(
        'infosperso.iCal.MessageBouton',
        "Désormais, les exports et paramètres ICAL se situent dans l'affichage :\nMes données → Compte → Export au format ICAL",
      );
      a(
        'infosperso.msgCommentaireMedical',
        "Toute communication complémentaire relative à la santé de votre enfant doit être adressée par pli scellé à destination de l'infirmièr(e) ou du médecin scolaire",
      );
      a('CahierDeTexte.WAI.CDTPublie', 'Cahier de texte publié');
      a('CahierDeTexte.WAI.CDTNonPublie', 'Cahier de texte non publié');
      a('CahierDeTexte.afficherOption', 'Afficher :');
      a('CahierDeTexte.optionDSEval', 'Les devoirs et évaluations');
      a('CahierDeTexte.optionEval', 'Les évaluations');
      a('CahierDeTexte.optionAvecTAF', 'Les travaux à faire');
      a('CahierDeTexte.optionToutesMatieres', 'Les matières enseignées');
      a('CahierDeTexte.optionDeployerDetail', 'Les informations détaillées');
      a('CahierDeTexte.SaisieCahierDeTextes', 'Saisie du cahier de textes');
      a('CahierDeTexte.miseEnForme', 'Mise en forme du texte');
      a(
        'CahierDeTexte.labelWAISaisieContenu',
        'Zone de texte riche saisie du contenu',
      );
      a('CahierDeTexte.TravailPourCeCours', 'Travail donné pour ce cours');
      a(
        'CahierDeTexte.AffectationEltsProgressionAUnCahier',
        'Affecter des éléments au cahier de textes',
      );
      a(
        'CahierDeTexte.AffecterContenuProgression',
        'Affecter un contenu de progression',
      );
      a(
        'CahierDeTexte.RattacherAUnCDTSansCours',
        'Affecter un cahier de textes sans cours',
      );
      a('CahierDeTexte.PourLe', 'Pour le');
      a('CahierDeTexte.ActiviteDu', 'Activité du');
      a(
        'CahierDeTexte.msgConfirmationSupprimerCDT',
        'Voulez-vous supprimer le cahier de textes ?',
      );
      a(
        'CahierDeTexte.msgConfirmationSupprimerContenu',
        'Voulez-vous supprimer ce contenu du cahier de textes ?',
      );
      a(
        'CahierDeTexte.msgConfirmationSupprimerTAF',
        'Voulez-vous supprimer ce travail à faire du cahier de textes ?',
      );
      a(
        'CahierDeTexte.msgConfirmationSupprimerActivite',
        'Voulez-vous supprimer cette activité ?',
      );
      a(
        'CahierDeTexte.msgInformationImpossibleSaisirTAFsurAujourdhui',
        "Vous ne pouvez pas créer un travail à la maison pour aujourd'hui.",
      );
      a(
        'CahierDeTexte.msgInformationImpossibleSaisirRappelJourIncorrect',
        "Vous ne pouvez pas créer de note de rappel pour aujourd'hui ou un jour passé.",
      );
      a(
        'CahierDeTexte.SelectionnerUnCoursPourSaisirCDT',
        'Sélectionnez un cours pour saisir le cahier de textes.',
      );
      a(
        'CahierDeTexte.CoursNonUtilisableDansPNParCDT',
        "Saisie du cahier de textes impossible \n\nLe cours tel qu'il est défini dans EDT ne permet pas de saisir le cahier de textes.\n\nCela nécessite une intervention, dans le logiciel EDT, de la part du gestionnaire de l'emploi du temps.\nIl doit :\n- soit mettre le cours en co-enseignement\n- soit sélectionner un mode de répartition dans la précision des cours complexes.",
      );
      a('CahierDeTexte.CoursPrecedent', '« Cours précédent');
      a('CahierDeTexte.CoursSuivant', 'Cours suivant »');
      a('CahierDeTexte.DernierCours', 'Dernier cours le %s');
      a('CahierDeTexte.ProchainCours', 'Prochain cours le %s');
      a('CahierDeTexte.PlusCoursPrecedent', 'Plus de cours précédent');
      a('CahierDeTexte.PlusCoursSuivant', 'Plus de cours suivant');
      a(
        'CahierDeTexte.AjoutImpossibleCDTVerrouille',
        'Le cahier de textes ne peut pas être modifié car il est verrouillé.',
      );
      a('CahierDeTexte.HintVisa', 'Visé le %s par %s');
      a('CahierDeTexte.HintVisaSansI', 'Visé le %s');
      a('CahierDeTexte.ViserCahiersDeTextes', 'Viser les cahiers de textes');
      a('CahierDeTexte.SupprimerLesVisas', 'Supprimer les visas');
      a('CahierDeTexte.Contenu_QCMAssocie', 'QCM pour réviser :');
      a(
        'CahierDeTexte.VisualisationCahierDeTexte',
        'Visualiser le cahier de textes',
      );
      a(
        'CahierDeTexte.NaviguationCahierTexte',
        'Passer en saisie du cahier de textes',
      );
      a('CahierDeTexte.SupprimerCahierTexte', 'Supprimer le cahier de textes');
      a(
        'CahierDeTexte.AffecterContenuAuCours',
        "Affecter l'élément sélectionné au cahier de textes",
      );
      a(
        'CahierDeTexte.ConfirmerSuppressionCDT',
        'Voulez-vous supprimer le cahier de textes ?',
      );
      a(
        'CahierDeTexte.ParametresExeQCMTAF',
        "Modalités d'exécution du QCM pour ce cahier de textes",
      );
      a('CahierDeTexte.ajouterTAF', 'Ajouter un travail à effectuer');
      a('CahierDeTexte.cahierDeTextes', 'Cahier de textes');
      a('CahierDeTexte.titreFenetreChargeTAF', 'Charge de travail de %s');
      a(
        'CahierDeTexte.titreFenetreTAFEleves',
        'Sélectionner les élèves concernés',
      );
      a('CahierDeTexte.tousLesEleves', 'Tous les élèves');
      a('CahierDeTexte.eleve', '%d/%d élève');
      a('CahierDeTexte.eleves', '%d/%d élèves');
      a('CahierDeTexte.publie', 'Publié');
      a(
        'CahierDeTexte.hintPublie',
        'Par défaut les cahiers de textes sont publiés dès la fin des cours; vous pouvez forcer la publication en cochant la case ci-contre.',
      );
      a(
        'CahierDeTexte.hintPublie_Debut',
        'Par défaut les cahiers de textes sont publiés dès le début des cours; vous pouvez forcer la publication en cochant la case ci-contre.',
      );
      a(
        'CahierDeTexte.hintBoutonPleinEcranAgrandir',
        'Agrandir la zone de saisie',
      );
      a(
        'CahierDeTexte.hintBoutonPleinEcranReduire',
        'Réduire la zone de saisie',
      );
      a(
        'CahierDeTexte.hintBoutonAjoutContenu',
        'Ajouter un contenu au cahier de textes',
      );
      a(
        'CahierDeTexte.ajouterContenuPrecedent',
        'Ajouter un contenu précedent',
      );
      a(
        'CahierDeTexte.retirerContenuPrecedent',
        'Retirer un contenu précedent',
      );
      a(
        'CahierDeTexte.afficherPlusContenuPrecedent',
        'Afficher plus de contenus précédents',
      );
      a(
        'CahierDeTexte.afficherMoinsContenuPrecedent',
        'Afficher moins de contenus précédents',
      );
      a(
        'CahierDeTexte.mrFicheInformation',
        'Information sur la saisie des éléments du programme',
      );
      a('CahierDeTexte.hintEstDS', 'Devoir surveillé');
      a('CahierDeTexte.hintEstEvaluation', 'Évaluation');
      a('CahierDeTexte.titre', 'Titre');
      a('CahierDeTexte.categorie', 'Catégorie');
      a(
        'CahierDeTexte.comboCategorie',
        'Liste déroulante : sélectionnez une catégorie.',
      );
      a(
        'CahierDeTexte.categorieEditionOuSelection',
        'Sélectionner ou éditer une catégorie',
      );
      a('CahierDeTexte.CreerCategorieCDT', 'Créer une catégorie');
      a('CahierDeTexte.ModifierCategorieCDT', 'Modifier une categorie');
      a('CahierDeTexte.CategorieExisteDeja', 'Cette catégorie existe déjà.');
      a(
        'CahierDeTexte.ConfirmSuppressionCategorieCDT',
        'Confirmez-vous la suppression de cette catégorie ?',
      );
      a('CahierDeTexte.infoCategorie', 'Editer les catégories');
      a('CahierDeTexte.ParcoursEducatifs', 'Parcours éducatifs');
      a('CahierDeTexte.docJointsFenetre', 'Joindre');
      a('CahierDeTexte.docJoints', 'Modification des pièces jointes');
      a('CahierDeTexte.sites', 'Modification des sites internet');
      a(
        'CahierDeTexte.lien.cloud',
        'Ajouter des documents stockés dans votre cloud',
      );
      a(
        'CahierDeTexte.lien.kiosque',
        "Ajouter un lien extrait d'un manuel numérique",
      );
      a(
        'CahierDeTexte.piecesJointes.FichierParmiUtilises',
        'Parmi les documents déjà utilisés',
      );
      a(
        'CahierDeTexte.piecesJointes.LienParmiUtilises',
        'Parmi les liens déjà utilisés',
      );
      a(
        'CahierDeTexte.piecesJointes.QCMDeRevision',
        'Parmi les QCM de révision',
      );
      a('CahierDeTexte.piecesJointes.FichierDepuisDisque', 'Depuis mon poste');
      a(
        'CahierDeTexte.piecesJointes.FichierDepuisDocument',
        'Depuis mes documents',
      );
      a('CahierDeTexte.piecesJointes.FichierDepuisCloud', 'Depuis mon cloud');
      a(
        'CahierDeTexte.piecesJointes.DepuisManuelNumerique',
        'Depuis un manuel numérique',
      );
      a('CahierDeTexte.piecesJointes.LienNouveau', 'Nouveau lien');
      a('CahierDeTexte.piecesJointes.prendrePhoto', 'Prendre une photo');
      a('CahierDeTexte.piecesJointes.ouvrirGalerie', 'Depuis ma galerie');
      a(
        'CahierDeTexte.existeCopieRenduParEleve',
        'Toutes les copies rendues par les élèves seront supprimées !',
      );
      a(
        'CahierDeTexte.message.ParcoursEducatifsImpossible',
        'Parcours éducatif impossible',
      );
      a(
        'CahierDeTexte.message.TitreContenuObligatoire',
        "Le titre du contenu est obligatoire pour pouvoir l'associer à un parcours éducatif.",
      );
      a(
        'CahierDeTexte.message.TitrePublicObligatoire',
        'Il faut obligatoirement que le public du cours soit une classe ou un groupe pour créer un parcours éducatif commun',
      );
      a('CahierDeTexte.enligne.qcm', 'Donner un QCM');
      a('CahierDeTexte.enligne.choisirQcm', 'Choisir un QCM');
      a(
        'CahierDeTexte.enligne.exerciceNumerique',
        'Donner un exercice numérique',
      );
      a(
        'CahierDeTexte.avecLien',
        'Ce manuel contient des liens pouvant être insérés dans les cahiers de textes',
      );
      a('CahierDeTexte.xManuelsNumeriques', '%d manuels numériques');
      a(
        'CahierDeTexte.kiosque.fenetre.titre',
        'Manuels numériques sélectionnés pour le cours',
      );
      a(
        'CahierDeTexte.kiosque.fenetre.titreSelect',
        'Sélectionner les manuels numériques pour le cours',
      );
      a('CahierDeTexte.kiosque.fenetre.boutonAnnuler', 'Annuler');
      a('CahierDeTexte.kiosque.fenetre.boutonEnregistrer', 'Enregistrer');
      a('CahierDeTexte.ExosQCM', 'QCM');
      a('CahierDeTexte.ChargeTAFAFaire', 'Charge de travail à faire');
      a('CahierDeTexte.ChargeTAF', 'Charge de travail');
      a('CahierDeTexte.HintBtnCrayonMagique', 'Editer le contenu');
      a('CahierDeTexte.SansTitre', 'sans titre');
      a('CahierDeTexte.ContenusPrecedents', 'Contenus précédents');
      a('CahierDeTexte.HintCDTRecapitulatif', 'Saisi le %s - %s - %s');
      a(
        'CahierDeTexte.PoursuivreCoursPrecedent',
        'Affecter le même contenu que précédemment',
      );
      a('CahierDeTexte.PoursuivreProgression', 'Continuer la progression');
      a('CahierDeTexte.ProgrammerDS', 'Programmer un devoir sur table');
      a(
        'CahierDeTexte.ProgrammerEval',
        'Programmer une évaluation de compétences',
      );
      a('CahierDeTexte.ModifierDS', 'Modifier le devoir sur table');
      a('CahierDeTexte.ModifierEval', "Modifier l'évaluation de compétences");
      a('CahierDeTexte.SupprimerDS', 'Supprimer le devoir sur table');
      a('CahierDeTexte.SupprimerEval', "Supprimer l'évaluation de compétences");
      a(
        'CahierDeTexte.TitreFenetreModele',
        'Modèles de travail personnel à effectuer',
      );
      a('CahierDeTexte.ModifierQCMTAF', "Modalités d'exécution du QCM");
      a('CahierDeTexte.commands.supprimerContenu', 'Supprimer ce contenu');
      a(
        'CahierDeTexte.postIt.seanceSuivante.titre',
        'Note pour la prochaine séance',
      );
      a(
        'CahierDeTexte.postIt.seanceSuivante.hintBtn',
        'Note pour la prochaine séance',
      );
      a(
        'CahierDeTexte.postIt.seanceSuivante.saisir',
        'Saisir une note pour la pochaine séance',
      );
      a('CahierDeTexte.postIt.seanceSuivante.label', 'Contenu de la note');
      a('CahierDeTexte.postIt.pourCetteSeance.titre', 'Note pour cette séance');
      a(
        'CahierDeTexte.postIt.commentairePrive.titre',
        'Commentaire sur la séance',
      );
      a(
        'CahierDeTexte.postIt.commentairePrive.infoTitre',
        "strictement réservé à l'auteur du cahier de textes",
      );
      a(
        'CahierDeTexte.postIt.commentairePrive.hintBtn',
        'Éditer le commentaire',
      );
      a(
        'CahierDeTexte.postIt.commentairePrive.menuCtx',
        'Saisir un commentaire sur la séance',
      );
      a(
        'CahierDeTexte.BoutonRattachementCDT',
        'Liste des cahiers de textes sans cours affectés',
      );
      a(
        'CahierDeTexte.FenetreRattachementCDT',
        'Cahiers de textes sans cours affectés',
      );
      a(
        'CahierDeTexte.Rattachement.Confirmation',
        'Voulez-vous affecter le cahier de textes sélectionné au cours du %s à %s ?',
      );
      a(
        'CahierDeTexte.Rattachement.DragDrop',
        "Suite à des modifications d'emplois du temps, ces cahiers de textes ne sont plus consultables par les élèves.\nVous devez les réaffecter en cliquant/glissant sur vos cours.",
      );
      a(
        'CahierDeTexte.Rattachement.Selection',
        'Sélectionnez le cahier de textes à rattacher à ce cours',
      );
      a(
        'CahierDeTexte.Rattachement.Menu.Visualiser',
        'Visualiser le cahier de textes',
      );
      a(
        'CahierDeTexte.Rattachement.Menu.Supprimer',
        'Supprimer le cahier de textes',
      );
      a(
        'CahierDeTexte.Rattachement.SupprimerCDTSelect',
        'Supprimer le cahier de textes sélectionné',
      );
      a('CahierDeTexte.Rattachement.ClasseGroupe', 'Classe/Groupe');
      a('CahierDeTexte.Rattachement.Travail', 'Travail');
      a('CahierDeTexte.Rattachement.AncienCours', 'Ancien cours');
      a(
        'CahierDeTexte.Rattachement.CoursNonPlace',
        "Ce cours n'est plus placé sur l'emploi du temps",
      );
      a('CahierDeTexte.TAF_QCM', 'QCM');
      a('CahierDeTexte.TAF_QCMAvecDevoir', 'QCM associé à un devoir');
      a('CahierDeTexte.TAF_QCMAvecEvaluation', 'QCM associé à une évaluation');
      a('CahierDeTexte.TAF_RenduKiosque', 'Exercice numérique');
      a('CahierDeTexte.TAF_SaisirUnTravail', 'Saisir un travail');
      a('CahierDeTexte.TAF_EnrichirLaListe', 'Enrichir la liste');
      a('CahierDeTexte.CopierCDT', 'Copier le cahier de textes');
      a('CahierDeTexte.CollerCDT', 'Coller le cahier de textes');
      a('CahierDeTexte.SupprimerCDT', 'Supprimer le cahier de textes');
      a('CahierDeTexte.iconeDS', 'DS');
      a('CahierDeTexte.iconeEval', 'EVA');
      a(
        'CahierDeTexte.ConfirmerCollerCahierSurExistant',
        'Un cahier de textes existe déjà. Il sera écrasé. Voulez-vous continuer ?',
      );
      a(
        'CahierDeTexte.AjouterElementsCDT',
        'Ajouter les éléments du cahier de textes dans une progression',
      );
      a('CahierDeTexte.Ajouter', 'Ajouter');
      a('CahierDeTexte.ChoixProgression', 'Choix de la progression');
      a('CahierDeTexte.ChoixDossier', 'Choix du dossier');
      a(
        'CahierDeTexte.InclureLesTAFs',
        'Inclure également les travaux à faire',
      );
      a(
        'CahierDeTexte.AucunContenu',
        "Aucun contenu n'a été saisi pour cette semaine",
      );
      a('CahierDeTexte.AucunTAFSaisi', 'Aucun travail à faire saisi');
      a('CahierDeTexte.AucunContenuSaisi', 'Aucun contenu saisi');
      a(
        'CahierDeTexte.AucunContenuJoursAVenir',
        "Aucun contenu n'a été saisi depuis le %s",
      );
      a(
        'CahierDeTexte.AucunEltPgm',
        "Aucun élément de programme n'a été saisi",
      );
      a(
        'CahierDeTexte.AucuneRessource',
        "Aucune ressource pédagogique n'a été déposée",
      );
      a(
        'CahierDeTexte.AucunTAF',
        "Aucun travail à faire n'a été saisi pour cette semaine",
      );
      a(
        'CahierDeTexte.AucunTAFJoursAVenir',
        "Aucun travail à faire n'a été saisi depuis le %s",
      );
      a(
        'CahierDeTexte.AucunTAFAVenirSelonCriteres',
        'Aucun travail à faire pour les jours à venir selon les critères choisis',
      );
      a(
        'CahierDeTexte.AucunTAFSelonCriteres',
        'Aucun travail à faire selon les critères choisis',
      );
      a('CahierDeTexte.TravauxAFaire', 'Travaux à faire');
      a('CahierDeTexte.TravailAFaire', 'Travail à faire');
      a('CahierDeTexte.TAF.tousEleves', 'Tous');
      a('CahierDeTexte.TAF.attendus', 'Attendus');
      a('CahierDeTexte.TAF.nbElevesAttendus', '%d attendus');
      a('CahierDeTexte.TAF.1EleveDetache', '1 détaché de ce cours');
      a('CahierDeTexte.TAF.nbElevesDetaches', '%d détachés de ce cours');
      a('CahierDeTexte.filtre.fait', 'Travail déjà fait');
      a('CahierDeTexte.filtre.aFaire', 'Travail à faire');
      a('CahierDeTexte.filtre.activite', 'Activité en classe');
      a('CahierDeTexte.filtre.nePasOublier', 'Ne pas oublier');
      a('CahierDeTexte.Manuels', 'Ouvrir les manuels numériques');
      a('CahierDeTexte.TAF.FaitX/Y', 'Fait : %d / %d élèves');
      a('CahierDeTexte.TAF.RenduX/Y', 'Rendu en ligne : %d / %d élèves');
      a('CahierDeTexte.TAF.xyEleves', '%d / %d élèves');
      a('CahierDeTexte.TAF.FaitPar', 'Fait par :');
      a(
        'CahierDeTexte.TAF.SelectionClasseGroupe',
        'Sélection de la classe / groupe',
      );
      a('CahierDeTexte.TAF.SelectionEleves', 'Sélection des élèves');
      a('CahierDeTexte.TAF.Eleves', 'Élèves');
      a('CahierDeTexte.TAF.xAutresEleves', '%d autres élèves');
      a('CahierDeTexte.SansContenu', 'Sans contenu');
      a('CahierDeTexte.VoirLaChargeTAF', 'Voir la charge de travail');
      a('CahierDeTexte.MenuPublierCahier', 'Publier');
      a('CahierDeTexte.MenuDepublierCahier', 'Dépublier');
      a(
        'CahierDeTexte.MessageSuppressionImage',
        "Certaines images n'ont pas pu être récupérées par le copier/coller.\nNous vous conseillons d'attacher l'ensemble de votre document en tant que pièce jointe",
      );
      a(
        'CahierDeTexte.MsgInfoDetailRenduNonDispoSurMobile',
        'Le suivi du travail effectué par les élèves est disponible en se connectant depuis un ordinateur',
      );
      a('CahierDeTexte.TAFQCM.AddQCMDevoir', 'Ajouter QCM associé à un devoir');
      a(
        'CahierDeTexte.TAFQCM.AddQCMEvaluation',
        'Ajouter QCM associé à une évaluation',
      );
      a('CahierDeTexte.TAFQCM.QCM', 'QCM :');
      a('CahierDeTexte.TAFQCM.Service', 'Service :');
      a('CahierDeTexte.TAFQCM.Periode', 'Période :');
      a('CahierDeTexte.TAFARendre.eleves', '%s élèves');
      a('CahierDeTexte.TAFARendre.RenduPar', 'Rendu par');
      a('CahierDeTexte.TAFARendre.FaitPar', 'Fait par');
      a('CahierDeTexte.TAFARendre.VoirContenu', 'Voir le cours');
      a(
        'CahierDeTexte.TAFARendre.ADeposer',
        "À déposer dans l'Espace Élèves (5 Mo max)",
      );
      a('CahierDeTexte.TAFARendre.AucunRenduPrevu', 'Aucun rendu prévu');
      a('CahierDeTexte.TAFARendre.ARemettre', 'À remettre au professeur');
      a('CahierDeTexte.TAFARendre.ACompleterEditeur', 'Répondre en ligne');
      a(
        'CahierDeTexte.TAFARendre.ACompleterEditeurSite',
        'Répondre sur le site',
      );
      a(
        'CahierDeTexte.TAFARendre.ACompleterEditeurAppli',
        "Répondre sur l'appli",
      );
      a(
        'CahierDeTexte.TAFARendre.EnregistrementADeposer',
        "Audio - A enregistrer sur l'Espace Élèves ( 3 min. max)",
      );
      a('CahierDeTexte.TAFPourSeance', 'Travail donné pour la séance');
      a(
        'CahierDeTexte.TAFAVenir',
        'Travail à effectuer pour les prochaines séances',
      );
      a('CahierDeTexte.ContenusSeance', 'Contenus de la séance');
      a('CahierDeTexte.EltPgmSeance', 'Eléments du programme travaillés');
      a(
        'CahierDeTexte.AucunTAFPourSeance',
        "Aucun travail n'a été donné pour cette séance",
      );
      a('CahierDeTexte.CreerContenu', 'Créer un contenu');
      a('CahierDeTexte.ModifierContenu', 'Modifier le contenu');
      a('CahierDeTexte.SaisirContenu', 'Saisir un contenu');
      a('CahierDeTexte.CreerTAF', 'Donner un travail à faire');
      a('CahierDeTexte.ModifierTAF', 'Modifier le travail à faire');
      a('CahierDeTexte.DescriptionTAF', 'Description');
      a('CahierDeTexte.ModeRendu', 'Mode de rendu');
      a('CahierDeTexte.CategorieAucune', 'Non précisée');
      a('CahierDeTexte.AucunePJ', "Aucun fichier n'a été joint");
      a('CahierDeTexte.AucunSite', "Aucun site Internet n'a été joint");
      a('CahierDeTexte.publieLe', 'Publié le %s');
      a('CahierDeTexte.nonPublie', 'Non publié');
      a('CahierDeTexte.elevesConcernes', 'Élèves concernés');
      a('CahierDeTexte.msgAucun', "Rien n'est programmé ce jour");
      a(
        'CahierDeTexte.msgConfirmationAjoutTafPasse',
        "Confirmez-vous l'ajout de ce nouveau travail à faire ?",
      );
      a('CahierDeTexte.documentsAConsulter', 'Documents à consulter');
      a('CahierDeTexte.TravailPourCeJour', 'Travail à la maison pour ce jour');
      a(
        'CahierDeTexte.AjoutActiviteAujourdhui',
        'Ajouter une activité sur ce jour',
      );
      a('CahierDeTexte.ActiviteSurCeJour', 'Activité en classe sur ce jour');
      a(
        'CahierDeTexte.TravailOuActivite',
        'Ajouter un travail à la maison\nou programmer une activité',
      );
      a('CahierDeTexte.AjouterActiviteEnClasse', 'Activité en classe');
      a('CahierDeTexte.AjouterTravailALaMaison', 'Travail à la maison');
      a('CahierDeTexte.SaisirConsigne', 'Saisir une consigne');
      a(
        'CahierDeTexte.ModifierActiviteEnClasse',
        'Modifier une activité en classe',
      );
      a(
        'CahierDeTexte.ModifierTravailALaMaison',
        'Modifier un travail à la maison',
      );
      a('CahierDeTexte.Consigne', 'Consigne');
      a('CahierDeTexte.QCM', 'QCM');
      a('CahierDeTexte.ExerciceNumerique', 'Exercice numérique');
      a('CahierDeTexte.ModalitesExecutionQCM', "Modalités d'exécution");
      a('CahierDeTexte.RessourcesPedagogiques', 'Ressources pédagogiques');
      a('CahierDeTexte.pourLe', 'Pour le');
      a('CahierDeTexte.depuisLe', 'Depuis le %s');
      a('CahierDeTexte.contenu', 'Contenu');
      a('CahierDeTexte.ressources', 'Ressources');
      a('CahierDeTexte.contenus', 'Contenus');
      a('CahierDeTexte.contenusDu', 'Contenus du %s');
      a('CahierDeTexte.le', 'Le');
      a('CahierDeTexte.a', 'à');
      a('CahierDeTexte.ActiviteEnClasse', 'Activité en classe');
      a('CahierDeTexte.TravailALaMaison', 'Travail à la maison');
      a('CahierDeTexte.ContenuDuCours', 'Contenu du cours');
      a('CahierDeTexte.ChipsVu', 'Vu');
      a('CahierDeTexte.CBJeSuisInformee', 'Je suis informé(e)');
      a('CahierDeTexte.tousLesThemes', 'Tous les thèmes');
      a('CahierDeTexte.filtrerParThemes', 'Filtrer par thèmes');
      a(
        'CahierDeTexte.messageExerciceVersConsigne',
        'Cette ressource n\'est pas du type "Exercice numérique"\nSouhaitez-vous créer une activité en insérant cette ressource en tant que pièce jointe ?',
      );
      a(
        'CahierDeTexte.messageConsigneVersExercice',
        'Cette ressource est de type "Exercice numérique", elle ne sera pas insérée en tant que pièce jointe.\nSouhaitez-vous créer une activité de type exercice numérique avec cette ressource ?\nSi vous avez déjà saisie une consigne, elle sera perdue au profit de la consigne de l\'exercice numérique.',
      );
      a(
        'CahierDeTexte.ConsulterLesManuelsNumeriques',
        'Consulter les manuels numériques',
      );
      a(
        'CahierDeTexte.ContenuCours.RessourcesPedagogiques.ListeDesRessourcesPedagogiques',
        'Liste des ressources pédagogiques',
      );
      a(
        'CahierDeTexte.ContenuCours.RessourcesPedagogiques.SujetsEtCorrige',
        "Sujets et corrigés de devoir ou d'évaluation",
      );
      a(
        'CahierDeTexte.ContenuCours.RessourcesPedagogiques.SujetsEtCorrigePP',
        "Sujets et corrigés d'évaluation",
      );
      a(
        'CahierDeTexte.ContenuCours.RessourcesPedagogiques.TravauxRendus',
        'Travaux rendus',
      );
      a(
        'CahierDeTexte.ContenuCours.RessourcesPedagogiques.QCMDEntrainement',
        'Mes QCM',
      );
      a(
        'CahierDeTexte.ContenuCours.RessourcesPedagogiques.RessourcesGranulaires',
        'Lien vers les manuels numériques',
      );
      a(
        'CahierDeTexte.ContenuCours.RessourcesPedagogiques.AutresDocuments',
        'Autres documents',
      );
      a(
        'CahierDeTexte.ContenuCours.RessourcesPedagogiques.DevoirDu',
        'Devoir du %s',
      );
      a(
        'CahierDeTexte.ContenuCours.RessourcesPedagogiques.EvaluationDu',
        'Évaluation du %s',
      );
      a(
        'CahierDeTexte.ContenuCours.RessourcesPedagogiques.TravailARendrePourLe',
        'Travail à rendre pour le %s',
      );
      a('CahierDeTexte.ContenuCours.RessourcesPedagogiques.QCMDu', 'QCM du %s');
      a(
        'CahierDeTexte.ContenuCours.RessourcesPedagogiques.DocumentDeposeLe',
        'Document déposé le %s',
      );
      a(
        'CahierDeTexte.ContenuCours.RessourcesPedagogiques.QCMCorriges',
        'Corrigés',
      );
      a(
        'CahierDeTexte.ContenuCours.RessourcesPedagogiques.QCMRevisionEtTAF',
        'Révisions et travaux à faire',
      );
      a(
        'CahierDeTexte.ContenuCours.RessourcesPedagogiques.MesForumsPedagogiques',
        'Mes forums pédagogiques',
      );
      a('CahierDeTexte.voirTAF', 'Voir le travail à faire');
      a(
        'CahierDeTexte.CDTconsultableDuAu',
        'Le cahier de textes sera consultable du %0:s au %1:s',
      );
      a('CahierDeTexte.consultableDuAu', 'consultable du %0:s au %1:s');
      a(
        'CahierDeTexte.CDTNonConsultable',
        "Le cahier de textes n'est pas consultable",
      );
      a('CahierDeTexte.CDTViseEtVerrouille', 'Visé et verrouillé');
      a('CahierDeTexte.ElementsProgramme', 'Eléments du programme travaillés');
      a(
        'CahierDeTexte.AideSaisieElementsPgm',
        "Saisie des éléments du programme\n\n1. Les éléments du programme peuvent être saisis directement dans les cahiers de textes.\n2. Lors du remplissage des bulletins, un décompte des éléments du programme travaillés dans la période sera automatiquement calculé.\n3. Chaque enseignant pourra alors choisir les éléments à afficher dans les bulletins en s'appuyant sur ce décompte ou bien en ajouter d'autres.",
      );
      a('CahierDeTexte.TAFARendre.Eleve.RenduPronote', 'Déposer ma copie');
      a('CahierDeTexte.TAFARendre.Eleve.RenduPrimaire', 'Déposer la copie');
      a(
        'CahierDeTexte.TAFARendre.Eleve.NouveauRenduPronote',
        'Remplacer ma copie',
      );
      a(
        'CahierDeTexte.TAFARendre.Eleve.SupprimerRenduPronote',
        'Supprimer ma copie',
      );
      a(
        'CahierDeTexte.TAFARendre.Eleve.NouveauRenduPrimaire',
        'Remplacer la copie',
      );
      a(
        'CahierDeTexte.TAFARendre.Eleve.SupprimerRenduPrimaire',
        'Supprimer la copie',
      );
      a('CahierDeTexte.TAFARendre.Eleve.Deposer', 'Remplacer');
      a('CahierDeTexte.TAFARendre.Eleve.Supprimer', 'Supprimer');
      a(
        'CahierDeTexte.TAFARendre.Eleve.RenduPapier',
        'A remettre au professeur',
      );
      a('CahierDeTexte.TAFARendre.Eleve.DeposerCopie', 'Déposer une copie');
      a('CahierDeTexte.TAFARendre.Eleve.RenduNumerique', 'A rendre en ligne');
      a('CahierDeTexte.TAFARendre.Parent.cbTermine', 'Terminé');
      a(
        'CahierDeTexte.TAFARendre.Eleve.ProlongeJusquAu',
        "Prolongé jusqu'au %s",
      );
      a('CahierDeTexte.TAFARendre.Eleve.DepotEnRetard', 'Dépôt en retard');
      a('CahierDeTexte.TAFARendre.Eleve.CopieDeposee', 'Copie déposée');
      a(
        'CahierDeTexte.TAFARendre.Eleve.CopieCorrigeeParEnseignant',
        "Copie corrigée par l'enseignant",
      );
      a(
        'CahierDeTexte.TAFARendre.Eleve.CorrectionDeLEnseignant',
        "Correction de l'enseignant",
      );
      a(
        'CahierDeTexte.TAFARendre.Eleve.ConsulterMesReponses',
        'Consulter mes réponses',
      );
      a(
        'CahierDeTexte.TAFARendre.Eleve.ConsulterLesReponses',
        'Consulter les réponses',
      );
      a(
        'CahierDeTexte.TAFARendre.Eleve.RepondreANouveau',
        'Répondre à nouveau',
      );
      a(
        'CahierDeTexte.TAFARendre.Eleve.SupprimerMesReponses',
        'Supprimer mes réponses',
      );
      a('CahierDeTexte.DureeEstimee', 'Durée estimée');
      a('CahierDeTexte.NiveauDifficulte', 'Niveau de difficulté');
      a('CahierDeTexte.DocsJoints', 'Pièces jointes');
      a('CahierDeTexte.SitesWeb', 'Sites Internet');
      a('CahierDeTexte.Kiosques', 'Manuels numériques');
      a('CahierDeTexte.wai.SelectJour', "D'abord pour sélectionner un jour");
      a(
        'CahierDeTexte.wai.SelectMatiere',
        "D'abord pour sélectionner la matière",
      );
      a(
        'CahierDeTexte.wai.DetailsMatiereDuJour',
        "Pour les détails d'une matière du jour sélectionné, utilisez la fleche droite.",
      );
      a(
        'CahierDeTexte.wai.DetailsJourDeLaMatiere',
        'Pour les détails par jour de la matière, utilisez la fleche droite.',
      );
      a(
        'CahierDeTexte.wai.NavigationMatiere',
        "Pour passer d'une matière à l'autre",
      );
      a('CahierDeTexte.wai.NavigationJour', "Pour passer d'un jour à l'autre");
      a(
        'CahierDeTexte.wai.NavigationMatiereRetour',
        'Dans le détail des matières, pour revenir sur le jour utilisez la fleche gauche.',
      );
      a(
        'CahierDeTexte.wai.NavigationJourRetour',
        "Dans le détail d'un jour, pour revenir sur la matière utilisez la fleche gauche.",
      );
      a('CahierDeTexte.altImage.TAF', 'Image du travail à faire');
      a('CahierDeTexte.altImage.CDC', 'Image du contenu de cours');
      a(
        'FenetreListeTAFFaits.Titre',
        'Suivi du travail effectué par les élèves',
      );
      a('FenetreListeTAFFaits.colonnes.Eleve', 'Élève');
      a('FenetreListeTAFFaits.colonnes.Fait', 'Fait');
      a('FenetreListeTAFFaits.colonnes.CopieEleve', 'PJ');
      a('FenetreListeTAFFaits.colonnes.PourLe', 'Pour le');
      a('FenetreListeTAFFaits.colonnes.CopieCorrigee', 'PJ');
      a('FenetreListeTAFFaits.colonnes.Commentaire', 'Commentaire');
      a('FenetreListeTAFFaits.hintColonnes.CopieEleve', "Copie de l'élève");
      a(
        'FenetreListeTAFFaits.hintColonnes.PourLe',
        "Date limite de dépôt de la copie de l'élève",
      );
      a(
        'FenetreListeTAFFaits.hintColonnes.Verrou',
        "Lorsque la copie est verrouillée, l'élève ne peut plus la modifier.",
      );
      a(
        'FenetreListeTAFFaits.hintColonnes.CopieCorrigee',
        "Copie corrigée de l'élève",
      );
      a(
        'FenetreListeTAFFaits.hintColonnes.Commentaire',
        "Commentaire de la copie, publié sur l'espace Élèves",
      );
      a('FenetreListeTAFFaits.hintColonnes.enCours', 'En cours');
      a('FenetreListeTAFFaits.surColonnes.CopieEleve', "Copie de l'élève");
      a('FenetreListeTAFFaits.surColonnes.vocalEleve', "Vocal de l'élève");
      a('FenetreListeTAFFaits.surColonnes.CopieCorrigee', 'Copie corrigée');
      a('FenetreListeTAFFaits.FaitLe', 'Fait le %s');
      a('FenetreListeTAFFaits.RenduLe', 'Rendu le %s');
      a('FenetreListeTAFFaits.DeposeLe', 'Déposé le %s');
      a('FenetreListeTAFFaits.ReponduLe', 'Répondu le %s');
      a(
        'FenetreListeTAFFaits.menuContextuel.CopieEleve.Titre',
        "Copie de l'élève",
      );
      a('FenetreListeTAFFaits.menuContextuel.CopieEleve.Deposer', 'Déposer');
      a(
        'FenetreListeTAFFaits.menuContextuel.CopieEleve.Remplacer',
        'Remplacer',
      );
      a(
        'FenetreListeTAFFaits.menuContextuel.CopieEleve.Supprimer',
        'Supprimer',
      );
      a(
        'FenetreListeTAFFaits.menuContextuel.CopieEleve.Recuperer',
        'Télécharger',
      );
      a(
        'FenetreListeTAFFaits.menuContextuel.CopieEleve.Verrouiller',
        'Verrouiller',
      );
      a(
        'FenetreListeTAFFaits.menuContextuel.CopieEleve.Deverrouiller',
        'Déverrouiller',
      );
      a(
        'FenetreListeTAFFaits.menuContextuel.CopieEleve.ProlongerRenduEleve',
        'Prolonger le dépôt de la copie',
      );
      a(
        'FenetreListeTAFFaits.menuContextuel.CopieEleve.annulerProlongation',
        'Annuler la prolongation du dépôt de la copie',
      );
      a(
        'FenetreListeTAFFaits.menuContextuel.CorrigeEleve.Titre',
        "Corrigé de la copie de l'élève",
      );
      a('FenetreListeTAFFaits.menuContextuel.CorrigeEleve.Deposer', 'Déposer');
      a(
        'FenetreListeTAFFaits.menuContextuel.CorrigeEleve.Remplacer',
        'Remplacer',
      );
      a(
        'FenetreListeTAFFaits.menuContextuel.CorrigeEleve.Supprimer',
        'Supprimer',
      );
      a(
        'FenetreListeTAFFaits.menuContextuel.CorrigeEleve.Recuperer',
        'Télécharger',
      );
      a(
        'FenetreListeTAFFaits.ConfirmationDepotCopieEleve',
        "Voulez-vous déposer une copie à la place de l'élève ?",
      );
      a(
        'FenetreListeTAFFaits.ConfirmationSuppressionCopieEleve',
        "Voulez-vous supprimer la copie de l'élève ?",
      );
      a(
        'FenetreListeTAFFaits.ConfirmationSuppressionCopieCorrigee',
        'Voulez-vous supprimer la copie corrigée ?',
      );
      a('FenetreListeTAFFaits.CopieVerrouillee', 'Copie verrouillée');
      a(
        'FenetreListeTAFFaits.EditionVerrou.ExplicationDeverrouillage',
        "Le déverrouillage de la copie permet à l'élève de la modifier.",
      );
      a(
        'FenetreListeTAFFaits.EditionVerrou.SuppressionCommentaireCorrige',
        'Cela supprimera le commentaire renseigné.',
      );
      a(
        'FenetreListeTAFFaits.EditionVerrou.ConfirmationDeverrouillage',
        'Confirmez-vous cette modification ?',
      );
      a(
        'FenetreListeTAFFaits.TelechargerTout',
        'Télécharger toutes les copies',
      );
      a(
        'FenetreListeTAFFaits.TelechargerVocaux',
        'Télécharger tous les vocaux',
      );
      a(
        'FenetreListeTAFFaits.DeposerPlusieursCorriges',
        'Déposer plusieurs copies corrigées',
      );
      a(
        'FenetreListeTAFFaits.AucunCorrigeImporte',
        "Aucune copie corrigée n'a été importée.",
      );
      a(
        'FenetreListeTAFFaits.FenetreProlongationRendu.ChoixEleves',
        'Choix des élèves',
      );
      a(
        'FenetreListeTAFFaits.FenetreProlongationRendu.Titre',
        'Prolongation du dépôt de la copie',
      );
      a(
        'FenetreListeTAFFaits.FenetreProlongationRendu.bouton',
        'Prolonger la date de dépôt',
      );
      a(
        'FenetreListeTAFFaits.FenetreProlongationRendu.Message',
        "Prolonger la date de dépôt de la copie jusqu'au",
      );
      a(
        'FenetreListeTAFFaits.FenetreProlongationRendu.SansRendus',
        "Pour les élèves n'ayant pas rendu leur copie",
      );
      a(
        'FenetreListeTAFFaits.FenetreProlongationRendu.PourLesEleves',
        'Pour les élèves',
      );
      a(
        'FenetreListeTAFFaits.FenetreProlongationRendu.PourLesElevesInfo',
        'Pour les élèves sélectionnés',
      );
      a(
        'FenetreListeTAFFaits.FenetreProlongationRendu.AucunEleveSelectionne',
        'Aucun élève sélectionné',
      );
      a(
        'FenetreListeTAFFaits.FenetreProlongationRendu.Confirmation',
        'Confirmez-vous la prolongation ?',
      );
      a(
        'FenetreListeTAFFaits.FenetreProlongationRendu.selectionnerEleves',
        'Sélection des élèves',
      );
      a('EvenementRappel.Detail', 'Description');
      a('EvenementRappel.Titre', 'Titre');
      a('EvenementRappel.Eleves', 'Classe');
      a('EvenementRappel.PourLe', 'Pour le %s');
      a('EvenementRappel.TitreFenetre', 'Notes aux parents');
      a('EvenementRappel.VuPar', 'Vu pour %d / %d élèves');
      a(
        'EvenementRappel.msgConfirmationSupprimer',
        'Voulez-vous supprimer la sélection ?',
      );
      a(
        'Fenetre_ElementsProgramme.Titre',
        'Saisie des principaux éléments travaillés du programme',
      );
      a(
        'Fenetre_ElementsProgramme.ElementsCycle',
        'Choisir parmi les éléments du cycle',
      );
      a('Fenetre_ElementsProgramme.Liste.Creation', 'Créer une composante');
      a(
        'Fenetre_ElementsProgramme.Liste.TitreSaisisDsCDT',
        'Éléments saisis dans le cahier de textes',
      );
      a(
        'Fenetre_ElementsProgramme.Matiere.AfficherMatiere',
        'Par rapport à la matière',
      );
      a(
        'Fenetre_ElementsProgramme.Matiere.AfficherEltDuProfesseur',
        "les éléments que j'ai créés",
      );
      a(
        'Fenetre_ElementsProgramme.Matiere.AfficherLSU',
        'les éléments du programme proposés par LSU',
      );
      a(
        'Fenetre_ElementsProgramme.Matiere.AfficherEltPartages',
        'les éléments partagés par les professeurs',
      );
      a(
        'Fenetre_ElementsProgramme.Matiere.AfficherCompetences',
        'les compétences des référentiels par matière',
      );
      a(
        'Fenetre_ElementsProgramme.Domaine.AfficherDomaine',
        'Par rapport au domaine',
      );
      a(
        'Fenetre_ElementsProgramme.SaisieCDT.AfficherEltCDT',
        'Par rapport aux éléments saisis dans le cahier de textes au cours de la période',
      );
      a(
        'Fenetre_ElementsProgramme.SaisieCDT.AfficherLesEltsParOccurence1_2',
        'Afficher le(s)',
      );
      a(
        'Fenetre_ElementsProgramme.SaisieCDT.AfficherLesEltsParOccurence2_2',
        'élément(s) les plus travaillés sur la période',
      );
      a(
        'Fenetre_ElementsProgramme.SaisieCDT.ReportSurBulletin',
        'Report des éléments travaillés sur les bulletins',
      );
      a(
        'Fenetre_ElementsProgramme.SaisieCDT.ComptabiliserPourBulletin',
        'Prendre en compte les éléments cochés pour le service :',
      );
      a(
        'Fenetre_ElementsProgramme.SaisieCDT.LimiteDuReport',
        "Les éléments seront pris en compte dans la limite de ce qui est défini dans la maquette du bulletin en fonction de leur nombre d'occurences",
      );
      a(
        'Fenetre_ElementsProgramme.SaisieCDT.AucunServiceDisponible',
        "Aucun service de notation n'est activé pour %s en %s",
      );
      a('Fenetre_ElementsProgramme.TitreSaisiPar', 'Auteur');
      a(
        'Fenetre_ElementsProgramme.HintTitrePartage',
        "Le chapitre ou l'élément est partagé",
      );
      a(
        'Fenetre_ElementsProgramme.HintTitreSaisiPar',
        "Auteur du chapitre ou de l'élément",
      );
      a(
        'Fenetre_ElementsProgramme.ConfirmSupprElt',
        'Etes-vous sûr de vouloir supprimer cet élément ?',
      );
      a(
        'Fenetre_ElementsProgramme.ConfirmSupprElts',
        'Etes-vous sûr de vouloir supprimer ces éléments ?',
      );
      a(
        'Fenetre_ElementsProgramme.HintTitreOccurence',
        'Nombre de cours auxquels cet élément a été affecté (%s / année scolaire)',
      );
      a(
        'Fenetre_ElementsProgramme.HintLigneOccurence',
        "Cet élément a été travaillé dans %d cours pendant %s, et %d fois dans l'année scolaire",
      );
      a(
        'Fenetre_ElementsProgramme.SuppressionImpossible',
        'Les éléments suivants ne peuvent pas être supprimés :',
      );
      a(
        'Fenetre_ElementsProgramme.modificationLibelleConfirmation',
        'Cet élément du programme est déjà affecté à des cahiers de textes et des bulletins.\nToute modification sera répercutée dans ces cahiers de textes et bulletins. Voulez-vous continuer ?',
      );
      a(
        'Fenetre_ElementsProgramme.ModificationImpossibleBulletinCloture',
        'Vous ne pouvez pas modifier cet élément du programme car il est affecté à des bulletins clôturés',
      );
      a(
        'Fenetre_ElementsProgramme.ElementUtilisesParDAutres',
        "Cet élément est utilisé dans des cahiers de textes ou des bulletins d'autres professeurs",
      );
      a(
        'Fenetre_ElementsProgramme.LimitNBEltProgrammeTravailles',
        "Dans ce bulletin, le nombre d'éléments du programme à saisir dans chaque matière est limité à :",
      );
      a(
        'Fenetre_ElementsProgramme.LimiteNBEltProgrammeTravaillesDepassee',
        "Attention, le nombre d'éléments du programme autorisés est dépassé pour ce bulletin (max %s)",
      );
      a('Fenetre_ElementsProgramme.Illimite', 'illimité');
      a(
        'Fenetre_ElementsProgramme.NombreLimiteAtteint',
        "Le nombre d'éléments de programmes travaillés est limité à %s dans ce bulletin.",
      );
      a(
        'Fenetre_ElementsProgramme.AffecterA',
        "Affecter à d'autres classes/groupes",
      );
      a(
        'Fenetre_ElementsProgramme.SuppressionEltsTravilles',
        'Les éléments du programme déjà saisis dans les classes sélectionnées seront remplacés.\nVoulez-vous continuer ?',
      );
      a(
        'Fenetre_ElementsProgramme.TitreSelectionElts',
        'Sélection des classes/groupes pour affectation',
      );
      a(
        'Fenetre_ElementsProgramme.AucuneClasseSimilaireTrouvee',
        'Ces éléments ne peuvent être affectés à aucune autre classe de même niveau dans cette période.',
      );
      a(
        'Fenetre_ElementsProgramme.OrdonnerElements',
        'Ordonner les éléments saisis',
      );
      a(
        'Fenetre_OrdonnerElementsProgramme.Titre',
        'Ordre des éléments du programme travaillés',
      );
      a(
        'Fenetre_OrdonnerElementsProgramme.HintBoutonOuvertureFenetre',
        'Ordonner les éléments du programme travaillés',
      );
      a(
        'Fenetre_OrdonnerElementsProgramme.HintBoutonOrdonnerParOccurenceCDT',
        'Ordonner automatiquement les éléments du programme du plus travaillé au moins travaillé',
      );
      a('FicheBrevet.titre.DomainesSocle', 'Domaines du socle commun');
      a('FicheBrevet.titre.Maitrise', 'Maîtrise');
      a('FicheBrevet.titre.Points', 'Points');
      a('FicheBrevet.titre.Bareme', 'Barème');
      a('FicheBrevet.titre.ControleFinal', 'Contrôle final');
      a('FicheBrevet.titre.Brevet', 'Brevet');
      a('FicheBrevet.EnseignementsComplements', 'Enseignement de complément');
      a('FicheBrevet.AppreciationGenerale', 'Appréciation générale');
      a('FicheBrevet.AvisChefEtablissement', "Avis du chef d'établissement");
      a('FicheBrevet.Recu', 'Reçu');
      a('FicheBrevet.Ajourne', 'Ajourné');
      a('FicheBrevet.TotalDesPoints', 'Total des points');
      a('FicheBrevet.ficheBrevet', 'Fiche brevet');
      a('FicheBrevet.ControleContinu', 'Contrôle continu');
      a(
        'FicheBrevet.EnseignementComplement.LangueEtCultureRegionales',
        'Langue et culture régionales',
      );
      a(
        'FicheBrevet.EnseignementComplement.LangueEtCultureDeLAntiquite',
        "Langue et culture de l'Antiquité",
      );
      a(
        'FicheBrevet.EnseignementComplement.DecouverteProfessionnelle',
        'Découverte professionnelle',
      );
      a(
        'FicheBrevet.EnseignementComplement.LangueDesSignes',
        'Langue des signes française',
      );
      a(
        'FicheBrevet.EnseignementComplement.LangueVivanteEtrangere',
        'Langue vivante étrangère',
      );
      a(
        'FicheBrevet.EnseignementComplement.LangueEtCultureEuropeenne',
        'Langues et cultures européennes',
      );
      a('FicheBrevet.EnseignementComplement.ChantChoral', 'Chant choral');
      a('FicheBrevet.Objectifs', 'Objectifs');
      a(
        'FicheBrevet.PointsEnseignementComplement.ObjectifsNonAtteint',
        'Objectifs non atteints',
      );
      a(
        'FicheBrevet.PointsEnseignementComplement.ObjectifsAtteints',
        'Objectifs atteints',
      );
      a(
        'FicheBrevet.PointsEnseignementComplement.ObjectifsDepasses',
        'Objectifs dépassés',
      );
      a('FicheBrevet.PointsEnseignementComplement.NonAtteint', 'Non atteints');
      a('FicheBrevet.PointsEnseignementComplement.Atteints', 'Atteints');
      a('FicheBrevet.PointsEnseignementComplement.Depasses', 'Dépassés');
      a('FicheBrevet.MentionBrevet.AssezBien', 'Assez bien');
      a('FicheBrevet.MentionBrevet.Bien', 'Bien');
      a('FicheBrevet.MentionBrevet.TresBien', 'Très bien');
      a('FicheBrevet.CFG.obtenue', 'Certificat : obtenu');
      a('FicheBrevet.CFG.nonObtenue', 'Certificat : non obtenu');
      a(
        'FicheBrevet.certificatDeFormationGenerale',
        'Certificat de formation générale',
      );
      a('FicheBrevet.onglet.titreOngletBrevet', 'Brevet');
      a('FicheBrevet.onglet.libelleLongBrevet', 'Fiche brevet');
      a('FicheBrevet.onglet.titreOngletCFG', 'CFG');
      a(
        'FicheBrevet.onglet.libelleLongCFG',
        'Certificat de formation générale',
      );
      a('Appreciations.TitreColCategorie', 'Catégories');
      a('Appreciations.TitreColAppreciation', 'Appréciation');
      a('Appreciations.ListeCategories', 'Liste des catégories');
      a('Appreciations.ListeAppreciations', 'Liste des appréciations');
      a('Appreciations.LigneCreationCategorie', 'Créer une catégorie');
      a('Appreciations.LigneCreationAppreciation', 'Créer une appréciation');
      a(
        'Appreciations.NePasUtiliserAssistant',
        "Ne pas utiliser l'assistant de saisie",
      );
      a('Appreciations.PasserEnSaisie', 'Passer en saisie');
      a(
        'Appreciations.ActiverAssistantSaisie',
        "Activer l'assistant de saisie",
      );
      a(
        'Appreciations.DesactiverAssistantSaisie',
        "Désactiver l'assistant de saisie",
      );
      a(
        'Appreciations.AssistantSaisie',
        'Assistant de saisie des appréciations',
      );
      a(
        'Appreciations.MsgSuppressionApprecInterdit',
        "Vous n'êtes pas autorisé à supprimer cette appréciation !",
      );
      a(
        'Appreciations.MsgSuppressionCategInterdit',
        "Vous n'êtes pas autorisé à supprimer cette catégorie !",
      );
      a(
        'Appreciations.MsgSupprCategXAppr',
        'Cette catégorie contient des appréciations !',
      );
      a(
        'Appreciations.MsgSupprCategXApprDetail',
        'Sa suppression va entraîner la suppression des %d appréciations qui la composent.',
      );
      a(
        'Appreciations.MsgSupprCategAppr',
        'Cette catégorie contient une appréciation !',
      );
      a(
        'Appreciations.MsgSupprCategApprDetail',
        "Sa suppression va entraîner la suppression de l'appréciation qui la compose.",
      );
      a('Appreciations.MsgConfirmSuppr', 'Confirmez-vous sa suppression ?');
      a(
        'Appreciations.MsgConfirmSupprDirect',
        'Voulez-vous supprimer la catégorie sélectionnée ?',
      );
      a('Appreciations.SelectionnerTypeAppr', 'Sélectionner');
      a(
        'Appreciations.SelectionnerCategorie',
        "Sélectionnez une catégorie d'appréciations",
      );
      a(
        'Appreciations.TitreAss_Brevet',
        'Assistant de saisie des appréciations des bilans et du livret scolaire',
      );
      a(
        'Appreciations.TitreAss_Bulletin',
        'Assistant de saisie des appréciations du bulletin',
      );
      a(
        'Appreciations.TitreAss_Releve',
        'Assistant de saisie des appréciations du relevé de notes',
      );
      a('Appreciations.ApprA', 'Appréciation A');
      a('Appreciations.ApprB', 'Appréciation B');
      a('Appreciations.ApprC', 'Appréciation C');
      a('Appreciations.CommA', 'Commentaire A');
      a('Appreciations.CommB', 'Commentaire B');
      a('Appreciations.CommC', 'Commentaire C');
      a('Appreciations.CPE', 'CPE');
      a('Appreciations.Annuelle', 'Bilan / fiche brevet');
      a('Appreciations.Mentions', 'Mentions');
      a('Appreciations.SaisieMentions', 'Saisie des mentions');
      a('Appreciations.HintAucuneMention', 'Aucune mention');
      a(
        'Appreciations.HintImprimeeDansLesDocuments',
        'Mention imprimée dans les bulletins et publiée dans les espaces parents et élèves',
      );
      a(
        'Appreciations.HintNonImprimeeDansLesDocuments',
        'Mention non imprimée dans les bulletins élèves et non publiée dans les espaces parents et élèves',
      );
      a('Appreciations.titreMsgDepasseTailleMax', 'Affectation impossible');
      a(
        'Appreciations.msgDepasseTailleMax',
        "L'appréciation sélectionnée dépasse le nombre de caractères maximum autorisés (%d).",
      );
      a(
        'Appreciations.msgSaisieAvisConfidentiels',
        "Les avis saisis sont réservés à l'équipe éducative, ils ne seront en aucun cas publiés aux parents ou aux élèves",
      );
      a('EDT.EnStage', 'En stage');
      a('EDT.Exclu', 'exclu');
      a('EDT.WAI.Exclu', 'Exclusion');
      a('EDT.MC', 'M.C.');
      a('EDT.WAI.MC', 'mesure conservatoire');
      a('EDT.WAI.NonTravaille', 'Non travaillé');
      a('EDT.WAI.Recreation_SS', '%s : %s (Récréation)');
      a('EDT.WAI.DemiPension_S', 'Demi-pension : %s');
      a('EDT.WAI.HeureFinAM_S', 'Heure de fin de matinée : %s');
      a('EDT.WAI.HeureDebutPM_S', "Heure de debut d'après-midi : %s");
      a('EDT.WAI.Absences_S', 'Absences : %s');
      a('EDT.WAI.TitreJournee', "Organisation d'une journée");
      a('EDT.WAI.DebutJournee_S', 'Début de la journée : %s');
      a('EDT.WAI.FinJournee_S', 'Fin de la journée : %s');
      a('EDT.Cours', 'Cours');
      a('EDT.DetailCours', 'Afficher le détail des cours');
      a('EDT.AfficherCoursAnnules', 'Afficher les cours annulés');
      a('EDT.MasquerCoursAnnules', 'Masquer les cours annulés');
      a('EDT.AfficherCoursPrevus', 'Afficher les cours prévus');
      a('EDT.MasquerCoursPrevus', 'Masquer les cours prévus');
      a('EDT.AfficherListeEleves', 'Afficher la liste des élèves');
      a('EDT.MasquerListeEleves', 'Masquer la liste des élèves');
      a('EDT.AfficherPhotoEleves', 'Afficher la photo des élèves');
      a('EDT.MasquerPhotoEleves', 'Masquer la photo des élèves');
      a('EDT.AfficherMemo', 'Afficher le mémo');
      a('EDT.AfficherCDT', 'Afficher le cahier de textes');
      a('EDT.MemoPublic', 'Mémo public');
      a('EDT.MemoAdministratif', 'Mémo administratif');
      a('EDT.WAI.CoursDuDeA_SSS', 'Cours du %s de %s à %s');
      a('EDT.WAI.avecCDTpublie', 'Avec cahier de textes publié');
      a('EDT.WAI.avecCDT', 'Avec cahier de textes');
      a('EDT.coursMultipleDuDeA', '%s cours du %s de %s à %s');
      a('EDT.coursMultipleEntreEt', '%s séances entre %s et %s');
      a('EDT.seancesDifferentes', '%s séances différentes');
      a('EDT.AppelFait', "L'appel a été effectué.");
      a('EDT.AppelNonFait', "L'appel n'a pas été effectué.");
      a(
        'EDT.AppelVerrouNonFait',
        "L'appel n'a pas été fait mais la feuille d'appel n'est plus modifiable.",
      );
      a('EDT.HintImageGAEV', 'Groupes à effectif variable');
      a(
        'EDT.HintImageGAEVMixte',
        'Groupes dont certaines parties sont à effectif variable',
      );
      a(
        'EDT.EDTconsultableDuAu',
        "L'emploi du temps sera consultable du %0:s au %1:s",
      );
      a('EDT.consultableDuAu', 'consultable du %0:s au %1:s');
      a('EDT.EDTNonConsultable', "L'emploi du temps n'est pas consultable");
      a('EDT.ParJour', 'Par jour');
      a('EDT.OngletParJour', 'Onglet par jour');
      a('EDT.ParSemaine', 'Par semaine');
      a('EDT.PasDeCours', 'Pas de cours');
      a('EDT.PauseDejeuner', 'Pause Déjeuner');
      a('EDT.CoursVerrouille', 'Le cours a été verrouillé');
      a(
        'EDT.ElevesGAEVChangent',
        "Les élèves peuvent changer de groupe d'une semaine sur l'autre",
      );
      a(
        'EDT.ElevesGAEVMixteChangent',
        "Les élèves des parties à effectif variable de ce groupe peuvent changer d'une semaine sur l'autre",
      );
      a('EDT.HintImageCoEnseignement', 'Co-Enseignement');
      a('EDT.ElevesDetaches', 'Élèves détachés');
      a('EDT.EleveAbsent', 'Élève absent');
      a('EDT.EleveAbsentAPartirDe', 'Élève absent à partir de %s');
      a('EDT.EleveAbsentJusqua', "Élève absent jusqu'à %s");
      a('EDT.PresidentConseil', 'Président');
      a('EDT.ProfPrincipalConseil', 'Professeur Principal');
      a('EDT.ElevesConseil', 'Élèves délégués');
      a('EDT.ResponsablesConseil', 'Responsables délégués');
      a('EDT.PersonnelsConseil', 'Autres Personnels');
      a(
        'EDT.ParticipantsDontIndipensable_DD',
        '%d participants dont %d indispensables',
      );
      a('EDT.ParticipantIndispensable', 'participation indispensable');
      a('EDT.RSurImageRemplacantDeBlocUnSeulCar', 'R');
      a('EDT.AbsRess.SortiePedagogique', 'Activité pédagogique');
      a('EDT.AbsRess.Motif', 'Motif');
      a('EDT.AbsRess.Date', 'Date');
      a('EDT.AbsRess.Duree', 'Duree');
      a('EDT.AbsRess.Accompagnateurs', 'Accompagnateurs');
      a('EDT.AbsRess.TitreMemoAbsence', 'Mémo :');
      a(
        'EDT.Pied.HintPiedRessLibres',
        'Nombre de ressources entièrement libres par séquence.',
      );
      a(
        'EDT.Pied.SelectionnerRessLibres',
        'Sélectionner les ressources libres',
      );
      a('EDT.Exclusion.Classe', 'Exclusion de la classe');
      a('EDT.Exclusion.Etablissement', "Exclusion de l'établissement");
      a('EDT.Exclusion.DemiPension', 'Exclusion de la demi-pension');
      a('EDT.AucunEleve', 'Aucun élève');
      a(
        'EDT.HintAucunEleve',
        'Aucun élève participant à cette séance de cours',
      );
      a('EDT.MemoAbsence', "Mémo lié à l'absence");
      a('EDT.MemoAbsenceClasse', "Mémo lié à l'absence de la classe");
      a('Absence.AucuneAbsence', 'Aucune absence depuis le %s');
      a('Absence.AucunRetard', 'Aucun retard depuis le %s');
      a('Absence.AucuneExclusion', 'Aucune exclusion depuis le %s');
      a('Absence.AucuneInfirmerie', 'Aucun passage infirmerie depuis le %s');
      a('Absence.AucunePunition', 'Aucune punition depuis le %s');
      a('Absence.AucuneDispense', 'Aucune dispense depuis le %s');
      a(
        'Absence.AucunDefautDeCarnet',
        'Aucun défaut de carnet/carte depuis le %s',
      );
      a('Absence.AucuneObservationParents', 'Aucune observation depuis le %s');
      a(
        'Absence.AucunEncouragement',
        'Aucun encouragement/valorisation depuis le %s',
      );
      a('Absence.AucuneObservationAutres', 'Aucun "%s" depuis le %s');
      a('Absence.TitreListeEvnmts', '%s depuis le %s');
      a('Absence.TitreAbsences', 'Absences');
      a('Absence.TitreRetards', 'Retards');
      a('Absence.TitreExclusions', 'Exclusions');
      a('Absence.TitreInfirmeries', 'Infirmerie');
      a('Absence.TitrePunitions', 'Punitions');
      a('Absence.CoursManque', 'cours manqué');
      a('Absence.CoursManques', 'cours manqués');
      a('Absence.CoursManqueCours', '1 cours de "%s" manqué depuis le %s');
      a('Absence.CoursManquesCours', '%d cours de "%s" manqués depuis le %s');
      a('Absence.RetardCours', '1 retard pour le cours de %s depuis le %s');
      a('Absence.RetardsCours', '%d retards pour le cours de %s depuis le %s');
      a(
        'Absence.ExclusionCours',
        '1 exclusion pour le cours de %s depuis le %s',
      );
      a(
        'Absence.ExclusionsCours',
        '%d exclusions pour le cours de %s depuis le %s',
      );
      a(
        'Absence.InfirmerieCours',
        "1 passage à l'infirmerie pour le cours de %s depuis le %s",
      );
      a(
        'Absence.InfirmeriesCours',
        "%d passages à l'infirmerie pour le cours de %s depuis le %s",
      );
      a('Absence.PunitionCours', '1 punition pour le cours de %s depuis le %s');
      a(
        'Absence.PunitionsCours',
        '%d punitions pour le cours de %s depuis le %s',
      );
      a('Absence.ObservationCours', '1 "%s" pour le cours de %s depuis le %s');
      a(
        'Absence.ObservationsCours',
        '%s "%s" pour le cours de %s depuis le %s',
      );
      a('Absence.DefautDeCarnetCours', '%d "%s" depuis le %s');
      a('Absence.AbsenceDuAu', 'Absence du %s au %s');
      a('Absence.AbsenceLeDeA', 'Absence le %s de %s à %s');
      a('Absence.DispenseDuAu', 'Dispense du %s au %s');
      a('Absence.DispenseLeDeA', 'Dispense le %s de %s à %s');
      a('Absence.ALaMaisonDuAu', 'Enseignement à la maison du %s au %s');
      a('Absence.ALaMaisonLeDeA', 'Enseignement à la maison le %s de %s à %s');
      a(
        'Absence.DispensePresenceEnCoursObligatoire',
        'Présence en cours obligatoire',
      );
      a('Absence.AbsenceOuverte', 'Absence ouverte à partir du %s');
      a('Absence.Absence', 'absence');
      a('Absence.Absences', 'absences');
      a('Absence.RetardDe', 'Retard de %d min');
      a('Absence.Retard', 'retard');
      a('Absence.Retards', 'retards');
      a('Absence.Sanction', 'sanction');
      a('Absence.Sanctions', 'Sanctions');
      a('Absence.MesureConservatoire', 'mesure conservatoire');
      a('Absence.MesuresConservatoires', 'mesures conservatoires');
      a('Absence.Commission', 'Commission');
      a('Absence.Commissions', 'Commissions');
      a('Absence.Exclusion', 'exclusion');
      a('Absence.Exclusions', 'exclusions');
      a('Absence.PsgInfirmerie', 'Passage infirmerie de %s à %s');
      a('Absence.Infirmerie', "passage à l'infirmerie");
      a('Absence.Infirmeries', "Passages à l'infirmerie");
      a('Absence.PunitionProgrammeeLe', 'Cette punition est programmée le %s');
      a('Absence.Punition', 'punition');
      a('Absence.Punitions', 'punitions');
      a('Absence.Observation', 'observation');
      a('Absence.Observations', 'observations');
      a('Absence.DispenseCour', 'dispense');
      a('Absence.DispensesCour', 'dispenses');
      a('Absence.DispenseCours', '1 dispense pour le cours de %s depuis le %s');
      a(
        'Absence.DispensesCours',
        '%d dispenses pour le cours de %s depuis le %s',
      );
      a('Absence.minute', 'min');
      a('Absence.Nature', 'Nature');
      a('Absence.Depart', 'Départ');
      a('Absence.Retour', 'Retour');
      a('Absence.Autres', 'Autres');
      a('Absence.EleveEnStage', '1 élève en stage');
      a('Absence.ElevesEnStage', '%d élèves en stage');
      a('Absence.TousLesElevesEnStage', 'Tous les élèves sont en stage');
      a('Absence.AucunEleve', 'Aucun élève dans le cours sélectionné');
      a(
        'Absence.FeuilleDAppel_SaisieImpossibleNonOuvre',
        'La saisie des absences et retards est impossible car le jour de saisie est non ouvré.',
      );
      a(
        'Absence.MFicheFeuilleAppel',
        '{"titre":" Comment renseigner la feuille d\'appel ?","html":{"_T":23,"V":"<p><span style=\\\"font-family: Arial; font-size: 12px;\\\">1. S&eacute;lectionnez votre cours ou &agrave; d&eacute;faut d&eacute;finissez votre cr&eacute;neau horaire en d&eacute;pla&ccedil;ant les curseurs sur les horaires de votre choix.</span></p><div style=\\\"font-family: Arial; margin-left: 0px; margin-right: 0px; font-size: 13px;\\\"><span style=\\\"font-family: Arial; font-size: 12px;\\\">2. Choisissez la nature de l\'&eacute;v&egrave;nement &agrave; saisir : <span style=\\\"color: #888888;\\\"><em><strong>Absence</strong></em></span>, <strong><em><span style=\\\"color: #888888;\\\">Retard</span></em></strong>, <span style=\\\"color: #888888;\\\"><em><strong>Infirmerie</strong></em></span> ou <span style=\\\"color: #888888;\\\"><em><strong>Exclusion de cours</strong></em></span>.</span></div><div style=\\\"font-family: Arial; margin-left: 0px; margin-right: 0px; font-size: 13px;\\\"><span style=\\\"font-family: Arial; font-size: 8px;\\\">&nbsp;</span></div><div style=\\\"margin-left: 0px; margin-right: 0px;\\\"><span style=\\\"font-family: Arial; font-size: 12px;\\\">3. Cochez les &eacute;l&egrave;ves concern&eacute;s.<br />Vous pouvez </span><span style=\\\"font-family: Arial; font-size: 12px;\\\">utilisez les fl&egrave;ches haut et bas pour naviguer dans la liste des &eacute;l&egrave;ves et la fl&egrave;che droite, le \\\"+\\\" ou la barre d\'espace pour ajouter un &eacute;v&egrave;nement.</span></div><div style=\\\"font-family: Arial; margin-left: 0px; margin-right: 0px; font-size: 13px;\\\"><span style=\\\"font-family: Arial; font-size: 12px;\\\">&nbsp;</span></div><div style=\\\"margin-left: 0px; margin-right: 0px;\\\"><span style=\\\"font-family: Arial; font-size: 12px;\\\">Vous pouvez aussi saisir en dehors du cr&eacute;neau en </span><span style=\\\"font-family: Arial; font-size: 12px;\\\">cliquant directement dans le pas horaire sur la ligne de l\'&eacute;l&egrave;ve concern&eacute;.</span></div>"},"width":415,"height":198,"type":4,"boutons":{"_T":18,"V":1024}}',
      );
      a('Absence.TimeSep', 'h');
      a('Absence.ListeEleves', 'Élèves');
      a('Absence.ListeType', 'Type');
      a('Absence.ListeMotif', 'Motif');
      a('Absence.ListeDateProgrammation', 'Programmée le');
      a('Absence.ListeDateRealisation', 'Réalisée le');
      a('Absence.HintFermerAbsence', "Cliquez pour fermer l'absence");
      a('Absence.HintOuvrirAbsence', "Cliquez pour ouvrir l'absence");
      a(
        'Absence.HintBorne',
        'Glissez-déposez la borne sur le pas horaire de votre choix',
      );
      a('Absence.HeureDepart', 'Heure de départ');
      a('Absence.HeureRetour', 'Heure de retour');
      a('Absence.Commentaire', 'Commentaire');
      a(
        'Absence.TailleCommentaire',
        'Le commentaire ne peut dépasser 80 caractères.',
      );
      a('Absence.AccompagnePar', 'Accompagné par');
      a('Absence.HintBoutonVoirPunition', 'Voir la liste des punitions');
      a('Absence.DispenseAbbr', 'Disp.');
      a('Absence.Coche', 'Coché');
      a('Absence.NonCoche', 'Non coché');
      a('AbsenceVS.ProfPrincipal', 'Prof. principal');
      a('AbsenceVS.observationNonLue', 'observation non lue');
      a('AbsenceVS.observationLue', 'observation lue');
      a('AbsenceVS.encouragementNonLu', 'encouragement/valorisation non lu');
      a('AbsenceVS.observation', 'observation');
      a('AbsenceVS.observations', 'observations');
      a('AbsenceVS.encouragement', 'encouragement/valorisation');
      a('AbsenceVS.encouragements', 'encouragements/valorisations');
      a('AbsenceVS.defautDeCarnet', 'Défaut de carnet/carte');
      a('AbsenceVS.defautsDeCarnet', 'Défauts de carnet/carte');
      a('AbsenceVS.autreObservation', 'Autre évènement');
      a('AbsenceVS.autresObservations', 'Autres évènements');
      a('AbsenceVS.absence', 'absence');
      a('AbsenceVS.absences', 'absences');
      a('AbsenceVS.absenceEnCours', 'absence aux cours');
      a('AbsenceVS.absencesEnCours', 'absences aux cours');
      a('AbsenceVS.absenceCoursJust', 'Absence justifiée');
      a('AbsenceVS.absenceCoursNonJust', 'absence non justifiée');
      a('AbsenceVS.absencesCoursJust', 'Absences justifiées');
      a('AbsenceVS.absencesCoursNonJust', 'Absences non justifiées');
      a('AbsenceVS.retardJust', 'Retard justifié');
      a('AbsenceVS.retardNonJust', 'Retard non justifié');
      a('AbsenceVS.retardsJust', 'Retards justifiés');
      a('AbsenceVS.retardsNonJust', 'Retards non justifiés');
      a('AbsenceVS.retard', 'retard');
      a('AbsenceVS.retards', 'retards');
      a('AbsenceVS.retardInternat', "Retard à l'internat");
      a('AbsenceVS.retardsInternat', "Retards à l'internat");
      a('AbsenceVS.absenceRepas', 'absence repas');
      a('AbsenceVS.absencesRepas', 'Absences repas');
      a('AbsenceVS.absenceInternat', "absence à l'internat");
      a('AbsenceVS.absencesInternat', "Absences à l'internat");
      a('AbsenceVS.punition', 'punition');
      a('AbsenceVS.punitions', 'punitions');
      a('AbsenceVS.Dispense', 'dispense');
      a('AbsenceVS.Dispenses', 'dispenses');
      a('AbsenceVS.sanction', 'sanction');
      a('AbsenceVS.sanctions', 'Sanctions');
      a('AbsenceVS.commission', 'Commission');
      a('AbsenceVS.commissions', 'Commissions');
      a('AbsenceVS.infirmerie', "passage à l'infirmerie");
      a('AbsenceVS.infirmeries', "Passages à l'infirmerie");
      a('AbsenceVS.absencesRecapJust', '1/2j absence justifiée');
      a('AbsenceVS.absencesRecapNonJust', '1/2j absence non justifiée');
      a('AbsenceVS.incidentPunition', 'Incident lié aux punitions');
      a('AbsenceVS.aucuneObservation', 'aucune observation');
      a('AbsenceVS.aucunEncouragement', 'aucun encouragement/valorisation');
      a('AbsenceVS.aucunDefautCarnet', 'aucun défaut de carnet/carte');
      a('AbsenceVS.aucuneAutreObservation', 'aucun autre évènement');
      a('AbsenceVS.aucuneAbsence', 'aucune absence');
      a('AbsenceVS.aucuneAbsenceRepas', 'aucune absence repas');
      a('AbsenceVS.aucuneAbsenceInternat', "aucune absence à l'internat");
      a('AbsenceVS.aucunRetard', 'aucun retard');
      a('AbsenceVS.aucunRetardInternat', "aucun retard à l'internat");
      a('AbsenceVS.aucuneCommission', 'aucune commission');
      a('AbsenceVS.aucuneDispense', 'aucune dispense');
      a('AbsenceVS.aucunInfirmerie', "aucun passage à l'infirmerie");
      a('AbsenceVS.aucunIncident', 'aucun incident');
      a('AbsenceVS.aucunePunition', 'aucune punition');
      a('AbsenceVS.aucuneSanction', 'aucune sanction');
      a('AbsenceVS.aucuneMesure', 'aucune mesure conservatoire');
      a('AbsenceVS.enAttenteDeDecision', 'En attente de décision');
      a('AbsenceVS.travailAFaire', 'Travail à faire');
      a(
        'AbsenceVS.accuseDeReception',
        "J'ai pris connaissance de cette punition",
      );
      a('AbsenceVS.ajouterUnEleve', 'Ajouter un élève');
      a('AbsenceVS.SuppressionEleve', "Supprimer l'élève du cours");
      a(
        'AbsenceVS.ConfirmationSuppressionEleve',
        "Etes-vous sur de vouloir supprimer l'élève %s du cours ?",
      );
      a('AbsenceVS.ARegulariser', 'Evènements à régulariser');
      a('AbsenceVS.Autres', 'Autres évènements');
      a('AbsenceVS.Consulter', 'Consulter');
      a('AbsenceVS.AbsenceDu', 'Absence du %s');
      a('AbsenceVS.RetardDu', 'Retard du %s');
      a('AbsenceVS.absenceNonjustifiees', 'non justifiée(s) : %d');
      a('AbsenceVS.retardNonjustifies', 'non justifié(s) : %d');
      a('AbsenceVS.dispenseEnAttente', 'en attente de traitement : %d');
      a('AbsenceVS.obs_Encouragements_NonLus', 'nouveau : %d');
      a('AbsenceVS.Dont1AbsenceNonJustifiee', 'dont %d non justifiée');
      a('AbsenceVS.DontXAbsenceNonJustifiee', 'dont %d non justifiées');
      a('AbsenceVS.exclusions', 'Exclusions de cours');
      a('AbsenceVS.exclusion', 'exclusion de cours');
      a('AbsenceVS.exclusion2', 'exclusion');
      a('AbsenceVS.retenue', 'Retenue');
      a('AbsenceVS.devoirSuppl', 'Devoir supplémentaire');
      a('AbsenceVS.punitionAutre', 'Autre punition');
      a('AbsenceVS.mesureConservatoire', 'mesure conservatoire');
      a('AbsenceVS.mesuresConservatoires', 'mesures conservatoires');
      a('AbsenceVS.incident', 'Incident');
      a('AbsenceVS.incidents', 'Incidents');
      a('AbsenceVS.SelectionnerIncidents', 'Sélectionner des incidents');
      a('AbsenceVS.IncidentSignaleLe', 'Incident signalé le %s à %s');
      a('AbsenceVS.LieAPunition', 'Lié à une punition');
      a('AbsenceVS.LieASanction', 'Lié à une sanction');
      a('AbsenceVS.LieAMesureConservatoire', 'Lié à une mesure conservatoire');
      a('AbsenceVS.SansMesureDiciplinaire', 'Sans mesure disciplinaire');
      a('AbsenceVS.avecSursis', 'avec sursis');
      a('AbsenceVS.heureCoursManque', '#1 de cours manqué');
      a('AbsenceVS.heuresCoursManquees', '#1 de cours manquées');
      a('AbsenceVS.demiJournee', '#1 demi-journée bulletin');
      a('AbsenceVS.demiJournees', '#1 demi-journées bulletin');
      a('AbsenceVS.demiJourneeNJ', '%d demi-journée bulletin non justifiée');
      a('AbsenceVS.demiJourneesNJ', '%d demi-journées bulletin non justifiée');
      a('AbsenceVS.nonProgramme', 'Non programmé(e)');
      a('AbsenceVS.demandePar', 'Punition demandée par #1');
      a('AbsenceVS.decidePar', 'Sanction décidée par #1');
      a('AbsenceVS.demandeeLePar', 'Demandé(e) le %s par %s');
      a('AbsenceVS.decideLePar', 'Décidé le %s par %s');
      a(
        'AbsenceVS.prisConnaissanceObservation',
        "J'ai pris connaissance de cette observation",
      );
      a(
        'AbsenceVS.prisConnaissanceEncouragement',
        "J'ai pris connaissance de cet encouragement/valorisation",
      );
      a('AbsenceVS.minutes', 'min.');
      a('AbsenceVS.aRendreLe', 'à rendre le');
      a('AbsenceVS.JustifierAbsence', 'Justifier une absence');
      a('AbsenceVS.JustifierRetard', 'Justifier un retard');
      a('AbsenceVS.dont', 'dont');
      a('AbsenceVS.jour', 'jour');
      a('AbsenceVS.jours', 'jours');
      a('AbsenceVS.nuit', 'nuit');
      a('AbsenceVS.nuits', 'nuits');
      a('AbsenceVS.heure', 'heure');
      a('AbsenceVS.heures', 'heures');
      a('AbsenceVS.amidi', 'à midi');
      a('AbsenceVS.ausoir', 'au soir');
      a('AbsenceVS.matin', 'matin');
      a('AbsenceVS.apresMidi', 'après-midi');
      a(
        'AbsenceVS.ChoixDJDebut',
        "Choix par demi-journée (début de l'absence)",
      );
      a('AbsenceVS.ChoixDJFin', "Choix par demi-journée (fin de l'absence)");
      a('AbsenceVS.ChoixDateDebut', "Date début de l'absence");
      a('AbsenceVS.ChoixDateFin', "Date fin de l'absence");
      a('AbsenceVS.aPreciser', 'Choisissez une raison');
      a('AbsenceVS.jeJustifie', 'je justifie');
      a('AbsenceVS.saisissezUnCommentaire', 'Saisissez un commentaire');
      a('AbsenceVS.sansRaisonValable', 'non recevable');
      a('AbsenceVS.sansMotif', 'Sans motif');
      a('AbsenceVS.saisissezCommentaire', 'Votre commentaire (max %s c.)');
      a('AbsenceVS.Raison', 'Raison');
      a('AbsenceVS.titres.professeur', 'Professeur');
      a('AbsenceVS.titres.observation', 'observation');
      a('AbsenceVS.titres.motif', 'Motif');
      a('AbsenceVS.titres.interditLAcces', "Interdit l'accès");
      a('AbsenceVS.titres.commentaire', 'Commentaire');
      a('AbsenceVS.titres.symptMedicaux', 'Symptômes médicaux');
      a('AbsenceVS.titres.actesMedicaux', 'Actes médicaux');
      a('AbsenceVS.titres.circonstances', 'Détail des circonstances');
      a('AbsenceVS.titres.demande_le', 'Demandé(e) le');
      a('AbsenceVS.titres.saisiepar', 'Saisie par');
      a('AbsenceVS.titres.RA', 'RA');
      a('AbsenceVS.titres.gravite', 'Gravité');
      a('AbsenceVS.titres.mesureDisciplinaire', 'Nature');
      a('AbsenceVS.titres.details', 'Détails');
      a(
        'AbsenceVS.titres.prisConnaissance',
        "J'ai pris connaissance de cette information",
      );
      a(
        'AbsenceVS.message.prisConnaissanceinfo',
        'Vous avez pris connaissance de cette information',
      );
      a(
        'AbsenceVS.message.accuseDeReception',
        'Vous avez pris connaissance de cette punition',
      );
      a(
        'AbsenceVS.message.ARIncident',
        'Vous avez pris connaissance de cet incident',
      );
      a(
        'AbsenceVS.message.justification',
        'Votre justification est bien envoyée',
      );
      a(
        'AbsenceVS.message.supression',
        "Votre déclaration d'absence a été supprimée",
      );
      a(
        'AbsenceVS.message.confirmerDeclaration',
        "Votre déclaration d'absence a été envoyée",
      );
      a(
        'AbsenceVS.message.demandeTransmise',
        "Votre demande à été transmise à l'établissement",
      );
      a(
        'AbsenceVS.message.demandeSupprimee',
        'Votre demande de dispense a été supprimée',
      );
      a(
        'AbsenceVS.message.previsionAbsenceImpossible',
        "Prévision d'absence impossible",
      );
      a('AbsenceVS.JeSuisInformee', 'Je suis informé(e)');
      a('AbsenceVS.RegleeAdmin', 'Réglée administrativement');
      a('AbsenceVS.NonRegleeAdmin', 'Non réglée administrativement');
      a(
        'AbsenceVS.AbsenceSaisieParVS',
        "L'absence a été saisie par la vie scolaire",
      );
      a(
        'AbsenceVS.AbsenceSaisieParPers',
        "L'absence a été saisie par le personnel %s",
      );
      a(
        'AbsenceVS.AbsenceSaisieParProf',
        "L'absence a été saisie par le professeur %s",
      );
      a(
        'AbsenceVS.RetardSaisiParVS',
        'Le retard a été saisi par la vie scolaire',
      );
      a(
        'AbsenceVS.DispenseSaisieParVS',
        'La dispense a été saisie par la vie scolaire',
      );
      a(
        'AbsenceVS.DispenseLongue',
        "Cette dispense n'est pas restreinte à ce cours, elle ne peut être modifiée dans la feuille d'appel",
      );
      a('AbsenceVS.justificationAccepteLe', 'Justification acceptée le %s');
      a('AbsenceVS.absenceConfirmeeLe', 'Absence confirmée le %s');
      a('AbsenceVS.absenceRefuseeLe', 'Absence refusée le %s');
      a('AbsenceVS.absenceConfirmee', 'Absence confirmée');
      a('AbsenceVS.absenceRefusee', 'Absence refusée');
      a('AbsenceVS.absenceAJustifier', 'Absence à justifier');
      a('AbsenceVS.retardAJustifier', 'Retard à justifier');
      a('AbsenceVS.dispenseValidee', 'Dispense validée');
      a(
        'AbsenceVS.absencePrevueEnAttenteAcceptation',
        'Absence prévue en attente de traitement',
      );
      a(
        'AbsenceVS.absenceEnAttenteAcceptation',
        "Justification d'absence en attente d'acceptation",
      );
      a(
        'AbsenceVS.retardEnAttenteAcceptation',
        "Justification de retard en attente d'acceptation",
      );
      a(
        'AbsenceVS.dispenseEnAttenteAcceptation',
        'Demande de dispense en attente de traitement',
      );
      a('AbsenceVS.mesureconservatoire.aLEtablissement', "à l'établissement");
      a('AbsenceVS.mesureconservatoire.aLaDemiPension', 'à la demi-pension');
      a('AbsenceVS.mesureconservatoire.aLInternat', "à l'internat");
      a(
        'AbsenceVS.SortieEtabAutorisee',
        "est autorisé(e) à ne pas être présent dans l'établissement",
      );
      a(
        'AbsenceVS.AutoriseSortirEtab',
        "%s est autorisé(e) à ne pas être présent dans l'établissement.",
      );
      a('AbsenceVS.AppelFait', 'Appel terminé');
      a('AbsenceVS.ElevesPresents', '%d élèves présents dans la salle');
      a('AbsenceVS.ElevePresent', '1 élève présent dans la salle');
      a('AbsenceVS.AucunElevePresent', 'Aucun élève présent dans la salle');
      a('AbsenceVS.ElevesPresentsSP', '%d élèves présents');
      a('AbsenceVS.ElevePresentSP', '1 élève présent');
      a('AbsenceVS.AucunElevePresentSP', 'Aucun élève présent');
      a(
        'AbsenceVS.CommentaireInfPerdu',
        'Vous avez saisi un commentaire pour ce passage infirmerie. Souhaitez-vous quand même supprimer ce passage infirmerie ?',
      );
      a(
        'AbsenceVS.CommentaireObsPerdu',
        'Vous avez saisi un commentaire pour cette observation. Souhaitez-vous quand même supprimer cette observation ?',
      );
      a(
        'AbsenceVS.InfosPunitionPerdues',
        'Vous avez saisi des informations pour cette punition. Souhaitez-vous quand même supprimer cette punition ?',
      );
      a(
        'AbsenceVS.InfosExclusionPerdues',
        'Vous avez saisi des informations pour cette exclusion. Souhaitez-vous quand même supprimer cette exclusion ?',
      );
      a('AbsenceVS.AjouterPunition', 'Ajouter une punition');
      a('AbsenceVS.ModifierPunition', 'Modifier la punition');
      a('AbsenceVS.SupprimerPunition', 'Supprimer la punition');
      a(
        'AbsenceVS.SupprimerPunitionConfirmation',
        'Confirmez vous la suppression de la punition ?',
      );
      a('AbsenceVS.DecompteDepuis', 'Suivi depuis');
      a(
        'AbsenceVS.SujetMailtoObservation',
        "En regard de l'observation de #1 du #2",
      );
      a('AbsenceVS.PublierParents', "Publier sur l'Espace Parents");
      a(
        'AbsenceVS.PublierParentsEleves',
        'Publier sur les Espaces Parents et Élèves',
      );
      a('AbsenceVS.Depublier', 'Dépublier');
      a(
        'AbsenceVS.AppelCoursAnnule',
        "Vous ne pouvez pas faire l'appel sur un cours annulé",
      );
      a(
        'AbsenceVS.AppelCoursNonUtilisable',
        "Cela nécessite une intervention, dans le logiciel EDT, de la part du gestionnaire de l'emploi du temps. Il doit : <br/>- soit mettre le cours en co-enseignement<br/>- soit sélectionner un mode de répartition dans la précision des cours complexes.",
      );
      a(
        'AbsenceVS.InfirmerieEnDehorsLimite',
        'Horaire en dehors des limites autorisées',
      );
      a(
        'AbsenceVS.InfirmerieHeureSortieSuperieurAHeureEntree',
        "L'heure de retour doit être postérieure à l'heure de départ",
      );
      a('AbsenceVS.traiter', 'Traiter');
      a('AbsenceVS.Accepter', 'Accepter');
      a('AbsenceVS.Refuser', 'Refuser');
      a('AbsenceVS.ObservationLueWebLe', 'Lue par les parents le %s');
      a('AbsenceVS.Hint.NonPublie', 'Non publié');
      a(
        'AbsenceVS.Hint.PublieParentsEleves',
        'Publié automatiquement sur les Espaces Parents et Élèves',
      );
      a(
        'AbsenceVS.Hint.PublieParentsElevesParInfirmerie',
        "Publié sur les Espaces Parents et Élèves selon la décision de l'infirmerie ou de l'administration",
      );
      a(
        'AbsenceVS.Hint.PublieParentsParProfesseur',
        "Publié sur l'Espace Parents selon la décision du professeur",
      );
      a(
        'AbsenceVS.Hint.PublieParentsElevesParProfesseur',
        'Publié sur les Espaces Parents et Élèves selon la décision du professeur',
      );
      a('AbsenceVS.date', 'Date');
      a(
        'AbsenceVS.titreFenetreListePunitions',
        'Punitions du %s données par %s',
      );
      a('AbsenceVS.LegendeFeuilleAppel', "Remplir la feuille d'appel");
      a('AbsenceVS.SaisirPunition', 'Saisir une punition');
      a('AbsenceVS.Liste', 'Liste');
      a(
        'AbsenceVS.SelectionElevePunition',
        "Sélectionnez d'abord l'élève à qui affecter la punition",
      );
      a(
        'AbsenceVS.aucunePunitionClasse',
        'Aucune punition saisie par le professeur pour cette classe',
      );
      a('AbsenceVS.Traduction_PourLeCoursDe', 'pour le cours de');
      a('AbsenceVS.Traduction_PourLeCreneauDe', 'pour le créneau de');
      a(
        'AbsenceVS.msgPasAutorise',
        "Cette absence a été saisie par la vie scolaire, vous n'êtes pas autorisé à la supprimer.",
      );
      a(
        'AbsenceVS.msgAutreProf',
        "Cette absence a été saisie par un autre professeur, vous n'êtes pas autorisé à la supprimer.",
      );
      a(
        'AbsenceVS.msgAutrePersonnel',
        "Cette absence a été saisie par un personnel, vous n'êtes pas autorisé à la supprimer.",
      );
      a(
        'AbsenceVS.msgContenu',
        'Du contenu est associé, confirmez-vous la suppression ?',
      );
      a('AbsenceVS.selectionnerCours', 'Sélectionnez votre cours');
      a('AbsenceVS.appelDu', 'Appel du');
      a(
        'AbsenceVS.hintInfirmerie',
        "clic GAUCHE pour supprimer le passage à l'infirmerie, clic DROIT pour le modifier ou voir le détail.",
      );
      a(
        'AbsenceVS.hintInfirmerieSansSaisieGrille',
        'clic DROIT pour modifier ou voir le détail.',
      );
      a(
        'AbsenceVS.msgConfimation',
        "Confirmez vous la suppression de l'absence saisie par la vie scolaire?",
      );
      a(
        'AbsenceVS.msgEleveRetard',
        "L'élève a déjà un retard sur cet intervalle.",
      );
      a(
        'AbsenceVS.msgEleveAbsenceRetard',
        "L'élève est absent à cette place, le retard ne peut lui être attribué.",
      );
      a(
        'AbsenceVS.msgEleveAbsenceOuverte',
        "L'élève a une absence ouverte, toute action ultérieure est impossible",
      );
      a(
        'AbsenceVS.msgClotureAbsence',
        "Confirmez-vous la clôture de l'absence en cours ?",
      );
      a(
        'AbsenceVS.msgOuvrirAbsence',
        "Voulez-vous ouvrir l'absence débutant le %s à %s",
      );
      a(
        'AbsenceVS.msgImpossibleOuvrirAbsence',
        'Vous ne pouvez pas ouvrir cette absence car elle dépasserait le cadre du cours sélectionné.',
      );
      a(
        'AbsenceVS.msgDispense',
        "L'élève est dispensé sur ce cours, confirmez-vous l'attribution d'une absence?",
      );
      a(
        'AbsenceVS.msgSaisieAbsSurDispenseSansPresence',
        "Cet élève est dispensé et sa présence n'est pas obligatoire en cours : aucune absence ne peut être saisie",
      );
      a(
        'AbsenceVS.msgExclusionTemporaire',
        "Saisie impossible : l'élève est exclu de l'établissement dans cet intervalle.",
      );
      a('AbsenceVS.Eleves', 'Élève(s)');
      a(
        'AbsenceVS.EleveAbsentAuDernierCours',
        'Était absent au dernier cours du professeur avec la même matière',
      );
      a('AbsenceVS.memo', 'Mémo');
      a('AbsenceVS.memosDeLaVS', 'Mémos de la vie scolaire');
      a('AbsenceVS.aucunMemo', 'Aucun mémo');
      a(
        'AbsenceVS.aucunEncouragementValorisation',
        'Aucun encouragement ou valorisation',
      );
      a('AbsenceVS.CreerUnMemo', 'Créer un mémo');
      a(
        'AbsenceVS.CreerUnValorisation',
        'Créer un encouragement ou une valorisation',
      );
      a(
        'AbsenceVS.EncouragerOuValoriserLEleve',
        "Encourager ou valoriser l'élève",
      );
      a('AbsenceVS.VoirLesMemos', 'Voir les mémos');
      a(
        'AbsenceVS.VoirLesValorisations',
        "Consulter les encouragements et valorisations de l'élève",
      );
      a(
        'AbsenceVS.MettreEnEvidenceJusquAu',
        "Mettre en évidence dans la feuille d'appel jusqu'au",
      );
      a(
        'AbsenceVS.ModifierGpeAP',
        "Affecter l'élève à un groupe (AP, devoirs faits, ...)",
      );
      a(
        'AbsenceVS.titreFenetreMemo',
        'Mémos publiés par la vie scolaire de %s',
      );
      a(
        'AbsenceVS.titreFenetreValorisation',
        'Encouragements et valorisations de %s',
      );
      a('AbsenceVS.titreValorisation', 'Encouragement/Valorisation');
      a(
        'AbsenceVS.msgSuppressionMemo',
        'Confirmez-vous la suppression de ce mémo ?',
      );
      a(
        'AbsenceVS.msgSuppressionValorisation',
        'Confirmez-vous la suppression de cet encouragement/valorisation ?',
      );
      a('AbsenceVS.PartageEnseignant', 'Partagé avec les enseignants');
      a(
        'AbsenceVS.PartagePersonnel',
        'Partagé avec tous les personnels administratifs ou de vie scolaire',
      );
      a(
        'AbsenceVS.EleveFaitPartieGAP',
        "l'élève est dans un groupe à effectif variable (AP, devoirs faits)",
      );
      a('AbsenceVS.ExclusionAbr', 'E');
      a('AbsenceVS.InfirmerieAbr', 'I');
      a('AbsenceVS.Recapitulatif', 'Récapitulatif');
      a(
        'AbsenceVS.DispenseAvecComm',
        'Vous avez saisi un commentaire pour cette dispense,',
      );
      a(
        'AbsenceVS.DispenseAvecPJ',
        'Cette dispense comporte au moins une pièce jointe,',
      );
      a(
        'AbsenceVS.DispenseAvecCommPJ',
        'Vous avez saisi un commentaire et cette dispense comporte aussi, au moins une pièce jointe,',
      );
      a(
        'AbsenceVS.ConfimationSuppression',
        'souhaitez-vous quand même la supprimer?',
      );
      a(
        'AbsenceVS.SelectionnerUnMotifAbsence',
        "Sélectionner un motif d'absence",
      );
      a(
        'AbsenceVS.SelectionnerEtJustifierMotifAbsence',
        "Justifier le motif d'absence",
      );
      a(
        'AbsenceVS.SelectionnerUnMotifRetard',
        'Sélectionner un motif de retard',
      );
      a('AbsenceVS.ModifierMotifRetard', 'Modifier le motif du retard');
      a('AbsenceVS.ModifierMotifAbsence', "Modifier le motif de l'absence");
      a(
        'AbsenceVS.comboRessource',
        'Liste déroulante : Choisissez une ressource :',
      );
      a(
        'AbsenceVS.comboEnseignant',
        'Liste déroulante : Choisissez un enseignant :',
      );
      a('AbsenceVS.comboDates', 'Liste déroulante : Choisissez une date:');
      a(
        'AbsenceVS.comboEleveAccInfirmerie',
        "Liste déroulante : sélectionnez l'élève accompagnateur. Faites attention au mode de lecteur d'écran.",
      );
      a('AbsenceVS.comboPeriode', 'Liste déroulante : Choisissez la periode.');
      a('AbsenceVS.EvtSaisiParVieScolaire', '"%s" saisi par la vie scolaire');
      a('AbsenceVS.EvtSaisiParProfesseur', '"%s" saisi par le professeur (%s)');
      a(
        'AbsenceVS.MFicheFeuilleAppelVS',
        '{"titre":"Fonctionnement de la feuille \\\"Appel et suivi\\\" ?","html":{"_T":23,"V":"<div style=\\\"text-align: left; text-indent: 0px; margin-left: 0px;\\\"><strong><span style=\\\"font-family: Arial; font-size: 12px;\\\">Personnalisation des rubriques</span></strong></div><div style=\\\"text-align: left; text-indent: 0px; margin-left: 0px;\\\"><span style=\\\"font-family: Arial; font-size: 12px;\\\">Vous pouvez choisir d\'ajouter des rubriques facultatives &agrave; votre feuille d\'appel :</span></div><div style=\\\"text-align: left; text-indent: 0px; margin-left: 0px;\\\"><span style=\\\"font-family: Arial; font-size: 12px;\\\">- Dans votre espace enseignant (version Web), depuis la fen&ecirc;tre de param&egrave;tres de choix de rubriques facultatives <img src=\\\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAIAAADZrBkAAAACpklEQVQokXWTy09TURCH+xcRHr29j/N+3HMfvS1IBCIaiCZiUMGQuDAudKFxYUgEBBSjKCjRpWIwbhQBcSmKL2hRXAh1IaEILjC010WBAsHJ5GQyZ76ZSX7nRML9bGZmtqRcKynXFhYW9y2IbEdvp6ZyuVwYhnNzXzu6ekqjemlUH3r4KLuyUihYzmb3YiPPnpdpxqmWtubTZyp0EDVg1IRRA0YNYGLW1d3beb0HED794WMRy66sGBCXaUaFATQL6YDokOiQ6pDqgMQA1kxUoVulmgEI/7W0VJw2cH8oakAdEANRE7NNR5unAWnMwlED3Oi7tWvJO3cHdEBMxCzCLcI3GcRMvJVBLAbwwOCDIra+/pcr30QcEAmItLCorq3vvzfYc7PP9pIWEYBKQKSJeOJATT6fD8MwMptKPX4ybCIKqITMhkxW1dT9Xl0tdE2l0pjbkNmI2YBKA9Hx15OzqVREM1HMwhYRiCnEHcjsju7enRI1NbcgpjB3EFMW5jELayaKxCxsQAKpJMIh0sXCuXjp8jaTz+cPHW7cvgJU6ADHLBxZzGSGn45AbhPbZcqnymPKezU2EYZhLpe73T9ApEuVR5VHpIuY/W1+fjGTiYRhuLb2h9ketT3uBMIJuIpT26utb6isrmO2z514IUmke+78hV0CtF/rJNLlKi7cQLgJ4QbCCYRTiBPCDZjymfLn578XsdW1tda2s1g4VPncDaSXlF5S+knpV0q/UnpJ7gbU9olwJibfFLFUek75SUglk67tJ4UbSDdhe8mCF0YR4UAqT5xs3bXkp89fGo4ef/d++sfC4pWr7fGqg9yJcyfOVbzuSOOLl6Od3b2Nx5qWl7N7P85Om02lMVdEOKNj4xsbGwUlVrfewH+xdHoOc4W5ymR+7lvwD+IxJtGAxBVBAAAAAElFTkSuQmCCAA==\\\" alt=\\\"\\\" width=\\\"17\\\" height=\\\"17\\\" /><br /></span></div><div style=\\\"text-align: left; text-indent: 0px; margin-left: 0px;\\\"><span style=\\\"font-family: Arial; font-size: 12px;\\\">- En mode enseignant, depuis la fen&ecirc;tre de personnalisation des colonnes de la liste <img src=\\\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAARCAYAAAA7bUf6AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAACxMAAAsTAQCanBgAAAIoSURBVDhPpVRNaxNRFD1vZiSTihSqxiS0BAURpaFbwY3rIhgoKAiCIPUDC1WRoFSxlKKxiyzELqRuXHQjddelG/+AkKZJTIO02hqTNolJpulMaGZeb16mNTUDgj3DYea+c7ncd+57w+r6FscBwYytGjf0mh22EIsnMDY+iYFgP+7dvgm/z2srzmB6TeN6bdMO/yAWTyL8dBwulwszb6I44TluK52QuMVhmWYHg+fO4MpQCJpWxeyHj445u5QsbsE0G4glkuLdzlR6CZIkIb6Y6NDaSZ2YMBvbmIxEsbCYEt9NVioVJFNpyLICRTm0t+5ExbKok0YDwf6zeP5iCqFLg/i6lKEuMuDUpSzLKJaKyHxbwalAr+3CfrByIc+JKJTKeDwRoQ6qQpAkmcgog8g53KqKZ+H7ONnnF3o7WGn9FyeK4He5ivlPn5GgbSiKjI2NIvS6AUYPp0Kq6sLYwxEEen0ifxeskFvjxdxPO9yP1ew6Iq/fwjAMEbcKqXgyegd9fo9Ya4KMbXniRL+nB+GRYahut9gWo0kZ9TpeUuHva7m9PKllrLPrTfqOdePR3Rtwu13CnqZPhqFjanoGP7J5kdPqxGH27fQe7caDW1SItgK6adeGLuPihfN4NzsndKk5RqdT+De9PUcwOnwdXYe7UKIBVKqbqGia0Fh2OcOzKxnbon8jX6ri/dw8ynQYr4YGMXA6AJZe+MJzq8t2yv+BTUdfHfB/AuwAD0WjZeLJ2hsAAAAASUVORK5CYII=\\\" alt=\\\"\\\" width=\\\"17\\\" height=\\\"17\\\" />.</span></div><div style=\\\"text-align: left; text-indent: 0px; margin-left: 0px;\\\">&nbsp;</div><div style=\\\"text-align: left; text-indent: 0px; margin-left: 0px;\\\"><div style=\\\"text-align: left; text-indent: 0px; margin-left: 0px;\\\"><div style=\\\"text-align: left; text-indent: 0px; margin-left: 0px;\\\"><span style=\\\"font-family: Arial; font-size: 12px;\\\"><strong>Informations li&eacute;es &agrave; l\'&eacute;l&egrave;ve&nbsp;</strong><strong><br /></strong></span></div><div style=\\\"text-align: left; text-indent: 0px; margin-left: 0px;\\\"><span style=\\\"font-family: Arial; font-size: 12px;\\\"><span style=\\\"color: #ff0000;\\\">Nom de l\'&eacute;l&egrave;ve en rouge</span> : Il &eacute;tait absent &agrave; votre dernier cours<br />Nom de l\'&eacute;l&egrave;ve avec * : en sortie p&eacute;dagogique</span></div><div style=\\\"text-align: left; text-indent: 0px; margin-left: 0px;\\\"><table style=\\\"width: 693px;\\\" border=\\\"0\\\"><tbody><tr><td style=\\\"width: 32px;\\\"><img src=\\\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAQCAYAAADwMZRfAAAA3klEQVQ4ja2T7a2DMAxFjyp2wTswhHdgCJihDJEdPER2CEN4Br8ftJQvFYqeJUtXTnJy5Ti4e7h7eO5DIDhNjfQ+88oHmxBRVOWj5aVVmcojoxlmhlmhAGydaNropAESffbIvRy62jk5DyW5k3uZK9XQtpMlRgpQ/06lKmbYwUItn5tE3uiaRXlpjpA+r/vg5zn153ZP9vEvkGpW0pG9u++kPAes3HfyUAUw2qa9DCpDQ/NcbHb3SLqYwHzlVZin2N1jHvsroCPACrIGfcs1YPeLNTlJv3VD6HOm20ztH5kbMdMs6G7NAAAAAElFTkSuQmCC\\\" /></td><td style=\\\"width: 329px;\\\"><span style=\\\"font-family: Arial; font-size: 12px;\\\"><span style=\\\"font-family: Arial;\\\">&nbsp;l\'&eacute;l&egrave;ve a un engagement <br />&nbsp;pastille orange : d&eacute;l&eacute;gu(e) ; pastille verte : &eacute;co d&eacute;l&eacute;gu&eacute;(e)</span></span></td><td style=\\\"width: 32px;\\\"><img src=\\\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAABVklEQVQ4ja2SMarCQBCGvyevEBsPYLDxAHZiF4y2WwoeIYfYI3iCPYAWdlpvSnMKwRVtREG0sZvXPJfEGN6L+MPAMMN+O/8wSEZaawFEay1VxSNxzgngwzn3HkhERCn19kRfIiK73Q6A+/3Ofr8nCALq9Trtdpt/yxiTs5QNa+3L39M0lTRN89YAUUp5W9lQShUg1lrfz8JqAGEYEoZhblKtNavViiRJcvXj8ejz7Xbr8+8yy4PBgNPpxGKxIIoiX59MJtxuN597kFKKVqvF4XAowMbjMcPhkDiOOZ/Pvt7pdABIkoRGo0G/34fL5SIiItPptHTR2b28Cuec1JrNZpk7ryiK+L25Qi+OY9brNbXnhnPuT/AzaDabFUGVjhDodrssl8si6KHNZlP62FqLtTZXKwVdr9dKk5WCqupjIH/Zo9GI+XwOgDGGXq/38oExhiAIfP7QD5aznTGmm2eeAAAAAElFTkSuQmCC\\\" /></td><td style=\\\"width: 307px;\\\"><span style=\\\"font-family: Arial; font-size: 12px;\\\"><span style=\\\"font-family: Arial;\\\">&nbsp;l\'&eacute;l&egrave;ve a un accompagnant</span></span></td></tr><tr><td style=\\\"width: 32px;\\\"><img src=\\\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAQCAYAAAAbBi9cAAAAj0lEQVQ4Ea2SUQ6AMAhDuf+lMcy8rKtD/dgSAxT6hsbIQycOcbIFRUTWw/EanTgnUTJfAR0waGgU5gJF11nJ71cowY9rWgtgXLZspCA1lY7RZ9BbkJoV6vkvEDDdQjWB1Mb9N3IAtXoknyBEDF1kbok+TNP1ql97X4Yyf0FGfwdCYwNg6Lv4/At3Uz+0Y6AL6M16sPivZNwAAAAASUVORK5CYII=\\\" /></td><td style=\\\"width: 329px;\\\"><span style=\\\"font-family: Arial; font-size: 12px;\\\"><span style=\\\"font-family: Arial;\\\">&nbsp;l\'&eacute;l&egrave;ve dispose d\'un projet d\'accompagnement,<br />&nbsp;une&nbsp; pastille verte pr&eacute;cise qu\'il est d\'ordre m&eacute;dical</span></span></td><td style=\\\"width: 32px;\\\"><img src=\\\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAABEUlEQVQ4ja1SsY2FMAw1p9uCKRjEzOEl2CAoPR1KkQGooaUNZSjThQqxgH+VKHwg93V3T4rkxNbz84sLZmb4B3zlktM0QV3X0DQNbNuWZ+IMACCerutypZxVlOI4jt+PRkQxrqoq3yknd57nONpPeFS0LAv0fR/vbdvmDb9jt9YyIp7MBgAmIt73/f5jcnK11pFEa50d7URkrWUiYkRkY8yl2BjDiMhExNbaZyIhRFSAiBeidFwhxCn3aPYwDB+9BZyIyrKMsRDiUpy+pbWXX/PeR+nvHgQPQ957fz+acw6UUrGBlBLWdYU0L6WMd6UUOOfOisZxvOwMJKama/B+wloUzMxFUTya+AmYGb5D8Fe8AAnw/ymM6/IwAAAAAElFTkSuQmCC\\\" /></td><td style=\\\"width: 307px;\\\"><span style=\\\"font-family: Arial; font-size: 12px;\\\"><span style=\\\"font-family: Arial;\\\">&nbsp;l\'&eacute;l&egrave;ve est inscrit dans un groupe &agrave; effectif variable (accompagnement personnalis&eacute;, devoirs faits,...)</span></span></td></tr><tr><td style=\\\"width: 32px;\\\"><img src=\\\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAARCAYAAADQWvz5AAAA7ElEQVQ4Ec2SsQ3EIAxFGS5jMAMTZIH0qWmzQsp06egyj08P6SNDdDpF18QSAn/s729MsMFKKQNiNmLned5iwojEGG3f9wZzBvOWUrJt2zxkHdGyLBZCaEHXdVUfjDMGAf48z9+JqE41L50En3QcR1XI7q1TBBEVRYQKfJYUcYfv24ewI6Kyb40kfJbIIfnZ2nuI9BaMWbJpYV3X1hpnMKkmFl9vV99IBHqPJ7v+WCVSItVGUr4DSzHsxEgZfpsaoLec8+2v6P9w5025bfwaK9XVNyOfpqkujZ87KSRH1rXm5T85Q/ZSIvX5z/4BflxCDXt331AAAAAASUVORK5CYII=\\\" /></td><td style=\\\"width: 329px;\\\"><span style=\\\"font-family: Arial; font-size: 12px;\\\"><span style=\\\"font-family: Arial;\\\">&nbsp;c\'est l\'anniversaire de l\'&eacute;l&egrave;ve</span></span></td><td style=\\\"width: 32px;\\\"><span style=\\\"font-family: Arial; font-size: 12px;\\\"><span style=\\\"font-family: Arial;\\\"><img src=\\\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAARCAYAAAA7bUf6AAAA0klEQVQ4Ea2SwQ2FIBBEtzz7sQPb8G4PHjly9ObNUvh5JEMWRInJn4QA7uxjAlr6g+yNcRxHYozUhWzblqZpSmaWB2u+PekGmee5NAuimVpPFSSE8AgQCE+rCvKWQpBemgoi42h+TeIv8wmEp1WVZF3X4Z3gaVVBruuqnrZNQwo8rQpEJ8QYuyAA1JC8gmWIXsUX931Py7LkwVrCQ0L/SiaAorPv/ep8AyqfB9l5nrkJkwfSIPlmHYKfXlTuhI3MGFvpAA+X5wbpAWSmNoTI/HX+AVO2WCGEY4vQAAAAAElFTkSuQmCC\\\" /></span></span></td><td style=\\\"width: 307px;\\\"><span style=\\\"font-family: Arial; font-size: 12px;\\\"><span style=\\\"font-family: Arial;\\\">&nbsp;l\'&eacute;l&egrave;ve a un m&eacute;mo de valorisation</span></span></td></tr><tr><td style=\\\"width: 32px;\\\"><img src=\\\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAASCAYAAAC9+TVUAAAA40lEQVQ4Ea2TsQ2EMAxFMx77sEEWYAB66rSUlJR0dIyS0/PpIwc4BZ1iKUow9vO3CSE3sNCAkdtCxnHMMcbqOo7DxA/DkJdlsbMpAdD3fd62rbrIIjmEYMvOOHEAeGMUI9GDTMlbCACvYJ7nL8wr2ff9NhOp8wCBNJ+bkutcgDwBaEf2E6KAGoC4AuLb4SWAlFLuuq6YhQpoLyBystMWd4G+OTMHWqCQb4XYAuKVqA3dISWijOWtgFBVQX5f1/XMmabpGcILKlPt+nX8M3HMB583U4KDym/+Ha9KoBMixz97E8gH5JP3imqPgNwAAAAASUVORK5CYII=\\\" /></td><td style=\\\"width: 329px;\\\"><span style=\\\"font-family: Arial; font-size: 12px;\\\"><span style=\\\"font-family: Arial;\\\">&nbsp;l\'&eacute;l&egrave;ve a un m&eacute;mo de la vie scolaire</span></span></td><td style=\\\"width: 32px;\\\"><span style=\\\"font-family: Arial; font-size: 12px;\\\"><span style=\\\"font-family: Arial;\\\"><img src=\\\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAASCAYAAAC9+TVUAAAA1klEQVQ4Ea2Suw2EMBBEtzjKoAZXQAPOiZ3SgkNnZGTU49P4NNbi84cTrISMvDtvf5b4gskThvc+yf+GnOcZ13WN0zRFka/8NuQ4jiSGkN88z/cq2fc9LsuShQTgxD2sWUkIISKTFpX/Q0gruwZZa6+VYNLIvG1bcqANLSj/MVxaagcXDMLUacaYfE8/KsSQtQkyM4AnoGU7gGNONZPR8AjmEKsQBo3OLoQv7xEEaxoB4NfbKFuS0SqZAHEt+1kxRfrsVQFwfvbOuWpbfHytKi6QXtDI9wEm1lo9YSLQYwAAAABJRU5ErkJggg==\\\" /></span></span></td><td style=\\\"width: 307px;\\\"><span style=\\\"font-family: Arial; font-size: 12px;\\\"><span style=\\\"font-family: Arial;\\\"><span style=\\\"font-family: arial,helvetica,sans-serif;\\\">&nbsp;l\'&eacute;l&egrave;ve a une convocation</span></span></span></td></tr><tr><td style=\\\"width: 32px;\\\"><img src=\\\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAApUlEQVQ4EaWSwQ3AIAhF2c853MERnMABvHv36tUxPLqEDSYQQXuwNTEV8X3gpzB+LFjZWusAEFdrejvzSwKv4RVEOOcsNuZ773tlDSL8tmOMQgCMMa+PTyLWWhaA1tq4FUgpTYFpmBbQM4cQRAGqzm6vAtyXOjjneERMMYwBCpCq4maIjpMPG3wC9J33fmAHn+FSyneYfhgxs27xFKMvtK5hAvH7ABbRzKQzF+3hAAAAAElFTkSuQmCC\\\" /></td><td style=\\\"width: 329px;\\\"><span style=\\\"font-family: Arial; font-size: 12px;\\\"><span style=\\\"font-family: Arial;\\\">&nbsp;l\'&eacute;l&egrave;ve &eacute;tait absent &agrave; l\'heure pr&eacute;c&eacute;dente</span></span></td><td style=\\\"width: 32px;\\\"><span style=\\\"font-family: Arial; font-size: 12px;\\\"><span style=\\\"font-family: Arial;\\\"><img src=\\\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAOCAYAAAD0f5bSAAAAnElEQVQoFZ2S0Q2AIAxEOx5rMAMbsAAD8M8ebME2mGs8UkODURKt5HjXFivzxxIwvfeZc55jDNeitTZLKUsTACKiTwhhA2utS08pKSgEGC1oAerIKvq6M1EAiHK4Z6Sh9uQ58iAjAdSnED5OoAUeEDYxxq0kZMJl2fU/06k0tycPeL09HKAbom3aM9RfhNEhaAE2bsE1ERABfpm9C8VYvWB+oUyiAAAAAElFTkSuQmCC\\\" /></span></span></td><td style=\\\"width: 307px;\\\"><span style=\\\"font-family: Arial; font-size: 12px;\\\"><span style=\\\"font-family: Arial;\\\">&nbsp;l&rsquo;&eacute;l&egrave;ve a une absence non r&eacute;gl&eacute;e administrativement&nbsp;</span></span></td></tr><tr><td style=\\\"width: 32px;\\\"><img src=\\\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA2ElEQVQ4Eb2TAQ2EMAxFa2ESsIIFJGABCbOAlUnAAhKQsctr8pfBFS65S27JxlZ+X/9SsPrjsKf8dV3rtm1NwvkaCwHHcdRpmqqZ1ZSSJ+377mdi8zw36BsA4TAMLh7H0QEkLcvyGVBKOSVQKefcgIBuHSDELpNq/RUA6RwCZI/kqKKSALHnirhlmMgE5QJRNNECkVM6Yhx4IRdRYh/rC3lx+ty3qBff7XFBjl+BJQLgjGrMKwiAhn8HEUCip3ePDv4LwApdoKomLWLwXyimp76BdgVXfrm8AHlteA4iCFewAAAAAElFTkSuQmCC\\\" /></td><td style=\\\"width: 329px;\\\"><span style=\\\"font-family: Arial; font-size: 12px;\\\"><span style=\\\"font-family: Arial;\\\">&nbsp;l\'&eacute;l&egrave;ve est en enseignement &agrave; la maison</span></span></td><td style=\\\"width: 32px;\\\"><span style=\\\"font-family: Arial; font-size: 12px;\\\"><span style=\\\"font-family: Arial;\\\">&nbsp;</span></span></td><td style=\\\"width: 307px;\\\"><span style=\\\"font-family: Arial; font-size: 12px;\\\"><span style=\\\"font-family: Arial;\\\">&nbsp;</span></span></td></tr></tbody></table><div style=\\\"text-align: left; text-indent: 0px; margin-left: 0px;\\\">&nbsp;</div><div style=\\\"text-align: left; text-indent: 0px; margin-left: 0px;\\\"><strong><span style=\\\"font-family: Arial; font-size: 12px;\\\">Sp&eacute;cificit&eacute;s li&eacute;es aux absences et/ou convocations</span></strong></div><table style=\\\"width: 82.0513%;\\\" border=\\\"0\\\"><tbody><tr><td style=\\\"width: 5.34188%;\\\"><img src=\\\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAARCAYAAAA7bUf6AAABcElEQVQ4jc2TsUvDQBSHf/U5ORSluOsgHYROscGpi2sXIbsE8n8UsgudhYwdCu1cCNnEEJRSiw5WwVLs4iLnpjf8HMpdEt3s0gc33LvH9+573FW0CLFmbK0L2DDI2PfxPhphdnlpk9nZGd5HIyz7fZszdWaNfT+nXLsuqRSpFO/396lFOIsikuQsiqhFOAnDVU0xlGJar1OLEFqE6uGBJJkFAbWIhd54Xr4nmSQJ2+02bzyP165LLUItwi0AeEsSAMDe6Skyx7G3PBkOS+61Wg2tVguV6RTu3V1+oEVolUimaVpS0SJ87HbLOkpxGcdWH6bQKJkio2JWFgScRRGXcWyBRh+lbgVIEaBFbFctsgKRnIQhtQi3jdZHrwdcXADVKp4HAxwWZvF6dYWDZhPLpyd8K4WjZhP4/MTXYpHPpKT0SyWt122+eNPizCrFD3h7fo6dRgPHnc6fV5k5DrC7CwCQ+RzOy4s9K0H+G5vzAX8AJzxojS/Km9QAAAAASUVORK5CYII=\\\" /><img src=\\\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJCAYAAADgkQYQAAAAE0lEQVQoFWP4TwRgIELN/1FF/wH00kLM5ZRmYwAAAABJRU5ErkJggg==\\\" /></td><td style=\\\"width: 93.6609%;\\\"><span style=\\\"font-family: Arial; font-size: 12px;\\\"><span style=\\\"font-family: Arial;\\\">&nbsp;: l\'absence ou la convocation a &eacute;t&eacute; saisie par la vie scolaire</span></span></td></tr><tr><td style=\\\"width: 5.34188%;\\\"><img src=\\\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAARCAYAAADQWvz5AAAA0klEQVQ4EcWRsQ3EIAxFWZA9GCIjZAIWSE+fOm3alCnp2MCnj/SRIYTTnSLFjQX+PL5tIw+FeYgj74NCCDLPs8QYc1N/OVqWRaZpkuM4xDmXYT+DCOFs4chae53ReZ6SUqKuyi0ExX3fs6vKEYSwih/YO0l3EGoLSAvxCwUA6RrBraaAjDFVSxR67/NgCUBmTbsuIKwTm9CBB7077Zb6AsJFrwUKkXtOWK9AI9gIgncXUA/2DXIL0rBt26oNotaLriMK13UVbE1vh7U2D0GteHT+AK3QcRC/7x5PAAAAAElFTkSuQmCC\\\" /></td><td style=\\\"width: 93.6609%;\\\">&nbsp;: l\'absence ne vaut pas pour toute la dur&eacute;e du cours</td></tr></tbody></table></div><div style=\\\"text-align: left; text-indent: 0px; margin-left: 0px;\\\">&nbsp;</div><div style=\\\"text-align: left; text-indent: 0px; margin-left: 0px;\\\"><strong><span style=\\\"font-family: Arial; font-size: 12px;\\\"><span style=\\\"font-family: Arial;\\\">Types de punitions</span></span><span style=\\\"font-family: Arial; font-size: 12px;\\\"><span style=\\\"font-family: Arial;\\\">&nbsp;</span></span></strong></div><div style=\\\"text-align: left; text-indent: 0px; margin-left: 0px;\\\"><table style=\\\"width: 188px;\\\" border=\\\"0\\\"><tbody><tr><td style=\\\"width: 28px;\\\"><img src=\\\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAPCAYAAADtc08vAAABPklEQVQ4jY2SrY7CQBSFPzaIcVRVNVUNSERNEyS18x7zEDiQ8AIgkShS2yJxJG2CIg2huJJgwOBmxYYm3f7ASUbce+58mck9TCYTDTQepZSO41g3qQPoLMuo036/5/l8EgQB0+mU4XBYO9dIj6JIR1Gk8zzXUkqdZVll5qcW+U+mabJerxFCcDqdSt5HwGazYbFYcLlc2G63DAaDkt9tu+y6Lo7jANDr9QjDsDJTAiRJwv1+L2rLsjAMg+PxCECapgDsdrvCb32BEILz+cx4PC7137VSqh2Qpimu65LnOa/Xi9VqxWw2471227bbAQCHwwHHcbBtG8MwiotvfbVGIQQA/X4fKWXJ6/AXJACCIKjsGcD3/cYUQksS65I5n89LvS7A9Xr95ifcbrdKr7NcLvXj8fgKADAajfA8r6h/AbRp9c7+KO/9AAAAAElFTkSuQmCC\\\" /></td><td style=\\\"width: 153px;\\\"><span style=\\\"font-size: 12px;\\\">&nbsp;: devoir suppl&eacute;mentaire</span></td></tr><tr><td style=\\\"width: 28px;\\\"><img src=\\\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABIklEQVQ4jY1TsY3EIBCcf13gCggcuCP6cBEugQpogCoILVI7xJkdWCKwRAfzwQsOfFj/IyEZ7c7sLjsGC4QQqJQigOZRSjGEUFKI9LEsS5PQElyWpRbw3ueglLJKKAtIKXOe9/4tkALTNH0QrbWMMeb7NE25EEnCOZdV7/ORJADu+169U8p3zvF7nmcAgNYaQgj8BSEEtNYAgMTNai3cOyDJsutXUu77PldZ1xXXdT12UeZmgfM8MQwDAOA4DmzbBgBQSqHrukrgPM/3Je1Za90coQWtdfYJSgPdZ21h3/fKUCDJcRzzblurLFeYPDOO4+8jpwAKJ1prP8jW2sqJqVD+F7z3VcLTkVJmG1cCJBljpDHmkWyMqWxNkl8k+bjwf+AHAbo/DUobc7EAAAAASUVORK5CYII=\\\" /></td><td style=\\\"width: 153px;\\\"><span style=\\\"font-size: 12px;\\\">&nbsp;: retenue</span></td></tr><tr><td style=\\\"width: 28px;\\\"><img src=\\\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAOCAYAAAAmL5yKAAAA7klEQVQ4jZWSsZHEIAxF/10hRPTBDDkF0AEFEOLIqQtw7g5IHKkHWoCQiA50yS1rL8vcrWaUIOnxR/pfzMyYxLIsAIB1XWctAE+CiBgAA2AimrXxFGCM6QBjzGeAGGMffmSM8X+A1lr/lYiYiLqa1toA+H7dyXmeAAClFLTW0FpDKXWrXeMGqLXCWjtduLUWtdY54DiO+bkmPR1QSoH3/k+A9x6llOfDYxkhhGHz27bxtm3DewjhfoWU0tDknOOcM+ec2Tk31FNKzyvs+z5IlVJCCAEhBKSUQ73PXC37quDhg3cK8GtxXC37aRpj+Ad5mmv/9wmR/wAAAABJRU5ErkJggg==\\\" /></td><td style=\\\"width: 153px;\\\"><span style=\\\"font-size: 12px;\\\">&nbsp;: autre punition</span></td></tr></tbody></table><p><strong>D&eacute;compte des &eacute;v&egrave;nements pass&eacute;s<br /></strong>Dans chaque colonne, PRONOTE d&eacute;compte le nombre d\'&eacute;v&egrave;nements que vous avez affect&eacute; &agrave; chaque &eacute;l&egrave;ve depuis la date d&eacute;finie en haut &agrave; droite. Un double clic sur ce nombre affiche le d&eacute;tail des &eacute;v&egrave;nements de l\'&eacute;l&egrave;ve ainsi que, si vous en avez l\'autorisation, les &eacute;v&egrave;nements de m&ecirc;me nature dans les autres mati&egrave;res.</p></div></div></div>"},"width":735,"height":580,"type":4,"boutons":{"_T":18,"V":1024}}',
      );
      a(
        'AbsenceVS.MFicheFeuilleAppelVSSansCours',
        '{"titre":"Comment renseigner la feuille \\\"Appel et suivi\\\" ?","html":{"_T":23,"V":"<div style=\\\"text-align: left; text-indent: 0px; margin-left: 0px;\\\"><span style=\\\"font-family: Arial; font-size: 12px;\\\">1. Choisissez votre classe ou groupe et d&eacute;finissez le cr&eacute;neau horaire en choisssant les horaires dans le bandeau de titre.</span></div><div style=\\\"text-align: left; text-indent: 0px; font-family: Arial; font-size: 13px; margin-left: 0px;\\\"><span style=\\\"font-family: Arial; font-size: 8px;\\\">&nbsp;</span></div><div style=\\\"text-align: left; text-indent: 0px; margin-left: 0px;\\\"><span style=\\\"font-family: Arial; font-size: 12px;\\\">2. Dans chaque colonne cochez les &eacute;l&egrave;ves concern&eacute;s par l\'&eacute;v&egrave;nement.</span></div><div style=\\\"text-align: left; text-indent: 0px; margin-left: 0px;\\\">&nbsp;</div><div style=\\\"text-align: left; text-indent: 0px; margin-left: 0px;\\\"><span style=\\\"font-family: Arial; font-size: 12px;\\\">Vous pouvez choisir d\'ajouter des rubriques facultatives dans la fen&ecirc;tre accessible depuis le bouton <img src=\\\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAACxMAAAsTAQCanBgAAAD0SURBVDhPY3x1+/P/X9/+Mvz48puBWPDj8y+G+9eeMjA+ufjhP0jj9w+/oFKEwcdnPxm2HV3DwHjn6Ov/II0/3kBlkMCh9eegLAYGu0AjKIuB4eHzuwzr9i1hYILyMQBI477zm+EYG8CqGaYRBrY8mAlloQKcNsMASOOZRc/ABjbUNTKYxElBZYjQ7KOQjuESGMDQjE0hUX7GZQMMwLwAAyxQGqtG9IBC1ggCcM3YNKIrRgdYA4wYjSCAoZlYjSDAeGXH0/8fHv9kePH2CVSIMHj2+jHDrhMbGRg39536f/zSAYYHz+5ApQiDT18/MLz99IoBAInRj3tGMjDAAAAAAElFTkSuQmCC\\\" alt=\\\"\\\" />.</span></div><div style=\\\"text-align: left; text-indent: 0px; margin-left: 0px;\\\">&nbsp;</div><div style=\\\"text-align: left; text-indent: 0px; margin-left: 0px;\\\"><span style=\\\"font-family: Arial; font-size: 12px;\\\">Dans chaque colonne, PRONOTE d&eacute;compte le nombre d\'&eacute;v&egrave;nements que vous avez affect&eacute; &agrave; &nbsp;chaque &eacute;l&egrave;ve depuis la date d&eacute;finie en haut &agrave; droite. Un double clic sur ce nombre affiche le d&eacute;tail des &eacute;v&egrave;nements de l\'&eacute;l&egrave;ve ainsi que, si vous en avez l\'autorisation, les &eacute;v&egrave;nements de m&ecirc;me nature dans les autres mati&egrave;res.</span></div>"},"width":440,"height":260,"type":4,"boutons":{"_T":18,"V":1024}}',
      );
      a('AbsenceVS.dureeAbsence', "Durée de l'absence - %s");
      a(
        'AbsenceVS.EdTEleve',
        "Afficher l'emploi du temps de l'élève sélectionné",
      );
      a('AbsenceVS.MasquerEdTEleve', "Masquer l'emploi du temps de l'élève");
      a('AbsenceVS.1Retard', '1 retard');
      a('AbsenceVS.ToutesLesPermanences', 'Toutes les permanences');
      a(
        'AbsenceVS.InscrireDesinscrireRepasMidi',
        'Inscrire/Désinscrire un élève au repas du midi',
      );
      a(
        'AbsenceVS.InscrireDesinscrireRepasSoir',
        'Inscrire/Désinscrire un élève au repas du soir',
      );
      a(
        'AbsenceVS.HintEleveNonDP',
        "Cet élève n'est pas inscrit à la demi-pension, vous ne pouvez pas lui prévoir de repas",
      );
      a(
        'AbsenceVS.HintVerrouille',
        "L'appel est verrouillé, vous ne pouvez pas saisir d'absence ni de retard.",
      );
      a(
        'AbsenceVS.VerrouAppelFaitSP',
        "L'appel d'une sortie pédagogique de plusieurs jours doit être fait le 1er jour de la sortie.\nVous ne pouvez pas saisir d'absence ni de retard.",
      );
      a('AbsenceVS.SelectionColonnes', 'Personnalisation des colonnes');
      a(
        'AbsenceVS.Titre_FenetreInfirmerie',
        "Modification du passage à l'infirmerie",
      );
      a(
        'AbsenceVS.Choix_RubriquesFacultatives',
        'Choix des rubriques facultatives',
      );
      a(
        'AbsenceVS.RecapEleve',
        "Afficher le récapitulatif des absences de l'élève sélectionné",
      );
      a('AbsenceVS.IndentificationDelegue', '- Délégué(e)');
      a('AbsenceVS.AccompagnePar', 'Accompagné(e) par');
      a('AbsenceVS.MotifNonPrecise', 'Motif non précisé');
      a('AbsenceVS.TelechargerUnJustifcatif', 'Ajouter un justificatif');
      a('AbsenceVS.AjouterUnCommentaire', 'Ajouter un commentaire');
      a('AbsenceVS.commentaire', 'Commentaire');
      a('AbsenceVS.commentaireObligatoire', 'Commentaire (obligatoire)');
      a(
        'AbsenceVS.dateFinAvantDebut',
        'La date de fin a lieu avant la date de début',
      );
      a('AbsenceVS.ContacterLaVieScolaire', 'Contacter la vie scolaire');
      a('AbsenceVS.SaisirAbsenceParentPrim', "Prévenir d'une absence");
      a('AbsenceVS.PrevenirAbsenceParent', "Prévenir d'une absence");
      a(
        'AbsenceVS.DateLimiteDeclaration',
        "Vous ne pouvez pas déclarer d'absences débutant au-delà du %s",
      );
      a('AbsenceVS.SupprimerDeclaration', "Supprimer la déclaration d'absence");
      a('AbsenceVS.prevuePar', 'Prévue par %s');
      a('AbsenceVS.demandeePar', 'Demandée par %s');
      a('AbsenceVS.Prevenir', 'Prévenir');
      a(
        'AbsenceVS.PrevenirDispensePonctuelle',
        "Prévenir d'une dispense ponctuelle",
      );
      a(
        'AbsenceVS.PrevenirDispenseLongue',
        "Prévenir d'une dispense longue durée",
      );
      a(
        'AbsenceVS.UniquementLesEvtNecessiteAction',
        'Uniquement les évènements qui nécessitent une action',
      );
      a('AbsenceVS.dispense.titreCD', "Prévenir d'une dispense sur un cours");
      a('AbsenceVS.dispense.titreLD', "Prévenir d'une dispense longue durée");
      a('AbsenceVS.dispense.labelCours', 'Cours');
      a('AbsenceVS.dispense.placeholderCours', 'Choisir le cours');
      a(
        'AbsenceVS.dispense.demandePossibleCertainesMatieres',
        "Une demande de dispense n'est possible que pour certaines matières choisies par l'établissement",
      );
      a('AbsenceVS.dispense.ajouterJustificatif', 'Ajouter un justificatif');
      a(
        'AbsenceVS.dispense.justificatifConsultableVS',
        'Ce justificatif pourra être consulté par la vie scolaire ou les enseignants',
      );
      a('AbsenceVS.dispense.commentaire', 'Commentaire (obligatoire)');
      a(
        'AbsenceVS.dispense.msgValidationEchoueeCD',
        'Veuillez renseigner un cours et un commentaire',
      );
      a(
        'AbsenceVS.dispense.msgValidationEchoueeLD',
        'Veuillez renseigner au moins une matière et un commentaire',
      );
      a(
        'AbsenceVS.dispense.msgValidationEchouee',
        'Veuillez renseigner un commentaire',
      );
      a('AbsenceVS.dispense.labelMatiere', 'Matière(s)');
      a('AbsenceVS.dispense.placeholderMatiere', 'Choisir la ou les matières');
      a(
        'AbsenceVS.dispense.confirmationSuppressionDemande',
        'Confirmez-vous la suppression de cette demande de dispense ?',
      );
      a(
        'AbsenceVS.dispense.commentaireDeLaDispense',
        "Commentaire réservé à l'établissement et non publié aux parents et élèves",
      );
      a(
        'AbsenceVS.demandeDispense.xDemandesATraiter',
        '%d demandes de dispense à traiter',
      );
      a(
        'AbsenceVS.demandeDispense.1DemandeATraiter',
        '1 demande de dispense à traiter',
      );
      a(
        'AbsenceVS.demandeDispense.demandesDeDispenseDesResp',
        'Demandes de dispense des responsables (%s)',
      );
      a(
        'AbsenceVS.demandeDispense.demandeDeDispenseATraiter',
        'Demande de dispense à traiter',
      );
      a(
        'AbsenceVS.demandeDispense.dispenseDemandeATraiter',
        'Dispense (Demande à traiter)',
      );
      a(
        'AbsenceVS.demandeDispense.dspenseDemandeRefusee',
        'Dispense (Demande refusée)',
      );
      a('AbsenceVS.demandeDispense.dispenseRefusee', 'Dispense refusée');
      a(
        'AbsenceVS.demandeDispense.messageConfirmAppel',
        "Vous allez terminer un appel alors qu'il y a des demandes de dispenses à traiter. Confirmez-vous l'appel terminé ?",
      );
      a(
        'AbsenceVS.demandeDispense.confirmerCreationDispense',
        "Confirmez-vous la création d'une dispense pour %0:s pour ce cours de %1:s à %2:s ?",
      );
      a(
        'AbsenceVS.demandeDispense.confirmerRejetDispense',
        "Confirmez-vous le rejet d'une dispense pour %0:s pour ce cours de %1:s à %2:s ?",
      );
      a(
        'AbsenceVS.demandeDispense.warningDispenseATraiter',
        'Attention, il reste à traiter la dispense pour %0:s.',
      );
      a(
        'AbsenceVS.demandeDispense.warningDispensesATraiter',
        'Attention, il reste à traiter les dispenses pour %0:s.',
      );
      a(
        'AbsenceVS.demandeDispense.demandeDispenseRefuseePar',
        'La demande de dispense, demandée par le responsable, a été refusée par %s.',
      );
      a('AbsenceVS.acceptee', 'Acceptée par la vie scolaire');
      a('AbsenceVS.absente', 'Absent(e)');
      a('AbsenceVS.RenseignerUneAbsence', 'Renseigner une absence');
      a('AbsenceVS.RenseignerUnRetard', 'Renseigner un retard');
      a(
        'AbsenceVS.SelectionnerTempsDeRetard',
        'Sélectionner le temps de retard',
      );
      a('AbsenceVS.InscritAuRepasMidi', 'Inscrit au repas du midi');
      a('AbsenceVS.InscritAuRepasSoir', 'Inscrit au repas du soir');
      a('FicheEleve.identite', 'Identité');
      a('FicheEleve.scolarite', 'Scolarité');
      a('FicheEleve.projets', "Projets d'accompagnement");
      a(
        'FicheEleve.aucunProjet',
        "Aucun projet individuel n'est saisi pour cet élève",
      );
      a('FicheEleve.type', 'Type');
      a('FicheEleve.typeDeProjet', 'Type de projet');
      a('FicheEleve.aucunTypeDeProjet', 'Aucun type');
      a('FicheEleve.motifs', 'Motifs');
      a('FicheEleve.aucunMotifProjet', 'Aucun motif');
      a('FicheEleve.ajouterPJ', 'Ajouter une pièce jointe');
      a(
        'FicheEleve.modifierProjetAccompagnement',
        "Modifier le projet d'accompagnement",
      );
      a(
        'FicheEleve.nouveauProjetAccompagnement',
        "Nouveau projet d'accompagnement",
      );
      a('FicheEleve.msgTypeProjetExiste', 'Ce type de projet existe déjà');
      a('FicheEleve.msgMotifProjetExiste', 'Ce motif existe déjà');
      a(
        'FicheEleve.msgConfirmerSupprTypeProjet',
        "Confirmez-vous la suppression de ce type de projet d'accompagnement ?",
      );
      a(
        'FicheEleve.msgConfirmerSuppression',
        "Confirmez-vous la suppression de ce projet d'accompagnement ?",
      );
      a(
        'FicheEleve.msgConfirmerSupprMotif',
        'Confirmez-vous la suppression de ce motif ?',
      );
      a('FicheEleve.publieEquipePeda', "Publier pour l'équipe pédagogique");
      a('FicheEleve.redigezCommentaire', 'Rédigez votre commentaire');
      a('FicheEleve.commentaire', 'Commentaire');
      a('FicheEleve.responsables', 'Responsables');
      a('FicheEleve.deleguePE', 'Delegué(e) de');
      a('FicheEleve.membreConseilAdmin', "Membre du conseil d'administration");
      a('FicheEleve.sexe', 'Sexe');
      a('FicheEleve.sexeMasculin', 'Masculin');
      a('FicheEleve.sexeFeminin', 'Feminin');
      a('FicheEleve.sexeNeutre', 'Neutre');
      a('FicheEleve.adresse', 'Adresse');
      a('FicheEleve.ne', 'Né(e)');
      a('FicheEleve.AgeDe', 'Agé(e) de');
      a('FicheEleve.le', 'le');
      a('FicheEleve.a', 'à');
      a('FicheEleve.etat', 'Etat');
      a('FicheEleve.regime', 'Régime');
      a('FicheEleve.midi', 'midi');
      a('FicheEleve.soir', 'soir');
      a('FicheEleve.internat', 'internat');
      a('FicheEleve.numeroChambre', 'Numéro de chambre');
      a('FicheEleve.dortoir', 'Dortoir');
      a('FicheEleve.numeroCasier', 'Numéro de casier');
      a('FicheEleve.numeroSelf', 'Numéro de self');
      a('FicheEleve.autorisationSortie', 'Autorisation de sortie');
      a(
        'FicheEleve.lEleveEstAutoriseASortirSeul',
        "L'élève est autorisé à sortir seul",
      );
      a('FicheEleve.utiliseTransport', 'Usager des transports scolaires');
      a(
        'FicheEleve.utiliseTransportPrim',
        "L'élève est usager du bus scolaire",
      );
      a('FicheEleve.options', 'Options choisies');
      a('FicheEleve.engagements', 'Engagements');
      a('FicheEleve.titreRenseignement', 'Fiche de renseignements de %s');
      a('FicheEleve.titrePanelMobile', 'Fiche de renseignements');
      a('FicheEleve.majeur', 'majeur');
      a('FicheEleve.aucunAutreContact', "Pas d'autre contact défini.");
      a('FicheEleve.attestations', 'Attestations');
      a('FicheEleve.libelle', 'Libellé');
      a('FicheEleve.libelleLong', 'Libellé long');
      a('FicheEleve.date', 'Date');
      a('FicheEleve.delivree', 'Délivrée le');
      a('FicheEleve.nonDelivree', 'Non délivrée');
      a('FicheEleve.servicePeriscolaire', 'Inscrit aux services');
      a('FicheEleve.memoInterne', 'Mémo interne');
      a('FicheEleve.memoVS', 'Mémos de vie scolaire');
      a('FicheEleve.contactUrgence', "A contacter en cas d'urgence");
      a('FicheEleve.autoriseRecuperer', "Autorisé(e) à récuperer l'enfant");
      a('FicheEleve.descriptifAttestation', 'Descriptif');
      a('FicheEleve.projetAccEleve', "%s - Projet(s) d'accompagnement");
      a('FicheEleve.choixProjetAcc', "Choix du projet d'accompagnement");
      a('FicheEleve.misEnPlace', 'Un %s est mis en place');
      a('FicheEleve.consultable', "Consultable par l'équipe pédagogique");
      a('FicheEleve.aPartir', 'à partir du %s');
      a('FicheEleve.jusquau', "jusqu'au %s");
      a(
        'FicheEleve.verrouPublieFamille',
        "Verrouillé et publié sur l'espace Parents",
      );
      a(
        'FicheEleve.nonVerrouPublieFamille',
        "Non verrouillé et non publié sur l'espace Parents",
      );
      a(
        'FicheEleve.UniquementAmenagementMesDisciplines',
        'Uniquement les aménagements communs et liés à ma discipline',
      );
      a(
        'FicheEleve.UniquementActionMesDisciplines',
        'Uniquement les actions communes et liées à ma discipline',
      );
      a('FicheEleve.amenagements', 'Aménagements');
      a('FicheEleve.actions', 'Actions');
      a('FicheEleve.aucunAmenagement', 'Aucun aménagement');
      a('FicheEleve.aucuneAction', 'Aucune action');
      a('FicheEleve.INELong', 'Identifiant national étudiant(INE)');
      a('FicheEleve.TelPort', 'Téléphone Portable');
      a('FicheEleve.TelFixe', 'Téléphone Fixe');
      a('FicheEleve.AllergiesAlimentaires', 'Allergies alimentaires');
      a('FicheEleve.AutresAllergies', 'Autres allergies');
      a(
        'FicheEleve.AutorisationCommunication',
        'Autorisation de communication',
      );
      a('FicheEleve.Profession', 'Profession');
      a('FicheEleve.SituationProfessionnelle', 'Situation');
      a(
        'FicheEleve.SMSImpossible',
        'Envoi de SMS impossible, aucun numéro de téléphone portable saisi',
      );
      a('FicheEleve.SMSOK', 'SMS autorisé');
      a('FicheEleve.SMSKO', 'SMS interdit');
      a('FicheEleve.CourrierOK', 'Courrier autorisé');
      a('FicheEleve.CourrierKO', 'Courrier interdit');
      a(
        'FicheEleve.CourrierImpossible',
        'Envoi de courrier impossible, aucune adresse saisie',
      );
      a('FicheEleve.EmailOK', 'Email autorisé');
      a('FicheEleve.EmailKO', 'Email interdit');
      a('FicheEleve.DiscussionsOK', 'Discussion autorisée');
      a('FicheEleve.DiscussionsKO', 'Discussion interdite');
      a('FicheEleve.tuteur', 'Tuteur');
      a('FicheEleve.profPrincipal', 'Professeur principal');
      a('FicheEleve.accompagnant', 'Accompagnant');
      a('FicheEleve.Attestations', 'Attestations');
      a('FicheEleve.DelivreLe', 'Délivrée le');
      a('FicheEleve.DateDebut', 'Date de debut');
      a('FicheEleve.DateFin', 'Date de fin');
      a(
        'PreferencesNotifications.etreNotifieParEmail',
        "À la réception d'un nouveau message, information et sondage, document du casier.",
      );
      a(
        'PreferencesNotifications.etreNotifieEmailTravaux',
        "Lorsque l'on m'a attribué une demande de travaux.",
      );
      a(
        'PreferencesNotifications.delaiTemporisation',
        'Délai de temporisation',
      );
      a(
        'PreferencesNotifications.serveurNonConfigureNotif',
        "Le serveur n'a pas été configuré pour envoyer des notifications par mail.",
      );
      a('PreferencesNotifications.15min', '15 min');
      a('PreferencesNotifications.30min', '30 min');
      a('PreferencesNotifications.1h', '1h');
      a('PreferencesNotifications.4h', '4h');
      a('PreferencesNotifications.12h', '12h');
      a('PreferencesNotifications.24h', '24h');
      a('PreferencesNotifications.titreNotifications', 'Notifications');
      a('Notes.Creer', 'Créer');
      a('Notes.CreerDevoir', 'Créer un devoir');
      a('Notes.ModifierDevoir', 'Modifier le devoir');
      a('Notes.ModificationDevoir', "Modification d'un devoir");
      a('Notes.PeriodeDejaAffectee', 'Cette période est déjà affectée');
      a('Notes.AucunEleve', 'Aucun élève');
      a('Notes.SelectionnezDevoir', 'Sélectionnez un devoir');
      a('Notes.TitreImpression', 'Notes');
      a('Notes.Colonne.Promotion', 'Classe');
      a('Notes.Colonne.Moyenne', 'Moyenne');
      a('Notes.Colonne.MoyenneBrute', 'Moy. Brute');
      a('Notes.Colonne.Bonus', 'Bonus');
      a('Notes.Colonne.BonusMalus', 'Bonus / Malus');
      a(
        'Notes.Colonne.TitreMoyenne',
        'Prend en compte tous les coefficients et paramètres de calculs et est utilisée pour les résultats et les bulletins',
      );
      a(
        'Notes.Colonne.TitreMoyenneBrute',
        'Ne prend en compte aucun coefficient ni paramètre et sert de référence',
      );
      a('Notes.Colonne.TitreMoyNR', 'N.R.');
      a(
        'Notes.Colonne.HintMoyNR',
        'Signalez par un double clic les moyennes non représentatives pour le contrôle continu du baccalauréat.',
      );
      a(
        'Notes.Colonne.HintMoyenneNR',
        'La moyenne est considérée comme non représentative pour le contrôle continu du baccalauréat.\nElle ne sera pas transmise à LSL et Parcoursup.',
      );
      a(
        'Notes.ConfirmationMoyNR',
        'La moyenne ne sera pas transmise à LSL et Parcoursup et ne sera pas prise en compte pour le contrôle continu du baccalauréat.\nUne évaluation de remplacement devra être organisée afin de déterminer la note de contrôle continu.\nConfirmez-vous cette modification ?',
      );
      a('Notes.TitreConfirmationMoyNR', 'Moyenne non représentative');
      a('Notes.Colonne.hintFacultativeBonus', 'Facultatif comme un bonus');
      a('Notes.Colonne.hintFacultativeNote', 'Facultatif comme une note');
      a('Notes.MoyenneGroupe', 'Moy. du groupe');
      a('Notes.MoyenneClasse', 'Moy. de la classe');
      a('Notes.MoyenneEleve', "Moyenne de l'élève");
      a(
        'Notes.Message.DevoirVerrouille',
        'Vous ne pouvez pas modifier la note car le devoir est verrouillé !',
      );
      a(
        'Notes.Message.EleveNonNotable',
        "L'élève n'a pas pu participer à ce devoir : il n'était pas dans cette classe à la date du devoir.",
      );
      a(
        'Notes.Message.NoteSuperieureAuBareme',
        'La note saisie est supérieure au barème du devoir : <b>%s / %s</b><br><br>Confirmez-vous cette valeur ?',
      );
      a('Notes.Message.NotePonderee', 'La note est pondérée');
      a(
        'Notes.Message.NoteNonPriseEnCompte',
        "La note n'est pas prise en compte",
      );
      a(
        'Notes.Message.MoyenneNonPriseEnCompte',
        "La moyenne n'est pas prise en compte",
      );
      a(
        'Notes.MFicheNotationSpecifique',
        '{"titre":" Comment indiquer une absence, une dispense ... ","html":{"_T":23,"V":"<div><span style=\\\"font-family: Arial; font-size: 12px;\\\">Les notes saisissables sont fonction du bar&egrave;me de chaque devoir.</span></div><div><span style=\\\"font-family: Arial; font-size: 12px;\\\">En revanche vous pouvez indiquer d\'autres &eacute;tats en utilisant les caract&egrave;res d&eacute;sign&eacute;s ci-dessous.</span></div><div style=\\\"text-indent: 0px; margin-left: 0px; font-size: 13px;\\\"><span style=\\\"font-family: Arial; font-size: 12px;\\\">&nbsp;</span></div><div style=\\\"text-indent: 0px; margin-left: 0px;\\\"><span style=\\\"font-family: Arial; font-size: 12px;\\\">Pour ne pas comptabiliser le devoir dans le calcul de la moyenne :</span></div><div style=\\\"text-indent: 0px; margin-left: 0px;\\\"><span style=\\\"font-family: Arial; font-size: 12px;\\\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><strong><span style=\\\"font-family: Arial; font-size: 12px;\\\">A</span></strong><span style=\\\"font-family: Arial; font-size: 12px;\\\"> : L\'&eacute;l&egrave;ve est Absent (Abs)</span></div><div style=\\\"text-indent: 0px; margin-left: 0px;\\\"><strong><span style=\\\"font-family: Arial; font-size: 12px;\\\"><span style=\\\"font-family: Arial; font-size: 12px;\\\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>D</span></strong><span style=\\\"font-family: Arial; font-size: 12px;\\\"> : L\'&eacute;l&egrave;ve est Dispens&eacute; (Disp)</span></div><div style=\\\"text-indent: 0px; margin-left: 0px;\\\"><span style=\\\"font-family: Arial; font-size: 12px;\\\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><strong><span style=\\\"font-family: Arial; font-size: 12px;\\\">N</span></strong><span style=\\\"font-family: Arial; font-size: 12px;\\\"> : L\'&eacute;l&egrave;ve est Non not&eacute; (N.Not)</span></div><div style=\\\"text-indent: 0px; margin-left: 0px;\\\"><span style=\\\"font-family: Arial; font-size: 12px;\\\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><strong><span style=\\\"font-family: Arial; font-size: 12px;\\\">I</span></strong><span style=\\\"font-family: Arial; font-size: 12px;\\\"> : &nbsp;&nbsp;L\'&eacute;l&egrave;ve est Inapte (Inap)</span></div><div style=\\\"text-indent: 0px; margin-left: 0px;\\\"><span style=\\\"font-family: Arial; font-size: 12px;\\\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><strong><span style=\\\"font-family: Arial; font-size: 12px;\\\">R</span></strong><span style=\\\"font-family: Arial; font-size: 12px;\\\"> : L\'&eacute;l&egrave;ve n\'a pas Rendu son devoir (N.Rdu)</span></div><div style=\\\"text-indent: 0px; margin-left: 0px;\\\">&nbsp;</div>"},"width":440,"height":165,"type":4,"boutons":{"_T":18,"V":1024}}',
      );
      a(
        'Notes.MFicheNotationSpecifiqueWetZ',
        '{"titre":"Comment indiquer une absence, une dispense, ...","html":{"_T":23,"V":"<div><span style=\\\"font-family: arial, helvetica, sans-serif; font-size: 12px;\\\">Les notes saisissables sont fonction du bar&egrave;me de chaque devoir.</span></div><div><span style=\\\"font-family: arial, helvetica, sans-serif; font-size: 12px;\\\">En revanche vous pouvez indiquer d\'autres &eacute;tats en utilisant les caract&egrave;res d&eacute;sign&eacute;s ci-dessous.</span></div><div><span style=\\\"font-family: arial, helvetica, sans-serif; font-size: 12px;\\\">&nbsp;</span></div><div><span style=\\\"font-family: arial, helvetica, sans-serif; font-size: 12px;\\\">Pour ne pas comptabiliser le devoir dans le calcul de la moyenne :</span></div><div><span style=\\\"font-family: arial, helvetica, sans-serif; font-size: 12px;\\\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>A</strong>&nbsp;: L\'&eacute;l&egrave;ve est Absent (Abs)</span></div><div><span style=\\\"font-family: arial, helvetica, sans-serif; font-size: 12px;\\\"><strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;D</strong>&nbsp;: L\'&eacute;l&egrave;ve est Dispens&eacute; (Disp)</span></div><div><span style=\\\"font-family: arial, helvetica, sans-serif; font-size: 12px;\\\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>N</strong>&nbsp;: L\'&eacute;l&egrave;ve est Non not&eacute; (N.Not)</span></div><div><span style=\\\"font-family: arial, helvetica, sans-serif; font-size: 12px;\\\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>I</strong>&nbsp;: &nbsp;&nbsp;L\'&eacute;l&egrave;ve est Inapte (Inap)</span></div><div><span style=\\\"font-family: arial, helvetica, sans-serif; font-size: 12px;\\\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>R</strong>&nbsp;: L\'&eacute;l&egrave;ve n\'a pas Rendu son devoir (N.Rdu)</span></div><div><span style=\\\"font-family: arial, helvetica, sans-serif; font-size: 12px;\\\">&nbsp;</span></div><div><div><span style=\\\"font-family: arial, helvetica, sans-serif; font-size: 12px;\\\">Pour&nbsp;comptabiliser le devoir comme un 0 dans le calcul de la moyenne :</span></div></div><div><span style=\\\"font-family: arial, helvetica, sans-serif; font-size: 12px;\\\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>Z</strong>&nbsp;: &nbsp;L\'&eacute;l&egrave;ve a une absence injustifi&eacute;e (Abs*)</span></div><div><span style=\\\"font-family: arial, helvetica, sans-serif; font-size: 12px;\\\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>W</strong>&nbsp;: L\'&eacute;l&egrave;ve n\'a pas rendu son travail (N. Rdu*)</span></div>"},"width":500,"height":225,"type":4,"boutons":{"_T":18,"V":1024}}',
      );
      a(
        'Notes.Bouton.OrdreChronologique',
        'Affichage des devoirs par ordre chronologique',
      );
      a(
        'Notes.Bouton.OrdreChronologiqueInverse',
        'Affichage des devoirs par ordre chronologique inversé',
      );
      a('Notes.Bouton.Aide', 'Comment indiquer une absence, une dispense ...');
      a(
        'Notes.TitreCompetencesParEvaluation',
        'Saisie des niveaux de maitrise',
      );
      a(
        'Notes.TitreCompetencesParEvaluationRemarquesUniquement',
        'Saisie des remarques',
      );
      a(
        'Notes.TitreCompetencesParEvaluationEtRemarque',
        'Saisie des remarques et des niveaux de maitrise',
      );
      a('Notes.remarques', 'Remarques');
      a('Notes.remarque', 'Remarque');
      a(
        'Notes.HintBtnAffSaisieNoteCommentaireSurnote',
        'Saisir des remarques sur les notes des élèves',
      );
      a(
        'Notes.HintBtnSaisieNivAcq',
        'Saisir les niveaux de maitrise des compétences suivantes :',
      );
      a(
        'Notes.HintBtnAffSaisieCommentaireETNiveauAcqComp',
        'Saisir des remarques sur les notes des élèves et les niveaux de maitrise sur les compétences suivantes :',
      );
      a(
        'Notes.ActionAjouterCommentaireSurnote',
        'Ajouter une remarque sur la note',
      );
      a('Notes.ActionEditerCommentaireSurnote', 'Editer remarque sur la note');
      a('Notes.parametresAffichage', "Paramètres d'affichage");
      a('Notes.SujetDevoir', 'Sujet');
      a('Notes.CorrigeDevoir', 'Corrigé');
      a('Notes.AjoutSujet', 'Ajouter un sujet');
      a('Notes.AjoutCorrige', 'Ajouter un corrigé');
      a('Notes.Devoirs', 'Devoirs');
      a('Notes.Moy', 'Moy.');
      a('Notes.MoyClasse', 'Moy. classe');
      a('Notes.MoyDevoir', 'Moy. devoir');
      a('Notes.AucunDevoir', 'Aucun devoir');
      a('Notes.Note', 'Note');
      a('Notes.Coefficient', 'Coeff.');
      a('Notes.Bareme', 'Notation sur');
      a('Notes.NoteSur', 'Noté sur %s');
      a('Notes.saisirLaNote', 'Saisir la note');
      a('Notes.saisirLaNoteEtRemarque', 'Saisir la note et la remarque');
      a('Notes.voirMoyenne', 'Voir la moyenne et les anciennes notes');
      a('Notes.voirFicheEleve', 'Voir la fiche élève');
      a(
        'Notes.RenseignezUneNote',
        'Renseignez une note pour ajouter une remarque',
      );
      a(
        'Notes.confirmationSupressionCommentaireSurNote',
        'La désactivation de la saisie de remarques sur les notes entrainera la suppression des remarques déjà saisies.\nConfirmez-vous la désactivation ?',
      );
      a('FicheService.MoyenneService', 'Moyenne du service :');
      a('FicheService.MoyenneGenerale', 'MOYENNE GÉNÉRALE :');
      a('FicheService.CoefficientGeneral', 'Coefficient');
      a('FicheService.CoefficientSousService', 'Coefficient sous-service');
      a('FicheService.Facultatif', 'Facultatif');
      a('FicheService.DevoirSupMoyenne', 'Ne compter que les devoirs > moy');
      a('FicheService.BonusMalus', 'Tenir compte des bonus / malus');
      a('FicheService.Ponderer', 'Pondérer');
      a('FicheService.NotePlusHaute', 'la note la plus haute');
      a('FicheService.NotePlusBasse', 'la note la plus basse');
      a('FicheService.Arrondir', 'arrondir la moyenne à la limite');
      a('FicheService.Superieure', 'Supérieure');
      a('FicheService.LaPlusProche', 'La plus proche');
      a(
        'FicheService.ErreurSaisieNote',
        'La valeur doit être comprise entre %d et %d',
      );
      a('FicheService.ModeCalculMoyenne', 'Mode de calcul de la moyenne');
      a(
        'FicheService.ModeCalculMoyenneSousService',
        'Moyenne des sous-services',
      );
      a('FicheService.ModeCalculMoyenneDevoir', 'Moyenne des devoirs');
      a('FicheService.MoyenneBulletin', 'Moy. de référence relevé/bulletin');
      a('FicheService.MoyenneBulletinGroupe', 'Tous les élèves du groupe');
      a('FicheService.MoyenneBulletinClasse', 'Les élèves de la même classe');
      a('EquipePedagogique.professeurPrincipal', 'Professeur principal');
      a('EquipePedagogique.tuteur', 'Tuteur');
      a('EquipePedagogique.liste.titre.nom', 'Nom');
      a('EquipePedagogique.liste.titre.matiereFonction', 'Matière/Fonction');
      a(
        'EquipePedagogique.professeursDEquipe',
        "Professeurs de l'équipe pédagogique",
      );
      a(
        'EquipePedagogique.autresProfesseursDEquipe',
        "Autres professeurs de l'élève",
      );
      a(
        'EquipePedagogique.personnelsDEquipe',
        "Personnels de l'équipe pédagogique",
      );
      a('EquipePedagogique.fonctionInconnue', 'Fonction inconnue');
      a('EquipePedagogique.sansMatiere', 'Sans matière');
      a('Agenda.CreerEvenement', 'Nouvel évènement');
      a(
        'Agenda.AucunEvenement',
        'Aucun évènement publié pour la semaine sélectionnée',
      );
      a('Agenda.AucunEvenementPublie', 'Aucun évènement publié');
      a('Agenda.EvenementVide', 'Aucun commentaire');
      a('Agenda.Salle', 'Salle');
      a('Agenda.President', 'Président');
      a('Agenda.ParentsDelegues', 'Parents délégués');
      a('Agenda.ElevesDelegues', 'Élèves délégués');
      a('Agenda.ProfesseurPrincipal', 'Professeur principal');
      a('Agenda.ProfesseursPrincipaux', 'Professeurs principaux');
      a('Agenda.Documents', 'Documents');
      a('Agenda.SemaineDu', 'semaine du');
      a(
        'Agenda.AgendaAttentionEvtPeriodique',
        'Attention, évènement périodique',
      );
      a(
        'Agenda.AgendaEvtPeriodiqueConfirmerModif',
        "Cet évènement fait partie d'une série. Confirmez-vous la modification ?",
      );
      a(
        'Agenda.AgendaEvtPeriodiqueConfirmerSupp',
        "Cet évènement fait partie d'une série. Confirmez-vous la suppression ?",
      );
      a(
        'Agenda.AgendaSupprimerEvtUniquementOpt1',
        'de cet évènement uniquement',
      );
      a(
        'Agenda.AgendaSupprimerTousEvtsDeLaSerieOpt2',
        'de tous les évènements de la série',
      );
      a(
        'Agenda.AgendaSuppressionEvt',
        "L'évènement sélectionné va être supprimé.",
      );
      a('Agenda.AgendaConfirmerSupp', 'Confirmez-vous la suppression ?');
      a('Agenda.AgendaHintEvtPEriodique', 'Evènement périodique');
      a('Agenda.AgendaHintPieceJointes', 'avec pièces jointes');
      a('Agenda.Partage', 'Partagé');
      a('Agenda.NonPartage', 'Non partagé');
      a('Agenda.EvenementPartage', 'Évènement partagé');
      a('Agenda.EvenementModifie', 'Événement périodique modifié');
      a('Agenda.afficherEvenementsPasses', 'Afficher les évènements passés');
      a('Fenetre_SaisieAgenda.NouvelEvenement', 'Nouvel évènement');
      a(
        'Fenetre_SaisieAgenda.ModificationEvenement',
        "Modification de l'évènement",
      );
      a('Fenetre_SaisieAgenda.PublicConcerne', 'Public concerné');
      a('Fenetre_SaisieAgenda.ClassesGroupes', 'Classes/Groupes');
      a('Fenetre_SaisieAgenda.Publie', 'Partagé avec *');
      a(
        'Fenetre_SaisieAgenda.InfoPartageAvec',
        '* : Les utilisateurs administratifs ayant le droit de consulter tous les évènements voient tous les évènements partagés.',
      );
      a(
        'Fenetre_SaisieAgenda.InfoPartageAvecPrimaire',
        '* : Le directeur voit tous les évènements partagés.',
      );
      a(
        'Fenetre_SaisieAgenda.SelectionnerAuMoinsUneClasseGroupe',
        'Vous avez sélectionné des destinataires liés aux classes/groupes. Veuillez sélectionner au moins une classe ou un groupe.',
      );
      a(
        'Fenetre_SaisieAgenda.SelectionnerAuMoinsUneEntite',
        'Vous avez sélectionné des classes/groupes. Veuillez sélectionner au moins un destinataire (Equipe pédagogique, Personnels, ... ).',
      );
      a('Fenetre_SaisieAgenda.ALieuTousLesJours', 'A lieu tous les jours');
      a('Fenetre_SaisieAgenda.ALieuTousLesNJours', 'A lieu tous les %d jours');
      a(
        'Fenetre_SaisieAgenda.ALieuToutesLesSemaines',
        'A lieu toutes les semaines',
      );
      a(
        'Fenetre_SaisieAgenda.ALieuToutesLesNSemaines',
        'A lieu toutes les %d semaines',
      );
      a('Fenetre_SaisieAgenda.ALieuTousLesMois', 'A lieu tous les mois');
      a('Fenetre_SaisieAgenda.ALieuTousLesNMois', 'A lieu tous les %d mois');
      a(
        'Fenetre_SaisieAgenda.DescriptionUniquementLesJoursOuvres',
        'uniquement les jours ouvrés',
      );
      a('Fenetre_SaisieAgenda.tousLesMoisRelatif', 'tous les mois');
      a('Fenetre_SaisieAgenda.tousLesNMoisRelatif', 'tous les %d mois');
      a('Fenetre_SaisieAgenda.ACompterDU', 'à compter du %s');
      a('Fenetre_SaisieAgenda.Jusquau', "jusqu'au %s");
      a('Fenetre_SaisieAgenda.LeJourSem', 'le %s');
      a('Fenetre_SaisieAgenda.JourSemSuite', ', %s');
      a('Fenetre_SaisieAgenda.LeJourDuMois', 'le %d');
      a('Fenetre_SaisieAgenda.LeMoisRelatif', 'Le %s');
      a('Fenetre_SaisieAgenda.DeH', 'de');
      a('Fenetre_SaisieAgenda.AH', 'à');
      a('Fenetre_SaisieAgenda.DefinirPeriodicite', 'Définir une périodicité');
      a(
        'Fenetre_SaisieAgenda.ModifierLaPeriodicite',
        'Modifier la périodicité',
      );
      a(
        'Fenetre_SaisieAgenda.TitreFenetrePeriodicite',
        "Périodicité de l'évènement",
      );
      a('Fenetre_SaisieAgenda.FenetrePeriodiciteQuotidienne', 'Quotidienne');
      a('Fenetre_SaisieAgenda.FenetrePeriodiciteHebdomadaire', 'Hebdomadaire');
      a(
        'Fenetre_SaisieAgenda.FenetrePeriodiciteMensuelleFixe',
        'Mensuelle fixe',
      );
      a(
        'Fenetre_SaisieAgenda.FenetrePeriodiciteMensuellePersonalise',
        'Mensuelle personnalisée',
      );
      a('Fenetre_SaisieAgenda.FenetrePeriodiciteTousLes', 'Tous les');
      a('Fenetre_SaisieAgenda.FenetrePeriodiciteJours', 'jour(s)');
      a('Fenetre_SaisieAgenda.FenetrePeriodiciteToutesLes', 'Toutes les');
      a('Fenetre_SaisieAgenda.FenetrePeriodiciteSemaines', 'semaine(s)');
      a('Fenetre_SaisieAgenda.FenetrePeriodiciteLe', 'Le');
      a('Fenetre_SaisieAgenda.FenetrePeriodiciteMois', 'mois');
      a(
        'Fenetre_SaisieAgenda.FenetrePeriodiciteJoursOuvres',
        'Sauf vacances et jours fériés',
      );
      a('Fenetre_SaisieAgenda.FenetrePeriodiciteDu', 'Du');
      a('Fenetre_SaisieAgenda.FenetrePeriodiciteAu', 'Au');
      a(
        'Fenetre_SaisieAgenda.FenetrePeriodiciteSupprimerPeriodicite',
        'Supprimer la périodicité',
      );
      a(
        'Fenetre_SaisieAgenda.FenetrePeriodiciteMessConfirmSuppEvtPErso',
        'La modification de la périodicité va entrainer la suppression des évènements personnalisés de la série.\n\nConfirmez-vous la modification ?',
      );
      a(
        'Fenetre_SaisieAgenda.publicationPageEtablissement',
        'Publier sur la page établissement',
      );
      a(
        'Fenetre_SaisieAgenda.partageSurPageEtablissement',
        'Publié sur la page établissement',
      );
      a('Fenetre_SaisieAgenda.TitreEvenement', "Titre de l'évènement");
      a('Fenetre_SaisieAgenda.RedigerTitreEvenement', 'Rédiger votre titre');
      a('Fenetre_SaisieAgenda.ContenueEvenement', "Contenu de l'évènement");
      a(
        'Fenetre_SaisieAgenda.RedigerContenueEvenement',
        'Rédiger le contenu de votre évènement',
      );
      a(
        'Fenetre_SaisieAgenda.AjouterPieceJointes',
        'Ajouter des pièces jointes',
      );
      a('Fenetre_SaisieAgenda.AvecHoraire', 'Avec horaire');
      a('Fenetre_SaisieAgenda.ParClasses', 'par classes');
      a('Fenetre_SaisieAgenda.OuGroupes', 'ou groupes');
      a('Fenetre_SaisieAgenda.ATitreIndividuel', 'À titre individuel');
      a('Fenetre_SaisieAgenda.DescDateDebut', "Date de début de l'évènement");
      a('Fenetre_SaisieAgenda.DescDateFin', "Date de fin de l'évènement");
      a(
        'Fenetre_SaisieAgenda.DescDateDebutPeriodique',
        "Date de début de la périodicité de l'évènement",
      );
      a(
        'Fenetre_SaisieAgenda.DescDateFinPeriodique',
        "Date de fin de la périodicité de l'évènement",
      );
      a('Fenetre_SaisieAgenda.DescComboTypePeriodicite', 'Type de périodicité');
      a('Fenetre_SaisieAgenda.Categorie', 'Catégorie');
      a(
        'Fenetre_SaisieAgenda.WAI.destinataireClasseGroupe',
        'Sélection des destinataires par classes et groupes',
      );
      a(
        'Fenetre_SaisieAgenda.WAI.destinataireIndividuel',
        'Sélection des destinataires à titre individuel',
      );
      a('Fenetre_SaisieAgenda.WAI.position', 'Sélectionnez une position');
      a('Fenetre_SaisieAgenda.WAI.jour', 'Sélectionnez un jour');
      a('Fenetre_SaisieAgenda.WAI.heureDebut', 'Heure de début');
      a('Fenetre_SaisieAgenda.WAI.heureFin', 'Heure de fin');
      a(
        'Fenetre_SaisieAgenda.FenetrePeriodiciteBadRangeValue',
        'Les valeurs saisies doivent être comprises entre %s et %s',
      );
      a(
        'RecapAbsenceEleve.SelectionnerUnRecap',
        'Sélectionner un récapitulatif',
      );
      a('RecapAbsenceEleve.ToutesLesMatieres', 'Toutes les matières');
      a(
        'RecapAbsenceEleve.TotalDesHeuresManquees',
        'Total des heures manquées',
      );
      a('RecapAbsenceEleve.TotalDesHeuresM_Info', '(Absences + exclusions)');
      a('RecapAbsenceEleve.Absences', 'Absences élève');
      a('RecapAbsenceEleve.ExclusionCours', 'Exclusions cours');
      a('RecapAbsenceEleve.ExclusionEtablissement', 'Exclusions établissement');
      a('InfosMedicales.adresse1', 'Adresse');
      a('InfosMedicales.adresse2', "Complément d'adresse 1");
      a('InfosMedicales.adresse3', "Complément d'adresse 2");
      a('InfosMedicales.adresse4', "Complément d'adresse 3");
      a('InfosMedicales.cpVille', 'Code postal / Ville');
      a('InfosMedicales.CodePostal', 'Code postal');
      a('InfosMedicales.Ville', 'Ville');
      a('fenetreInfosMedicales.titre', 'Informations médicales');
      a('InfosMedicales.Allergies', 'Allergies');
      a('InfosMedicales.MedecinTraitant', 'Médecin traitant');
      a('InfosMedicales.NomMedecin', 'Nom');
      a('InfosMedicales.Titre', 'Informations médicales');
      a('InfosMedicales.AllergiesAutres', 'Autres informations à communiquer');
      a('InfosMedicales.Telephone', 'Téléphone');
      a(
        'InfosMedicales.TitreNom',
        'Saisissez le nom du médecin traitant de votre enfant.',
      );
      a(
        'InfosMedicales.TitreTelephone',
        'Saisissez le numéro de téléphone du médecin traitant de votre enfant.',
      );
      a(
        'InfosMedicales.IndicatifTelephone',
        "Saisissez l'indicatif du numéro de téléphone du médecin traitant de votre enfant.",
      );
      a(
        'InfosMedicales.MobileTelephone',
        'Saisissez le numéro de téléphone mobile du médecin traitant de votre enfant.',
      );
      a('TvxIntendance.colonne.description', 'Tâche demandée');
      a('TvxIntendance.colonne.detailCommande', 'Détail de la commande');
      a('TvxIntendance.colonne.lieu', 'Salle ou lieu');
      a('TvxIntendance.colonne.demandeur', 'Demandeur');
      a('TvxIntendance.colonne.etatAvancement', 'État de la demande');
      a('TvxIntendance.colonne.nature', 'Nature');
      a('TvxIntendance.colonne.executants', 'Attribuée à');
      a('TvxIntendance.colonne.realiseeLe', 'Réalisé le');
      a('TvxIntendance.colonne.realisationLe', 'Réalisation le');
      a('TvxIntendance.colonne.commentaire', 'Commentaire');
      a('TvxIntendance.colonne.remarque', 'Remarque');
      a('TvxIntendance.colonne.dureeIntervention', 'Durée');
      a('TvxIntendance.fenetre.niveauUrgence', "Niveau d'urgence");
      a('TvxIntendance.fenetre.echeance', 'Échéance le');
      a('TvxIntendance.fenetre.dateReception', 'Date de réception');
      a('TvxIntendance.fenetre.pieceJointe', 'Pièces Jointes');
      a(
        'TvxIntendance.fenetre.msgDetailCommandeObligatoire',
        'Le détail de la commande doit être renseigné',
      );
      a(
        'TvxIntendance.fenetre.msgDetailTacheObligatoire',
        'La tâche demandée doit être précisée',
      );
      a('TvxIntendance.fenetre.attribuerA', 'Attribuer à');
      a(
        'TvxIntendance.TitreCreationTravaux',
        'Créer une nouvelle demande de travaux le %s',
      );
      a(
        'TvxIntendance.TitreCreationTaches',
        'Créer une nouvelle demande de tâche le %s',
      );
      a(
        'TvxIntendance.TitreCreationCommandes',
        'Créer une nouvelle commande le %s',
      );
      a(
        'TvxIntendance.TitreModificationTravaux',
        'Modifier la demande de travaux du %s',
      );
      a(
        'TvxIntendance.TitreModificationTaches',
        'Modifier la demande de tâche du %s',
      );
      a(
        'TvxIntendance.TitreModificationCommande',
        'Modifier la demande de commande du %s',
      );
      a('TvxIntendance.TitreDemandeTravaux', 'Demande de travaux du %s');
      a('TvxIntendance.TitreDemandeTaches', 'Demande de tâche du %s');
      a('TvxIntendance.TitreDemandeCommande', 'Demande de commande du %s');
      a('TvxIntendance.TitreSurColonne.Demande', 'Demande');
      a('TvxIntendance.TitreSurColonne.Traitement', 'Traitement');
      a(
        'TvxIntendance.FenetreSelectionLieu_Titre',
        'Sélectionner des salles ou des lieux',
      );
      a('TvxIntendance.FenetreSelectionLieu_CumulSalles', 'Salle');
      a('TvxIntendance.FenetreSelectionLieu_CumulLieux', 'Lieu');
      a(
        'TvxIntendance.FenetreSelectionLieu_CumulInternat',
        'Hébergement internat',
      );
      a('TvxIntendance.FenetreSelectionLieu_CumulDortoir', 'Dortoir');
      a('TvxIntendance.FenetreSelectionLieu_CumulChambre', 'Chambre');
      a('TvxIntendance.Filtre_MesDemandes', 'Uniquement mes demandes');
      a('TvxIntendance.Filtre_MesTravaux', 'Uniquement mes travaux à réaliser');
      a('TvxIntendance.Filtre_MesTaches', 'Uniquement mes tâches à réaliser');
      a(
        'TvxIntendance.Filtre_MesInterventions',
        'Uniquement mes interventions à réaliser',
      );
      a('TvxIntendance.Filtre_MesCommandes', 'Uniquement mes commandes');
      a(
        'TvxIntendance.Message.SupprimerDemande',
        'Voulez-vous supprimer la demande sélectionnée ?',
      );
      a(
        'TvxIntendance.Message.SupprimerCommande',
        'Voulez-vous supprimer la commande sélectionnée ?',
      );
      a('TvxIntendance.Widget.DemandeParLe', 'Demandé par %s le %s');
      a('TvxIntendance.Widget.Maintenance.Titre', 'Mes travaux à réaliser');
      a(
        'TvxIntendance.Widget.Maintenance.TitreToutesDemandes',
        'Demandes de travaux',
      );
      a(
        'TvxIntendance.Widget.Maintenance.MsgAucun',
        'Aucun travail à réaliser',
      );
      a(
        'TvxIntendance.Widget.Maintenance.MsgAucunToutesDemandes',
        'Aucune demande de travaux',
      );
      a(
        'TvxIntendance.Widget.Secretariat.Titre',
        'Mes tâches en secrétariat à réaliser',
      );
      a(
        'TvxIntendance.Widget.Secretariat.TitreToutesDemandes',
        'Demandes de tâches en secrétariat',
      );
      a('TvxIntendance.Widget.Secretariat.MsgAucun', 'Aucune tâche à réaliser');
      a(
        'TvxIntendance.Widget.Secretariat.MsgAucunToutesDemandes',
        'Aucune demande de tâche',
      );
      a(
        'TvxIntendance.Widget.MaintenanceInfo.Titre',
        'Maintenance Informatique',
      );
      a(
        'TvxIntendance.Widget.MaintenanceInfo.TitreToutesDemandes',
        'Maintenance Informatique',
      );
      a(
        'TvxIntendance.Widget.MaintenanceInfo.MsgAucun',
        'Aucune tâche à réaliser',
      );
      a(
        'TvxIntendance.Widget.MaintenanceInfo.MsgAucunToutesDemandes',
        'Aucune demande de tâche',
      );
      a('TvxIntendance.Widget.commandeExecute.Titre', 'Commandes');
      a(
        'TvxIntendance.Widget.commandeExecute.TitreToutesDemandes',
        'Commandes',
      );
      a(
        'TvxIntendance.Widget.commandeExecute.MsgAucun',
        'Aucune commande à réaliser',
      );
      a(
        'TvxIntendance.Widget.commandeExecute.MsgAucunToutesDemandes',
        'Aucune commande à traiter',
      );
      a(
        'TvxIntendance.ConfirmationTransferer',
        'Voulez-vous vraiment transférer la tâche sélectionnée de "%s" vers "%s"',
      );
      a('TvxIntendance.TransfererVers', 'Transférer la sélection vers "%s"');
      a(
        'TvxIntendance.Type.MaintenanceInformatique',
        'Maintenance informatique',
      );
      a('TvxIntendance.Type.TravauxEntretien', "Travaux d'entretien");
      a('TvxIntendance.Jours', 'Jours');
      a('TvxIntendance.Heures', 'Heures');
      a('TvxIntendance.Minutes', 'Minutes');
      a('TvxIntendance.AucuneMission', 'Aucune mission');
      a('TvxIntendance.AucuneDemande', 'Aucune demande');
      a('TvxIntendance.ComboMissionsRealisees', 'Mes missions réalisées');
      a('TvxIntendance.ComboMissionsARealiser', 'Mes missions à réaliser');
      a('TvxIntendance.ComboTachesRealisees', 'Mes tâches réalisées');
      a('TvxIntendance.ComboTachesARealiser', 'Mes tâches à réaliser');
      a('TvxIntendance.ComboDemandesEnvoyees', 'Mes demandes envoyées');
      a('TvxIntendance.ComboCommandesARealiser', 'Mes commandes à réaliser');
      a('TvxIntendance.ComboCommandesRealisees', 'Mes commandes réalisées');
      a('TvxIntendance.ComboAutres', 'Autres');
      a('TvxIntendance.DupliquerLe', 'Dupliquer le %s');
      a('TvxIntendance.NiveauDUrgenceEleve', "Niveau d'urgence élevé");
      a('TvxIntendance.Tous', 'Tous');
      a('TvxIntendance.Toutes', 'Toutes');
      a(
        'TvxIntendance.DescriptionMission',
        'Description obligatoire sur ce qui est attendu',
      );
      a(
        'TvxIntendance.TraitementSelectionExecutant',
        'Individu(s) chargé(s) de la réalisation',
      );
      a(
        'TvxIntendance.TraitementAttributionCommentaire',
        "Information facultative sur l'attribution",
      );
      a(
        'TvxIntendance.TraitementRealisationRemarque',
        'Information facultative sur la réalisation',
      );
      a('FenetreDevoir.Service', 'Pour le service :');
      a('FenetreDevoir.DateDevoir', 'Date du devoir :');
      a('FenetreDevoir.SousMatiere', 'Sous-matière :');
      a('FenetreDevoir.Classe', 'Élève de la classe');
      a('FenetreDevoir.Groupe', 'Élève du groupe');
      a('FenetreDevoir.Coefficient', 'Coefficient :');
      a('FenetreDevoir.Bareme', 'Notation sur :');
      a(
        'FenetreDevoir.Ramenersur20',
        'Ramener sur %s les notes du devoir lors du calcul de la moyenne',
      );
      a('FenetreDevoir.Facultatif', 'Facultatif');
      a('FenetreDevoir.DevoirFacultatif', 'Devoir facultatif');
      a('FenetreDevoir.CommeUnBonus', 'Comme un bonus');
      a('FenetreDevoir.CommeUneNote', 'Comme une note');
      a('FenetreDevoir.FacultatifAucun', 'Aucun');
      a('FenetreDevoir.FacultatifBonus', 'Facultatif comme un bonus');
      a('FenetreDevoir.FacultatifNote', 'Facultatif comme une note');
      a('FenetreDevoir.Periodes', 'Périodes :');
      a('FenetreDevoir.ElevesDe', 'Élèves de');
      a('FenetreDevoir.PeriodeNotation', 'Période 1');
      a('FenetreDevoir.PeriodeNotation', 'Période 2');
      a('FenetreDevoir.PeriodesDevoir', 'Périodes du devoir');
      a('FenetreDevoir.Commentaire', 'Commentaire :');
      a('FenetreDevoir.DatePublication', 'Publier la note à partir du');
      a('FenetreDevoir.DateDePublication', 'Date de publication');
      a('FenetreDevoir.NotePublieeLe', 'Note publiée le');
      a('FenetreDevoir.DevoirDu', 'Devoir du :');
      a('FenetreDevoir.EvaluationDu', 'Évaluation du :');
      a('FenetreDevoir.Verrouille', 'Devoir verrouillé');
      a(
        'FenetreDevoir.ConfirmerSuppression',
        'Voulez-vous supprimer ce devoir ?',
      );
      a(
        'FenetreDevoir.ReponseEleveEntre',
        'Les élèves pourront répondre entre :',
      );
      a(
        'FenetreDevoir.DetailNotesNonPublie',
        'Les notes de ce service ne sont pas publiées sur les Espaces Élève et Parent',
      );
      a(
        'FenetreDevoir.DecalageUnJourPublicationParentsSoitLe',
        "Conformément au paramétrage de l'Espace Parents, la note sera publiée aux parents un jour après la publication aux élèves, soit le %s",
      );
      a(
        'FenetreDevoir.DecalageXJoursPublicationParentsSoitLe',
        "Conformément au paramétrage de l'Espace Parents, la note sera publiée aux parents %d jours après la publication aux élèves, soit le %s",
      );
      a(
        'FenetreDevoir.AvertissementChangementDeBareme1',
        'Toutes les notes supérieures à %s vont être modifiées !',
      );
      a(
        'FenetreDevoir.ConfirmerChangementDeBareme',
        'Confirmez-vous le changement de notation du devoir ?',
      );
      a('FenetreDevoir.avecLeSujet', 'avec le sujet');
      a('FenetreDevoir.avecLeCorrige', 'avec le corrigé');
      a('FenetreDevoir.AvecCorrigeQCM', "Avec le corrigé de l'iDevoir");
      a(
        'FenetreDevoir.MsgConfirmSupprSujet',
        'Voulez-vous supprimer le sujet du devoir ?',
      );
      a(
        'FenetreDevoir.MsgConfirmSupprCorrige',
        'Voulez-vous supprimer le corrigé du devoir ?',
      );
      a(
        'FenetreDevoir.MsgConfirmModifSujet',
        'Attention votre sujet «%s» va être remplacé. Souhaitez-vous continuer ?',
      );
      a(
        'FenetreDevoir.MsgConfirmModifCorrige',
        'Attention votre corrigé «%s» va être remplacé. Souhaitez-vous continuer ?',
      );
      a('FenetreDevoir.CreerEvaluation', 'Créer une évaluation');
      a('FenetreDevoir.EvaluationAssociee', 'Évaluation associée');
      a('FenetreDevoir.CompetencesEvaluees', 'Compétences évaluées');
      a(
        'FenetreDevoir.GenererCompetencesQCM',
        'Générer une évaluation avec les compétences du QCM',
      );
      a(
        'FenetreDevoir.NeComptabiliserQuUnNiveauPourCompetencesIdentiques',
        "Ne comptabiliser qu'un seul niveau de maitrise pour les compétences évaluées sur plusieurs questions",
      );
      a(
        'FenetreDevoir.MsgConfirmSupprEval',
        "Confirmez-vous la suppression de l'évaluation associée au devoir ?",
      );
      a(
        'FenetreDevoir.MsgSuppressionEvalImpossible',
        "Suppression de l'évaluation liée au devoir impossible.\nLa saisie des évaluations est clôturée.",
      );
      a(
        'FenetreDevoir.MsgModificationCompetencesImpossible',
        "L'ajout de compétences à évaluer est impossible.\n\nLa saisie des évaluations est clôturée pour la période principale ou secondaire.",
      );
      a(
        'FenetreDevoir.MsgModificationCompetencesImpossibleProfDifferent',
        "L'ajout de compétences à évaluer est impossible sur ce service",
      );
      a(
        'FenetreDevoir.MFicheBaremeDifferentDe20',
        '{"titre":" Comment utiliser un barème différent du barème général ?","html":{"_T":23,"V":"<div style=\\\"text-indent: 0px; margin-left: 0px;\\\">&nbsp;</div><div><span style=\\\"font-family: Arial; font-size: 12px;\\\">Un devoir not&eacute; sur un bar&egrave;me de notation diff&eacute;rent du bar&egrave;me g&eacute;n&eacute;ral peut &ecirc;tre pris en compte de deux fa&ccedil;ons dans le calcul de la moyenne du service :</span></div><div style=\\\"font-size: 13px;\\\"><span style=\\\"font-family: Arial; font-size: 12px;\\\">&nbsp;</span></div><div><span style=\\\"font-family: Arial; font-size: 12px;\\\">- Si vous cochez la case <span style=\\\"color: #888888;\\\"><em><strong>Ramener les notes sur 20 lors du calcul de la moyenne</strong></em></span>, PRONOTE ram&egrave;nera toutes les notes sur un bar&egrave;me de 20 avant de calculer la moyenne du service.</span></div><div style=\\\"font-size: 13px;\\\"><span style=\\\"font-family: Arial; font-size: 12px;\\\">&nbsp;</span></div><div><span style=\\\"font-family: Arial; font-size: 12px;\\\">- Si vous ne cochez pas <span style=\\\"color: #888888;\\\"><em><strong>Ramener les notes sur 20 lors du calcul de la moyenne</strong></em></span>, chaque devoir sera pond&eacute;r&eacute; par son bar&egrave;me : ainsi un devoir sur 10 comptera dans la moyenne deux fois moins qu\'un devoir sur 20.</span></div><div style=\\\"font-size: 13px;\\\"><span style=\\\"font-family: Arial; font-size: 12px;\\\">&nbsp;</span></div><div style=\\\"line-height: 115%; margin-left: 0px; margin-right: 0px;\\\"><span style=\\\"font-family: arial,helvetica,sans-serif;\\\"><em><span style=\\\"font-size: 12px;\\\">Exemple&nbsp;:</span><span style=\\\"font-size: 12px;\\\"><br />Vous avez trois notes, 18/20, 2/10 et 1/5.<br />Si vous cochez <span style=\\\"color: #888888;\\\"><strong>Ramener les notes sur 20</strong></span>, la moyenne sera&nbsp;:</span></em></span></div><div style=\\\"line-height: 115%; margin-left: 0px; margin-right: 0px;\\\"><table style=\\\"width: 367px;\\\" border=\\\"0\\\"><tbody><tr><td style=\\\"width: 104.516px;\\\"><div><span style=\\\"font-family: arial,helvetica,sans-serif;\\\">&nbsp;</span></div><span style=\\\"font-family: arial,helvetica,sans-serif;\\\"><em><span style=\\\"font-size: 12px;\\\">&nbsp;&nbsp;&nbsp;</span><span style=\\\"text-decoration: underline;\\\"><span style=\\\"font-size: 12px;\\\">&nbsp;18 + 4 + 4 &nbsp;&nbsp;</span></span></em></span><div style=\\\"line-height: 115%; margin-left: 0px; margin-right: 0px;\\\"><span style=\\\"font-family: arial,helvetica,sans-serif;\\\"><em><span style=\\\"font-size: 12px;\\\">&nbsp; &nbsp; &nbsp;1 + 1 + 1&nbsp;</span></em></span></div></td><td style=\\\"width: 255.484px;\\\"><span style=\\\"font-family: arial,helvetica,sans-serif;\\\"><em><span style=\\\"font-size: 12px;\\\">= 8,67, soit une note de 8,67/20</span></em></span></td></tr></tbody></table></div><div style=\\\"line-height: 115%; margin-left: 0px; margin-right: 0px;\\\"><span style=\\\"font-family: arial,helvetica,sans-serif;\\\"><em><span style=\\\"font-size: 12px;\\\">&nbsp;</span></em></span></div><div style=\\\"line-height: 115%; margin-left: 0px; margin-right: 0px;\\\"><span style=\\\"font-family: arial,helvetica,sans-serif;\\\"><em><span style=\\\"font-size: 12px;\\\">Si vous ne cochez pas <span style=\\\"color: #888888;\\\"><strong>Ramener les notes sur 20</strong></span>, la moyenne sera&nbsp;:</span></em></span></div><div style=\\\"line-height: 115%; margin-left: 0px; margin-right: 0px;\\\"><table style=\\\"width: 370px;\\\" border=\\\"0\\\"><tbody><tr><td style=\\\"width: 105px;\\\"><div><span style=\\\"font-family: arial,helvetica,sans-serif;\\\">&nbsp;</span></div><div><span style=\\\"font-family: arial,helvetica,sans-serif;\\\"><em><em><span style=\\\"text-decoration: underline;\\\"><span style=\\\"font-size: 12px;\\\"><em><span style=\\\"font-size: 12px;\\\">&nbsp; <u>18 + 2 + 1 </u></span><span style=\\\"text-decoration: underline;\\\"><span style=\\\"font-size: 12px;\\\">&nbsp;</span></span></em></span></span></em></em></span></div><div><span style=\\\"font-family: arial,helvetica,sans-serif;\\\"><em><span style=\\\"font-size: 12px;\\\">1 + 0,5 + 0,25&nbsp;</span></em></span></div></td><td style=\\\"width: 257px;\\\"><span style=\\\"font-family: arial,helvetica,sans-serif;\\\"><em><span style=\\\"font-size: 12px;\\\">&nbsp;= 12, soit une note de 12/20</span></em></span></td></tr></tbody></table></div><div style=\\\"line-height: 115%; margin-left: 0px; margin-right: 0px;\\\"><div style=\\\"line-height: 115%; margin-bottom: 13px;\\\"><span style=\\\"font-family: arial,helvetica,sans-serif; font-size: 14px;\\\">&nbsp;</span></div></div>"},"width":532,"height":415,"type":4,"boutons":{"_T":18,"V":1024}}',
      );
      a(
        'FenetreDevoir.MFicheDevoirFacultatif',
        '{"titre":" Qu\'est ce qu\'un devoir facultatif ?","html":{"_T":23,"V":"<div>&nbsp;</div><div><strong><span style=\\\"font-family: Arial; font-size: 12px;\\\">M&eacute;thode 1 : Comme un bonus</span></strong></div><div style=\\\"font-size: 11px;\\\"><strong><span style=\\\"font-family: Arial; font-size: 10px;\\\">&nbsp;</span></strong></div><div><span style=\\\"font-family: Arial; font-size: 12px;\\\">Seuls les points sup&eacute;rieurs &agrave; 10 des devoirs facultatifs sont pris en compte dans le calcul de la moyenne du service ou sous-service.</span></div><div>&nbsp;</div><div style=\\\"padding-left: 30px;\\\"><em><span style=\\\"font-family: Arial; font-size: 12px;\\\">Moyenne des devoirs non facultatifs (12+16) / 2 = 14</span></em></div><div style=\\\"padding-left: 30px;\\\"><em><span style=\\\"font-family: Arial; font-size: 12px;\\\"><span style=\\\"text-decoration: underline;\\\">Devoir facultatif : 17</span><br />Moyenne : (12+16+7) / 2 = 17,5</span></em></div><div style=\\\"padding-left: 30px;\\\"><em><span style=\\\"font-family: Arial; font-size: 12px;\\\"><span style=\\\"text-decoration: underline;\\\">Devoir facultatif : 8</span><br />Moyenne : (12+16+0) / 2 = 14</span></em></div><div style=\\\"font-size: 13px;\\\"><em><span style=\\\"font-family: Arial; font-size: 12px;\\\">&nbsp;</span></em></div><div><strong><span style=\\\"font-family: Arial; font-size: 12px;\\\">M&eacute;thode 2 : Comme une note</span></strong></div><div style=\\\"font-size: 11px;\\\"><strong><span style=\\\"font-family: Arial; font-size: 10px;\\\">&nbsp;</span></strong></div><div><span style=\\\"font-family: Arial; font-size: 12px;\\\">Les devoirs facultatifs sont pris en compte, dans la moyenne du service ou sous-service, uniquement s\'ils am&eacute;liorent la moyenne de l\'&eacute;l&egrave;ve. Afin de ne jamais d&eacute;favoriser l\'&eacute;l&egrave;ve on prend en compte les notes facultatives dans l\'ordre d&eacute;croissant.</span></div><div>&nbsp;</div><div style=\\\"padding-left: 30px;\\\"><em><span style=\\\"font-family: Arial; font-size: 12px;\\\">Moyenne des devoirs non facultatifs (16+18) / 2 = 17</span></em></div><div style=\\\"padding-left: 30px;\\\"><em><span style=\\\"font-family: Arial; font-size: 12px;\\\"><span style=\\\"text-decoration: underline;\\\">Devoirs facultatifs : 18 et 20</span><br />1.on calcule la moyenne avec le meilleur devoir facultatif,<br />on obtient (16+18+20) / (2+1) = 18 <br />2.on calcule &agrave; nouveau la moyenne en prenant on compte l\'autre devoir<br />on obtient (16 +18 +20 +17)/(2+2) = 17,75<br />Le 2&egrave;me devoir facultatif faisant baisser la moyenne il sera ignor&eacute;</span></em></div>"},"width":525,"height":392,"type":4,"boutons":{"_T":18,"V":1024}}',
      );
      a('FenetreDevoir.Categorie', 'Catégorie :');
      a('FenetreDevoir.LibelleCategorie', 'Rédiger le libellé de la catégorie');
      a('FenetreDevoir.RedigezVotreCommentaire', 'Rédigez votre commentaire');
      a('FenetreDevoir.VisibleParEleves', 'visible par les éléves');
      a(
        'FenetreDevoir.activerCommentaireSurNotes',
        'Activer la saisie des remarques sur les notes (publiées aux Parents/Élèves)',
      );
      a('Fenetre_EditionRessourceNumerique.titre', 'Détail de la ressource');
      a('Fenetre_EditionRessourceNumerique.label', 'Titre');
      a('Fenetre_EditionRessourceNumerique.ouvrir', 'Ouvrir la ressource');
      a(
        'Fenetre_EditionRessourceNumerique.suppression',
        'Voulez-vous supprimer la ressource ?',
      );
      a(
        'Fenetre_EditionRessourceNumerique.champObligatoire',
        'Champ obligatoire',
      );
      a(
        'Fenetre_EditionRessourceNumerique.commentaire',
        'Commentaire personnel non publié aux élèves',
      );
      a(
        'WidgetKiosque.infoRessourcesExtrait.titre',
        'Ce manuel contient des ressources numériques, vous en avez extrait %d.',
      );
      a(
        'WidgetKiosque.infoRessourcesExtrait.aucune',
        "Ce manuel contient des ressources numériques, vous n'en avez extrait aucune.",
      );
      a(
        'WidgetKiosque.infoRessourcesExtrait.type',
        'Certaines ressources extraites sont du type :',
      );
      a(
        'WidgetKiosque.infoRessourcesExtrait.taf',
        'Exercice numérique (insérable en tant que travail à faire)',
      );
      a(
        'WidgetKiosque.infoRessourcesExtrait.tafpp',
        'Exercice numérique (insérable en tant que travail à faire ou activité)',
      );
      a('WidgetKiosque.infoRessourcesExtrait.idevoir', 'iDevoir');
      a(
        'FenetrePanierKiosque.fenetreTitre',
        'Liens extraits de manuels numériques',
      );
      a(
        'FenetrePanierKiosque.titreRessourcesIssuesManuelsNumeriques',
        'Ressources issues des manuels numériques',
      );
      a(
        'FenetrePanierKiosque.titreManuelsNumeriques',
        'Les manuels numériques',
      );
      a('FenetrePanierKiosque.colonne.titre', 'Titre');
      a('FenetrePanierKiosque.colonne.commentaire', 'Commentaire personnel');
      a('FenetrePanierKiosque.colonne.date', "Date d'ajout");
      a('FenetrePanierKiosque.colonne.api', 'Api');
      a(
        'FenetrePanierKiosque.bouton.ajouterLien',
        'Ajouter le lien sélectionné',
      );
      a(
        'FenetrePanierKiosque.bouton.ajouterLiens',
        'Ajouter les %d liens sélectionnés',
      );
      a('FenetrePanierKiosque.anciensManuels', 'Anciens manuels');
      a(
        'FenetrePanierKiosque.infoAnciensManuels',
        "Vous n'avez plus la possibilité d'accéder aux anciens manuels, mais les ressources déjà extraites restent utilisables.",
      );
      a(
        'FenetrePanierKiosque.liste.HintLienAcceder',
        'Accéder au lien en ligne',
      );
      a(
        'FenetrePanierKiosque.liste.HintCommentaire',
        'Commentaire personnel pour identifier la ressource parmi la liste des liens',
      );
      a(
        'FenetrePanierKiosque.liste.HintRenduPJTAF',
        "indique que le lien (ou au moins un des liens du manuel) peut être associé à un travail à faire en tant qu'exercice numérique dans la saisie du cahier de textes",
      );
      a(
        'FenetrePanierKiosque.liste.HintEnvoiNote',
        "indique que le lien (ou au moins un des liens du manuel) peut être associé à un devoir en tant qu'iDevoir dans la saisie des notes",
      );
      a(
        'FenetrePanierKiosque.info.TAF',
        "Seules les ressources disposant de l'icône des exercices numériques %s dans le contenu du manuel numérique peuvent être associées à un travail à faire dans PRONOTE.",
      );
      a(
        'FenetrePanierKiosque.info.iDevoir',
        "Seules les ressources disposant de l'icône iDevoir %s dans le contenu du manuel numérique peuvent être associées à un devoir dans PRONOTE.",
      );
      a(
        'FenetrePanierKiosque.info.KiosqueDisponible',
        "Disponible uniquement avec Génération 5, la fonctionnalité a été proposée à l'ensemble des éditeurs partenaires.",
      );
      a(
        'FenetrePanierKiosque.hint.ManuelTAF',
        "indique que ce manuel contient au moins un lien qui peut être associé à un travail à faire en tant qu'exercice numérique dans la saisie du cahier de textes",
      );
      a(
        'FenetrePanierKiosque.hint.ManuelDevoir',
        "indique que ce manuel contient au moins un lien qui peut être associé à un devoir en tant qu'iDevoir dans la saisie des notes",
      );
      a(
        'FenetrePanierKiosque.infoAjoutRessourcesGranulaires',
        'Sélectionnez le manuel puis sélectionnez votre ressource parmi celles que vous avez déjà extraites.\nSi elle n\'est présente pas dans la liste, cliquez sur "Ajouter une ressource". Dans le manuel, récupérez les ressources de votre choix en cliquant sur le bouton %s parmi les ressources exploitables dans PRONOTE.',
      );
      a('FenetrePanierKiosque.creerLien', 'Créer un lien');
      a('FenetrePanierKiosque.ajouterUneRessource', 'Ajouter une ressource');
      a('FenetrePanierKiosque.actualiser', 'Actualiser');
      a(
        'FenetrePanierKiosque.creerL.text0',
        'Pour ajouter un lien dans la saisie du cahier de textes :',
      );
      a(
        'FenetrePanierKiosque.creerL.text1',
        '1. Ouvrez un des manuels proposés :',
      );
      a(
        'FenetrePanierKiosque.creerL.text2',
        "2. Depuis le contenu du manuel numérique, sélectionnez la ressource (contenu, énoncé, vidéo, article, etc.) à l'aide de l'icône suivante : %s",
      );
      a(
        'FenetrePanierKiosque.creerL.text3',
        '3. Envoyez le lien de la ressource vers PRONOTE.',
      );
      a(
        'FenetrePanierKiosque.creerL.text4',
        "4. Depuis PRONOTE, sélectionnez et ajoutez le lien depuis l'affichage de saisie du cahier de textes : ajouter le lien à un contenu ou en documents joints dans un travail à faire.",
      );
      a(
        'FenetrePanierKiosque.creerT.text0',
        'Pour ajouter un exercice numérique :',
      );
      a(
        'FenetrePanierKiosque.creerT.text1',
        '1. Ouvrez un des manuels proposés :',
      );
      a(
        'FenetrePanierKiosque.creerT.text2',
        "2. Depuis le contenu du manuel numérique, sélectionnez la ressource (énoncé, vidéo, article, etc.) à l'aide de l'icône suivante : %s",
      );
      a(
        'FenetrePanierKiosque.creerT.text3',
        '3. Envoyez le lien de la ressource vers PRONOTE.',
      );
      a(
        'FenetrePanierKiosque.creerT.text4',
        "4. Depuis PRONOTE, sélectionnez et ajoutez le lien depuis l'affichage de saisie d'un travail à faire : %s",
      );
      a(
        'FenetrePanierKiosque.creerT.text4b',
        "ajouter un exercice numérique en associant un lien à un travail à faire, l'élève y répondra directement sur le site de l'éditeur et vous récupérerez automatiquement ses réponses dans PRONOTE.",
      );
      a('FenetrePanierKiosque.creerD.text0', 'Pour ajouter un iDevoir :');
      a(
        'FenetrePanierKiosque.creerD.text1',
        '1. Ouvrez un des manuels proposés :',
      );
      a(
        'FenetrePanierKiosque.creerD.text2',
        "2. Depuis le contenu du manuel numérique, sélectionnez la ressource (exercice, vidéo, article, etc.) à l'aide de l'icône suivante : %s",
      );
      a(
        'FenetrePanierKiosque.creerD.text3',
        '3. Envoyez le lien de la ressource vers PRONOTE.',
      );
      a(
        'FenetrePanierKiosque.creerD.text4',
        "4. Depuis PRONOTE, sélectionnez et ajoutez le lien depuis l'affichage de saisie des notes : %s",
      );
      a(
        'FenetrePanierKiosque.creerD.text4b',
        "ajouter un iDevoir en associant un lien à un devoir, l'élève y répondra directement sur le site de l'éditeur et vous récupérerez automatiquement ses réponses et sa note dans PRONOTE.",
      );
      a('FenetrePanierKiosque.creer.manuels', 'Manuels numériques');
      a(
        'SaisieQCM.HintRessentiDifficile',
        "L'élève a indiqué que ce QCM parait difficile",
      );
      a('SaisieQCM.QuestionsFiltrees', '');
      a(
        'SaisieQCM.HintFeedback',
        "Commentaire affiché, lors du corrigé, en regard des réponses de l'élève (selon les modalités d'exécution)",
      );
      a('SaisieQCM.ActiverCaseSensitive', 'Respecter la casse et les accents');
      a(
        'SaisieQCM.QCMnonTermine',
        "Le corrigé n'est pas disponible, l'iDevoir n'est pas terminé.",
      );
      a('SaisieQCM.CDTPourLeQCM', 'Associer le QCM à un cahier de textes');
      a('SaisieQCM.VoirCorrige', "Voir la copie de l'élève");
      a(
        'SaisieQCM.RedonnerTAF',
        'Redonner le travail à faire aux élèves sélectionnés',
      );
      a(
        'SaisieQCM.AnnulerNote',
        'Permettre aux élèves sélectionnés de refaire le devoir',
      );
      a(
        'SaisieQCM.RedonnerEvaluation',
        "Permettre aux élèves sélectionnés de refaire l'évaluation",
      );
      a(
        'SaisieQCM.SupprimerResultat',
        'Supprimer les réponses des élèves sélectionnés',
      );
      a(
        'SaisieQCM.VoirCopiePriseEnCompte',
        'du %s - copie prise en compte dans le devoir',
      );
      a('SaisieQCM.VoirCopiePriseEnCompteTAF', 'du %s - copie prise en compte');
      a('SaisieQCM.VoirCopieCachee', "du %s - l'autre copie");
      a('SaisieQCM.CopieNonDisponible', 'copie non disponible');
      a(
        'SaisieQCM.HintBibliotheque',
        "Signale la présence dans la bibliothèque de l'établissement pour le partager avec les autres enseignants",
      );
      a('SaisieQCM.TitreRedonnerTAF', 'Redonner le travail à faire');
      a(
        'SaisieQCM.TitreAnnulerNote',
        "Permettre aux élèves de refaire l'iDevoir",
      );
      a(
        'SaisieQCM.TexteRedonnerTAF',
        'Définir la date à laquelle le travail à faire doit être rendu',
      );
      a(
        'SaisieQCM.PrendreEnCompteMeilleureNote',
        'Prendre en compte la meilleure note',
      );
      a(
        'SaisieQCM.PrendreEnCompteDerniereNote',
        'Prendre en compte la dernière note',
      );
      a(
        'SaisieQCM.ConfirmDeleteQCM',
        'Etes-vous sûr de vouloir supprimer ce QCM ? Toutes les questions, résultats, devoirs et contenus associés seront effacés !',
      );
      a(
        'SaisieQCM.HintReponsesProposees',
        "Liste des propositions soumises à l'élève",
      );
      a(
        'SaisieQCM.ActiverCaseSensitiveEpellation',
        'Respecter la casse et les accents',
      );
      a(
        'SaisieQCM.CreerEvaluation',
        'Associer le QCM à une nouvelle évaluation de compétences',
      );
      a(
        'SaisieQCM.FenetreAssocEvaluation.CreerEvaluation',
        'Créer une évaluation',
      );
      a(
        'SaisieQCM.FenetreAssocEvaluation.ModifierEvaluation',
        'Modifier une évaluation',
      );
      a(
        'SaisieQCM.AucunServiceCompatiblePourQCM',
        "Aucun service n'est compatible avec les compétences de ce QCM.\nVérifiez que les référentiels de ces compétences sont affectés à vos classes.",
      );
      a(
        'SaisieQCM.MsgOptionIncompatibleAvecEvaluation',
        'Ce QCM contient l\'option "%s %d %s", il ne peut pas être associé à une évaluation.',
      );
      a('SaisieQCM.SelectionnerUneClasse', 'Sélectionner une classe');
      a(
        'SaisieQCM.ResultatModalitesPersoEleve',
        'Cet élève bénéficie de modalités personnalisées :',
      );
      a('SaisieQCM.ResultatxDureeSuppl', '%d minutes supplémentaires');
      a('SaisieQCM.ResultatxQuestionsEnMoins', '%d questions en moins');
      a(
        'SaisieQCM.messageMajDevoir',
        'Voulez-vous mettre à jour la note du devoir ?',
      );
      a(
        'ExecutionQCM.DepuisEspaceEleve',
        "Pour être pris en compte par l'enseignant, le QCM doit impérativement être exécuté depuis l'Espace Élèves",
      );
      a(
        'ExecutionQCM.DepuisEspaceParent',
        "Ce QCM n'a pas encore été exécuté.\nSouhaitez-vous le faire avec votre enfant ?",
      );
      a('ExecutionQCM.typesQCM.IDevoir', 'IDevoir');
      a('ExecutionQCM.typesQCM.QCMDeTaf', 'QCM');
      a('ExecutionQCM.typesQCM.QCMDeContenu', 'QCM de révision');
      a(
        'ExecutionQCM.notation.devoir',
        '<p>iDevoir <strong>comptabilis&eacute; dans la moyenne </strong>(not&eacute; sur %d)</p>',
      );
      a(
        'ExecutionQCM.notation.evaluation',
        '<p>iDevoir <strong>comptabilis&eacute; dans le bilan de comp&eacute;tences</strong></p>',
      );
      a(
        'ExecutionQCM.notation.evaluationEtDevoir',
        '<p>iDevoir <strong>comptabilis&eacute; dans la moyenne </strong>(not&eacute; sur %d) et<strong> dans le bilan de comp&eacute;tences</strong></p>',
      );
      a(
        'ExecutionQCM.notation.taf',
        "<p>QCM <strong>d'entrainement</strong></p>",
      );
      a(
        'ExecutionQCM.notation.contenuCours',
        '<p>QCM <strong>de r&eacute;vision</strong></p>',
      );
      a(
        'ExecutionQCM.corrige.aucun',
        '<p><strong>Sans corrig&eacute;</strong></p>',
      );
      a(
        'ExecutionQCM.corrige.chaque_question',
        '<p>Corrig&eacute; <strong>&agrave; chaque question</strong></p>',
      );
      a(
        'ExecutionQCM.corrige.fin_qcm',
        '<p>Corrig&eacute; <strong>&agrave; la fin</strong></p>',
      );
      a(
        'ExecutionQCM.corrige.fin_date',
        '<p>Corrig&eacute; <strong>&agrave; la date</strong></p>',
      );
      a(
        'ExecutionQCM.presentation.retour_precedent',
        '<p><strong>Retour</strong> &agrave; la question pr&eacute;c&eacute;dente</p>',
      );
      a(
        'ExecutionQCM.presentation.sans_retour_precedent',
        '<p><strong>Sans retour</strong> &agrave; la question pr&eacute;c&eacute;dente</p>',
      );
      a(
        'ExecutionQCM.presentation.limite_temps',
        '<p>Dur&eacute;e <strong>limit&eacute;e &agrave; %s</strong></p>',
      );
      a(
        'ExecutionQCM.presentation.sans_limite_temps',
        '<p>Dur&eacute;e <strong>illimit&eacute;e</strong></p>',
      );
      a(
        'ExecutionQCM.tentatives.max',
        "<p>Jusqu'&agrave; <strong>%d essais</strong> pour am&eacute;liorer le r&eacute;sultat obtenu</p>",
      );
      a(
        'ExecutionQCM.tentatives.xRestants',
        "Nombre d'essais restants : %d/%d",
      );
      a(
        'ExecutionQCM.presentation.RS_IlFautCliquerSurValider',
        'Il est impératif de cliquer sur le bouton « Valider » pour enregistrer les réponses',
      );
      a(
        'ExecutionQCM.presentationCorrige.QCMDejaRealise',
        "Ce QCM a été réalisé plusieurs fois, c'est %s qui est conservé",
      );
      a(
        'ExecutionQCM.presentationCorrige.MeilleurResultat',
        'le meilleur résultat',
      );
      a(
        'ExecutionQCM.presentationCorrige.DernierResultat',
        'le dernier résultat',
      );
      a(
        'ExecutionQCM.presentationCorrige.corrigeALaDate',
        'Corrigé disponible à partir du %s',
      );
      a('ExecutionQCM.presentationCorrige.CorrigeQCMExecute', 'Corrigé du QCM');
      a(
        'ExecutionQCM.presentationCorrige.CorrigeIdevoirExecute',
        "Corrigé de l'iDevoir",
      );
      a(
        'ExecutionQCM.presentationCorrige.limite_temps',
        'Le temps de réponse était limité à %d minutes',
      );
      a(
        'ExecutionQCM.presentationCorrige.sans_limite_temps',
        "Le temps de réponse n'était pas limité",
      );
      a('ExecutionQCM.presentationCorrige.noteObtenue', 'Note obtenue : %s/%s');
      a(
        'ExecutionQCM.presentationCorrige.reponsesDonnees',
        'Réponses données : %d/%d dont %d bonne(s)',
      );
      a(
        'ExecutionQCM.presentationCorrige.VisualiserCorrige',
        'Voir le corrigé',
      );
      a('ExecutionQCM.presentationCorrige.Continuer', 'Continuer');
      a('ExecutionQCM.presentationCorrige.RecommencerQCM', 'Rejouer le QCM');
      a(
        'ExecutionQCM.presentationCorrige.PointsRectifies',
        "Point(s) rectifié(s) par l'enseignant(e)",
      );
      a(
        'ExecutionQCM.presentationCorrige.VisuPDF_Eleve',
        'Générer ma copie en PDF',
      );
      a(
        'ExecutionQCM.presentationCorrige.VisuPDF_Autre',
        'Générer la copie en PDF',
      );
      a('ExecutionQCM.EnCours', 'en cours');
      a('ExecutionQCM.Minutes', 'minutes');
      a('ExecutionQCM.MinutesCourt', 'min.');
      a('ExecutionQCM.SecondesCourt', 'sec.');
      a('ExecutionQCM.Valider', 'Valider');
      a('ExecutionQCM.Terminer', 'Terminer');
      a('QCM.QuestionLibelle', 'Question');
      a('QCM.BaremePts', '%d pts');
      a('ExecutionQCM.valeurRessenti', 'Très difficile');
      a('ExecutionQCM.valeurRessenti', 'Difficile');
      a('ExecutionQCM.valeurRessenti', 'Moyen');
      a('ExecutionQCM.valeurRessenti', 'Facile');
      a('ExecutionQCM.valeurRessenti', 'Très facile');
      a('ExecutionQCM.TitreRessenti', 'Comment était ce QCM ?');
      a('ExecutionQCM.phraseRessenti', "J'ai trouvé ce QCM : ");
      a(
        'ExecutionQCM.phraseFin',
        "C'est la fin de l'iDevoir. Le bouton « Terminer » permet de fermer cette fenêtre.",
      );
      a(
        'ExecutionQCM.phraseFinQCM',
        "C'est la fin du QCM. Le bouton « Terminer » permet de fermer cette fenêtre.",
      );
      a(
        'ExecutionQCM.phraseFinAvantCorrige',
        "C'est la fin de l'iDevoir. Cliquez sur le bouton pour voir le corrigé.",
      );
      a(
        'ExecutionQCM.phraseFinQCMAvantCorrige',
        "C'est la fin du QCM. Cliquez sur le bouton pour voir le corrigé.",
      );
      a('ExecutionQCM.PhraseCloture', 'Cet iDevoir a déjà été terminé.');
      a('ExecutionQCM.PhraseClotureQCM', 'Ce QCM a déjà été terminé.');
      a(
        'ExecutionQCM.PhraseClotureQCMDelaiMax',
        'Impossible de poursuivre ce QCM, le délai de réponse est dépassé.',
      );
      a(
        'ExecutionQCM.PhraseClotureDelaiMax',
        'Impossible de poursuivre cet iDevoir, le délai de réponse est dépassé.',
      );
      a('ExecutionQCM.LisezIndications', 'A lire attentivement');
      a('ExecutionQCM.APropos', 'A propos du QCM');
      a('ExecutionQCM.PageConsignes', 'Consignes');
      a('ExecutionQCM.CommencerQCM', 'Je commence à répondre');
      a('ExecutionQCM.Suivant', 'Suivant');
      a('ExecutionQCM.QCMPublieLe', 'QCM publié le');
      a('ExecutionQCM.RepondreQCM', 'Répondre au QCM');
      a('ExecutionQCM.RepondreQCMContenu', 'QCM pour réviser');
      a('ExecutionQCM.Point', 'Point');
      a('ExecutionQCM.Points', 'Points');
      a('ExecutionQCM.QuestionXSurY', 'Question %s/%s');
      a(
        'ExecutionQCM.ImageNonSupportee',
        "<em>Votre navigateur ne supporte pas l'affichage des images</em>",
      );
      a('ExecutionQCM.FichierIndispo', "Le fichier n'est pas disponible");
      a(
        'ExecutionQCM.AudioNonSupporte',
        'Votre navigateur ne supporte pas les fichiers audio',
      );
      a('ExecutionQCM.BonneReponse', 'Bonne réponse !');
      a('ExecutionQCM.MauvaiseReponse', 'Mauvaise réponse');
      a('ExecutionQCM.ReponsePartielle', 'Réponse partielle');
      a('ExecutionQCM.NonRepondu', 'Non répondu');
      a('ExecutionQCM.Corriger.feedback', 'commentaire : %s');
      a('ExecutionQCM.Corriger.reponseFausse', 'Réponse fausse');
      a(
        'ExecutionQCM.Corriger.bonneReponse',
        'Bonne réponse, vous avez répondu %s.',
      );
      a(
        'ExecutionQCM.Corriger.reponsePartielle',
        'Réponse partielle, vous avez répondu %s.',
      );
      a(
        'ExecutionQCM.Corriger.mauvaiseReponse',
        'Mauvaise réponse, vous avez répondu %s.',
      );
      a('ExecutionQCM.Corriger.reponseAttendu', 'La réponse attendue est %s.');
      a('ExecutionQCM.Corriger.aucuneReponseDonnee', 'Aucune réponse donnée');
      a('ExecutionQCM.Corriger.WAI', 'Corriger');
      a('ExecutionQCM.smiley.ReponseAttendue', 'Réponse attendue');
      a('ExecutionQCM.smiley.ReponseFausse', 'Réponse fausse');
      a('ExecutionQCM.smiley.ReponseCorrecte', 'Réponse correcte');
      a('ExecutionQCM.Corriger.caractereEspaceSpellCheck', 'Espace');
      a('ExecutionQCM.associer', 'Associer');
      a('ExecutionQCM.supprAssociaton', "Supprimer l'association");
      a(
        'ExecutionQCM.selectionnerElement',
        'Sélectionner un élément à associer',
      );
      a('ExecutionQCM.ElementsAAssocier', 'Elément(s) à associer :');
      a('ExecutionQCM.ElementsDejaAssocie', 'Elément(s) déjà associé(s) :');
      a('ExecutionQCM.AucunElementAssocie', 'Aucun élément associé');
      a('ExecutionQCM.JePasse', 'Je passe');
      a('ExecutionQCM.JeReviens', 'Je reviens');
      a('ExecutionQCM.JeContinue', 'Je continue');
      a(
        'ExecutionQCM.phraseClotureNonDemarre',
        "Le QCM est terminé mais n'a jamais été joué.",
      );
      a(
        'ExecutionQCM.FichierSonNonValide',
        "Le fichier son n'est pas valide et ne peut être joué",
      );
      a('ExecutionQCM.FichierSonCache', 'Son');
      a(
        'FenetreParamExecutionQCM.OnlyQlqQuPrisesAuHasard',
        'Seulement quelques questions prises au hasard pour chaque élève',
      );
      a('FenetreParamExecutionQCM.TQuestionsPrisesAuHasard', 'questions');
      a(
        'FenetreParamExecutionQCM.QuestionslesMemes',
        'Les mêmes pour tous les élèves',
      );
      a(
        'FenetreParamExecutionQCM.QuestionsprisesAuHasard',
        'Prises au hasard pour chaque élève',
      );
      a(
        'FenetreParamExecutionQCM.PermettreRessentiEleve',
        "Permettre à l'élève de se prononcer sur le niveau de difficulté ressenti",
      );
      a('FenetreParamExecutionQCM.RessentiEleve', "Ressenti de l'élève");
      a(
        'FenetreParamExecutionQCM.ResultatAfficherNoteInformatif',
        'Afficher la note à titre informatif',
      );
      a(
        'FenetreParamExecutionQCM.ResultatAfficherCartoucheInformatif',
        'Afficher le cartouche à titre informatif',
      );
      a(
        'FenetreParamExecutionQCM.ResultatAvecNoteComptabilisee',
        'Note comptabilisée dans la moyenne',
      );
      a(
        'FenetreParamExecutionQCM.ResultatAvecEvaluationComptabilisee',
        'Évaluation comptabilisée dans les bilans',
      );
      a(
        'FenetreParamExecutionQCM.PersonnalisationElevePA',
        'Personnalisation par élève (temps supplémentaire et questions en moins)',
      );
      a('FenetreParamExecutionQCM.DonnerTempsSupplementaire', 'Donner');
      a(
        'FenetreParamExecutionQCM.minutesTempsSupplementaire',
        'minutes de temps supplémentaire',
      );
      a(
        'FenetreParamExecutionQCM.NombreQuestionsAEnlever',
        'Nombre de questions à enlever',
      );
      a('FenetreParamExecutionQCM.EnleverQuestions', 'Enlever');
      a(
        'FenetreParamExecutionQCM.nbQuestionsAleatoirement',
        'questions aléatoirement',
      );
      a(
        'FenetreParamExecutionQCM.AucunePersonnalisationPAPossible',
        'Aucune personnalisation possible',
      );
      a(
        'FenetreParamExecutionQCM.PersonnalisationPourNEleves',
        'Personnalisation pour %d élèves',
      );
      a(
        'FenetreParamExecutionQCM.PersonnalisationPourNEleve',
        'Personnalisation pour %d élève',
      );
      a(
        'FenetreParamExecutionQCM.PersonnalisationPour0Eleve',
        'Aucune personnalisation',
      );
      a(
        'FenetreParamExecutionQCM.ConfirmSuppressionPersonnalisation',
        'Etes-vous sûr de vouloir supprimer la personnalisation pour les élèves sélectionnés ?',
      );
      a(
        'FenetreParamExecutionQCM.MessagePersonnalisationNonPriseEnCompte',
        'Attention, certains élèves ont une personnalisation qui ne pourra pas être prise en compte',
      );
      a(
        'FenetreParamExecutionQCM.FenetrePersonnalisation.titre',
        "Personnaliser les modalités d'exécution à l'élève",
      );
      a(
        'FenetreParamExecutionQCM.FenetrePersonnalisation.colonne.nom',
        'Élève',
      );
      a(
        'FenetreParamExecutionQCM.FenetrePersonnalisation.colonne.projet',
        "Projet d'accompagnement",
      );
      a(
        'FenetreParamExecutionQCM.FenetrePersonnalisation.colonne.dureeSuppl',
        'Temps supplémentaire (en minutes)',
      );
      a(
        'FenetreParamExecutionQCM.FenetrePersonnalisation.colonne.questEnMoins',
        'Questions en moins',
      );
      a(
        'FenetreParamExecutionQCM.FenetrePersonnalisation.ajouter',
        'Ajouter un élève',
      );
      a(
        'FenetreParamExecutionQCM.FenetrePersonnalisation.titreSelectionEleves',
        'Élèves',
      );
      a(
        'FenetreParamExecutionQCM.FenetrePersonnalisation.filtreUniquementProjetAcc',
        "Uniquement les élèves ayant un projet d'accompagnement",
      );
      a(
        'FenetreParamExecutionQCM.msgBareme',
        "Cette option n'est disponible que quand toutes les questions ont le même nombre de points",
      );
      a(
        'FenetreParamExecutionQCM.msgEvaluations',
        "Cette option n'est disponible que quand les questions n'évaluent pas de compétences",
      );
      a('FenetreParamExecutionQCM.nbExecutions', "Nombre d'exécutions");
      a(
        'QCM_Divers.MnuImportQCMBiblioEtablissement',
        'de la bibliothèque établissement',
      );
      a(
        'QCM_Divers.PartagerViaBiblioEtablissement',
        "Partager avec les autres enseignants via la bibliothèque de l'établissement",
      );
      a('QCM_Divers.classes', 'Classes');
      a('QCM_Divers.eleves', '%d élèves');
      a('QCM_Divers.ExecVerrouillee', 'Modification impossible.');
      a('QCM_Divers.ExecDejaRepondu', 'Des élèves ont déjà répondu.');
      a(
        'QCM_Divers.ExecPeriodeCloture',
        'Des périodes de notation sont clôturées.',
      );
      a(
        'QCM_Divers.ressenti',
        "Ressenti de l'élève : indique que l'élève a trouvé le QCM difficile",
      );
      a('QCM_Divers.tentatives.title', "Nombre d'exécutions");
      a('QCM_Divers.tentatives.Nbr', 'Nbr.');
      a('QCM_Divers.tentatives.Exe', 'exé.');
      a('QCM_Divers.VisuEleve', 'Simuler la vision élève');
      a('QCM_Divers.uploadCloud', 'Envoyer mes QCM vers mon Cloud PRONOTE');
      a(
        'QCM_Divers.uploadCloudArrierePlan',
        "Le transfert est en cours, une notification vous informera du résultat de l'export.",
      );
      a(
        'QCM_Divers.InfoReponseAssociation',
        "L'élève devra reformer les associations [A <-> B] ci-dessous",
      );
      a(
        'QCM_Divers.listeCompetences.colLibelleCompetences',
        'Compétences évaluées',
      );
      a('QCM_Divers.listeCompetences.colMaitrise', 'Si OK');
      a(
        'QCM_Divers.listeCompetences.hintColMaitrise',
        "Indique le niveau de maitrise qui sera attribué à l'élève en cas de réussite totale à la question",
      );
      a('QCM_Divers.listeCompetences.colCoef', 'Coef.');
      a(
        'QCM_Divers.listeCompetences.ajouterCompetences',
        'Ajouter une compétence',
      );
      a(
        'QCM_Divers.listeCompetences.ChoisirCompetencesParmiExistantes',
        'Choisir parmi les compétences existantes',
      );
      a(
        'QCM_Divers.listeCompetences.SaisirNouvelleCompetence',
        'Saisir une nouvelle compétence',
      );
      a('OffreStage.NonPublie', 'En attente de validation');
      a('OffreStage.PostesPourvus', 'Postes pourvus');
      a('OffreStage.Sujet', 'Sujet');
      a('OffreStage.SujetDetaille', 'Sujet détaillé');
      a('OffreStage.PostesAPourvoir', 'Nb. postes à pourvoir');
      a('OffreStage.DureePrevueEnSemaine', 'Durée prévue (en semaine)');
      a('OffreStage.periodePossibleDeStage', 'Période possible de stage');
      a('OffreStage.dureeEtPeriode', 'Durée et période potentielle');
      a('OffreStage.aucunePeriodeImposee', 'aucune période imposée');
      a('OffreStage.Commentaire', 'Commentaire');
      a('OffreStage.Proposer', 'Proposer cette offre');
      a('OffreStage.TitreEdition', "Modification de l'offre de stage");
      a('OffreStage.EditInterdit_Publie', 'Cette offre de stage est publiée');
      a('OffreStage.TitreListeOffres', 'Offres déjà proposées');
      a('OffreStage.TitreNewOffre', 'Nouvelle offre');
      a('OffreStage.MsgAucuneOffre', "Il n'y a aucune offre de stage.");
      a('OffreStage.titre.Periode', 'Période');
      a('OffreStage.titre.Sujet', 'Saisir le sujet recherché');
      a('OffreStage.titre.Activite', 'Activité');
      a(
        'OffreStage.titre.Recherche',
        "Rechercher par nom d'entreprise, ville, CP",
      );
      a('OffreStage.selectEntreprise', 'Sélectionnez une entreprise');
      a('OffreStage.entre', 'entre');
      a('OffreStage.entreLeXEtLeX', 'le %s et le %s');
      a(
        'OffreStage.titre.FiltreSeulementAvecOffre',
        'Uniquement les entreprises proposant des offres de stage',
      );
      a('OffreStage.ActiviteNonDefini', 'Activité non renseignée');
      a('OffreStage.suppression.titre', "Suppression de l'offre de stage");
      a(
        'OffreStage.suppression.message',
        'Confirmez-vous la suppression de cette offre de stage ?',
      );
      a('OffreStage.nonPourvue', 'non pourvue');
      a('OffreStage.nonPourvueS', 'non pourvues');
      a('OffreStage.pourvue', 'pourvue');
      a('OffreStage.offre', 'offre');
      a('OffreStage.offres', 'offres');
      a('OffreStage.aucuneEntreprise', 'Aucune entreprise');
      a(
        'OffreStage.commentairePublieFamille',
        'Commentaire publié aux élèves / parents',
      );
      a(
        'OffreStage.commentaireInterne',
        "Commentaire interne à l'établissement",
      );
      a('OffreStage.touteLesActivites', 'Toutes les activités');
      a('OffreStage.dureeMinimale', 'Durée minimale (en semaine)');
      a('OffreStage.retourListe', 'Retour à la liste');
      a('OffreStage.details', 'Détails');
      a(
        'OffreStage.nonPublieeSurEspaceParentsEleves',
        'Non publiée sur les Espaces parents et élèves',
      );
      a('OffreStage.nonPubliee', 'Non publiée');
      a('OffreStage.voirCalendrier', 'Voir le calendrier');
      a('OffreStage.PeriodePossible', 'Période possible de stage');
      a('OffreStage.debutStage', 'Date de début');
      a('OffreStage.finStage', 'Date de fin');
      a('OffreStage.ajoutDate', 'Ajouter des dates');
      a('OffreStage.DuAu', 'du %s au %s');
      a('OffreStage.DuAu3points', 'du %s au %s,...');
      a('ReleveDeNotes.CoefficientDevoir', 'coefficient du devoir');
      a('ReleveDeNotes.BaremeDevoir', 'barème du devoir');
      a('ReleveDeNotes.AbreviationCoef', 'Coef.');
      a('ReleveDeNotes.AucuneAppreciation', 'Aucune appréciation');
      a('ReleveDeNotes.Note', 'Note');
      a('ReleveDeNotes.MoyEleve', 'Moy. élève');
      a('TypeOrigineCreationAvanceeTravaux.libelle.ALEtude', "A l'étude");
      a('TypeOrigineCreationAvanceeTravaux.libelle.EnAttente', 'En attente');
      a('TypeOrigineCreationAvanceeTravaux.libelle.Accepte', 'Accepté');
      a('TypeOrigineCreationAvanceeTravaux.libelle.Realise', 'Réalisé');
      a('TypeOrigineCreationAvanceeTravaux.libelle.Refuse', 'Refusé');
      a('TypeOrigineCreationLangueRegionale.langue_0.libelle', 'Aucune');
      a('TypeOrigineCreationLangueRegionale.langue_1.libelle', 'Français');
      a('TypeOrigineCreationLangueRegionale.langue_2.libelle', 'Basque');
      a('TypeOrigineCreationLangueRegionale.langue_3.libelle', 'Breton');
      a('TypeOrigineCreationLangueRegionale.langue_4.libelle', 'Catalan');
      a('TypeOrigineCreationLangueRegionale.langue_5.libelle', 'Corse');
      a('TypeOrigineCreationLangueRegionale.langue_6.libelle', 'Créole');
      a('TypeOrigineCreationLangueRegionale.langue_7.libelle', 'Gallo');
      a(
        'TypeOrigineCreationLangueRegionale.langue_8.libelle',
        "Occitan langue d'OC",
      );
      a(
        'TypeOrigineCreationLangueRegionale.langue_9.libelle',
        "Langue régionale d'Alsace",
      );
      a(
        'TypeOrigineCreationLangueRegionale.langue_10.libelle',
        'Langue régionale des pays mosellans',
      );
      a(
        'TypeOrigineCreationLangueRegionale.langue_11.libelle',
        'Langues mélanésiennes',
      );
      a('TypeOrigineCreationLangueRegionale.langue_12.libelle', 'Tahitien');
      a('TypeOrigineCreationLangueRegionale.langue_13.libelle', 'Futunien');
      a('TypeOrigineCreationLangueRegionale.langue_14.libelle', 'Wallisien');
      a(
        'TypeModeCalculPositionnementService.libelle.ModeCalculDefaut',
        'Mode 1',
      );
      a(
        'TypeModeCalculPositionnementService.libelle.ModeCalculNDernieresEvals',
        'Mode 2',
      );
      a(
        'TypeModeCalculPositionnementService.libelle.ModeCalculNMeilleuresEvals',
        'Mode 3',
      );
      a(
        'TypeModeCalculPositionnementService.libelle.ModeCalculPonderationAutoProgressive',
        'Mode 4',
      );
      a(
        'TypeModeCalculPositionnementService.explication.ModeCalculDefaut',
        'Positionnement calculé à partir des évaluations affichées',
      );
      a(
        'TypeModeCalculPositionnementService.explication.ModeCalculNDernieresEvalsNbSing',
        'Positionnement calculé à partir de la dernière évaluation',
      );
      a(
        'TypeModeCalculPositionnementService.explication.ModeCalculNDernieresEvalsNb',
        'Positionnement calculé à partir des %d dernières évaluations',
      );
      a(
        'TypeModeCalculPositionnementService.explication.ModeCalculNDernieresEvalsPourcent',
        'Positionnement calculé à partir des %d derniers pourcents des évaluations',
      );
      a(
        'TypeModeCalculPositionnementService.explication.ModeCalculNMeilleuresEvalsNbSing',
        'Positionnement calculé à partir de la meilleure évaluation',
      );
      a(
        'TypeModeCalculPositionnementService.explication.ModeCalculNMeilleuresEvalsNb',
        'Positionnement calculé à partir des %d meilleures évaluations',
      );
      a(
        'TypeModeCalculPositionnementService.explication.ModeCalculNMeilleuresEvalsPourcent',
        'Positionnement calculé à partir des %d meilleurs pourcents des évaluations',
      );
      a(
        'TypeModeCalculPositionnementService.explication.ModeCalculPonderationAutoProgressive',
        'Positionnement calculé avec une pondération progressive automatique des évaluations (coeff 1 à la plus ancienne, puis 2, 3 ...)',
      );
      a('PageCompte.Identifiant', 'Identifiant');
      a('PageCompte.MotDePasse', 'Mot de passe');
      a('PageCompte.Autorisations', 'Autorisations');
      a('PageCompte.CompteEnfant', 'Infos du compte');
      a('PageCompte.Modifier', 'Modifier');
      a('PageCompte.Details', 'Détails');
      a(
        'PageCompte.titreEcranMotDePasse',
        'Modification de votre mot de passe',
      );
      a(
        'PageCompte.titreEcranMotDePasseEnfant',
        'Modification du mot de passe de votre enfant',
      );
      a(
        'PageCompte.libelle1EcranMotDePasse',
        'Saisissez votre mot de passe actuel :',
      );
      a(
        'PageCompte.libelle2EcranMotDePasse',
        'Saisissez votre nouveau mot de passe :',
      );
      a(
        'PageCompte.libelle3EcranMotDePasse',
        'Confirmez votre nouveau mot de passe :',
      );
      a(
        'PageCompte.libelle1EcranMotDePasseEleve',
        'Saisissez le nouveau mot de passe :',
      );
      a(
        'PageCompte.libelle2EcranMotDePasseEleve',
        'Confirmez le nouveau mot de passe :',
      );
      a(
        'PageCompte.titreEcranIdentifiant',
        'Modification de votre identifiant',
      );
      a(
        'PageCompte.libelle1EcranIdentifiant',
        'Saisissez votre mot de passe :',
      );
      a(
        'PageCompte.libelle2EcranIdentifiant',
        'Saisissez votre nouvel identifiant :',
      );
      a(
        'PageCompte.conseil2EcranIdentifiant',
        '(Un identifiant doit comporter au moins %d caractères)',
      );
      a(
        'PageCompte.libelle3EcranIdentifiant',
        'Confirmez votre nouvel identifiant :',
      );
      a(
        'PageCompte.message3Identifiant',
        'Erreur dans la saisie des nouveaux identifiants.',
      );
      a(
        'PageCompte.MsgEnfant1',
        "Votre enfant peut personnaliser son mot de passe à partir de l'onglet \"Mes données > Compte\" lorsqu'il est connecté à l'Espace Élèves de l'établissement.",
      );
      a(
        'PageCompte.MsgEnfant2',
        "Si votre enfant oublie son mot de passe vous pourrez le supprimer afin d'en saisir un nouveau.",
      );
      a('PageCompte.DerniereConnexion', 'Dernière connexion');
      a('PageCompte.NumeroINE', 'Numéro INE');
      a('PageCompte.ProjetsAccompagnement', "Projets d'accompagnement");
      a(
        'PageCompte.ProjetConsultable',
        "Ce projet est consultable par l'équipe pédagogique",
      );
      a(
        'PageCompte.ProjetNonConsultable',
        "Ce projet n'est pas consultable par l'équipe pédagogique",
      );
      a('PageCompte.AmenagementsProjet', 'Aménagements en place');
      a('PageCompte.PratiquesAlimentaires', 'Alimentation');
      a('PageCompte.autorisationsSortie', 'Autorisations de sortie');
      a(
        'PageCompte.ConfirmationSuppression',
        'Confirmez-vous la suppression ?',
      );
      a(
        'PageCompte.ApplicationMobileEnregistres',
        'Applications mobiles enregistrées',
      );
      a('PageCompte.DateAjout', 'Ajouté le %s');
      a('PageCompte.DateDerniereConnexion', 'Dernière connexion le %s');
      a('PageRemplacement.RemplacePar', 'Remplacé par');
      a('PageRemplacement.Annule', 'Annulé');
      a(
        'PageRemplacement.Remplacement_AucunCours',
        'Aucun cours non assuré pour la période sélectionnée',
      );
      a('AutorisationSortie.titre', 'Autorisations de sortie');
      a(
        'AutorisationSortie.intro',
        "Choisissez l'autorisation de sortie de votre enfant. Quelque soit l'autorisation choisie, votre enfant ne pourra quitter l'établissement entre deux heures de cours.",
      );
      a(
        'AutorisationSortie.fixee',
        "Les entrées/sorties de votre enfant sont contrôlées selon l'autorisation suivante :",
      );
      a(
        'InfosEnfantPrim.autoriseSortie.titreRubrique',
        'Autorisation de sortie',
      );
      a(
        'InfosEnfantPrim.autoriseSortie.libelleAutorisation',
        "J'autorise mon enfant à sortir seul",
      );
      a('InfosEnfantPrim.compte.titre', 'Compte');
      a('InfosEnfantPrim.compte.profil', 'Profil');
      a(
        'InfosEnfantPrim.autresContacts.titreRubrique',
        "Personne à contacter en cas d'urgence et/ou autorisée à récupérer l'enfant à la sortie",
      );
      a(
        'InfosEnfantPrim.autresContacts.cbAAppeler',
        "A appeler en cas d'urgence",
      );
      a(
        'InfosEnfantPrim.autresContacts.cbAutoriseARecuperer',
        "Autorisé à récupérer l'enfant",
      );
      a('InfosEnfantPrim.autresContacts.ajouterContact', 'Ajouter un contact');
      a(
        'InfosEnfantPrim.autresContacts.recupererContact',
        'Récupérer un contact',
      );
      a('InfosEnfantPrim.autresContacts.nom', 'Nom');
      a('InfosEnfantPrim.autresContacts.prenom', 'Prénom');
      a('InfosEnfantPrim.autresContacts.parente', 'Lien de parenté');
      a('InfosEnfantPrim.autresContacts.telDom', 'Téléphone domicile');
      a('InfosEnfantPrim.autresContacts.telMob', 'Téléphone mobile');
      a('InfosEnfantPrim.autresContacts.telPro', 'Téléphone professionnel');
      a('InfosEnfantPrim.autresContacts.indicatif', 'Indicatif');
      a(
        'InfosEnfantPrim.autresContacts.infoTelObligatoire',
        'Renseignez obligatoirement au moins un numéro de téléphone',
      );
      a(
        'InfosEnfantPrim.autresContacts.msgNomObligatoire',
        'Vous devez obligatoirement saisir le nom',
      );
      a(
        'InfosEnfantPrim.autresContacts.msgAuMoinsUnTel',
        'Vous devez saisir au moins un des trois champs téléphone',
      );
      a(
        'InfosEnfantPrim.autresContacts.msgConfirmSuppression',
        'Confirmez-vous la suppression de ce contact ?',
      );
      a('RecapAbs.titreFenetreRegimes', 'Sélection des régimes élèves');
      a('RecapAbs.regimes', 'Régimes');
      a('RecapAbs.titreFenetreBourses', 'Sélection des bourses');
      a('RecapAbs.bourses', 'Bourses');
      a(
        'RecapAbs.UniquementDontJeSuisAuteur',
        'Uniquement dont je suis auteur',
      );
      a('RecapAbs.colClasses', 'Classes');
      a('RecapAbs.colEleves', 'Élèves');
      a('RecapAbs.colNaiss', 'Né(e) le');
      a('RecapAbs.colAge', 'Âge');
      a('RecapAbs.colSexe', 'Sexe');
      a('RecapAbs.colRegime', 'Régimes');
      a('RecapAbs.colBourse', 'Bourses');
      a('RecapAbs.colNbAbs', 'Nb Abs');
      a('RecapAbs.colDureeTot', 'Durée Totale');
      a('RecapAbs.colTotDemi', 'Total ½ journées');
      a('RecapAbs.colOui', 'Oui');
      a('RecapAbs.colNon', 'Non');
      a('RecapAbs.colRepas', 'Absences Repas');
      a('RecapAbs.colInternat', 'Absences Internat');
      a('RecapAbs.colRetardInternat', 'Retards Internat');
      a('RecapAbs.colRetard', 'Retards');
      a('RecapAbs.colRetardCourt', 'Nb.');
      a('RecapAbs.colMinutesRetard', 'Retards en minutes');
      a('RecapAbs.colInfirmerie', 'Infirmerie');
      a('RecapAbs.colTauxAbsenteismeCourt', "Taux d'abs.");
      a('RecapAbs.minutesCourt', 'min');
      a('RecapPunition.colPunition', 'Punitions');
      a('RecapPunition.colSanction', 'Sanctions');
      a('RecapPunition.filles', 'Filles');
      a('RecapPunition.garcons', 'Garçons');
      a('RecapPunition.MC', 'M.C');
      a('RecapPunition.mesuresConservatoires', 'Mesures conservatoires');
      a('RecapPunition.commissions', 'Commissions');
      a('RecapAbs.gpeColAbsJust', 'Justifiées');
      a('RecapAbs.gpeColAbsJustDJ', '½ journées justifiées');
      a('RecapAbs.gpeColAbs', 'Absences');
      a('RecapAbs.criteresCommuns', 'Critères de sélection communs');
      a('RecapAbs.criteres', 'Critères de sélection');
      a(
        'RecapAbs.uniquNonRA',
        'Uniquement les évènements non réglés administrativement',
      );
      a(
        'RecapAbs.uniquJeunes',
        "Uniquement les élèves dont l'âge est inférieur à",
      );
      a('RecapAbs.titreAbs', 'Absences');
      a('RecapAbs.titreRetard', 'Retards');
      a('RecapAbs.uniquAbsSup', 'Uniquement les absences supérieures à');
      a(
        'RecapAbs.uniquAbsTotSup',
        'Uniquement les élèves dont la durée totale des absences est supérieure à',
      );
      a('RecapAbs.uniquAbsInjust', 'Uniquement les absences non justifiées');
      a('RecapAbs.uniquRetardInjust', 'Uniquement les retards non justifiées');
      a('RecapAbs.absRepas', 'Absences aux repas');
      a('RecapAbs.absInternat', "Absences à l'internat");
      a('RecapAbs.retardsInternat', "Retards à l'internat");
      a('RecapAbs.infirmerie', "Passages à l'infirmerie");
      a(
        'RecapAbs.uniquRetardSup',
        'Uniquement les retards de durée supérieure à',
      );
      a('RecapPunition.motifsPunitionSanction', 'Motifs punition/sanction');
      a('RecapPunition.motifsPunition', 'Motifs punition');
      a('RecapPunition.motifsSanction', 'Motifs sanction');
      a('RecapAbs.motifsAbsence', "Motifs d'absence");
      a('RecapAbs.selectionMotifsAbsence', "Sélection des motifs d'absence");
      a('RecapAbs.motifsRetard', 'Motifs de retard');
      a('RecapAbs.selectionMotifsRetard', 'Sélection des motifs de retard');
      a(
        'RecapAbs.selectionMotifsRetardInternat',
        'Sélection des motifs de retard',
      );
      a('RecapAbs.issuesInfirmerie', "Issues d'intervention");
      a(
        'RecapAbs.selectionIssuesInfirmerie',
        "Sélection des issues d'intervention",
      );
      a(
        'RecapAbs.uniquNbRetardInternatSupA',
        'Uniquement les élèves ayant un nombre de retards internat supérieur à',
      );
      a('RecapAbs.creneauxAppel', "Créneaux d'appel");
      a(
        'RecapAbs.selectionnerCreneauxAppel',
        "Sélectionner des créneaux d'appel",
      );
      a(
        'RecapAbs.WAI_TypeDecompteAbsence',
        "Sélectionnez le type de décompte d'absence",
      );
      a('RecapAbs.HeureCours', 'heures de cours');
      a('RecapAbs.DJBrute', 'demi-journées brutes');
      a('RecapAbs.DJCalcule', 'demi-journées calculées');
      a('RecapAbs.DJBulletin', 'demi-journées bulletin');
      a('RecapAbs.NbClasses', '%d classes');
      a('RecapAbs.NbEleves', '%d élèves');
      a('AbsenceVS.HeureDepart', 'Heure départ');
      a('AbsenceVS.HeureRetour', 'Heure retour');
      a('AbsenceVS.xAbsence', '%d absence');
      a('AbsenceVS.coursManqueDepuis', '%d cours manqué depuis le %s');
      a('AbsenceVS.DJBruteDepuis', '%d ½ journée brute depuis le %s');
      a('AbsenceVS.DJCalculeeDepuis', '%d ½ journée calculée depuis le %s');
      a('AbsenceVS.DJBullDepuis', '%d ½ journée bulletin depuis le %s');
      a('AbsenceVS.absRepasDepuis', '%d absence repas depuis le %s');
      a('AbsenceVS.absInternatDepuis', "%d absence à l'internat depuis le %s");
      a('AbsenceVS.retardDepuis', '%d retard depuis le %s');
      a('AbsenceVS.passInfDepuis', "%d passage à l'infirmerie depuis le %s");
      a('AbsenceVS.xAbsences', '%d absences');
      a('AbsenceVS.coursManquesDepuis', '%d cours manqués depuis le %s');
      a('AbsenceVS.DJBrutesDepuis', '%d ½ journées brutes depuis le %s');
      a('AbsenceVS.DJCalculeesDepuis', '%d ½ journées calculées depuis le %s');
      a('AbsenceVS.DJBulletinsDepuis', '%d ½ journées bulletins depuis le %s');
      a('AbsenceVS.absencesRepasDepuis', '%d absences repas depuis le %s');
      a(
        'AbsenceVS.absencesInternatDepuis',
        "%d absences à l'internat depuis le %s",
      );
      a('AbsenceVS.retardsDepuis', '%d retards depuis le %s');
      a(
        'AbsenceVS.retardsInternatDepuis',
        "%d retards à l'internat depuis le %s",
      );
      a(
        'AbsenceVS.retardInternatDepuis',
        "%d retard à l'internat depuis le %s",
      );
      a(
        'AbsenceVS.passagesInfDepuis',
        "%d passages à l'infirmerie depuis le %s",
      );
      a('AbsenceVS.obsDepuis', '%d observation (%s) depuis le %s');
      a('AbsenceVS.obssDepuis', '%d observations (%s) depuis le %s');
      a('AbsenceVS.sanctionDepuis', '%d sanction (%s) depuis le %s');
      a('AbsenceVS.sanctionsDepuis', '%d sanctions (%s) depuis le %s');
      a('AbsenceVS.commissionDepuis', '%d commission (%s) depuis le %s');
      a('AbsenceVS.commissionsDepuis', '%d commissions (%s) depuis le %s');
      a(
        'AbsenceVS.mesureConservatoireDepuis',
        '%d mesure conservatoire depuis le %s',
      );
      a(
        'AbsenceVS.mesuresConservatoiresDepuis',
        '%d mesures conservatoires depuis le %s',
      );
      a(
        'AbsenceVS.defautCarnetDepuis',
        'Défauts de carnet/carte de %s depuis le %s',
      );
      a('AbsenceVS.exclusionDepuis', '%d exclusion depuis le %s');
      a('AbsenceVS.exclusionsDepuis', '%d exclusions depuis le %s');
      a('AbsenceVS.punitionDepuis', '%d punition depuis le %s');
      a('AbsenceVS.punitionsDepuis', '%d punitions depuis le %s');
      a('AbsenceVS.sanctionSansNatureDepuis', '%d sanction depuis le %s');
      a('AbsenceVS.sanctionsSansNatureDepuis', '%d sanctions depuis le %s');
      a('SaisieCours.SalleNonReservable', "%s n'est pas une salle réservable");
      a(
        'SaisieCours.MaterielNonReservable',
        "%s n'est pas un matériel réservable",
      );
      a(
        'SaisieCours.PlacementImpossibleSalle',
        'Seul les salles réservables peuvent être sélectionnées',
      );
      a(
        'SaisieCours.PlacementImpossibleAucuneRsceReservable',
        "Aucun matériel ou salle réservable n'est sélectionné",
      );
      a(
        'SaisieCours.PlacementToutesRessourcesNonLibres',
        "Aucune ressource n'est libre",
      );
      a(
        'SaisieCours.PlacementRessourcesNonLibres',
        'Certaines ressources ne sont pas libres',
      );
      a('SaisieCours.SalleDisponibles', 'Salles disponibles');
      a('SaisieCours.ClassesDisponibles', 'Classes disponibles');
      a('SaisieCours.ProfDisponibles', 'Professeurs disponibles');
      a('SaisieCours.MaterielDisponibles', 'Matériels disponibles');
      a('SaisieCours.MatiereDisponible', 'Matières disponibles');
      a('SaisieCours.Activite', 'Activité');
      a('SaisieCours.Activites', 'Activités');
      a('SaisieCours.SupprimerCours', 'Supprimer le cours');
      a(
        'SaisieCours.ConfirmerSuppressionRessource',
        'Confirmez-vous la suppression de %s ?',
      );
      a(
        'SaisieCours.ConfirmerSuppressionCours',
        'Confirmez-vous la suppression du cours ?',
      );
      a(
        'SaisieCours.ConfirmerSuppressionCoursDateEffet',
        'Confirmez-vous la suppression du cours à partir du %s ?',
      );
      a(
        'SaisieCours.ConfirmerAnnulationModificationCours',
        "Confirmez-vous l'annulation des modifications du cours ?",
      );
      a(
        'SaisieCours.ConfirmerDeplacementCours',
        'Confirmez-vous le déplacement du cours ?',
      );
      a(
        'SaisieCours.ConfirmerDeplacementCoursDateEffet',
        'Confirmez-vous le déplacement du cours à partir du %s ?',
      );
      a('SaisieCours.PlacerCours', 'Placer le cours');
      a(
        'SaisieCours.ConfirmezCreationCoursPlace',
        "Confirmez-vous la création d'un cours à cette place ?",
      );
      a(
        'SaisieCours.ConfirmezCreationCoursPlaceDateEffet',
        'Confirmez-vous la création de ce cours à partir du %s ?',
      );
      a('SaisieCours.DupliquerCours', 'Dupliquer le cours');
      a(
        'SaisieCours.ConfirmezDupliquationCoursPlace',
        'Confirmez-vous la dupliquation du cours à cette place ?',
      );
      a(
        'SaisieCours.ConfirmezDupliquationCoursPlaceDateEffet',
        'Confirmez-vous la dupliquation du cours à partir du %s ?',
      );
      a(
        'SaisieCours.ConfirmerChangementDureeCours',
        'Confirmez-vous la nouvelle durée du cours ?',
      );
      a(
        'SaisieCours.ConfirmerChangementDureeCoursDateEffet_S',
        'Confirmez-vous la nouvelle durée du cours à partir du %s ?',
      );
      a(
        'SaisieCours.CoursAnnuelModifieDate',
        'Ce cours a été modifié depuis le cahier journal sur les dates suivantes :',
      );
      a(
        'SaisieCours.MessageModifCoursDateEffet',
        "Votre emploi du temps ne sera modifié qu'à partir de la semaine suivant ces dates.",
      );
      a('SaisieCours.SuppressionImpossible', 'Suppression impossible');
      a(
        'SaisieCours.InterdireSuppDerniereClasse',
        'Le cours doit avoir au moins une classe',
      );
      a(
        'SaisieCours.Gabarit.DblClickPlacerCours',
        'Faites un double clic pour confirmer le placement du cours',
      );
      a(
        'SaisieCours.Gabarit.ClickGabaritPlacerCours',
        'Faites un clic pour confirmer le placement du cours, ou déplacez-le sur la place de votre choix',
      );
      a(
        'SaisieCours.UniqementLesSallesReservables',
        'Uniquement les salles réservables',
      );
      a(
        'SaisieCours.UniqementLesMaterielsReservables',
        'Uniquement les matériels réservables',
      );
      a(
        'SaisieCours.SemaineCoursADeplacerNonModifiable',
        "La semaine du cours à déplacer n'est pas modifiable",
      );
      a(
        'SaisieCours.MessageCDTSurCours',
        'Attention, le cahier de textes saisi sur le cours ne sera plus affecté.',
      );
      a('SaisieCours.ReserverSalleSupp', 'Réserver une salle supplémentaire');
      a('SaisieCours.RemplacerSalle', 'Remplacer la salle');
      a('SaisieCours.SupprimerSalle', 'Supprimer la salle');
      a('SaisieCours.AnnulerModification', 'Annuler les modifications');
      a('SaisieCours.ReservationDeSalles', 'Réservation de salles');
      a('SaisieCours.ReservationDeMateriels', 'Réservation de matériels');
      a('SaisieCours.RemplacerMateriel', 'Remplacer le matériel');
      a('SaisieCours.ReserverMateriel', 'Réserver un matériel supplémentaire');
      a('SaisieCours.SupprimerMateriel', 'Supprimer le matériel');
      a('SaisieCours.NbrOccurences', "Nombre d'occurences");
      a('SaisieCours.AssocierURL', 'Ajouter le lien de la visioconférence');
      a('SaisieCours.titre.CapaciteAbr', 'Cap.');
      a('SaisieCours.titre.Infos', 'Infos');
      a('SaisieCours.titreHint.Capacite', 'Capacité');
      a('SaisieCours.titreHint.InformationsHint', 'Informations libres');
      a('SaisieCours.titre.site', 'Site');
      a('SaisieCours.titreHint.siteHint', "Site d'appartenance");
      a('SaisieCours.TitreMaterielNbAReserver', 'Nb. à rés.');
      a('SaisieCours.TitreMaterielNbADisponible', 'Nb. dispo');
      a(
        'SaisieCours.HintMaterielNbAReserver',
        "Nombre d'occurrence du matériel que vous souhaitez réserver",
      );
      a(
        'SaisieCours.HintMaterielNbDisponible',
        "Nombre d'occurrence du matériel disponible",
      );
      a(
        'SaisieCours.ConfirmezRemplacementDe',
        'Confirmez-vous le remplacement de',
      );
      a('SaisieCours.ConfirmezRemplacementPar', 'par :');
      a('SaisieCours.ConfirmezRetraitDe', 'Confirmez-vous le retrait de');
      a(
        'SaisieCours.DroitsInsuffisants',
        "Vous n'avez pas les droits nécessaires",
      );
      a('diagnostic.RessourceIndisponible', '%s est indisponible');
      a('diagnostic.RessourceOccupe', '%s est occupé');
      a(
        'diagnostic.RessourceOccupeConseil',
        '%s est occupé dans un conseil de classe',
      );
      a('diagnostic.RessourceAbsente', 'La ressource est absente');
      a(
        'diagnostic.AucunServiceDemiPension',
        'Aucun service de demi-pension possible',
      );
      a('diagnostic.DJNonTravaille', 'Demi-journée non travaillée');
      a('diagnostic.JourFerie', 'Jour férié');
      a('diagnostic.ElevesOccupes', 'Des élèves de %s sont occupés');
      a(
        'diagnostic.ChangementSemaineGAEV',
        "Les cours avec des groupes à effectif variable ne peuvent pas changer de semaine car les élèves peuvent changer d'une semaine sur l'autre",
      );
      a(
        'diagnostic.RessourceOccupePermanence',
        '%s est occupé dans une permanence',
      );
      a('diagnostic.Recreation', 'Récréation non respectée');
      a(
        'diagnostic.CoursGenant',
        'Des cours existent à cette place dans le cahier journal sur les dates suivantes :',
      );
      a(
        'diagnostic.SitesIncompatiblesHeureTransition',
        'Changement de site en dehors des pauses définies',
      );
      a(
        'diagnostic.SitesIncompatiblesDureeTrajet',
        'Laps de temps insuffisant pour changer de site',
      );
      a(
        'diagnostic.SitesIncompatiblesNbTransitionsJour',
        'Plus de changements de sites que la limite fixée par jour',
      );
      a(
        'diagnostic.SitesIncompatiblesNbTransitionsHebdo',
        'Plus de changements de sites que la limite fixée par semaine',
      );
      a('diagnostic.AbsenceRessource_Abrev', 'A');
      a('diagnostic.DemiPension_Abrev', 'D');
      a('diagnostic.Site_Abrev', 'S');
      a('diagnostic.IndispoEtab_Abrev', 'I');
      a('diagnostic.JourFerie_Abrev', 'F');
      a('diagnostic.GAEV_Abrev', 'P');
      a('diagnostic.LettreBitmapRecreation', 'R');
      a('diagnostic.PlacementImpossible', 'Placement impossible');
      a('diagnostic.PlacementSemaineVerrouillee', 'La semaine est verrouillée');
      a(
        'diagnostic.PlacementSemaineNonModifiable',
        "La semaine n'est pas modifiable",
      );
      a(
        'diagnostic.PlacementRessourcesOccupees',
        'Certaines ressources sont occupées',
      );
      a(
        'diagnostic.PlacementRessourcesIndisponibles',
        'Certaines ressources sont indisponibles',
      );
      a(
        'diagnostic.PlacementRessourcesAbsentes',
        'Certaines ressources sont absentes',
      );
      a('diagnostic.AjouterRessource', 'Ajouter...');
      a('diagnostic.RemplacerRessource', 'Remplacer par...');
      a('diagnostic.PartiesLieesOccupees', 'Parties liées occupées :');
      a(
        'diagnostic.EleveOccupeClasseOuPartie',
        "L'élève est déjà occupé dans un cours au titre de sa classe ou de l'une de ses parties",
      );
      a(
        'diagnostic.ClasseEleveDetacheOccupe',
        "Au moins un des élèves de la classe est déjà occupé dans un cours en tant qu'élève détaché",
      );
      a(
        'diagnostic.PartieEleveDetacheOccupe',
        "Au moins un des élèves de la partie est déjà occupé dans un cours en tant qu'élève détaché",
      );
      a(
        'diagnostic.GroupeEleveDetacheOccupe',
        "Au moins un des élèves du groupe est déjà occupé dans un cours en tant qu'élève détaché",
      );
      a('ChoixEleveGAEV.nouveau', 'Modifier les élèves');
      a(
        'ChoixEleveGAEV.AffecterLesEleves',
        "Affecter les élèves d'une autre semaine...",
      );
      a('Casier.Colonne.Memo', 'Commentaire');
      a('Casier.Cmd.Telecharger', 'Télécharger');
      a('Casier.natures', 'Natures');
      a('Casier.nature', 'Nature');
      a(
        'Casier.HintDocSupprime',
        'Ce destinataire a supprimé le document de son casier numérique.',
      );
      a('Casier.FiltreNonLus', 'Uniquement les non lus');
      a('Casier.msgCasierVide', 'Aucun document dans le casier');
      a(
        'Casier.msgConfirmSupprDest',
        'Confirmez-vous la suppression du document %s de votre casier ?',
      );
      a(
        'Casier.msgConfirmSupprDepositaire',
        'Confirmez-vous la suppression du document %s de tous les casiers où il a été déposé ?',
      );
      a(
        'Casier.msgConfirmSupprCollecte',
        'Confirmez-vous la suppression de la collecte %s ?',
      );
      a(
        'Casier.hintDocumentModifiableDestinataire',
        'Document modifiable par les destinataires',
      );
      a('Casier.marquerLus', 'Marquer comme lu');
      a('Casier.marquerNonLus', 'Marquer comme non lu');
      a('Casier.diffuserDocument', 'Diffuser un document');
      a('Casier.renommerLeDocument', 'Renommer le document');
      a('Casier.destinataires', 'Destinataires');
      a('Casier.personnels', 'Personnels');
      a('Casier.pers', 'Pers.');
      a('Casier.professeurs', 'Professeurs');
      a('Casier.profs', 'Profs');
      a('Casier.maitresDeStage', 'Maître de stage');
      a('Casier.mStage', 'Mds');
      a('Casier.equipePedagogique', 'Équipe pédagogique');
      a('Casier.peda', 'Équipe p');
      a(
        'Casier.AutorisationModification',
        'Permettre aux destinataires de modifier le document',
      );
      a(
        'Casier.ajouterUnCommentaire',
        'Ajouter un commentaire visible par les destinataires',
      );
      a('Casier.nomDuDocument', 'Nom du document');
      a('Casier.renommer', 'Renommer');
      a('Casier.dateDestinataire', 'Déposé le %0:s par %1:s');
      a('Casier.ajouterDoc', 'Ajouter le document');
      a(
        'Casier.TitreFenetreDestResponsables',
        'Choix des responsables destinataires concernés par la diffusion',
      );
      a(
        'Casier.TitreFenetreElevesResponsables',
        'Choix des élèves destinataires concernés par la diffusion',
      );
      a(
        'Casier.choixCritereDisponibilite',
        '%s qui pourront télécharger le document depuis leur Espace %s',
      );
      a('Casier.champsObligatoire', 'Champs obligatoires');
      a(
        'Casier.champsMinimumRequis',
        'Veuillez ajouter une pièce jointe et choisir une nature de document',
      );
      a('Casier.pjObligatoire', 'Veuillez ajouter une pièce jointe');
      a('Casier.categorieObligatoire', 'Veuillez choisir une nature');
      a('Casier.mesDocuments', 'Mes documents');
      a(
        'Casier.IntervenantDiffusion',
        'Diffuser aux profs / personnels / maitre de stage',
      );
      a(
        'Casier.horsContexte.IntervenantDiffusion',
        'Diffuser un document aux profs / personnels / maitre de stage',
      );
      a('Casier.responsables', 'Responsables');
      a('Casier.eleves', 'Élèves');
      a('Casier.choixResponsables', 'Choix des responsables');
      a('Casier.choixEleves', 'Choix des élèves');
      a('Casier.responsablesDiffusion', 'Diffuser aux responsables / élèves');
      a(
        'Casier.horsContexte.responsablesDiffusion',
        'Diffuser un document aux responsables / élèves',
      );
      a('Casier.diffusion', 'Diffusion');
      a('Casier.choisirUneCategorie', 'Choisir une nature');
      a(
        'Casier.deposerNouveauMaitre',
        'Tous, y compris les nouveaux maîtres de stages créés',
      );
      a(
        'Casier.deposerNouveauPersonnel',
        'Tous, y compris les nouveaux personnels créés',
      );
      a(
        'Casier.deposerNouveauProfesseur',
        'Tous, y compris les nouveaux professeurs créés',
      );
      a(
        'Casier.deposerNouveauResponsable',
        'Tous, y compris les nouveaux responsables créés',
      );
      a(
        'Casier.deposeNouveauPersonnel',
        'Déposé dans tous les casiers y compris ceux des nouveaux personnels créés',
      );
      a(
        'Casier.deposeNouveauProfesseur',
        'Déposé dans tous les casiers y compris ceux des nouveaux professeurs créés',
      );
      a(
        'Casier.deposeNouveauResponsable',
        'Déposé dans tous les casiers y compris ceux des nouveaux responsables créés',
      );
      a('Casier.consulterLeMemo', 'Consulter le mémo');
      a('Casier.remplacerLeDocument', 'Remplacer le document');
      a('Casier.supprimerDuCasier', 'Supprimer de mon casier');
      a('Casier.supprimerDeTousLesCasiers', 'Supprimer de tous les casiers');
      a('Casier.cloturerDepot', 'Clôturer le dépôt');
      a('Casier.titreFenetreSaisieCreation', 'Diffuser un document');
      a('Casier.titreFenetreSaisieEdition', 'Modifier le document diffusé');
      a('Casier.dateDePublication', 'Dates de publication');
      a('Casier.dateDeDebut', 'Date de début');
      a('Casier.dateDeFin', 'Date de fin');
      a('Casier.memo', 'Un commentaire est associé à ce document');
      a('Casier.du', 'Du');
      a('Casier.au', 'Au');
      a(
        'Casier.collecterResponsablesEleves',
        'Collecter auprès des responsables / élèves',
      );
      a('Casier.recapitulatifParEleve', 'Récapitulatif par élève');
      a('Casier.collecteDeDocs', 'Collecte de documents');
      a('Casier.selectionnezUneClasse', 'Sélectionnez une classe');
      a('Casier.toutes', 'Toutes');
      a('Casier.classeConcernee', 'Classe(s) concernée(s)');
      a('Casier.classes', 'Classes :');
      a('Casier.depotJusquau', "Dépôt autorisé jusqu'au %s");
      a('Casier.depotJusquauSansDate', "Dépôt autorisé jusqu'au");
      a('Casier.depotSansLimite', 'Dépôt sans date limite');
      a('Casier.pasDeDepotPossibleParLes', 'Pas de dépôt possible par les %s');
      a('Casier.sansDepotEnLigne', 'Sans dépôt en ligne');
      a('Casier.deposePar', 'Déposé par');
      a('Casier.tousLesEleves', 'Tous les élèves');
      a('Casier.uniqAvecDepot', 'Uniquement ceux ayant déposé le document');
      a(
        'Casier.uniqSansDepot',
        "Uniquement ceux n'ayant pas déposé le document",
      );
      a('Casier.telechargerLeDocument', 'Télécharger le document');
      a('Casier.diffuserUneInfo', 'Diffuser une information');
      a('Casier.classe', 'Classe');
      a('Casier.neeLe', 'Né(e) le : %s');
      a(
        'Casier.aucunDocumentACellecter',
        "Aucun document n'est à collecter pour les élèves de cette classe",
      );
      a('Casier.ajouterDirecteurDeLEcole', 'Transmettre à la direction');
      a('Casier.documentBienRemplace', 'Le document a bien été remplacé');
      a('Casier.uniqCeuxDeposes', 'Uniquement ceux déposés');
      a('Casier.uniqCeuxNonDeposes', 'Uniquement ceux non déposés');
      a('Casier.tousLesDocuments', 'Tous les documents');
      a('Casier.diffuseLe', 'Diffusé le %s');
      a('Casier.envoyePar', 'Envoyé par %s');
      a('Casier.signeLe', 'Signé le %s');
      a('Casier.notifierLes', 'Notifier les %s');
      a('Casier.modalitesNotif', 'Modalités de notification');
      a(
        'Casier.notifDescription1',
        "La notification sera envoyée sur l'Espace %s, elle sera relayée sur leur téléphone s'ils ont activé cette fonctionnalité.",
      );
      a('Casier.notifActiveePourLe', 'Notification activée pour le');
      a('Casier.notifRelance', 'Envoyer une notification de relance');
      a('Casier.joursAvantDepot', 'jours avant la date limite de dépôt');
      a(
        'Casier.nombreJoursAvantDepot',
        'Nombre de jours avant la date limite de dépôt',
      );
      a(
        'Casier.sansCollecte',
        "La collecte n'a pas été activée pour le document sélectionné",
      );
      a('Casier.TitreCollecte', 'Collecter');
      a('Casier.CollecteEleve', 'auprès des élèves');
      a(
        'Casier.CollecteEleveParResp',
        "auprès des responsables, au titre de l'élève",
      );
      a('Casier.CollecteResp', 'auprès des responsables');
      a('Casier.depotSansDateLimite', "Dépôt sur l'Espace %s sans date limite");
      a('Casier.depotAvecDateLimite', "Dépôt sur l'Espace %s avec date limite");
      a('Casier.pasDeDepotEnLigne', 'Pas de Dépôt en ligne');
      a('Casier.choisirUneDate', 'Veuillez choisir une date limite de dépôt');
      a(
        'Casier.minMaxInput',
        'Les valeurs saisies doivent être comprises entre 1 et 4',
      );
      a('Casier.modifierCollecte', 'Modifier la collecte');
      a('Casier.nouvelleCollecte', 'Collecter un document déposer par les %s');
      a('Casier.creeUnDoc', 'Collecter un document');
      a('Casier.afficherCollectePublie', 'Afficher les collectes publiées');
      a(
        'Casier.afficherCollecteNonPublie',
        'Afficher les collectes non publiées',
      );
      a(
        'Casier.nouvelleCollecteEleve',
        'Collecter un document auprès des élèves',
      );
      a(
        'Casier.nouvelleCollecteRespEleve',
        "Collecter un document auprès des responsable, au titre de l'élève",
      );
      a(
        'Casier.nouvelleCollecteResp',
        'Collecter un document auprès des responsables',
      );
      a('Casier.notificationActivee', 'Notification activée');
      a('Casier.definirModalites', 'Définir les modalités');
      a('Casier.aDeposerPar', 'À déposer par');
      a('Casier.choixDes', 'Choix des %s');
      a('Casier.contenuNotif', 'Contenu de la notification');
      a('Casier.choixDate', 'Choix de la date');
      a(
        'Casier.modalitesDepot',
        "Modalité de dépôt du document sur l'espace %s",
      );
      a('Casier.DepotSur', "Dépôt du document sur l'espace %s");
      a('Casier.nomDeLaCollecte', 'Nom de la collecte');
      a('Casier.saisirUnNom', 'Veuillez saisir un nom');
      a(
        'Casier.placeholderNomDeLaCollecte',
        'Donnez un nom clair au document que vous souhaitez récupérer',
      );
      a('Casier.typeDeCollecte', 'Type de collecte');
      a('Casier.notifierLesDestinataires', 'Notifier les destinataires');
      a('Casier.apercuDeLaNotification', 'Aperçu de la notification');
      a('Casier.donnerAccesACetteCollecte', "Donner l'accès à");
      a('Casier.documentDepose', 'Document déposé');
      a('Casier.aucunDepose', 'Aucun document déposé');
      a('Casier.DeposeLe', 'Déposé le %s');
      a('Casier.AjouterUnDocument', 'Ajouter un document');
      a('Casier.demarerUneDiscution', 'Démarrer une discussion');
      a('Casier.consulter', 'Consulter');
      a('Casier.btnToutElechargerDocEleve', 'Télécharger tous les documents');
      a('Casier.xResp', '%s responsables');
      a('Casier.1Resp', '1 responsable');
      a('Casier.xEleves', '%s élèves');
      a('Casier.1Eleve', '1 élève');
      a('Casier.tousResp', 'Tous les responsables');
      a('Casier.tousEleves', 'Tous les élèves');
      a('Casier.respSelec', 'Responsables sélectionnés');
      a('Casier.elevesSelec', 'élèves sélectionnés');
      a('Casier.tauxLectureS', 'Taux de lecture pour %s');
      a('Casier.tauxLecture', 'Taux de lecture pour');
      a(
        'Casier.titreFenetreSelectionCollecte',
        'Choix des destinataires concernés par la collecte',
      );
      a(
        'Casier.texteExplicatifEleve',
        'Elèves qui devront déposés le document sur leur Espace',
      );
      a(
        'Casier.texteExplicatifRespEleve',
        'Choix des élèves pour lesquels leur(s) responsable(s) devront déposés le document sur leur Espace Parent',
      );
      a(
        'Casier.texteExplicatifResp',
        'Responsables qui devront déposés le document sur leur Espace',
      );
      a('Casier.hintDocsASigner', '%s documents à signer');
      a('Casier.hintDocsNonLu', '%s documents non lus');
      a('Casier.hintDocASigner', '%s document à signer');
      a('Casier.hintDocNonLu', '%s document non lu');
      a('Casier.WAI.listeProfesseurs', 'Sélection de professeurs');
      a('Casier.WAI.listePersonnels', 'Sélection de personnels');
      a('Casier.WAI.listeEquipePedagogique', "Sélection d'équipe pédagogique");
      a('Casier.WAI.listeMaitreDeStage', 'Sélection de maitres de stage');
      a('Casier.WAI.listeResponsables', 'Sélection de responsables');
      a('Casier.WAI.listeEleves', "Sélection d'élèves");
      a('Casier.WAI.SelecJour', 'Saisissez un nombre de jours');
      a('Casier.WAI.SelecLibelle', 'Saisissez un libelle');
      a('Casier.aSigner', 'À signer');
      a('Casier.aSignerEnTantQue', 'À signer en tant que "%s"');
      a('Casier.DocumentsASigner', 'Documents à signer');
      a('Casier.aSignerWai', 'Document à signer');
      a('Casier.aucunDocumentASigner', 'Aucun document à signer');
      a(
        'Casier.infoDocumentsSignes',
        'Seuls les documents en attente de signature sont présents dans cette liste. Une fois signés vous les trouverez dans %s',
      );
      a('Casier.Signer', 'Signer');
      a(
        'Casier.RedirectionPourSignaturer',
        'Vous allez être redirigé vers la plateforme de signature en ligne.',
      );
      a(
        'Casier.RedirectionSignatureInfoSupp',
        'Une fois le processus terminé, vous pouvez quitter la plateforme et revenir sur PRONOTE',
      );
      a(
        'Casier.InfoPriseEnCompteSignature',
        'La prise en compte de votre signature peut prendre quelques minutes.',
      );
      a('Casier.InfosSignatures', 'À ce jour %d/%d signatures.');
      a(
        'Casier.VersLienSignature',
        'Ouvre la plateforme de signature dans un nouvel onglet',
      );
      a('Casier.DocumentSigne', 'Document signé');
      a('Casier.DocumentSigneLe', 'Vous avez signé ce document le %s');
      a(
        'Casier.VersionDefinitiveSignatures',
        'Vous aurez accès à sa version définitive lorsque tous les signataires auront signés.',
      );
      a('Casier.enCoursDeSignature', 'Signature en attente de validation');
      a('Casier.VersionNonDefinitive', 'version non définitive');
      a('Casier.EnAttenteSignatures', 'En attente des autres signatures (%d)');
      a('Casier.EnAttenteFinalisation', 'En attente de finalisation');
      a('Casier.FiltreNonSignes', 'Uniquement les non signés');
      a(
        'listeDiffusion.selectionnezListe',
        'Sélectionnez une liste de diffusion',
      );
      a('listeDiffusion.titre', 'Listes de diffusion');
      a('listeDiffusion.lesMiens', 'Uniquement mes listes');
      a('listeDiffusion.moi', 'Moi');
      a(
        'listeDiffusion.btnListeDiffusion',
        'Initialiser avec une liste de diffusion',
      );
      a(
        'Messagerie.DiscussionsDesactivees',
        'Les discussions sont désactivées',
      );
      a('Messagerie.1Message', '1 message');
      a('Messagerie.XMessages_D', '%d messages');
      a('Messagerie.1MessageNonLu', '1 message non lu');
      a('Messagerie.XMessagesNonLus_D', '%d messages non lus');
      a('Messagerie.TitreFenetre', 'Nouvelle discussion');
      a('Messagerie.ObjetMsg', 'Objet');
      a('Messagerie.Contenu', 'Contenu');
      a('Messagerie.BtnEnvoyer', 'Envoyer');
      a('Messagerie.DestinatairesMsg', 'Destinataires');
      a('Messagerie.Personnels', 'Personnels');
      a('Messagerie.Profs', 'Professeurs');
      a('Messagerie.Parents', 'Responsables');
      a('Messagerie.Eleves', 'Élèves');
      a('Messagerie.Resp1Legal', 'Responsables préférentiels');
      a('Messagerie.Resp2Legal', 'Responsables non préférentiels');
      a('Messagerie.ProfsPrincipaux', 'Professeurs principaux');
      a('Messagerie.ProfPrincipal', 'Professeur principal');
      a('Messagerie.SelectionStatut', 'Sélectionnez votre statut');
      a('Messagerie.monCPE', 'CPE de mon enfant');
      a('Messagerie.abbrPP', 'PP');
      a('Messagerie.Tuteur', 'Tuteur');
      a('Messagerie.Tuteurs', 'Tuteurs');
      a('Messagerie.abbrTuteur', 'Tuteur');
      a('Messagerie.EquipePeda', 'Équipe pédagogique');
      a('Messagerie.HintPJ', 'Ajouter une nouvelle pièce jointe');
      a('Messagerie.InclureParentsEleves', 'Inclure les parents et les élèves');
      a(
        'Messagerie.HintInclureParentsElevesDisabled',
        'La réponse aux parents et élèves est bloquée car la discussion a trop de destinataires.',
      );
      a('Messagerie.Moi', 'Moi');
      a('Messagerie.HintRepondu', "J'ai repondu");
      a('Messagerie.HintPJMessage', 'Avec pièce(s) jointe(s)');
      a('Messagerie.labelWAIMessage', 'Zone de texte riche saisie du message');
      a('Messagerie.PlaceholderMessage', 'Rédiger votre message');
      a(
        'Messagerie.PlaceholderMessageReponseEnseignant',
        'je réponds à mon enseignant(s)',
      );
      a('Messagerie.TitreFenetreAvertissement', 'Attention');
      a('Messagerie.NonLues', 'Non lues');
      a('Messagerie.HintAjouterSignature', 'Insérer ma signature');
      a('Messagerie.WAI_AfficherDest', 'Afficher les destinataires');
      a('Messagerie.WAI_AfficherPart', 'Afficher les participants');
      a(
        'MessagerieCarnetLiaison.TitreFenetreNouveauPourLEleve',
        'Nouveau message dans le carnet de liaison de %s',
      );
      a(
        'MessagerieCarnetLiaison.TitreFenetreNouveauPourVotreEnfant',
        'Nouveau message dans le carnet de liaison de votre enfant',
      );
      a(
        'MessagerieCarnetLiaison.TitreFenetreDiscussions',
        'Carnet de liaison de %s',
      );
      a(
        'MessagerieCarnetLiaison.AvertissementMessagesPublics',
        "Afin de garantir le suivi de l'élève, les messages du carnet de liaison peuvent être consultés par les autres enseignants et le directeur de l'école.",
      );
      a(
        'MessagerieCarnetLiaison.DirecteurAjoute',
        "Directeur de l'école ajouté",
      );
      a('Messagerie.Titre.MesDiscussions', 'Mes discussions');
      a('Messagerie.Titre.Categories', 'Catégories');
      a('Messagerie.Titre.Historiques', 'Historiques');
      a('Messagerie.SansCategorie', 'Sans catégorie');
      a('Messagerie.MesEleves', 'Mes élèves');
      a('Messagerie.AucuneDiscussion', 'Aucun message');
      a(
        'Messagerie.CommParentEleveInactif',
        "Vous n'avez pas activé la messagerie avec les responsables et les élèves",
      );
      a(
        'Messagerie.CommParentInactif',
        "Vous n'avez pas activé la messagerie avec les responsables",
      );
      a(
        'Messagerie.CommEleveInactif',
        "Vous n'avez pas activé la messagerie avec les élèves",
      );
      a(
        'Messagerie.MsgAucunDestinataire',
        'Veuillez sélectionner un destinataire.',
      );
      a('Messagerie.MsgAucunContenu', 'Veuillez saisir un contenu');
      a('Messagerie.ListeDestinataires', 'Liste des destinataires');
      a('Messagerie.ChoisirDestinataires', 'Choisir le(s) destinataire(s)');
      a('Messagerie.Info.FiltrerMessages', 'Filtrer les messages');
      a(
        'Messagerie.Info.TousMessages',
        'Afficher tous les messages des discussions',
      );
      a('Messagerie.DiscussionAvec', 'Discussions avec %s');
      a(
        'Messagerie.AucuneDiscussionAvec',
        "Il n'y a aucune discussion avec %s",
      );
      a(
        'Messagerie.AucuneDiscussionSelectionnee',
        "Aucun message n'est sélectionné",
      );
      a('Messagerie.NParticipants', '%d participants');
      a('Messagerie.NDestinataire', '%d destinataire');
      a('Messagerie.NDestinataires', '%d destinataires');
      a('Messagerie.ObjetVideDiscussion', 'Discussion (sans objet)');
      a(
        'Messagerie.HintSousDiscussion',
        "Cette discussion ne concerne qu'une partie des destinataires",
      );
      a(
        'Messagerie.AucunProfesseur',
        "Aucun professeur n'a activé les discussions ou son email",
      );
      a(
        'Messagerie.AucunProfesseurPourEleve',
        "Aucun professeur n'a activé les discussions",
      );
      a(
        'Messagerie.AucunPersonnel',
        "Aucun personnel n'a activé les discussions ou son email",
      );
      a(
        'Messagerie.AucunPersonnelPourEleve',
        "Aucun personnel n'a activé les discussions",
      );
      a(
        'Messagerie.ConfirmationSuppression',
        'Les messages sélectionnés vont être supprimés définitivement',
      );
      a('Messagerie.DocumentsJoints', 'Documents joints');
      a('Messagerie.DocumentJoint', 'Document joint');
      a('Messagerie.Menu.Lu', 'Marquer comme lu');
      a('Messagerie.Menu.NonLu', 'Marquer comme non lu');
      a('Messagerie.Menu.Supprimer', 'Mettre à la corbeille');
      a('Messagerie.Menu.ModifierCategories', 'Classer');
      a('Messagerie.Menu.AjouterCategories', 'Classer');
      a('Messagerie.Menu_FermerDiscussion', 'Mettre fin');
      a('Messagerie.Menu_OuvrirDiscussion', 'Rouvrir');
      a(
        'Messagerie.Menu_SignalerPourSuppr',
        'Demander la suppression de cette discussion à %s',
      );
      a('Messagerie.Menu_SupprimerDefinitivement', 'Supprimer définitivement');
      a('Messagerie.Menu_Restaurer', 'Restaurer');
      a(
        'Messagerie.Menu_Purger',
        'Purger les anciens messages de la discussion',
      );
      a('Messagerie.Menu_FenetreDiscussion', 'Isoler dans une fenêtre');
      a('Messagerie.Menu_FenetreConversation', 'Isoler dans une fenêtre');
      a('Messagerie.Menu_Entrer', 'Réintégrer');
      a('Messagerie.Menu_Sortir', 'Se retirer');
      a('Messagerie.Menu_ModifierObjet', "Modifier l'objet de la discussion");
      a(
        'Messagerie.SaisieObjetDiscussion',
        'Saisir le nouvel objet de la discussion',
      );
      a(
        'Messagerie.InactiveParentsEleves',
        "Vous n'avez pas activé la messagerie avec les responsables et les élèves",
      );
      a(
        'Messagerie.InactiveParents',
        "Vous n'avez pas activé la messagerie avec les responsables",
      );
      a('Messagerie.Conversation', 'Tchat');
      a('Messagerie.ContacterVS', 'Contacter la vie scolaire');
      a('Messagerie.EnvoiMessageInstantane', "Envoi d'un tchat");
      a(
        'Messagerie.AlerteEnseignantsPersonnels',
        'Alerte aux enseignants et personnels',
      );
      a(
        'Messagerie.AlerteTypeeEnseignantsPersonnels',
        '%s aux enseignants et personnels',
      );
      a('Messagerie.AlerteTypeeLanceePar', '%s lancée par %s');
      a('Messagerie.AppelDe', 'Appel de %s');
      a(
        'Messagerie.AucunPersonnelConnecte',
        "Aucun contact de vie scolaire n'est connecté actuellement",
      );
      a('Messagerie.NContactVS', '%d contact de la vie scolaire');
      a('Messagerie.NContactsVS', '%d contacts de la vie scolaire');
      a('Messagerie.Destinataires', 'Destinataires');
      a('Messagerie.SelectionDesPersonnels', 'Sélection des personnels');
      a(
        'Messagerie.ConfirmationAuteurDansDestinataires',
        'Êtes-vous sûr de vouloir faire partie des destinataires du message ?',
      );
      a(
        'Messagerie.ConfirmationDestinatairesParentsElevesNouvelle',
        "Êtes-vous sûr de vouloir démarrer une nouvelle discussion avec autant d'élèves (%d) ou de responsables (%d) ?\nUne information pourrait être plus appropriée.",
      );
      a(
        'Messagerie.ConfirmationDestinatairesParentsElevesAjout',
        "Êtes-vous sûr de vouloir ajouter autant d'élèves (%d) ou de responsables (%d) à la discussion ?",
      );
      a('Messagerie.Brouillon', 'Brouillon');
      a('Messagerie.NBrouillons', '%d brouillons');
      a('Messagerie.UnBrouillon', '1 brouillon');
      a('Messagerie.HintEnregistrerBrouillon', 'Enregistrer le brouillon');
      a(
        'Messagerie.HintSupprimerBrouillon',
        'Supprimer définitivement le brouillon et vider la saisie',
      );
      a(
        'Messagerie.ConfirmationSupressionBrouillon',
        'Voulez-vous supprimer définitivement le brouillon et vider la saisie ?',
      );
      a('Messagerie.DemandePriseEnCompte', 'Demande prise en compte');
      a('Messagerie.Archiver', 'Archiver');
      a('Messagerie.Desarchiver', 'Désarchiver');
      a(
        'Messagerie.HintAjouterDest',
        'Ajouter des participants à la discussion',
      );
      a(
        'Messagerie.TousLesProfesseursDejaDestinataires',
        "Tous les professeurs de l'établissement sont déjà destinataires du message",
      );
      a(
        'Messagerie.TousLesPersonnelsDejaDestinataires',
        "Tous les personnels de l'établissement sont déjà destinataires du message",
      );
      a(
        'Messagerie.TousLesElevesDejaDestinataires',
        'Tous les élèves sont déjà destinataires du message',
      );
      a(
        'Messagerie.TousLesResponsablesDejaDestinataires',
        'Tous les responsables sont déjà destinataires du message',
      );
      a('Messagerie.HintDiscussionArchive', 'La discussion est archivée');
      a(
        'Messagerie.ConfirmationEnregistrerBrouillon',
        "Ce message n'est pas sauvegardé, voulez-vous enregistrer le brouillon ?\nVotre discussion sera placée dans vos brouillons.",
      );
      a(
        'Messagerie.BrouillonDiscussion',
        "Brouillon d'une nouvelle discussion",
      );
      a(
        'Messagerie.BrouillonDiscussionTransfert',
        "Brouillon d'une nouvelle discussion (transfert)",
      );
      a('Messagerie.MenuVisu_Repondre', 'Répondre au message');
      a(
        'Messagerie.MenuVisu_AfficherDiscussion',
        'Afficher la discussion du message',
      );
      a('Messagerie.MenuVisu_ReprendreBrouillon', 'Reprendre le brouillon');
      a(
        'Messagerie.MenuVisu_SupprimerBrouillon',
        'Supprimer définitivement le brouillon',
      );
      a('Messagerie.MenuVisu_Copier', 'Copier le texte du message sélectionné');
      a('Messagerie.AbreviationTransfert', 'TR');
      a('Messagerie.TransfererLeMessage', 'Transférer le message');
      a('Messagerie.TransfererLesMessages', 'Transférer les messages');
      a('Messagerie.1Messagetransfere', '1 message transféré');
      a('Messagerie.NMessagestransferes', '%d messages transférés');
      a('Messagerie.Menu_TransfererLeMessage', 'Transférer le message');
      a('Messagerie.Menu_TransfererLaDiscussion', 'Transférer à');
      a(
        'Messagerie.Menu_SignalerLeMessage',
        'Signaler un contenu inapproprié dans le message à %s',
      );
      a('Messagerie.AlerteEstUnExercice', 'Cette alerte est un exercice');
      a(
        'Messagerie.ConfirmationSignalerContenu',
        'Confirmez-vous le signalement de contenu inapproprié dans le message %s ?',
      );
      a(
        'Messagerie.ConfirmationSignalerPourSuppr',
        'Confirmez-vous la demande de suppression de la discussion %s ?',
      );
      a(
        'Messagerie.ConfirmationFermetureDiscussion',
        'Les discussions sélectionnées seront toujours visibles par les participants mais plus personne ne pourra répondre.\n\nÊtes-vous sûr de vouloir mettre fin à ces discussions ?',
      );
      a(
        'Messagerie.ConfirmationOuvertureDiscussion',
        'Tous les participants pourront de nouveau répondre aux discussions sélectionnées.\n\nÊtes-vous sûr de vouloir rouvrir ces discussions ?',
      );
      a('Messagerie.HintDiscussionTerminee', 'La discussion est terminée');
      a(
        'Messagerie.HintSignalementContenu',
        "Signalement d'un contenu inapproprié",
      );
      a(
        'Messagerie.HintSignalementPourSuppr',
        "Signalement d'une discussion pour suppression",
      );
      a('Messagerie.HintPeutEtreRaccourcie', 'Discussion à purger');
      a(
        'Messagerie.HintDiscussionSorti',
        'Vous vous êtes retiré de la discussion',
      );
      a('Messagerie.Retire', 'Retiré(e)');
      a('Messagerie.Filtre_AbsencePresenceEleve', 'Absents/présents ce jour');
      a(
        'Messagerie.Filtre_AbsencePresenceEleve_AvecAbsence_S',
        'Avec absence ce jour (%s)',
      );
      a(
        'Messagerie.Filtre_AbsencePresenceEleve_SansAbsence_S',
        'Sans absence ce jour (%s)',
      );
      a('Messagerie.BoutonSupprimerGraphe', 'Supprimer');
      a('Messagerie.NombreNonLue', '%d non lue');
      a('Messagerie.NombreNonLues', '%d non lues');
      a(
        'Messagerie.AfficherMessagesSuivants_D',
        'Afficher les %d messages suivants',
      );
      a('Messagerie.RefuseDiscussions', 'Refuse les discussions');
      a('Messagerie.AucunDestinataire', 'Aucun destinataire');
      a('Messagerie.Menu_ViderCorbeille', 'Vider la corbeille');
      a(
        'Messagerie.Menu_ConfirmationViderCorbeille',
        'Êtes-vous sûr de vouloir supprimer définitivement ces %d messages ?',
      );
      a('Messagerie.MesDossiersDiscussions', 'Mes dossiers de discussions');
      a('Messagerie.EcrireUnMessage', 'Écrire un message');
      a('Messagerie.EcrireUnMessageA_S', 'Écrire un message à %s');
      a('Messagerie.ToastCorbeille', 'Mise à la corbeille effectuée');
      a('Messagerie.ToastArchivage', 'Archivage effectué');
      a('Messagerie.ToastDesarchivage', 'Désarchivage effectué');
      a('Messagerie.ToastSuppression', 'Suppression définitive effectuée');
      a('Messagerie.ToastFermeture', 'Fermeture effectuée');
      a('Messagerie.ToastReouverture', 'Réouverture effectuée');
      a('Messagerie.ToastSignalement', 'Signalement effectué');
      a(
        'Messagerie.ToastDemandeSuppression',
        'Demande de suppression effectuée',
      );
      a('Messagerie.Action_Nouveau', 'Nouvelle discussion');
      a(
        'Messagerie.HintReponseDicussionInterdite',
        'Interdiction de participer aux discussions',
      );
      a('Messagerie.InfoBandeauDicussionInterdite', 'en consultation');
      a('Messagerie.EnCours', 'En cours');
      a('Messagerie.Toutes', 'Toutes');
      a('Messagerie.LesMiennes', 'Mes messages');
      a(
        'Messagerie.ConfirmationRaccourcir_Titre',
        'Purge des anciens messages (discussions avec élèves et responsables)',
      );
      a('Messagerie.ConfirmationRaccourcir_SeulsLes', 'Seuls les');
      a(
        'Messagerie.ConfirmationRaccourcir_DerniersMessages',
        'derniers messages',
      );
      a(
        'Messagerie.ConfirmationRaccourcir_DiscussionSel',
        'de la discussion sélectionnée seront conservés.',
      );
      a(
        'Messagerie.ConfirmationRaccourcir_DiscussionToutes',
        'de toutes vos discussions avec des élèves et responsables seront conservés.',
      );
      a(
        'Messagerie.ConfirmationRaccourcir_3',
        'Tous les anciens messages non archivés vont être définitivement supprimés pour tous les destinataires.\nConfirmez-vous cette suppression ?',
      );
      a(
        'Messagerie.TropMessage_Titre',
        'Attention, votre messagerie contient plus de %d messages !',
      );
      a(
        'Messagerie.TropMessage_Conseil',
        'Nous vous conseillons de ne conserver que les messages qui vous sont utiles :',
      );
      a(
        'Messagerie.TropMessage_Trier',
        'Archivez les discussions que vous souhaitez conserver et supprimez les autres.',
      );
      a(
        'Messagerie.TropMessage_MettreFin',
        'Mettez fin à vos discussions une fois le sujet traité.',
      );
      a(
        'Messagerie.TropMessage_Raccourcir',
        'Purgez les anciens messages de vos discussions avec des élèves et responsables.',
      );
      a(
        'Messagerie.TropMessage_CorbeilleInactive',
        'Mettez à la corbeille les discussions inactives.',
      );
      a('Messagerie.TropMessage_ViderCorbeille', 'Videz la corbeille.');
      a(
        'Messagerie.ConfirmationCorbeilleInactive_Titre',
        'Mise à la corbeille des discussions inactives',
      );
      a(
        'Messagerie.ConfirmationCorbeilleInactive_1',
        'Confirmez-vous la mise à la corbeille de toutes les discussions',
      );
      a(
        'Messagerie.ConfirmationCorbeilleInactive_2',
        "n'ayant pas eu de messages dans les",
      );
      a('Messagerie.ConfirmationCorbeilleInactive_3', 'derniers jours ?');
      a(
        'Messagerie.InfosAlerte',
        'Les professeurs et personnels connectés vont être avertis instantanément de votre alerte par une notification dédiée',
      );
      a('Messagerie.ModeleAlerte', "Modèle d'alerte");
      a('Messagerie.IndiquerExercice', "Indiquer qu'il s'agit d'un exercice");
      a('Messagerie.DestinatairesAlerteEtab', "Destinataires de l'alerte");
      a(
        'Messagerie.MessagerieDesactivee',
        'Vous avez temporairement désactivé la réception de messages',
      );
      a(
        'Messagerie.RecupererMessageDesactivation',
        'Récupérer les messages non reçus',
      );
      a(
        'Messagerie.ModifierPreferencesDesactivation',
        'Modifier mes préférences de désactivation',
      );
      a('Messagerie.UnNouveauMessage', '1 nouveau message');
      a('Messagerie.NNouveauxMessages', '%d nouveaux messages');
      a('Messagerie.ConversationInstantaneesEnCours', 'Tchats en cours');
      a('Messagerie.AucuneConversation', 'Aucun tchat en cours');
      a('SplashAlerte.Exercice', 'Exercice');
      a('SplashAlerte.AlerteDefaut', 'Alerte');
      a('SplashAlerte.LanceeLeAPar', 'Lancée le %s à %s par %s.');
      a('SplashAlerte.OuvrirDiscussion', 'Ouvrir la discussion');
      a('SplashAlerte.tousEtablissements', 'Tous les établissements');
      a('Messagerie.categorie.Nom', 'Nom');
      a(
        'Messagerie.categorie.CreerCategorieEtiquette',
        'Créer une nouvelle catégorie',
      );
      a('Messagerie.categorie.Abrev', 'Abrév.');
      a(
        'Messagerie.categorie.EditerCategorieEtiquette',
        'Éditer les catégories',
      );
      a(
        'Messagerie.categorie.SelectionnerCategorieEtiquette',
        'Sélectionner les catégories',
      );
      a(
        'Messagerie.categorie.CategorieEstUtilisee',
        'Une catégorie est utilisée. Confirmez-vous la suppression ?',
      );
      a(
        'Messagerie.RechercherProfPerso',
        'Rechercher un professeur ou un personnel',
      );
      a('Messagerie.LancerConversation', 'Lancer un tchat');
      a('Messagerie.Connectee', 'Disponible');
      a('Messagerie.EnClasse', 'En cours');
      a('Messagerie.NonConnectee', 'Non connecté(e)');
      a('Messagerie.NePasDeranger', 'Ne pas déranger');
      a('Messagerie.Invisible', 'Invisible');
      a(
        'Messagerie.WAI_SelecDests_S',
        'Cocher les destinataires puis cliquer sur le bouton « %s »',
      );
      a('PrefMess.DroitDeconnexion', 'Droit à la déconnexion');
      a('PrefMess.DesactivationReception', 'Je désactive la réception de :');
      a('PrefMess.TousLesMessages', 'tous les messages');
      a(
        'PrefMess.UniquementLesMessagesDesParentsEtEleves',
        'uniquement les messages des responsables et des élèves',
      );
      a('PrefMess.PendantOuvres', 'les jours ouvrés ci-dessous');
      a(
        'PrefMess.PendantNonOuvres',
        'pendant les jours non ouvrés (week-end, fériés, vacances...)',
      );
      a('PrefMess.SelectionJourOuvres', 'Sélection des jours ouvrés');
      a('PrefMess.Avant', 'avant');
      a('PrefMess.Apres', 'après');
      a('PrefMess.SelectionHeureAvant', "Sélection de l'heure avant");
      a('PrefMess.SelectionHeureApres', "Sélection de l'heure après");
      a('PrefMess.ActiverMessageAutoCourt', 'Activer la réponse automatique');
      a(
        'PrefMess.MessageAutoDefaut',
        'Je ne suis pas disponible pour le moment mais je ne manquerai pas de vous répondre à mon retour.',
      );
      a('RessourcePedagogique.DocJoint', 'Documents joints');
      a('RessourcePedagogique.SitesWeb', 'Sites Web');
      a('RessourcePedagogique.IDevoirs', 'QCM');
      a('RessourcePedagogique.Sujets', 'Sujets');
      a('RessourcePedagogique.Corriges', 'Corrigés');
      a('RessourcePedagogique.TravauxRendus', 'Travaux rendus');
      a('RessourcePedagogique.Kiosque', 'Manuels numériques');
      a(
        'RessourcePedagogique.LiensKiosque',
        'Liens vers les manuels numériques',
      );
      a('RessourcePedagogique.Cloud', 'Documents de mon Cloud');
      a('RessourcePedagogique.DocJoint_S', 'Document joint');
      a('RessourcePedagogique.SitesWeb_S', 'Site Web');
      a('RessourcePedagogique.IDevoirs_S', 'QCM');
      a('RessourcePedagogique.Sujets_S', 'Sujet');
      a('RessourcePedagogique.Corriges_S', 'Corrigé');
      a('RessourcePedagogique.TravauxRendus_S', 'Travail rendu');
      a('RessourcePedagogique.Kiosque_S', 'Manuel numérique');
      a('RessourcePedagogique.DevoirDu', 'Devoir du %s');
      a('RessourcePedagogique.colonne.document', 'Document');
      a('RessourcePedagogique.colonne.deposeLe', 'Déposé le');
      a('RessourcePedagogique.colonne.matiere', 'Matière');
      a('RessourcePedagogique.colonne.commentaire', 'Commentaire');
      a(
        'RessourcePedagogique.hintColonne.commentaire',
        "Commentaire réservé à l'enseignant et non publié aux élèves",
      );
      a('RessourcePedagogique.colonne.public', 'Public');
      a('RessourcePedagogique.colonne.proprietaire', 'Partagé par');
      a('RessourcePedagogique.colonne.modif', 'Modif');
      a(
        'RessourcePedagogique.hintColonne.modif',
        'Indique si les autres enseignants peuvent modifier le document',
      );
      a(
        'RessourcePedagogique.hint.modifiable',
        'Le document peut être modifié par les autres enseignants',
      );
      a(
        'RessourcePedagogique.hint.nonModifiable',
        'Le document ne peut pas être modifié par les autres enseignants',
      );
      a('RessourcePedagogique.Toutes', 'Toute les périodes');
      a(
        'RessourcePedagogique.AucuneRessourcePeda',
        "Aucune ressource pédagogique n'est disponible pour le moment",
      );
      a(
        'RessourcePedagogique.AucuneRessourcePedaPourPeriode',
        "Aucune ressource pédagogique n'est disponible pour la période sélectionnée",
      );
      a('RessourcePedagogique.Manuels.ManuelsNumeriques', 'Manuels numériques');
      a('ParcoursPeda.colonne.date', 'Date');
      a('ParcoursPeda.colonne.description', 'Description du projet');
      a('ParcoursPeda.colonne.suiviPar', 'Suivi par');
      a('ParcoursPeda.colonne.suiviParS', 'Suivi par %s');
      a('ParcoursPeda.colonne.type', 'Type');
      a(
        'ParcoursPeda.colonne.hint_type',
        "Indique si le parcours éducatif est commun à l'ensemble des élèves de la classe ou ne concerne qu'un seul élève",
      );
      a(
        'ParcoursPeda.TitreCreation',
        'Cliquez ici pour ajouter un nouvel élément',
      );
      a(
        'ParcoursPeda.NonAutoriseDansMaquette',
        'Les parcours ne sont pas paramétrés dans la maquette du bulletin',
      );
      a('ParcoursPeda.ComboGenreParcours', 'Parcours éducatifs');
      a(
        'ParcoursPeda.MsgAucunParcours',
        "Aucun parcours éducatif n'est renseigné",
      );
      a(
        'ParcoursPeda.MsgSupprParcoursClasse',
        'Cet élément de parcours a été saisi pour la classe entière. Il peut être supprimé uniquement depuis les parcours de la classe.',
      );
      a('ParcoursPeda.type.eleve', 'Élève');
      a('ParcoursPeda.type.hint_eleve', "Parcours individualisé de l'élève");
      a('ParcoursPeda.type.classe', 'Classe');
      a('ParcoursPeda.type.hint_classe', 'Parcours commun de la classe');
      a('ParcoursPeda.type.groupe', 'Groupe');
      a('ParcoursPeda.type.hint_groupe', 'Parcours commun du groupe');
      a('TypeGenreParcoursEducatif.libelle.Avenir', 'Parcours avenir');
      a('TypeGenreParcoursEducatif.libelle.Citoyen', 'Parcours citoyen');
      a(
        'TypeGenreParcoursEducatif.libelle.Artistique',
        "Parcours d'éducation artistique et culturelle",
      );
      a(
        'TypeGenreParcoursEducatif.libelle.Sante',
        'Parcours éducatif de santé',
      );
      a(
        'TypeGenreParcoursEducatif.libelle.Excellence',
        "Parcours d'excellence",
      );
      a(
        'TypeGenreParcoursEducatif.libelle.Orientation',
        "Parcours d'orientation",
      );
      a('TypeGenreParcoursEducatif.libelle.Civique', 'Parcours civique');
      a('PiedDeConseilDeClasse.Mentions', 'Mentions');
      a('PiedDeBulletin.CreditsAnnuel', 'Crédits Annuels');
      a('PiedDeBulletin.AppreciationsAnnuelles', 'Appréciations');
      a(
        'PiedDeBulletin.AppreciationsAnnuellesGenerales',
        'Appréciations Générales',
      );
      a('PiedDeBulletin.Credits', 'Crédits');
      a('PiedDeBulletin.VieScolaire', 'Vie scolaire');
      a('PiedDeBulletin.Orientations', 'Orientations');
      a('PiedDeBulletin.Attestations', 'Certificats');
      a('PiedDeBulletin.Competences', 'Compétences');
      a('PiedDeBulletin.Onglet.Titre.Stages', 'Stages');
      a('PiedDeBulletin.Engagements', 'Engagements');
      a('PiedDeBulletin.AucunEngagement', 'Aucun engagement');
      a(
        'Fenetre_BarreNiveauxDacquisitions.Titre.DomaineDeFormation',
        'Domaine de formation',
      );
      a(
        'Fenetre_BarreNiveauxDacquisitions.Titre.EtatAcquisition',
        'Niveau de maîtrise',
      );
      a(
        'Fenetre_BarreNiveauxDacquisitions.TitreFenetre',
        'Total des compétences évaluées : %d',
      );
      a(
        'Fenetre_BarreNiveauxDacquisitions.SansLienAvecLeDomaineDuSocle',
        'Sans lien avec les domaines du socle',
      );
      a('fenetreEditionUrl.titre', 'Editer un lien');
      a('fenetreEditionUrl.lien', 'Lien');
      a('fenetreEditionUrl.libelle', 'Libellé du lien');
      a('fenetreEditionUrl.commentaire', 'Commentaire');
      a('fenetreEditionUrl.obligatoire', 'Champ obligatoire');
      a('questionnaireStage.Observations', 'Observations');
      a('questionnaireStage.EntrepriseDAccueil', "Entreprise d'accueil");
      a('questionnaireStage.RepresenteePar', 'Représentée par');
      a(
        'questionnaireStage.EvaluationEntrepriseAccueil',
        "Évaluation de la qualité de l'accueil",
      );
      a(
        'questionnaireStage.AvisQualiteAccueil',
        "Donnez votre avis sur la qualité de l'accueil",
      );
      a(
        'questionnaireStage.AucunQuestionnairePublie',
        "Aucun questionnaire n'a encore été publié.",
      );
      a(
        'questionnaireStage.EvaluationAccueilStagiaire',
        "Évaluation de l'entreprise par le stagiaire",
      );
      a('questionnaireStage.RepondreAvant', "Réponses autorisées jusqu'au %s");
      a(
        'questionnaireStage.expire',
        'Le délai est expiré, vous ne pouvez plus donner votre avis',
      );
      a('questionnaireStage.wai.selectionne', 'Sélectionné');
      a('questionnaireStage.wai.nonSelectionne', 'Non sélectionné');
      a('servicesProfesseur.Matiere', 'Matière/Sous-matière');
      a('servicesProfesseur.Classe', 'Classe > Groupe');
      a('servicesProfesseur.Professeur', 'Professeur');
      a('servicesProfesseur.Facultatif', 'Fac.');
      a('servicesProfesseur.ModeDEvaluation', 'Mode');
      a('servicesProfesseur.NbDevoirs', 'Nb. dev.');
      a('servicesProfesseur.NbEvaluations', 'Nb. Eval.');
      a('servicesProfesseur.Volume', 'Vol. Hor.');
      a('servicesProfesseur.CoefficientPeriodeOff', 'Coeff. Stand.');
      a('servicesProfesseur.CoefficientPeriodeNonOff', 'Coeff.');
      a('servicesProfesseur.Periodes', 'Périodes actives');
      a('servicesProfesseur.DNL', 'DNL');
      a(
        'servicesProfesseur.HintFacultatif',
        'Facultatif : seuls les points supérieurs à la moyenne sont pris en compte comme bonus dans le calcul de la moyenne générale',
      );
      a(
        'servicesProfesseur.HintModeDEvaluation',
        "Mode d'évaluation du service",
      );
      a('servicesProfesseur.HintNbDevoirs', 'Nombre de devoirs');
      a('servicesProfesseur.HintNbEvaluations', "Nombre d'évaluations");
      a('servicesProfesseur.HintVolume', 'Volume horaire');
      a('servicesProfesseur.HintCoefficientPeriodeOff', 'Coefficient standard');
      a('servicesProfesseur.HintCoefficientPeriodeNonOff', 'Coefficient %s');
      a(
        'servicesProfesseur.HintProgrammesBO',
        'Programme officiel lié au service',
      );
      a(
        'servicesProfesseur.HintDNL',
        'Indique que le service de notation est enseigné dans la langue de section pour les sections européennes, internationales ou binationales',
      );
      a('servicesProfesseur.Toutes', 'Toutes');
      a('servicesProfesseur.Aucune', 'Aucune');
      a(
        'servicesProfesseur.VoirProgrammesBO',
        'Voir le programme officiel lié au service',
      );
      a(
        'servicesProfesseur.HintServiceCoEnseignement',
        'service en co-enseignement',
      );
      a('servicesProfesseur.Service_Avec_Notes', 'Avec notes');
      a('servicesProfesseur.Service_Sans_Notes', 'Sans notes');
      a('servicesProfesseur.CommandeCreerSousService', 'Créer un sous-service');
      a(
        'servicesProfesseur.CommandeSupprimerSousService',
        'Supprimer le sous-service',
      );
      a(
        'servicesProfesseur.CommandeCreerDevoirDNL',
        "Créer les devoirs pour l'évaluation spécifique de DNL",
      );
      a(
        'servicesProfesseur.CreerDevoirDNL.TitreConf',
        'Évaluation spécifique de DNL',
      );
      a(
        'servicesProfesseur.CreerDevoirDNL.MessageConf',
        '2 devoirs vont être créés dans la période de notation "%s" pour saisir les notes de scolarité et d\'interrogation orale.\nCes notes seront exportées vers LSL qui en déduira la note finale de l\'évaluation spécifique de DNL.\nConfirmez-vous la création de ces devoirs ?',
      );
      a(
        'servicesProfesseur.CreerSousService.TitreFenetre',
        'Créer un sous-service de la sélection',
      );
      a('servicesProfesseur.CreerSousService.Matiere', 'Matière :');
      a('servicesProfesseur.CreerSousService.Classe', 'Classe');
      a('servicesProfesseur.CreerSousService.Groupe', 'Groupe');
      a('servicesProfesseur.CreerSousService.Professeur', 'Professeur :');
      a('servicesProfesseur.CreerSousService.SousMatieres', 'Sous-matières');
      a(
        'servicesProfesseur.CreerSousService.CreerSousMatiere',
        'Créer une sous-matière',
      );
      a(
        'servicesProfesseur.CreerSousService.CreerUnSousService',
        'Créer le sous-service correspondant',
      );
      a(
        'servicesProfesseur.CreerSousService.SousServicesExistants',
        'Sous-services existants',
      );
      a(
        'servicesProfesseur.CreerSousService.MsgConfirmationTransfertDevoirs',
        'Attention : des devoirs ont déjà été crées pour certains services de la sélection.\nVoulez-vous les affecter à leur sous-service ?',
      );
      a('DernieresNotes.Selectionnez_un_devoir', 'Sélectionnez un devoir');
      a(
        'DernieresNotes.tri.Par_ordre_chronologique',
        'Par ordre chronologique',
      );
      a('DernieresNotes.tri.Par_matiere', 'Par matière');
      a('DernieresNotes.Moyenne_classe', 'Moyenne classe');
      a('DernieresNotes.Moyenne_groupe', 'Moyenne groupe');
      a('DernieresNotes.MoyenneGeneraleEtudiant', 'Moyenne générale élève');
      a('DernieresNotes.MoyenneGeneralePromo', 'Moyenne générale classe');
      a('DernieresNotes.Detail.NoteEtudiant', 'Note élève');
      a('DernieresNotes.Detail.MoyenneEtudiant', 'Moyenne élève');
      a('DernieresNotes.Detail.NoteDu', 'Note du %s');
      a('DernieresNotes.Detail.NoteMax', 'Note la plus haute');
      a('DernieresNotes.Detail.NoteMin', 'Note la plus basse');
      a('DernieresNotes.Detail.MoyenneMax', 'Moyenne la plus haute');
      a('DernieresNotes.Detail.MoyenneMin', 'Moyenne la plus basse');
      a('DernieresNotes.Detail.Coefficient', 'Coefficient');
      a('DernieresNotes.Detail.NombreDeNotes', 'Nombre de notes');
      a('DernieresNotes.Detail.CommentaireProf', 'Commentaire du professeur');
      a('DernieresNotes.Detail.NoteRameneeSur', 'Note ramenée sur %d');
      a(
        'DernieresNotes.Detail.DevFacultatifBonus',
        'Devoir facultatif (seuls les points supérieur à la moyenne sont comptabilisés)',
      );
      a(
        'DernieresNotes.Detail.DevFacultatifNote',
        'Devoir facultatif (note prise en compte que si elle augmente la moyenne)',
      );
      a(
        'DernieresNotes.Detail.DetailsMethodeCalcMoy',
        'Afficher le calcul de la moyenne',
      );
      a('DernieresNotes.DetailsDuDevoir', 'Détails du devoir');
      a('DernieresNotes.DetailsDuService', 'Détails du service');
      a(
        'DernieresNotes.Detail.SelectionneMatPrec',
        'Sélectionner la matière précedente',
      );
      a(
        'DernieresNotes.Detail.SelectionneMatSuiv',
        'Sélectionner la matière suivante',
      );
      a(
        'DernieresNotes.Detail.SelectionneDevPrec',
        'Sélectionner le devoir précedent',
      );
      a(
        'DernieresNotes.Detail.SelectionneDevSuiv',
        'Sélectionner le devoir suivant',
      );
      a(
        'GenerationPDF.Bulletin.HauteurAppEtElementProg',
        'Hauteur adaptée aux appréciations et éléments de programme',
      );
      a(
        'GenerationPDF.Bulletin.PiedMonoBloc',
        'Imprimer le pied du bulletin en un seul bloc',
      );
      a(
        'GenerationPDF.BulletinDeCompetences.choixBulletin',
        'Choix du bilan périodique',
      );
      a(
        'GenerationPDF.BulletinDeCompetences.choixBulletin_DeLaClasse',
        'Bilan périodique de la classe',
      );
      a(
        'GenerationPDF.BulletinDeCompetences.choixBulletin_DeLEleve',
        "Bilan périodique de l'élève",
      );
      a(
        'GenerationPDF.BulletinDeCompetences.choixBulletin_Eleves',
        'Bilan périodique élève de tous les élèves de la classe',
      );
      a(
        'GenerationPDF.BulletinDeCompetences.AdapterHauteur',
        'Adapter la hauteur',
      );
      a(
        'GenerationPDF.BulletinDeCompetences.TaillePoliceCorps',
        'Taille de police pour le corps',
      );
      a('GenerationPDF.EDT.ChoixEDT', "Choix de l'emploi du temps");
      a('GenerationPDF.EDT.ChoixEDT_AnneeScolaire', 'Année scolaire');
      a('GenerationPDF.EDT.ChoixEDT_Semaine', 'Semaine sélectionnée');
      a('GenerationPDF.AvecPhotosEleves', "Imprimer la photo de l'élève");
      a('GenerationPDF.Titre', 'Options de génération du PDF');
      a('GenerationPDF.Options', 'Options');
      a('GenerationPDF.ChoixImpression', 'Choisissez votre impression');
      a('GenerationPDF.Evaluation.tableauGeneral', 'Tableau général');
      a('GenerationPDF.Evaluation.cartouches', 'Cartouche par élève');
      a('blog.creerBillet', 'Rédiger un billet');
      a('blog.NouveauBillet', 'Nouveau billet');
      a('blog.uniquAModerer', 'Uniquement ceux à modérer');
      a('blog.billetModerateur', 'Billets dont je suis modérateur');
      a('blog.billetDestinataire', 'Billets dont je suis destinataire');
      a(
        'blog.billetDestinataireEnfant',
        'Billets dont mes enfants sont destinataires',
      );
      a('blog.filtre.categorie', 'Catégorie');
      a('blog.filtre.billetAuteur', "Billets dont je suis l'auteur");
      a(
        'blog.filtre.billetAuteurEnfant',
        'Billets dont mes enfants sont les auteurs',
      );
      a('blog.ToutesCategories', 'Toutes les catégories');
      a('blog.ActionsSurBillet', 'Actions sur le billet');
      a('blog.EditerBillet', 'Editer le billet');
      a('blog.Depublier', 'Dépublier');
      a('blog.Publier', 'Publier');
      a('blog.VoirLesCommentaires', 'Voir les commentaires');
      a('blog.BilletAPublier', 'À publier');
      a('blog.SupprimerBillet', 'Supprimer le billet');
      a('blog.SelectionnezUnBlog', 'Sélectionnez un blog');
      a('blog.billet.titre', 'Titre');
      a('blog.billet.redacteurs', 'Rédacteurs');
      a('blog.billet.contenu', 'Contenu du billet');
      a('blog.billet.ressources', 'Photos, galerie, pièces jointes, etc.');
      a(
        'blog.billet.ressourcesEleve',
        'Ajouter un document depuis la médiathèque',
      );
      a('blog.billet.categorie', 'Catégorie');
      a(
        'blog.billet.waiPublicEleve',
        'Sélectionner les élèves concernés par ce billet',
      );
      a('blog.billet.etatPublie', 'Publié');
      a('blog.billet.auPublicDuBlog', 'Au public du blog');
      a(
        'blog.billet.uniquementEleveEtFamille',
        "Uniquement à l'élève (et sa famille)",
      );
      a('blog.billet.rediger', 'Rédiger');
      a(
        'blog.billet.msgAucunContenu',
        'Veuillez saisir un contenu pour le billet',
      );
      a('blog.billet.msgAucunTitre', 'Veuillez saisir un titre au billet');
      a(
        'blog.billet.msgAucunEleve',
        'Vous devez sélectionner au moins un élève concerné par le billet',
      );
      a(
        'blog.billet.parmiDocumentsMediatheque',
        'Parmi les documents de la médiathèque',
      );
      a('blog.billet.ouvrirCloud', 'Depuis mon cloud');
      a('blog.billet.nouveauLien', 'Nouveau lien');
      a('blog.billet.prendrePhoto', 'Prendre une photo');
      a('blog.billet.ouvrirGalerie', 'Depuis ma galerie');
      a('blog.billet.depuisMonPoste', 'Depuis mon poste');
      a('blog.billet.ouvrirMesDocuments', 'Depuis mes documents');
      a('blog.billet.VoirLesRedacteurs', 'Voir les rédacteurs');
      a('blog.BilletEnAttentePublication', 'En attente de publication');
      a('blog.aucunBillet', "Il n'existe aucun billet correspondant.");
      a(
        'blog.msgConfirmSuppression',
        'Confirmez-vous la suppression du billet "%s" ?',
      );
      a(
        'blog.ConfirmSupprBlog',
        'Confirmez-vous la suppression du blog "%s" ?',
      );
      a('blog.editerCategorieBillet', 'Editer les catégories');
      a('blog.selectCategorieBillet', 'Sélectionner une catégorie');
      a('blog.creerCategorieBillet', 'Créer une nouvelle catégorie');
      a(
        'blog.msgConfirmSupprCategorieBillet',
        'Confirmez-vous la suppression de la catégorie ?',
      );
      a('blog.refuserCommentaire', 'Refuser le commentaire');
      a('blog.accepterCommentaire', 'Accepter le commentaire');
      a('blog.supprimerCommentaire', 'Supprimer le commentaire');
      a('blog.commenter', 'Commenter');
      a('blog.envoyer', 'Envoyer');
      a('blog.placeholderCommentaire', 'Saisir un commentaire');
      a('blog.commentaire1', '%s commentaire');
      a('blog.commentaireN', '%s commentaires');
      a('blog.ajouterCommentaire', 'Ajouter un commentaire');
      a('blog.typeEtatCommentaire.enAttente', 'En attente de modération');
      a('blog.typeEtatCommentaire.publie', 'Publié');
      a('blog.typeEtatCommentaire.refuse', 'Refusé');
      a('blog.typeEtatCommentaire.supprime', 'Ce commentaire a été supprimé.');
      a(
        'blog.msgConfirmSuppr',
        'Confirmez-vous la suppression de votre commentaire ?',
      );
      a('blog.ajouter', 'Ajouter');
      a(
        'blog.deplacerCategorie',
        'Déplacer le(s) documents(s) sélectionné(s) dans une catégorie',
      );
      a(
        'blog.aucuneDonneeDansMediatheque',
        'Ajouter un document à la médiathèque',
      );
      a('blog.creerCategorieMediatheque', 'Créer une nouvelle catégorie');
      a('blog.creer', 'Créer');
      a(
        'blog.msgConfirmSupprDocsMediatheque',
        'Confirmez-vous la suppression du document sélectionné ?',
      );
      a(
        'blog.msgConfirmSupprDocsMediatheque_S',
        'Confirmez-vous la suppression des documents sélectionnés ?',
      );
      a('blog.toutesLesMediatheques', 'Toutes les médiathèques');
      a('blog.listeMediatheques', 'Liste des médiathèques');
      a(
        'blog.aucunDocDansCategorie',
        "Il n'existe aucun document pour cette catégorie.",
      );
      a('blog.ressourcesMediatheque', 'Ressources de la médiathèque');
      a('blog.msgMediathequeVide', 'La médiathèque est vide');
      a('blog.dropRessources', 'Glissez et déposez vos fichiers directement');
      a('blog.aucuneRotation', "Ne pas pivoter l'image");
      a('blog.pivot90Horaire', 'Pivoter à droite (90° horaire)');
      a('blog.pivot90AntiHoraire', 'Pivoter à gauche (90° anti-horaire)');
      a('blog.pivot180', 'Pivoter en bas (180°)');
      a(
        'blog.msgInfoRotation',
        "Les paramètres permettant de pivoter l'image ne seront pris en compte qu'après la validation du billet.",
      );
      a('blog.tousLesRedacteursN', 'Tous les rédacteurs (%s)');
      a('blog.aucunCommentaire', 'Aucun commentaire');
      a('blog.altImage', 'Image du blog');
      a('blog.altImageMediatheque', 'Image de la médiathèque');
      a('blog.ChoixDuBlog', 'Choix du blog');
      a('blog.DansLeBlog', 'Choix du blog');
      a('blog.TousLesBlogs', 'Tous les blogs');
      a('blog.NouveauBlog', 'Nouveau blog');
      a(
        'blog.SaisieCommentaireEnFinDeSaisie',
        "La saisie de commentaire n'est plus possible",
      );
      a(
        'blog.FinDeSaisieRedactionDeBillet',
        "La rédaction de billet n'est plus possible",
      );
      a('blog.mediatheque.toutAfficher', 'Tout afficher');
      a('blog.mediatheque.ajouterDossier', 'Ajouter un dossier');
      a('blog.mediatheque.renommerDossier', 'Renommer le dossier');
      a('blog.mediatheque.supprimerDossier', 'Supprimer le dossier');
      a('blog.fenetreEditionBlog.NouveauBlog', 'Nouveau blog');
      a('blog.fenetreEditionBlog.EditionBlog', 'Edition blog');
      a('blog.fenetreEditionBlog.Descriptif', 'Descriptif');
      a('blog.fenetreEditionBlog.Titre', 'Titre');
      a('blog.fenetreEditionBlog.Moderateurs', 'Modérateurs');
      a(
        'blog.fenetreEditionBlog.RoleModerateurs',
        'Peuvent accepter ou refuser la publication des billets',
      );
      a('blog.fenetreEditionBlog.Redacteurs', 'Rédacteurs');
      a(
        'blog.fenetreEditionBlog.RoleRedacteursJusquau',
        "Peuvent rédiger des billets jusqu'au",
      );
      a('blog.fenetreEditionBlog.Public', 'Public supplémentaire');
      a(
        'blog.fenetreEditionBlog.RolePublic',
        'Peut consulter et commenter en plus des modérateurs et rédacteurs désignés',
      );
      a(
        'blog.fenetreEditionBlog.AutoriserCommentaires',
        "Autoriser les commentaires (jusqu'à la date limite de rédaction des billets)",
      );
      a('blog.fenetreEditionBlog.Profs', 'Profs');
      a('blog.fenetreEditionBlog.Personnels', 'Personnels');
      a('blog.fenetreEditionBlog.Eleves', 'Les élèves');
      a('blog.fenetreEditionBlog.ElevesFamilles', 'Élèves/Familles');
      a(
        'blog.fenetreEditionBlog.MsgAucunTitreBlog',
        'Veuillez saisir un titre au blog',
      );
      a(
        'blog.fenetreEditionBlog.MsgAucunModerateur',
        'Vous devez sélectionner au moins un modérateur',
      );
      a(
        'blog.fenetreEditionBlog.MsgAucunRedacteur',
        'Vous devez sélectionner au moins un rédacteur',
      );
      a('FenetreCategorieEvaluation.TitreLibelle', 'Libellé');
      a(
        'FenetreCategorieEvaluation.SelectionUneCategorie',
        'Sélectionner une catégorie',
      );
      a(
        'FenetreCategorieEvaluation.UniquementMesCategories',
        'Uniquement mes catégories et celles affectées à mes devoirs',
      );
      a('FenetreCategorieEvaluation.nouvelleCategorie', 'Nouvelle catégorie');
      a(
        'FenetreCategorieEvaluation.editionCategorie',
        'Edition de la catégorie',
      );
      a('FenetreCategorieEvaluation.creer', 'Créer');
      a('FenetreCategorieEvaluation.selectionner', 'Sélectionner');
      a('FenetreCategorieEvaluation.deselectionner', 'Désélectionner');
      a(
        'FenetreCategorieEvaluation.confSupprCategorie',
        'Confirmez-vous la suppresion de la catégorie sélectionnée',
      );
      a('FenetreCategorieEvaluation.couleur', 'Couleur');
      a('Theme.filtrePar.lesMiens', 'Uniquement mes thèmes.');
      a(
        'Theme.filtrePar.mesMatieres',
        'Uniquement les thèmes associés à mes matières.',
      );
      a(
        'Theme.libelleCB.taf',
        'Uniquement les thèmes associés aux matières du travail à faire',
      );
      a(
        'Theme.libelleCB.contenu',
        'Uniquement les thèmes associés aux matières du contenu',
      );
      a(
        'Theme.libelleCB.devoir',
        'Uniquement les thèmes associés aux matières du devoir',
      );
      a(
        'Theme.libelleCB.qcm',
        'Uniquement les thèmes associés aux matières du QCM',
      );
      a(
        'Theme.libelleCB.evaluation',
        "Uniquement les thèmes associés aux matières de l'évaluation",
      );
      a(
        'Theme.libelleCB.selection',
        'Uniquement les thèmes associés aux matières de la sélection',
      );
      a(
        'Theme.libelleCB.forum',
        'Uniquement les thèmes associés aux matières du sujet de forum',
      );
      a(
        'Theme.libelleCB.ressource',
        'Uniquement les thèmes associés aux matières de la ressource pédagogique',
      );
      a('Theme.btn.selectionner', 'Sélectionner');
      a('Theme.btn.deselectionner', 'Désélectionner');
      a('Theme.btn.creer', 'Créer');
      a('Theme.titre.selectionnerThemes', 'Sélectionner des thèmes');
      a('Theme.titre.nouveauTheme', 'Nouveau thème');
      a('Theme.titre.editionTheme', 'Edition du thème');
      a('Theme.auteur.creePar', 'Crée par :');
      a('Theme.auteur.moi', 'moi');
      a('Theme.msg.doublon', '"%s" existe déjà pour la matière "%s" !');
      a(
        'Theme.msg.modifThemeMixte',
        "Cette ressource est utilisée dans x contenus de cours, ou travail à faire, ou devoir, ou évaluation.\nLa modification sur le thème va être reportée sur l'ensemble des contenus et des autres ressources liées",
      );
      a(
        'Theme.msg.confModifTheme',
        'Confirmez-vous la modification du thème ?',
      );
      a(
        'Theme.msg.confSupprTheme',
        'Confirmez-vous la suppresion du thème sélectionné',
      );
      a(
        'Theme.msg.confSupprThemeUtiliseAuteur',
        'Le thème %s est utilisé pour catégoriser vos ressources pédagogiques mais peut être supprimé.',
      );
      a('Theme.label.matiere', 'Matière');
      a('Theme.label.redigerMatiere', 'Rédiger le libellé du thème');
      a('Theme.label.libelle', 'Libellé du thème');
      a('Attestation.titre', 'Nouvelle attestation');
      a('Attestation.titreModifier', "Modifier l'attestation");
      a('Attestation.type', 'Type');
      a('Attestation.etat', 'Etat');
      a('Attestation.delivree', 'Délivrée');
      a('Attestation.nonDelivree', 'Non délivrée');
      a(
        'Attestation.aucuneAttestationDisponible',
        'Aucune attestation disponible',
      );
      a(
        'Attestation.aucuneAttestationRenseignee',
        "Aucune attestation n'a été renseignée",
      );
      a(
        'Attestation.msgConfirmerSuppression',
        "Confimez-vous la suppression de l'attestation %s ?",
      );
      a('ForumPeda.TitreListeSujet', 'Forums pédagogiques');
      a('ForumPeda.Filtre_TousLesForums', 'Tous les forums');
      a('ForumPeda.HintNouveauxPosts', 'Nouveau(x) post(s)');
      a('ForumPeda.HintBloque_D', '%d élève(s) bloqué(s)');
      a('ForumPeda.AModerer', 'Nombre de posts à modérer');
      a('ForumPeda.Auteur', 'Auteur');
      a('ForumPeda.Moderateur', 'Modérateur');
      a('ForumPeda.Membre', 'Participant');
      a('ForumPeda.Visiteur', 'Visiteur');
      a('ForumPeda.NouveauSujet', 'Nouveau');
      a('ForumPeda.SansTitre', 'sans titre');
      a('ForumPeda.Menu_Modifier', 'Modifier');
      a('ForumPeda.Menu_Verrouiller', 'Verrouiller');
      a('ForumPeda.Menu_Deverrouiller', 'Déverrouiller');
      a('ForumPeda.Menu_SupprimerSelection', 'Supprimer');
      a('ForumPeda.Menu_Nettoyer', 'Purger');
      a('ForumPeda.Menu_Dupliquer', 'Dupliquer');
      a('ForumPeda.Menu_ModifierBannis', 'Modifier les élèves bloqués');
      a(
        'ForumPeda.ConfirmationSuppression',
        'Confirmez-vous la suppression de la sélection ?',
      );
      a(
        'ForumPeda.ConfirmationNettoyer',
        'Confirmez-vous la purge des forums sélectionnés ?\nAttention, seuls les posts mis en avant seront conservés.',
      );
      a('ForumPeda.NouveauxPosts', 'Nouveaux posts');
      a('ForumPeda.AucunForum', 'Aucun forum');
      a('ForumPeda.DernierPost', 'Dernier post');
      a('ForumPeda.SelectionnerUnSujet', 'Sélectionner un forum');
      a('ForumPeda.AucunPost', 'Aucun post');
      a('ForumPeda.SujetSuspendu', 'Forum suspendu');
      a(
        'ForumPeda.SujetSuspenduPourModeration',
        "Forum suspendu pour les participants suite au signalement d'un post, veuillez modérer le post signalé.",
      );
      a(
        'ForumPeda.ConfirmationEnleverSuspensionSujet',
        'Ce forum est actuellement suspendu, souhaitez-vous le rendre à nouveau actif pour les participants ?',
      );
      a(
        'ForumPeda.SujetSuspenduConsult',
        "Forum suspendu pour les participants suite au signalement d'un post",
      );
      a('ForumPeda.ForumVerrouille', 'Forum verrouillé');
      a('ForumPeda.MenuAction_Repondre', 'Répondre');
      a('ForumPeda.MenuAction_Editer', 'Modifier');
      a('ForumPeda.MenuAction_Supprimer', 'Supprimer');
      a(
        'ForumPeda.MenuAction_SupprimerDefinitivement',
        'Supprimer définitivement',
      );
      a(
        'ForumPeda.MenuAction_SignalerModeration',
        'Signaler un contenu inapproprié',
      );
      a('ForumPeda.MenuAction_SignalerSPR', 'Signaler au superadministrateur');
      a('ForumPeda.MenuAction_Important', 'Mettre en avant');
      a('ForumPeda.MenuAction_NonImportant', 'Annuler la mise en avant');
      a('ForumPeda.MenuAction_Accepter', 'Accepter');
      a('ForumPeda.MenuAction_Refuser', 'Refuser');
      a('ForumPeda.MenuAction_TraiterSignalement', 'Traiter signalement');
      a('ForumPeda.MenuAction_ExclureAuteur', "Bloquer l'élève");
      a('ForumPeda.Poster', 'Participer');
      a(
        'ForumPeda.FiltreModeration',
        'Uniquement les posts en attente ou signalés',
      );
      a(
        'ForumPeda.ConfirmationSuppressionPost',
        'Confirmez-vous la suppression définitive de ce post ?',
      );
      a(
        'ForumPeda.ConfirmationSignalementModeration',
        'Êtes-vous sûr de vouloir signaler ce post à la modération ?',
      );
      a(
        'ForumPeda.ConfirmationSignalementSPR',
        'Êtes-vous sûr de vouloir signaler ce post au superadministrateur ?',
      );
      a('ForumPeda.MisEnAvant', 'mis en avant');
      a('ForumPeda.Publie', 'publié');
      a('ForumPeda.Refuse', 'refusé');
      a('ForumPeda.AttenteValidation', 'en attente de modération');
      a('ForumPeda.SupprimeAuteur', 'supprimé par son auteur');
      a('ForumPeda.ModifieAuteur', 'modifié par son auteur');
      a('ForumPeda.ModifieModeration', 'modifié par la modération');
      a('ForumPeda.EleveExclu', 'élève bloqué');
      a('ForumPeda.VousAvezEteExclu', 'vous avez été bloqué par la modération');
      a('ForumPeda.ModerationAvantPub', 'Modération avant publication');
      a('ForumPeda.ModerationApresPub', 'Modération après publication');
      a('ForumPeda.Participant_D', '%d participant');
      a('ForumPeda.Participants_D', '%d participants');
      a('ForumPeda.HorsMatiere', 'Hors matière');
      a('ForumPeda.TouslesThemes', 'Tous les thèmes');
      a(
        'ForumPeda.ParticipationBloque',
        'Le modérateur a bloqué votre participation',
      );
      a(
        'ForumPeda.ParticipationPossibleDeA_SS',
        'participation possible uniquement de %s à %s',
      );
      a('ForumPeda.CreerSujet', 'Créer un forum');
      a('ForumPeda.ModifierSujet', 'Modifier le forum');
      a('ForumPeda.Valider', 'Valider');
      a('ForumPeda.Annuler', 'Annuler');
      a('ForumPeda.Theme', 'Thème');
      a('ForumPeda.Titre', 'Titre');
      a('ForumPeda.Contenu', 'Contenu');
      a('ForumPeda.ChoisirMatiere', 'Choisir une matière');
      a('ForumPeda.Membres', 'Participants');
      a('ForumPeda.Moderateurs', 'Modérateurs');
      a('ForumPeda.Professeurs', 'Professeurs');
      a('ForumPeda.Personnels', 'Personnels');
      a('ForumPeda.Eleves', 'Élèves');
      a(
        'ForumPeda.VisiteurRespAcc',
        'Forum visible par les responsables et accompagnants des élèves participants',
      );
      a(
        'ForumPeda.VisiteurSPR',
        "Forum visible par les administrateurs PRONOTE (chef d'établissement, ...)",
      );
      a('ForumPeda.Moderation', 'Modération');
      a('ForumPeda.AvantPublication', 'Avant publication');
      a(
        'ForumPeda.AvantPublicationExplication',
        "aucun post ne sera publié tant que la modération ne l'a pas validé.",
      );
      a('ForumPeda.ApresPublication', 'Après publication');
      a(
        'ForumPeda.ApresPublicationExplication',
        'les posts seront publiés dès leur rédaction, mais seront modifiables et supprimables par la modération.',
      );
      a('ForumPeda.Horaires', "Horaires d'ouverture");
      a('ForumPeda.ActiverHoraires', 'Participation des élèves uniquement');
      a('ForumPeda.HorairesAvant', "jusqu'à");
      a('ForumPeda.HorairesApres', 'À partir de');
      a('ForumPeda.SaisirUnContenu', 'Veuillez saisir un contenu');
      a('ForumPeda.SaisirUnTitre', 'Veuillez saisir un titre');
      a('ForumPeda.SaisirUnMembre', 'Veuillez saisir au moins un participant');
      a('ForumPeda.CacherConsigne', 'Cacher la consigne');
      a('ForumPeda.AfficherConsigne', 'Afficher la consigne');
      a(
        'ForumPeda.DesactiverVisuMembre',
        'Visualiser le forum en tant que modérateur',
      );
      a(
        'ForumPeda.ActiverVisuMembre',
        'Visualiser le forum en tant que participant',
      );
      a(
        'ForumPeda.ConfirmationExclureEleve2',
        'Précisez parmi ses posts déjà publiés ceux que vous souhaitez refuser (ils ne seront plus affichés aux autres participants) :',
      );
      a(
        'ForumPeda.ConfirmationExclureEleve1',
        "Vous êtes sur le point de bloquer la participation future de l'élève %s à ce forum.",
      );
      a('ForumPeda.ConfirmationAucunPost', 'aucun post');
      a('ForumPeda.ConfirmationCePost', 'ce post uniquement');
      a(
        'ForumPeda.ConfirmationTousLesPosts',
        "tous les posts de l'élève dans ce forum",
      );
      a('ForumPeda.ChargementPosts', 'Chargement des posts en cours');
      a('ForumPeda.NouveauPost', 'Nouveau post');
      a('ForumPeda.ModifierPost', 'Modifier le post');
      a('ForumPeda.RepondrePost', 'Répondre au post');
      a(
        'Commissions.publieePourParents',
        "Publiée dans le carnet de correspondance sur l'Espace Parents",
      );
      a('Commissions.publiePourParents', "Publié sur l'Espace Parents");
      a('Commissions.natureCommissionPresideePar', '%0:s présidée par %1:s');
      a('Commissions.presideePar', 'Présidée par');
      a('Commissions.listeMembres', 'Membre(s): %s');
      a('Commissions.toutesLesCommissions', 'Toutes les commissions');
      a('Commissions.selectionnezCommission', 'Sélectionnez une commission');
      a('Commissions.Informations', 'Informations');
      a('Commissions.ReponsesEducatives', 'Réponses éducatives');
      a('Commissions.membres', 'Membres');
      a(
        'Commissions.nbrReponsesEducEtSuivis',
        'Réponses éducatives : %0:d, Suivis : %1:d',
      );
      a(
        'Commissions.aucuneResponseEducative',
        "Aucune réponse éducative n'a été ajoutée",
      );
      a('Commissions.motifs', 'Motif(s)');
      a('Commissions.aLAdresse', 'en %s');
      a('Commissions.commissionDate', "%0:s à partir de %1:s jusqu'à %2:s");
      a('Commissions.suiviPar', 'Suivi par %d personnes');
      a('Commissions.auteur', 'Auteur');
      a('Commissions.publierLeSuivi', "Publier le suivi sur l'Espace Parents");
      a('Commissions.redigerSuivi', 'Rédiger un suivi');
      a('Commissions.modifierSuivi', 'Modifier un suivi');
      a('Commissions.modifierLeSuivi', 'Modifier le suivi');
      a('Commissions.supprimerLeSuivi', 'Supprimer le suivi');
      a('Commissions.ajouterSuivi', 'Ajouter un suivi');
      a(
        'Commissions.confirmezSuppressionSuivi',
        'Confirmez-vous la suppression du suivi ?',
      );
      a('Commissions.suiviVide', "Le suivi n'est pas rempli");
      a('Commissions.naturesCommissions', 'Natures des commissions');
      a('Commissions.circonstances', 'Circonstances');
      a('Commissions.nbReponsesEducatives', 'Nombre de réponses éducatives');
      a('RDV.demanderRDV', 'Demander un rendez-vous');
      a('RDV.demanderRDVAvecProf', 'avec un professeur');
      a('RDV.demanderRDVAvecPersonnel', 'avec un personnel');
      a('RDV.prendreRDVAvecProf', 'Prendre rendez-vous avec un professeur');
      a('RDV.prendreRDVAvecPerso', 'Prendre rendez-vous avec un personnel');
      a('RDV.afficherMesRdv', 'Afficher mes rendez-vous :');
      a('RDV.aucunRDV', 'Aucun rendez-vous');
      a('RDV.selectionnerRDV', 'Aucun rendez-vous sélectionné');
      a('RDV.rdvLeA', 'Rendez-vous le %s à %s');
      a('RDV.rdvAnnuleLeA', 'Le rendez-vous du %s à %s est annulé');
      a('RDV.telCtxCible', 'Numéro de téléphone où vous joindre');
      a('RDV.telCtxResp', 'Numéro de téléphone de %s');
      a('RDV.nonRenseigne', 'Non renseigné');
      a('RDV.TelNR', 'Numéro de téléphone non renseigné');
      a('RDV.LienVisioNR', 'Lien visio non renseigné');
      a('RDV.TypeRDV', 'Modalité');
      a('RDV.modaliteTel', 'Téléphonique');
      a('RDV.modaliteVisio', 'Visioconférence');
      a('RDV.modaliteSite', 'En présentiel');
      a('RDV.fixerRDVEleve', 'Fixer un rendez-vous avec un élève');
      a('RDV.rdvSerieAvecResp', 'Rendez-vous en série avec des responsables');
      a('RDV.rdvSerieAvecEleves', 'Rendez-vous en série avec des élèves');
      a('RDV.proposerRDVParent', 'Proposer un rendez-vous à un responsable');
      a('RDV.choisirEleve', "Choisir l'élève");
      a('RDV.choisirEleves', 'Choisir les élèves');
      a('RDV.choisirParents', 'Choisir le(s) responsable(s)');
      a('RDV.choisirParentsMultiFamilles', 'Choisir le(s) responsable(s)');
      a('RDV.choisirParticipant', 'Choisir le participant');
      a('RDV.xFamillesParticipants', '%s familles');
      a('RDV.choisirProfesseur', 'Choisir un professeur');
      a('RDV.choisirPersonnel', 'Choisir un personnel');
      a('RDV.Participants', 'Participants');
      a('RDV.xParticipants', '%s participants');
      a('RDV.ParticipantsX', 'Participants : %s');
      a('RDV.concernantX', 'Concernant %s');
      a('RDV.DureeRDV', 'Durée (en minutes)');
      a('RDV.Creneau', 'Créneau');
      a('RDV.MotifRdv', 'Objet');
      a('RDV.Contenu', 'Contenu');
      a('RDV.eleveObligatoire', "Veuillez sélectionner l'élève concerné");
      a('RDV.unSeulElevePourRDV', 'Un seul élève autorisé pour le rendez-vous');
      a('RDV.sujetObligatoire', "Veuillez renseigner l'objet du rendez-vous");
      a('RDV.descriptionOblig', 'Veuillez décrire le contenu du rendez-vous');
      a('RDV.dureeObligatoire', 'Veuillez renseigner la durée du rendez-vous');
      a('RDV.choisirSalleLieux', 'Choisir le lieu du rendez-vous');
      a('RDV.salleLieu', 'Salle / Lieu');
      a('RDV.FenetreSelectionLieu_Titre', 'Sélectionner une salle ou un lieu');
      a(
        'RDV.creneauObligatoire',
        'Veuillez renseigner le créneau du rendez-vous',
      );
      a(
        'RDV.respRdvObligatoire',
        'Veuillez sélectionner le participant à qui vous souhaitez demander un rendez-vous. Seuls ceux qui acceptent les rendez-vous sont affichés.',
      );
      a(
        'RDV.auMoinsUnCreneauPropose',
        'Veuillez proposer au moins un créneau pour le rendez-vous',
      );
      a(
        'RDV.unSeulRespRDV',
        'Un seul professeur ou personnel autorisé pour le rendez-vous',
      );
      a('RDV.responsables', 'Responsable(s)');
      a('RDV.responsablesN', 'Responsables');
      a(
        'RDV.participantsNonRenseignes',
        'Veuillez sélectionner les participants',
      );
      a(
        'RDV.autantDeCreneauxProposesQueDeParticipants',
        'Il y a plus de participants que de créneaux',
      );
      a(
        'RDV.msgConfirmAnnulerRdv',
        "Confirmez-vous l'annulation du rendez-vous ?",
      );
      a(
        'RDV.msgConfirmSupprimerRdv',
        'Confirmez-vous la suppression du rendez-vous ?',
      );
      a(
        'RDV.msgConfirmSupprSessionRdv',
        'Confirmez-vous la suppression de la série de rendez-vous ?',
      );
      a('RDV.xMin', '%s min');
      a('RDV.expire', 'Expiré');
      a('RDV.refuse', 'Refusé');
      a('RDV.refusePar', 'Refusé par %s');
      a('RDV.occupe', 'Occupé');
      a('RDV.annule', 'Annulé');
      a('RDV.annulePar', 'Annulé par %s');
      a('RDV.demandeRdv', 'En attente de réponse');
      a('RDV.accepterDemandeRdv', 'Accepter la demande de rendez-vous');
      a('RDV.refuserDemandeRdv', 'Refuser la demande de rendez-vous');
      a('RDV.accepterRdv', 'Accepter rendez-vous');
      a('RDV.refuserRdv', 'Refuser rendez-vous');
      a('RDV.propositionCreneaux', 'Proposition de créneaux');
      a('RDV.ajouterCreneau', 'Ajouter un créneau');
      a('RDV.nouveauCreneau', 'Nouveau créneau');
      a(
        'RDV.plageDeCreneaux',
        "Définir des créneaux à partir d'une plage horaire",
      );
      a('RDV.dureeParCreneau', "Durée d'un créneau : %s min");
      a('RDV.nbCreneaux', 'Nombre de créneaux : %s');
      a('RDV.plageDispo', 'Plage de disponibilité');
      a('RDV.hDebCreneau', 'Heure de début du créneau');
      a('RDV.hDebPlage', 'Heure de début de la plage de disponibilité');
      a('RDV.hFinPlage', 'Heure de fin de la plage de disponibilité');
      a('RDV.ajouterDesCreneaux', 'Ajouter des créneaux');
      a('RDV.ajouterPJ', 'Ajouter une pièce jointe');
      a('RDV.RdvSerie', 'Rendez-vous en série pour');
      a('RDV.propositionEnCours', 'En attente de réponse');
      a('RDV.aValider', 'A valider');
      a('RDV.creneauxProposes', 'Créneaux proposés');
      a('RDV.choixCreneau', 'Veuillez choisir un créneau');
      a('RDV.demanderPresenceStrEleve', 'Demander la présence de %s');
      a('RDV.demanderPresenceEleve', "Demander la présence de l'élève");
      a('RDV.presenceEleveDemandee', "La présence de l'élève est demandée");
      a('RDV.presenceDemandee', 'Votre présence est demandée');
      a('RDV.titleTelephone', 'Saisissez votre numéro de téléphone');
      a(
        'RDV.titleIndicatifTel',
        "Saisissez l'indicatif de votre numéro de téléphone",
      );
      a('RDV.annulerRdv', 'Annuler le rendez-vous');
      a('RDV.conserverRdv', 'Conserver le rendez-vous');
      a('RDV.confirmerAnnulationRdv', "Confirmer l'annulation du rendez-vous");
      a(
        'RDV.signalerMotifAnnulation',
        'Signalez au(x) participant(s) la raison de cette annulation',
      );
      a(
        'RDV.signalerMotifRefusRdv',
        'Signalez au demandeur la raison du refus',
      );
      a('RDV.motifAnnulationRdv', "Motif de l'annulation du rendez-vous");
      a('RDV.confirmerRefusRdv', 'Confirmer le refus du rendez-vous');
      a('RDV.motifRefusRdv', 'Motif de refus du rendez-vous');
      a('RDV.voirRdvAnnules', 'Annulés');
      a('RDV.voirRdvPasses', 'Passés');
      a('RDV.voirRdvProposes', 'Proposés');
      a('RDV.voirRdvDemandes', 'A traiter');
      a('RDV.voirRdvProposesAValider', 'A valider');
      a('RDV.voirRdvDemandesEnCours', 'Demandes en cours');
      a('RDV.voirRdvRefuses', 'Refusés');
      a('RDV.voirRdvValides', 'Programmés');
      a('RDV.creneauxARenseigner', 'Créneaux manquants');
      a('RDV.aucunCreneauLibre', 'Aucun créneau libre');
      a(
        'RDV.tousCreneauxProposesOccupes',
        'Tous les créneaux proposés sont occupés',
      );
      a(
        'RDV.tousCreneauxProposesOccupesOuExpires',
        'Tous les créneaux proposés sont occupés et/ou expirés',
      );
      a(
        'RDV.plusDeCreneauxReservables',
        "Il n'y a plus de créneaux réservables",
      );
      a('RDV.msgCreneauOccupe', 'Le créneau est déjà occupé');
      a(
        'RDV.msgCertainsCreneauOccupes',
        'Certains des créneaux que vous venez de sélectionner sont déjà occupés sur au moins un autre rendez-vous. Il ne seront pas proposés pour ce rendez-vous.',
      );
      a(
        'RDV.msgCreneauOccPartielARemplacer',
        'Certains des créneaux que vous venez de sélectionner sont déjà occupés sur au moins un autre rendez-vous. Veuillez proposer %s nouveaux créneaux',
      );
      a('RDV.nbInscritsSurTotal', '%s/%s inscrits');
      a(
        'RDV.strConfirmChoixCreneau',
        'Le rendez-vous va être fixé le %s à %s. Confirmez-vous ce créneau ?',
      );
      a(
        'RDV.confirmChoixCreneau_CtxRdvTel',
        'Pour permettre à %s de vous joindre, merci de renseigner votre numéro de téléphone.',
      );
      a(
        'RDV.telObligatoirePourRdvTel',
        'La saisie du numéro de téléphone est obligatoire pour un rendez-vous téléphonique',
      );
      a(
        'RDV.strConfirmSurModifDuree',
        'Si vous modifiez la durée de rendez-vous, les créneaux déjà renseignés seront réinitialisés. Confirmez-vous cette modification ?',
      );
      a(
        'RDV.strCreneauEnConflit',
        'Ce créneau est déjà proposé pour ce rendez-vous. Il ne peut être ajouté.',
      );
      a(
        'RDV.strCreneauPlageEnConflit',
        'Un créneau de la plage horaire est déjà proposé comme créneau pour ce rendez-vous. Il ne sera pas ajouté.',
      );
      a(
        'RDV.strCreneauxPlageEnConflit',
        '%s créneaux de la plage horaire sont déjà proposés comme créneaux pour ce rendez-vous. Ils ne seront pas ajoutés.',
      );
      a('RDV.modifierRdv', 'Modifier le rendez-vous');
      a('RDV.modifierRdvSerie', 'Modifier le rendez-vous en série');
      a('RDV.modifierNumeroRdv', 'Modifier le numéro où me joindre');
      a('RDV.InfoObligatoire', 'Champs obligatoires');
      a('RDV.LegendeTelephonique', 'Rendez-vous téléphonique');
      a('RDV.LegendeOccupe', 'Créneau occupé');
      a('RDV.LegendeExpire', 'Créneau expiré');
      a(
        'RDV.confirmMoinsDeCreneauxProposesQueDeParticipants',
        'Confirmez-vous la création de ce rendez-vous en série avec moins de créneaux proposés (%s) que de participants (%s) ?',
      );
      a('RDV.xCreneaux', '%s créneau(x)');
      a('RDV.xCreneauxSurXParticipants', '%s créneau(x) / %s participants');
      a(
        'RDV.responsablesAVoirSeparement',
        'Responsables légaux, en charge, à voir séparément',
      );
      a('RDV.voirDetailParticipantsSerie', 'voir les participants de la série');
      a(
        'RDV.listeParticipantsPasReserve',
        "N'ont pas réservé un créneau (%s) :",
      );
      a('RDV.listeParticipantsReserve', 'Ont réservé un créneau (%s) :');
      a('RDV.placeHolderSujet', 'Raison de la proposition');
      a(
        'RDV.placeHolderContenu',
        'Bonjour,\nJe vous propose de nous rencontrer...',
      );
      a('RDV.xFamillesParticipantsXRDV', '%d familles - %d rendez-vous');
      a(
        'RDV.legendeParentSepares',
        'Certains parents souhaitent être rencontrés séparément',
      );
      a('WidgetVoteElecMembreBureau.titre', "Membre d'un bureau de vote");
      a(
        'WidgetVoteElecMembreBureau.creerCompte',
        "Vous devez créer un compte pour accéder à la plateforme d'élections des parents",
      );
      a('WidgetVoteElecMembreBureau.labelBtnCreerCompte', 'Créer mon compte');
      a(
        'WidgetVoteElecMembreBureau.labelBtnAccederCompte',
        'Accéder à mon compte',
      );
      a(
        'WidgetVoteElecMembreBureau.ouvertureOpElecLe',
        "ouverture de l'opération électorale : %s à %s",
      );
      a(
        'WidgetVoteElecMembreBureau.opElecEnCoursJusquAu',
        "opération électorale en cours jusqu'au %s à %s",
      );
      a(
        'WidgetVoteElecMembreBureau.opElecTerminee',
        'opération électorale terminée',
      );
      a(
        'WidgetVoteElecMembreBureau.secretACreer',
        'Phrase secrète à créer avant le %s',
      );
      a('WidgetVoteElecMembreBureau.secretCree', 'Phrase secrète créée');
      a('WidgetVoteElecMembreBureau.operationTest', 'Opération de test');
      a('VoteElec.avantScrutin', 'Election non démarrée');
      a('VoteElec.scrutinEnCours', 'Election en cours');
      a('VoteElec.scrutinTermine', 'Election terminée');
      a('VoteElec.scrutinScelle', 'Election scellée');
      a('VoteElec.roleAdmin', 'Administrateur');
      a('VoteElec.roleAssesseur', 'Assesseur');
      a(
        'VoteElec.scrutinEnCoursMB',
        "L'élection est en cours, la cérémonie de dépouillement aura lieu le %s.",
      );
      a(
        'VoteElec.scrutinTermineMB',
        "L'élection est clôturée, la cérémonie de dépouillement aura lieu le %s.",
      );
      a('VoteElec.scrutinScelleMB', "L'élection est scellée.");
      a('$AppliMobile', (b) => {
        a(
          `${b}.titreFiche`,
          "QR Code d'ajout de compte sur l'application mobile",
        );
        a(
          `${b}.ModeOpQrCode`,
          "Pour générer le QR code, permettant l'ajout de votre compte sur l'application mobile %s, vous devez définir un code de vérification",
        );
        a(`${b}.AccesSiteMobile`, 'Accès au site mobile depuis un navigateur');
        a(
          `${b}.ErreurRequete`,
          "Le code n'a pas pu être généré, veuillez réessayer ultérieurement.",
        );
        a(`${b}.CodeVerification`, 'Code de vérification à 4 chiffres :');
        a(
          `${b}.MethodeConfig`,
          "Depuis un téléphone, installez l'application %s (disponible sur tous les stores).",
        );
        a(
          `${b}.MethodeConfigSuite`,
          'Cliquez sur le bouton « + » pour ajouter un compte',
        );
        a(
          `${b}.MethodeConfigSuite2`,
          'Choisissez le mode de configuration « Avec un QR Code »',
        );
        a(
          `${b}.MethodeConfigFin`,
          'Saisissez votre code de vérification défini précédemment (durée de validité 10min)',
        );
        a(`${b}.GenererQRCode`, 'Générer le QR Code');
        a(`${b}.ChangerCompte`, 'Changer de compte');
        a(
          `${b}.QRCodeAppliMobile`,
          "QRCode à flasher avec l'application mobile",
        );
      });
      a('$BtnImage', (b) => {
        a(`${b}.InformationsComplementaires`, 'Informations complémentaires');
      });
      a('$ChoixDestinatairesParCriteres', (b) => {
        a(`${b}.Classe`, 'Classe');
        a(`${b}.ClasseSelec`, '%s classe sélectionnée');
        a(`${b}.ClassesSelec`, '%s classes selectionnées');
        a(`${b}.Rubriques`, 'Rubriques (Familles)');
        a(`${b}.RubriqueSelec`, '%s rubrique sélectionnée');
        a(`${b}.RubriquesSelec`, '%s rubriques selectionnées');
        a(`${b}.Regime`, 'Régime');
        a(`${b}.RegimeSelec`, '%s régime sélectionné');
        a(`${b}.RegimesSelec`, '%s régimes selectionnés');
        a(`${b}.AutorisationDeSortie`, 'Autorisation de sortie');
        a(`${b}.AutorisationSelec`, '%s autorisation sélectionnée');
        a(`${b}.AutorisationsSelec`, '%s autorisations selectionnées');
        a(`${b}.Delegue`, 'Délégué');
        a(`${b}.ProjetAcc`, "Projet d'accompagnement");
        a(`${b}.PASelec`, '%s PA sélectionné');
        a(`${b}.PAsSelec`, '%s PA sélectionnés');
        a(`${b}.Niveau`, 'Niveaux de responsabilité (légaux, ...)');
        a(`${b}.NiveauSelec`, '%s niveau sélectionné');
        a(`${b}.NiveauxSelec`, '%s niveaux sélectionnés');
        a(`${b}.messageCtnRubrique`, 'Aucune rubrique');
        a(`${b}.messageCtnRegime`, 'Aucun regime');
        a(`${b}.messageCtnAutorisationDeSortie`, 'Aucune autorisation');
        a(`${b}.messageCtnProjetAccompagnement`, 'Aucun projet');
        a(`${b}.WaiClasse`, 'Sélectionnez une classe');
        a(`${b}.WaiRubrique`, 'Sélectionnez une rubrique');
        a(`${b}.WaiRegime`, 'Sélectionnez un régime');
        a(
          `${b}.WaiAutorisationDeSortie`,
          'Sélectionnez une autorisation de sortie',
        );
        a(`${b}.WaiDelegue`, 'Sélectionnez un délégué');
        a(`${b}.WaiProjetAcc`, "Sélectionnez une projet d'accompagnement");
        a(`${b}.WaiNiveau`, 'Sélectionnez un niveau de responsabilité');
        a(`${b}.WaiSelectionDesRessources`, 'Sélectionnez les %s');
        a(
          `${b}.WaiGenreRessourceCritere`,
          "Sélectionnez un genre d'individu associé aux critères",
        );
        a(`${b}.Tous`, 'Tous');
        a(`${b}.Nominativement`, 'Nominativement');
        a(`${b}.ParCriteres`, 'Par combinaison de critères');
        a(
          `${b}.SerontPrisEnCompte`,
          '(seront pris en compte les %s réunissant au moins un de chaque élément parmi ceux sélectionnés)',
        );
        a(
          `${b}.ChoixCritereDisponibilite`,
          'Choix des %s concernés par le téléchargement de ce document :',
        );
        a(`${b}.RepasMidi`, 'Repas du midi');
        a(`${b}.RepasSoir`, 'Repas du soir');
        a(`${b}.RepasMidiSoir`, 'Repas du midi et soir');
        a(`${b}.Internat`, 'Internat');
        a(
          `${b}.ChoixDesDestinataires`,
          'Choix des destinataires concernés par la diffusion du document',
        );
        a(`${b}.TitreFenetreCritere`, "Sélection d'élément(s) du critère %s");
        a(`${b}.TotalIndiv`, 'Total des individus');
        a(`${b}.Destinataires`, 'Destinataires');
        a(`${b}.AucunDestinataire`, 'Aucun destinataire');
        a(`${b}.ChoisirDestinataires`, 'Veuillez choisir des destinataires');
        a(`${b}.ChoisirCriteres`, 'Veuillez choisir des critères');
        a(`${b}.DeResponsable`, 'des responsables');
        a(`${b}.DesEleve`, 'des élèves');
      });
      a('$Date', (b) => {
        a(`${b}.Mois`, [
          'janvier',
          'février',
          'mars',
          'avril',
          'mai',
          'juin',
          'juillet',
          'août',
          'septembre',
          'octobre',
          'novembre',
          'décembre',
        ]);
        a(`${b}.MoisCourt`, [
          'janv.',
          'févr.',
          'mars',
          'avr.',
          'mai',
          'juin',
          'juil.',
          'août',
          'sept.',
          'oct.',
          'nov.',
          'déc.',
        ]);
      });
      a('$DoubleAuth', (b) => {
        a(`${b}.Retour`, 'Retour');
        a(`${b}.TitreValiderCodePIN`, 'Mon code PIN');
        a(`${b}.RenforcerSecurite`, 'Renforcer la sécurité de votre compte');
        a(`${b}.EnSavoirPlus`, 'En savoir plus');
        a(
          `${b}.LegendeStrategie`,
          'Choisissez le niveau à appliquer pour renforcer la sécurité de votre compte',
        );
        a(
          `${b}.LegendeStrategieCompte`,
          "Niveau de sécurité pour renforcer mon compte parmi ceux proposé(s) par l'établissement :",
        );
        a(`${b}.StrategieFort`, 'Fort');
        a(`${b}.StrategieMoyen`, 'Moyen');
        a(`${b}.StrategieAucun`, 'Aucun');
        a(
          `${b}.LegendeChoixStratTitre`,
          'A chaque connexion sur un nouvel appareil',
        );
        a(`${b}.LegendeChoixStratPIN`, 'Saisie du code PIN');
        a(`${b}.LegendeChoixStratNotif`, "Réception d'une notification");
        a(`${b}.MonCodePIN`, 'Mon code');
        a(`${b}.PremierPIN`, '1ère saisie');
        a(`${b}.ConfirmPIN`, 'Confirmation');
        a(`${b}.CodeRecuPIN`, 'Code reçu');
        a(`${b}.NouveauCodePIN`, 'Nouveau code');
        a(
          `${b}.MessageCreationCodePIN`,
          'Votre code PIN vous sera demandé à chaque connexion sur un appareil non enregistré',
        );
        a(`${b}.EnregistrerSousNom`, 'Enregistrer sous le nom');
        a(`${b}.NbCaracteresMax_D`, '%d caractères maximum');
        a(
          `${b}.WAI_SaisiePINEtValider_D`,
          "Vous devez saisir au moins %d caractères à l'aide des boutons, puis valider",
        );
        a(
          `${b}.WAI_SaisiePIN_D`,
          "Vous devez saisir %d caractères à l'aide des boutons",
        );
        a(
          `${b}.WAI_ConfirmPINEtValider`,
          "Vous devez confirmez votre code PIN à l'aide des boutons, puis valider",
        );
        a(
          `${b}.WAI_ConfirmPIN`,
          "Vous devez confirmez votre code PIN à l'aide des boutons",
        );
        a(
          `${b}.WAI_CodeReinitValide`,
          'Le code de réinitialisation est validé.',
        );
        a(`${b}.WAI_MonCodeValide`, 'Mon code est validé.');
        a(`${b}.Effacer`, 'Effacer');
        a(`${b}.InfoSaisiePIN`, 'Saisissez votre code dans le pavé numérique');
        a(`${b}.Suivant`, 'Suivant');
        a(`${b}.Annuler`, 'Annuler');
        a(
          `${b}.PersonnesConfiance`,
          "Il est fortement recommandé de n'enregistrer que les appareils ou navigateurs partagés avec des personnes de confiance.",
        );
        a(
          `${b}.NouvelAppareilRenseignerPIN`,
          'Afin de garantir la sécurité de votre compte, vous devez renseigner votre code PIN.',
        );
        a(
          `${b}.ProcedureReInitialisationCodePIN_S`,
          "Ne fermez pas cette fenêtre et renseignez le code de réinitialisation reçu à l'adresse %s, puis définissez un nouveau code PIN",
        );
        a(
          `${b}.WAI_ProcedureReInitialisationCodePIN_DS`,
          "Vous devez saisir le code de réinitialisation de %d caractères reçu à l'adresse %s à l'aide des boutons",
        );
        a(
          `${b}.WAI_ControleCodePINCourant`,
          "Vous devez saisir votre code PIN à l'aide des boutons, puis valider",
        );
        a(
          `${b}.WAI_ControleCodePINCourantFixe`,
          "Vous devez saisir votre code PIN à l'aide des boutons",
        );
        a(`${b}.TitreReInitialisationCodePIN`, 'Réinitialisation du code PIN');
        a(`${b}.ReinitialiserMonCodePIN`, 'Réinitialiser mon code PIN');
        a(
          `${b}.HintReinitialiserMonCodePIN`,
          'Cliquez pour commencer la procédure de réinitialisation de votre code PIN',
        );
        a(
          `${b}.EMailReinitialisationPIN_S`,
          "Un code de réinitialisation a été envoyé à l'adresse %s.\nSaisissez-le dans la fenêtre prévue à cet effet",
        );
        a(
          `${b}.NouvelAppareilOubliPIN`,
          "En cas d'oubli, contacter votre administrateur afin qu'il réinitialise votre code PIN.",
        );
        a(`${b}.NouvelAppareilTentatives`, 'Il vous reste %d tentatives');
        a(
          `${b}.ValiderTitreInconnu`,
          'Connexion depuis un appareil non enregistré',
        );
        a(
          `${b}.ValiderInfoPIN`,
          'Votre code est demandé à chaque connexion sur un appareil non enregistré',
        );
        a(`${b}.ValiderCodeValide`, "L'authentification a réussi");
        a(`${b}.ValiderCodePinInvalide`, "L'authentification a échoué");
        a(`${b}.Details`, 'Détails');
        a(`${b}.Client`, 'Client');
        a(`${b}.Mobile`, 'Mobile');
        a(`${b}.Navigateur`, 'Navigateur');
        a(`${b}.EnregistrerAppareilTitre`, 'Enregistrer cet appareil');
        a(
          `${b}.EnregistrerAppareilInfoIdentification`,
          "Cet appareil n'a pas encore été enregistré.",
        );
        a(
          `${b}.EnregistrerAppareilRappelNotif`,
          'Selon les modalités de sécurisation de votre compte, une notification vous a été envoyée.',
        );
        a(
          `${b}.EnregistrerAppareilSuggestions`,
          'Par exemple : Domicile, Salle 215, Tablette collège, Mon téléphone ...',
        );
        a(
          `${b}.EnregistrerAppareilNommerAppareil`,
          "Il s'agit d'un appareil de confiance",
        );
        a(
          `${b}.EnregistrerAppareilResterInconnu`,
          "Si vous n'enregistrez pas cet appareil, la mesure de sécurité définie sera à nouveau déclenchée lors de votre prochaine connexion depuis celui-ci.",
        );
        a(
          `${b}.EnregistrerAppareilNomDejaUtilise`,
          "Ce nom est déjà utilisé. Chaque appareil doit avoir un nom unique. S'agit-il du même appareil ?",
        );
        a(
          `${b}.LibelleAppareilDejaUtilise`,
          'Ce nom est déjà utilisé. Veuillez en renseigner un autre.',
        );
        a(
          `${b}.EnregistrerAppareilNomInvalide`,
          "Le nom saisi n'est pas valide",
        );
        a(
          `${b}.Message_SourceConnexion_1`,
          'Vous avez déjà utilisé ce nom pour un appareil.',
        );
        a(
          `${b}.Message_SourceConnexion_2`,
          "il s'agit effectivement du <b>même appareil</b>, avec le même navigateur, cliquez sur <b>Valider</b> pour conserver ce nom",
        );
        a(
          `${b}.Message_SourceConnexion_3_S`,
          "Son enregistrement a pu disparaitre à cause de l'effacement des cookies, consultez notre %s pour savoir comment y remédier",
        );
        a(
          `${b}.Message_SourceConnexion_4`,
          "il s'agit d'un <b>autre appareil</b>, cliquez sur <b>Annuler</b> pour saisir un nom qui lui est propre",
        );
        a(`${b}.FAQEnregistrement`, 'FAQ');
        a(
          `${b}.LienFAQPIN`,
          'Comment éviter la saisie du code PIN à chaque connexion ?',
        );
        a(
          `${b}.LienFAQEnregistrement`,
          'Pourquoi enregistrer les appareils de confiance ?',
        );
        a(`${b}.TitreFiche`, "Mesure de sécurité de l'établissement");
        a(
          `${b}.PinInsuffisant`,
          'Le code PIN doit contenir au moins %d chiffres',
        );
        a(`${b}.PinNonConfirme`, 'Les 2 codes PIN saisis sont différents');
        a(`${b}.PrefListeLibelle`, 'Libellé');
        a(`${b}.PrefListeAppareil`, 'Appareil');
        a(`${b}.PrefListeDate`, 'Dernière connexion');
        a(`${b}.PrefListeIcone`, 'Genre');
        a(
          `${b}.PrefChoisirDEnregistrer`,
          "A chaque fois que vous vous connecterez depuis un appareil ou navigateur non enregistré, vous pourrez choisir ou non de l'enregistrer.",
        );
        a(
          `${b}.PrefPensezASupprimer`,
          "Pensez à supprimer les appareils et/ou navigateurs enregistrés que vous n'utilisez plus.",
        );
        a(
          `${b}.PrefConfirmerSupprimer`,
          'Etes-vous sûr de vouloir retirer cet appareil de la liste des appareils "reconnus"?',
        );
        a(`${b}.AucunAppareilEnregistre`, 'Aucun appareil enregistré');
        a(`${b}.RenforcerSecuTitre`, 'Renforcer la sécurité de mon compte');
        a(`${b}.RenforcerSecuDefinirPIN`, 'Définir un code PIN');
        a(
          `${b}.RenforcerSecuInfoPIN`,
          'Ce code PIN sera demandé à chaque connexion depuis un appareil "non enregistré, et une notification sera envoyée',
        );
        a(`${b}.RenforcerButtonModifier`, 'Modifier mon code PIN');
        a(`${b}.AppareilsIdentifies`, 'Appareils enregistrés');
        a(`${b}.SecuriteRenforcee`, 'Renforcement de la sécurité');
      });
      a('$FichiersCloud', (b) => {
        a(`${b}.TitreFichierCloud`, 'Exploration de %s');
        a(`${b}.TailleFichierCloud`, 'Taille');
        a(`${b}.PartagerFichierCloud`, 'Partager');
        a(
          `${b}.ChoisirRepertoire_FichierCloud`,
          'Choisir le répertoire et partager',
        );
        a(
          `${b}.GlissezDeposer_Cloud`,
          'Glissez vos fichiers ou cliquez ici pour les deposer',
        );
        a(`${b}.Deposer_Cloud`, 'Déposer un fichier');
        a(`${b}.TitreFenetreFormat`, 'Choix du format de publication');
        a(
          `${b}.ExplicationFenetreFormat`,
          'Vous pouvez décider de partager vos documents au format pdf. Ce format permet une consultation en lecture seule sur tout appareil sans devoir installer des applications supplémentaires.',
        );
        a(
          `${b}.ConfirmationFenetreFormat`,
          'Confirmez-vous le partage de vos documents dans ce format de publication ?',
        );
        a(`${b}.FormatOrigine`, "Format d'origine");
        a(`${b}.FormatPdf`, 'PDF');
        a(`${b}.FormatPublication`, 'Format de publication actuel');
        a(`${b}.ActualisationRepertoire`, 'Actualisation du répertoire');
        a(`${b}.SelectionnerRepertoire_S`, 'Sélectionner le répertoire %s');
        a(`${b}.Hint_Repertoire`, 'Répertoire');
      });
      a('$GlossaireCompetences', (b) => {
        a(`${b}.ServiceNonImprimable`, 'Le service ne sera pas imprimé');
        a(`${b}.OuvrirDetailEval`, 'Ouvrir le détail des évaluations');
        a(`${b}.MoyenneGenerale`, 'Moyenne générale');
        a(`${b}.validationAuto`, (b) => {
          a(`${b}.hintBouton`, 'Calcul du niveau de maîtrise du domaine');
          a(
            `${b}.hintBoutonCN`,
            'Calcul du niveau de référence des compétences numériques',
          );
          a(
            `${b}.hintBoutonDomaines`,
            'Calcul des niveaux de maîtrise des domaines du cycle',
          );
        });
      });
      a('$GlossaireCP', (b) => {
        a(`${b}.PiecesJointes`, 'Pièces jointes');
        a(`${b}.ConsulterLesPiecesJointes`, 'Consulter les pièces jointes');
        a(`${b}.PageConnexion`, 'Connexion');
        a(`${b}.PageDeconnexion`, 'Déconnexion');
        a(`${b}.PageCommune`, 'Choix des espaces');
        a(`${b}.Aucun`, 'Aucun');
        a(`${b}.Aucune`, 'Aucune');
      });
      a('$GlossaireEDT', (b) => {
        a(`${b}.Ferie`, 'Férié');
        a(`${b}.Stage`, 'Stage');
        a(`${b}.ListeElevesSasnCours`, 'Liste des élèves vide (sans cours)');
        a(`${b}.ListeElevesDe_S`, 'Liste des élèves de %s');
      });
      a('$GlossaireMessagerie', (b) => {
        a(`${b}.QuitterModeInstantane`, 'Fermer le tchat');
        a(
          `${b}.HintQuitterModeInstantane`,
          "Les messages de ce tchat apparaîtront dans vos discussions. Vous pourrez les isoler à nouveau depuis l'affichage des discussions",
        );
        a(`${b}.MessageInstantStatut_S`, 'Statut : %s');
      });
      a('$GlossaireOrientation', (b) => {
        a(`${b}.Orientation`, 'Orientation');
        a(
          `${b}.SpecialitesOrdre`,
          'Enseignements de spécialité par ordre de préférence',
        );
        a(`${b}.Option`, 'Option(s)');
        a(`${b}.PublieLe`, 'Sera publiée le %s');
        a(`${b}.Ressources`, (b) => {
          a(`${b}.LettreEtablissement`, 'E');
          a(`${b}.LettreHorsEtablissement`, 'HE');
          a(`${b}.DispoEtablissement`, "Proposées par l'établissement");
          a(
            `${b}.DispoHorsEtablissement`,
            "Uniquement hors de l'établissement",
          );
          a(`${b}.AvisProvisoireCC`, 'Avis provisoire du conseil de classe');
          a(
            `${b}.MsgAvisProvisoireCC`,
            "L'avis provisoire du conseil de classe sera disponible à partir du %s",
          );
          a(`${b}.IntentionsFamille`, "Intentions d'orientation de la famille");
          a(
            `${b}.RecommandationSurVoieNonDemandee`,
            'Recommandation sur une voie non demandée',
          );
          a(`${b}.PropositionCC`, 'Proposition du conseil de classe');
          a(`${b}.ChoixDefinitifsFamille`, 'Choix définitifs de la famille');
          a(
            `${b}.MsgPropositionCC`,
            'La proposition du conseil de classe sera disponible à partir du %s',
          );
          a(
            `${b}.PropositionSurVoieNonDemandee`,
            'Proposition sur une voie non demandée',
          );
          a(`${b}.DecisionRetenue`, 'Décision retenue');
          a(
            `${b}.MsgDecisionRetenue`,
            'La décision du conseil de classe sera disponible à partir du %s',
          );
          a(`${b}.Commentaire`, 'Commentaire');
          a(`${b}.IntentionsOrientations`, "Intentions d'orientation");
          a(`${b}.ChoixDefinitifs`, 'Choix Définitifs');
          a(
            `${b}.MessageSaisieIndisponible`,
            'Les demandes des familles pourront être saisies à partir du %s',
          );
          a(`${b}.DemandeStagePasserelle`, "Demande d'un stage passerelle");
          a(`${b}.StagePasserellePropose`, 'Stage passerelle proposé');
          a(
            `${b}.IntentionsEtAvisProvisoire`,
            "Intentions d'orientation et avis provisoire du conseil",
          );
          a(
            `${b}.ChoixEtPropositions`,
            'Choix définitifs et propositions du conseil',
          );
        });
        a(`${b}.Bouton`, (b) => {
          a(`${b}.Supprimer`, 'Supprimer la sélection');
          a(
            `${b}.IntentionsOrientation`,
            "Valider les intentions d'orientation",
          );
          a(`${b}.ChoixDefinitifs`, 'Valider les choix définitifs');
        });
        a(`${b}.TitreListe`, "Choix de l'orientation");
        a(
          `${b}.ClicChoixOrientation`,
          'Cliquez ici pour choisir une orientation',
        );
        a(`${b}.Supprimer`, 'Voulez-vous supprimer le voeu ?');
        a(`${b}.Specialite`, 'Spécialité(s)');
        a(`${b}.Specialites`, (b) => {
          a(`${b}.TitreListe`, 'Choix des enseignements de spécialité');
          a(
            `${b}.ClicChoixSpecialite`,
            'Cliquez ici pour choisir une spécialité',
          );
          a(`${b}.Supprimer`, 'Voulez-vous supprimer la spécialité ?');
          a(
            `${b}.UniquementSpecialiteEleve`,
            "Uniquement les spécialités de l'élève",
          );
          a(
            `${b}.AjoutImpossible`,
            'Ajout impossible. Vous avez atteint le nombre maximal de spécialités',
          );
          a(
            `${b}.AucuneSpecialiteDisponible`,
            'Toutes les spécialités disponibles ont été sélectionnées',
          );
        });
        a(`${b}.Options`, (b) => {
          a(`${b}.TitreListe`, 'Choix des options');
          a(`${b}.ClicChoixOption`, 'Cliquez ici pour choisir une option');
          a(`${b}.Ajouter`, 'Ajouter une option');
          a(`${b}.Supprimer`, "Voulez-vous supprimer l'option ?");
          a(
            `${b}.AjoutImpossible`,
            "Ajout impossible. Vous avez atteint le nombre maximal d'options",
          );
          a(
            `${b}.AucuneOptionDisponible`,
            'Toutes les options disponibles ont été sélectionnées',
          );
        });
        a(
          `${b}.SaisiePriseEnCompte`,
          'Votre saisie a bien été prise en compte',
        );
        a(`${b}.AR`, (b) => {
          a(
            `${b}.RetourFamilleASaisirAvant`,
            'Retour de la famille à saisir avant le %s',
          );
          a(`${b}.RetourFamille`, 'Retour de la famille');
          a(
            `${b}.ReponseFamilleASaisirAvant`,
            'Réponse de la famille à saisir avant le %s',
          );
          a(
            `${b}.ReponseFamilleSaisiePar`,
            'Réponse de la famille saisie par %s le %s',
          );
          a(
            `${b}.PropositionCCStageAR`,
            'Proposition du conseil de classe sur le(s) stage(s) passerelle(s)',
          );
          a(
            `${b}.PrisConnaissance`,
            "J'ai pris connaissance de l'avis du conseil de classe",
          );
          a(
            `${b}.FamillePrisConnaissance`,
            "La famille a pris connaissance de l'avis du conseil de classe",
          );
          a(`${b}.Jaccepte`, "J'accepte");
          a(`${b}.JeRefuse`, 'Je refuse');
          a(
            `${b}.LaFamilleAccepteLaPropositionDuConseilDeClasse`,
            'La famille accepte la proposition du conseil de classe',
          );
          a(
            `${b}.LaFamilleNAcceptePasLaPropositionEtDemandeUnRDV`,
            "La famille n'accepte pas la proposition et demande un rendez-vous",
          );
          a(`${b}.NousAcceptons`, 'Nous acceptons');
          a(
            `${b}.NousAcceptonsSuite`,
            'la proposition du conseil de classe suivante :',
          );
          a(
            `${b}.MsgARProposition`,
            "Celle-ci devient la décision d'orientation définitive prise par le chef d'établissement.<br>Nous avons pris connaissance des recommandations du conseil de classe.",
          );
          a(`${b}.NousAcceptonsAucune`, "Nous n'acceptons aucune");
          a(
            `${b}.NousAcceptonsAucuneSuite`,
            "des propositions du conseil de classe et prenons immédiatement contact avec le chef d'établissement.",
          );
          a(
            `${b}.MsgAttentionSaisieAR`,
            "Attention, vous avez jusqu'au %s pour donner votre réponse sur la proposition du conseil de classe.",
          );
        });
        a(
          `${b}.MsgAucuneOrientation`,
          "Aucune information n'a été renseignée. La période de saisie est clôturée",
        );
        a(`${b}.AucuneOrientation`, "Aucune orientation n'a été renseignée.");
        a(`${b}.Commentaire`, 'Commentaire');
        a(`${b}.PublieSurEspaceParent`, "Publié sur l'Espace Parent");
        a(`${b}.ASaisirJusqau`, "(à saisir jusqu'au %s)");
        a(`${b}.LanguesOptions`, (b) => {
          a(`${b}.titre`, 'Langues vivantes, anciennes et régionales');
          a(`${b}.LV1`, 'LV1');
          a(`${b}.LV2`, 'LV2');
          a(`${b}.Options`, 'Autres langues');
          a(`${b}.bouton`, 'Valider le choix des langues');
          a(`${b}.TitreListeLV1`, 'Choix de la LV1');
          a(`${b}.TitreListeLV2`, 'Choix de la LV2');
          a(`${b}.msgSuppression`, 'Voulez-vous supprimer ce choix ?');
          a(`${b}.titreMsgErreur`, 'Affectation impossible');
        });
        a(`${b}.Voeux`, 'Vœu %d');
        a(`${b}.ARenseignerDuAu`, 'À renseigner du %s au %s');
        a(
          `${b}.AvisProvisoireDonneLe`,
          'Avis provisoire du conseil donné le %s',
        );
        a(`${b}.AvisProvisoire`, 'Avis provisoire');
        a(`${b}.RetourLe`, "Retour à renseigner jusqu'au %s");
        a(`${b}.PropositionDonneLe`, 'Proposition du conseil donnée le %s');
        a(`${b}.Proposition`, 'Proposition');
        a(`${b}.ReponseLe`, "Réponse à renseigner jusqu'au  %s");
        a(`${b}.DecisionRetenueLe`, 'Décision retenue le %s');
        a(`${b}.SupprimerLeVoeux`, 'Supprimer le vœu');
        a(`${b}.OrientationDemandee`, 'Orientation demandée');
        a(`${b}.SpecialiteDemandee`, 'Spécialitée(s) demandée(s)');
        a(`${b}.OptionDemandee`, 'Option(s) demandée(s)');
        a(
          `${b}.ChoixDesLangues`,
          'Choix des langues vivantes, anciennes et régionales',
        );
        a(
          `${b}.RetourAvisConseilClasse`,
          'Retour sur les avis du conseil de classe',
        );
        a(`${b}.ReponseDeLaFamille`, 'Réponse de la famille');
      });
      a('$GlossaireSuiviResultatsCompetences', (b) => {
        a(
          `${b}.ListeCompetencesNonMaitrisees`,
          'Liste des compétences évaluées non maîtrisées',
        );
        a(
          `${b}.ListeCompetencesMaitrisees`,
          'Liste des compétences évaluées maîtrisées',
        );
        a(`${b}.Colonnes`, (b) => {
          a(`${b}.Items`, 'Items');
          a(`${b}.Jauge`, 'Évaluations');
          a(`${b}.Eleves`, 'Élèves');
          a(`${b}.NbCompetencesSucces`, 'Compétences maîtrisées');
          a(`${b}.NbCompetencesEchecs`, 'Compétences non maîtrisées');
        });
        a(`${b}.HintColonnes`, (b) => {
          a(`${b}.NbCompetencesSucces`, 'Nombre de compétences maîtrisées');
          a(`${b}.NbCompetencesEchecs`, 'Nombre de compétences non maîtrisées');
        });
        a(`${b}.FenetreOptionsAff`, (b) => {
          a(`${b}.Titre`, "Paramètres d'affichage");
          a(`${b}.CompetencesNonMaitrisees`, 'Compétences non maîtrisées');
          a(`${b}.CompetencesMaitrisees`, 'Compétences maîtrisées');
          a(
            `${b}.EchecCompetenceSi`,
            'Une compétence est considérée comme non maîtrisée si :',
          );
          a(
            `${b}.SuccesCompetenceSi`,
            'Une compétence est considérée comme maîtrisée si :',
          );
          a(`${b}.AuMoins`, 'au moins');
          a(
            `${b}.PourcentageEvalsCompEvaluees`,
            '% des évaluations ont le niveau %s',
          );
          a(`${b}.wai`, (b) => {
            a(
              `${b}.SelectionPourcentage`,
              'Sélectionnez un pourcentage minimal des évaluations qui ont le niveau %s',
            );
          });
          a(
            `${b}.ElementsUtilisesDansCalcul`,
            'Élément des grilles de compétence utilisé dans le calcul des taux',
          );
          a(`${b}.CalculParElementsSignifiants`, 'Élément signifiant');
          a(`${b}.CalculParCompetences`, 'Compétence');
        });
      });
      a('$GlossaireWAI', (b) => {
        a(`${b}.wai`, (b) => {
          a(
            `${b}.Aide`,
            "Informations concernant l'accessibilité du site et la navigation clavier. ",
          );
        });
        a(`${b}.heures`, 'heures');
        a(`${b}.colonne`, 'colonne');
        a(`${b}.ligne`, 'ligne');
        a(`${b}.Coche`, 'Coché');
        a(`${b}.Decoche`, 'Décoché');
        a(`${b}.CochePartiel`, 'Partiellement coché');
        a(`${b}.PeriodeCloturee`, 'Période clôturée');
        a(
          `${b}.TinyView`,
          "Ce contenu a été fourni par un utilisateur et peut ne pas respecter les normes d'accessibilité RGAA.",
        );
      });
      a('$ObjetAideContextuelle', (b) => {
        a(`${b}.Titre`, 'Des supports pour vous aider');
        a(`${b}.AucuneAide`, 'Aucune aide disponible');
        a(`${b}.VoirPlus`, 'Voir plus de supports');
        a(`${b}.UneAide`, '1 aide disponible');
        a(`${b}.XAide_D`, '%d aides disponibles');
      });
      a('$ObjetCalendrier', (b) => {
        a(`${b}.ferieAbr`, 'F');
        a(`${b}.WAI`, (b) => {
          a(`${b}.SelecPeriode`, 'Sélectionner une période');
          a(
            `${b}.MultiSelec`,
            'Multi-séléction de semaines, naviguez avec les flèches gauche et droite et validez avec les touches Entrée ou Barre espace',
          );
        });
      });
      a('$ObjetCentraleNotifications', (b) => {
        a(`${b}.AucuneNotification`, 'Aucune notification');
        a(`${b}.Notification_S`, '%s notification');
        a(`${b}.Notifications_S`, '%s notifications');
        a(`${b}.TitreNotifications`, 'NOTIFICATIONS');
        a(`${b}.AucuneNouvelleNotification`, 'Aucune nouvelle notification');
        a(`${b}.HistoSectionTitre`, 'Historique de la section "%s"');
        a(`${b}.HistoNotifLueLe`, 'Lue le %s');
        a(`${b}.HistoNotifSuppr`, 'Expire le %s');
        a(`${b}.MarquerLu`, 'Marquer lu');
        a(`${b}.Lues_S`, '%s lues');
      });
      a('$ObjetFenetre_ImportFichierProf', (b) => {
        a(`${b}.ChoisirLeFichier`, 'Choisir le fichier');
        a(
          `${b}.ReussiteImport`,
          'Les données ont bien été importées ou mises à jour',
        );
        a(
          `${b}.TexteExplicatif`,
          'Si vous avez sauvegardé vos ressources pédagogiques des années précédentes, vous pouvez les récupérer en choisissant le fichier *.zip qui les contient.',
        );
        a(
          `${b}.TexteExplicatifModelesSond`,
          'Si vous avez sauvegardé vos modèles de sondages, vous pouvez les récupérer en choisissant le fichier *.zip qui les contient.',
        );
      });
      a('$ObjetFenetre_MoyenneTableauResultats', (b) => {
        a(`${b}.OuvrirFenetre`, 'Ouvrir la fenêtre de calcul de la moyenne');
      });
      a('$ObjetFenetre_ResultatsCasier', (b) => {
        a(`${b}.fonction`, 'Fonction');
        a(`${b}.classe`, 'Classe');
        a(`${b}.maitresDeStage`, 'Maîtres de stage');
        a(`${b}.estLu`, 'Le document est lu');
        a(`${b}.aucunDestinataire`, "Attention : il n'y a pas de destinataire");
      });
      a('$ObjetFenetre_SelectionMatiere', (b) => {
        a(`${b}.SelectionnerMatiere`, 'Sélectionner une matière');
      });
      a('$TextareaMax', (b) => {
        a(`${b}.XCaracteresMax_D`, '%d caractères maximum');
        a(`${b}.SaisieVocale`, (b) => {
          a(`${b}.NoSpeech`, 'Aucune parole détectée');
          a(`${b}.Aborted`, 'Annulation');
          a(`${b}.AudioCapture`, 'La capture audio a échouée');
          a(`${b}.Network`, 'Une connexion est nécessaire');
          a(`${b}.NotAllowed`, "La capture audio n'est pas autorisée");
          a(
            `${b}.ServiceNotAllowed`,
            "Le service de reconnaissance n'est pas autorisé",
          );
          a(`${b}.BadGrammar`, 'Erreur de configuration du service');
          a(`${b}.LanguageNotSupported`, "La langue n'est pas supportée");
          a(`${b}.CaptureAudio`, 'Capture audio');
        });
      });
      a('$TypeArrondi', (b) => {
        a(`${b}.Sans`, 'sans');
        a(`${b}.Dixieme`, '1/10');
        a(`${b}.Quart`, '1/4');
        a(`${b}.Demi`, '1/2');
        a(`${b}.Point`, '1 point');
      });
      a('$TypeEtatSatisfaction', (b) => {
        a(`${b}.TresInsatisfait`, 'Très insatisfait');
        a(`${b}.Insatisfait`, 'Insatisfait');
        a(`${b}.Satisfait`, 'Satisfait');
        a(`${b}.TresSatisfait`, 'Très satisfait');
      });
      a('$TypeHebergementStage', (b) => {
        a(`${b}.nonRenseigne`, 'Non renseigné');
        a(`${b}.aLEntreprise`, "Hébergement de l'élève prévu par l'entreprise");
        a(`${b}.aLEtablissement`, "Hébergement de l'élève prévu à l'internat");
      });
      a('$TypeNiveauEquivalenceCE', (b) => {
        a(`${b}.NiveauX`, 'Niveau %s');
        a(`${b}.LVE`, (b) => {
          a(`${b}.NiveauAucun`, 'Aucun');
          a(`${b}.Niveau1`, 'A1');
          a(`${b}.Niveau1Plus`, 'A1+');
          a(`${b}.Niveau2`, 'A2');
          a(`${b}.Niveau3`, 'A2+');
          a(`${b}.Niveau4`, 'B1');
          a(`${b}.Niveau5`, 'B1+');
          a(`${b}.Niveau6`, 'B2');
          a(`${b}.Niveau7`, 'C1');
          a(`${b}.Niveau8`, 'C2');
        });
        a(`${b}.CN`, (b) => {
          a(`${b}.NiveauAucun`, 'Aucun');
          a(`${b}.Niveau1`, '1');
          a(`${b}.Niveau2`, '2');
          a(`${b}.Niveau3`, '3');
          a(`${b}.Niveau4`, '4');
          a(`${b}.Niveau5`, '5');
          a(`${b}.Niveau6`, '6');
          a(`${b}.Niveau7`, '7');
          a(`${b}.Niveau8`, '8');
        });
      });
      a('$TypeNote', (b) => {
        a(`${b}.Annotation`, (b) => {
          a(`${b}.Absent`, 'Abs');
          a(`${b}.Dispense`, 'Disp');
          a(`${b}.NonNote`, 'N.Not');
          a(`${b}.Inapte`, 'Inap');
          a(`${b}.NonRendu`, 'N.Rdu');
          a(`${b}.Felicitations`, '+');
        });
        a(`${b}.CaractereAnnotation`, (b) => {
          a(`${b}.Absent`, 'a');
          a(`${b}.Dispense`, 'd');
          a(`${b}.NonNote`, 'n');
          a(`${b}.Inapte`, 'i');
          a(`${b}.NonRendu`, 'r');
          a(`${b}.AbsentZero`, 'z');
          a(`${b}.NonRenduZero`, 'w');
          a(`${b}.Felicitations`, '+');
        });
        a(`${b}.InputNote`, (b) => {
          a(`${b}.LabelChamps`, 'Note');
          a(`${b}.MinMax`, 'La valeur doit être comprise entre %s et %s');
        });
      });
      a('$TypeOrigineCreationRoleSignataire', (b) => {
        a(`${b}.OCRS_Professeur`, 'Professeur');
        a(`${b}.OCRS_Responsable`, 'Responsable élève');
        a(`${b}.OCRS_Eleve`, 'Élève');
        a(`${b}.OCRS_ChefEtablissement`, 'Représentant établissement');
        a(`${b}.OCRS_ChefEntreprise`, 'Responsable entreprise');
        a(`${b}.OCRS_MaitreDeStage`, 'Maître de stage');
        a(`${b}.OCRS_Personnel`, 'Personnel');
        a(
          `${b}.OCRS_ResponsableOuEleveMajeur`,
          'Responsable préférentiel ou élève si majeur',
        );
        a(`${b}.OCRS_ReferentStage`, 'Référent de stage');
        a(`${b}.OCRS_ImpVisaDirecteur`, 'Le directeur');
        a(`${b}.OCRS_ImpVisaEnseignant`, 'Enseignant');
        a(`${b}.OCRS_ImpChefEtablissement`, "Le chef d'établissement");
        a(`${b}.OCRS_ImpChefEtabAdjoint`, "Le chef d'établissement-adjoint");
        a(`${b}.OCRS_ImpCPE`, "Le conseiller principal d'éducation");
        a(`${b}.OCRS_ImpVisaFamille`, 'Visa de la famille');
      });
      a('$UtilitaireMAJServeur', (b) => {
        a(`${b}.MAJ_Titre`, 'Mise à jour de PRONOTE');
        a(
          `${b}.MAJ_Prevue_S`,
          '<b>Le serveur PRONOTE de votre établissement sera mis à jour à %s ce qui entrainera votre déconnexion.</b><br>Cette mise à jour ne prendra que quelques minutes, vous pourrez poursuivre votre travail juste après.<br><b>Pensez à enregistrer régulièrement vos données.</b><br><br>Un second message vous préviendra quelques minutes avant la coupure.',
        );
        a(
          `${b}.MAJ_Imminente_Eleve_S`,
          '<b>Le serveur PRONOTE de votre établissement sera mis à jour dans %s minutes.</b><br><b>Vous allez être déconnecté.</b><br>Cette mise à jour ne prendra que quelques minutes, vous pourrez poursuivre votre travail juste après.',
        );
        a(
          `${b}.MAJ_Imminente_S`,
          '<b>Le serveur PRONOTE de votre établissement sera mis à jour dans %s minutes.</b><br><b>Enregistrez vos dernières saisies avant la déconnexion .</b><br>Cette mise à jour ne prendra que quelques minutes, vous pourrez poursuivre votre travail juste après.',
        );
        a(
          `${b}.MAJ_Annulee`,
          'La mise à jour du serveur PRONOTE a été reportée.',
        );
        a(
          `${b}.MAJ_Attente`,
          'La mise à jour du serveur PRONOTE de votre établissement est en cours.<br>Cette mise à jour ne prendra que quelques minutes, vous pourrez vous reconnecter juste après.',
        );
        a(`${b}.MAJ_Effectue`, 'Le serveur PRONOTE a été mis à jour.');
      });
      a('$ValidationMotDePasse', (b) => {
        a(`${b}.titre`, 'Le mot de passe doit');
        a(`${b}.longueurMDPMinMax`, 'contenir entre %s et %s caractères');
        a(`${b}.longueurMDPMin`, 'contenir au moins %s caractères');
        a(`${b}.chiffre`, 'contenir au moins un caractère numérique');
        a(`${b}.lettre`, 'contenir au moins une lettre');
        a(
          `${b}.special`,
          'contenir au moins un caractère spécial \n(ni lettre, ni chiffre)',
        );
        a(`${b}.MajMin`, 'mélanger des minuscules et des majuscules');
        a(`${b}.login`, "être différent du nom et de l'identifiant");
        a(`${b}.mdpDifferent`, 'être différent du mot de passe actuel');
        a(`${b}.RegleValide`, 'Règle valide');
        a(`${b}.RegleInvalide`, 'Règle invalide');
      });
    };
  },
  fn: 'traductions.js',
});
