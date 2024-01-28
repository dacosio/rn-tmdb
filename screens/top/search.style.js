import { StyleSheet } from "react-native";
import { SIZES, COLORS } from "../../constants/theme";

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    marginHorizontal: SIZES.small,
    borderColor: COLORS.blue,
    borderWidth: 1,
    borderRadius: SIZES.medium,
    marginVertical: SIZES.medium,
    height: 50,
  },
  input: {
    width: "100%",
    height: "100%",
    paddingHorizontal: 50,
  },
  searchImage: {
    resizeMode: "contain",
    width: "100%",
    height: SIZES.height / 2.2,
    paddingHorizontal: 20,
  },
  searchWrapper: {
    flex: 1,
    marginRight: SIZES.small,
    borderRadius: SIZES.small,
  },
  searchBtn: {
    width: 50,
    height: "100%",
    borderRadius: SIZES.small,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.lightBlue,
  },
  tile: {
    marginBottom: 10,
  },

  noResult: {
    paddingTop: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  textInput: {
    height: 50,
    backgroundColor: COLORS.white,
    borderWidth: 2,
    borderColor: COLORS.lightWhite,
    padding: 10,
    marginBottom: 20,
  },
  moviesReusableText: {
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    paddingTop: 100,
  },
});

export default styles;
