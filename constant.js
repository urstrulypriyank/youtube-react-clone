// API URL
export const YT_MOST_POPULAR_API =
  " https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=50&key=";
export const YT_SEARCH_SUGGESTION_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const YT_SEARCH_API =
  "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25";

// CONSTANT VALUE
export const SIDEBAR_WIDTH_REM = "13rem";

// Functional constant
export const fetchData = async (url, Setter) => {
  const data = await fetch(url);
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
