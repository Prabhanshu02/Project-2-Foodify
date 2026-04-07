import React from "react";
import ReactDOM from "react-dom/client";
const Header = () => {
    return (
        <div className="header">
        <div className="logo-container">
            <img src="https://d3jbu7vaxvlagf.cloudfront.net/small/v2/category_media/image_17682845626234.jpeg" className="logo"/>
        </div>
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
            </ul>
        </div>
        </div>
    );
};

const RestaurantCard = (props) => {
    const {resData} = props;
    const{name, cuisines, avgRatingString, sla} = resData.info;
    return (
        <div className="restaurant-card">
            <img className="restaurant-logo" alt="res-logo" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+resData.info.cloudinaryImageId}/>
            <h3>{name}</h3> 
            <h4>{cuisines}</h4>
            <h4>{avgRatingString}Stars</h4>
            <h4>{sla.slaString}</h4>

        </div>
    );
};

const restaurantList = [
                                    {
                                        "info": 
                                        {
                                            "id": "79748",
                                            "name": "Domino's Pizza",
                                            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2026/3/27/3721139b-a8d3-4fe6-ba52-dd8113465369_79748.JPG",
                                            "locality": "New Market Main Road",
                                            "areaName": "Malviya Nagar",
                                            "costForTwo": "₹400 for two",
                                            "cuisines": [
                                                "Pizzas",
                                                "Italian",
                                                "Pastas",
                                                "Desserts"
                                            ],
                                            "avgRating": 4.3,
                                            "parentId": "2456",
                                            "avgRatingString": "4.3",
                                            "totalRatingsString": "3.1K+",
                                            "sla": {
                                                "deliveryTime": 30,
                                                "lastMileTravel": 3,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "25-30 mins",
                                                "lastMileTravelString": "3.0 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2026-04-05 23:59:00",
                                                "opened": true
                                            },
                                            "badges": {
                                                "imageBadges": [
                                                    {
                                                        "imageId": "brand_cards/Badges%202026/72_Best%20in%20Pizza2026.png",
                                                        "description": "Best in Pizza"
                                                    }
                                                ]
                                            },
                                            "isOpen": true,
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {
                                                        "badgeObject": [
                                                            {
                                                                "attributes": {
                                                                    "description": "Best in Pizza",
                                                                    "imageId": "brand_cards/Badges%202026/72_Best%20in%20Pizza2026.png",
                                                                    "theme": "light"
                                                                }
                                                            }
                                                        ]
                                                    },
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "aggregatedDiscountInfoV3": {
                                                "header": "ITEMS",
                                                "subHeader": "AT ₹49"
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "--"
                                                }
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                        },
                                        "analytics": {
                                            "context": "seo-data-a9e45341-b0f4-437e-9a34-5d0253fe48c2"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/city/bhopal/dominos-pizza-new-market-main-road-malviya-nagar-rest79748",
                                            "type": "WEBLINK"
                                        }
                                    },
                                    {
                                        "info": {
                                            "id": "695745",
                                            "name": "Pizza Hut",
                                            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2026/2/12/646c488b-92bf-4696-9052-36a4765d6f2c_695745.JPG",
                                            "locality": "Housing Board Colony",
                                            "areaName": "Bairagarh",
                                            "costForTwo": "₹350 for two",
                                            "cuisines": [
                                                "Pizzas"
                                            ],
                                            "avgRating": 4.3,
                                            "parentId": "721",
                                            "avgRatingString": "4.3",
                                            "totalRatingsString": "2.8K+",
                                            "sla": {
                                                "deliveryTime": 35,
                                                "lastMileTravel": 4.7,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "30-35 mins",
                                                "lastMileTravelString": "4.7 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2026-04-05 23:59:00",
                                                "opened": true
                                            },
                                            "badges": {
                                                "imageBadges": [
                                                    {
                                                        "imageId": "brand_cards/Badges%202026/72_Best%20in%20Pizza2026.png",
                                                        "description": "Best in Pizza"
                                                    }
                                                ]
                                            },
                                            "isOpen": true,
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {
                                                        "badgeObject": [
                                                            {
                                                                "attributes": {
                                                                    "description": "Best in Pizza",
                                                                    "imageId": "brand_cards/Badges%202026/72_Best%20in%20Pizza2026.png",
                                                                    "theme": "light"
                                                                }
                                                            }
                                                        ]
                                                    },
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "aggregatedDiscountInfoV3": {
                                                "header": "60% OFF",
                                                "subHeader": "UPTO ₹110"
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "--"
                                                }
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                        },
                                        "analytics": {
                                            "context": "seo-data-a9e45341-b0f4-437e-9a34-5d0253fe48c2"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/city/bhopal/pizza-hut-housing-board-colony-bairagarh-rest695745",
                                            "type": "WEBLINK"
                                        }
                                    },
                                    {
                                        "info": {
                                            "id": "508470",
                                            "name": "KFC",
                                            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2026/1/8/064596a3-b828-4e71-9ec3-7a03b4d4c7b0_508470.JPG",
                                            "locality": "Housing board Colony",
                                            "areaName": "Kohefiza",
                                            "costForTwo": "₹400 for two",
                                            "cuisines": [
                                                "Burgers",
                                                "Fast Food",
                                                "Rolls & Wraps"
                                            ],
                                            "avgRating": 4.3,
                                            "parentId": "547",
                                            "avgRatingString": "4.3",
                                            "totalRatingsString": "2.1K+",
                                            "sla": {
                                                "deliveryTime": 29,
                                                "lastMileTravel": 4.6,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "25-30 mins",
                                                "lastMileTravelString": "4.6 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2026-04-05 23:59:00",
                                                "opened": true
                                            },
                                            "badges": {
                                                "imageBadges": [
                                                    {
                                                        "imageId": "brand_cards/Badges%202026/41_Best%20in%20Burger2026.png",
                                                        "description": "Best in Burger"
                                                    }
                                                ]
                                            },
                                            "isOpen": true,
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {
                                                        "badgeObject": [
                                                            {
                                                                "attributes": {
                                                                    "description": "Best in Burger",
                                                                    "imageId": "brand_cards/Badges%202026/41_Best%20in%20Burger2026.png",
                                                                    "theme": "light"
                                                                }
                                                            }
                                                        ]
                                                    },
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "aggregatedDiscountInfoV3": {
                                                "header": "50% OFF",
                                                "discountTag": "FLAT DEAL"
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "--"
                                                }
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                        },
                                        "analytics": {
                                            "context": "seo-data-a9e45341-b0f4-437e-9a34-5d0253fe48c2"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/city/bhopal/kfc-housing-board-colony-kohefiza-rest508470",
                                            "type": "WEBLINK"
                                        }
                                    },
                                    {
                                        "info": {
                                            "id": "295098",
                                            "name": "Barbeque Nation",
                                            "cloudinaryImageId": "g0ze1qyvzsg4zrxwibzr",
                                            "locality": "Bawadiya Kalan",
                                            "areaName": "Gulmohar Colony",
                                            "costForTwo": "₹600 for two",
                                            "cuisines": [
                                                "North Indian",
                                                "Barbecue",
                                                "Kebabs",
                                                "Biryani",
                                                "Street Food",
                                                "Snacks"
                                            ],
                                            "avgRating": 4.1,
                                            "parentId": "2438",
                                            "avgRatingString": "4.1",
                                            "totalRatingsString": "2.2K+",
                                            "sla": {
                                                "deliveryTime": 43,
                                                "lastMileTravel": 12,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "40-45 mins",
                                                "lastMileTravelString": "12.0 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2026-04-06 01:00:00",
                                                "opened": true
                                            },
                                            "badges": {
                                                "imageBadges": [
                                                    {
                                                        "imageId": "newg.png",
                                                        "description": "Gourmet"
                                                    }
                                                ]
                                            },
                                            "isOpen": true,
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {
                                                        "badgeObject": [
                                                            {
                                                                "attributes": {
                                                                    "description": "Gourmet",
                                                                    "imageId": "newg.png",
                                                                    "theme": "light"
                                                                }
                                                            }
                                                        ]
                                                    },
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "aggregatedDiscountInfoV3": {
                                                "header": "ITEMS",
                                                "subHeader": "AT ₹149"
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "--"
                                                }
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                        },
                                        "analytics": {
                                            "context": "seo-data-a9e45341-b0f4-437e-9a34-5d0253fe48c2"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/city/bhopal/barbeque-nation-bawadiya-kalan-gulmohar-colony-rest295098",
                                            "type": "WEBLINK"
                                        }
                                    },
                                    {
                                        "info": {
                                            "id": "235820",
                                            "name": "Biryani By Kilo",
                                            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/4/121f0f28-aff2-4fd5-9c21-d0b4a6fc75e5_235820.JPG",
                                            "locality": "MP Nagar",
                                            "areaName": "Maharana Pratap Nagar",
                                            "costForTwo": "₹499 for two",
                                            "cuisines": [
                                                "Biryani",
                                                "Hyderabadi",
                                                "North Indian",
                                                "Kebabs",
                                                "Mughlai",
                                                "Desserts"
                                            ],
                                            "avgRating": 4.4,
                                            "parentId": "130",
                                            "avgRatingString": "4.4",
                                            "totalRatingsString": "7.8K+",
                                            "sla": {
                                                "deliveryTime": 42,
                                                "lastMileTravel": 5,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "40-45 mins",
                                                "lastMileTravelString": "5.0 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2026-04-05 23:59:00",
                                                "opened": true
                                            },
                                            "badges": {
                                                "imageBadges": [
                                                    {
                                                        "imageId": "brand_cards/Badges%202026/39_Best%20in%20Biryani2026.png",
                                                        "description": "Best in Biryani"
                                                    },
                                                    {
                                                        "imageId": "newg.png",
                                                        "description": "Gourmet"
                                                    }
                                                ]
                                            },
                                            "isOpen": true,
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {
                                                        "badgeObject": [
                                                            {
                                                                "attributes": {
                                                                    "description": "Best in Biryani",
                                                                    "imageId": "brand_cards/Badges%202026/39_Best%20in%20Biryani2026.png",
                                                                    "theme": "light"
                                                                }
                                                            },
                                                            {
                                                                "attributes": {
                                                                    "description": "Gourmet",
                                                                    "imageId": "newg.png",
                                                                    "theme": "light"
                                                                }
                                                            }
                                                        ]
                                                    },
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "aggregatedDiscountInfoV3": {
                                                "header": "65% OFF",
                                                "subHeader": "UPTO ₹126"
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "3.8",
                                                    "ratingCount": "293"
                                                },
                                                "source": "GOOGLE",
                                                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                        },
                                        "analytics": {
                                            "context": "seo-data-a9e45341-b0f4-437e-9a34-5d0253fe48c2"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/city/bhopal/biryani-by-kilo-mp-nagar-maharana-pratap-nagar-rest235820",
                                            "type": "WEBLINK"
                                        }
                                    },
                                    {
                                        "info": {
                                            "id": "753901",
                                            "name": "Wow! Momo",
                                            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/9/45769347-7fb2-41cc-aef5-8c53d24ac876_753901.JPG",
                                            "locality": "New Market",
                                            "areaName": "MALVIYA NAGAR LINK ROAD",
                                            "costForTwo": "₹300 for two",
                                            "cuisines": [
                                                "Momos",
                                                "Chinese",
                                                "fastfood",
                                                "Asian",
                                                "Beverages"
                                            ],
                                            "avgRating": 4.2,
                                            "parentId": "1776",
                                            "avgRatingString": "4.2",
                                            "totalRatingsString": "830",
                                            "sla": {
                                                "deliveryTime": 23,
                                                "lastMileTravel": 3.6,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "20-25 mins",
                                                "lastMileTravelString": "3.6 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2026-04-06 02:00:00",
                                                "opened": true
                                            },
                                            "badges": {
                                                "imageBadges": [
                                                    {
                                                        "imageId": "brand_cards/Badges%202026/66_Best%20in%20Momo2026.png",
                                                        "description": "Best in Momo"
                                                    }
                                                ]
                                            },
                                            "isOpen": true,
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {
                                                        "badgeObject": [
                                                            {
                                                                "attributes": {
                                                                    "description": "Best in Momo",
                                                                    "imageId": "brand_cards/Badges%202026/66_Best%20in%20Momo2026.png",
                                                                    "theme": "light"
                                                                }
                                                            }
                                                        ]
                                                    },
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "aggregatedDiscountInfoV3": {
                                                "header": "65% OFF",
                                                "subHeader": "UPTO ₹126"
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "--"
                                                }
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                        },
                                        "analytics": {
                                            "context": "seo-data-a9e45341-b0f4-437e-9a34-5d0253fe48c2"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/city/bhopal/wow-momo-new-market-malviya-nagar-link-road-rest753901",
                                            "type": "WEBLINK"
                                        }
                                    },
                                    {
                                        "info": {
                                            "id": "84400",
                                            "name": "Burger King",
                                            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/18/7c067f62-8938-4abb-8937-272b77002c29_84400.jpg",
                                            "locality": "Maharana Pratap Nagar",
                                            "areaName": "Db City Mall",
                                            "costForTwo": "₹350 for two",
                                            "cuisines": [
                                                "Burgers",
                                                "American"
                                            ],
                                            "avgRating": 4.2,
                                            "parentId": "166",
                                            "avgRatingString": "4.2",
                                            "totalRatingsString": "26K+",
                                            "sla": {
                                                "deliveryTime": 50,
                                                "lastMileTravel": 4.9,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "50-60 mins",
                                                "lastMileTravelString": "4.9 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2026-04-06 04:00:00",
                                                "opened": true
                                            },
                                            "badges": {
                                                "imageBadges": [
                                                    {
                                                        "imageId": "brand_cards/Badges%202026/41_Best%20in%20Burger2026.png",
                                                        "description": "Best in Burger"
                                                    }
                                                ]
                                            },
                                            "isOpen": true,
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {
                                                        "badgeObject": [
                                                            {
                                                                "attributes": {
                                                                    "description": "Best in Burger",
                                                                    "imageId": "brand_cards/Badges%202026/41_Best%20in%20Burger2026.png",
                                                                    "theme": "light"
                                                                }
                                                            }
                                                        ]
                                                    },
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "aggregatedDiscountInfoV3": {
                                                "header": "ITEMS",
                                                "subHeader": "AT ₹59"
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "4.3",
                                                    "ratingCount": "3.2K+"
                                                },
                                                "source": "GOOGLE",
                                                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                        },
                                        "analytics": {
                                            "context": "seo-data-a9e45341-b0f4-437e-9a34-5d0253fe48c2"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/city/bhopal/burger-king-maharana-pratap-nagar-db-city-mall-rest84400",
                                            "type": "WEBLINK"
                                        }
                                    },
                                    {
                                        "info": {
                                            "id": "499782",
                                            "name": "NIC Ice Creams",
                                            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2026/2/4/bbc5cc04-c9f5-42a8-9297-6a954e731987_499782.JPG",
                                            "locality": "Mansarovar complex",
                                            "areaName": "Maharana Pratap Nagar",
                                            "costForTwo": "₹120 for two",
                                            "cuisines": [
                                                "Ice Cream",
                                                "Desserts"
                                            ],
                                            "avgRating": 4.6,
                                            "veg": true,
                                            "parentId": "6249",
                                            "avgRatingString": "4.6",
                                            "totalRatingsString": "2.3K+",
                                            "sla": {
                                                "deliveryTime": 26,
                                                "lastMileTravel": 6.6,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "25-30 mins",
                                                "lastMileTravelString": "6.6 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2026-04-06 00:00:00",
                                                "opened": true
                                            },
                                            "badges": {
                                                "imageBadges": [
                                                    {
                                                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                                                        "description": "pureveg"
                                                    }
                                                ]
                                            },
                                            "isOpen": true,
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {
                                                        "badgeObject": [
                                                            {
                                                                "attributes": {
                                                                    "description": "pureveg",
                                                                    "imageId": "v1695133679/badges/Pure_Veg111.png",
                                                                    "theme": "light"
                                                                }
                                                            }
                                                        ]
                                                    },
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "aggregatedDiscountInfoV3": {
                                                "header": "ITEMS",
                                                "subHeader": "AT ₹43"
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "--"
                                                }
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                        },
                                        "analytics": {
                                            "context": "seo-data-a9e45341-b0f4-437e-9a34-5d0253fe48c2"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/city/bhopal/nic-ice-creams-mansarovar-complex-maharana-pratap-nagar-rest499782",
                                            "type": "WEBLINK"
                                        }
                                    },
                                    {
                                        "info": {
                                            "id": "762372",
                                            "name": "Goila Butter Chicken",
                                            "cloudinaryImageId": "2acf0681a049dea7dac7271cf7ccc560",
                                            "locality": "Maharana Pratap Nagar",
                                            "areaName": "Kishan Arcade",
                                            "costForTwo": "₹600 for two",
                                            "cuisines": [
                                                "North Indian",
                                                "Biryani",
                                                "Kebabs",
                                                "Desserts"
                                            ],
                                            "avgRating": 4.1,
                                            "parentId": "322587",
                                            "avgRatingString": "4.1",
                                            "totalRatingsString": "871",
                                            "sla": {
                                                "deliveryTime": 36,
                                                "lastMileTravel": 5,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "35-40 mins",
                                                "lastMileTravelString": "5.0 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2026-04-05 23:59:00",
                                                "opened": true
                                            },
                                            "badges": {
                                                "imageBadges": [
                                                    {
                                                        "imageId": "newg.png",
                                                        "description": "Gourmet"
                                                    }
                                                ]
                                            },
                                            "isOpen": true,
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {
                                                        "badgeObject": [
                                                            {
                                                                "attributes": {
                                                                    "description": "Gourmet",
                                                                    "imageId": "newg.png",
                                                                    "theme": "light"
                                                                }
                                                            }
                                                        ]
                                                    },
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "aggregatedDiscountInfoV3": {
                                                "header": "65% OFF",
                                                "subHeader": "UPTO ₹126"
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "2.1",
                                                    "ratingCount": "10"
                                                },
                                                "source": "GOOGLE",
                                                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                        },
                                        "analytics": {
                                            "context": "seo-data-a9e45341-b0f4-437e-9a34-5d0253fe48c2"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/city/bhopal/goila-butter-chicken-maharana-pratap-nagar-kishan-arcade-rest762372",
                                            "type": "WEBLINK"
                                        }
                                    },
                                    {
                                        "info": {
                                            "id": "324628",
                                            "name": "Sharma Bhojnalaya - Bus Stand Jawahar Chowk",
                                            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/26/18a701e6-58d5-47ea-b38b-3126edcedf50_324628.jpg",
                                            "locality": "Jawahar Chowk",
                                            "areaName": "Jawahar Chowk",
                                            "costForTwo": "₹200 for two",
                                            "cuisines": [
                                                "Thalis",
                                                "North Indian",
                                                "Fast Food",
                                                "Chinese",
                                                "Indian",
                                                "dessert",
                                                "Beverages"
                                            ],
                                            "avgRating": 4.2,
                                            "veg": true,
                                            "parentId": "469434",
                                            "avgRatingString": "4.2",
                                            "totalRatingsString": "5.3K+",
                                            "sla": {
                                                "deliveryTime": 25,
                                                "lastMileTravel": 3.9,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "25-30 mins",
                                                "lastMileTravelString": "3.9 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2026-04-05 23:45:00",
                                                "opened": true
                                            },
                                            "badges": {
                                                "imageBadges": [
                                                    {
                                                        "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
                                                        "description": "OnlyOnSwiggy"
                                                    },
                                                    {
                                                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                                                        "description": "pureveg"
                                                    }
                                                ]
                                            },
                                            "isOpen": true,
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {
                                                        "badgeObject": [
                                                            {
                                                                "attributes": {
                                                                    "description": "OnlyOnSwiggy",
                                                                    "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
                                                                    "theme": "light"
                                                                }
                                                            },
                                                            {
                                                                "attributes": {
                                                                    "description": "pureveg",
                                                                    "imageId": "v1695133679/badges/Pure_Veg111.png",
                                                                    "theme": "light"
                                                                }
                                                            }
                                                        ]
                                                    },
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "aggregatedDiscountInfoV3": {
                                                "header": "65% OFF",
                                                "subHeader": "UPTO ₹120"
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "--"
                                                }
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                        },
                                        "analytics": {
                                            "context": "seo-data-a9e45341-b0f4-437e-9a34-5d0253fe48c2"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/city/bhopal/sharma-bhojnalaya-bus-stand-jawahar-chowk-jawahar-chowk-rest324628",
                                            "type": "WEBLINK"
                                        }
                                    },
                                    {
                                        "info": {
                                            "id": "499783",
                                            "name": "Grameen Kulfi",
                                            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/11/17/63e9519a-322f-437c-877c-782f92fb3443_499783.JPG",
                                            "locality": "Mansarovar complex",
                                            "areaName": "Malviya Nagar",
                                            "costForTwo": "₹120 for two",
                                            "cuisines": [
                                                "Ice Cream",
                                                "Desserts"
                                            ],
                                            "avgRating": 4.8,
                                            "veg": true,
                                            "parentId": "12175",
                                            "avgRatingString": "4.8",
                                            "totalRatingsString": "678",
                                            "sla": {
                                                "deliveryTime": 28,
                                                "lastMileTravel": 6.6,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "25-30 mins",
                                                "lastMileTravelString": "6.6 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2026-04-06 00:00:00",
                                                "opened": true
                                            },
                                            "badges": {
                                                "imageBadges": [
                                                    {
                                                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                                                        "description": "pureveg"
                                                    }
                                                ]
                                            },
                                            "isOpen": true,
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {
                                                        "badgeObject": [
                                                            {
                                                                "attributes": {
                                                                    "description": "pureveg",
                                                                    "imageId": "v1695133679/badges/Pure_Veg111.png",
                                                                    "theme": "light"
                                                                }
                                                            }
                                                        ]
                                                    },
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "aggregatedDiscountInfoV3": {
                                                "header": "ITEMS",
                                                "subHeader": "AT ₹33"
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "--"
                                                }
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                        },
                                        "analytics": {
                                            "context": "seo-data-a9e45341-b0f4-437e-9a34-5d0253fe48c2"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/city/bhopal/grameen-kulfi-mansarovar-complex-malviya-nagar-rest499783",
                                            "type": "WEBLINK"
                                        }
                                    },
                                    {
                                        "info": {
                                            "id": "78537",
                                            "name": "Sagar Gaire",
                                            "cloudinaryImageId": "pvzeuuzpybyjnt1cxpz4",
                                            "locality": "Chetak Bridge",
                                            "areaName": "ISBT",
                                            "costForTwo": "₹300 for two",
                                            "cuisines": [
                                                "South Indian",
                                                "Chinese"
                                            ],
                                            "avgRating": 4.3,
                                            "veg": true,
                                            "parentId": "7049",
                                            "avgRatingString": "4.3",
                                            "totalRatingsString": "10K+",
                                            "sla": {
                                                "deliveryTime": 33,
                                                "lastMileTravel": 6.1,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "30-35 mins",
                                                "lastMileTravelString": "6.1 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2026-04-05 23:45:00",
                                                "opened": true
                                            },
                                            "badges": {
                                                "imageBadges": [
                                                    {
                                                        "imageId": "brand_cards/Badges%202026/32_Best%20in%20South%20Indian2026.png",
                                                        "description": "Best in South Indian"
                                                    },
                                                    {
                                                        "imageId": "brand_cards/Badges%202026/40_Best%20in%20Bolt2026.png",
                                                        "description": "Best in Bolt"
                                                    },
                                                    {
                                                        "imageId": "brand_cards/Badges%202026/46_Best%20in%20Chinese2026.png",
                                                        "description": "Best in Chinese"
                                                    },
                                                    {
                                                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                                                        "description": "pureveg"
                                                    }
                                                ]
                                            },
                                            "isOpen": true,
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {
                                                        "badgeObject": [
                                                            {
                                                                "attributes": {
                                                                    "description": "Best in South Indian",
                                                                    "imageId": "brand_cards/Badges%202026/32_Best%20in%20South%20Indian2026.png",
                                                                    "theme": "light"
                                                                }
                                                            },
                                                            {
                                                                "attributes": {
                                                                    "description": "Best in Bolt",
                                                                    "imageId": "brand_cards/Badges%202026/40_Best%20in%20Bolt2026.png",
                                                                    "theme": "light"
                                                                }
                                                            },
                                                            {
                                                                "attributes": {
                                                                    "description": "Best in Chinese",
                                                                    "imageId": "brand_cards/Badges%202026/46_Best%20in%20Chinese2026.png",
                                                                    "theme": "light"
                                                                }
                                                            },
                                                            {
                                                                "attributes": {
                                                                    "description": "pureveg",
                                                                    "imageId": "v1695133679/badges/Pure_Veg111.png",
                                                                    "theme": "light"
                                                                }
                                                            }
                                                        ]
                                                    },
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "aggregatedDiscountInfoV3": {
                                                "header": "ITEMS",
                                                "subHeader": "AT ₹57"
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "--"
                                                }
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                        },
                                        "analytics": {
                                            "context": "seo-data-a9e45341-b0f4-437e-9a34-5d0253fe48c2"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/city/bhopal/sagar-gaire-chetak-bridge-isbt-rest78537",
                                            "type": "WEBLINK"
                                        }
                                    },
                                    {
                                        "info": {
                                            "id": "109939",
                                            "name": "Zam Zam Fast Food",
                                            "cloudinaryImageId": "kuisp5xx9tcutesp33yf",
                                            "locality": "Peer Gate Area",
                                            "areaName": "Hamidia Road",
                                            "costForTwo": "₹250 for two",
                                            "cuisines": [
                                                "Mughlai",
                                                "Indian",
                                                "Chinese",
                                                "Fast Food"
                                            ],
                                            "avgRating": 4.2,
                                            "parentId": "17529",
                                            "avgRatingString": "4.2",
                                            "totalRatingsString": "50K+",
                                            "sla": {
                                                "deliveryTime": 30,
                                                "lastMileTravel": 2.1,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "25-30 mins",
                                                "lastMileTravelString": "2.1 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2026-04-06 01:00:00",
                                                "opened": true
                                            },
                                            "badges": {},
                                            "isOpen": true,
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {},
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "aggregatedDiscountInfoV3": {
                                                "header": "₹125 OFF",
                                                "subHeader": "ABOVE ₹199",
                                                "discountTag": "FLAT DEAL"
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "4.1",
                                                    "ratingCount": "16K+"
                                                },
                                                "source": "GOOGLE",
                                                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                        },
                                        "analytics": {
                                            "context": "seo-data-a9e45341-b0f4-437e-9a34-5d0253fe48c2"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/city/bhopal/zam-zam-fast-food-peer-gate-area-hamidia-road-rest109939",
                                            "type": "WEBLINK"
                                        }
                                    },
                                    {
                                        "info": {
                                            "id": "638996",
                                            "name": "Baskin Robbins - Ice Cream Desserts",
                                            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/12/24/2c893d26-6bb4-406a-87c8-2fefb66e8d37_638996.jpg",
                                            "locality": "Sector B",
                                            "areaName": "Indrapuri",
                                            "costForTwo": "₹250 for two",
                                            "cuisines": [
                                                "Desserts",
                                                "Ice Cream"
                                            ],
                                            "avgRating": 4.2,
                                            "veg": true,
                                            "parentId": "5588",
                                            "avgRatingString": "4.2",
                                            "totalRatingsString": "164",
                                            "sla": {
                                                "deliveryTime": 29,
                                                "lastMileTravel": 6.6,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "25-30 mins",
                                                "lastMileTravelString": "6.6 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2026-04-06 00:30:00",
                                                "opened": true
                                            },
                                            "badges": {
                                                "imageBadges": [
                                                    {
                                                        "imageId": "brand_cards/Badges%202026/56_Best%20in%20Ice%20Cream2026.png",
                                                        "description": "Best in Ice Cream"
                                                    },
                                                    {
                                                        "imageId": "Ratnesh_Badges/Rx_Awards_2025/Icecream.png",
                                                        "description": "Delivery!"
                                                    },
                                                    {
                                                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                                                        "description": "pureveg"
                                                    }
                                                ]
                                            },
                                            "isOpen": true,
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {
                                                        "badgeObject": [
                                                            {
                                                                "attributes": {
                                                                    "description": "Best in Ice Cream",
                                                                    "imageId": "brand_cards/Badges%202026/56_Best%20in%20Ice%20Cream2026.png",
                                                                    "theme": "light"
                                                                }
                                                            },
                                                            {
                                                                "attributes": {
                                                                    "description": "Delivery!",
                                                                    "imageId": "Ratnesh_Badges/Rx_Awards_2025/Icecream.png",
                                                                    "theme": "light"
                                                                }
                                                            },
                                                            {
                                                                "attributes": {
                                                                    "description": "pureveg",
                                                                    "imageId": "v1695133679/badges/Pure_Veg111.png",
                                                                    "theme": "light"
                                                                }
                                                            }
                                                        ]
                                                    },
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "aggregatedDiscountInfoV3": {
                                                "header": "ITEMS",
                                                "subHeader": "AT ₹51"
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "--"
                                                }
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                        },
                                        "analytics": {
                                            "context": "seo-data-a9e45341-b0f4-437e-9a34-5d0253fe48c2"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/city/bhopal/baskin-robbins-ice-cream-desserts-sector-b-indrapuri-rest638996",
                                            "type": "WEBLINK"
                                        }
                                    },
                                    {
                                        "info": {
                                            "id": "312786",
                                            "name": "Ganesham Fast Food",
                                            "cloudinaryImageId": "ybbwkjnc5kdc2kihwsxo",
                                            "areaName": "New Market",
                                            "costForTwo": "₹250 for two",
                                            "cuisines": [
                                                "Chinese",
                                                "South Indian",
                                                "American",
                                                "Italian",
                                                "Pizzas",
                                                "Pastas",
                                                "Fast Food",
                                                "Snacks",
                                                "Beverages"
                                            ],
                                            "avgRating": 4.2,
                                            "veg": true,
                                            "parentId": "7247",
                                            "avgRatingString": "4.2",
                                            "totalRatingsString": "3.8K+",
                                            "sla": {
                                                "deliveryTime": 20,
                                                "lastMileTravel": 3,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "20-25 mins",
                                                "lastMileTravelString": "3.0 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2026-04-05 23:59:00",
                                                "opened": true
                                            },
                                            "badges": {
                                                "imageBadges": [
                                                    {
                                                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                                                        "description": "pureveg"
                                                    }
                                                ]
                                            },
                                            "isOpen": true,
                                            "aggregatedDiscountInfoV2": {},
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {
                                                        "badgeObject": [
                                                            {
                                                                "attributes": {
                                                                    "description": "pureveg",
                                                                    "imageId": "v1695133679/badges/Pure_Veg111.png",
                                                                    "theme": "light"
                                                                }
                                                            }
                                                        ]
                                                    },
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "--"
                                                }
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                        },
                                        "analytics": {
                                            "context": "seo-data-a9e45341-b0f4-437e-9a34-5d0253fe48c2"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/city/bhopal/ganesham-fast-food-new-market-rest312786",
                                            "type": "WEBLINK"
                                        }
                                    },
                                    {
                                        "info": {
                                            "id": "557933",
                                            "name": "Bake N Shake",
                                            "cloudinaryImageId": "ogej1e2xxku5bhfafdcw",
                                            "locality": "TT Nagar",
                                            "areaName": "TT Nagar",
                                            "costForTwo": "₹350 for two",
                                            "cuisines": [
                                                "Beverages",
                                                "Snacks",
                                                "Chinese",
                                                "Fast Food",
                                                "Bakery",
                                                "Desserts",
                                                "Continental",
                                                "Pizzas",
                                                "Pastas"
                                            ],
                                            "avgRating": 4.6,
                                            "parentId": "7053",
                                            "avgRatingString": "4.6",
                                            "totalRatingsString": "1.3K+",
                                            "sla": {
                                                "deliveryTime": 21,
                                                "lastMileTravel": 3,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "20-25 mins",
                                                "lastMileTravelString": "3.0 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2026-04-05 23:59:00",
                                                "opened": true
                                            },
                                            "badges": {
                                                "imageBadges": [
                                                    {
                                                        "imageId": "brand_cards/Badges%202026/43_Best%20in%20Cakes%20&%20Desserts2026.png",
                                                        "description": "Best in Cakes & Desserts"
                                                    },
                                                    {
                                                        "imageId": "newg.png",
                                                        "description": "Gourmet"
                                                    }
                                                ]
                                            },
                                            "isOpen": true,
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {
                                                        "badgeObject": [
                                                            {
                                                                "attributes": {
                                                                    "description": "Best in Cakes & Desserts",
                                                                    "imageId": "brand_cards/Badges%202026/43_Best%20in%20Cakes%20&%20Desserts2026.png",
                                                                    "theme": "light"
                                                                }
                                                            },
                                                            {
                                                                "attributes": {
                                                                    "description": "Gourmet",
                                                                    "imageId": "newg.png",
                                                                    "theme": "light"
                                                                }
                                                            }
                                                        ]
                                                    },
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "aggregatedDiscountInfoV3": {
                                                "header": "20% OFF",
                                                "subHeader": "UPTO ₹50"
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "4.3",
                                                    "ratingCount": "3.0K+"
                                                },
                                                "source": "GOOGLE",
                                                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                        },
                                        "analytics": {
                                            "context": "seo-data-a9e45341-b0f4-437e-9a34-5d0253fe48c2"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/city/bhopal/bake-n-shake-tt-nagar-rest557933",
                                            "type": "WEBLINK"
                                        }
                                    },
                                    {
                                        "info": {
                                            "id": "639487",
                                            "name": "Dum Safar Biryani",
                                            "cloudinaryImageId": "1154cffac2453eb0bf7fdda7e5ea1659",
                                            "locality": "Bawadia kalan",
                                            "areaName": "GULOHAR",
                                            "costForTwo": "₹500 for two",
                                            "cuisines": [
                                                "Biryani",
                                                "Hyderabadi",
                                                "Kebabs",
                                                "North Indian",
                                                "barbeque"
                                            ],
                                            "avgRating": 4.3,
                                            "parentId": "351013",
                                            "avgRatingString": "4.3",
                                            "totalRatingsString": "1.6K+",
                                            "sla": {
                                                "deliveryTime": 42,
                                                "lastMileTravel": 12,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "40-45 mins",
                                                "lastMileTravelString": "12.0 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2026-04-06 01:00:00",
                                                "opened": true
                                            },
                                            "badges": {},
                                            "isOpen": true,
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {},
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "aggregatedDiscountInfoV3": {
                                                "header": "ITEMS",
                                                "subHeader": "AT ₹99"
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "--"
                                                }
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                        },
                                        "analytics": {
                                            "context": "seo-data-a9e45341-b0f4-437e-9a34-5d0253fe48c2"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/city/bhopal/dum-safar-biryani-bawadia-kalan-gulohar-rest639487",
                                            "type": "WEBLINK"
                                        }
                                    },
                                    {
                                        "info": {
                                            "id": "76940",
                                            "name": "Anjani Bhojnalay",
                                            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/30/90e9cfa1-424f-4879-bf20-072ca9dafccc_76940 (2).jpg",
                                            "locality": "Maharana Pratap Nagar",
                                            "areaName": "Maharana Pratap Nagar",
                                            "costForTwo": "₹250 for two",
                                            "cuisines": [
                                                "Thalis",
                                                "Indian",
                                                "Fast Food",
                                                "Chinese"
                                            ],
                                            "avgRating": 4.1,
                                            "veg": true,
                                            "parentId": "33607",
                                            "avgRatingString": "4.1",
                                            "totalRatingsString": "14K+",
                                            "sla": {
                                                "deliveryTime": 30,
                                                "lastMileTravel": 5,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "30-40 mins",
                                                "lastMileTravelString": "5.0 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2026-04-05 23:59:00",
                                                "opened": true
                                            },
                                            "badges": {
                                                "imageBadges": [
                                                    {
                                                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                                                        "description": "pureveg"
                                                    }
                                                ]
                                            },
                                            "isOpen": true,
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {
                                                        "badgeObject": [
                                                            {
                                                                "attributes": {
                                                                    "description": "pureveg",
                                                                    "imageId": "v1695133679/badges/Pure_Veg111.png",
                                                                    "theme": "light"
                                                                }
                                                            }
                                                        ]
                                                    },
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "aggregatedDiscountInfoV3": {
                                                "header": "65% OFF",
                                                "subHeader": "UPTO ₹120"
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "3.8",
                                                    "ratingCount": "981"
                                                },
                                                "source": "GOOGLE",
                                                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                        },
                                        "analytics": {
                                            "context": "seo-data-a9e45341-b0f4-437e-9a34-5d0253fe48c2"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/city/bhopal/anjani-bhojnalay-maharana-pratap-nagar-rest76940",
                                            "type": "WEBLINK"
                                        }
                                    },
                                    {
                                        "info": {
                                            "id": "76690",
                                            "name": "Hakeem (Mp Nagar)",
                                            "cloudinaryImageId": "8f17e6d31baa77c53d9476511f86fc24",
                                            "areaName": "MP Nagar",
                                            "costForTwo": "₹300 for two",
                                            "cuisines": [
                                                "Mughlai",
                                                "North Indian",
                                                "Biryani",
                                                "Indian"
                                            ],
                                            "avgRating": 4.2,
                                            "parentId": "471507",
                                            "avgRatingString": "4.2",
                                            "totalRatingsString": "4.7K+",
                                            "sla": {
                                                "deliveryTime": 35,
                                                "lastMileTravel": 5.7,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "30-40 mins",
                                                "lastMileTravelString": "5.7 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2026-04-05 23:59:00",
                                                "opened": true
                                            },
                                            "badges": {},
                                            "isOpen": true,
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {},
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "aggregatedDiscountInfoV3": {
                                                "header": "₹125 OFF",
                                                "subHeader": "ABOVE ₹299",
                                                "discountTag": "FLAT DEAL"
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "3.9",
                                                    "ratingCount": "5.0K+"
                                                },
                                                "source": "GOOGLE",
                                                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                        },
                                        "analytics": {
                                            "context": "seo-data-a9e45341-b0f4-437e-9a34-5d0253fe48c2"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/city/bhopal/hakeem-mp-nagar-mp-nagar-rest76690",
                                            "type": "WEBLINK"
                                        }
                                    },
                                    {
                                        "info": {
                                            "id": "79599",
                                            "name": "Sharma & Vishnu Fast Food - Platinum Plaza",
                                            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/2/17/f30a346e-5ff6-47a1-8c3a-b3271164863a_79599.jpg",
                                            "locality": "TT Nagar",
                                            "areaName": "TT Nagar",
                                            "costForTwo": "₹300 for two",
                                            "cuisines": [
                                                "Chinese",
                                                "South Indian",
                                                "Snacks",
                                                "Fast Food",
                                                "Beverages",
                                                "Pastas",
                                                "Pizzas",
                                                "Thalis"
                                            ],
                                            "avgRating": 4.4,
                                            "veg": true,
                                            "parentId": "599684",
                                            "avgRatingString": "4.4",
                                            "totalRatingsString": "8.6K+",
                                            "sla": {
                                                "deliveryTime": 27,
                                                "lastMileTravel": 4.3,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "25-30 mins",
                                                "lastMileTravelString": "4.3 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2026-04-06 00:00:00",
                                                "opened": true
                                            },
                                            "badges": {
                                                "imageBadges": [
                                                    {
                                                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                                                        "description": "pureveg"
                                                    }
                                                ]
                                            },
                                            "isOpen": true,
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {
                                                        "badgeObject": [
                                                            {
                                                                "attributes": {
                                                                    "description": "pureveg",
                                                                    "imageId": "v1695133679/badges/Pure_Veg111.png",
                                                                    "theme": "light"
                                                                }
                                                            }
                                                        ]
                                                    },
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "aggregatedDiscountInfoV3": {
                                                "header": "ITEMS",
                                                "subHeader": "AT ₹34"
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "4.2",
                                                    "ratingCount": "2.4K+"
                                                },
                                                "source": "GOOGLE",
                                                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                        },
                                        "analytics": {
                                            "context": "seo-data-a9e45341-b0f4-437e-9a34-5d0253fe48c2"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/city/bhopal/sharma-and-vishnu-fast-food-platinum-plaza-tt-nagar-rest79599",
                                            "type": "WEBLINK"
                                        }
                                    }
                                ]
const Body = () => {
    return (
        <div className="body">
            <div className="search-container">Search</div>
             <div className="restaurant-container">
                {restaurantList.map((res) => (
                <RestaurantCard key={res.info.id} resData={res}/>
                ))}
            </div> 
        </div>
); 
};


const AppLayout = () => {
    return  <div className="app">
        <Header/> 
        <Body/>
    </div>
};
 const root = ReactDOM.createRoot(document.getElementById("root"));
 root.render(<AppLayout/>);