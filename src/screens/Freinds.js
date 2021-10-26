import {
  View,
  StyleSheet,
  TextInput,
  FlatList,
  Text,
  keyboard,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState, useEffect } from "react";
import Icon from "react-native-vector-icons/Ionicons";
import * as Animatable from "react-native-animatable";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

import AsyncStorage from "@react-native-async-storage/async-storage";

const listItems = [
  "Upendra Beth",
  "Pratik Gahane",
  "Sanket Thakare",
  "Harsh Thakur",
  "Rohan",
  "Rahul",
  "Ritik",
  "kirti",
];

export default function Friends() {
  const [searchResults, setSearchResults] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [token, setToken] = useState("");
  const STORAGE_KEY = "@save_token";

  const BASE_URL = "https://techquiz-api.herokuapp.com"

  const [friendsList, setFriendsList] = useState([]);
  const readData = async () => {
    try {
      const token = await AsyncStorage.getItem(STORAGE_KEY);

      if (token !== null) {
        setToken(token);
      }
    } catch (e) {
      alert("Failed to fetch the data from storage");
    }
  };

  useEffect(() => {
    readData();
  }, []);

  const getFriends = () => {
    fetch(`${BASE_URL}/user/friend/get`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => response.json())
      .then((json) => {
        setFriendsList(json);
      })
      .catch((error) => {
        alert(JSON.stringify(error));
        console.error("error in friends", error);
      })
      .finally(() => {});
  };

  const getResults = () => {
    fetch(
      `${BASE_URL}/user/friend/search?username=${keyword}`,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    )
      .then((response) => response.json())
      .then((json) => {
        setSearchResults(json);
      })
      .catch((error) => {
        alert(JSON.stringify(error));
        console.error(error);
      })
      .finally(() => {});
  };

  const removeFriend = (id) => {
    fetch(
      `${BASE_URL}/user/friend/remove?id=${id}`,
      {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      }
    )
      .then((response) => response.json())
      .then((json) => {
        alert("friend removed from friendlist");
        setKeyword("");
      })
      .catch((error) => {
        alert(JSON.stringify(error));
        console.error("error in friends", error);
      })
      .finally(() => {
        getFriends();
      });
  };

  const addFriend = (username) => {
    fetch(
      `${BASE_URL}/user/friend/add?username=${username}`,
      {
        method: "PATCH",
        headers: { Authorization: `Bearer ${token}` },
      }
    )
      .then((response) => response.json())
      .then((json) => {
        if (json.detail) {
          if (json.detail.error !== undefined)
            alert(json.detail && json.detail.error);
        } else alert("Added as your friend");
      })
      .catch((error) => {
        alert(JSON.stringify(error));
        console.error("error in friends", error);
      })
      .finally(() => {});
  };

  useEffect(() => {
    getFriends();
  }, [token, keyword]);

  useEffect(() => {
    let timer1 = setTimeout(() => getResults(), 500);

    return () => {
      clearTimeout(timer1);
    };
  }, [keyword]);

  return (
    <View styles={styles.container}>
      <ScrollView styles={styles.scroll}>
        <View style={styles.header}>
          <Animatable.View
            animation="slideInDown"
            duration={1500}
            style={styles.inner}
          >
            <Icon name="search" style={styles.searchicon}></Icon>
            <TextInput
              placeholder="Search"
              style={styles.textinput}
              onChangeText={(text) => setKeyword(text)}
              value={keyword}
            />
          </Animatable.View>
        </View>
        <View>
          {keyword.length > 0 ? (
            searchResults.length > 0 &&
            searchResults.map((user) => {
              return (
                <View style={styles.listItem}>
                  <Text style={{ color: "white", fontSize: 20 }}>
                    {user.username}
                  </Text>
                  <Text style={{ color: "white", fontSize: 20 }}>
                    {user.score}
                  </Text>

                  <View>
                    <TouchableOpacity onPress={() => addFriend(user.username)}>
                      <FontAwesome5
                        name={"plus-circle"}
                        size={25}
                        color="white"
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              );
            })
          ) : (
            // <ScrollView style={styles.scroll}>
            <View>
              {friendsList.length > 0 &&
                friendsList.map((friend, index) => {
                  return (
                    <View style={styles.friends} key={index}>
                      <Text style={{ color: "white", fontSize: 20 }}>
                        {friend.username}
                      </Text>
                      <Text style={{ color: "white", fontSize: 20 }}>
                        {friend.score}
                      </Text>
                      <TouchableOpacity
                        onPress={() => removeFriend(friend._id)}
                      >
                        <FontAwesome5
                          name={"minus-circle"}
                          size={25}
                          color="white"
                        />
                      </TouchableOpacity>
                    </View>
                  );
                })}
            </View>
          )}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 80,
    backgroundColor: "#1A759F",
    justifyContent: "center",
    paddingHorizontal: 5,
  },
  inner: {
    height: 50,
    backgroundColor: "white",
    borderRadius: 12,
    flexDirection: "row",
    padding: 5,
    alignItems: "center",
  },
  searchicon: {
    fontSize: 24,
  },
  textinput: {
    fontSize: 24,
    marginLeft: 15,
  },
  textsearch: {
    padding: 20,
    fontSize: 20,
  },

  listItem: {
    margin: 20,
    height: 50,
    padding: 20,
    fontWeight: "500",
    fontSize: 40,
    color: "black",
    backgroundColor: "#1A759F",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 20,
    flexDirection: "row",
  },

  friends: {
    margin: 10,
    height: 50,
    padding: 20,
    fontWeight: "500",
    fontSize: 40,
    color: "black",
    backgroundColor: "#1A759F",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 20,
    flexDirection: "row",
  },
  add: {
    flexDirection: "row",
    width: "50px",
    justifyContent: "space-between",
  },
  scroll: {
    height: "100%",
    width: "100%",
  },
});
