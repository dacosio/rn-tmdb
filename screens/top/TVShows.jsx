import { View, Text, FlatList } from "react-native";
import React from "react";
import ReusableTile from "../../components/Reusable/ReusableTile";
import { SIZES, COLORS } from "../../constants/theme";
import { useEffect, useState } from "react";
import { getTvShows } from "../../services/axiosInstance";
import DropdownComponent from "../../components/Reusable/Dropdown";

const TVShows = ({ navigation }) => {
  const [movies, setMovies] = useState([]);

  const options = [
    { label: "Airing Today", value: "airing_today" },
    { label: "On the Air", value: "on_the_air" },
    { label: "Popular", value: "popular" },
    { label: "Top Rated", value: "top_rated" },
  ];
  const [category, setCategory] = useState(options[0]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const movies = await getTvShows(category.value);
        setMovies(movies.results);
      } catch (error) {
        console.error("Error fetching  movies:", error);
      }
    };

    fetchMovies();
  }, [category]);

  return (
    <View style={{ margin: 20 }}>
      <DropdownComponent
        dropdownLabel={"category"}
        options={options}
        value={category}
        setValue={setCategory}
      />
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
              onPress={() =>
                navigation.navigate("HotelDetails", {
                  id: item.id,
                  mediaType: item.media_type ? item.media_type : "tv",
                })
              }
            />
          </View>
        )}
      />
    </View>
  );
};

export default TVShows;
