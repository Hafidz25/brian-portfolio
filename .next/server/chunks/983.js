exports.id = 983;
exports.ids = [983];
exports.modules = {

/***/ 983:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ BlogGrid)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./node_modules/@fortawesome/react-fontawesome/index.js
var react_fontawesome = __webpack_require__(8195);
// EXTERNAL MODULE: ./node_modules/@fortawesome/free-solid-svg-icons/index.mjs
var free_solid_svg_icons = __webpack_require__(7877);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(8421);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1621);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./app/globals.css
var globals = __webpack_require__(1338);
;// CONCATENATED MODULE: ./app/blog-section/BlogCard.tsx






const BlogCard = ({ title , image , url , date , available  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "relative flex h-[430px] w-[100%] max-w-[400px] flex-col items-center justify-start rounded-2xl bg-[#212531]",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "mt-4 h-[100%] w-[90%] lg:mt-5 lg:w-[92%]",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                        className: "h-[60%] w-full md:h-[56%]",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)((image_default()), {
                            src: image,
                            alt: title,
                            width: 1600,
                            height: 840,
                            className: "h-full w-full rounded-lg bg-contain bg-center object-cover"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("h3", {
                        className: "mt-3 break-all uppercase leading-[1em] tracking-tight line-clamp-2",
                        children: title
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                className: "absolute bottom-0 mb-5 flex w-[90%] items-center justify-between text-[14px] font-bold text-[#95979D]",
                children: available ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                    children: [
                        " ",
                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("p", {
                            children: date
                        }),
                        " ",
                        /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                            href: url,
                            target: "_blank",
                            className: "rounded-full",
                            "aria-label": "Open Blog Post",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsx)(react_fontawesome.FontAwesomeIcon, {
                                icon: free_solid_svg_icons/* faArrowRight */.eFW,
                                className: " w-[16px] rounded-full bg-[#0E1016] p-3 text-[16px] text-[#fff] md:w-[20px] md:text-[20px] lg:w-[18px] lg:p-4 lg:text-[18px]",
                                "data-blobity": true,
                                "data-blobity-radius": "30",
                                "data-blobity-offset-x": "4",
                                "data-blobity-offset-y": "4",
                                "data-blobity-magnetic": "false"
                            })
                        })
                    ]
                }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("p", {
                            children: "Coming soon"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                            className: "mb-10 md:mb-14"
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const blog_section_BlogCard = (BlogCard);

;// CONCATENATED MODULE: ./app/blog-section/blogDetails.ts
const blogDetails = [
    {
        title: "Reflecting on My 18th Year: A Personal Review of 2022",
        image: "https://cdn.hashnode.com/res/hashnode/image/upload/v1672494063925/1ee2925f-e529-4a8b-9dd7-6eea996a34eb.png",
        date: "DEC 2022",
        url: "https://blog.victorwilliams.me/reflecting-on-my-18th-year-a-personal-review-of-2022",
        available: true
    }
];

// EXTERNAL MODULE: ./app/animations/AnimatedWords2.tsx
var AnimatedWords2 = __webpack_require__(5797);
// EXTERNAL MODULE: ./node_modules/@next/font/local/target.css?{"path":"app\\fonts\\monaSans.ts","import":"","arguments":[{"src":[{"path":"./Mona-Sans-BlackNarrow.woff2","weight":"900","style":"normal"},{"path":"./Mona-Sans-BlackNarrowItalic.woff2","weight":"900","style":"italic"},{"path":"./Mona-Sans-BoldNarrow.woff2","weight":"700","style":"normal"},{"path":"./Mona-Sans-BoldNarrowItalic.woff2","weight":"700","style":"italic"},{"path":"./Mona-Sans-LightNarrow.woff2","weight":"300","style":"normal"},{"path":"./Mona-Sans-LightNarrowItalic.woff2","weight":"300","style":"italic"},{"path":"./Mona-Sans-MediumNarrow.woff2","weight":"500","style":"normal"},{"path":"./Mona-Sans-MediumNarrowItalic.woff2","weight":"500","style":"italic"},{"path":"./Mona-Sans-SemiBoldNarrow.woff2","weight":"600","style":"normal"},{"path":"./Mona-Sans-SemiBoldNarrowItalic.woff2","weight":"600","style":"italic"},{"path":"./Mona-Sans-ExtraBoldNarrow.woff2","weight":"800","style":"normal"},{"path":"./Mona-Sans-UltraLightNarrow.woff2","weight":"200","style":"normal"},{"path":"./Mona-Sans-RegularNarrowItalic.woff2","weight":"400","style":"italic"}]}],"variableName":"monaSans"}
var target_path_app_fonts_monaSans_ts_import_arguments_src_path_Mona_Sans_BlackNarrow_woff2_weight_900_style_normal_path_Mona_Sans_BlackNarrowItalic_woff2_weight_900_style_italic_path_Mona_Sans_BoldNarrow_woff2_weight_700_style_normal_path_Mona_Sans_BoldNarrowItalic_woff2_weight_700_style_italic_path_Mona_Sans_LightNarrow_woff2_weight_300_style_normal_path_Mona_Sans_LightNarrowItalic_woff2_weight_300_style_italic_path_Mona_Sans_MediumNarrow_woff2_weight_500_style_normal_path_Mona_Sans_MediumNarrowItalic_woff2_weight_500_style_italic_path_Mona_Sans_SemiBoldNarrow_woff2_weight_600_style_normal_path_Mona_Sans_SemiBoldNarrowItalic_woff2_weight_600_style_italic_path_Mona_Sans_ExtraBoldNarrow_woff2_weight_800_style_normal_path_Mona_Sans_UltraLightNarrow_woff2_weight_200_style_normal_path_Mona_Sans_RegularNarrowItalic_woff2_weight_400_style_italic_variableName_monaSans_ = __webpack_require__(3167);
var target_path_app_fonts_monaSans_ts_import_arguments_src_path_Mona_Sans_BlackNarrow_woff2_weight_900_style_normal_path_Mona_Sans_BlackNarrowItalic_woff2_weight_900_style_italic_path_Mona_Sans_BoldNarrow_woff2_weight_700_style_normal_path_Mona_Sans_BoldNarrowItalic_woff2_weight_700_style_italic_path_Mona_Sans_LightNarrow_woff2_weight_300_style_normal_path_Mona_Sans_LightNarrowItalic_woff2_weight_300_style_italic_path_Mona_Sans_MediumNarrow_woff2_weight_500_style_normal_path_Mona_Sans_MediumNarrowItalic_woff2_weight_500_style_italic_path_Mona_Sans_SemiBoldNarrow_woff2_weight_600_style_normal_path_Mona_Sans_SemiBoldNarrowItalic_woff2_weight_600_style_italic_path_Mona_Sans_ExtraBoldNarrow_woff2_weight_800_style_normal_path_Mona_Sans_UltraLightNarrow_woff2_weight_200_style_normal_path_Mona_Sans_RegularNarrowItalic_woff2_weight_400_style_italic_variableName_monaSans_default = /*#__PURE__*/__webpack_require__.n(target_path_app_fonts_monaSans_ts_import_arguments_src_path_Mona_Sans_BlackNarrow_woff2_weight_900_style_normal_path_Mona_Sans_BlackNarrowItalic_woff2_weight_900_style_italic_path_Mona_Sans_BoldNarrow_woff2_weight_700_style_normal_path_Mona_Sans_BoldNarrowItalic_woff2_weight_700_style_italic_path_Mona_Sans_LightNarrow_woff2_weight_300_style_normal_path_Mona_Sans_LightNarrowItalic_woff2_weight_300_style_italic_path_Mona_Sans_MediumNarrow_woff2_weight_500_style_normal_path_Mona_Sans_MediumNarrowItalic_woff2_weight_500_style_italic_path_Mona_Sans_SemiBoldNarrow_woff2_weight_600_style_normal_path_Mona_Sans_SemiBoldNarrowItalic_woff2_weight_600_style_italic_path_Mona_Sans_ExtraBoldNarrow_woff2_weight_800_style_normal_path_Mona_Sans_UltraLightNarrow_woff2_weight_200_style_normal_path_Mona_Sans_RegularNarrowItalic_woff2_weight_400_style_italic_variableName_monaSans_);
// EXTERNAL MODULE: ./app/animations/AnimatedBody.tsx
var AnimatedBody = __webpack_require__(1472);
;// CONCATENATED MODULE: ./app/blog-section/BlogGrid.tsx






const Blog = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: "z-10 flex w-full flex-col items-center justify-center overflow-hidden bg-[#0E1016] bg-cover bg-center pt-20 md:pb-16 lg:pb-32",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: `relative mb-16 flex w-full flex-col items-center justify-center gap-10  text-[#e4ded7] sm:items-center lg:max-w-[1440px]`,
                children: [
                    " ",
                    /*#__PURE__*/ (0,jsx_runtime_.jsx)(AnimatedWords2/* default */.Z, {
                        title: "Blog",
                        style: `flex max-w-[500px] flex-col items-start text-left text-[126px] ${(target_path_app_fonts_monaSans_ts_import_arguments_src_path_Mona_Sans_BlackNarrow_woff2_weight_900_style_normal_path_Mona_Sans_BlackNarrowItalic_woff2_weight_900_style_italic_path_Mona_Sans_BoldNarrow_woff2_weight_700_style_normal_path_Mona_Sans_BoldNarrowItalic_woff2_weight_700_style_italic_path_Mona_Sans_LightNarrow_woff2_weight_300_style_normal_path_Mona_Sans_LightNarrowItalic_woff2_weight_300_style_italic_path_Mona_Sans_MediumNarrow_woff2_weight_500_style_normal_path_Mona_Sans_MediumNarrowItalic_woff2_weight_500_style_italic_path_Mona_Sans_SemiBoldNarrow_woff2_weight_600_style_normal_path_Mona_Sans_SemiBoldNarrowItalic_woff2_weight_600_style_italic_path_Mona_Sans_ExtraBoldNarrow_woff2_weight_800_style_normal_path_Mona_Sans_UltraLightNarrow_woff2_weight_200_style_normal_path_Mona_Sans_RegularNarrowItalic_woff2_weight_400_style_italic_variableName_monaSans_default()).className} font-extrabold uppercase leading-[0.9em] text-[#e4ded7] sm:max-w-full sm:flex-row sm:items-center sm:justify-center sm:text-center sm:text-[160px] md:text-[190px] lg:text-center lg:text-[215.04px]`
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsx)(AnimatedBody/* default */.Z, {
                        text: "I write articles to reinforce my knowledge and help out others who might be building something similar.",
                        className: "w-[90%] text-center text-[14px] font-semibold uppercase sm:w-[500px] md:w-[550px] md:text-[16px]"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                className: "grid w-[90%] max-w-[1200px] grid-cols-1 grid-rows-1 place-content-center place-items-center gap-x-6 gap-y-6 md:grid-cols-1",
                children: blogDetails.map((blog, index)=>{
                    return /*#__PURE__*/ (0,jsx_runtime_.jsx)(blog_section_BlogCard, {
                        title: blog.title,
                        image: blog.image,
                        url: blog.url,
                        date: blog.date,
                        available: blog.available
                    }, index);
                })
            })
        ]
    });
};
/* harmony default export */ const BlogGrid = (Blog);


/***/ }),

/***/ 1338:
/***/ (() => {



/***/ })

};
;