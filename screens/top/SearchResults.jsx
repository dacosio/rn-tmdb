import { View, Text, FlatList, TextInput } from "react-native";
import React from "react";
import ReusableTile from "../../components/Reusable/ReusableTile";
import { SIZES, COLORS } from "../../constants/theme";
import { useState } from "react";
import { getMoviesBySearch } from "../../services/axiosInstance";
import DropdownComponent from "../../components/Reusable/Dropdown";
import ReusableBtn from "../../components/Buttons/ReusableBtn";

const SearchResults = ({ navigation }) => {
  const [movies, setMovies] = useState([]);

  const options = [
    { label: "Movie", value: "movie" },
    { label: "Multi", value: "multi" },
  ];
  const [movieType, setMovieType] = useState(options[0]);

  const [searchKey, setSearchKey] = useState("");

  const fetchMoviesBySearching = async () => {
    try {
      const movies = await getMoviesBySearch(movieType.value, searchKey);
      setMovies(movies.results);
    } catch (error) {
      console.error("Error fetching  movies:", error);
    }
  };

  const [searchValue, setsearchValue] = useState("");

  const handleSearch = () => {
    fetchMoviesBySearching();
  };

  return (
    <View style={{ margin: 20 }}>
      <TextInput
        style={{
          height: 50,
          backgroundColor: COLORS.white,
          borderWidth: 2,
          borderColor: COLORS.lightWhite,
          padding: 10,
          marginBottom: 20,
        }}
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
      <View style={{marginVertical: 10}}>
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
        <View>
          <Text>Please search</Text>
        </View>
      ) : (
        <FlatList
          data={movies}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ columnGap: SIZES.medium }}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <View
              style={{ marginBottom: 10, backgroundColor: COLORS.lightWhite }}>
              <ReusableTile
                item={item}
                // onPress={() => navigation.navigate("HotelDetails", item._id)}
              />
            </View>
          )}
        />
      )}
    </View>
  );
};

export default SearchResults;
