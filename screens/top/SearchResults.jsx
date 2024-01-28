import {
  View,
  Text,
  FlatList,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import ReusableTile from "../../components/Reusable/ReusableTile";
import { SIZES, COLORS } from "../../constants/theme";
import { getMoviesBySearch } from "../../services/axiosInstance";
import DropdownComponent from "../../components/Reusable/Dropdown";
import ReusableBtn from "../../components/Buttons/ReusableBtn";
import ReusableText from "../../components/Reusable/ReusableText";
import styles from "./search.style";

const SearchResults = ({ navigation }) => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const itemsPerPage = 10;

  const options = [
    { label: "Movie", value: "movie" },
    { label: "Multi", value: "multi" },
  ];
  const [movieType, setMovieType] = useState(options[0]);

  const [searchKey, setSearchKey] = useState("");

  const fetchMoviesBySearching = async () => {
    try {
      setLoading(true);
      const response = await getMoviesBySearch(
        movieType.value,
        searchKey,
        page
      );
      setMovies((prevMovies) => [
        ...(page === 1 ? [] : prevMovies),
        ...response.results.filter((movie) => movie.media_type !== "person"),
      ]);
    } catch (error) {
      console.error("Error fetching movies:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = () => {
    setPage(1);
    fetchMoviesBySearching();
  };

  const handleNextPage = () => {
    if (!loading) {
      setPage((prevPage) => prevPage + 1);
      fetchMoviesBySearching();
    }
  };

  const handlePrevPage = () => {
    if (!loading && page > 1) {
      setPage((prevPage) => prevPage - 1);
      fetchMoviesBySearching();
    }
  };

  const renderFooter = () => {
    return (
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <TouchableOpacity onPress={handlePrevPage} disabled={page === 1}>
          <Text style={{ color: page === 1 ? COLORS.gray : COLORS.primary }}>
            Previous
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleNextPage}
          disabled={movies.length % itemsPerPage !== 0}>
          <Text
            style={{
              color:
                movies.length % itemsPerPage !== 0
                  ? COLORS.gray
                  : COLORS.primary,
            }}>
            Next
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = page * itemsPerPage;

  return (
    <View style={{ margin: 20 }}>
      <TextInput
        style={styles.textInput}
        value={searchKey}
        placeholder="Search Movie or TV Show name"
        onChangeText={(text) => setSearchKey(text)}
      />
      <DropdownComponent
        dropdownLabel={"category"}
        options={options}
        value={movieType}
        setValue={setMovieType}
      />
      <View style={{ marginVertical: 10 }}>
        <ReusableBtn
          onPress={handleSearch}
          btnText={"SEARCH"}
          width={SIZES.width - 40}
          bgColor={COLORS.green}
          borderColor={COLORS.green}
          borderWidth={0}
          textColor={COLORS.white}
        />
      </View>
      {movies.length === 0 ? (
        <ReusableText
          text={"Please Search for a Movie"}
          family={"medium"}
          size={SIZES.large}
          color={COLORS.lightRed}
          style={styles.moviesReusableText}
        />
      ) : (
        <FlatList
          key={`${movieType.value}-${searchKey}`}
          data={movies.slice(startIndex, endIndex)}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={{
            columnGap: SIZES.medium,
            paddingBottom: 250,
          }}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <View
              style={{ marginBottom: 10, backgroundColor: COLORS.lightWhite }}>
              <ReusableTile
                item={item}
                onPress={() =>
                  navigation.navigate("Details", {
                    id: item.id,
                    mediaType: item.media_type ? item.media_type : "movie",
                  })
                }
              />
            </View>
          )}
          onEndReachedThreshold={0.1}
          ListFooterComponent={renderFooter}
        />
      )}
    </View>
  );
};

export default SearchResults;
