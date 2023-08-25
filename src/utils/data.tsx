import a1 from "/arts/animeScreen/a1.png";
import a2 from "/arts/animeScreen/a2.png";
import a3 from "/arts/animeScreen/a3.png";
import a4 from "/arts/animeScreen/a4.png";
import a5 from "/arts/animeScreen/a5.png";
import a6 from "/arts/animeScreen/a6.png";

import c1 from "/arts/colorBlock/c1.png";
import c2 from "/arts/colorBlock/c2.png";
import c3 from "/arts/colorBlock/c3.png";
import c4 from "/arts/colorBlock/c4.png";
import c5 from "/arts/colorBlock/c5.png";

import d1 from "/arts/digitalSketch/d1.png";
import d2 from "/arts/digitalSketch/d2.png";
import d3 from "/arts/digitalSketch/d3.png";
import d4 from "/arts/digitalSketch/d4.png";

import f1 from "/arts/fullPainting/f1.png";
import f2 from "/arts/fullPainting/f2.png";
import f3 from "/arts/fullPainting/f3.png";
import f4 from "/arts/fullPainting/f4.png";
import f5 from "/arts/fullPainting/f5.png";
import f6 from "/arts/fullPainting/f6.png";
import f7 from "/arts/fullPainting/f7.png";
import f8 from "/arts/fullPainting/f8.png";
import f9 from "/arts/fullPainting/f9.png";
import f10 from "/arts/fullPainting/f10.png";
import f11 from "/arts/fullPainting/f11.png";

import m1 from "/arts/mangaPanel/m1.png";
import m2 from "/arts/mangaPanel/m2.png";
import m3 from "/arts/mangaPanel/m3.png";
import m4 from "/arts/mangaPanel/m4.png";
import m5 from "/arts/mangaPanel/m5.png";

import t1 from "/arts/traditionalInked/t1.jpg";
import t2 from "/arts/traditionalInked/t2.jpg";
import t3 from "/arts/traditionalInked/t3.jpg";
import t4 from "/arts/traditionalInked/t4.jpg";

import bg1 from "/bgs/bg1.png";
import bg2 from "/bgs/bg2.png";
import bg3 from "/bgs/bg3.png";
import bg4 from "/bgs/bg4.png";
import bg5 from "/bgs/bg5.jpg";
import bg6 from "/bgs/bg6.png";

export enum PageType{
    Home = "0",
    Details = "1",
    ToS = "2",
    About = "3",
    Credits = "4"
};

export enum PaintingType {
    Full = 0,
    Anime = 1,
    Manga = 2,
    Block = 3,
    Inked = 4,
    Sketch = 5,
};

export const PAINTING_LABEL = [
    "Full Painting",
    "Anime Screen",
    "Manga Panel",
    "Color Block",
    "Traditional Inked",
    "Digital Sketch"    
];

export const FULL_PAINTING_DETAIL = [
    ["Value:", "5.000.000 Gil"],
    ["Average Time:", "3 Weeks"],
    ["Dimensions:", "1500 x 1500px 600dpi png"],
    ["Background Option:", "Yes"]
];
export const ANIME_SCREEN_DETAIL = [
    ["Value:", "3.000.000 Gil"],
    ["Average Time:", "2 Weeks"],
    ["Dimensions:", "1500 x 1500px 600dpi png"],
    ["Background Option:", "Yes"]
];
export const MANGA_PANEL_DETAIL = [
    ["Value:", "2.000.000 Gil"],
    ["Average Time:", "1.5 Week"],
    ["Dimensions:", "1500 x 1500px 600dpi png"],
    ["Background Option:", "Yes"]
];

export const COLOR_BLOCK_DETAIL = [
    ["Value:", "700.000 Gil"],
    ["Average Time:", "5 days"],
    ["Dimensions:", "1500 x 1500px 600dpi png"],
    ["Background Option:", "No"]
];

export const TRADITIONAL_INKED_DETAIL = [
    ["Value:", "500.000 Gil"],
    ["Average Time:", "2 days"],
    ["Dimensions:", "960 x 1280px jpg"],
    ["Background Option:", "Yes"]
];

export const DIGITAL_SKETCH_DETAIL = [
    ["Value:", "200.000 Gil"],
    ["Average Time:", "3 days"],
    ["Dimensions:", "1500 x 1500px 600dpi png"],
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

export const FULL_PAINTING_SLIDES = [ f1, f2, f3, f4, f5, f6, f7, f8, f9, f10, f11 ];
export const ANIME_SCREEN_SLIDES = [ a1, a2, a3, a4, a5, a6 ];
export const MANGA_PANEL_SLIDES = [ m1, m2, m3, m4, m5 ];
export const COLOR_BLOCK_SLIDES = [ c1, c2, c3, c4, c5 ];
export const TRADITIONAL_INKED_SLIDES = [ t1, t2, t3, t4 ];
export const DIGITAL_SKETCH_SLIDES = [ d1, d2, d3, d4 ];

export const ART_LIST = [
    FULL_PAINTING_SLIDES,
    ANIME_SCREEN_SLIDES,
    MANGA_PANEL_SLIDES,
    COLOR_BLOCK_SLIDES,
    TRADITIONAL_INKED_SLIDES,
    DIGITAL_SKETCH_SLIDES
];

export const THEME_BACKGROUNDS = [ bg1, bg2, bg3, bg4, bg5, bg6 ];

export const COIN_DETAIL = [
    "Huh? Why Gil?",
    [
        "I dont' feel comfortable neither confident enough to charge real money.",
        "Game coin seems cheaper and less problematic (living abroad reasons).",
        "The real goal is have a stimulus to keep drawing and commissions are one way to create a strong reason to finish what I'm scribbling, because I'm doing this for someone else."
    ]
];

export const DOS_DETAIL = [
    "Wacha open to do?",
    [
        [
            "OCs:",
            "I'm a humble tool that tries to portrait other people's amazing creations."
        ],
        [
            "Create a new design from scratch with the commissioner:",
            "May our imagination flow together. :D"
        ],
        [
            "Fanarts:",
            "We have our waifus/husbandos right?"
        ],
        [
            "Try different art sryles:",
            "Art nauveau, mosaic, pop art, furry, vapor wave? You name it and I'll do my best to try out. (WARNING: Chaotic results)"
        ],
        [
            "Try different themes:",
            "Games, anime, manga, music, movies, general literature, culture, or pick a new topic. :3 "
        ],
    ]
];

export const DONTS_DETAIL = [
    "What you ゴゴゴREFUSEゴゴゴ?",
    [
        [
            "NSFW:",
            "Not comfortable to draw it"
        ],
        [
            "Ecchi:",
            "Not comfortable to draw it."
        ],
        [
            "Extreme gore:",
            "Keep the guts inside, please."
        ],
        [
            "Politics and religion:",
            "Leave this to the real world."
        ],
        [
            "Offensive representation of minorities, social groups and cultures:",
            "Let's be civil."
        ],
    ]
];

export const COMMUNICATION_DETAIL = [
    "How can we talk about the commission?",
    [
        "Discord is the main open way to keep contact. Under unexpected situations I'll be providing alternative ways to contact.",
        "Let's have a talk, even if it's a long one, to arrange the details before starting.",
        " I'll be frequently sending previews at the start of the proccess to do early adjustments or just to check if it is what the client is expecting.",
        "Close to the end I'll be sending zoomed in teasing previews to hype up a bit. If you rather not, for any reason, let me know please.",
        "Any questions, changes, new ideas just DM me hmkay :3"
    ]
];

export const DETAILS_LIST = [
    COIN_DETAIL,
    DOS_DETAIL,
    DONTS_DETAIL,
    COMMUNICATION_DETAIL
];

export const PROVIDING_DETAIL = [
    "What do you need to provide",
    [
        "A nice description. Go on detailing everything you need.",
        "Sample images to the details of the commission are desirable.",
        "In case of game characters, as Final Fantasy XIV, a list of the cosmetic equipments and screenshots are desirable.",
        "Let the artist (Eve) know as soon as possible about any changes."
    ]
];

export const ILL_GIVE_DETAIL = [
    "What I'll do for you",
    [
        "During early stages (from SKETCH to COLOR BLOCKING) I'll be frequently sending preview screeshots to ask for commissioner's approval and/or modifications",
        "I will suggest myself changes, that won't affect the estimated time, during early stages and ask for the commissioner's approval.",
        "At the finish of the commission and payments I'll be sending you a .zip file with the art to preserve its quality.",
        "I'll be sharing the art on my own social networks and/or other platforms. In case of an art really personal to the commissioner this won't be done and their privacy will be respected.",
        "Original creations, ideas and concepts given by the commissioner WILL be credited back to them, but not the resulting art itself."
    ]
];

export const WORKING_PROCESS_DETAIL = [
    "Working process",
    [
        "SKETCH STAGE - A mess of barely identifiable scribbles. Best stage for big changes.",
        "LINEART STAGE - Smooth defined lines of the main featured subject. Partially good stage for changes.",
        "COLOR BLOCKING STAGE - Base colors put on canvas of the main featured subject. Best stage for color changing.",
        "SHADING STAGE - Line coloring, texture addition and lights/shadows casting of the main featured subject. Changes advised ONLY early in the stage.",
        "BACKGROUND SHADING STAGE - Line definition and coloring, texture addition and lights/shadows casting of the background. Changes advised ONLY early in the stage and EXCLUSIVELY to the background.",
        "BACKGROUND CORRECTIONS STAGE - Correction of the color interaction between the main featured object and the background itself. Changes NOT advised.",
        "PARTICLES STAGE - Light correction and particles addition. NO CHANGES",
        "FINAL TOUCHES - General revision and filters addition. NO CHANGES."
    ],
];

export const CHANGES_DETAIL = [
    "If modifications are needed",
    [
        "Small modifications suggested by the commissioner during early stages (from SKETCH to COLOR BLOCKING) won't affect the estimated time nor need additional payment.",
        "Big changes, such as outfit, pose and/or background design, during advanced stages (from SHADING to FINAL TOUCHES) will require additional time.",
        "In case of big changes, on top of more time added to the estimated, additional payment will be charged depending on the complexity of the modification. The additional payment will be negotiated with the commissioner.",
        "Changes to commissions under \"Traditional Inked\" category WON'T be accepted after the LINEART STAGE starts. The commissioner will be notified about the starting of this lineart stage.",
        "Changes that can impact the planned starting time for other commissions will be REFUSED."
    ]
];

export const CONVO_DETAILS = [
    "About the communication",
    [
        "BEFORE the commission starts, the artist (Eve) try to set as many details as possible with the commissioner.",
        "Be aware that any offensive behavior will not be tolerated and the commission will be refused or canceled if it occurs.",
        "If the commissioner's approval is needed for any changes and/or suggestions, the commission will be put \"ON HOLD\", i.e. its progress is stopped and the estimated time will be increased, until an answer is given. If a long time is taken, the commission will be deprioritized or even canceled, with refunds following the \"In case of WITHDRAW \" statements.",
        "In case of technical and/or personal problems, the artist (Eve) will provide alternative means of contacting.",
        "Both artist and commissioner are human beings. Transparency and honesty are the key for a nice cooperation.",
        "Any question, changes and/or suggestions just message. :)",
        "The artist (Eve) isn't a Native english speaker. Please have patience."
    ]
];

export const PAYMENT_DETAIL = [
    "Payment Conditions",
    [
        "After the details are set and BEFORE the starting of the commission, half of the total value must be paid.",
        "The second half must be paid when the commission is done. The art will be send AFTER the payment is completed.",
        "Additional payments due to changes must be made immediately. The commission will be put \"ON HOLD\", i.e. its progress is stopped and the estimated time will be increased, until the payment is made.",
        "If the artist (Eve) really likes the theme or suggested design discounts will be offered.",
    ]
];

export const WITHDRAW_DETAIL = [
    "In case of WITHDRAWAL",
    [
        "UNTIL the SKETCH STAGE is done, 100% of the first payment will be returned.",
        "DURING the LINEART STAGE, 70% of the first payment will be  returned.",
        "DURING the COLOR BLOCKING STAGE, 50% of the first payment will be  returned.",
        "DURING the SHADING STAGE, 20% of the first payment will be  returned.",
        "AFTER the SHADING STAGE, the value of first payment WON'T be returned.",
        "In case of personal and/or technical issues that can affect too much the planned time and/or the conclusion of the commission, the payments will be returned and the commission canceled.",
        "In case of the artist (Eve) states that needs more time, the additional time needed will be added to the estimated time to correct the limits of devolution.",
        "In case of more time is needed due to CHANGES, the additional time needed WON'T be added to the estimated time to correct the limits of devolution."
    ]
];

export const CAN_DETAIL = [
    "What can you do with the commission",
    [
        "Use and share it on your social networks and/or other platforms as long as proper credits are given back to the artist (Eve).",
        "Turn the art into merchandise (shirts, mugs, pins, etc) to personal use or free gifting.",
        "Soft edits, as cuts, distortions, collages and/or memes, as long as proper credits of the original art are given back to the artist (Eve).",
        "Original content, designs and ideas created by the commissioner can be claimed by them, but NOT the art itself",
        "Any new topic consult the artist (Eve) about its approval."
    ]
];

export const CANT_DETAIL = [
    "What you CAN'T do with the commission AND/OR intermediate previews",
    [
        "Trace, recolor and/or offensively edit the image aiming to assault the artist (Eve), another person or what is being representend in the art.",
        "Purposefully remove the watermark and/or the signature with the intention of not giving credit or appropriating the creation of the art and/or without the artist (Eve) permission.",
        "Turn the art into merchandise with commercial purposes.",
        "Use the art to NFT and/or AI programs. HUGE NO!"
    ]
];

export const CONCLUSIONS_DETAIL = [
    "Conclusions",
    [
        "Under any infringement of the terms, the commissioner won't have any rights to the art and/or the commission will be immediately canceled. Depending on the severity of the situation the payment WON'T be returned.",
        "It will be considered that the commissioner agreed with the terms of service given the first payment.",
        "Under any doubts, please contact the artist (Eve)."
    ]
];

export const TOS_LIST = [
    PROVIDING_DETAIL,
    ILL_GIVE_DETAIL,
    WORKING_PROCESS_DETAIL,
    CHANGES_DETAIL,
    CONVO_DETAILS,
    PAYMENT_DETAIL,
    CAN_DETAIL,
    CANT_DETAIL,
    CONCLUSIONS_DETAIL
];

export const CREDITS_LIST = [
    ["Mat", [
        "Full Painting 1st, 2nd and 9th Art OC",
        "Manga Panel 4th Art OC"
    ]],
    ["Dio", ["Full Painting 4th Art OC"]],
    ["Piwan", ["Full Painting 6th Art OC"]],
    ["Kosmo", ["Full Painting 10th Art OC"]],
    ["Yonna", [
        "Anime Screen 1st and 4th Art OC",
        "Traditional Inked 1st Art OC"
    ]],
    ["Dengue", ["Anime Screen 2nd Art OC"]],
    ["Elrien", ["Anime Screen 3rd Art OC"]],
    ["Papito", ["Anime Screen 5th Art OC"]],
    ["KasaiAi", [
        "Full Painting 8th and 7th Art OC",
        "Color Block 3rd Art 2nd character OC"
    ]],
    ["Yohei", [
        "Full Painting 11th Art OC",,
        "Color Block 3rd Art 3rd character OC"
    ]],
    ["ySummer", ["Digital Sketch 2nd Art OC"]],
    ["Caramel Coffee", ["Traditional Inked 2nd Art OC"]],
    ["Zera", ["Traditional Inked 3rd Art OC"]],
    ["Fate/Grand Order | TYPE MOON",[
        "Manga Panel 1st and 5th Art Property",
        "Color Block 4th Art Property",
        "Digital Sketch 2nd Art Property"
    ]],
    ["SINoAlice | Nier",[
        "Manga Panel 3rd Art Property",
        "Color Block 3rd Art Property",
    ]],
    ["Faraway Paladin | Kanata Yanagino", ["Full Painting 5th Art Property"]],
    ["Touhou Project | ZUN", ["Digital Sketch 1st Art Property"]],
];