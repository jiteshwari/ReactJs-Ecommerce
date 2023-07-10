import { AiOutlineMobile, AiFillGift } from "react-icons/ai";
import { FaMapMarkerAlt } from "react-icons/fa";
import { BiHelpCircle } from "react-icons/bi";
import images from "./utils/images";

export const NavTopData = [
    { icon: <AiOutlineMobile size = {20} />, text: "Get App" },
    { icon: <FaMapMarkerAlt size = {18} />, text: "Store & Events"},
    { icon: <AiFillGift size = {20} />, text: "Gift Card" },
    { icon: <BiHelpCircle size = {20} />, text: "Help"}
];

export const ProductTypesData = [
    {
        name: "Blush",
        image: images.blush,
        product_type: "blush"
    },
    {
        name: "Bronzer",
        image: images.bronzers,
        product_type: "bronzer"
    }, 
    {
        name: "Eyebrow",
        image: images.eyebrow,
        product_type: "eyebrow"
    },
    {
        name: "Eyeliner",
        image: images.eyeliners,
        product_type: "eyeliner"
    },
    {
        name: "Eye shadow",
        image: images.eyeshadows,
        product_type: "eyeshadow"
    },
    {
        name: "Foundation",
        image: images.foundation,
        product_type: "foundation"
    },
    {
        name: "Lip liner",
        image: images.lipliners,
        product_type: "lip_liner"
    },
    {
        name: "Lipstick",
        image: images.lipsticks,
        product_type: "lipstick"
    },
    {
        name: "MascaraNail",
        image: images.mascara,
        product_type: "mascara"
    },
    {
        name: "Polish",
        image: images.nailpolish,
        product_type: "polish"
    }
];

export const categoryData = [
    { id: 1, name: "Powder", url_name: "powder" },
    { id: 2, name: "Cream", url_name: "cream" },
    { id: 3, name: "Pencil", url_name: "pencil" },
    { id: 4, name: "Gel", url_name: "gel" },
    { id: 5, name: "Liquid", url_name: "liquid" },
    { id: 6, name: "Palette", url_name: "palette" },
    { id: 7, name: "Mineral", url_name: "mineral" },
    { id: 8, name: "Highlighter", url_name: "highlighter" },
    { id: 9, name: "Lipstick", url_name: "lipstick" },
    { id: 10, name: "Lip Gloss", url_name: "lip_gloss" },
    { id: 11, name: "Contour", url_name: "contour" },
    { id: 12, name: "Concealer", url_name: "concealer"}
]

export const blogsData = [
    {
        id: 1,
        image: images.blog_img_1,
        title: "LOOKFANTASTIC THE BOX: MARCH EDITION",
        text: "Take your regime to new heights and experiment with 6 beauty discoveries from empowering brands, such as NEOM and Moroccanoil, that’ll leave you feeling limitless.",
    },
    {
        id: 2,
        image: images.blog_img_2,
        title: "BRAND OF THE MONTH: COLOR WOW",
        text: "Get the WOW factor and explore innovative formulas handpicked by Color Wow’s founder, Gail Federici, empowering you to achieve your best hair yet."
    },
    {
        id: 3,
        image: images.blog_img_3,
        title: "MAISION MARGIELA",
        text: "Discover the new and exclusive Sailing Day range from Maison Margiela today at LOOKFANTASTIC!"
    },
    {
        id: 4,
        image: images.blog_img_4,
        title: "BY TERRY",
        text: "Encourage the illusion of a wide-awake complexion with the new By Terry’s Hyaluronic serum range."
    }
]

export const SliderData = [
    images.slider_img_1,
    images.slider_img_2,
    images.slider_img_3
];