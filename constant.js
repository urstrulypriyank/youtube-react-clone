// API URL
export const YT_MOST_POPULAR_API =
  " https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=50&key=";
export const YT_SEARCH_SUGGESTION_API =
  "https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const YT_SEARCH_API =
  "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25";
export const YT_COMMENT_API =
  "https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&";
// CONSTANT VALUE
export const SIDEBAR_WIDTH_REM = "13rem";

// Functional constant
export const fetchData = async (url, Setter) => {
  const data = await fetch(url, {
    mode: "no-cors",
  });
  const new_data = await data.json();
  Setter(new_data.items);
};

// mock api data
export const MOCK_API_SEARCH_DATA = [
  {
    kind: "youtube#searchResult",
    etag: "u1HOWsTGqGRv6l-IYna6QzvYITY",
    id: {
      kind: "youtube#video",
      videoId: "MyeBqaGeYFY",
    },
    snippet: {
      publishedAt: "2023-05-14T14:07:58Z",
      channelId: "UCgKEvLp8DXCTMq4QY6wW7bw",
      title:
        "maal peyenge 😂😂 #comedy #surajroxfunnyvibeo #vikram #realfools #polish #maalpiyenge",
      description: "",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/MyeBqaGeYFY/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/MyeBqaGeYFY/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/MyeBqaGeYFY/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "Real fools shorts official",
      liveBroadcastContent: "none",
      publishTime: "2023-05-14T14:07:58Z",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "o0viwFotyAAFeQo1W5PcHYD8Be4",
    id: {
      kind: "youtube#video",
      videoId: "09-n5FFQSLk",
    },
    snippet: {
      publishedAt: "2022-08-03T16:12:42Z",
      channelId: "UC8lFYhmcyMlv3rsJrY-c6Xg",
      title: "Priyanka hard work ❤️❤️￼",
      description: "",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/09-n5FFQSLk/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/09-n5FFQSLk/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/09-n5FFQSLk/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "Priyanka hard-work",
      liveBroadcastContent: "none",
      publishTime: "2022-08-03T16:12:42Z",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "_f8XMsTuQ1LwpLC1mesaeeWkr6I",
    id: {
      kind: "youtube#video",
      videoId: "VoEzgMI2DoE",
    },
    snippet: {
      publishedAt: "2022-11-06T17:05:22Z",
      channelId: "UCogL6gonaa9IeYFrpUdEcpw",
      title:
        "Priyanka Mongia Death | कैसी हुई मौत क्या है सच? Priyanka Mongia Death Reality | Priyanka accident",
      description:
        "Priyanka Mongia Death | कैसी हुई मौत क्या है सच? Priyanka Mongia Death Reality | Priyanka accident ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/VoEzgMI2DoE/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/VoEzgMI2DoE/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/VoEzgMI2DoE/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "All In NEWs",
      liveBroadcastContent: "none",
      publishTime: "2022-11-06T17:05:22Z",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "_yvQf5wxm0kJA9fqq61hDuYLEBM",
    id: {
      kind: "youtube#video",
      videoId: "HJWZVv9jSrU",
    },
    snippet: {
      publishedAt: "2023-04-26T04:30:09Z",
      channelId: "UCLgjLXvZCI8WqEUo4Y-hFfw",
      title:
        "Priyanka Mongia 💓 Tik tok video ⚡ deewane ham nahin hote song 🥀 #shorts #priyanka #tiktok",
      description: "",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/HJWZVv9jSrU/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/HJWZVv9jSrU/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/HJWZVv9jSrU/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "HM 99 MP",
      liveBroadcastContent: "none",
      publishTime: "2023-04-26T04:30:09Z",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "Qz3jyHt5z4NjsUYXLFccsn9hDsY",
    id: {
      kind: "youtube#video",
      videoId: "OBZxzvCAfZc",
    },
    snippet: {
      publishedAt: "2023-06-09T09:00:06Z",
      channelId: "UC5kBn2g1ofNM8QTmrchiHZA",
      title: "mal Priyanka 😂😂😂 new #comedy #movie shorts",
      description:
        "mal Priyanka new #comedy #movie shorts comedy #standupcomedy #comedyclub #comedyvideos #instacomedy ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/OBZxzvCAfZc/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/OBZxzvCAfZc/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/OBZxzvCAfZc/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "BAGNAN BOYS COMEDY GROUP",
      liveBroadcastContent: "none",
      publishTime: "2023-06-09T09:00:06Z",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "bJ_xumv5yfJFFgJSf5Sbqo93ehE",
    id: {
      kind: "youtube#video",
      videoId: "sPhhZg9v9NU",
    },
    snippet: {
      publishedAt: "2013-07-11T15:40:09Z",
      channelId: "UCIK5nltgfQxB6TZINjYUVyA",
      title: "Priyanka Chopra - Exotic ft. Pitbull",
      description:
        "Buy Now! iTunes: http://smarturl.it/PriyankaExotic Music video by Priyanka Chopra performing Exotic. © 2013 Interscope.",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/sPhhZg9v9NU/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/sPhhZg9v9NU/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/sPhhZg9v9NU/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "PriyankaChopraVEVO",
      liveBroadcastContent: "none",
      publishTime: "2013-07-11T15:40:09Z",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "AAYZT39ziTXX_GL0M0YhLfab3fg",
    id: {
      kind: "youtube#video",
      videoId: "rrfr2Ad034U",
    },
    snippet: {
      publishedAt: "2023-07-21T12:00:50Z",
      channelId: "UCCJRFl1Qjo83GG_09U-DIBA",
      title:
        "Priyanka Gandhi Gwalior Jan Akrosh Rally: Jyotiraditya Scindia का नाम लेकर क्या बोलीं? Congress",
      description:
        "Priyanka Gandhi Gwalior Jan Akrosh Rally: Jyotiraditya Scindia का नाम लेकर क्या बोलीं? Congress ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/rrfr2Ad034U/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/rrfr2Ad034U/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/rrfr2Ad034U/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "Live Hindustan",
      liveBroadcastContent: "none",
      publishTime: "2023-07-21T12:00:50Z",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "2d5lO73gBMjQ62ndFHfxBjHobW4",
    id: {
      kind: "youtube#video",
      videoId: "K8pao6rlTKQ",
    },
    snippet: {
      publishedAt: "2023-04-20T13:17:48Z",
      channelId: "UCpJhDTxnSAd0PNy2_oH0txg",
      title:
        "বিয়াইন তোমার হাঁসি গো দেইখা । Biyain Tumar Hasi go Deikha। NRz Rifat । Tik tok Viral Song 2023",
      description:
        "বিয়াইন তোমার হাঁসি গো দেইখা । Biyain Tumar Hasi go Deikha। NRz Rifat । Tik tok Viral Song 2023 ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/K8pao6rlTKQ/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/K8pao6rlTKQ/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/K8pao6rlTKQ/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "JAK Multimedia",
      liveBroadcastContent: "none",
      publishTime: "2023-04-20T13:17:48Z",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "yMXoG_KX3Y_tpk9tl6aGyDWuuBA",
    id: {
      kind: "youtube#video",
      videoId: "JvlYI8z_Uns",
    },
    snippet: {
      publishedAt: "2023-07-26T15:25:07Z",
      channelId: "UC8lFYhmcyMlv3rsJrY-c6Xg",
      title:
        "इतना बड़ा गिफ्ट आया मेरे लिए || 😳 Priyanka hard-work new video @poojapriyankaofficial786",
      description:
        "इतना बड़ा गिफ्ट आया मेरे लिए || Priyanka hard-work new video.",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/JvlYI8z_Uns/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/JvlYI8z_Uns/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/JvlYI8z_Uns/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "Priyanka hard-work",
      liveBroadcastContent: "none",
      publishTime: "2023-07-26T15:25:07Z",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "6hoE9Bnhc4zzcs-gmxDgrwLtRgA",
    id: {
      kind: "youtube#video",
      videoId: "JodBP37PFHA",
    },
    snippet: {
      publishedAt: "2023-05-14T13:30:06Z",
      channelId: "UC5rH-TO6cg9IwWEgjSo5n2A",
      title:
        "বিয়াইন তোমার হাসি দেইখা | Biyain Tumar Hasi Deikha | Rk Roman Kha | Tik Tok Vairal Song Dance 2023",
      description:
        "dnc_media #Hip_Hop_Dance #rk_dance_bd Welcome my Chenel D N C Media Please Subscribe now...     D N C Media ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/JodBP37PFHA/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/JodBP37PFHA/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/JodBP37PFHA/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "D N C Media",
      liveBroadcastContent: "none",
      publishTime: "2023-05-14T13:30:06Z",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "W0hGWlzK-xkgxiUPkk5Ha_Du3u8",
    id: {
      kind: "youtube#video",
      videoId: "yZ7ASYIYswg",
    },
    snippet: {
      publishedAt: "2023-07-26T11:30:44Z",
      channelId: "UCaooZvg_gT3gagtkbqJCxMw",
      title:
        "Bava Web Series | Episode - 3 | Prem Ranjith | Shivani Mahi | Priyanka Saridevi | Infinitum Media",
      description:
        '"Bava" is a Telugu Rom Com Web Series Featuring Prem Ranjith & Shivani Mahi as Leads. Disclaimer: We do not intend to ...',
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/yZ7ASYIYswg/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/yZ7ASYIYswg/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/yZ7ASYIYswg/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "Infinitum Theatre",
      liveBroadcastContent: "none",
      publishTime: "2023-07-26T11:30:44Z",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "i_m_yMywvd6cDvFyF5Kr-wajI2w",
    id: {
      kind: "youtube#video",
      videoId: "aN1y6808wjY",
    },
    snippet: {
      publishedAt: "2021-09-07T15:51:53Z",
      channelId: "UCeYmRvccFXVts18eOBAhuGg",
      title: "Priyanka - Come Through (Official Video) ft. Lemon",
      description:
        'The 3rd music video off of my EP "Taste Test" for my single "Come Through" is HERE! My cinematic universe is really shaping up.',
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/aN1y6808wjY/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/aN1y6808wjY/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/aN1y6808wjY/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "thequeenpriyanka",
      liveBroadcastContent: "none",
      publishTime: "2021-09-07T15:51:53Z",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "LpUEPZ485iQe67nIu7ZqwVJGQqc",
    id: {
      kind: "youtube#video",
      videoId: "-v6IAmYNr9Q",
    },
    snippet: {
      publishedAt: "2023-07-25T16:13:21Z",
      channelId: "UC5pwXDsgf-SXZ1mwLWssQCg",
      title: "3BHK HOUSE TOUR",
      description: "",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/-v6IAmYNr9Q/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/-v6IAmYNr9Q/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/-v6IAmYNr9Q/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "ChaikiDiwani Priyanka",
      liveBroadcastContent: "none",
      publishTime: "2023-07-25T16:13:21Z",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "275k7w0sDrYsHN-jbHVCo9zsql0",
    id: {
      kind: "youtube#video",
      videoId: "v78BykXPYKM",
    },
    snippet: {
      publishedAt: "2023-07-21T13:21:39Z",
      channelId: "UCpBajyVrl-EAUJojPFWIG2g",
      title:
        "Modi  के Manipur वाले बयान का Priyanka Gandhi  ने विश्लेषण कर डाला |",
      description:
        "modi #priyankagandhi #news #viral Modi के Manipur वाले बयान का Priyanka Gandhi ने विश्लेषण कर ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/v78BykXPYKM/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/v78BykXPYKM/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/v78BykXPYKM/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "Ulta Chasma uc",
      liveBroadcastContent: "none",
      publishTime: "2023-07-21T13:21:39Z",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "3TdJC5_i2Y0mbF1Bk-3diWCSU3A",
    id: {
      kind: "youtube#video",
      videoId: "FTTtX4QnXOA",
    },
    snippet: {
      publishedAt: "2023-06-12T10:17:50Z",
      channelId: "UCPfzFWn0bM2bhEQY7sERz0A",
      title:
        "JETHANI DEVRANI / EP 8 🦋🧿🤣 #priyankatyagi #devranijethani #trendingonshorts",
      description: "We are back.",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/FTTtX4QnXOA/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/FTTtX4QnXOA/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/FTTtX4QnXOA/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "Priyanka Tyagi",
      liveBroadcastContent: "none",
      publishTime: "2023-06-12T10:17:50Z",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "We0Xdse8g_vUDNNzZSRJCacfpd8",
    id: {
      kind: "youtube#video",
      videoId: "6iHfsdb07XM",
    },
    snippet: {
      publishedAt: "2023-07-24T06:15:00Z",
      channelId: "UCqEpuM7yrbk8-6gzX4FCCuA",
      title:
        "The Fourth Trimester | Podcast | Malvika Subba | Ep 9 |  Nyano Diapers",
      description:
        "This week on Nyano Diapers presents THE FOURTH TRIMESTER, we have the extremely well spoken, talented and beautiful ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/6iHfsdb07XM/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/6iHfsdb07XM/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/6iHfsdb07XM/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "Priyanka Karki",
      liveBroadcastContent: "none",
      publishTime: "2023-07-24T06:15:00Z",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "tL8CmkxJgw4_OpSlhDR-E2dq-Ps",
    id: {
      kind: "youtube#video",
      videoId: "VCgegEUkUFk",
    },
    snippet: {
      publishedAt: "2023-04-30T04:15:08Z",
      channelId: "UCpJhDTxnSAd0PNy2_oH0txg",
      title:
        "বিয়াইন তোমার হাঁসি দেইখা | Biyain Tumar Hasi Deikha | Duet version | Nrz Rifat | Nrz Rupa | new song",
      description:
        "বিয়াইন তোমার হাঁসি দেইখা | Biyain Tumar Hasi Deikha | Duet version | Nrz Rifat | Nrz Rupa | new song ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/VCgegEUkUFk/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/VCgegEUkUFk/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/VCgegEUkUFk/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "JAK Multimedia",
      liveBroadcastContent: "none",
      publishTime: "2023-04-30T04:15:08Z",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "aoqr4adtf7rzcaPRNYL_NFmKKZ0",
    id: {
      kind: "youtube#video",
      videoId: "zOYD1dz67hA",
    },
    snippet: {
      publishedAt: "2023-04-28T04:00:07Z",
      channelId: "UCeYmRvccFXVts18eOBAhuGg",
      title: "Priyanka - Bad Bitches Don&#39;t Cry (Official Video) ft Ralph",
      description:
        "Two Bad Bitches take over the world, one NO at a time! It's a new Priyanka music era and the cinematic universe brings you PriFlix ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/zOYD1dz67hA/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/zOYD1dz67hA/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/zOYD1dz67hA/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "thequeenpriyanka",
      liveBroadcastContent: "none",
      publishTime: "2023-04-28T04:00:07Z",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "UcOygJUFcUW30brwCyOMR0vPubA",
    id: {
      kind: "youtube#video",
      videoId: "l4he5GlVodE",
    },
    snippet: {
      publishedAt: "2023-07-19T11:00:38Z",
      channelId: "UCPP3etACgdUWvizcES1dJ8Q",
      title:
        "मैं धोखेबाज़ SDM Jyoti Maurya नहीं हूं। Chattarpur की Viral पत्नी Priyanka | SDM wife affair news",
      description:
        "मैं SDM Jyoti Maurya नहीं हूं। अपने पति को नहीं छोड़ूगी | Chattarpur की Viral Priyanka ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/l4he5GlVodE/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/l4he5GlVodE/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/l4he5GlVodE/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "News18 India",
      liveBroadcastContent: "none",
      publishTime: "2023-07-19T11:00:38Z",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "tkNNDFUtwGacXOZIZzmBNiJ1TPs",
    id: {
      kind: "youtube#video",
      videoId: "GFrw11vay9k",
    },
    snippet: {
      publishedAt: "2023-05-24T20:03:02Z",
      channelId: "UCRXiA3h1no_PFkb1JCP0yMA",
      title: "Priyanka Chopra&#39;s Daughter Eats Just Like Mom",
      description:
        "Priyanka Chopra and Nick Jonas' daughter Malti Marie is an adventurous eater for someone her age. Watch Priyanka make an ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/GFrw11vay9k/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/GFrw11vay9k/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/GFrw11vay9k/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "Vogue",
      liveBroadcastContent: "none",
      publishTime: "2023-05-24T20:03:02Z",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "RIJkdO1lykbsU5Ya1o5MiRpsA4E",
    id: {
      kind: "youtube#video",
      videoId: "HfEWXXUOPZY",
    },
    snippet: {
      publishedAt: "2023-07-21T14:22:24Z",
      channelId: "UCc2qSJA_lzUxW3VNmg1BGKg",
      title:
        "Priyanka Gandhi LIVE: Madhya Pradesh के Gwalior से  Priyanka Gandhi का संबोधन | &#39;Jan Akrosh&#39; Rally",
      description:
        "Priyanka Gandhi LIVE: Madhya Pradesh के Gwalior से Priyanka Gandhi का संबोधन | 'Jan Akrosh' Rally ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/HfEWXXUOPZY/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/HfEWXXUOPZY/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/HfEWXXUOPZY/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "Amar Ujala MP-CG",
      liveBroadcastContent: "none",
      publishTime: "2023-07-21T14:22:24Z",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "nFeV38mtnunK2G1iufJC8knXfPg",
    id: {
      kind: "youtube#video",
      videoId: "ocQimS8zbdY",
    },
    snippet: {
      publishedAt: "2023-07-23T12:49:08Z",
      channelId: "UC0jyFivJDNZxVALeggQ6uWA",
      title:
        "#video Lone Par Laraki - Amit Parimal - लोन पर लड़की - Antra Singh Priyanka",
      description:
        "Lone Par Laraki - Amit Parimal - लोन पर लड़की - Antra Singh Priyanka Lone Par Laraki - Amit Parimal - लोन पर ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/ocQimS8zbdY/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/ocQimS8zbdY/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/ocQimS8zbdY/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "BC Music",
      liveBroadcastContent: "none",
      publishTime: "2023-07-23T12:49:08Z",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "xQq4yb57XH68-vgIHP4CI7Gal-I",
    id: {
      kind: "youtube#video",
      videoId: "_geXsxI7rMc",
    },
    snippet: {
      publishedAt: "2023-05-01T07:05:35Z",
      channelId: "UCKOk4G1by78cHmNcI2w45Rg",
      title: "Malti is a little traveler | Priyanka Chopra Jonas",
      description:
        "Priyanka Chopra Jonas parents were both in military that's why at the very young age she used to travels alot which happened the ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/_geXsxI7rMc/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/_geXsxI7rMc/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/_geXsxI7rMc/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "S.3.3.ñ",
      liveBroadcastContent: "none",
      publishTime: "2023-05-01T07:05:35Z",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "kr6EBmSdcYoGhelrYmEQTl_eHpI",
    id: {
      kind: "youtube#video",
      videoId: "emi6DnAotAE",
    },
    snippet: {
      publishedAt: "2023-01-20T17:00:05Z",
      channelId: "UCRXiA3h1no_PFkb1JCP0yMA",
      title:
        "Priyanka Chopra &amp; Nick Jonas: Nick Remembers EVERYTHING About Their First Date",
      description:
        "Watch Priyanka Chopra and Nick Jonas play the Newlywed Game, in which they answer questions about their relationship.",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/emi6DnAotAE/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/emi6DnAotAE/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/emi6DnAotAE/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "Vogue",
      liveBroadcastContent: "none",
      publishTime: "2023-01-20T17:00:05Z",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "P8WiCF2e5hf2SgzAn-9b6rWSm1c",
    id: {
      kind: "youtube#video",
      videoId: "OZ50G1nGJ3I",
    },
    snippet: {
      publishedAt: "2023-07-20T14:28:51Z",
      channelId: "UCU5eV0c0SE0TMXrV8P94jAQ",
      title: "Priceless Advice by Priyanka Chopra 🌟",
      description:
        "Let your light shine bright as you embrace these principles and embark on a remarkable transformational journey toward ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/OZ50G1nGJ3I/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/OZ50G1nGJ3I/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/OZ50G1nGJ3I/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "Learn with Jaspal",
      liveBroadcastContent: "none",
      publishTime: "2023-07-20T14:28:51Z",
    },
  },
];

export const comment_mock_data = [
  {
    kind: "youtube#commentThread",
    etag: "SuFq_DvwsKbSqGO9MBmWLptGNdg",
    id: "UgzTRgw5ef8xgJiu3q14AaABAg",
    snippet: {
      videoId: "mljj92tRwlk",
      topLevelComment: {
        kind: "youtube#comment",
        etag: "RSw81an3MLbV0ebiEJAfcw7m7vE",
        id: "UgzTRgw5ef8xgJiu3q14AaABAg",
        snippet: {
          videoId: "mljj92tRwlk",
          textDisplay:
            '𝑺𝒖𝒃𝒔𝒄𝒓𝒊𝒃𝒆 𝒕𝒐 𝑾𝒂𝒕𝒄𝒉 𝒕𝒉𝒆 𝑩𝑬𝑺𝑻 𝑶𝑭 𝑴𝑶𝑽𝑰𝑬𝑺 𝒉𝒆𝒓𝒆 : <a href="about:invalid#zCSafez"></a><a href="https://bit.ly/3q5xovm">https://bit.ly/3q5xovm</a>',
          textOriginal:
            "𝑺𝒖𝒃𝒔𝒄𝒓𝒊𝒃𝒆 𝒕𝒐 𝑾𝒂𝒕𝒄𝒉 𝒕𝒉𝒆 𝑩𝑬𝑺𝑻 𝑶𝑭 𝑴𝑶𝑽𝑰𝑬𝑺 𝒉𝒆𝒓𝒆 : https://bit.ly/3q5xovm",
          authorDisplayName: "Zee Studios",
          authorProfileImageUrl:
            "https://yt3.ggpht.com/PemRqSo-qpcCAiHi7ryXYF8Z_0zgrl1EiFb-bEBd4TQ4v3gEm5FdW8JiE_n0Qkx61uPKjfV8Hfw=s48-c-k-c0x00ffffff-no-rj",
          authorChannelUrl:
            "http://www.youtube.com/channel/UC3jMepkLKF8y4iiwWmAB3RA",
          authorChannelId: {
            value: "UC3jMepkLKF8y4iiwWmAB3RA",
          },
          canRate: true,
          viewerRating: "none",
          likeCount: 1275,
          publishedAt: "2023-07-27T04:57:47Z",
          updatedAt: "2023-07-27T04:57:47Z",
        },
      },
      canReply: true,
      totalReplyCount: 94,
      isPublic: true,
    },
    replies: {
      comments: [
        {
          kind: "youtube#comment",
          etag: "cc6syqeiMnBFaxs-gcClmoZlcws",
          id: "UgzTRgw5ef8xgJiu3q14AaABAg.9seYphj6xbM9sfQZqAIedF",
          snippet: {
            videoId: "mljj92tRwlk",
            textDisplay:
              '<a href="https://youtube.com/@Indiannatural671">https://youtube.com/@Indiannatural671</a>',
            textOriginal: "https://youtube.com/@Indiannatural671",
            parentId: "UgzTRgw5ef8xgJiu3q14AaABAg",
            authorDisplayName: "Patna Bihar #$$",
            authorProfileImageUrl:
              "https://yt3.ggpht.com/9qotGwFucpoVTGyoXm0TWpGq8VLxLhTnsFTXL_x5cFnHXV6L3gO9c7WcCKo78vsXZTIWWKw=s48-c-k-c0x00ffffff-no-rj",
            authorChannelUrl:
              "http://www.youtube.com/channel/UC3cLLJhcOviDa4bEGVC-JuA",
            authorChannelId: {
              value: "UC3cLLJhcOviDa4bEGVC-JuA",
            },
            canRate: true,
            viewerRating: "none",
            likeCount: 0,
            publishedAt: "2023-07-27T13:04:49Z",
            updatedAt: "2023-07-27T13:04:49Z",
          },
        },
        {
          kind: "youtube#comment",
          etag: "QQNeRmaR9VtcXbZOGBe8gWiUPCg",
          id: "UgzTRgw5ef8xgJiu3q14AaABAg.9seYphj6xbM9sfQNvEPUb8",
          snippet: {
            videoId: "mljj92tRwlk",
            textDisplay:
              '<a href="https://youtube.com/@Bhimwane">https://youtube.com/@Bhimwane</a>',
            textOriginal: "https://youtube.com/@Bhimwane",
            parentId: "UgzTRgw5ef8xgJiu3q14AaABAg",
            authorDisplayName: "BHIM ARMY  KA DIWANA💙",
            authorProfileImageUrl:
              "https://yt3.ggpht.com/TjUeg-Ir5BWdUHwLwljebLD_D9c4i6D_NFcrBCWAqnZEn4VzpbTUcBHBQ0qCkEKTP9NE8-kjHVU=s48-c-k-c0x00ffffff-no-rj",
            authorChannelUrl:
              "http://www.youtube.com/channel/UCs603uraRiETraAGYaNpt9Q",
            authorChannelId: {
              value: "UCs603uraRiETraAGYaNpt9Q",
            },
            canRate: true,
            viewerRating: "none",
            likeCount: 0,
            publishedAt: "2023-07-27T13:03:11Z",
            updatedAt: "2023-07-27T13:03:11Z",
          },
        },
        {
          kind: "youtube#comment",
          etag: "ZmVPu0v5aPYQ9Tnq-1ARFQSwwYQ",
          id: "UgzTRgw5ef8xgJiu3q14AaABAg.9seYphj6xbM9sfPvSZ8RF4",
          snippet: {
            videoId: "mljj92tRwlk",
            textDisplay:
              '​@Arif Shaikh<a href="https://youtube.com/shorts/X_Y5FMbTiso?feature=share">https://youtube.com/shorts/X_Y5FMbTiso?feature=share</a>',
            textOriginal:
              "​@Arif Shaikhhttps://youtube.com/shorts/X_Y5FMbTiso?feature=share",
            parentId: "UgzTRgw5ef8xgJiu3q14AaABAg",
            authorDisplayName: "pencil.sketch.artbook",
            authorProfileImageUrl:
              "https://yt3.ggpht.com/ZF4XsIqu9X3lFr5eQ8PU5xifXIjetZUOSXNXHrimVSgzz1JTgXlfFZHhJYYG2N9zd8y8PlEB=s48-c-k-c0x00ffffff-no-rj",
            authorChannelUrl:
              "http://www.youtube.com/channel/UC7n9sobGXeE-13KlJVsc-iQ",
            authorChannelId: {
              value: "UC7n9sobGXeE-13KlJVsc-iQ",
            },
            canRate: true,
            viewerRating: "none",
            likeCount: 0,
            publishedAt: "2023-07-27T12:59:10Z",
            updatedAt: "2023-07-27T12:59:10Z",
          },
        },
        {
          kind: "youtube#comment",
          etag: "q_7tdbYZ1tTVdsNMaOu4aFLsYFI",
          id: "UgzTRgw5ef8xgJiu3q14AaABAg.9seYphj6xbM9sfPnh_kH-f",
          snippet: {
            videoId: "mljj92tRwlk",
            textDisplay:
              '​@Virat.Takuli<a href="https://youtube.com/shorts/X_Y5FMbTiso?feature=share">https://youtube.com/shorts/X_Y5FMbTiso?feature=share</a>',
            textOriginal:
              "​@Virat.Takulihttps://youtube.com/shorts/X_Y5FMbTiso?feature=share",
            parentId: "UgzTRgw5ef8xgJiu3q14AaABAg",
            authorDisplayName: "pencil.sketch.artbook",
            authorProfileImageUrl:
              "https://yt3.ggpht.com/ZF4XsIqu9X3lFr5eQ8PU5xifXIjetZUOSXNXHrimVSgzz1JTgXlfFZHhJYYG2N9zd8y8PlEB=s48-c-k-c0x00ffffff-no-rj",
            authorChannelUrl:
              "http://www.youtube.com/channel/UC7n9sobGXeE-13KlJVsc-iQ",
            authorChannelId: {
              value: "UC7n9sobGXeE-13KlJVsc-iQ",
            },
            canRate: true,
            viewerRating: "none",
            likeCount: 0,
            publishedAt: "2023-07-27T12:58:06Z",
            updatedAt: "2023-07-27T12:58:06Z",
          },
        },
        {
          kind: "youtube#comment",
          etag: "GVYM4oEPcoB28i5bzOwfGwI-fjY",
          id: "UgzTRgw5ef8xgJiu3q14AaABAg.9seYphj6xbM9sfPmPt1X__",
          snippet: {
            videoId: "mljj92tRwlk",
            textDisplay:
              '​@sachin sino vlog<a href="https://youtube.com/shorts/X_Y5FMbTiso?feature=share">https://youtube.com/shorts/X_Y5FMbTiso?feature=share</a>',
            textOriginal:
              "​@sachin sino vloghttps://youtube.com/shorts/X_Y5FMbTiso?feature=share",
            parentId: "UgzTRgw5ef8xgJiu3q14AaABAg",
            authorDisplayName: "pencil.sketch.artbook",
            authorProfileImageUrl:
              "https://yt3.ggpht.com/ZF4XsIqu9X3lFr5eQ8PU5xifXIjetZUOSXNXHrimVSgzz1JTgXlfFZHhJYYG2N9zd8y8PlEB=s48-c-k-c0x00ffffff-no-rj",
            authorChannelUrl:
              "http://www.youtube.com/channel/UC7n9sobGXeE-13KlJVsc-iQ",
            authorChannelId: {
              value: "UC7n9sobGXeE-13KlJVsc-iQ",
            },
            canRate: true,
            viewerRating: "none",
            likeCount: 0,
            publishedAt: "2023-07-27T12:57:56Z",
            updatedAt: "2023-07-27T12:57:56Z",
          },
        },
      ],
    },
  },
  {
    kind: "youtube#commentThread",
    etag: "mGvaxwbvjTq252Wx9rQ1XSv3s1M",
    id: "UgyXB6Z-gAj_TYwejgF4AaABAg",
    snippet: {
      videoId: "mljj92tRwlk",
      topLevelComment: {
        kind: "youtube#comment",
        etag: "yDKrLoAg8LSxl68-4FpXziVTWvY",
        id: "UgyXB6Z-gAj_TYwejgF4AaABAg",
        snippet: {
          videoId: "mljj92tRwlk",
          textDisplay:
            "It&#39;s nostalgic to see Sunny ji and Ameesha ji together after long long time. Best wishes for Gadar2",
          textOriginal:
            "It's nostalgic to see Sunny ji and Ameesha ji together after long long time. Best wishes for Gadar2",
          authorDisplayName: "Bappy The Drifter",
          authorProfileImageUrl:
            "https://yt3.ggpht.com/ytc/AOPolaT9m1e5eQ5hcALC8ZbNqW5HgfNXOHd-_XIy_bKe=s48-c-k-c0x00ffffff-no-rj",
          authorChannelUrl:
            "http://www.youtube.com/channel/UC_Hj49W_j1Q7XpTr_1-Kj9Q",
          authorChannelId: {
            value: "UC_Hj49W_j1Q7XpTr_1-Kj9Q",
          },
          canRate: true,
          viewerRating: "none",
          likeCount: 0,
          publishedAt: "2023-07-27T13:09:38Z",
          updatedAt: "2023-07-27T13:09:38Z",
        },
      },
      canReply: true,
      totalReplyCount: 0,
      isPublic: true,
    },
  },
  {
    kind: "youtube#commentThread",
    etag: "loBYmbQfi6n5ATKHChc7A5veFX8",
    id: "UgylwEqNj5LUFhnp9KZ4AaABAg",
    snippet: {
      videoId: "mljj92tRwlk",
      topLevelComment: {
        kind: "youtube#comment",
        etag: "Ip53GCj1IPbRa1fEHoYTnFJPhDo",
        id: "UgylwEqNj5LUFhnp9KZ4AaABAg",
        snippet: {
          videoId: "mljj92tRwlk",
          textDisplay: "Jay shree ram",
          textOriginal: "Jay shree ram",
          authorDisplayName: "Gyan Ke Bhandar",
          authorProfileImageUrl:
            "https://yt3.ggpht.com/_MsQdVUAd91YFWiKgvAVL8gWnLMpFnyZkZvbZkPwSoE5bnV5qB6X-P9O9lBrtkxfL8J5aymmGQ=s48-c-k-c0x00ffffff-no-rj",
          authorChannelUrl:
            "http://www.youtube.com/channel/UC5q_iHbMM8pb83BnL7RtbLw",
          authorChannelId: {
            value: "UC5q_iHbMM8pb83BnL7RtbLw",
          },
          canRate: true,
          viewerRating: "none",
          likeCount: 0,
          publishedAt: "2023-07-27T13:09:34Z",
          updatedAt: "2023-07-27T13:09:34Z",
        },
      },
      canReply: true,
      totalReplyCount: 0,
      isPublic: true,
    },
  },
  {
    kind: "youtube#commentThread",
    etag: "gvSxgpdnkvVG9qKjJtkLtvx-2XY",
    id: "Ugyb--4OkEyFlLXJF9B4AaABAg",
    snippet: {
      videoId: "mljj92tRwlk",
      topLevelComment: {
        kind: "youtube#comment",
        etag: "sa9v6p3yrUlNQdeZf9Gf1gnJUx8",
        id: "Ugyb--4OkEyFlLXJF9B4AaABAg",
        snippet: {
          videoId: "mljj92tRwlk",
          textDisplay:
            "Handpump last me dikhaya..... Yaar jab bhi main handpump dekhta hu main bhi use ukhadhne ki koshish ek baar krta hu....😂😂😂",
          textOriginal:
            "Handpump last me dikhaya..... Yaar jab bhi main handpump dekhta hu main bhi use ukhadhne ki koshish ek baar krta hu....😂😂😂",
          authorDisplayName: "pink orchids",
          authorProfileImageUrl:
            "https://yt3.ggpht.com/ytc/AOPolaTRW0vjzQ6E0M2R5L-2rti4oQd-npkF9ZqFcA5EgompxRJMeaeLI00we-xgteaa=s48-c-k-c0x00ffffff-no-rj",
          authorChannelUrl:
            "http://www.youtube.com/channel/UC-HL44-H5zNuAxJ1FeRhe_A",
          authorChannelId: {
            value: "UC-HL44-H5zNuAxJ1FeRhe_A",
          },
          canRate: true,
          viewerRating: "none",
          likeCount: 0,
          publishedAt: "2023-07-27T13:09:28Z",
          updatedAt: "2023-07-27T13:09:28Z",
        },
      },
      canReply: true,
      totalReplyCount: 0,
      isPublic: true,
    },
  },
  {
    kind: "youtube#commentThread",
    etag: "3GGENq7PUfAzH08s2nRELd-XHNs",
    id: "Ugx3g_yyPXFIRafCtxt4AaABAg",
    snippet: {
      videoId: "mljj92tRwlk",
      topLevelComment: {
        kind: "youtube#comment",
        etag: "r9AiLhIcXlXOwM3syhUPLzPFQb0",
        id: "Ugx3g_yyPXFIRafCtxt4AaABAg",
        snippet: {
          videoId: "mljj92tRwlk",
          textDisplay: "Hindustan jindabad ❤❤❤❤❤❤❤❤❤",
          textOriginal: "Hindustan jindabad ❤❤❤❤❤❤❤❤❤",
          authorDisplayName: "Nitin kumar",
          authorProfileImageUrl:
            "https://yt3.ggpht.com/H6YlwS5LngsAZAZsglTSoHK-ZcNWjBtBKnl_BQC_tZWVM7a-eYLctwdZOI0wKWm3aKnBqVazgA=s48-c-k-c0x00ffffff-no-rj",
          authorChannelUrl:
            "http://www.youtube.com/channel/UCbFhCeTFurcuQVZqR2vYY5w",
          authorChannelId: {
            value: "UCbFhCeTFurcuQVZqR2vYY5w",
          },
          canRate: true,
          viewerRating: "none",
          likeCount: 0,
          publishedAt: "2023-07-27T13:09:21Z",
          updatedAt: "2023-07-27T13:09:21Z",
        },
      },
      canReply: true,
      totalReplyCount: 0,
      isPublic: true,
    },
  },
  {
    kind: "youtube#commentThread",
    etag: "6gkznDqer2j1ayKcq7T07WOLZqs",
    id: "UgzgaaU3GGK2Uimtb-p4AaABAg",
    snippet: {
      videoId: "mljj92tRwlk",
      topLevelComment: {
        kind: "youtube#comment",
        etag: "RcdiRwZo3qPYwswRNQlSZ_A0uz0",
        id: "UgzgaaU3GGK2Uimtb-p4AaABAg",
        snippet: {
          videoId: "mljj92tRwlk",
          textDisplay: "Laughing 😂 option ni he wrna world record banta",
          textOriginal: "Laughing 😂 option ni he wrna world record banta",
          authorDisplayName: "Rana Tayyab",
          authorProfileImageUrl:
            "https://yt3.ggpht.com/j1NISrTUuhppWCIA8Xs5afo0ck6g07lRqYyA61nxJzZgPb2cLsHCF8_mNffoKb2BYt2QrUjaBg=s48-c-k-c0x00ffffff-no-rj",
          authorChannelUrl:
            "http://www.youtube.com/channel/UC0kgC4j6WLJog4ZoISUNhrg",
          authorChannelId: {
            value: "UC0kgC4j6WLJog4ZoISUNhrg",
          },
          canRate: true,
          viewerRating: "none",
          likeCount: 0,
          publishedAt: "2023-07-27T13:09:20Z",
          updatedAt: "2023-07-27T13:09:20Z",
        },
      },
      canReply: true,
      totalReplyCount: 0,
      isPublic: true,
    },
  },
  {
    kind: "youtube#commentThread",
    etag: "_gCRCiH6-Nxni5NhwxxCo_XYA8Y",
    id: "Ugx9C_44YrTMfD1DzJ94AaABAg",
    snippet: {
      videoId: "mljj92tRwlk",
      topLevelComment: {
        kind: "youtube#comment",
        etag: "fk1sU6PtjA2rtg_rqBJSAHJA4Xs",
        id: "Ugx9C_44YrTMfD1DzJ94AaABAg",
        snippet: {
          videoId: "mljj92tRwlk",
          textDisplay:
            "Sunny paji be like - Mai to papa hu....iss duniya ka papa🔥🔥🤩",
          textOriginal:
            "Sunny paji be like - Mai to papa hu....iss duniya ka papa🔥🔥🤩",
          authorDisplayName: "Rohit Suman",
          authorProfileImageUrl:
            "https://yt3.ggpht.com/ytc/AOPolaQWH-iw1m35AXT67kNEd02BuFzsvBWdFIb3n1D47Q=s48-c-k-c0x00ffffff-no-rj",
          authorChannelUrl:
            "http://www.youtube.com/channel/UCS4KwUA4Wc1iYS1I0lQ5x8g",
          authorChannelId: {
            value: "UCS4KwUA4Wc1iYS1I0lQ5x8g",
          },
          canRate: true,
          viewerRating: "none",
          likeCount: 1,
          publishedAt: "2023-07-27T13:09:18Z",
          updatedAt: "2023-07-27T13:09:18Z",
        },
      },
      canReply: true,
      totalReplyCount: 0,
      isPublic: true,
    },
  },
  {
    kind: "youtube#commentThread",
    etag: "QxuCiZi_UrMeOMQQSCvP67y0Ss4",
    id: "UgxsduTCa1QMztYmDSx4AaABAg",
    snippet: {
      videoId: "mljj92tRwlk",
      topLevelComment: {
        kind: "youtube#comment",
        etag: "oVbM5xLt7ZAEXawQH10F4WUvdTo",
        id: "UgxsduTCa1QMztYmDSx4AaABAg",
        snippet: {
          videoId: "mljj92tRwlk",
          textDisplay:
            "As a tis jis Tarah se gadar2 ka trailer  26july Kargil Vijay divas pr launch hua kasam se rongte khde ho gye sunny da ki dhmakedaar action aur buland awaj sunkar❤ ab to bs 11 August 🎉",
          textOriginal:
            "As a tis jis Tarah se gadar2 ka trailer  26july Kargil Vijay divas pr launch hua kasam se rongte khde ho gye sunny da ki dhmakedaar action aur buland awaj sunkar❤ ab to bs 11 August 🎉",
          authorDisplayName: "BED_Student",
          authorProfileImageUrl:
            "https://yt3.ggpht.com/1va3bY0PYabNBGL5RPOSGJSOhweFTG7b2OPsSrfUuHg376WmxRXbpSHjJZXUZTvTfGz3QYyJ=s48-c-k-c0x00ffffff-no-rj",
          authorChannelUrl:
            "http://www.youtube.com/channel/UC1ReXM_n3RVzIzz_S4p-btQ",
          authorChannelId: {
            value: "UC1ReXM_n3RVzIzz_S4p-btQ",
          },
          canRate: true,
          viewerRating: "none",
          likeCount: 0,
          publishedAt: "2023-07-27T13:09:15Z",
          updatedAt: "2023-07-27T13:09:15Z",
        },
      },
      canReply: true,
      totalReplyCount: 0,
      isPublic: true,
    },
  },
  {
    kind: "youtube#commentThread",
    etag: "r87XcUf5BxE1a38RUJzzS887Pgs",
    id: "UgwpJVFy7rQ8SqlHg494AaABAg",
    snippet: {
      videoId: "mljj92tRwlk",
      topLevelComment: {
        kind: "youtube#comment",
        etag: "EA-b8gZxYcBxWJRaT9OotkZHa2A",
        id: "UgwpJVFy7rQ8SqlHg494AaABAg",
        snippet: {
          videoId: "mljj92tRwlk",
          textDisplay: "🎉🎉🎉",
          textOriginal: "🎉🎉🎉",
          authorDisplayName: "keshav gadhwal",
          authorProfileImageUrl:
            "https://yt3.ggpht.com/ytc/AOPolaR8WdviA_bq2OOWZHPg6DlP1uJSfuRhfDWc6jkoA3vWaxyHhrZEnq21ik_1Ct95=s48-c-k-c0x00ffffff-no-rj",
          authorChannelUrl:
            "http://www.youtube.com/channel/UCvRIBGYIwkxQTwpgqBwqPiw",
          authorChannelId: {
            value: "UCvRIBGYIwkxQTwpgqBwqPiw",
          },
          canRate: true,
          viewerRating: "none",
          likeCount: 0,
          publishedAt: "2023-07-27T13:09:02Z",
          updatedAt: "2023-07-27T13:09:02Z",
        },
      },
      canReply: true,
      totalReplyCount: 0,
      isPublic: true,
    },
  },
  {
    kind: "youtube#commentThread",
    etag: "Nm_urW4d4t400G-K58xa0laQRsY",
    id: "UgxZYX6A5vkY3ueTzSt4AaABAg",
    snippet: {
      videoId: "mljj92tRwlk",
      topLevelComment: {
        kind: "youtube#comment",
        etag: "ZTVfALJwp_Aa4Ug88FlSoRiQvkM",
        id: "UgxZYX6A5vkY3ueTzSt4AaABAg",
        snippet: {
          videoId: "mljj92tRwlk",
          textDisplay: "Badiya",
          textOriginal: "Badiya",
          authorDisplayName: "(KINg)zz",
          authorProfileImageUrl:
            "https://yt3.ggpht.com/yzybgIP52A5u0kKvQEvupMNTwYtA4RNrC8arwjbzV0zPd8m8GwJdr8CO7YbpObTTkJ1JevuKiuY=s48-c-k-c0x00ffffff-no-rj",
          authorChannelUrl:
            "http://www.youtube.com/channel/UC0FH-WUR6BlST7oz2de83iA",
          authorChannelId: {
            value: "UC0FH-WUR6BlST7oz2de83iA",
          },
          canRate: true,
          viewerRating: "none",
          likeCount: 0,
          publishedAt: "2023-07-27T13:09:01Z",
          updatedAt: "2023-07-27T13:09:01Z",
        },
      },
      canReply: true,
      totalReplyCount: 0,
      isPublic: true,
    },
  },
  {
    kind: "youtube#commentThread",
    etag: "vUxrTJQ3edunudWvXi0otHWnjEg",
    id: "Ugw-FEdVEOz6VsGwAGV4AaABAg",
    snippet: {
      videoId: "mljj92tRwlk",
      topLevelComment: {
        kind: "youtube#comment",
        etag: "_udLOb2-JTfmDIYhygfxBBPMjl0",
        id: "Ugw-FEdVEOz6VsGwAGV4AaABAg",
        snippet: {
          videoId: "mljj92tRwlk",
          textDisplay: "❤❤❤❤❤❤❤❤",
          textOriginal: "❤❤❤❤❤❤❤❤",
          authorDisplayName: "Nitin kumar",
          authorProfileImageUrl:
            "https://yt3.ggpht.com/H6YlwS5LngsAZAZsglTSoHK-ZcNWjBtBKnl_BQC_tZWVM7a-eYLctwdZOI0wKWm3aKnBqVazgA=s48-c-k-c0x00ffffff-no-rj",
          authorChannelUrl:
            "http://www.youtube.com/channel/UCbFhCeTFurcuQVZqR2vYY5w",
          authorChannelId: {
            value: "UCbFhCeTFurcuQVZqR2vYY5w",
          },
          canRate: true,
          viewerRating: "none",
          likeCount: 0,
          publishedAt: "2023-07-27T13:08:53Z",
          updatedAt: "2023-07-27T13:08:53Z",
        },
      },
      canReply: true,
      totalReplyCount: 0,
      isPublic: true,
    },
  },
  {
    kind: "youtube#commentThread",
    etag: "x-BxYj2ziyfLC0ZjpXfy3IOx68g",
    id: "Ugy_WeWarzhqqvRAeNJ4AaABAg",
    snippet: {
      videoId: "mljj92tRwlk",
      topLevelComment: {
        kind: "youtube#comment",
        etag: "ZgW3xf2Ux8hPbk-iulz5XljQN_g",
        id: "Ugy_WeWarzhqqvRAeNJ4AaABAg",
        snippet: {
          videoId: "mljj92tRwlk",
          textDisplay: "❤❤❤",
          textOriginal: "❤❤❤",
          authorDisplayName: "keshav gadhwal",
          authorProfileImageUrl:
            "https://yt3.ggpht.com/ytc/AOPolaR8WdviA_bq2OOWZHPg6DlP1uJSfuRhfDWc6jkoA3vWaxyHhrZEnq21ik_1Ct95=s48-c-k-c0x00ffffff-no-rj",
          authorChannelUrl:
            "http://www.youtube.com/channel/UCvRIBGYIwkxQTwpgqBwqPiw",
          authorChannelId: {
            value: "UCvRIBGYIwkxQTwpgqBwqPiw",
          },
          canRate: true,
          viewerRating: "none",
          likeCount: 0,
          publishedAt: "2023-07-27T13:08:52Z",
          updatedAt: "2023-07-27T13:08:52Z",
        },
      },
      canReply: true,
      totalReplyCount: 0,
      isPublic: true,
    },
  },
  {
    kind: "youtube#commentThread",
    etag: "baZ-_s8wrvzJgMRGkaKQoIPWpr8",
    id: "Ugwk6L8oBrUhhNl3amB4AaABAg",
    snippet: {
      videoId: "mljj92tRwlk",
      topLevelComment: {
        kind: "youtube#comment",
        etag: "Wki3KYZh_M4PmWQNCD8_lUoFAsM",
        id: "Ugwk6L8oBrUhhNl3amB4AaABAg",
        snippet: {
          videoId: "mljj92tRwlk",
          textDisplay: "Pump bol Raha hai... ukhar mat ukhar mat😅",
          textOriginal: "Pump bol Raha hai... ukhar mat ukhar mat😅",
          authorDisplayName: "FreezeHour",
          authorProfileImageUrl:
            "https://yt3.ggpht.com/THk-O4zJFl21zhMT4vdHAxa9sMVprzRJ10hl6zqgFe2VdwcHm5lEIqSRscpQt1bnLqMbdQUIsQ=s48-c-k-c0x00ffffff-no-rj",
          authorChannelUrl:
            "http://www.youtube.com/channel/UC8h5i6V_M3We_mGM4fPgKMg",
          authorChannelId: {
            value: "UC8h5i6V_M3We_mGM4fPgKMg",
          },
          canRate: true,
          viewerRating: "none",
          likeCount: 0,
          publishedAt: "2023-07-27T13:08:42Z",
          updatedAt: "2023-07-27T13:08:42Z",
        },
      },
      canReply: true,
      totalReplyCount: 0,
      isPublic: true,
    },
  },
  {
    kind: "youtube#commentThread",
    etag: "tl8nrzm4YghSzb6-eEQ8bj0EEyk",
    id: "Ugxy6OhJ3SYiNMtjdi14AaABAg",
    snippet: {
      videoId: "mljj92tRwlk",
      topLevelComment: {
        kind: "youtube#comment",
        etag: "2RYodl1vz23qaVbhuWeb-3iWYYI",
        id: "Ugxy6OhJ3SYiNMtjdi14AaABAg",
        snippet: {
          videoId: "mljj92tRwlk",
          textDisplay:
            "Tara Singh Back With A Bang<br>That Handpump Scene Was A Goosebumps.....",
          textOriginal:
            "Tara Singh Back With A Bang\nThat Handpump Scene Was A Goosebumps.....",
          authorDisplayName: "Mumtaz Alam",
          authorProfileImageUrl:
            "https://yt3.ggpht.com/ytc/AOPolaRjzHmnoulj9zUJAv4GU3cA3XmHoxd0BofYvlufng=s48-c-k-c0x00ffffff-no-rj",
          authorChannelUrl:
            "http://www.youtube.com/channel/UC51nUf_rfJ2uGnavyjscNbw",
          authorChannelId: {
            value: "UC51nUf_rfJ2uGnavyjscNbw",
          },
          canRate: true,
          viewerRating: "none",
          likeCount: 0,
          publishedAt: "2023-07-27T13:08:28Z",
          updatedAt: "2023-07-27T13:08:28Z",
        },
      },
      canReply: true,
      totalReplyCount: 0,
      isPublic: true,
    },
  },
  {
    kind: "youtube#commentThread",
    etag: "IVosnZaJt8x4aFu2h3yjYY3r2Jc",
    id: "UgxTP6wYZkZJbKED_uB4AaABAg",
    snippet: {
      videoId: "mljj92tRwlk",
      topLevelComment: {
        kind: "youtube#comment",
        etag: "vAFsq_elaPEHz4wJTHw7EOr_zVc",
        id: "UgxTP6wYZkZJbKED_uB4AaABAg",
        snippet: {
          videoId: "mljj92tRwlk",
          textDisplay: "SUNNY PAJI TUSI TO CHHA GAYE....",
          textOriginal: "SUNNY PAJI TUSI TO CHHA GAYE....",
          authorDisplayName: "Sky.. No Limits",
          authorProfileImageUrl:
            "https://yt3.ggpht.com/0J9-wwPMSU_DpOlRW7crWixaLc01e_Hpep2YliPn1HNl8OpyR-luIukycWdgD-KhzmufKDbbKkA=s48-c-k-c0x00ffffff-no-rj",
          authorChannelUrl:
            "http://www.youtube.com/channel/UCkFVbevyykdkUsJ1KpvXDDw",
          authorChannelId: {
            value: "UCkFVbevyykdkUsJ1KpvXDDw",
          },
          canRate: true,
          viewerRating: "none",
          likeCount: 0,
          publishedAt: "2023-07-27T13:08:22Z",
          updatedAt: "2023-07-27T13:08:22Z",
        },
      },
      canReply: true,
      totalReplyCount: 0,
      isPublic: true,
    },
  },
  {
    kind: "youtube#commentThread",
    etag: "lMDcweNoUzhMdIxDQV6HThSsZ1k",
    id: "UgwM4k1xvm4LArE0hj94AaABAg",
    snippet: {
      videoId: "mljj92tRwlk",
      topLevelComment: {
        kind: "youtube#comment",
        etag: "Iww6_rsVxon_AwM6NEPfdCmJBmU",
        id: "UgwM4k1xvm4LArE0hj94AaABAg",
        snippet: {
          videoId: "mljj92tRwlk",
          textDisplay: "Blockbuster hogi",
          textOriginal: "Blockbuster hogi",
          authorDisplayName: "Bananas ki galiya",
          authorProfileImageUrl:
            "https://yt3.ggpht.com/3G3JM5WHIERM3pHo2z176w_7RizyerN2ayLMVFOSobAFeLIEROL91aSklZn-08yjhNmTOP_lLA=s48-c-k-c0x00ffffff-no-rj",
          authorChannelUrl:
            "http://www.youtube.com/channel/UCbmTHVjr82pr9Ux8IVIKwlQ",
          authorChannelId: {
            value: "UCbmTHVjr82pr9Ux8IVIKwlQ",
          },
          canRate: true,
          viewerRating: "none",
          likeCount: 0,
          publishedAt: "2023-07-27T13:08:19Z",
          updatedAt: "2023-07-27T13:08:19Z",
        },
      },
      canReply: true,
      totalReplyCount: 0,
      isPublic: true,
    },
  },
  {
    kind: "youtube#commentThread",
    etag: "XKrnxFOicWodMQJiBjzVhT8mgzE",
    id: "UgweknFRGaTLRE-TB7p4AaABAg",
    snippet: {
      videoId: "mljj92tRwlk",
      topLevelComment: {
        kind: "youtube#comment",
        etag: "rCclunLNTWUnEde0_wEKZeli3s4",
        id: "UgweknFRGaTLRE-TB7p4AaABAg",
        snippet: {
          videoId: "mljj92tRwlk",
          textDisplay: "Bakwas 😢",
          textOriginal: "Bakwas 😢",
          authorDisplayName: "Anshu Kumari",
          authorProfileImageUrl:
            "https://yt3.ggpht.com/ytc/AOPolaSnjNfuSuWiWe6xinAtchfMP7FI9ppWsf6-ds_Ed678to0WBwgG3s6QMKlmrkZu=s48-c-k-c0x00ffffff-no-rj",
          authorChannelUrl:
            "http://www.youtube.com/channel/UCvPBBFkTjuN1Jlx6CWq_9JQ",
          authorChannelId: {
            value: "UCvPBBFkTjuN1Jlx6CWq_9JQ",
          },
          canRate: true,
          viewerRating: "none",
          likeCount: 0,
          publishedAt: "2023-07-27T13:08:18Z",
          updatedAt: "2023-07-27T13:08:18Z",
        },
      },
      canReply: true,
      totalReplyCount: 0,
      isPublic: true,
    },
  },
  {
    kind: "youtube#commentThread",
    etag: "nyMlizr4-HaH6qCsN6RfrL-MlO0",
    id: "Ugy_hamouMZq1LKRQKJ4AaABAg",
    snippet: {
      videoId: "mljj92tRwlk",
      topLevelComment: {
        kind: "youtube#comment",
        etag: "mQdFJ37eOv9dicIoWY3NcPoBpyc",
        id: "Ugy_hamouMZq1LKRQKJ4AaABAg",
        snippet: {
          videoId: "mljj92tRwlk",
          textDisplay: "Jay hind🇮🇳",
          textOriginal: "Jay hind🇮🇳",
          authorDisplayName: "Romiyo Raj",
          authorProfileImageUrl:
            "https://yt3.ggpht.com/rRTSNj8snr2v9EwH3sP2x5lqfVlxXMM_PlD5aZ6A5Z4bcZ7aEIU0lWLlYZe9rIaoRZ7MirR4cjg=s48-c-k-c0x00ffffff-no-rj",
          authorChannelUrl:
            "http://www.youtube.com/channel/UC7JIMwJQ5haH0soye8So6Vg",
          authorChannelId: {
            value: "UC7JIMwJQ5haH0soye8So6Vg",
          },
          canRate: true,
          viewerRating: "none",
          likeCount: 1,
          publishedAt: "2023-07-27T13:08:10Z",
          updatedAt: "2023-07-27T13:08:10Z",
        },
      },
      canReply: true,
      totalReplyCount: 0,
      isPublic: true,
    },
  },
  {
    kind: "youtube#commentThread",
    etag: "QIFSYFNiN903oTPEDx1sLSZURbU",
    id: "UgywGIl_36S8xeF6CyF4AaABAg",
    snippet: {
      videoId: "mljj92tRwlk",
      topLevelComment: {
        kind: "youtube#comment",
        etag: "htUGmK8crpliueJj9rQOlySNFQ4",
        id: "UgywGIl_36S8xeF6CyF4AaABAg",
        snippet: {
          videoId: "mljj92tRwlk",
          textDisplay: "❤❤❤❤❤❤❤❤",
          textOriginal: "❤❤❤❤❤❤❤❤",
          authorDisplayName: "PANKAJ SHARMA",
          authorProfileImageUrl:
            "https://yt3.ggpht.com/ytc/AOPolaQNh1wr1CgzBW1XV9mzR9_suDz-U2Vr3X0YsMpFEg=s48-c-k-c0x00ffffff-no-rj",
          authorChannelUrl:
            "http://www.youtube.com/channel/UCiimF3TjnoVChk_WTLb9NfQ",
          authorChannelId: {
            value: "UCiimF3TjnoVChk_WTLb9NfQ",
          },
          canRate: true,
          viewerRating: "none",
          likeCount: 0,
          publishedAt: "2023-07-27T13:08:06Z",
          updatedAt: "2023-07-27T13:08:06Z",
        },
      },
      canReply: true,
      totalReplyCount: 0,
      isPublic: true,
    },
  },
  {
    kind: "youtube#commentThread",
    etag: "j-4ggInZP1sd56UGfJMQhU97wGo",
    id: "UgxxgF11oDz8_uX5M6Z4AaABAg",
    snippet: {
      videoId: "mljj92tRwlk",
      topLevelComment: {
        kind: "youtube#comment",
        etag: "ShZMivNcDKiwA7gDnlypmkaowcA",
        id: "UgxxgF11oDz8_uX5M6Z4AaABAg",
        snippet: {
          videoId: "mljj92tRwlk",
          textDisplay: "Hand pump dikh gaya",
          textOriginal: "Hand pump dikh gaya",
          authorDisplayName: "YAMI HOTEL & RESTAURANT",
          authorProfileImageUrl:
            "https://yt3.ggpht.com/A4HG9guTs0sNQoy0Wq_RLzgWBwUerTJBn0g-NlosLgxKxCXBKc-_gpZHxH1XkB3Ua_Mq2gYnXw=s48-c-k-c0x00ffffff-no-rj",
          authorChannelUrl:
            "http://www.youtube.com/channel/UC2U6dAAhTu79IC0kLtz_KqQ",
          authorChannelId: {
            value: "UC2U6dAAhTu79IC0kLtz_KqQ",
          },
          canRate: true,
          viewerRating: "none",
          likeCount: 0,
          publishedAt: "2023-07-27T13:07:55Z",
          updatedAt: "2023-07-27T13:07:55Z",
        },
      },
      canReply: true,
      totalReplyCount: 0,
      isPublic: true,
    },
  },
];
