// LiveboardEmbed

<LiveboardEmbed
  frameParams={{ height: '87vh' }}
  className='liveboard-content'
  ref={embedRef}
  disabledActionReason={
    nonDCR ? DISABLED_ACTION_REASON : DISABLED_ACTION_REASON_DCR
  }
  disabledActions={nonDCR ? DisabledActionsLiveBoard : DisabledActions}
  hiddenActions={
    retailMedia ? HiddenActionsRMLiveboard : HiddenActionsLiveboard
  }
  poweredFooterHidden={false}
  onRouteChange={(route) => {
    if (route?.data.currentPath.includes(`/embed/viz/${liveboardId}`))
      window.dispatchEvent(new Event('liveboardPreview-showPanel'));
    else window.dispatchEvent(new Event('liveboardPreview-hidePanel'));
  }}
  //TODO: Move this runtime filters to conf file. ( Moving this to V2 )
  runtimeFilters={[
    {
      columnName: 'Eventdate',
      operator: 'BW_INC',
      values: [startDate, endDate],
    },
    {
      columnName: 'Campaignidx',
      operator: 'IN',
      values: [campaignNames[0]?.value],
    },
  ]}
  liveboardId={liveboardId}
  onInit={logEvent(EmbedEvent.Init)}
  onLoad={() => {
    window.dispatchEvent(new Event('liveboardLoaded'));
    window.dispatchEvent(new Event('formLoaded'));
  }}
  onAuthExpire={() => window.dispatchEvent(new Event('liveboardLoaded'))}
  onAuthFailure={() => window.dispatchEvent(new Event('liveboardLoaded'))}
  onError={() => window.dispatchEvent(new Event('liveboardLoaded'))}
  onCustomAction={(payload) => {
    if (retailMedia) return;
    const data = payload.data;
    //TEST : Added to check proper payload to pass
    console.log(
      'payload data',
      data,
      'runtimefilter',
      runtimeFiltersRef.current
    );
    const customActionId = CUSTOM_ACTION_ID;
    if (payload.id === customActionId || payload.data.id === customActionId) {
      window.dispatchEvent(new Event('liveboardPreview')); //Event is passed to collapsible drawer to open preview panel.
      const payloadData = getTagForPreview(data, runtimeFiltersRef.current);
      getPreviewTag(applicationServer, payloadData)
        .then((response) => getPreviewDetails(response, 'liveboardPreview'))
        .catch((error) => handlePreviewError(error, 'liveboardPreview'));
    }
  }}
  onLiveboardRendered={logEvent}
  onDrilldown={logEvent}
  customizations={Customizations({
    ...reportingIQStyling,
    ...whiteLabelingStyles,
  })}
/>;

//Customs CSS

export function Customizations(styles) {
  return {
    style: {
      customCSS: {
        variables: {
          '--ts-var-button--primary-background': styles['rm_primary_color'],
          '--ts-var-button--primary--hover-background':
            styles['rm_primary_hover_color'],
          '--ts-var-button--primary-color':
            styles['rm_primary_button_text_color'],
          '--ts-var-button--secondary-background': styles['rm_secondary_color'],
          '--ts-var-button--secondary-color':
            styles['rm_primary_button_text_color'],
          '--ts-var-viz-title-color': styles['rm_header_font_color'],
          '--ts-var-viz-title-font-family': styles['rm_font_name'],
          '--ts-var-viz-background': styles['rm_panel_color'],
          '--ts-var-root-background': styles['rm_background_color'],
          '--ts-var-root-font-family': styles['rm_font_name'],
          '--ts-var-root-color': styles['rm_font_color'],
        },
        rules_UNSTABLE: {
          div: {
            'font-size': '14px !important',
          },
          span: {
            'font-size': '14px !important',
          },

          // Saved Liveboard Page Custom CSS
          '.top-list-filters .bk-filter-item .bk-top-menu-filters li.bk-selected':
            {
              color: styles['rm_primary_color'],
            },
          '.top-list-filters .bk-filter-item .bk-top-menu-filters li:focus, .top-list-filters .bk-filter-item .bk-top-menu-filters li:hover':
            {
              color: styles['rm_primary_hover_color'],
            },
          '.top-list-filters .bk-filter-item .bk-top-menu-filters li.bk-selected::after':
            {
              'background-color': styles['rm_primary_color'],
            },
          '.bk-actionable-list .bk-actionable-list-content .bk-list-content .bk-list-content-li.bk-row-selected-bg':
            {
              'background-color': styles['rm_disabled_color'],
            },
          '.bk-actionable-list .bk-actionable-list-content .bk-list-content .bk-list-content-li:hover:not(.bk-row-selected-bg)':
            {
              'background-color': styles['rm_disabled_color'],
            },

          // Monitor Page Custom CSS
          '.segment-control-module__segmentedControl .segment-control-module__segmentedItem.segment-control-module__selected .segment-control-module__innerText':
            {
              color: styles['rm_primary_color'],
            },

          // Liveboard Page Custom CSS
          '.pinboard-tab-module__tabNameContainer .pinboard-tab-module__tabNameEditor.pinboard-tab-module__tabHighlightOnSelected':
            {
              color: styles['rm_primary_color'],
            },
          '.pinboard-tab-module__tabContainer:hover': {
            color: styles['rm_primary_hover_color'],
          },
          '.pinboard-tab-module__tabContainer.pinboard-tab-module__tabSelected':
            {
              'border-bottom-color': styles['rm_primary_color'],
            },

          // Standard Liveboard and Saved Liveboard Page Tab Panel Dropdown Custom CSS
          '.pinboard-tab-panel-module__dropdownHeader p': {
            color: styles['rm_primary_color'],
          },
          '.pinboard-tab-panel-module__dropdownHeader:hover p': {
            color: styles['rm_primary_hover_color'],
          },
          '.pinboard-tab-panel-module__dropdownCaret svg': {
            fill: `${styles['rm_primary_color']} !important`,
          },
          '.pinboard-tab-panel-module__tabPanelDropdown': {
            'border-bottom': `0.1428571429rem solid ${styles['rm_primary_color']}`,
          },
          '.menu-module__item.menu-module__itemActive>.menu-module__itemInfo>.menu-module__itemText p':
            {
              color: styles['rm_primary_color'],
            },
          '.menu-module__item.menu-module__itemActive>.menu-module__itemInfo': {
            'background-color': styles['rm_disabled_color'],
          },

          // Hide the KPI chart and liveboard Link
          '[data-testid="detail-panel-liveboard-title"]': {
            display: 'none !important',
          },
          '[data-testid="detail-panel-metric-title"]': {
            display: 'none !important',
          },
        },
      },
    },
  };
}

//Init call

init({
  thoughtSpotHost: tsURL,
  authType: AuthType.TrustedAuthToken,
  username: emailId,
  disableLoginRedirect: true,
  loginFailedMessage: ReactDOMServer.renderToString(<Error />),
  autoLogin: true,
  getAuthToken: () => {
    return httpClient(
      'GET',
      `https://${applicationServer}/thoughtspot/${emailId}/getAccessToken`,
      {},
      ''
    )
      .then((response) => {
        const authToken = response?.data?.accessToken;
        return authToken;
      })
      .catch((error) => {
        reject(error);
        return;
      });
  },
})
  .on(AuthStatus.SDK_SUCCESS, (reason) => {
    // Get the user groups associated with emailId and display embed
    getUserGroups(emailId)
      .then((userObj) => {
        resolve(userObj);
      })
      .catch((error) => {
        reject(error);
      });
    return;
  })
  .on(AuthStatus.FAILURE, (error) => {
    reject(error);
    return;
  });
