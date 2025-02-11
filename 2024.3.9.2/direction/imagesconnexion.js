IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    module.exports = function (lObjetImageConnexion) {
      var TypeArrierePlanAuthentification =
        require('TypeArrierePlanAuthentification.js').TypeArrierePlanAuthentification;
      var ObjetImageConnexion = require('ObjetImageConnexion.js');
      if (!ObjetImageConnexion) ObjetImageConnexion = lObjetImageConnexion;

      var imagesExtra = {};
      ObjetImageConnexion.setDefinitionImagesExtra(imagesExtra);

      var lImages = [];

      lImages[TypeArrierePlanAuthentification.Louvre] = [
        {
          //Semaine 1

          srcImage: 'ressources/anglicisme-6.svg',
          urlImageSuite: 'ressources/anglicisme-6-suite.svg',
          urlImageFond: 'ressources/bkg-orange.svg',
          widthImageSuite: 1442,
          heightImageSuite: 600,
          couleurConnexion: '#ffffff',
          classImageFond: 'Repeat',
          lienLogo: 'https://www.projet-voltaire.fr/',
          styleLogo:
            'background-image: url(ressources/logo-projet-voltaire.png);width: 100px;height: 85px;',
          suiviLogo: 'https://www.index-education.com/swie/tl.php?ln=volt_logo',
          avecLienSuite: true,
          texteLienSuite:
            'Avec le Projet Voltaire et PRONOTE, découvrez comment améliorer votre expression orale.',
          lienSuite:
            'https://www.projet-voltaire.fr/pronote/?utm_source=pronote&utm_medium=referral_partner&utm_campaign=pronote_partenariat_pronote_2024',
          suiviLienSuite:
            'https://www.index-education.com/swie/tl.php?ln=volt24_19',
        },
        {
          //Semaine 2

          srcImage: 'ressources/anglicisme-6.svg',
          urlImageSuite: 'ressources/anglicisme-6-suite.svg',
          urlImageFond: 'ressources/bkg-orange.svg',
          widthImageSuite: 1442,
          heightImageSuite: 600,
          couleurConnexion: '#ffffff',
          classImageFond: 'Repeat',
          lienLogo: 'https://www.projet-voltaire.fr/',
          styleLogo:
            'background-image: url(ressources/logo-projet-voltaire.png);width: 100px;height: 85px;',
          suiviLogo: 'https://www.index-education.com/swie/tl.php?ln=volt_logo',
          avecLienSuite: true,
          texteLienSuite:
            'Avec le Projet Voltaire et PRONOTE, découvrez comment améliorer votre expression orale.',
          lienSuite:
            'https://www.projet-voltaire.fr/pronote/?utm_source=pronote&utm_medium=referral_partner&utm_campaign=pronote_partenariat_pronote_2024',
          suiviLienSuite:
            'https://www.index-education.com/swie/tl.php?ln=volt24_19',
        },
        {
          //Semaine 3

          srcImage: 'ressources/anglicisme-7.svg',
          urlImageSuite: 'ressources/anglicisme-7-suite.svg',
          urlImageFond: 'ressources/bkg-orange.svg',
          widthImageSuite: 1442,
          heightImageSuite: 600,
          couleurConnexion: '#ffffff',
          classImageFond: 'Repeat',
          lienLogo: 'https://www.projet-voltaire.fr/',
          styleLogo:
            'background-image: url(ressources/logo-projet-voltaire.png);width: 100px;height: 85px;',
          suiviLogo: 'https://www.index-education.com/swie/tl.php?ln=volt_logo',
          avecLienSuite: true,
          texteLienSuite:
            'Avec le Projet Voltaire et PRONOTE, découvrez comment améliorer votre expression orale.',
          lienSuite:
            'https://www.projet-voltaire.fr/pronote/?utm_source=pronote&utm_medium=referral_partner&utm_campaign=pronote_partenariat_pronote_2024',
          suiviLienSuite:
            'https://www.index-education.com/swie/tl.php?ln=volt24_20',
        },
        {
          //Semaine 4

          srcImage: 'ressources/superflu-8.svg',
          urlImageSuite: 'ressources/superflu-8-suite.svg',
          urlImageFond: 'ressources/bkg-bleu.svg',
          widthImageSuite: 1442,
          heightImageSuite: 600,
          couleurConnexion: '#ffffff',
          classImageFond: 'Repeat',
          lienLogo: 'https://www.projet-voltaire.fr/',
          styleLogo:
            'background-image: url(ressources/logo-projet-voltaire.png);width: 100px;height: 85px;',
          suiviLogo: 'https://www.index-education.com/swie/tl.php?ln=volt_logo',
          avecLienSuite: true,
          texteLienSuite:
            'Avec le Projet Voltaire et PRONOTE, découvrez comment améliorer votre expression orale.',
          lienSuite:
            'https://www.projet-voltaire.fr/pronote/?utm_source=pronote&utm_medium=referral_partner&utm_campaign=pronote_partenariat_pronote_2024',
          suiviLienSuite:
            'https://www.index-education.com/swie/tl.php?ln=volt24_21',
        },
        {
          //Semaine 5

          srcImage: 'ressources/anglicisme-8.svg',
          urlImageSuite: 'ressources/anglicisme-8-suite.svg',
          urlImageFond: 'ressources/bkg-orange.svg',
          widthImageSuite: 1442,
          heightImageSuite: 600,
          couleurConnexion: '#ffffff',
          classImageFond: 'Repeat',
          lienLogo: 'https://www.projet-voltaire.fr/',
          styleLogo:
            'background-image: url(ressources/logo-projet-voltaire.png);width: 100px;height: 85px;',
          suiviLogo: 'https://www.index-education.com/swie/tl.php?ln=volt_logo',
          avecLienSuite: true,
          texteLienSuite:
            'Avec le Projet Voltaire et PRONOTE, découvrez comment améliorer votre expression orale.',
          lienSuite:
            'https://www.projet-voltaire.fr/pronote/?utm_source=pronote&utm_medium=referral_partner&utm_campaign=pronote_partenariat_pronote_2024',
          suiviLienSuite:
            'https://www.index-education.com/swie/tl.php?ln=volt24_22',
        },
        {
          //Semaine 6

          srcImage: 'ressources/superflu-9.svg',
          urlImageSuite: 'ressources/superflu-9-suite.svg',
          urlImageFond: 'ressources/bkg-bleu.svg',
          widthImageSuite: 1442,
          heightImageSuite: 600,
          couleurConnexion: '#ffffff',
          classImageFond: 'Repeat',
          lienLogo: 'https://www.projet-voltaire.fr/',
          styleLogo:
            'background-image: url(ressources/logo-projet-voltaire.png);width: 100px;height: 85px;',
          suiviLogo: 'https://www.index-education.com/swie/tl.php?ln=volt_logo',
          avecLienSuite: true,
          texteLienSuite:
            'Avec le Projet Voltaire et PRONOTE, découvrez comment améliorer votre expression orale.',
          lienSuite:
            'https://www.projet-voltaire.fr/pronote/?utm_source=pronote&utm_medium=referral_partner&utm_campaign=pronote_partenariat_pronote_2024',
          suiviLienSuite:
            'https://www.index-education.com/swie/tl.php?ln=volt24_23',
        },
        {
          //Semaine 7

          srcImage: 'ressources/superflu-10.svg',
          urlImageSuite: 'ressources/superflu-10-suite.svg',
          urlImageFond: 'ressources/bkg-bleu.svg',
          widthImageSuite: 1442,
          heightImageSuite: 600,
          couleurConnexion: '#ffffff',
          classImageFond: 'Repeat',
          lienLogo: 'https://www.projet-voltaire.fr/',
          styleLogo:
            'background-image: url(ressources/logo-projet-voltaire.png);width: 100px;height: 85px;',
          suiviLogo: 'https://www.index-education.com/swie/tl.php?ln=volt_logo',
          avecLienSuite: true,
          texteLienSuite:
            'Avec le Projet Voltaire et PRONOTE, découvrez comment améliorer votre expression orale.',
          lienSuite:
            'https://www.projet-voltaire.fr/pronote/?utm_source=pronote&utm_medium=referral_partner&utm_campaign=pronote_partenariat_pronote_2024',
          suiviLienSuite:
            'https://www.index-education.com/swie/tl.php?ln=volt24_24',
        },
        {
          //Semaine 8

          srcImage: 'ressources/anglicisme-9.svg',
          urlImageSuite: 'ressources/anglicisme-9-suite.svg',
          urlImageFond: 'ressources/bkg-orange.svg',
          widthImageSuite: 1442,
          heightImageSuite: 600,
          couleurConnexion: '#ffffff',
          classImageFond: 'Repeat',
          lienLogo: 'https://www.projet-voltaire.fr/',
          styleLogo:
            'background-image: url(ressources/logo-projet-voltaire.png);width: 100px;height: 85px;',
          suiviLogo: 'https://www.index-education.com/swie/tl.php?ln=volt_logo',
          avecLienSuite: true,
          texteLienSuite:
            'Avec le Projet Voltaire et PRONOTE, découvrez comment améliorer votre expression orale.',
          lienSuite:
            'https://www.projet-voltaire.fr/pronote/?utm_source=pronote&utm_medium=referral_partner&utm_campaign=pronote_partenariat_pronote_2024',
          suiviLienSuite:
            'https://www.index-education.com/swie/tl.php?ln=volt24_25',
        },
        {
          //Semaine 9

          srcImage: 'ressources/tic-4.svg',
          urlImageSuite: 'ressources/tic-4-suite.svg',
          urlImageFond: 'ressources/bkg-rouge.svg',
          widthImageSuite: 1442,
          heightImageSuite: 600,
          couleurConnexion: '#ffffff',
          classImageFond: 'Repeat',
          lienLogo: 'https://www.projet-voltaire.fr/',
          styleLogo:
            'background-image: url(ressources/logo-projet-voltaire.png);width: 100px;height: 85px;',
          suiviLogo: 'https://www.index-education.com/swie/tl.php?ln=volt_logo',
          avecLienSuite: true,
          texteLienSuite:
            'Avec le Projet Voltaire et PRONOTE, découvrez comment améliorer votre expression orale.',
          lienSuite:
            'https://www.projet-voltaire.fr/pronote/?utm_source=pronote&utm_medium=referral_partner&utm_campaign=pronote_partenariat_pronote_2024',
          suiviLienSuite:
            'https://www.index-education.com/swie/tl.php?ln=volt24_26',
        },
        {
          //Semaine 10

          srcImage: 'ressources/superflu-11.svg',
          urlImageSuite: 'ressources/superflu-11-suite.svg',
          urlImageFond: 'ressources/bkg-bleu.svg',
          widthImageSuite: 1442,
          heightImageSuite: 600,
          couleurConnexion: '#ffffff',
          classImageFond: 'Repeat',
          lienLogo: 'https://www.projet-voltaire.fr/',
          styleLogo:
            'background-image: url(ressources/logo-projet-voltaire.png);width: 100px;height: 85px;',
          suiviLogo: 'https://www.index-education.com/swie/tl.php?ln=volt_logo',
          avecLienSuite: true,
          texteLienSuite:
            'Avec le Projet Voltaire et PRONOTE, découvrez comment améliorer votre expression orale.',
          lienSuite:
            'https://www.projet-voltaire.fr/pronote/?utm_source=pronote&utm_medium=referral_partner&utm_campaign=pronote_partenariat_pronote_2024',
          suiviLienSuite:
            'https://www.index-education.com/swie/tl.php?ln=volt24_27',
        },
        {
          //Semaine 11

          srcImage: 'ressources/anglicisme-10.svg',
          urlImageSuite: 'ressources/anglicisme-10-suite.svg',
          urlImageFond: 'ressources/bkg-orange.svg',
          widthImageSuite: 1442,
          heightImageSuite: 600,
          couleurConnexion: '#ffffff',
          classImageFond: 'Repeat',
          lienLogo: 'https://www.projet-voltaire.fr/',
          styleLogo:
            'background-image: url(ressources/logo-projet-voltaire.png);width: 100px;height: 85px;',
          suiviLogo: 'https://www.index-education.com/swie/tl.php?ln=volt_logo',
          avecLienSuite: true,
          texteLienSuite:
            'Avec le Projet Voltaire et PRONOTE, découvrez comment améliorer votre expression orale.',
          lienSuite:
            'https://www.projet-voltaire.fr/pronote/?utm_source=pronote&utm_medium=referral_partner&utm_campaign=pronote_partenariat_pronote_2024',
          suiviLienSuite:
            'https://www.index-education.com/swie/tl.php?ln=volt24_28',
        },
        {
          //Semaine 12

          srcImage: 'ressources/neutre.png',
          urlImageFond: 'ressources/neutre-bkg.png',
          couleurConnexion: '#ffffff',
          classImageFond: 'Repeat',
          avecLien: false,
          avecLienSuite: false,
        },
        {
          //Semaine 13

          srcImage: 'ressources/neutre.png',
          urlImageFond: 'ressources/neutre-bkg.png',
          couleurConnexion: '#ffffff',
          classImageFond: 'Repeat',
          avecLien: false,
          avecLienSuite: false,
        },
        {
          //Semaine 14

          srcImage: 'ressources/neutre.png',
          urlImageFond: 'ressources/neutre-bkg.png',
          couleurConnexion: '#ffffff',
          classImageFond: 'Repeat',
          avecLien: false,
          avecLienSuite: false,
        },
        {
          //Semaine 15

          srcImage: 'ressources/neutre.png',
          urlImageFond: 'ressources/neutre-bkg.png',
          couleurConnexion: '#ffffff',
          classImageFond: 'Repeat',
          avecLien: false,
          avecLienSuite: false,
        },
        {
          //Semaine 16

          srcImage: 'ressources/neutre.png',
          urlImageFond: 'ressources/neutre-bkg.png',
          couleurConnexion: '#ffffff',
          classImageFond: 'Repeat',
          avecLien: false,
          avecLienSuite: false,
        },
        {
          //Semaine 17

          srcImage: 'ressources/neutre.png',
          urlImageFond: 'ressources/neutre-bkg.png',
          couleurConnexion: '#ffffff',
          classImageFond: 'Repeat',
          avecLien: false,
          avecLienSuite: false,
        },
        {
          //Semaine 18

          srcImage: 'ressources/neutre.png',
          urlImageFond: 'ressources/neutre-bkg.png',
          couleurConnexion: '#ffffff',
          classImageFond: 'Repeat',
          avecLien: false,
          avecLienSuite: false,
        },
        {
          //Semaine 19

          srcImage: 'ressources/neutre.png',
          urlImageFond: 'ressources/neutre-bkg.png',
          couleurConnexion: '#ffffff',
          classImageFond: 'Repeat',
          avecLien: false,
          avecLienSuite: false,
        },
        {
          //Semaine 20

          srcImage: 'ressources/neutre.png',
          urlImageFond: 'ressources/neutre-bkg.png',
          couleurConnexion: '#ffffff',
          classImageFond: 'Repeat',
          avecLien: false,
          avecLienSuite: false,
        },
        {
          //Semaine 21

          srcImage: 'ressources/neutre.png',
          urlImageFond: 'ressources/neutre-bkg.png',
          couleurConnexion: '#ffffff',
          classImageFond: 'Repeat',
          avecLien: false,
          avecLienSuite: false,
        },
        {
          //Semaine 22

          srcImage: 'ressources/neutre.png',
          urlImageFond: 'ressources/neutre-bkg.png',
          couleurConnexion: '#ffffff',
          classImageFond: 'Repeat',
          avecLien: false,
          avecLienSuite: false,
        },
        {
          //Semaine 23

          srcImage: 'ressources/neutre.png',
          urlImageFond: 'ressources/neutre-bkg.png',
          couleurConnexion: '#ffffff',
          classImageFond: 'Repeat',
          avecLien: false,
          avecLienSuite: false,
        },
        {
          //Semaine 24

          srcImage: 'ressources/neutre.png',
          urlImageFond: 'ressources/neutre-bkg.png',
          couleurConnexion: '#ffffff',
          classImageFond: 'Repeat',
          avecLien: false,
          avecLienSuite: false,
        },
        {
          //Semaine 25

          srcImage: 'ressources/neutre.png',
          urlImageFond: 'ressources/neutre-bkg.png',
          couleurConnexion: '#ffffff',
          classImageFond: 'Repeat',
          avecLien: false,
          avecLienSuite: false,
        },
        {
          //Semaine 26

          srcImage: 'ressources/neutre.png',
          urlImageFond: 'ressources/neutre-bkg.png',
          couleurConnexion: '#ffffff',
          classImageFond: 'Repeat',
          avecLien: false,
          avecLienSuite: false,
        },
        {
          //Semaine 27

          srcImage: 'ressources/neutre.png',
          urlImageFond: 'ressources/neutre-bkg.png',
          couleurConnexion: '#ffffff',
          classImageFond: 'Repeat',
          avecLien: false,
          avecLienSuite: false,
        },
        {
          //Semaine 28

          srcImage: 'ressources/neutre.png',
          urlImageFond: 'ressources/neutre-bkg.png',
          couleurConnexion: '#ffffff',
          classImageFond: 'Repeat',
          avecLien: false,
          avecLienSuite: false,
        },
        {
          //Semaine 29

          srcImage: 'ressources/neutre.png',
          urlImageFond: 'ressources/neutre-bkg.png',
          couleurConnexion: '#ffffff',
          classImageFond: 'Repeat',
          avecLien: false,
          avecLienSuite: false,
        },
        {
          //Semaine 30

          srcImage: 'ressources/neutre.png',
          urlImageFond: 'ressources/neutre-bkg.png',
          couleurConnexion: '#ffffff',
          classImageFond: 'Repeat',
          avecLien: false,
          avecLienSuite: false,
        },
        {
          //Semaine 31

          srcImage: 'ressources/neutre.png',
          urlImageFond: 'ressources/neutre-bkg.png',
          couleurConnexion: '#ffffff',
          classImageFond: 'Repeat',
          avecLien: false,
          avecLienSuite: false,
        },
        {
          //Semaine 32

          srcImage: 'ressources/neutre.png',
          urlImageFond: 'ressources/neutre-bkg.png',
          couleurConnexion: '#ffffff',
          classImageFond: 'Repeat',
          avecLien: false,
          avecLienSuite: false,
        },
        {
          //Semaine 33

          srcImage: 'ressources/neutre.png',
          urlImageFond: 'ressources/neutre-bkg.png',
          couleurConnexion: '#ffffff',
          classImageFond: 'Repeat',
          avecLien: false,
          avecLienSuite: false,
        },
        {
          //Semaine 34

          srcImage: 'ressources/neutre.png',
          urlImageFond: 'ressources/neutre-bkg.png',
          couleurConnexion: '#ffffff',
          classImageFond: 'Repeat',
          avecLien: false,
          avecLienSuite: false,
        },
        {
          //Semaine 35

          srcImage: 'ressources/neutre.png',
          urlImageFond: 'ressources/neutre-bkg.png',
          couleurConnexion: '#ffffff',
          classImageFond: 'Repeat',
          avecLien: false,
          avecLienSuite: false,
        },
        {
          //Semaine 36

          srcImage: 'ressources/neutre.png',
          urlImageFond: 'ressources/neutre-bkg.png',
          couleurConnexion: '#ffffff',
          classImageFond: 'Repeat',
          avecLien: false,
          avecLienSuite: false,
        },
        {
          //Semaine 37

          srcImage: 'ressources/neutre.png',
          urlImageFond: 'ressources/neutre-bkg.png',
          couleurConnexion: '#ffffff',
          classImageFond: 'Repeat',
          avecLien: false,
          avecLienSuite: false,
        },
        {
          //Semaine 38

          srcImage: 'ressources/neutre.png',
          urlImageFond: 'ressources/neutre-bkg.png',
          couleurConnexion: '#ffffff',
          classImageFond: 'Repeat',
          avecLien: false,
          avecLienSuite: false,
        },
        {
          //Semaine 39

          srcImage: 'ressources/neutre.png',
          urlImageFond: 'ressources/neutre-bkg.png',
          couleurConnexion: '#ffffff',
          classImageFond: 'Repeat',
          avecLien: false,
          avecLienSuite: false,
        },
        {
          //Semaine 40

          srcImage: 'ressources/neutre.png',
          urlImageFond: 'ressources/neutre-bkg.png',
          couleurConnexion: '#ffffff',
          classImageFond: 'Repeat',
          avecLien: false,
          avecLienSuite: false,
        },
        {
          //Semaine 41

          srcImage: 'ressources/neutre.png',
          urlImageFond: 'ressources/neutre-bkg.png',
          couleurConnexion: '#ffffff',
          classImageFond: 'Repeat',
          avecLien: false,
          avecLienSuite: false,
        },
        {
          //Semaine 42

          srcImage: 'ressources/neutre.png',
          urlImageFond: 'ressources/neutre-bkg.png',
          couleurConnexion: '#ffffff',
          classImageFond: 'Repeat',
          avecLien: false,
          avecLienSuite: false,
        },
        {
          //Semaine 43

          srcImage: 'ressources/neutre.png',
          urlImageFond: 'ressources/neutre-bkg.png',
          couleurConnexion: '#ffffff',
          classImageFond: 'Repeat',
          avecLien: false,
          avecLienSuite: false,
        },
        {
          //Semaine 44

          srcImage: 'ressources/neutre.png',
          urlImageFond: 'ressources/neutre-bkg.png',
          couleurConnexion: '#ffffff',
          classImageFond: 'Repeat',
          avecLien: false,
          avecLienSuite: false,
        },
        {
          //Semaine 45

          srcImage: 'ressources/neutre.png',
          urlImageFond: 'ressources/neutre-bkg.png',
          couleurConnexion: '#ffffff',
          classImageFond: 'Repeat',
          avecLien: false,
          avecLienSuite: false,
        },
        {
          //Semaine 46

          srcImage: 'ressources/neutre.png',
          urlImageFond: 'ressources/neutre-bkg.png',
          couleurConnexion: '#ffffff',
          classImageFond: 'Repeat',
          avecLien: false,
          avecLienSuite: false,
        },
        {
          //Semaine 47

          srcImage: 'ressources/neutre.png',
          urlImageFond: 'ressources/neutre-bkg.png',
          couleurConnexion: '#ffffff',
          classImageFond: 'Repeat',
          avecLien: false,
          avecLienSuite: false,
        },
        {
          //Semaine 48

          srcImage: 'ressources/neutre.png',
          urlImageFond: 'ressources/neutre-bkg.png',
          couleurConnexion: '#ffffff',
          classImageFond: 'Repeat',
          avecLien: false,
          avecLienSuite: false,
        },
        {
          //Semaine 49

          srcImage: 'ressources/neutre.png',
          urlImageFond: 'ressources/neutre-bkg.png',
          couleurConnexion: '#ffffff',
          classImageFond: 'Repeat',
          avecLien: false,
          avecLienSuite: false,
        },
        {
          //Semaine 50

          srcImage: 'ressources/neutre.png',
          urlImageFond: 'ressources/neutre-bkg.png',
          couleurConnexion: '#ffffff',
          classImageFond: 'Repeat',
          avecLien: false,
          avecLienSuite: false,
        },
        {
          //Semaine 51

          srcImage: 'ressources/neutre.png',
          urlImageFond: 'ressources/neutre-bkg.png',
          couleurConnexion: '#ffffff',
          classImageFond: 'Repeat',
          avecLien: false,
          avecLienSuite: false,
        },
        {
          //Semaine 52

          srcImage: 'ressources/neutre.png',
          urlImageFond: 'ressources/neutre-bkg.png',
          couleurConnexion: '#ffffff',
          classImageFond: 'Repeat',
          avecLien: false,
          avecLienSuite: false,
        },
        {
          //Semaine 53

          srcImage: 'ressources/neutre.png',
          urlImageFond: 'ressources/neutre-bkg.png',
          couleurConnexion: '#ffffff',
          classImageFond: 'Repeat',
          avecLien: false,
          avecLienSuite: false,
        },
      ];

      ObjetImageConnexion.setDefinitionImages(lImages);
    };
  },
  fn: 'imagesconnexion.js',
});
