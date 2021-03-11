import React from 'react';
import { Text, View, StyleSheet, FlatList, SafeAreaView } from 'react-native';

import { RoundedButton } from '../../components/RoundedButton';
import { fontSizes, spacing } from '../../utils/Sizes';

const HistoryItem = ({ item, index }) => {
  return <Text style={historyStyle(item.status)}>{item.subject}</Text>;
};

export const FocusHistory = ({ focusHistory, onClear }) => {
  const clearHistory = () => {
    onClear();
  };

  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
        {!!focusHistory.length && (
          <>
            <Text style={styles.title}> Things we've focused on: </Text>
            <FlatList
              style={{ flex: 1 }}
              contentContainerStyle={{ flex: 1, alignItems: 'center' }}
              data={focusHistory}
              renderItem={HistoryItem}
            />
            <View style={styles.clearContainer}>
              <RoundedButton
                size={75}
                title="Clear"
                onPress={() => onClear()}
              />
            </View>
          </>
        )}
      </SafeAreaView>
    </>
  );
};

const historyStyle = (status) => ({
  color: status < 1 ? 'red' : 'green',
  fontSize: fontSizes.md,
});

const styles = StyleSheet.create({
  title: {
    color: 'white',
    fontSize: fontSizes.lg,
    justifyContent: 'center'
  },
  clearContainer: {
    alignItems: 'center',
    padding: spacing.md,
  },
});
