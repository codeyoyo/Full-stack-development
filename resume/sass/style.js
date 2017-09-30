import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  '*': {
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'body': {
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'main': {
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  'master-background-color': {
    'backgroundColor': '#5A4C5D',
    'color': '#fff'
  },
  'banner': {
    'backgroundColor': '#5A4C5D',
    'color': '#fff'
  },
  'banner': {
    'textAlign': 'center',
    'minHeight': [{ 'unit': 'px', 'value': 150 }],
    'paddingTop': [{ 'unit': '%V', 'value': 0.1 }],
    'paddingBottom': [{ 'unit': '%V', 'value': 0.1 }]
  },
  'banner banner-descript': {
    'fontSize': [{ 'unit': 'px', 'value': 12 }]
  },
  'banner banner-btn': {
    'width': [{ 'unit': 'px', 'value': 110 }],
    'backgroundColor': '#EF7674',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }],
    'height': [{ 'unit': 'px', 'value': 30 }],
    'lineHeight': [{ 'unit': 'px', 'value': 30 }],
    'marginTop': [{ 'unit': 'px', 'value': 10 }]
  },
  'banner baner-watermark': {
    'marginTop': [{ 'unit': 'px', 'value': 30 }],
    'fontSize': [{ 'unit': 'px', 'value': 30 }],
    'opacity': '0.2'
  },
  'nav': {
    'height': [{ 'unit': 'px', 'value': 100 }],
    'textAlign': 'center',
    'paddingTop': [{ 'unit': 'px', 'value': 30 }],
    'paddingBottom': [{ 'unit': 'px', 'value': 30 }]
  },
  'nav ul': {
    'listStyle': 'none',
    'overflow': 'hidden',
    'display': 'inline-block'
  },
  'nav ul li': {
    'float': 'left',
    'marginLeft': [{ 'unit': 'px', 'value': 30 }]
  },
  'nav a': {
    'cursor': 'pointer',
    'fontWeight': '800'
  },
  'link-title': {
    'paddingBottom': [{ 'unit': 'px', 'value': 10 }],
    'borderBottom': [{ 'unit': 'string', 'value': '#EF7674' }, { 'unit': 'px', 'value': 5 }, { 'unit': 'string', 'value': 'solid' }],
    'display': 'inline-block'
  },
  'link-title h2': {
    'fontWeight': '500'
  },
  'about-box': {
    'display': 'flex',
    'marginTop': [{ 'unit': 'px', 'value': -80 }],
    'height': [{ 'unit': 'px', 'value': 500 }],
    'overflow': 'hidden'
  },
  'about-box > div': {
    'height': [{ 'unit': 'px', 'value': 500 }]
  },
  'about-box left': {
    'flex': '0.4',
    'backgroundColor': '#5A4C5D',
    'textAlign': 'center',
    'lineHeight': [{ 'unit': 'px', 'value': 500 }]
  },
  'about-box left span': {
    'opacity': '0.2',
    'color': '#fff'
  },
  'about-box right': {
    'flex': '0.6',
    'backgroundColor': '#F0F0F0',
    'padding': [{ 'unit': '%V', 'value': 0.05 }, { 'unit': '%H', 'value': 0.05 }, { 'unit': '%V', 'value': 0.05 }, { 'unit': '%H', 'value': 0.05 }],
    'textAlign': 'left'
  },
  'about-box content-box': {
    'width': [{ 'unit': '%H', 'value': 0.75 }]
  },
  'about-box content-box descript-box': {
    'marginTop': [{ 'unit': 'px', 'value': 20 }]
  },
  'about-box content-box weight': {
    'fontWeight': '100'
  },
  'about-box content-box p': {
    'opacity': '0.5',
    'marginTop': [{ 'unit': 'px', 'value': 20 }]
  },
  'about-box content-box download': {
    'display': 'inline-block',
    'border': [{ 'unit': 'px', 'value': 3 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#5A4C5D' }],
    'padding': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }],
    'marginTop': [{ 'unit': 'px', 'value': 20 }],
    'fontWeight': '800',
    'color': '#5A4C5D'
  },
  'module': {
    'padding': [{ 'unit': 'px', 'value': 50 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 50 }, { 'unit': 'px', 'value': 0 }],
    'textAlign': 'center'
  },
  'expertise': {
    'padding': [{ 'unit': 'px', 'value': 50 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 50 }, { 'unit': 'px', 'value': 0 }],
    'textAlign': 'center'
  },
  'experience': {
    'padding': [{ 'unit': 'px', 'value': 50 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 50 }, { 'unit': 'px', 'value': 0 }],
    'textAlign': 'center'
  },
  'portfolio': {
    'padding': [{ 'unit': 'px', 'value': 50 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 50 }, { 'unit': 'px', 'value': 0 }],
    'textAlign': 'center'
  },
  'p-descript': {
    'fontSize': [{ 'unit': 'px', 'value': 10 }],
    'opacity': '0.5'
  },
  'descript-box p': {
    'fontSize': [{ 'unit': 'px', 'value': 10 }],
    'opacity': '0.5'
  },
  'expertise expertise-item p': {
    'fontSize': [{ 'unit': 'px', 'value': 10 }],
    'opacity': '0.5'
  },
  'experience describe history-content': {
    'fontSize': [{ 'unit': 'px', 'value': 10 }],
    'opacity': '0.5'
  },
  'descript-box': {
    'marginTop': [{ 'unit': 'px', 'value': 30 }]
  },
  'container': {
    'textAlign': 'center'
  },
  'expertise expertise-row': {
    'display': 'flex',
    'padding': [{ 'unit': '%V', 'value': 0.05 }, { 'unit': '%H', 'value': 0.1 }, { 'unit': 'px', 'value': 0 }, { 'unit': '%H', 'value': 0.1 }]
  },
  'expertise expertise-item': {
    'flex': '1'
  },
  'expertise expertise-item h3': {
    'margin': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 0 }]
  },
  'expertise expertise-percentage': {
    'border': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#EF7674' }],
    'borderRadius': '100%',
    'width': [{ 'unit': 'px', 'value': 80 }],
    'height': [{ 'unit': 'px', 'value': 80 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }],
    'lineHeight': [{ 'unit': 'px', 'value': 80 }]
  },
  'experience': {
    'backgroundColor': '#F0F0F0'
  },
  'experience container': {
    'display': 'flex',
    'marginTop': [{ 'unit': 'px', 'value': 50 }],
    'overflow': 'hidden'
  },
  'experience history': {
    'flex': '0.4',
    'borderRight': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': '#5A4C5D' }, { 'unit': 'string', 'value': 'dashed' }],
    'paddingRight': [{ 'unit': 'px', 'value': 30 }]
  },
  'experience year-module': {
    'marginBottom': [{ 'unit': 'px', 'value': 165 }],
    'textAlign': 'right',
    'position': 'relative'
  },
  'experience year-module:last-child': {
    'marginBottom': [{ 'unit': 'px', 'value': 0 }]
  },
  'experience year-module::after': {
    'content': '" "',
    'position': 'absolute',
    'height': [{ 'unit': 'px', 'value': 5 }],
    'width': [{ 'unit': 'px', 'value': 5 }],
    'borderRadius': '100%',
    'border': [{ 'unit': 'px', 'value': 3 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#5A4C5D' }],
    'top': [{ 'unit': '%V', 'value': 0.5 }],
    'marginTop': [{ 'unit': 'px', 'value': -1 }],
    'backgroundColor': '#fff',
    'right': [{ 'unit': 'px', 'value': -35 }]
  },
  'experience year-module > div': {
    'color': '#fff',
    'marginTop': [{ 'unit': 'px', 'value': 10 }]
  },
  'experience year-module > div > span': {
    'padding': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 5 }],
    'fontSize': [{ 'unit': 'px', 'value': 10 }]
  },
  'experience year-module > div:nth-child(1) > span': {
    'backgroundColor': '#EF7674'
  },
  'experience year-module > div:nth-child(2) > span': {
    'backgroundColor': '#5A4C5D'
  },
  'experience describe': {
    'flex': '0.6',
    'textAlign': 'left',
    'paddingLeft': [{ 'unit': 'px', 'value': 30 }]
  },
  'experience describe descript-module': {
    'marginBottom': [{ 'unit': 'px', 'value': 50 }],
    'width': [{ 'unit': '%H', 'value': 0.6 }]
  },
  'experience describe descript-module:last-child': {
    'marginBottom': [{ 'unit': 'px', 'value': 0 }]
  },
  'experience describe title': {
    'fontSize': [{ 'unit': 'px', 'value': 17 }]
  },
  'experience describe subhead': {
    'fontSize': [{ 'unit': 'px', 'value': 15 }],
    'opacity': '0.5'
  },
  'experience describe history-content': {
    'height': [{ 'unit': 'px', 'value': 105 }],
    'marginTop': [{ 'unit': 'px', 'value': 10 }]
  },
  'education': {
    'backgroundColor': '#fff'
  },
  'education year-module': {
    'marginBottom': [{ 'unit': 'px', 'value': 185 }]
  },
  'margin': {
    'marginTop': [{ 'unit': 'px', 'value': 20 }]
  },
  'portfolio': {
    'backgroundColor': '#5A4C5D',
    'color': '#fff'
  },
  'portfolio p': {
    'fontSize': [{ 'unit': 'px', 'value': 13 }],
    'color': '#fff'
  },
  'portfolio nav-btn': {
    'marginTop': [{ 'unit': 'px', 'value': 50 }],
    'fontSize': [{ 'unit': 'px', 'value': 13 }]
  },
  'portfolio nav-btn a': {
    'marginLeft': [{ 'unit': 'px', 'value': 30 }],
    'color': '#897F8A',
    'cursor': 'pointer'
  },
  'portfolio nav-btn selected': {
    'color': '#fff'
  },
  'portfolio-box row': {
    'fontSize': [{ 'unit': 'px', 'value': 0 }],
    'width': [{ 'unit': '%H', 'value': 1 }],
    'textAlign': 'left'
  },
  'portfolio-box row:nth-child(odd) item': {
    'fontSize': [{ 'unit': 'px', 'value': 15 }],
    'width': [{ 'unit': '%H', 'value': 0.25 }],
    'display': 'inline-block',
    'color': '#897F8A',
    'zoom': '1',
    'textAlign': 'center',
    'height': [{ 'unit': 'px', 'value': 200 }],
    'lineHeight': [{ 'unit': 'px', 'value': 200 }]
  },
  'portfolio-box row:nth-child(odd) item:nth-child(odd)': {
    'backgroundColor': '#F2F2F2'
  },
  'portfolio-box row:nth-child(odd) item:nth-child(even)': {
    'backgroundColor': '#F7F7F7'
  },
  'portfolio-box row:nth-child(even) item': {
    'fontSize': [{ 'unit': 'px', 'value': 15 }],
    'width': [{ 'unit': '%H', 'value': 0.25 }],
    'display': 'inline-block',
    'color': '#897F8A',
    'zoom': '1',
    'textAlign': 'center',
    'height': [{ 'unit': 'px', 'value': 200 }],
    'lineHeight': [{ 'unit': 'px', 'value': 200 }]
  },
  'portfolio-box row:nth-child(even) item:nth-child(odd)': {
    'backgroundColor': '#F7F7F7'
  },
  'portfolio-box row:nth-child(even) item:nth-child(even)': {
    'backgroundColor': '#F2F2F2'
  }
});
