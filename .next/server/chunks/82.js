"use strict";
exports.id = 82;
exports.ids = [82];
exports.modules = {

/***/ 8082:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ResumeContext": () => (/* binding */ ResumeContext),
  "default": () => (/* binding */ Builder)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-icons/md"
var md_ = __webpack_require__(4041);
;// CONCATENATED MODULE: ./components/form/FormButton.jsx


const FormButton = ({ size , remove , add  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "flex-wrap-gap-2 mb-2",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                type: "button",
                onClick: add,
                "aria-label": "Add",
                className: "p-2 text-white bg-fuchsia-700 rounded text-xl",
                children: /*#__PURE__*/ jsx_runtime_.jsx(md_.MdAddCircle, {})
            }),
            size > 0 && /*#__PURE__*/ jsx_runtime_.jsx("button", {
                type: "button",
                onClick: remove,
                "aria-label": "Remove",
                className: "p-2 text-white bg-fuchsia-700 rounded text-xl",
                children: /*#__PURE__*/ jsx_runtime_.jsx(md_.MdRemoveCircle, {})
            })
        ]
    });
};
/* harmony default export */ const form_FormButton = (FormButton);

;// CONCATENATED MODULE: ./components/form/Language.jsx




const Language = ()=>{
    const { resumeData , setResumeData  } = (0,external_react_.useContext)(ResumeContext);
    const skillType = "languages";
    const title = "Languages";
    const placeholder = "Language";
    const handleSkills = (e, index, skillType)=>{
        const newSkills = [
            ...resumeData[skillType]
        ];
        newSkills[index] = e.target.value;
        setResumeData({
            ...resumeData,
            [skillType]: newSkills
        });
    };
    const addSkill = ()=>{
        setResumeData({
            ...resumeData,
            [skillType]: [
                ...resumeData[skillType],
                ""
            ]
        });
    };
    const removeSkill = (index)=>{
        const newSkills = [
            ...resumeData[skillType]
        ];
        newSkills.splice(-1, 1);
        setResumeData({
            ...resumeData,
            [skillType]: newSkills
        });
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "flex-col-gap-2",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                className: "input-title",
                children: title
            }),
            resumeData[skillType].map((skill, index)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "f-col",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                        type: "text",
                        placeholder: placeholder,
                        name: "skill",
                        className: "w-full other-input",
                        value: skill,
                        onChange: (e)=>handleSkills(e, index, skillType)
                    })
                }, index)),
            /*#__PURE__*/ jsx_runtime_.jsx(form_FormButton, {
                size: resumeData[skillType].length,
                add: addSkill,
                remove: removeSkill
            })
        ]
    });
};
/* harmony default export */ const form_Language = (Language);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: ./components/meta/Meta.js


function Meta({ title , keywords , description  }) {
    const homepage = "https://atsresume.vercel.app/";
    const logo = "https://atsresume.vercel.app/assets/logo.png";
    const fevicon = "https://atsresume.vercel.app/assets/favicon.ico";
    function isiteJsonLd() {
        return {
            __html: `{
                "@context": "https://schema.org",
                "@type": "Organization",
                "url": ${homepage},
                "logo": ${logo},
                "contactPoint": {
                    "@type": "ContactPoint",
                    "telephone": "+91 9800117380",
                    "contactType": "customer service"
                },
                "image": ${logo},
                "description": ${description},
                "founder": "Alpha Team",
                "foundingDate": "2024",
                "foundingLocation": "IN",
                "email": "adisrivastava848@gmail.com",
                "telephone": "+91 9999999999",
                "areaServed": "IN",
                "keywords": ${keywords},
                "mainEntityOfPage": ${homepage},
                "knowsAbout": ${keywords},
                "knowsLanguage": "English",
                "memberOf": "Alpha Team",
                "owns": "Alpha Team",
                "publishingPrinciples": ${homepage},
                "slogan": "Get hired with an ATS-optimized resume"
            }`
        };
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "viewport",
                content: "width=device-width, initial-scale=1"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "keywords",
                content: keywords
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "description",
                content: description
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                charSet: "utf-8"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: "icon",
                href: fevicon
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("title", {
                children: title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                type: "copyright",
                content: "ATSResume"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                type: "author",
                content: "Alpha Team"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                property: "og:type",
                content: "website"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                property: "og:url",
                content: homepage
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                property: "og:title",
                content: title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                property: "og:description",
                content: description
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                property: "og:image",
                content: logo
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                property: "twitter:card",
                content: "summary_large_image"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                property: "twitter:url",
                content: homepage
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                property: "twitter:title",
                content: title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                property: "twitter:description",
                content: description
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                property: "twitter:image",
                content: logo
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("script", {
                type: "application/ld+json",
                dangerouslySetInnerHTML: isiteJsonLd()
            }, "isiteJsonLd")
        ]
    });
}

// EXTERNAL MODULE: external "react-icons/bs"
var bs_ = __webpack_require__(567);
;// CONCATENATED MODULE: ./components/form/FormCP.jsx



const FormCP = ({ formClose , setFormClose  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("button", {
        "aria-label": "Form Open/Close",
        className: "exclude-print fixed bottom-5 left-10 font-bold rounded-full bg-white text-fuchsia-600 shadow-lg border-2 border-white",
        onClick: ()=>setFormClose(!formClose),
        children: formClose ? /*#__PURE__*/ jsx_runtime_.jsx(bs_.BsFillArrowRightCircleFill, {
            className: "w-10 h-10",
            title: "Form Open"
        }) : /*#__PURE__*/ jsx_runtime_.jsx(bs_.BsFillArrowLeftCircleFill, {
            className: "w-10 h-10",
            title: "Form Close"
        })
    });
};
/* harmony default export */ const form_FormCP = (FormCP);

// EXTERNAL MODULE: external "react-icons/fa"
var fa_ = __webpack_require__(6290);
;// CONCATENATED MODULE: ./components/form/LoadUnload.jsx




const LoadUnload = ()=>{
    const { resumeData , setResumeData  } = (0,external_react_.useContext)(ResumeContext);
    // load backup resume data
    const handleLoad = (event)=>{
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onload = (event)=>{
            const resumeData = JSON.parse(event.target.result);
            setResumeData(resumeData);
        };
        reader.readAsText(file);
    };
    // download resume data
    const handleDownload = (data, filename, event)=>{
        event.preventDefault();
        const jsonData = JSON.stringify(data);
        const blob = new Blob([
            jsonData
        ], {
            type: "application/json"
        });
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = filename;
        link.click();
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "flex flex-wrap gap-4 mb-2 justify-center",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "inline-flex flex-row items-center gap-2",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                        className: "text-[1.2rem] text-white",
                        children: "Load Data"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                        className: "p-2 text-white bg-fuchsia-700 rounded cursor-pointer",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(fa_.FaCloudUploadAlt, {
                                className: "text-[1.2rem] text-white"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                "aria-label": "Load Data",
                                type: "file",
                                className: "hidden",
                                onChange: handleLoad,
                                accept: ".json"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "inline-flex flex-row items-center gap-2",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                        className: "text-[1.2rem] text-white",
                        children: "Save Data"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        "aria-label": "Save Data",
                        className: "p-2 text-white bg-fuchsia-700 rounded",
                        onClick: (event)=>handleDownload(resumeData, resumeData.name + " by ATSResume.json", event),
                        children: /*#__PURE__*/ jsx_runtime_.jsx(fa_.FaCloudDownloadAlt, {
                            className: "text-[1.2rem] text-white"
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const form_LoadUnload = (LoadUnload);

// EXTERNAL MODULE: external "react-icons/cg"
var cg_ = __webpack_require__(7865);
;// CONCATENATED MODULE: ./components/preview/Skills.jsx



const Skills = ({ title , skills  })=>{
    const { resumeData , setResumeData  } = (0,external_react_.useContext)(ResumeContext);
    const handleTitleChange = (e)=>{
        const newSkills = [
            ...resumeData.skills
        ];
        newSkills.find((skillType)=>skillType.title === title).title = e.target.innerText;
        setResumeData({
            ...resumeData,
            skills: newSkills
        });
    };
    return skills.length > 0 && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                className: "section-title mb-1 border-b-2 border-gray-300 editable",
                contentEditable: true,
                suppressContentEditableWarning: true,
                onBlur: handleTitleChange,
                children: title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: "sub-content",
                children: skills.join(", ")
            })
        ]
    });
};
/* harmony default export */ const preview_Skills = (Skills);

;// CONCATENATED MODULE: ./components/utility/DateRange.jsx

const DateRange = ({ startYear , endYear , id  })=>{
    const start = new Date(startYear);
    const end = new Date(endYear);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
        id: id,
        className: "sub-content",
        children: [
            start.toLocaleString("default", {
                month: "short"
            }),
            ",",
            " ",
            start.getFullYear(),
            " -",
            " ",
            end != "Invalid Date" ? end.toLocaleString("default", {
                month: "short"
            }) + ", " + end.getFullYear() : "Present"
        ]
    });
};
/* harmony default export */ const utility_DateRange = (DateRange);

;// CONCATENATED MODULE: ./components/preview/ContactInfo.jsx


const ContactInfo = ({ mainclass , linkclass , teldata , emaildata , addressdata , telicon , emailicon , addressicon  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: mainclass,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                className: linkclass,
                "aria-label": "Phone Number",
                href: `tel:${teldata}`,
                children: [
                    telicon,
                    "  ",
                    teldata
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                className: linkclass,
                "aria-label": "Email Address",
                href: `mailto:${emaildata}`,
                children: [
                    emailicon,
                    " ",
                    emaildata
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("address", {
                "aria-label": "Address",
                className: linkclass + " not-italic",
                children: [
                    addressicon,
                    " ",
                    addressdata
                ]
            })
        ]
    });
};
/* harmony default export */ const preview_ContactInfo = (ContactInfo);

// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/next/dynamic.js
var dynamic = __webpack_require__(5152);
var dynamic_default = /*#__PURE__*/__webpack_require__.n(dynamic);
;// CONCATENATED MODULE: ./components/preview/Language.jsx

const Language_Language = ({ title , languages  })=>{
    return languages.length > 0 && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                className: "section-title mb-1 border-b-2 border-gray-300",
                children: title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: "sub-content",
                children: languages.join(", ")
            })
        ]
    });
};
/* harmony default export */ const preview_Language = (Language_Language);

;// CONCATENATED MODULE: ./components/preview/Certification.jsx

const Certification = ({ title , certifications  })=>{
    return certifications.length > 0 && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                className: "section-title mb-1 border-b-2 border-gray-300",
                children: title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                className: "sub-content list-disc ul-padding",
                children: certifications.map((certification, index)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                        children: certification
                    }, index))
            })
        ]
    });
};
/* harmony default export */ const preview_Certification = (Certification);

;// CONCATENATED MODULE: ./components/preview/Preview.jsx














const DragDropContext = dynamic_default()(null, {
    loadableGenerated: {
        modules: [
            "..\\components\\preview\\Preview.jsx -> " + "react-beautiful-dnd"
        ]
    },
    ssr: false
});
const Droppable = dynamic_default()(null, {
    loadableGenerated: {
        modules: [
            "..\\components\\preview\\Preview.jsx -> " + "react-beautiful-dnd"
        ]
    },
    ssr: false
});
const Draggable = dynamic_default()(null, {
    loadableGenerated: {
        modules: [
            "..\\components\\preview\\Preview.jsx -> " + "react-beautiful-dnd"
        ]
    },
    ssr: false
});
const Preview = ()=>{
    const { resumeData , setResumeData  } = (0,external_react_.useContext)(ResumeContext);
    const icons = [
        {
            name: "github",
            icon: /*#__PURE__*/ jsx_runtime_.jsx(fa_.FaGithub, {})
        },
        {
            name: "linkedin",
            icon: /*#__PURE__*/ jsx_runtime_.jsx(fa_.FaLinkedin, {})
        },
        {
            name: "twitter",
            icon: /*#__PURE__*/ jsx_runtime_.jsx(fa_.FaTwitter, {})
        },
        {
            name: "facebook",
            icon: /*#__PURE__*/ jsx_runtime_.jsx(fa_.FaFacebook, {})
        },
        {
            name: "instagram",
            icon: /*#__PURE__*/ jsx_runtime_.jsx(fa_.FaInstagram, {})
        },
        {
            name: "youtube",
            icon: /*#__PURE__*/ jsx_runtime_.jsx(fa_.FaYoutube, {})
        },
        {
            name: "website",
            icon: /*#__PURE__*/ jsx_runtime_.jsx(cg_.CgWebsite, {})
        }
    ];
    const onDragEnd = (result)=>{
        const { destination , source  } = result;
        if (!destination) return;
        if (destination.droppableId === source.droppableId && destination.index === source.index) return;
        if (source.droppableId === "work-experience") {
            const newWorkExperience = [
                ...resumeData.workExperience
            ];
            const [removed] = newWorkExperience.splice(source.index, 1);
            newWorkExperience.splice(destination.index, 0, removed);
            setResumeData({
                ...resumeData,
                workExperience: newWorkExperience
            });
        }
        if (source.droppableId.includes("WORK_EXPERIENCE_KEY_ACHIEVEMENT")) {
            const newWorkExperience = [
                ...resumeData.workExperience
            ];
            const workExperienceIndex = parseInt(source.droppableId.split("-")[1]);
            const keyAchievements = newWorkExperience[workExperienceIndex].keyAchievements.split("\n");
            const [removed] = keyAchievements.splice(source.index, 1);
            keyAchievements.splice(destination.index, 0, removed);
            newWorkExperience[workExperienceIndex].keyAchievements = keyAchievements.join("\n");
            setResumeData({
                ...resumeData,
                workExperience: newWorkExperience
            });
        }
        if (source.droppableId === "skills") {
            const newSkills = [
                ...resumeData.skills
            ];
            const [removed] = newSkills.splice(source.index, 1);
            newSkills.splice(destination.index, 0, removed);
            setResumeData({
                ...resumeData,
                skills: newSkills
            });
        }
        if (source.droppableId.includes("projects")) {
            const newProjects = [
                ...resumeData.projects
            ];
            const [removed] = newProjects.splice(source.index, 1);
            newProjects.splice(destination.index, 0, removed);
            setResumeData({
                ...resumeData,
                projects: newProjects
            });
        }
        if (source.droppableId.includes("PROJECTS_KEY_ACHIEVEMENT")) {
            const newProjects = [
                ...resumeData.projects
            ];
            const projectIndex = parseInt(source.droppableId.split("-")[1]);
            const keyAchievements = newProjects[projectIndex].keyAchievements.split("\n");
            const [removed] = keyAchievements.splice(source.index, 1);
            keyAchievements.splice(destination.index, 0, removed);
            newProjects[projectIndex].keyAchievements = keyAchievements.join("\n");
            setResumeData({
                ...resumeData,
                projects: newProjects
            });
        }
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "md:max-w-[60%] sticky top-0 preview rm-padding-print p-6 md:overflow-y-scroll md:h-screen",
        children: /*#__PURE__*/ jsx_runtime_.jsx(A4PageWrapper, {
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(DragDropContext, {
                onDragEnd: onDragEnd,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "f-col items-center mb-1",
                        children: [
                            resumeData.profilePicture.length > 0 && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "w-24 h-24 rounded-full overflow-hidden border-2 border-fuchsia-700",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    src: resumeData.profilePicture,
                                    alt: "profile",
                                    width: 100,
                                    height: 100,
                                    className: "object-cover h-full w-full"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                className: "name",
                                children: resumeData.name
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "profession",
                                children: resumeData.position
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(preview_ContactInfo, {
                                mainclass: "flex flex-row gap-1 mb-1 contact",
                                linkclass: "inline-flex items-center gap-1",
                                teldata: resumeData.contactInformation,
                                emaildata: resumeData.email,
                                addressdata: resumeData.address,
                                telicon: /*#__PURE__*/ jsx_runtime_.jsx(md_.MdPhone, {}),
                                emailicon: /*#__PURE__*/ jsx_runtime_.jsx(md_.MdEmail, {}),
                                addressicon: /*#__PURE__*/ jsx_runtime_.jsx(md_.MdLocationOn, {})
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "grid grid-cols-3 gap-1",
                                children: resumeData.socialMedia.map((socialMedia, index)=>{
                                    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                        href: `http://${socialMedia.link}`,
                                        "aria-label": socialMedia.socialMedia,
                                        title: socialMedia.socialMedia,
                                        target: "_blank",
                                        rel: "noreferrer",
                                        className: "inline-flex items-center gap-1 social-media",
                                        // Prevent text overflowing, If the socialMedia.link string is longer than 32 characters, apply the wordWrap and display styles to this <a> tag.
                                        // wordWrap: "break-word" breaks the text onto the next line if it's too long,
                                        // display: "inline-block" is necessary for wordWrap to work on an inline element like <a>.
                                        style: socialMedia.link.length > 32 ? {
                                            wordWrap: "break-word",
                                            display: "inline-block"
                                        } : {},
                                        children: [
                                            icons.map((icon, index)=>{
                                                if (icon.name === socialMedia.socialMedia.toLowerCase()) {
                                                    return /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        children: icon.icon
                                                    }, index);
                                                }
                                            }),
                                            socialMedia.link
                                        ]
                                    }, index);
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("hr", {
                        className: "border-dashed my-2"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "grid grid-cols-3 gap-6",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "col-span-1 space-y-2",
                                children: [
                                    resumeData.summary.length > 0 && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "mb-1",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                className: "section-title mb-1 border-b-2 border-gray-300",
                                                children: "Summary"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: "content break-words",
                                                children: resumeData.summary
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        children: resumeData.education.length > 0 && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "mb-1",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                    className: "section-title mb-1 border-b-2 border-gray-300",
                                                    children: "Education"
                                                }),
                                                resumeData.education.map((item, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "mb-1",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                className: "content i-bold",
                                                                children: item.degree
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                className: "content",
                                                                children: item.school
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx(utility_DateRange, {
                                                                startYear: item.startYear,
                                                                endYear: item.endYear,
                                                                id: `education-start-end-date`
                                                            })
                                                        ]
                                                    }, index))
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(Droppable, {
                                        droppableId: "skills",
                                        type: "SKILLS",
                                        children: (provided)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                ...provided.droppableProps,
                                                ref: provided.innerRef,
                                                children: [
                                                    resumeData.skills.map((skill, index)=>/*#__PURE__*/ jsx_runtime_.jsx(Draggable, {
                                                            draggableId: `SKILLS-${index}`,
                                                            index: index,
                                                            children: (provided, snapshot)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    ref: provided.innerRef,
                                                                    ...provided.draggableProps,
                                                                    ...provided.dragHandleProps,
                                                                    className: `mb-1 ${snapshot.isDragging && "outline-dashed outline-2 outline-gray-400 bg-white"}`,
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(preview_Skills, {
                                                                        title: skill.title,
                                                                        skills: skill.skills
                                                                    })
                                                                })
                                                        }, `SKILLS-${index}`)),
                                                    provided.placeholder
                                                ]
                                            })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(preview_Language, {
                                        title: "Languages",
                                        languages: resumeData.languages
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(preview_Certification, {
                                        title: "Certifications",
                                        certifications: resumeData.certifications
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "col-span-2 space-y-2",
                                children: [
                                    resumeData.workExperience.length > 0 && /*#__PURE__*/ jsx_runtime_.jsx(Droppable, {
                                        droppableId: "work-experience",
                                        type: "WORK_EXPERIENCE",
                                        children: (provided)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                ...provided.droppableProps,
                                                ref: provided.innerRef,
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                        className: "section-title mb-1 border-b-2 border-gray-300 editable",
                                                        contentEditable: true,
                                                        suppressContentEditableWarning: true,
                                                        children: "Work Experience"
                                                    }),
                                                    resumeData.workExperience.map((item, index)=>/*#__PURE__*/ jsx_runtime_.jsx(Draggable, {
                                                            draggableId: `WORK_EXPERIENCE-${index}`,
                                                            index: index,
                                                            children: (provided, snapshot)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                    ref: provided.innerRef,
                                                                    ...provided.draggableProps,
                                                                    ...provided.dragHandleProps,
                                                                    className: `mb-1 ${snapshot.isDragging && "outline-dashed outline-2 outline-gray-400 bg-white"}`,
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                            className: "content i-bold",
                                                                            children: item.company
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                            className: "content",
                                                                            children: item.position
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx(utility_DateRange, {
                                                                            startYear: item.startYear,
                                                                            endYear: item.endYear,
                                                                            id: `work-experience-start-end-date`
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                            className: "content hyphens-auto",
                                                                            children: item.description
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx(Droppable, {
                                                                            droppableId: `WORK_EXPERIENCE_KEY_ACHIEVEMENT-${index}`,
                                                                            type: "WORK_EXPERIENCE_KEY_ACHIEVEMENT",
                                                                            children: (provided)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                                                    className: "list-disc ul-padding content",
                                                                                    ...provided.droppableProps,
                                                                                    ref: provided.innerRef,
                                                                                    children: [
                                                                                        typeof item.keyAchievements === "string" && item.keyAchievements.split("\n").map((achievement, subIndex)=>/*#__PURE__*/ jsx_runtime_.jsx(Draggable, {
                                                                                                draggableId: `WORK_EXPERIENCE_KEY_ACHIEVEMENT-${index}-${subIndex}`,
                                                                                                index: subIndex,
                                                                                                children: (provided, snapshot)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                                                        ref: provided.innerRef,
                                                                                                        ...provided.draggableProps,
                                                                                                        ...provided.dragHandleProps,
                                                                                                        className: `
                                          hover:outline-dashed hover:outline-2 hover:outline-gray-400
                                          ${snapshot.isDragging && "outline-dashed outline-2 outline-gray-400 bg-white"}`,
                                                                                                        children: achievement
                                                                                                    })
                                                                                            }, `${item.company}-${index}-${subIndex}`)),
                                                                                        provided.placeholder
                                                                                    ]
                                                                                })
                                                                        })
                                                                    ]
                                                                })
                                                        }, `${item.company}-${index}`)),
                                                    provided.placeholder
                                                ]
                                            })
                                    }),
                                    resumeData.projects.length > 0 && /*#__PURE__*/ jsx_runtime_.jsx(Droppable, {
                                        droppableId: "projects",
                                        type: "PROJECTS",
                                        children: (provided)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                ...provided.droppableProps,
                                                ref: provided.innerRef,
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                        className: "section-title mb-1 border-b-2 border-gray-300 editable",
                                                        contentEditable: true,
                                                        suppressContentEditableWarning: true,
                                                        children: "Projects"
                                                    }),
                                                    resumeData.projects.map((item, index)=>/*#__PURE__*/ jsx_runtime_.jsx(Draggable, {
                                                            draggableId: `PROJECTS-${index}`,
                                                            index: index,
                                                            children: (provided, snapshot)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                    ref: provided.innerRef,
                                                                    ...provided.draggableProps,
                                                                    ...provided.dragHandleProps,
                                                                    className: `mb-1 ${snapshot.isDragging && "outline-dashed outline-2 outline-gray-400 bg-white"}`,
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                            className: "content i-bold",
                                                                            children: item.name
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx(utility_DateRange, {
                                                                            startYear: item.startYear,
                                                                            endYear: item.endYear,
                                                                            id: `work-experience-start-end-date`
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                            href: item.link,
                                                                            target: "_blank",
                                                                            rel: "noopener noreferrer",
                                                                            className: "content",
                                                                            children: item.link
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                            className: "content",
                                                                            children: item.description
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx(Droppable, {
                                                                            droppableId: `PROJECTS_KEY_ACHIEVEMENT-${index}`,
                                                                            type: "PROJECTS_KEY_ACHIEVEMENT",
                                                                            children: (provided)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                                                    className: "list-disc ul-padding content",
                                                                                    ...provided.droppableProps,
                                                                                    ref: provided.innerRef,
                                                                                    children: [
                                                                                        typeof item.keyAchievements === "string" && item.keyAchievements.split("\n").map((achievement, subIndex)=>/*#__PURE__*/ jsx_runtime_.jsx(Draggable, {
                                                                                                draggableId: `PROJECTS_KEY_ACHIEVEMENT-${index}-${subIndex}`,
                                                                                                index: subIndex,
                                                                                                children: (provided, snapshot)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                                                        ref: provided.innerRef,
                                                                                                        ...provided.draggableProps,
                                                                                                        ...provided.dragHandleProps,
                                                                                                        className: `
                                          hover:outline-dashed hover:outline-2 hover:outline-gray-400
                                          ${snapshot.isDragging && "outline-dashed outline-2 outline-gray-400 bg-white"}`,
                                                                                                        children: achievement
                                                                                                    })
                                                                                            }, `${item.name}-${index}-${subIndex}`)),
                                                                                        provided.placeholder
                                                                                    ]
                                                                                })
                                                                        })
                                                                    ]
                                                                })
                                                        }, `${item.name}-${index}`)),
                                                    provided.placeholder
                                                ]
                                            })
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        })
    });
};
const A4PageWrapper = ({ children  })=>{
    const alertA4Size = ()=>{
        const preview = document.querySelector(".preview");
        const previewHeight = preview.offsetHeight;
        console.log(previewHeight);
        if (previewHeight > 1122) {
            alert("A4 size exceeded");
        }
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "w-8.5in",
        onLoad: alertA4Size,
        children: children
    });
};
/* harmony default export */ const preview_Preview = (Preview);

;// CONCATENATED MODULE: ./components/form/SocialMedia.jsx




const SocialMedia = ()=>{
    const { resumeData , setResumeData  } = (0,external_react_.useContext)(ResumeContext);
    // social media
    const handleSocialMedia = (e, index)=>{
        const newSocialMedia = [
            ...resumeData.socialMedia
        ];
        newSocialMedia[index][e.target.name] = e.target.value.replace("https://", "");
        setResumeData({
            ...resumeData,
            socialMedia: newSocialMedia
        });
    };
    const addSocialMedia = ()=>{
        setResumeData({
            ...resumeData,
            socialMedia: [
                ...resumeData.socialMedia,
                {
                    socialMedia: "",
                    link: ""
                }
            ]
        });
    };
    const removeSocialMedia = (index)=>{
        const newSocialMedia = [
            ...resumeData.socialMedia
        ];
        newSocialMedia[index] = newSocialMedia[newSocialMedia.length - 1];
        newSocialMedia.pop();
        setResumeData({
            ...resumeData,
            socialMedia: newSocialMedia
        });
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "flex-col-gap-2",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                className: "input-title",
                children: "Social Media"
            }),
            resumeData.socialMedia.map((socialMedia, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex-wrap-gap-2",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                            type: "text",
                            placeholder: "Social Media",
                            name: "socialMedia",
                            className: "other-input",
                            value: socialMedia.socialMedia,
                            onChange: (e)=>handleSocialMedia(e, index)
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                            type: "text",
                            placeholder: "Link",
                            name: "link",
                            className: "other-input",
                            value: socialMedia.link,
                            onChange: (e)=>handleSocialMedia(e, index)
                        })
                    ]
                }, index)),
            /*#__PURE__*/ jsx_runtime_.jsx(form_FormButton, {
                size: resumeData.socialMedia.length,
                add: addSocialMedia,
                remove: removeSocialMedia
            })
        ]
    });
};
/* harmony default export */ const form_SocialMedia = (SocialMedia);

;// CONCATENATED MODULE: ./components/form/WorkExperience.jsx




const WorkExperience = ()=>{
    const { resumeData , setResumeData  } = (0,external_react_.useContext)(ResumeContext);
    const handleWorkExperience = (e, index)=>{
        const newworkExperience = [
            ...resumeData.workExperience
        ];
        newworkExperience[index][e.target.name] = e.target.value;
        setResumeData({
            ...resumeData,
            workExperience: newworkExperience
        });
    };
    const addWorkExperience = ()=>{
        setResumeData({
            ...resumeData,
            workExperience: [
                ...resumeData.workExperience,
                {
                    company: "",
                    position: "",
                    description: "",
                    keyAchievements: "",
                    startYear: "",
                    endYear: ""
                }
            ]
        });
    };
    const removeWorkExperience = (index)=>{
        const newworkExperience = [
            ...resumeData.workExperience
        ];
        newworkExperience[index] = newworkExperience[newworkExperience.length - 1];
        newworkExperience.pop();
        setResumeData({
            ...resumeData,
            workExperience: newworkExperience
        });
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "flex-col-gap-2",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                className: "input-title",
                children: "Work Experience"
            }),
            resumeData.workExperience.map((workExperience, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "f-col",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                            type: "text",
                            placeholder: "Company",
                            name: "company",
                            className: "w-full other-input",
                            value: workExperience.company,
                            onChange: (e)=>handleWorkExperience(e, index)
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                            type: "text",
                            placeholder: "Job Title",
                            name: "position",
                            className: "w-full other-input",
                            value: workExperience.position,
                            onChange: (e)=>handleWorkExperience(e, index)
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("textarea", {
                            type: "text",
                            placeholder: "Description",
                            name: "description",
                            className: "w-full other-input h-32",
                            value: workExperience.description,
                            maxLength: "250",
                            onChange: (e)=>handleWorkExperience(e, index)
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("textarea", {
                            type: "text",
                            placeholder: "Key Achievements",
                            name: "keyAchievements",
                            className: "w-full other-input h-40",
                            value: workExperience.keyAchievements,
                            onChange: (e)=>handleWorkExperience(e, index)
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex-wrap-gap-2",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                    type: "date",
                                    placeholder: "Start Year",
                                    name: "startYear",
                                    className: "other-input",
                                    value: workExperience.startYear,
                                    onChange: (e)=>handleWorkExperience(e, index)
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                    type: "date",
                                    placeholder: "End Year",
                                    name: "endYear",
                                    className: "other-input",
                                    value: workExperience.endYear,
                                    onChange: (e)=>handleWorkExperience(e, index)
                                })
                            ]
                        })
                    ]
                }, index)),
            /*#__PURE__*/ jsx_runtime_.jsx(form_FormButton, {
                size: resumeData.workExperience.length,
                add: addWorkExperience,
                remove: removeWorkExperience
            })
        ]
    });
};
/* harmony default export */ const form_WorkExperience = (WorkExperience);

;// CONCATENATED MODULE: ./components/form/Skill.jsx




const Skill = ({ title  })=>{
    const { resumeData , setResumeData  } = (0,external_react_.useContext)(ResumeContext);
    // skills
    const handleSkill = (e, index, title)=>{
        const newSkills = [
            ...resumeData.skills.find((skillType)=>skillType.title === title).skills
        ];
        newSkills[index] = e.target.value;
        setResumeData((prevData)=>({
                ...prevData,
                skills: prevData.skills.map((skill)=>skill.title === title ? {
                        ...skill,
                        skills: newSkills
                    } : skill)
            }));
    };
    const addSkill = (title)=>{
        setResumeData((prevData)=>{
            const skillType = prevData.skills.find((skillType)=>skillType.title === title);
            const newSkills = [
                ...skillType.skills,
                ""
            ];
            const updatedSkills = prevData.skills.map((skill)=>skill.title === title ? {
                    ...skill,
                    skills: newSkills
                } : skill);
            return {
                ...prevData,
                skills: updatedSkills
            };
        });
    };
    const removeSkill = (title, index)=>{
        setResumeData((prevData)=>{
            const skillType = prevData.skills.find((skillType)=>skillType.title === title);
            const newSkills = [
                ...skillType.skills
            ];
            newSkills.pop();
            const updatedSkills = prevData.skills.map((skill)=>skill.title === title ? {
                    ...skill,
                    skills: newSkills
                } : skill);
            return {
                ...prevData,
                skills: updatedSkills
            };
        });
    };
    const skillType = resumeData.skills.find((skillType)=>skillType.title === title);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "flex-col-gap-2",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                className: "input-title",
                children: title
            }),
            skillType.skills.map((skill, index)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "f-col",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                        type: "text",
                        placeholder: title,
                        name: title,
                        className: "w-full other-input",
                        value: skill,
                        onChange: (e)=>handleSkill(e, index, title)
                    })
                }, index)),
            /*#__PURE__*/ jsx_runtime_.jsx(form_FormButton, {
                size: skillType.skills.length,
                add: ()=>addSkill(title),
                remove: ()=>removeSkill(title)
            })
        ]
    });
};
/* harmony default export */ const form_Skill = (Skill);

;// CONCATENATED MODULE: ./components/form/PersonalInformation.jsx



const PersonalInformation = ({})=>{
    const { resumeData , setResumeData , handleProfilePicture , handleChange  } = (0,external_react_.useContext)(ResumeContext);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "flex-col-gap-2",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                className: "input-title",
                children: "Personal Information"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "grid-4",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                        type: "text",
                        placeholder: "Full Name",
                        name: "name",
                        className: "pi",
                        value: resumeData.name,
                        onChange: handleChange
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                        type: "text",
                        placeholder: "Job Title",
                        name: "position",
                        className: "pi",
                        value: resumeData.position,
                        onChange: handleChange
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                        type: "text",
                        placeholder: "Contact Information",
                        name: "contactInformation",
                        className: "pi",
                        value: resumeData.contactInformation,
                        onChange: handleChange,
                        minLength: "10",
                        maxLength: "15"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                        type: "email",
                        placeholder: "Email",
                        name: "email",
                        className: "pi",
                        value: resumeData.email,
                        onChange: handleChange
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                        type: "text",
                        placeholder: "Address",
                        name: "address",
                        className: "pi",
                        value: resumeData.address,
                        onChange: handleChange
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                        type: "file",
                        name: "profileImage",
                        accept: "image/*",
                        className: "profileInput",
                        onChange: handleProfilePicture,
                        placeholder: "Profile Picture"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const form_PersonalInformation = (PersonalInformation);

;// CONCATENATED MODULE: ./components/form/Summary.jsx



const Summary = ()=>{
    const { resumeData , setResumeData , handleChange  } = (0,external_react_.useContext)(ResumeContext);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "flex-col-gap-2",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                className: "input-title",
                children: "Summary"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "grid-4",
                children: /*#__PURE__*/ jsx_runtime_.jsx("textarea", {
                    placeholder: "Summary",
                    name: "summary",
                    className: "w-full other-input h-40",
                    value: resumeData.summary,
                    onChange: handleChange,
                    maxLength: "500"
                })
            })
        ]
    });
};
/* harmony default export */ const form_Summary = (Summary);

;// CONCATENATED MODULE: ./components/form/Projects.jsx




const Projects = ()=>{
    const { resumeData , setResumeData  } = (0,external_react_.useContext)(ResumeContext);
    const handleProjects = (e, index)=>{
        const newProjects = [
            ...resumeData.projects
        ];
        newProjects[index][e.target.name] = e.target.value;
        setResumeData({
            ...resumeData,
            projects: newProjects
        });
    };
    const addProjects = ()=>{
        setResumeData({
            ...resumeData,
            projects: [
                ...resumeData.projects,
                {
                    title: "",
                    link: "",
                    description: "",
                    keyAchievements: "",
                    startYear: "",
                    endYear: ""
                }
            ]
        });
    };
    const removeProjects = (index)=>{
        const newProjects = [
            ...resumeData.projects
        ];
        newProjects[index] = newProjects[newProjects.length - 1];
        newProjects.pop();
        setResumeData({
            ...resumeData,
            projects: newProjects
        });
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "flex-col-gap-2",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                className: "input-title",
                children: "Projects"
            }),
            resumeData.projects.map((project, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "f-col",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                            type: "text",
                            placeholder: "Project Name",
                            name: "name",
                            className: "w-full other-input",
                            value: project.name,
                            onChange: (e)=>handleProjects(e, index)
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                            type: "text",
                            placeholder: "Link",
                            name: "link",
                            className: "w-full other-input",
                            value: project.link,
                            onChange: (e)=>handleProjects(e, index)
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("textarea", {
                            type: "text",
                            placeholder: "Description",
                            name: "description",
                            className: "w-full other-input h-32",
                            value: project.description,
                            maxLength: "250",
                            onChange: (e)=>handleProjects(e, index)
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("textarea", {
                            type: "text",
                            placeholder: "Key Achievements",
                            name: "keyAchievements",
                            className: "w-full other-input h-40",
                            value: project.keyAchievements,
                            onChange: (e)=>handleProjects(e, index)
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex-wrap-gap-2",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                    type: "date",
                                    placeholder: "Start Year",
                                    name: "startYear",
                                    className: "other-input",
                                    value: project.startYear,
                                    onChange: (e)=>handleProjects(e, index)
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                    type: "date",
                                    placeholder: "End Year",
                                    name: "endYear",
                                    className: "other-input",
                                    value: project.endYear,
                                    onChange: (e)=>handleProjects(e, index)
                                })
                            ]
                        })
                    ]
                }, index)),
            /*#__PURE__*/ jsx_runtime_.jsx(form_FormButton, {
                size: resumeData.projects.length,
                add: addProjects,
                remove: removeProjects
            })
        ]
    });
};
/* harmony default export */ const form_Projects = (Projects);

;// CONCATENATED MODULE: ./components/form/Education.jsx




const Education = ()=>{
    const { resumeData , setResumeData  } = (0,external_react_.useContext)(ResumeContext);
    const handleEducation = (e, index)=>{
        const newEducation = [
            ...resumeData.education
        ];
        newEducation[index][e.target.name] = e.target.value;
        setResumeData({
            ...resumeData,
            education: newEducation
        });
    };
    const addEducation = ()=>{
        setResumeData({
            ...resumeData,
            education: [
                ...resumeData.education,
                {
                    school: "",
                    degree: "",
                    startYear: "",
                    endYear: ""
                }
            ]
        });
    };
    const removeEducation = (index)=>{
        const newEducation = [
            ...resumeData.education
        ];
        newEducation[index] = newEducation[newEducation.length - 1];
        newEducation.pop();
        setResumeData({
            ...resumeData,
            education: newEducation
        });
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "flex-col-gap-2",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                className: "input-title",
                children: "Education"
            }),
            resumeData.education.map((education, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "f-col",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                            type: "text",
                            placeholder: "School",
                            name: "school",
                            className: "w-full other-input",
                            value: education.school,
                            onChange: (e)=>handleEducation(e, index)
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                            type: "text",
                            placeholder: "Degree",
                            name: "degree",
                            className: "w-full other-input",
                            value: education.degree,
                            onChange: (e)=>handleEducation(e, index)
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex-wrap-gap-2",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                    type: "date",
                                    placeholder: "Start Year",
                                    name: "startYear",
                                    className: "other-input",
                                    value: education.startYear,
                                    onChange: (e)=>handleEducation(e, index)
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                    type: "date",
                                    placeholder: "End Year",
                                    name: "endYear",
                                    className: "other-input",
                                    value: education.endYear,
                                    onChange: (e)=>handleEducation(e, index)
                                })
                            ]
                        })
                    ]
                }, index)),
            /*#__PURE__*/ jsx_runtime_.jsx(form_FormButton, {
                size: resumeData.education.length,
                add: addEducation,
                remove: removeEducation
            })
        ]
    });
};
/* harmony default export */ const form_Education = (Education);

;// CONCATENATED MODULE: ./components/form/certification.jsx




const certification_Certification = ()=>{
    const { resumeData , setResumeData  } = (0,external_react_.useContext)(ResumeContext);
    const skillType = "certifications";
    const title = "Certifications";
    const handleSkills = (e, index, skillType)=>{
        const newSkills = [
            ...resumeData[skillType]
        ];
        newSkills[index] = e.target.value;
        setResumeData({
            ...resumeData,
            [skillType]: newSkills
        });
    };
    const addSkill = ()=>{
        setResumeData({
            ...resumeData,
            [skillType]: [
                ...resumeData[skillType],
                ""
            ]
        });
    };
    const removeSkill = (index)=>{
        const newSkills = [
            ...resumeData[skillType]
        ];
        newSkills.splice(-1, 1);
        setResumeData({
            ...resumeData,
            [skillType]: newSkills
        });
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "flex-col-gap-2",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                className: "input-title",
                children: title
            }),
            resumeData[skillType].map((skill, index)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "f-col",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                        type: "text",
                        placeholder: title,
                        name: title,
                        className: "w-full other-input",
                        value: skill,
                        onChange: (e)=>handleSkills(e, index, skillType)
                    })
                }, index)),
            /*#__PURE__*/ jsx_runtime_.jsx(form_FormButton, {
                size: resumeData[skillType].length,
                add: addSkill,
                remove: removeSkill
            })
        ]
    });
};
/* harmony default export */ const certification = (certification_Certification);

;// CONCATENATED MODULE: ./components/utility/DefaultResumeData.jsx
const DefaultResumeData = {
    name: "YOUR NAME",
    position: "Developer",
    contactInformation: "+91XXXXXX",
    email: "your_gmail@gmail.com",
    address: "Your Location",
    profilePicture: "",
    socialMedia: [
        {
            socialMedia: "Github",
            link: "Enter Your Github profile link"
        },
        {
            socialMedia: "LinkedIn",
            link: "Enter Your Linkdin Profile Link"
        },
        {
            socialMedia: "Website",
            link: "Enter Your Website Link"
        }
    ],
    summary: "Resourceful Developer with 11 years of experience in designing and developing user interfaces, testing and training employees. Skilled at utilizing a wide variety of tools and programs to provide effective applications.",
    education: [
        {
            school: "Enter School Name",
            degree: " Degree Name",
            startYear: "Enter start Year",
            endYear: "Enter End year"
        }
    ],
    workExperience: [
        {
            company: "Enter The Name of your company",
            position: "Developer",
            description: "Your Description here",
            keyAchievements: "Enter Your Key Achievments ",
            startYear: "2000-02-14",
            endYear: "2014-02-21"
        },
        {
            company: "Your Company",
            position: "Your Position",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            keyAchievements: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum..",
            startYear: "XX-XX-XXXX",
            endYear: "XX-XX-XXXX"
        },
        {
            company: "Your Company",
            position: "Your Position",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            keyAchievements: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum..",
            startYear: "XX-XX-XXXX",
            endYear: "XX-XX-XXXX"
        }
    ],
    projects: [],
    skills: [
        {
            title: "Technical Skills",
            skills: [
                "Skill1",
                "Skill2",
                "Skill3",
                "Skill4",
                "Skill5",
                "Skill6",
                "Skill7",
                "Skill8",
                "Skill9"
            ]
        },
        {
            title: "Soft Skills",
            skills: [
                "Skill1",
                "Skill2",
                "Skill3",
                "Skill4",
                "Skill5"
            ]
        },
        {
            title: "Additional Skills",
            skills: [
                "Skill1",
                "Skill2",
                "Skill3"
            ]
        }
    ],
    languages: [
        "English",
        "Hindi"
    ],
    certifications: [
        "Your Certification 1",
        "Your Certification 2"
    ]
};
/* harmony default export */ const utility_DefaultResumeData = (DefaultResumeData);

;// CONCATENATED MODULE: ./pages/builder.jsx

















const ResumeContext = /*#__PURE__*/ (0,external_react_.createContext)(utility_DefaultResumeData);
// server side rendering false
const Print = dynamic_default()(null, {
    loadableGenerated: {
        modules: [
            "builder.jsx -> " + "../components/utility/WinPrint"
        ]
    },
    ssr: false
});
function Builder(props) {
    // resume data
    const [resumeData, setResumeData] = (0,external_react_.useState)(utility_DefaultResumeData);
    // form hide/show
    const [formClose, setFormClose] = (0,external_react_.useState)(false);
    // profile picture
    const handleProfilePicture = (e)=>{
        const file = e.target.files[0];
        if (file instanceof Blob) {
            const reader = new FileReader();
            reader.onload = (event)=>{
                setResumeData({
                    ...resumeData,
                    profilePicture: event.target.result
                });
            };
            reader.readAsDataURL(file);
        } else {
            console.error("Invalid file type");
        }
    };
    const handleChange = (e)=>{
        setResumeData({
            ...resumeData,
            [e.target.name]: e.target.value
        });
        console.log(resumeData);
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ResumeContext.Provider, {
            value: {
                resumeData,
                setResumeData,
                handleProfilePicture,
                handleChange
            },
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(Meta, {
                    title: "AlphaResume | Get hired with an ATS-optimized resume",
                    description: "AlphaResume is a cutting-edge resume builder that helps job seekers create a professional, ATS-friendly resume in minutes. Our platform uses the latest technology to analyze and optimize your resume for maximum visibility and success with applicant tracking systems. Say goodbye to frustration and wasted time spent on manual resume formatting. Create your winning resume with ATSResume today and get noticed by employers.",
                    keywords: "ATS-friendly, Resume optimization, Keyword-rich resume, Applicant Tracking System, ATS resume builder, ATS resume templates, ATS-compliant resume, ATS-optimized CV, ATS-friendly format, ATS resume tips, Resume writing services, Career guidance, Job search in India, Resume tips for India, Professional resume builder, Cover letter writing, Interview preparation, Job interview tips, Career growth, Online job applications, resume builder, free resume builder, resume ats, best free resume builder, resume creator, resume cv, resume design, resume editor, resume maker"
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "f-col gap-4 md:flex-row justify-evenly max-w-7xl md:mx-auto md:h-screen",
                    children: [
                        !formClose && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                            className: "p-4 bg-fuchsia-600 exclude-print md:max-w-[40%] md:h-screen md:overflow-y-scroll",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(form_LoadUnload, {}),
                                /*#__PURE__*/ jsx_runtime_.jsx(form_PersonalInformation, {}),
                                /*#__PURE__*/ jsx_runtime_.jsx(form_SocialMedia, {}),
                                /*#__PURE__*/ jsx_runtime_.jsx(form_Summary, {}),
                                /*#__PURE__*/ jsx_runtime_.jsx(form_Education, {}),
                                /*#__PURE__*/ jsx_runtime_.jsx(form_WorkExperience, {}),
                                /*#__PURE__*/ jsx_runtime_.jsx(form_Projects, {}),
                                resumeData.skills.map((skill, index)=>/*#__PURE__*/ jsx_runtime_.jsx(form_Skill, {
                                        title: skill.title
                                    }, index)),
                                /*#__PURE__*/ jsx_runtime_.jsx(form_Language, {}),
                                /*#__PURE__*/ jsx_runtime_.jsx(certification, {})
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(preview_Preview, {})
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(form_FormCP, {
                    formClose: formClose,
                    setFormClose: setFormClose
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(Print, {})
            ]
        })
    });
}



/***/ })

};
;