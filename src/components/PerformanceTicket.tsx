import React from 'react';

import { init, AuthType, Action } from '@thoughtspot/visual-embed-sdk';
import {
  LiveboardEmbed,
  useEmbedRef,
} from '@thoughtspot/visual-embed-sdk/lib/src/react';

console.log('outside code called ', 'Performance ticket with css');

init({
  thoughtSpotHost: 'https://dashboards-devfunc.calix.com/',
  authType: AuthType.None,
});

export default function PerformanceTicket() {
  const embedRef = useEmbedRef();
  return (
    <div>
      <h1>PerformanceTicket With Css</h1>
      <hr />
      <LiveboardEmbed
        frameParams={{
          height: 1200,
        }}
        ref={embedRef}
        liveboardId='a1cd9526-f25a-443b-8a35-75d0adc6e04f'
        liveboardV2
        customizations={{
          style: {
            customCSSUrl:
              'https://cdn.jsdelivr.net/gh/JayrajShah/GI-Static-Style-Public@main/style51_prospect.css',
          },
        }}
        hiddenActions={
          [
            'reportError',
            'save',
            'update',
            'saveUntitled',
            'saveAsView',
            'makeACopy',
            'editACopy',
            'embedDocument',
            'resetLayout',
            'subscription',
            'schedule-list',
            'share',
            'addFilter',
            'configureFilter',
            'addFormula',
            'searchOnTop',
            'spotIQAnalyze',
            'explainInsight',
            'spotIQFollow',
            'shareViz',
            'replaySearch',
            'showUnderlyingData',
            'download',
            'downloadAsPdf',
            'downloadAsCSV',
            'downloadAsXLSX',
            'downloadTrace',
            'exportTSL',
            'importTSL',
            'updateTSL',
            'editTSL',
            'present',
            'toggleSize',
            'edit',
            'editTitle',
            'delete',
            'ungroup',
            'describe',
            'relate',
            'customizeHeadlines',
            'pinboardInfo',
            'pinboardInfo',
            'sendFeedback',
            'downloadEmbraceQueries',
            'pin',
            'analysisInfo',
            'subscription',
            'explore',
            'context-menu-item-include',
            'context-menu-item-exclude',
            'context-menu-item-copy-to-clipboard',
            'context-menu-item-copy-and-edit',
            'context-menu-item-edit',
            'context-menu-item-edit-measure',
            'context-menu-item-separator',
            'DRILL',
            'requestAccess',
            'queryDetailsButtons',
            'onDeleteAnswer',
            'answerChartSwitcher',
            'addToFavorites',
            'editDetails',
            'createMonitor',
            'reportError',
            'download_pdf',
            'download_csv',
            'maximus',
          ] as Action[]
        }
      />
    </div>
  );
}
