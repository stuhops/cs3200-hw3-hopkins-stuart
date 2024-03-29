import React from 'react';
import _ from 'lodash';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Tile from './tile.js';

export default class App extends React.Component {

  styles = StyleSheet.create({
    row: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },

    column: {
      height: 50,
      width: 50,
      justifyContent: 'space-between',
    },
  });

  get columnComponents() {
    return _.map(this.props.rowData, (columnValue, j) => {
      return(
        <Tile
          key={`index_${this.props.rowIndex}_${j}`}
          value={ columnValue }
          style={[this.styles.column, {backgroundColor: columnValue}]}
          onPress={ this.props.onPress }
        />
      );
    });
  }

  render() {
    return (
      <View style={ this.styles.row } key={ this.props.rowKey }>
        { this.columnComponents }
      </View>
    )
  }


}