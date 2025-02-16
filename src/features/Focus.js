import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { TextInput } from 'react-native-paper';
import { colors } from '../utils/colors';
import { RoundedButton } from '../components/RoundedButton';
import { spacing } from '../utils/sizes';

const Item = ({ title }) => (
  <View style={styles.focusedListItems}>
    <Text style={styles.focusedListItem}>- {title}</Text>
  </View>
);

export const Focus = ({ history, addSubject }) => {
  const [subject, setSubject] = React.useState(null);

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          onChangeText={setSubject}
          label="Please will you like to focus on?"
        />
        <View style={styles.button}>
          <RoundedButton
            onPress={() => addSubject(subject)}
            title="+"
            size={50}
          />
        </View>
      </View>
      <View style={styles.focusHistory}>
        {history.length === 0 && (
          <Text style={styles.focusHistoryTexts}>
            You have not focused on anything!
          </Text>
        )}
        {history.length > 0 && (
          <Text style={styles.focusHistoryTexts}>
            These are the things you have focused on:
          </Text>
        )}
        <FlatList
          data={history}
          renderItem={({ item }) => <Item title={item} />}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textInput: {
    flex: 1,
    marginRight: spacing.sm,
  },
  button: {
    justifyContent: 'center',
  },
  inputContainer: {
    justifyContent: 'top',
    padding: spacing.lg,
    flexDirection: 'row',
  },
  focusHistory: {
    flex: 1,
    padding: spacing.lg,
  },
  focusHistoryTexts: {
    fontWeight: 'bold',
    color: colors.white,
  },
  focusedListItem: {
    flex: 1,
    color: colors.white,
  },
  focusedListItems: {
    flex: 1,
  },
});
