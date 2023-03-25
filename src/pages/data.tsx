import a1 from "../assets/arts/animeScreen/a1.png";
import a2 from "../assets/arts/animeScreen/a2.png";
import a3 from "../assets/arts/animeScreen/a3.png";

import c1 from "../assets/arts/colorBlock/c1.png";
import c2 from "../assets/arts/colorBlock/c2.png";
import c3 from "../assets/arts/colorBlock/c3.png";

import d1 from "../assets/arts/digitalSketch/d1.png";
import d2 from "../assets/arts/digitalSketch/d2.png";
import d3 from "../assets/arts/digitalSketch/d3.png";

import f1 from "../assets/arts/fullPainting/f1.png";
import f2 from "../assets/arts/fullPainting/f2.png";
import f3 from "../assets/arts/fullPainting/f3.png";

import m1 from "../assets/arts/mangaPanel/m1.png";
import m2 from "../assets/arts/mangaPanel/m2.png";
import m3 from "../assets/arts/mangaPanel/m3.png";

import t1 from "../assets/arts/TraditionalInked/t1.jpg";
import t2 from "../assets/arts/TraditionalInked/t2.jpg";
import t3 from "../assets/arts/TraditionalInked/t3.jpg";

import bg1 from "../assets/bgs/bg1.png";
import bg2 from "../assets/bgs/bg2.png";
import bg3 from "../assets/bgs/bg3.png";
import bg4 from "../assets/bgs/bg4.png";
import bg5 from "../assets/bgs/bg5.jpg";
import bg6 from "../assets/bgs/bg6.png";

export enum PageType {
    Home = "0",
    Details = "1",
    ToS = "2",
    About = "3"
};

export enum PaintingType {
    Full = 0,
    Anime = 1,
    Manga = 2,
    Block = 3,
    Inked = 4,
    Sketch = 5,
};

export const FULL_PAINTING_DETAIL = [
    ["Value:", "5.000.000 Gil"],
    ["Average Time:", "3 Weeks"],
    ["Dimensions:", "1500px 1500px 600dpi png"],
    ["Background Option:", "Yes"]
];
export const ANIME_SCREEN_DETAIL = [
    ["Value:", "3.000.000 Gil"],
    ["Average Time:", "2 Weeks"],
    ["Dimensions:", "1500px 1500px 600dpi png"],
    ["Background Option:", "Yes"]
];
export const MANGA_PANEL_DETAIL = [
    ["Value:", "2.000.000 Gil"],
    ["Average Time:", "1.5 Week"],
    ["Dimensions:", "1500px 1500px 600dpi png"],
    ["Background Option:", "Yes"]
];

export const COLOR_BLOCK_DETAIL = [
    ["Value:", "700.000 Gil"],
    ["Average Time:", "5 days"],
    ["Dimensions:", "1500px 1500px 600dpi png"],
    ["Background Option:", "No"]
];

export const TRADITIONAL_INKED_DETAIL = [
    ["Value:", "500.000 Gil"],
    ["Average Time:", "2 days"],
    ["Dimensions:", "960px x 1280px jpg"],
    ["Background Option:", "Yes"]
];

export const DIGITAL_SKETCH_DETAIL = [
    ["Value:", "200.000 Gil"],
    ["Average Time:", "3 days"],
    ["Dimensions:", "1500px 1500px 600dpi png"],
    ["Background Option:", "No"]
];

export const ART_CATEGORY = [
    FULL_PAINTING_DETAIL,
    ANIME_SCREEN_DETAIL,
    MANGA_PANEL_DETAIL,
    COLOR_BLOCK_DETAIL,
    TRADITIONAL_INKED_DETAIL,
    DIGITAL_SKETCH_DETAIL
];

export const FULL_PAINTING_SLIDES = [ f1, f2, f3 ];
export const ANIME_SCREEN_SLIDES = [ a1, a2, a3 ];
export const MANGA_PANEL_SLIDES = [ m1, m2, m3 ];
export const COLOR_BLOCK_SLIDES = [ c1, c2, c3 ];
export const TRADITIONAL_INKED_SLIDES = [ t1, t2, t3 ];
export const DIGITAL_SKETCH_SLIDES = [ d1, d2, d3 ];

export const ART_LIST = [
    FULL_PAINTING_SLIDES,
    ANIME_SCREEN_SLIDES,
    MANGA_PANEL_SLIDES,
    COLOR_BLOCK_SLIDES,
    TRADITIONAL_INKED_SLIDES,
    DIGITAL_SKETCH_SLIDES
];

export const THEME_BACKGROUNDS = [ bg1, bg2, bg3, bg4, bg5, bg6 ];