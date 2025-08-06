IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.TinyInit = exports.ObjetTinyInit = void 0;
    const MethodesObjet_1 = require('MethodesObjet');
    const ObjetHtml_1 = require('ObjetHtml');
    const ObjetPosition_1 = require('ObjetPosition');
    const DeferLoadingScript_1 = require('DeferLoadingScript');
    const ObjetTraduction_1 = require('ObjetTraduction');
    const ObjetChaine_1 = require('ObjetChaine');
    const ThemesCouleurs_1 = require('ThemesCouleurs');
    require('TinyIndex.css');
    const AccessApp_1 = require('AccessApp');
    class ObjetTinyInit {
      constructor() {
        this.optionsInitTiny = {
          avecMessageNettoyageHtml: true,
          optionsDOMPurify: null,
        };
        this.plugins = [
          'autolink',
          'charmap',
          'directionality',
          'fullscreen',
          'hr',
          'insertdatetime',
          'link',
          'lists',
          'media',
          'noneditable',
          'nonbreaking',
          'pagebreak',
          'paste',
          'preview',
          'print',
          'save',
          'searchreplace',
          'template',
          'visualchars',
        ];
        this.toolbar_std_1 = [
          'bold',
          'italic',
          'underline',
          '|',
          'alignleft',
          'aligncenter',
          'alignright',
          'alignjustify',
          '|',
          'fontselect',
          'fontsizeselect',
          '|',
          'cut',
          'copy',
          'paste',
          'pastetext',
        ];
        this.toolbar_std_2 = [
          'hr',
          'removeformat',
          '|',
          'bullist',
          'numlist',
          '|',
          'indent',
          'outdent',
          '|',
          'undo',
          'redo',
          '|',
          'forecolor',
          'backcolor',
          '|',
          'subscript',
          'superscript',
          '|',
          'charmap',
          '|',
          'link',
          'unlink',
        ];
        this.toolbar_qcm_1 = [
          'bold',
          'italic',
          'underline',
          '|',
          'alignleft',
          'aligncenter',
          'alignright',
          'alignjustify',
          '|',
          'fontselect',
          'fontsizeselect',
          '|',
          'forecolor',
          'backcolor',
          '|',
          'subscript',
          'superscript',
          '|',
          'charmap',
          '|',
          'bullist',
          'numlist',
        ];
        this.toolbar_mail_1 = [
          'bold',
          'italic',
          'underline',
          '|',
          'alignleft',
          'aligncenter',
          'alignright',
          'alignjustify',
          '|',
          'fontselect',
          'fontsizeselect',
          '|',
          'forecolor',
          'backcolor',
          '|',
          'link',
          'unlink',
          '|',
          'removeformat',
        ];
        this.fontFamily = 'Arial';
        this.fontSize = 13;
        this.fontSizeQCM = 13;
        this.genreMessage = { imageInterdite: 0 };
        this.globaleTinymce = null;
      }
      setOptionsInitTiny(aOptions) {
        Object.assign(this.optionsInitTiny, aOptions);
        return this;
      }
      async init(aParam) {
        await this._loadTiny();
        if (!aParam.id) {
          throw new Error();
        }
        const lGlobaleTinymce = this.globaleTinymce;
        if (!lGlobaleTinymce) {
          throw new Error();
        }
        let lJDOM = $('#' + aParam.id.escapeJQ());
        if (lJDOM.length === 0) {
          throw new Error();
        }
        lJDOM.on('destroyed', { instance: this }, (aEvent) => {
          aEvent.data.instance._detruireInstanceTiny(
            lGlobaleTinymce,
            aParam.id,
          );
        });
        this._detruireInstanceTiny(lGlobaleTinymce, aParam.id);
        let lParamDef = this.getParametresInitParDefaut(aParam);
        if (aParam.toolbar === undefined) {
          delete aParam.toolbar;
        }
        if (aParam.plugins) {
          delete aParam.plugins;
        }
        let lParam = Object.assign(lParamDef, aParam);
        lParam.selector = '#' + lParam.id.escapeJQ();
        lParam.setup = (aEditor) => {
          if (
            aParam.setup &&
            MethodesObjet_1.MethodesObjet.isFunction(aParam.setup)
          ) {
            aParam.setup(aEditor);
          }
          if (
            aEditor &&
            (!aEditor.settings || !aEditor.settings.avecImageDataUri)
          ) {
            aEditor.on(
              'GetContent',
              this.supprimerImageEtVide.bind(this, true),
            );
            aEditor.on(
              'BeforeSetContent',
              this.supprimerImageEtVide.bind(this, false),
            );
          }
          if (this.optionsInitTiny.setupParDefaut) {
            this.optionsInitTiny.setupParDefaut(aEditor);
          }
        };
        if (lParam.clientLourd) {
          lGlobaleTinymce.Env.clientLourd = true;
        }
        if (lParam.filePickerOpener && lParam.filePickerTypes) {
          lParam.file_picker_types = lParam.filePickerTypes;
          lParam.file_picker_callback = function (aCallback, aValue, aMeta) {
            $('.tox-tinymce-aux').hide();
            this.callbackFilePicker = aCallback;
            lParam.filePickerOpener({ value: aValue, meta: aMeta });
          };
          lParam.filePickerReturn = function (aUrl) {
            const lEditor = lGlobaleTinymce.get(this.id);
            if (
              aUrl &&
              lEditor.callbackFilePicker &&
              MethodesObjet_1.MethodesObjet.isFunction(
                lEditor.callbackFilePicker,
              )
            ) {
              lEditor.callbackFilePicker(aUrl);
            }
            lEditor.callbackFilePicker = null;
            $('.tox-tinymce-aux').show();
          };
        }
        await lGlobaleTinymce.init(lParam);
        if (lParam.ariaLabel) {
          $(`#${lParam.id.escapeJQ()}`)
            .siblings('.tox-tinymce')
            .find('iframe.tox-edit-area__iframe')
            .attr('title', lParam.ariaLabel)
            .attr('aria-label', lParam.ariaLabel);
        }
        return lGlobaleTinymce.get(lParam.id);
      }
      get(aId) {
        if (aId && this.globaleTinymce && this.globaleTinymce.get) {
          return this.globaleTinymce.get(aId);
        }
        return null;
      }
      getParametresInitParDefaut(aParam) {
        var _a;
        const lDarkMode =
          (_a =
            ThemesCouleurs_1.ThemesCouleurs === null ||
            ThemesCouleurs_1.ThemesCouleurs === void 0
              ? void 0
              : ThemesCouleurs_1.ThemesCouleurs.getDarkMode) === null ||
          _a === void 0
            ? void 0
            : _a.call(ThemesCouleurs_1.ThemesCouleurs);
        let lOptions = {
          cache_suffix: '?v=5.10.9.index1',
          toolbar_mode: 'wrap',
          mobile: { toolbar_mode: 'sliding' },
          clientLourd: false,
          editeurEquation: false,
          ariaLabel: 'Zone de texte riche',
          plugins: this.getPlugins(aParam),
          branding: false,
          elementpath: false,
          height: 100,
          min_height: 100,
          max_height: 100,
          skin_url: lDarkMode ? 'skins/ui/oxide-dark' : 'skins/ui/oxide',
          content_css: lDarkMode ? 'dark' : null,
          theme_url: 'themes/silver/theme.min.js',
          menubar: false,
          resize: false,
          statusbar: false,
          toolbar: this.getToolbar(aParam),
          contextmenu:
            !aParam.clientLourd || aParam.toolbar === false
              ? ''
              : 'spellchecker | cut copy paste | link',
          content_style:
            `html {\n  height:100%;\n  ${lDarkMode ? `` : `background-color: white;\n  color: black;`}\n}\nbody {min-height:calc(100% - 10px);}\n.mce-content-body {\n  margin:0px;\n  padding: 5px !important;\n}` +
            '.mce-content-body[data-mce-placeholder]::before {' +
            `color: ${lDarkMode ? '#f6f6f6' : '#6b6e77'} !important;` +
            'opacity: 0.9;' +
            'font-style: italic;' +
            'font-weight: 500;' +
            'content: attr(data-mce-placeholder);' +
            'position: absolute;' +
            'left:5px !important;' +
            `font-size:${IE.estMobile ? 14 : 13}px;` +
            '}',
          force_hex_style_colors: true,
          forced_root_block: 'div',
          forced_root_block_attrs: {
            style:
              'font-family:' +
              (aParam.fontFamily ? aParam.fontFamily : this.fontFamily) +
              ';font-size:' +
              (aParam.fontSize
                ? aParam.fontSize
                : aParam.modeQCM
                  ? this.fontSizeQCM
                  : this.fontSize) +
              'px;',
          },
          font_formats:
            'Andale Mono=andale mono,times;' +
            'Arial=arial,helvetica,sans-serif;' +
            'Arial Black=arial black,avant garde;' +
            'Book Antiqua=book antiqua,palatino;' +
            'Comic Sans MS=comic sans ms,sans-serif;' +
            'Courier New=courier new,courier;' +
            'Georgia=georgia,palatino;' +
            'Helvetica=helvetica;' +
            'Impact=impact,chicago;' +
            'Symbol=symbol;' +
            'Tahoma=tahoma,arial,helvetica,sans-serif;' +
            'Terminal=terminal,monaco;' +
            'Times New Roman=times new roman,times;' +
            'Trebuchet MS=trebuchet ms,geneva;' +
            'Verdana=verdana,geneva;' +
            'Webdings=webdings;' +
            'Wingdings=wingdings,zapf dingbats',
          fontsize_formats:
            '5px 6px 7px 8px 9px 10px 11px 12px 13px 14px 16px 18px 20px 24px',
          browser_spellcheck: !aParam.clientLourd,
          language: this._getLanguage(aParam.langueIndex),
          paste_data_image: false,
          paste_as_text: false,
          paste_enable_default_filters: true,
          paste_filter_drop: true,
          paste_preprocess: function (plugin, args) {
            args.content = args.content.replace(/<\/?pre[^>]*>/gi, '');
          },
          paste_retain_style_properties:
            'padding,margin,margin-left,font-size,font-weight,font-family,font-style,font-variant,border-width,border-style,border,border-color,color,background,background-color,text-align,align,textformat,text-decoration,mso-border-alt,mso-highlight,b,u,i,ul,ol,li',
          spellchecker_languages:
            'anglais=en_US,français=fr_FR,italien=it,espagnol=es',
          spellchecker_rpc_url: 'index_action:DictionnaireIndex',
          spellchecker_wordchar_pattern:
            /[^\s!"#$%&()*+,-.\/:;<=>?@[\]^_{|}`§©«®±¶·¸»¼½¾¿×÷¤”“„    ']+/g,
          assumeExternalTargets: true,
          default_link_target: '_blank',
          target_list: false,
          anchor_bottom: '',
          anchor_top: '',
        };
        if (aParam.placeholder) {
          lOptions.placeholder = aParam.placeholder;
        }
        if (!aParam.clientLourd && !IE.estMobile) {
          lOptions.help_tabs = ['shortcuts'];
        }
        if (IE.DOMPurifyDisabled) {
          lOptions.valid_elements =
            '@[id|class|style|title|dir<ltr?rtl|lang|xml::lang],' +
            'a[rel|rev|charset|hreflang|tabindex|accesskey|type|' +
            'name|href|target|title|class],strong/b,em/i,strike,u,' +
            '#p,-ol[type|compact],-ul[type|compact],-li,br,img[longdesc|usemap|' +
            'src|border|alt=|title|hspace|vspace|width|height|align],-sub,-sup,' +
            '-blockquote,-table[border=0|cellspacing|cellpadding|width|frame|rules|' +
            'height|align|summary|bgcolor|background|bordercolor],-tr[rowspan|width|' +
            'height|align|valign|bgcolor|background|bordercolor],tbody,thead,tfoot,' +
            '#td[colspan|rowspan|width|height|align|valign|bgcolor|background|bordercolor' +
            '|scope],#th[colspan|rowspan|width|height|align|valign|scope],caption,#div,' +
            '-span,-code,address,-h1,-h2,-h3,-h4,-h5,-h6,hr[size|noshade],-font[face' +
            '|size|color],dd,dl,dt,cite,abbr,acronym,del[datetime|cite],ins[datetime|cite],' +
            'object[classid|width|height|codebase|*],param[name|value|_value],embed[type|width' +
            '|height|src|*],map[name],area[shape|coords|href|alt|target],bdo,' +
            'button,col[align|char|charoff|span|valign|width],colgroup[align|char|charoff|span|' +
            'valign|width],dfn,fieldset,kbd,label[for],legend,noscript,q[cite],samp,small,tt,var,big';
        }
        return lOptions;
      }
      async onLoadEnd(aIdTiny) {
        let lId;
        let lTiny = null;
        if (typeof aIdTiny === 'string') {
          lTiny = this.get(aIdTiny);
          lId = aIdTiny;
        } else if (aIdTiny && aIdTiny.id) {
          lId = aIdTiny.id;
          lTiny = aIdTiny;
        }
        const lParams = { avecConteneurTiny: false, timeout: null, nb: 0 };
        const _onLoadTiny = async () => {
          lParams.timeout = null;
          if (!lParams.avecConteneurTiny) {
            const lJConteneurTiny = $(`#${lId.escapeJQ()}`);
            if (lJConteneurTiny.length > 1) {
              return { ok: false };
            }
            if (lJConteneurTiny.length === 1) {
              lParams.avecConteneurTiny = true;
              lJConteneurTiny.on('destroyed.onload', () => {
                if (lParams.timeout) {
                  clearTimeout(lParams.timeout);
                }
              });
            }
          }
          if (!lTiny) {
            lTiny = this.get(lId);
          }
          if (lTiny && lTiny.initialized) {
            return { ok: true, tiny: lTiny };
          }
          if (lParams.nb > 1000) {
            throw new Error();
          }
          await new Promise((aResolve) => {
            lParams.timeout = setTimeout(() => {
              lParams.nb += 1;
              aResolve();
            }, 10);
          });
          return await _onLoadTiny();
        };
        return await _onLoadTiny();
      }
      async setReadonly(aIdTiny, aReadonly) {
        const lResult = await this.onLoadEnd(aIdTiny);
        if (lResult.tiny) {
          lResult.tiny.mode.set(aReadonly ? 'readonly' : 'design');
        }
      }
      getPlugins(aParam) {
        return this.plugins
          .concat(
            aParam && aParam.plugins && aParam.plugins.length
              ? aParam.plugins
              : [],
            aParam && aParam.editeurEquation === true ? ['iEMathquill'] : [],
            aParam &&
              !!aParam.filePickerOpener &&
              aParam.filePickerTypes.indexOf('image') > -1
              ? ['image']
              : [],
            aParam && aParam.clientLourd === true ? ['spellchecker'] : [],
            aParam && aParam.clientLourd !== true && !IE.estMobile
              ? ['help']
              : [],
          )
          .join(' ');
      }
      getToolbar(aParam) {
        let lToolBar = [];
        if (aParam.toolbar === false) {
          return false;
        }
        if (aParam.buttons && aParam.buttons.length) {
          lToolBar = aParam.buttons.concat(lToolBar);
        }
        if (aParam.modeQCM) {
          lToolBar = lToolBar.concat(this.toolbar_qcm_1);
        } else if (aParam.modeMail) {
          lToolBar = lToolBar.concat(this.toolbar_mail_1);
        } else {
          lToolBar = lToolBar.concat(this.toolbar_std_1);
          lToolBar = lToolBar.concat('|', this.toolbar_std_2);
        }
        if (aParam.editeurEquation === true) {
          lToolBar.push('|ieMathquill');
        }
        if (!!aParam.filePickerOpener && aParam.filePickerTypes) {
          if (aParam.filePickerTypes.indexOf('image') > -1) {
            lToolBar.push('|image');
          }
        }
        if (aParam.clientLourd === true) {
          lToolBar.push('|spellchecker');
        } else if (!IE.estMobile) {
          lToolBar.push('|help');
        }
        return lToolBar.join(' ');
      }
      setHeight(aEditorID, aHeight, aNbrToolbars) {
        ObjetPosition_1.GPosition.setHeight(
          aEditorID + '_ifr',
          aHeight - aNbrToolbars * 28,
        );
        ObjetPosition_1.GPosition.setHeight(aEditorID + '_tbl', aHeight);
      }
      estContenuVide(aHtml) {
        function _estNoeudBR(aNode) {
          return (
            ObjetHtml_1.GHtml.estElement(aNode) &&
            ObjetHtml_1.GHtml.estNoeudDeType(aNode, 'br') &&
            (!aNode.childNodes || aNode.childNodes.length === 0)
          );
        }
        function _estNoeudTexteVide(aNode) {
          return (
            ObjetHtml_1.GHtml.estTextNode(aNode) &&
            aNode.nodeValue &&
            aNode.nodeValue.trim &&
            aNode.nodeValue.trim() === ''
          );
        }
        if (!aHtml) {
          return true;
        }
        let lDOM = ObjetHtml_1.GHtml.htmlToDOM(aHtml);
        let lChaines = [];
        if (!MethodesObjet_1.MethodesObjet.isArray(lDOM)) {
          lChaines = ObjetHtml_1.GHtml.getTextesDeNode(lDOM);
        } else {
          for (let i = 0; i < lDOM.length; i++) {
            lChaines = lChaines.concat(
              ObjetHtml_1.GHtml.getTextesDeNode(lDOM[i]),
            );
          }
        }
        if (lChaines.join('').trim() !== '') {
          return false;
        }
        if (_estNoeudBR(lDOM)) {
          return true;
        }
        if (_estNoeudTexteVide(lDOM)) {
          return true;
        }
        if (
          lDOM &&
          ObjetHtml_1.GHtml.estElement(lDOM) &&
          ObjetHtml_1.GHtml.estNoeudDeType(lDOM, 'div') &&
          lDOM.childNodes &&
          lDOM.childNodes.length === 1
        ) {
          let lFils = lDOM.childNodes[0];
          if (_estNoeudBR(lFils)) {
            return true;
          }
          if (_estNoeudTexteVide(lFils)) {
            return true;
          }
        }
        return false;
      }
      supprimerImageEtVide(aSurGetContent, ed) {
        const lContent = $('<div>' + ed.content + '</div>');
        const lAvecNettoyage = ObjetHtml_1.GHtml.nettoyerEditeurRiche(
          lContent,
          ed.target.settings.editeurEquationMaxFileSize,
        );
        if (
          !aSurGetContent &&
          lAvecNettoyage &&
          this.optionsInitTiny.avecMessageNettoyageHtml
        ) {
          this.optionsInitTiny.afficherMessage(
            this.genreMessage.imageInterdite,
          );
        }
        ed.content = lContent.html();
        if (!ed.selection) {
          if (
            lContent.text().trim() === '' &&
            lContent.find('img').length === 0
          ) {
            ed.content = '';
          }
        }
        const lUnSafeHtml = ed.content;
        if (lUnSafeHtml) {
          if (
            !aSurGetContent &&
            lContent.find('#mce_marker[data-mce-type="bookmark"]').length > 0
          ) {
            return;
          }
          const lSafeHtml = ObjetChaine_1.GChaine.htmlDOMPurify(
            lUnSafeHtml,
            this.optionsInitTiny.optionsDOMPurify,
          );
          if (lUnSafeHtml !== lSafeHtml) {
            ed.content = lSafeHtml;
          }
        }
      }
      async _loadTiny() {
        if (this.globaleTinymce || global.tinymce) {
          this._setupTinymce();
          return;
        }
        await DeferLoadingScript_1.deferLoadingScript.loadAsync(['tiny']);
        if (!global.tinymce) {
          throw new Error();
        }
        this._setupTinymce();
      }
      _setupTinymce() {
        if (!this.globaleTinymce) {
          this.globaleTinymce = global.tinymce;
          if (this.globaleTinymce) {
            this.globaleTinymce.suffix = '.min';
          }
        }
      }
      _detruireInstanceTiny(aTinymce, aID) {
        const lInstanceTiny = aTinymce.get(aID);
        if (lInstanceTiny) {
          if (!lInstanceTiny.initialized) {
            IE.log.addLog(
              'tiny id ' +
                aID +
                " doit etre detruit, mais n'est pas initialized",
            );
          }
          try {
            lInstanceTiny._enCoursDestruction = true;
            $('#' + aID.escapeJQ()).focus();
            try {
              aTinymce.get(aID).destroy();
            } catch (e) {}
            $('#' + aID.escapeJQ()).focus();
          } finally {
            delete lInstanceTiny._enCoursDestruction;
          }
        }
      }
      _getLanguage(aLangueIndex) {
        var _a, _b, _c;
        const lLangue =
          aLangueIndex ||
          ((_c =
            (_b =
              (_a = (0, AccessApp_1.getApp)()) === null || _a === void 0
                ? void 0
                : _a.getObjetParametres) === null || _b === void 0
              ? void 0
              : _b.call(_a)) === null || _c === void 0
            ? void 0
            : _c.langue) ||
          'fr';
        switch (lLangue) {
          case 'en':
          case 'it':
          case 'nl':
          case 'es':
            return lLangue;
        }
        return 'fr_FR';
      }
    }
    exports.ObjetTinyInit = ObjetTinyInit;
    exports.TinyInit = new ObjetTinyInit();
  },
  fn: 'tinyinit.js',
});