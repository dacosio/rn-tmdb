import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import ReusableTile from "../../components/Reusable/ReusableTile";
import { SIZES, COLORS } from "../../constants/theme";
import { getMovies } from "../../services/axiosInstance";
import DropdownComponent from "../../components/Reusable/Dropdown";

const Movies = ({ navigation }) => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const itemsPerPage = 10;

  const options = [
    { label: "Now Playing", value: "now_playing" },
    { label: "Popular", value: "popular" },
    { label: "Top Rated", value: "top_rated" },
    { label: "Upcoming", value: "upcoming" },
  ];
  const [category, setCategory] = useState(options[0]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        const response = await getMovies(category.value, page);
        setMovies((prevMovies) => [
          ...(page === 1 ? [] : prevMovies),
          ...response.results,
        ]);
      } catch (error) {
        console.error("Error fetching movies:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [category, page]);

  useEffect(() => {
    // Reset to the first page when the category changes
    setPage(1);
  }, [category]);

  const handleNextPage = () => {
    if (!loading) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (!loading && page > 1) {
      setPage((prevPage) => prevPage - 1);
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
      <DropdownComponent
        dropdownLabel={"category"}
        options={options}
        value={category}
        setValue={setCategory}
      />
      <FlatList
        data={movies.slice(startIndex, endIndex)}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ columnGap: SIZES.medium, paddingBottom: 100 }}
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
    </View>
  );
};

export default Movies;
