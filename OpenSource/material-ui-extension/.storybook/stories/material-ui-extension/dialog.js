/**
 * Created by apple on 16/10/19.
 */
import React from 'react';
import { storiesOf } from '@kadira/storybook';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AlertDialog from '../../../material-ui-extension/dialog/alert/alert_dialog';


//加载Divider
storiesOf('Dialog:对话框', module)
  .addDecorator(story => (
    <MuiThemeProvider muiTheme={getMuiTheme()}>
      {story()}
    </MuiThemeProvider>
  ))
  .add('提醒/告警对话框', () => (
    <div>
      <AlertDialog open={true}/>
    </div>
  ));

