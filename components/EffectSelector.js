import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MultiSelect from 'react-native-multiple-select';

class EffectSelector extends Component {
    constructor(props){
        super(props);
        this.passSelectedSymptoms
        this.state = {
            symptoms: props.symptoms,
            selectedSymptoms: []
        }
    }

    updateSelectedSymptoms = (items) => {
        this.setState({selectedSymptoms: items});
        this.passSelectedSymptoms(items);
    }

    render() {
        return (
            <View style={styles.container} >
                <MultiSelect
                    items={this.state.symptoms}
                    uniqueKey="id"
                    displayKey="name"

                    onSelectedItemsChange={items => this.setState({selectedSymptoms: items})}
                    selectedItems={this.state.selectedSymptoms}
                    selectText="Pick Symptoms"
                    searchInputPlaceholderText="Search Symptoms..."
                    
                />
            </View>
        );
    }
    
}

const styles = StyleSheet.create({
    picker: {
        height: 50,
        width: 150
    },
    container: {
        flex: 1,
        paddingTop: 40,
        alignItems: "center"
      }
});


export default EffectSelector;