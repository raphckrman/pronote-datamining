IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.SIEHtmlImgViewer = void 0;
    require('./IEHtml.ImgViewer.scss');
    exports.SIEHtmlImgViewer = {
      ieImgviewer: 'ie-imgviewer',
      ieImgviewerPopup: 'ie-imgviewer-popup',
      EspaceIndex: 'EspaceIndex',
      active: 'active',
      loading: 'loading',
      EspaceMobileIndex: 'EspaceMobileIndex',
      zoomistContainer: 'zoomist-container',
      zoomistWrapper: 'zoomist-wrapper',
      zoomistImage: 'zoomist-image',
      conteneurImg: 'conteneur-img',
      BandeauViewer: 'BandeauViewer',
      TitreImage: 'TitreImage',
      btnCarrViewer: 'btn-carr-viewer',
      prec: 'prec',
      suiv: 'suiv',
      btnZoomViewer: 'btn-zoom-viewer',
      zoomIn: 'zoom-in',
      zoomOut: 'zoom-out',
      btnFermer: 'btn-fermer',
      VoileDeFondViewer: 'VoileDeFondViewer',
    };
  },
  fn: 'iehtml.imgviewer.css.js',
});