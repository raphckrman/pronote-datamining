IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.SIEHtmlDraggableDroppable = void 0;
    require('./IEHtml.DraggableDroppable.scss');
    exports.SIEHtmlDraggableDroppable = {
      EspaceIndex: 'EspaceIndex',
      ieDraggableHandle: 'ie-draggable-handle',
      FantomeDraggable: 'FantomeDraggable',
      draggable: 'draggable',
      draggableLibelle: 'draggable-libelle',
      draggable_details: 'draggable_details',
      draggable_details_Deplacer: 'draggable_details_Deplacer',
      overlay: 'overlay',
    };
  },
  fn: 'iehtml.draggabledroppable.css.js',
});