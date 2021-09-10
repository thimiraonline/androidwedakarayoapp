import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  FlatList,
  StyleSheet,
  View,
  StatusBar,
  ActivityIndicator,
} from 'react-native';
import {useInfiniteQuery} from 'react-query';
import {grabTags} from '../API/apiConnectors';
import {CONSTANTS} from '../utils/constants';
import SinglCategory from '../components/SingleCategory';

const CatagoryScreen = () => {
  const renderItem = ({item}) => (
    <SinglCategory
      featureImage={item.feature_image}
      name={item.name}
      accentColor={item.accent_color || CONSTANTS.accentColor}
      postCount={item.count.posts}
      tagSlug={item.slug}
      tagName={item.name}
      tagId={item.id}
      url={item.url}
      item={item}
    />
  );
  const [tags, setTags] = useState([]);
  const {status, data, fetchNextPage} = useInfiniteQuery(
    'grabTagsFromGhost',
    grabTags,
    {
      getNextPageParam: (lastGroup, allGroups) => {
        return lastGroup.meta.pagination.next || undefined;
    ***REMOVED***,
  ***REMOVED***,
  );
  useEffect(() => {
    if (data) {
      data.pages[data.pages.length - 1].tags.forEach(tag => {
        setTags(prevState => [...prevState, tag]);
    ***REMOVED***);
  ***REMOVED***
***REMOVED***, [data]);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      {!tags.length ? (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <ActivityIndicator size={70} color={CONSTANTS.accentColor} />
        </View>
      ) : (
        <FlatList
          data={tags}
          renderItem={renderItem}
          onEndReached={fetchNextPage}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.contentContainer}
        />
      )}
    </SafeAreaView>
  );
***REMOVED***

const styles = StyleSheet.create({
  container: {
    flex: 1,
***REMOVED***,
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
***REMOVED***,
  title: {
    fontSize: 32,
***REMOVED***,
  contentContainer: {
    alignItems: 'center',
***REMOVED***,
});

export default CatagoryScreen;
