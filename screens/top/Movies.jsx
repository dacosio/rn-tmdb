import { View, Text, FlatList } from "react-native";
import React from "react";
import ReusableTile from "../../components/Reusable/ReusableTile";
import { SIZES, COLORS } from "../../constants/theme";
import { useEffect, useState } from "react";
import { getMoviesByCategory } from "../../services/axiosInstance";
import AntDesign from "@expo/vector-icons/AntDesign";
import DropdownComponent from "../../components/Reusable/Dropdown";
import { SafeAreaView } from "react-native-safe-area-context";

const Movies = ({ navigation }) => {
  const [movies, setMovies] = useState([]);

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
        const movies = await getMoviesByCategory(category.value);
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
                  mediaType: item.media_type ? item.media_type : "movie",
                })
              }
            />
          </View>
        )}
      />
    </View>
  );
};

export default Movies;
