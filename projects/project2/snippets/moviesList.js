<ScrollView>
  {search.Search.map(item => (
    <MovieSection movie={item} />
  ))}
</ScrollView>


// const MovieSection = (item) => {
//   return (
//     <View style={{paddingTop: 5}}>
//       <TouchableOpacity style={styles.touchableArea} activeOpacity={0.3} underlayColor="#FFFFFF" onPress={() => console.log("Pressed")}>
//         <Image style={styles.movieCoverImage} source={{uri: String(item.movie.Poster)}} />
//         <View style={{flex: 1}}>
//           <Text style={{paddingLeft: 10, fontSize: 24, flex: 1}}> {item.movie.Title} </Text>
//           <Text style={{paddingLeft: 10, flex: 1}}> {item.movie.Year} </Text>
//         </View>
//       </TouchableOpacity>
//     </View>
//   )
// }
