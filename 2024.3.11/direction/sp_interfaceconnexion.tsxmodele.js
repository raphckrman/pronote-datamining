IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.getHtml = void 0;
    const getHtml = (aParams) => {
      const getHtmlSrcFondImage = () => {
        const lAvecLiens =
          aParams.options.avecLien &&
          aParams.options.lien &&
          aParams.options.texteLien &&
          aParams.options.suiviLien;
        const getHtmlImg = () =>
          IE.jsx.str('img', {
            id: aParams.id.image,
            onclick:
              aParams.options.urlImageSuite &&
              `$('#${aParams.id.imageSuite}').toggle();event.stopImmediatePropagation();return false;`,
            class: aParams.options.urlImageSuite && 'AvecMain',
            src: aParams.options.srcFondImage,
            alt: aParams.traductions.altImageDeFond,
            style: 'height:100%',
            'aria-hidden': 'true',
          });
        return IE.jsx.str(
          'div',
          {
            style:
              'position:absolute;left: 0px; bottom: 0px;top:50px;height:80%;z-index:1;',
          },
          lAvecLiens
            ? IE.jsx.str(
                IE.jsx.fragment,
                null,
                IE.jsx.str(
                  'a',
                  {
                    href: aParams.options.lien,
                    class: 'Texte12 LienLouvre',
                    onclick: `$.get('${aParams.options.suiviLien}');`,
                  },
                  getHtmlImg(),
                  IE.jsx.str(
                    'div',
                    {
                      style: `position: absolute;bottom:${aParams.options.bottomLien};left:${aParams.options.leftLien};color:${aParams.options.couleurLien};font-size:${aParams.options.tailleLien};`,
                    },
                    aParams.options.texteLien,
                  ),
                ),
              )
            : IE.jsx.str(IE.jsx.fragment, null, getHtmlImg()),
        );
      };
      return IE.jsx.str(
        IE.jsx.fragment,
        null,
        aParams.options.avecFichierFond &&
          IE.jsx.str('div', {
            class: ['ImageFond', aParams.options.classImageFond, 'full-size'],
            style: `background-color:${aParams.options.couleurFondBg};background-image:url('${aParams.options.dataImageFond}');position:absolute;z-index:-15;`,
          }),
        aParams.options.sansFichierFond &&
          IE.jsx.str('div', {
            class: ['ImageFond', aParams.options.classImageFond],
            style: `background-color:${aParams.options.couleurFondBg};${aParams.options.urlImageFond ? `background-image:url('${aParams.options.urlImageFond}');` : ''} position:absolute;z-index:-15;width:100%;height:100%;`,
          }),
        IE.jsx.str(
          'div',
          {
            id: aParams.id.wrapper,
            class: 'full-size',
            style: `box-sizing:border-box;text-align:center;position:absolute;min-height:520px; ${aParams.options.urlImageSuite ? 'min-width:520px;' : ''}`,
          },
          aParams.options.modeDemo &&
            IE.jsx.str(
              'div',
              {
                class: 'Texte16 Gras',
                style:
                  'position: absolute;width:650px;left:50px;background-color:rgba(255,255,255,0.9);top:100px;padding:20px;z-index:9999;border-radius:7px;',
              },
              aParams.traductions.AvertissementDemo,
            ),
          IE.jsx.str('div', {
            'ie-identite': 'getIdentiteBandeau',
            style: 'position:absolute; top:0; left:0; right:0; z-index:101;',
          }),
          IE.jsx.str('div', {
            class: 'InlineBlock AlignementMilieuVertical',
            style: 'height:100%;',
          }),
          aParams.options.srcFondImage && getHtmlSrcFondImage(),
          IE.jsx.str(
            'div',
            {
              id: aParams.id.wrapperConnect,
              class: [
                aParams.options.applicationNom,
                'wrapper-connect-conteneur',
              ],
            },
            IE.jsx.str('div', { class: 'logo-espace-edt bloc-elem' }),
            IE.jsx.str(
              'div',
              { class: 'illustration-container bloc-elem' },
              IE.jsx.str('div', { class: 'illus-rond' }),
              IE.jsx.str('div', { class: 'logo-pronote-primaire' }),
            ),
            IE.jsx.str(
              'div',
              {
                id: aParams.id.inscription,
                'ie-if': 'visibiliteInscription',
                class: 'bloc-elem',
                style: `width:440px;position:relative;margin-top:40px;${aParams.options.decalageLogin ? 'margin-left: 50%;' : ''} box-shadow:5px 5px 10px -8px black;z-index:1;`,
              },
              IE.jsx.str(
                'div',
                {
                  class: 'InlineBlock',
                  style: `position:absolute;top:0;left:0;right:0;bottom:0;background-color:${aParams.options.couleurConnexion};opacity: 0.7;z-index: -1;`,
                },
                '\u00A0',
              ),
              IE.jsx.str(
                'div',
                {
                  class: 'Texte14 Gras',
                  style: 'text-align:center;padding: 20px 0px;',
                },
                aParams.traductions.inscriptions.titre,
              ),
              IE.jsx.str(
                'div',
                { 'ie-display': 'visibiliteRedirigerParent' },
                IE.jsx.str(
                  'ie-bouton',
                  {
                    'ie-model': 'boutonRedirigerParent',
                    class: 'Texte12 AvecMain themeBoutonNeutre height-auto',
                    style:
                      'width:calc(100% - 20px);min-height:105px;text-align: left;border-radius:0;padding:20px;margin:0 10px 10px 10px;',
                  },
                  IE.jsx.str(
                    'div',
                    { style: 'display:flex;' },
                    IE.jsx.str('div', {
                      class: [
                        aParams.options.insriptions.classImageParent,
                        'img-inscription',
                      ],
                      style: 'align-self: center;',
                    }),
                    IE.jsx.str(
                      'div',
                      { style: 'align-self: center;' },
                      IE.jsx.str(
                        'div',
                        { class: 'Texte14 Gras' },
                        aParams.traductions.inscriptions.boutonEspaceParent
                          .titre,
                      ),
                      IE.jsx.str(
                        'div',
                        { style: 'padding-top:10px;' },
                        aParams.traductions.inscriptions.boutonEspaceParent
                          .info,
                      ),
                    ),
                  ),
                ),
              ),
              IE.jsx.str(
                'div',
                null,
                IE.jsx.str(
                  'ie-bouton',
                  {
                    'ie-model': 'boutonCreation',
                    class: 'Texte12 AvecMain themeBoutonNeutre height-auto',
                    style:
                      'width:calc(100% - 20px);min-height:105px;text-align: left;border-radius:0;padding:20px;margin:0px 10px 10px 10px;',
                  },
                  IE.jsx.str(
                    'div',
                    { style: 'display:flex;' },
                    IE.jsx.str('div', {
                      class: [
                        aParams.options.insriptions.classImageCreation,
                        'img-inscription',
                      ],
                      style: 'align-self: center;',
                    }),
                    IE.jsx.str(
                      'div',
                      { style: 'align-self: center;' },
                      IE.jsx.str(
                        'div',
                        { class: 'Texte14 Gras' },
                        aParams.traductions.inscriptions.boutonCreation.titre,
                      ),
                      IE.jsx.str(
                        'div',
                        { style: 'padding-top:10px;' },
                        aParams.traductions.inscriptions.boutonCreation.info,
                      ),
                    ),
                  ),
                ),
              ),
              IE.jsx.str(
                'div',
                null,
                IE.jsx.str(
                  'ie-bouton',
                  {
                    'ie-model': 'btnConnexionInscription',
                    class: 'Texte12 AvecMain themeBoutonNeutre height-auto',
                    style:
                      'width:calc(100% - 20px);min-height:105px;text-align: left;border-radius:0;padding:20px;margin:0px 10px 10px 10px;',
                  },
                  IE.jsx.str(
                    'div',
                    { style: 'display:flex;' },
                    IE.jsx.str('div', {
                      class: [
                        aParams.options.insriptions.classImageInscription,
                        'img-inscription',
                      ],
                      style: 'align-self: center;',
                    }),
                    IE.jsx.str(
                      'div',
                      { style: 'align-self: center;' },
                      IE.jsx.str(
                        'div',
                        { class: 'Texte14 Gras' },
                        aParams.traductions.inscriptions.boutonEspaceInscription
                          .titre,
                      ),
                      IE.jsx.str(
                        'div',
                        { style: 'padding-top:10px;' },
                        aParams.traductions.inscriptions.boutonEspaceInscription
                          .info,
                      ),
                    ),
                  ),
                ),
              ),
            ),
            ' ',
            IE.jsx.str(
              'article',
              {
                id: aParams.id.connect,
                'ie-if': 'visibiliteConnexion',
                role: 'main',
                class: 'bloc-elem bloc-connexion-wrapper',
                style: aParams.options.decalageLogin && 'margin-left: 50%;',
              },
              IE.jsx.str(
                'header',
                null,
                IE.jsx.str('h1', { tabindex: '0' }, aParams.options.nomEspace),
                IE.jsx.str('div', {
                  'aria-hidden': 'true',
                  class: aParams.options.classImageEspace,
                }),
              ),
              IE.jsx.str(
                'div',
                { class: 'loginBox', role: 'form' },
                IE.jsx.str(
                  'fieldset',
                  {
                    'ie-if': 'visibiliteModeConnexion',
                    class: 'connexion-wrapper field-contain',
                  },
                  IE.jsx.str(
                    'legend',
                    { class: 'sr-only' },
                    aParams.traductions.ariaDescrModeConnexion,
                  ),
                  IE.jsx.str(
                    'label',
                    null,
                    aParams.traductions.texteModeConnexion,
                  ),
                  IE.jsx.str(
                    'ie-radio',
                    { 'ie-model': 'choixConnexion(0)' },
                    aParams.traductions.modeConnexion1,
                  ),
                  IE.jsx.str(
                    'ie-radio',
                    { 'ie-model': 'choixConnexion(1)' },
                    aParams.traductions.modeConnexion2,
                  ),
                  IE.jsx.str('ie-btnicon', {
                    'ie-model': "getModel('texteExplicatifModeConnexion')",
                    class: 'icon_question bt-activable btnImage',
                  }),
                ),
                IE.jsx.str(
                  'p',
                  { class: 'text-end' },
                  aParams.traductions.texteChampsObligatoires,
                ),
                IE.jsx.str(
                  'div',
                  { class: 'form-wrapper' },
                  aParams.options.urlLogo &&
                    IE.jsx.str(
                      'div',
                      { class: 'img-contain' },
                      IE.jsx.str('img', {
                        src: aParams.options.urlLogo,
                        alt: '',
                        'aria-hidden': 'true',
                        style: 'max-width:100px;max-height:100px;',
                        onerror: '$(this).remove();',
                      }),
                    ),
                  IE.jsx.str(
                    'div',
                    {
                      class: 'fields-contain flex-end',
                      style: `color:${aParams.couleur.themeNeutre.sombre};`,
                    },
                    IE.jsx.str(
                      'div',
                      { class: 'input-field label-up' },
                      IE.jsx.str(
                        'label',
                        {
                          class: 'champ-requis',
                          for: aParams.id.identification,
                        },
                        aParams.traductions.texteIdentifiant,
                      ),
                      IE.jsx.str(
                        'div',
                        { class: 'flex-contain full-width' },
                        IE.jsx.str('input', {
                          id: aParams.id.identification,
                          'ie-model': 'login',
                          'ie-textbrut': true,
                          type: 'text',
                          title: aParams.traductions.texteTitleIdentifiant,
                          class: 'round-style fluid-bloc',
                          tabindex: '0',
                          placeholder:
                            aParams.traductions.textePlaceholderIdentifiant,
                          'aria-describedby': [
                            aParams.id.waiIdentifiant,
                            aParams.id.msgErreur,
                          ].join(' '),
                          'aria-required': 'true',
                          'aria-label':
                            aParams.traductions.textePlaceholderIdentifiant,
                          'ie-attr': 'getAttrLogin',
                        }),
                        IE.jsx.str(
                          'p',
                          {
                            id: aParams.id.waiIdentifiant,
                            tabindex: '-1',
                            'aria-hidden': 'true',
                            style: 'display:none;',
                          },
                          aParams.traductions.ariaDescrIdentifiant,
                        ),
                      ),
                    ),
                    IE.jsx.str(
                      'div',
                      { class: 'input-field label-up' },
                      IE.jsx.str(
                        'label',
                        { class: 'champ-requis', for: aParams.id.motDePasse },
                        aParams.traductions.texteMotdepasse,
                      ),
                      IE.jsx.str(
                        'div',
                        { class: 'flex-contain full-width' },
                        IE.jsx.str(
                          'div',
                          { class: 'as-input as-password' },
                          IE.jsx.str('input', {
                            id: aParams.id.motDePasse,
                            'ie-model': 'motDePasse',
                            type: 'password',
                            title: aParams.traductions.texteTitleMotdepasse,
                            tabindex: '0',
                            placeholder:
                              aParams.traductions.textePlaceholderMotdepasse,
                            'aria-describedby': [
                              aParams.id.waiMotDePasse,
                              aParams.id.msgErreur,
                            ].join(' '),
                            'aria-required': 'true',
                            'aria-label':
                              aParams.traductions.textePlaceholderMotdepasse,
                            'ie-attr': 'getAttrMDP',
                          }),
                          IE.jsx.str(
                            'p',
                            {
                              id: aParams.id.waiMotDePasse,
                              tabindex: '-1',
                              'aria-hidden': 'true',
                              style: 'display:none;',
                            },
                            aParams.traductions.ariaDescrMotdepasse,
                          ),
                          IE.jsx.str('ie-btnicon', {
                            class: 'icon_eye_open',
                            'ie-model': 'montrerMasquerMotDePasse()',
                            'ie-title': 'montrerMasquerMotDePasse.getTitle',
                          }),
                        ),
                      ),
                    ),
                  ),
                  ' ',
                ),
                ' ',
                IE.jsx.str('p', {
                  id: aParams.id.msgErreur,
                  class: 'message-erreur',
                  'aria-hidden': 'true',
                }),
                IE.jsx.str(
                  'ie-bouton',
                  {
                    id: aParams.id.btnConnexion,
                    title: aParams.traductions.titreBouton,
                    'ie-model': 'boutonValidation',
                    class: 'themeBoutonPrimaire',
                    style: 'width:100%',
                    tabindex: '0',
                  },
                  aParams.traductions.texteBouton,
                ),
                IE.jsx.str(
                  'div',
                  { 'ie-display': 'visibiliteRecupIdMdp', class: 'recup-mdp' },
                  IE.jsx.str(
                    'button',
                    {
                      class: 'libelle',
                      style: `color:${aParams.couleur.texte}`,
                      onclick: `${aParams.id.thisNom}.evenementRecupIdMDP();`,
                      tabindex: '0',
                      'aria-haspopup': 'dialog',
                      'aria-describedby': aParams.id.waiRecupIdMdp,
                    },
                    aParams.traductions.texteRecupIdMdp,
                  ),
                  IE.jsx.str(
                    'label',
                    {
                      id: aParams.id.waiRecupIdMdp,
                      tabindex: '-1',
                      'aria-hidden': 'true',
                      style: 'display:none;',
                    },
                    aParams.traductions.ariaDescrRecupIdMdp,
                  ),
                  IE.jsx.str('ie-btnicon', {
                    'ie-model': "getModel('texteExplicatifRecupIdMdp')",
                    class: 'icon_question bt-activable btnImage',
                  }),
                ),
              ),
              ' ',
            ),
            ' ',
            aParams.options.mentionsPagesPubliques &&
              aParams.options.mentionsPagesPubliques.lien &&
              IE.jsx.str(
                'div',
                {
                  style:
                    'position:absolute; bottom:1rem; z-index:101; left:50%;',
                },
                aParams.options.mentionsPagesPubliques.lien,
              ),
          ),
          ' ',
          IE.jsx.str('div', {
            'ie-identite': 'getIdentiteFooter',
            style: 'position:fixed; bottom:0; left:0; right:0; z-index:101;',
          }),
          aParams.options.urlImageFond &&
            aParams.options.heightImageSuite &&
            aParams.options.widthImageSuite &&
            aParams.options.urlImageSuite &&
            IE.jsx.str(
              'div',
              {
                id: aParams.id.imageSuite,
                onclick: `$('#${aParams.id.imageSuite}').toggle();`,
                class: 'AvecMain full-width',
                style: `display: none;position:absolute;height:calc(100% - 50px);min-height:${aParams.options.heightImageSuite}px;padding-bottom:50px;max-width:100vw;background-image: url(${aParams.options.urlImageFond});top:30px;left:0;right:0;z-index:1;`,
              },
              IE.jsx.str('div', {
                class: 'full-size',
                style: `max-height:calc(100% - 47px); background-position:center center;background-repeat: no-repeat;background-image: url(${aParams.options.urlImageSuite});background-size: contain;`,
              }),
              IE.jsx.str(
                'div',
                {
                  class: 'flex-contain flex-center p-right-xl',
                  style: 'position:absolute;right:30px;max-width:60rem',
                },
                aParams.options.avecLienSuite &&
                  aParams.options.lienSuite &&
                  aParams.options.texteLienSuite &&
                  aParams.options.suiviLienSuite &&
                  IE.jsx.str(
                    'a',
                    {
                      href: aParams.options.lienSuite,
                      class:
                        'Texte12 LienLouvre fluid-bloc m-right-l text-right',
                      onclick: `$.get('${aParams.options.suiviLienSuite}');`,
                    },
                    aParams.options.texteLienSuite,
                  ),
                aParams.options.lienLogo &&
                  aParams.options.styleLogo &&
                  aParams.options.suiviLogo &&
                  IE.jsx.str('a', {
                    href: aParams.options.lienLogo,
                    class: 'fix-bloc m-right-big',
                    style: aParams.options.styleLogo,
                    onclick: `$.get('${aParams.options.suiviLogo}');`,
                    'aria-label': aParams.traductions.ariaDescrLienPartenaire,
                  }),
              ),
            ),
        ),
        ' ',
      );
    };
    exports.getHtml = getHtml;
  },
  fn: 'interfaceconnexion.tsxmodele.js',
});