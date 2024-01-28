import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import AppBar from "../../components/Reusable/AppBar";
import { COLORS, SIZES, TEXT } from "../../constants/theme";
import NetworkImage from "../../components/Reusable/NetworkImage";
import styles from "./Details.styles";
import ReusableText from "../../components/Reusable/ReusableText";
import HeightSpacer from "../../components/Reusable/HeightSpacer";
import reusable from "../../components/Reusable/reusable.style";
import DescriptionText from "../../components/Reusable/DescriptionText";
import { useRoute } from "@react-navigation/native";
import { getMovies, getTvShows } from "../../services/axiosInstance";

const Details = ({ navigation }) => {
  const route = useRoute();
  const { id, mediaType } = route.params;
  const [detailData, setDetailData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (mediaType == "tv") {
          const data = await getTvShows(id);

          setDetailData(data);
        } else if (mediaType == "movie") {
          const data = await getMovies(id);
          setDetailData(data);
        } else if (mediaType == "person") {
          const data = await getMovies(id);
          setDetailData(data);
        }
      } catch (error) {
        // Handle error if needed
        console.error("Error fetching details:", error);
      }
    };

    if (id) {
      fetchData();
    }
  }, [id]);

  const title = (mediaType) => {
    let titleLabel = "";
    switch (mediaType) {
      case "tv":
        titleLabel = detailData?.original_title;
      case "movie":
        titleLabel = detailData?.original_name;
    }

    return titleLabel;
  };
  return (
    <ScrollView>
      <View style={{ height: 80 }}>
        <AppBar
          top={50}
          left={20}
          right={20}
          title={title(mediaType)}
          bgColor={COLORS.white}
          onPress={() => navigation.goBack()}
          onPressOne={() => {}}
        />
      </View>
      <View>
        <View style={styles.container}>
          <NetworkImage
            source={
              "https://image.tmdb.org/t/p/original" +
              `${
                detailData?.poster_path
                  ? detailData?.poster_path
                  : detailData?.profile_path
              }`
            }
            width={"100%"}
            height={220}
            borderRadius={25}
          />

          <View style={styles.titleContainer}>
            <View style={styles.titleColumn}>
              <ReusableText
                text={
                  detailData?.original_title
                    ? detailData?.original_title
                    : detailData?.original_name
                }
                family={"medium"}
                size={SIZES.large}
                color={COLORS.black}
              />
              <HeightSpacer height={10} />
              <ReusableText
                text={detailData?.tagline ? detailData?.tagline : "no tagline"}
                family={"medium"}
                size={SIZES.medium}
                color={COLORS.black}
              />
              <HeightSpacer height={15} />
              <View style={reusable.rowWithSpace("space-between")}>
                <ReusableText
                  text={`Vote Average: ${detailData?.vote_average}`}
                  family={"medium"}
                  size={SIZES.medium}
                  color={COLORS.gray}
                />
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.container, { paddingTop: 90 }]}>
          <ReusableText
            text={"Description"}
            family={"medium"}
            size={SIZES.large}
            color={COLORS.black}
          />
          <HeightSpacer height={10} />
          <DescriptionText text={detailData?.overview} />
        </View>
      </View>
    </ScrollView>
  );
};

export default Details;
