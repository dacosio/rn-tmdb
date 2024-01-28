import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import AppBar from "../../components/Reusable/AppBar";
import { COLORS, SIZES, TEXT } from "../../constants/theme";
import NetworkImage from "../../components/Reusable/NetworkImage";
import styles from "./HotelDetails.styles";
import ReusableText from "../../components/Reusable/ReusableText";
import HeightSpacer from "../../components/Reusable/HeightSpacer";
import reusable from "../../components/Reusable/reusable.style";
import { Rating } from "react-native-stock-star-rating";
import DescriptionText from "../../components/Reusable/DescriptionText";
import { useRoute } from "@react-navigation/native";
import { getDetail, getMovies, getTvShows } from "../../services/axiosInstance";

const HotelDetails = ({ navigation }) => {
  const hotel = {
    availability: {
      start: "2023-08-20T00:00:00.000Z",
      end: "2023-08-25T00:00:00.000Z",
    },
    _id: "64c675793cfa5e847bcd5436",
    country_id: "64c62bfc65af9f8c969a8d04",
    title: "Urban Chic Boutique Hotel",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris sit amet massa vitae tortor condimentum lacinia quis. Elit ut aliquam purus sit amet luctus. Nunc mi ipsum faucibus vitae aliquet. Et magnis dis parturient montes nascetur ridiculus mus mauris. Vel fringilla est ullamcorper eget nulla facilisi.",
    contact: "64c5d95adc7efae2a45ec376",
    imageUrl:
      "https://d326fntlu7tb1e.cloudfront.net/uploads/5da4db00-e83f-449a-a97a-b7fa80a5bda6-aspen.jpeg",
    rating: 4.8,
    review: "2312 Reviews",
    reviews: [
      {
        _id: "1a2b3c4d-5e6f-4g8h-i9j0-klmnopqrstuv",
        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        rating: 4,
        user: {
          _id: "a1b2c3d4-e5f6-4g8h-i9j0-klmnopqrstuv",
          username: "john_doe",
          profile:
            "https://gravatar.com/avatar/36ed7d1a0d926ef50217bddc6ef8b96b?s=400&d=robohash&r=x",
        },
        updatedAt: "2023-11-19",
      },
      {
        _id: "5g6h7i8j-9k0l-4mno-pqrs-tuvwxyza987b",
        review:
          "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
        rating: 5,
        user: {
          _id: "b1c2d3e4-f5g6-4hij-klmn-opqrstuvwxyz",
          username: "jane_smith",
          profile:
            "https://gravatar.com/avatar/52065aec20d27d1a82191abc6442d72d?s=400&d=robohash&r=x",
        },
        updatedAt: "2023-11-20",
      },
    ],
    location: "San Francisco, CA",
    latitude: 37.7749,
    longitude: -122.4194,
    price: 400,
    facilities: [
      {
        wifi: true,
        _id: "64c675793cfa5e847bcd5437",
      },
    ],
    __v: 0,
  };

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

export default HotelDetails;
